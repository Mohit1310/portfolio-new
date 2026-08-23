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
    <html
      lang="en"
      className="scroll-smooth"
      style={{ colorScheme: 'dark' }}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
