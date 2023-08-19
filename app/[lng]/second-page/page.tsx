import Link from 'next/link';

interface Props {
  params: { lng: string };
}

export default function Page({ params: { lng } }: Props) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
}
