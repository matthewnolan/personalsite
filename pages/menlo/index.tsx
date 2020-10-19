import Head from 'next/head';
import Link from 'next/link'


const Menlo = () => {
  return (
    <div style={{ width: '100%' }}>

      <Head>
        <title>Menlo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href={`/`}>TODO Home</Link>
        Menlo Stuff
      </div>

    </div>
  );
};
export default Menlo;
