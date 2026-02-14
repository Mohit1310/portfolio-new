import type { Metadata } from 'next';
import { IBM_Plex_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: `Mohit Dayma`,
  description: 'Mohit Dayma portfolio created with the help of Frontend Tribe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          plexSans.variable,
          cormorant.variable,
          'bg-[var(--bg)] text-[var(--text-primary)] antialiased font-sans'
        )}
      >
        {children}
      </body>
    </html>
  );
}
