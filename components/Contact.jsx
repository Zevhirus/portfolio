'use client';
import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { supabase } from '@/lib/supabase';

const field = 'w-full rounded-xl border border-white/10 bg-bg px-4 py-3 outline-none focus:border-accent';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const row = { name: f.name.value.trim(), email: f.email.value.trim(), message: f.message.value.trim() };
    if (!supabase) return setStatus('error');
    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert(row);
    if (error) return setStatus('error');
    f.reset();
    setStatus('ok');
  }

  return (
    <Section id="kontak" title="Hubungi Saya" subtitle="Punya proyek atau pertanyaan? Kirim pesan, saya balas lewat email.">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal from="left"><div className="space-y-4 text-soft">
          <p className="flex items-center gap-3"><Mail className="text-teal" size={20} />email@kamu.com</p>
          <p className="flex items-center gap-3"><MapPin className="text-teal" size={20} />Makassar, Indonesia</p>
        </div></Reveal>
        <Reveal from="right" delay={150}><form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-card p-6">
          <input name="name" required placeholder="Nama" aria-label="Nama" className={field} />
          <input name="email" type="email" required placeholder="Email" aria-label="Email" className={field} />
          <textarea name="message" required rows={5} placeholder="Pesan" aria-label="Pesan" className={field} />
          <button disabled={status === 'sending'} className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-accent/40 disabled:opacity-60">
            <Send size={16} />{status === 'sending' ? 'Mengirim…' : 'Kirim pesan'}
          </button>
          <p role="status" className="text-sm">
            {status === 'ok' && <span className="text-teal">Pesan terkirim. Terima kasih!</span>}
            {status === 'error' && <span className="text-pink-400">Pesan gagal terkirim. Periksa koneksi dan konfigurasi Supabase, lalu coba lagi.</span>}
          </p>
        </form></Reveal>
      </div>
    </Section>
  );
}
