import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name - Cybersecurity Portfolio',
  description: 'Cybersecurity student, ethical hacker, and security enthusiast. Exploring the intersection of code and security.',
  keywords: ['cybersecurity', 'security', 'hacking', 'portfolio', 'ethical hacker', 'penetration testing'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Your Name - Cybersecurity Portfolio',
    description: 'Cybersecurity student exploring code and security',
    siteName: 'Your Name Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Cybersecurity Portfolio',
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
