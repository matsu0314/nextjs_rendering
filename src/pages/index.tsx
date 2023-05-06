import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js page type</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next.jsページの種類</h1>
        <ul>
          <li>
            <Link href="/ssr">SSRのページに移動</Link>
          </li>
          <li>
            <Link href="/ssg">SSGのページに移動</Link>
          </li>
          <li>
            <Link href="/csr">CSRのページに移動</Link>
          </li>
          <li>
            <Link href="/isr">ISRのページに移動</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
