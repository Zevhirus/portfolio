import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata = { title: 'Nama Kamu — Portfolio', description: 'Portofolio personal: proyek, sertifikat, dan kontak.' };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
