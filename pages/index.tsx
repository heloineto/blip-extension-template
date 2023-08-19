import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export default function Home() {
  return <main className={nunitoSans.className} />;
}
