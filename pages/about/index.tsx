import Head from 'next/head';
import Link from 'next/link'


const About = () => {
  return (
    <div>

      <Head>
        <title>About</title>
      </Head>

      <section>
          <h5>A bulleted list of things Ive done</h5>
          <p>*casino
          *ted talk
          *music
          </p>
      </section>

      <section>
          <h5>Media Clips</h5>
          <p>video, articles, etc
          </p>
      </section>

      <section>
        <Link href={`/`}>Home</Link>
      </section>

    </div>
  );
};
export default About;
