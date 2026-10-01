'use client';
import { useEffect, useRef, useState } from 'react';

const dir = { up: '0px,40px', down: '0px,-40px', left: '-48px,0px', right: '48px,0px', zoom: '0px,0px' };

// Fades/slides children in once when they scroll into view.
export default function Reveal({ children, from = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${from === 'zoom' ? 'reveal-zoom' : ''} ${shown ? 'in' : ''} ${className}`}
      style={{ '--t': dir[from], transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
