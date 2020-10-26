import Head from 'next/head';
import Link from 'next/link'


const About = () => {
  return (
    <div style={{ width: '100%' }}>

      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href={`/`}>TODO Home</Link>
        About Stuff
      </div>

    </div>
  );
};
export default About;
