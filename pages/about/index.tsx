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
          <p>*built asino
          *ted talk
          *co-founded record label DTM
          <Link href={`/`}>A Link</Link>
          </p>
      </section>

      <section>
          <h5>Media Clips</h5>
          <p>video, articles, etc
          </p>
      </section>

    </div>
  );
};
export default About;
