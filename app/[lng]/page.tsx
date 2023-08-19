import Link from 'next/link';

interface Props {
  params: { lng: string };
}

export default function Page({ params: { lng } }: Props) {
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>second page</Link>
    </>
  );
}
