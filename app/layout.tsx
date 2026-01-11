import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ayush Shivhare | Full Stack Developer',
  description:
    'Ayush Shivhare is a software engineer specializing in full stack web development with expertise in Next.js, React, and Node.js. Passionate about clean design, solid architecture, and continuous learning.',
  keywords: [
    'Ayush Shivhare',
    'Full Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Software Engineer',
  ],
  authors: [{ name: 'Ayush Shivhare' }],
  creator: 'Ayush Shivhare',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ayush Shivhare | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, React, and Node.js. Building modern web applications with clean design and solid architecture.',
    siteName: 'Ayush Shivhare Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Shivhare | Full Stack Developer',
    description: 'Full Stack Developer specializing in Next.js, React, and Node.js.',
    creator: '@AyushShivhare79',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
