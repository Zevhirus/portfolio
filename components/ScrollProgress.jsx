'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={bar} className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-teal to-pink-400" aria-hidden />;
}
