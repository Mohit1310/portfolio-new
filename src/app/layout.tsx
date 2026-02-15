import type { Metadata } from 'next';
import { Prata, Work_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const prata = Prata({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
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
          workSans.variable,
          prata.variable,
          'bg-[var(--bg)] text-[var(--text-primary)] antialiased font-sans'
        )}
      >
        {children}
      </body>
    </html>
  );
}
