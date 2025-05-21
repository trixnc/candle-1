
import React, { ReactNode } from 'react';
import './globals.css';
import { Navbar, Footer } from './components/Navbar';

export const metadata = {
  title: "IC Candle Clone",
  description: "Candle is a platform that allows you to create and share your own custom candles. You can choose from a variety of scents, colors, and designs to create the perfect candle for any occasion.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#ffffff]">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow">
          {/* {/* <Features /> */}
          {/* // <Pricing /> */}
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}