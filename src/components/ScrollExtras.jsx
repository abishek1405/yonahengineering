import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const RING = 2 * Math.PI * 21; // circumference of the back-to-top progress ring (r = 21)

// Card types that get the cursor spotlight (desktop / fine pointers only).
const SPOTLIGHT = '.service-card, .workflow-step, .value-card, .project-card, .team-card, .cert-card, .other-service, .mv-card, .sd-equip, .career-perk, .role-card';

// Site-wide finishing touches driven by one scroll listener:
// a reading-progress bar, a back-to-top button with a progress ring, and the card spotlight.
export default function ScrollExtras() {
  const barRef = useRef(null);
  const ringRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    let shown = false;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      if (ringRef.current) ringRef.current.style.strokeDashoffset = (RING * (1 - p)).toFixed(2);
      const show = window.scrollY > 600;
      if (show !== shown && btnRef.current) {
        shown = show;
        btnRef.current.classList.toggle('is-visible', show);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Cursor spotlight: one delegated listener writes the pointer position onto the hovered card.
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (e) => {
      const card = e.target.closest?.(SPOTLIGHT);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={barRef} />
      </div>
      <button
        ref={btnRef}
        type="button"
        className="to-top-fab"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="fab-ring" viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="21" className="ring-track" />
          <circle ref={ringRef} cx="24" cy="24" r="21" className="ring-fill" strokeDasharray={RING} strokeDashoffset={RING} />
        </svg>
        <ArrowUp size={18} />
      </button>
    </>
  );
}
