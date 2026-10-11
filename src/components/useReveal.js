import { useEffect } from 'react';

// Fades sections in as they scroll into view. Content is visible by default;
// the hidden state only applies once JS is running (html.js-reveal).
export function useReveal(key) {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );
    const t = setTimeout(
      () => document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => io.observe(el)),
      30
    );
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [key]);
}
