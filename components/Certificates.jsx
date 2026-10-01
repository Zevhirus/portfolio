import { BadgeCheck } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';

const fmt = (d) => (d ? new Date(d).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : '');

export default function Certificates({ items = [] }) {
  return (
    <Section id="sertifikat" title="Sertifikat">
      {items.length === 0 ? (
        <p className="rounded-2xl bg-card p-8 text-soft">Belum ada sertifikat. Tambahkan baris di tabel <code>certificates</code>.</p>
      ) : (
        <Reveal from="right"><ul className="flex snap-x gap-5 overflow-x-auto pb-4">
          {items.map((c) => (
            <li key={c.id} className="group w-72 shrink-0 snap-start overflow-hidden rounded-3xl bg-card transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="overflow-hidden"><img src={c.image_url} alt={c.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110" /></div>
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-soft">{c.issuer} · {fmt(c.date)}</p>
                {c.certificate_link && (
                  <a href={c.certificate_link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
                    <BadgeCheck size={16} />Lihat kredensial
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul></Reveal>
      )}
    </Section>
  );
}
