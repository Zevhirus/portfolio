import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';

export default function Projects({ items = [] }) {
  return (
    <Section id="proyek" title="Proyek Terbaru" subtitle="Beberapa pekerjaan yang saya bangun baru-baru ini.">
      {items.length === 0 ? (
        <p className="rounded-2xl bg-card p-8 text-soft">Belum ada proyek. Tambahkan baris di tabel <code>projects</code> di Supabase.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 120} className="h-full"><article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="overflow-hidden"><img src={p.image_url} alt={p.title} loading="lazy" className="aspect-video w-full object-cover transition duration-500 group-hover:scale-110" /></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-soft">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags ?? []).map((t) => <span key={t} className="rounded-full bg-bg px-3 py-1 text-xs text-teal">{t}</span>)}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  {p.demo_link && <a href={p.demo_link} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-semibold text-accent hover:underline"><ExternalLink size={15} />Demo</a>}
                  {p.github_link && <a href={p.github_link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-soft hover:text-white"><Github size={15} />Kode</a>}
                </div>
              </div>
            </article></Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
