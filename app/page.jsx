import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import { fetchTable } from '@/lib/supabase';

export const revalidate = 60; // refresh Supabase data every 60s

export default async function Home() {
  const [projects, certificates] = await Promise.all([fetchTable('projects'), fetchTable('certificates', 'date')]);
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects items={projects} />
        <Certificates items={certificates} />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-soft">© {new Date().getFullYear()} Nama Kamu</footer>
    </>
  );
}
