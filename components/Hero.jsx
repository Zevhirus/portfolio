'use client';
import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const roles = ['Frontend Developer', 'UI/UX Designer', 'Web Enthusiast'];
const skills = ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'TypeScript', 'Figma', 'Node.js', 'PostgreSQL'];
const socials = [[Github, 'https://github.com/', 'GitHub'], [Linkedin, 'https://linkedin.com/', 'LinkedIn'], [Instagram, 'https://instagram.com/', 'Instagram']];

function useTypewriter(words) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let w = 0, i = 0, del = false, t;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      let wait = del ? 40 : 90;
      if (!del && i === word.length) { del = true; wait = 1400; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 1500);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);
  const rings = useRef(null);
  const photo = useRef(null);

  // Scroll parallax: rings and photo drift at different speeds
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (rings.current) rings.current.style.transform = `translateY(${y * 0.12}px)`;
      if (photo.current) photo.current.style.transform = `translateY(${y * -0.06}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const d = (ms) => ({ animationDelay: `${ms}ms` });

  return (
    <section id="beranda" className="scroll-mt-20 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="rise text-teal" style={d(100)}>Hai! Saya</p>
          <h1 className="rise mt-2 text-4xl font-extrabold leading-tight md:text-6xl" style={d(250)}>
            Nama Kamu,
            <span className="mt-1 block min-h-[1.2em] text-accent">{role}<span className="caret" aria-hidden /></span>
          </h1>
          <p className="rise mt-5 max-w-md text-soft" style={d(450)}>Saya membangun website yang cepat, responsif, dan nyaman dipakai. Ganti teks ini dengan bio singkatmu.</p>
          <div className="rise mt-8 flex flex-wrap items-center gap-4" style={d(650)}>
            <a href="#kontak" className="rounded-full bg-accent px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-accent/40">Get in Touch</a>
            {socials.map(([Icon, href, label]) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-card transition hover:-translate-y-1 hover:bg-accent hover:text-white"><Icon size={18} /></a>
            ))}
          </div>
        </div>

        <div className="pop relative mx-auto grid aspect-square w-full max-w-md place-items-center" style={d(300)}>
          <div ref={rings} className="absolute inset-0 will-change-transform">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/20" />
            <div className="absolute inset-8 animate-spin-rev rounded-full border border-dashed border-accent/50" />
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-accent/40 via-card to-teal/30" />
            <div className="absolute right-4 top-10 h-6 w-6 animate-float rotate-12 rounded-md bg-teal/70" />
            <div className="absolute bottom-12 left-2 h-4 w-4 animate-float-delay rounded-full bg-pink-400/80" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={photo} src="/profile.png" alt="Foto profil" className="relative z-10 h-4/5 w-4/5 rounded-full object-cover will-change-transform" />
        </div>
      </div>

      <div className="border-y border-white/10 bg-card/40 py-5" aria-label="Skill">
        <div className="flex w-max animate-marquee gap-12 text-soft hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((s, i) => <span key={i} className="whitespace-nowrap text-lg font-semibold transition hover:text-white">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
