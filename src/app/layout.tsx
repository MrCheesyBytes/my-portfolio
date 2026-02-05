import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Danindu Bataduwage - Cybersecurity Portfolio',
  description: 'Cybersecurity student, ethical hacker, and security enthusiast. Exploring the intersection of code and security.',
  keywords: ['cybersecurity', 'security', 'hacking', 'portfolio', 'ethical hacker', 'penetration testing'],
  authors: [{ name: 'Danindu Bataduwage' }],
  creator: 'Danindu Bataduwage',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Danindu Bataduwage - Cybersecurity Portfolio',
    description: 'Cybersecurity student exploring code and security',
    siteName: 'Danindu Bataduwage Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danindu Bataduwage - Cybersecurity Portfolio',
    description: 'Cybersecurity student exploring code and security'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
