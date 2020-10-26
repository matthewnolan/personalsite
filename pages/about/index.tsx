import Head from 'next/head';
import Link from 'next/link'


const About = () => {
  return (
    <div>

      <Head>
        <title>About</title>
      </Head>

      <div className="row justify-content-sm-center">
        <div className="col col-sm-8">
          <section>
            <p>

              A bulleted list of things Ive done

              *built asino
              *ted talk
              *co-founded record label DTM

              <Link href={`/`}>A Link</Link>

            </p>
          </section>
        </div>
      </div>

    </div>
  );
};
export default About;
