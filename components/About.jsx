import Section from './Section';
import Reveal from './Reveal';
import CountUp from './CountUp';

const stats = [[25, '+', 'Proyek selesai'], [3, ' thn', 'Pengalaman'], [98, '%', 'Klien puas']];
const gallery = ['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg']; // or load from a Supabase `photos` table

export default function About() {
  return (
    <Section id="tentang" title="Tentang Saya">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal from="left">
          <div className="overflow-hidden rounded-3xl bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about.jpg" alt="Potret" className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        </Reveal>
        <div>
          <Reveal from="right">
            <p className="text-soft">Ceritakan latar belakang, keahlian, dan cara kerjamu di sini. Tulis dengan bahasamu sendiri, singkat dan spesifik.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map(([n, suffix, l], i) => (
              <Reveal key={l} from="zoom" delay={150 + i * 130}>
                <div className="rounded-2xl bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20">
                  <div className="text-2xl font-bold text-teal md:text-3xl"><CountUp to={n} suffix={suffix} /></div>
                  <div className="mt-1 text-sm text-soft">{l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((src, i) => (
          <Reveal key={src} from="zoom" delay={i * 150} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
            <div className="overflow-hidden rounded-2xl bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Galeri ${i + 1}`} className="aspect-video w-full object-cover transition duration-500 hover:scale-110" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
