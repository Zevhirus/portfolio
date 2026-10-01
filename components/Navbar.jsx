'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [['Beranda', '#beranda'], ['Tentang / Foto', '#tentang'], ['Proyek', '#proyek'], ['Sertifikat', '#sertifikat'], ['Kontak', '#kontak']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#beranda');

  // Highlight the link of the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(([, h]) => { const el = document.querySelector(h); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Utama">
        <a href="#beranda" className="text-lg font-bold">Nama<span className="text-teal">.</span></a>
        <ul className="hidden gap-8 text-sm text-soft md:flex">
          {links.map(([l, h]) => <li key={h}>
              <a href={h} className={`relative py-1 transition hover:text-white ${active === h ? 'text-white' : ''}`}>
                {l}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded bg-teal transition-transform duration-300 ${active === h ? 'scale-x-100' : 'scale-x-0'}`} />
              </a>
            </li>)}
        </ul>
        <a href="#kontak" className="hidden transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/40 rounded-full bg-accent px-5 py-2 text-sm font-semibold hover:bg-blue-500 md:block">Hubungi Saya</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-white/10 px-5 py-3 md:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2 text-soft">{l}</a></li>)}
          <li><a href="#kontak" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-accent py-2 text-center font-semibold">Hubungi Saya</a></li>
        </ul>
      )}
    </header>
  );
}
