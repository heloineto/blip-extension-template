import { dir } from 'i18next';
import type { ReactNode } from 'react';

const languages = ['en', 'pt', 'es'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface Props {
  children: ReactNode;
  params: { lng: string };
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
