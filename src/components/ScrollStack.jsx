import { useEffect, useRef } from 'react';

const MOBILE = '(max-width: 640px)';
const SCALE_STEP = 0.045; // how much a card shrinks for each card stacked on top of it
const MAX_DEPTH = 4;

// Mobile-only "scroll stack": each child sticks near the top (CSS position: sticky, so the
// browser keeps it smooth on iOS and Android) and the next card slides over it. Cards that
// are covered shrink slightly, giving a stacked-deck look. Above 640px it renders as the
// normal grid passed in via className. If any card is taller than the screen (it could not be
// read before the next one covers it), that list scrolls normally instead.
export default function ScrollStack({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const mq = window.matchMedia(MOBILE);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cards = [];
    let stickTops = [];
    let heights = [];
    let raf = 0;
    let active = false;
    let tall = false; // a card taller than the screen can't be read while stuck, so that list scrolls normally
    // re-measure when images/fonts change card heights
    const ro = 'ResizeObserver' in window ? new ResizeObserver(() => active && onResize()) : null;

    const measure = () => {
      cards = [...root.children];
      lastT = [];
      lastV = [];
      cards.forEach((card, i) => card.style.setProperty('--i', i));
      stickTops = cards.map((card) => parseFloat(getComputedStyle(card).top) || 0);
      heights = cards.map((card) => card.offsetHeight); // offsetHeight ignores transforms
    };

    // last values written per card, so the DOM is only touched when something changes
    let lastT = [];
    let lastV = [];

    const tooTall = () => {
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 70;
      const room = window.innerHeight - header - 48;
      return heights.some((h) => h > room);
    };

    // stack the list, measure it, and fall back to normal scrolling if any card won't fit on screen
    const layout = () => {
      root.classList.add('is-stacked');
      measure();
      tall = tooTall();
      if (tall) {
        root.classList.remove('is-stacked');
        cards.forEach((card) => {
          card.style.transform = '';
          card.style.visibility = '';
        });
      }
    };

    const update = () => {
      raf = 0;
      if (tall) return;
      const n = cards.length;
      const tops = cards.map((card) => card.getBoundingClientRect().top);
      const scales = new Array(n);
      for (let i = 0; i < n; i++) {
        let depth = 0;
        for (let j = i + 1; j < n && depth < MAX_DEPTH; j++) {
          // 0 while card j is a full card-height away from its stick point, 1 once it has stuck
          const p = 1 - (tops[j] - stickTops[j]) / heights[i];
          depth += p <= 0 ? 0 : p >= 1 ? 1 : p;
        }
        scales[i] = 1 - Math.min(depth, MAX_DEPTH) * SCALE_STEP;
      }
      for (let i = 0; i < n; i++) {
        // A card fully covered by a later card stuck at the same spot can't be seen, so stop painting
        // it. Long lists (32 projects) otherwise keep dozens of image layers alive, which makes
        // phones stutter and drop tiles (blank images) when GPU memory runs out.
        let buried = false;
        for (let j = i + 1; j < n; j++) {
          if (tops[j] - stickTops[j] > 0.5) break; // card j (and every later one) hasn't stuck yet
          if (stickTops[j] <= stickTops[i] + 0.5 && heights[j] >= heights[i] * scales[i] - 1) {
            buried = true;
            break;
          }
        }
        const t = scales[i] < 0.9995 ? `scale(${scales[i].toFixed(4)})` : '';
        const v = buried ? 'hidden' : '';
        if (t !== lastT[i]) cards[i].style.transform = lastT[i] = t;
        if (v !== lastV[i]) cards[i].style.visibility = lastV[i] = v;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      layout();
      onScroll();
    };

    const start = () => {
      if (active) return;
      active = true;
      layout();
      if (reduceMotion.matches) return; // keep the sticky stacking, skip the scaling
      ro?.observe(root);
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
      update();
    };

    const stop = () => {
      if (!active) return;
      active = false;
      tall = false;
      root.classList.remove('is-stacked');
      ro?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      raf = 0;
      [...root.children].forEach((card) => {
        card.style.transform = '';
        card.style.visibility = '';
        card.style.removeProperty('--i');
      });
    };

    const sync = () => (mq.matches ? start() : stop());
    sync();
    mq.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      stop();
    };
  }, []);

  return (
    <Tag ref={ref} className={`stack ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
