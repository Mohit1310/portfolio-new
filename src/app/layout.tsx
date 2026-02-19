import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohit Dayma',
  description: 'Frontend portfolio of Mohit Dayma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-(--bg) font-sans text-(--text-primary) antialiased">
        {children}
      </body>
    </html>
  );
}
