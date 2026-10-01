import Reveal from './Reveal';

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <span className="line-grow mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-accent to-teal" />
        {subtitle && <p className="mt-4 max-w-xl text-soft">{subtitle}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
