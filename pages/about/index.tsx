import Head from 'next/head';
import Link from 'next/link'


const About = () => {
  return (
    <div>

      <Head>
        <title>About</title>
      </Head>



      <section>
        <Link href={`/`}>Home</Link>
      </section>

    </div>
  );
};
export default About;
