import Head from 'next/head';
import Link from 'next/link'


const About = () => {
  return (
    <div>

      <Head>
        <title>About Matthew Nolan</title>
      </Head>

      <section>
        <div className="text-center basicHeadline">
          <h1 className="h3">About Matthew Nolan</h1>

          <h2 className="h4">Awards &amp; Honors</h2>
          <p>
            <ul>
              <li>Webby</li>
              <li>Fast Company</li>
            </ul>
          </p>


          <h2 className="h4">Speaking, Interviews, &amp; Podcasts</h2>
          
          <p className="embed-container hidden">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/M-SE6Fm6PGU" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </p>

        </div>



      <section>
        <Link href={`/`}>Home</Link>
      </section>

    </div>
  );
};
export default About;
