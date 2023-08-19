import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import Header from './components/header';
import './globals.css';
import './lib/setup/blip-ds';
import './lib/setup/fonts';
import './lib/setup/i18n';
import './lib/setup/iframe';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blip Extension',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/blip.svg" />
      </head>
      <body className={nunitoSans.className}>
        <div className="flex h-screen flex-col overflow-auto px-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
