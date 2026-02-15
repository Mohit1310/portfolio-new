import type { Metadata } from 'next';
<<<<<<< Updated upstream
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
=======
import { Prata, Work_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const prata = Prata({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans'
=======
          workSans.variable,
          prata.variable,
          'bg-[var(--bg)] text-[var(--text-primary)] antialiased font-sans'
>>>>>>> Stashed changes
        )}
      >
        {children}
      </body>
    </html>
  );
}
