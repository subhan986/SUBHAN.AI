import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Loader from '@/components/loader';

export const metadata: Metadata = {
  title: 'Subhan.AI | Developer ✦ AI Builder ✦ Visual Thinker',
  description: 'Personal portfolio of Muhammad Subhan, a 15-year-old developer and AI builder from Faisalabad, Pakistan, crafting meaningful digital experiences.',
  openGraph: {
    title: 'Subhan.AI | Developer ✦ AI Builder ✦ Visual Thinker',
    description: 'Personal portfolio of Muhammad Subhan, a 15-year-old developer and AI builder from Faisalabad, Pakistan, crafting meaningful digital experiences.',
    url: 'https://subhan-ai.com', // Replace with actual URL
    siteName: 'Subhan.AI',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with an actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subhan.AI | Developer ✦ AI Builder ✦ Visual Thinker',
    description: 'Personal portfolio of Muhammad Subhan, a 15-year-old developer and AI builder from Faisalabad, Pakistan, crafting meaningful digital experiences.',
    images: ['https://placehold.co/1200x630.png'], // Replace with an actual OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Loader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
