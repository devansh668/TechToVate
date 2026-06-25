import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wanderlust Travel Agency | Discover Amazing Places',
  description: 'Custom travel packages, unforgettable experiences, and memories that last a lifetime. Book flights, hotels, and activities worldwide.',
  keywords: 'travel agency, flights booking, hotel booking, holiday packages, wanderlust, santorini travel, tour guide',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
