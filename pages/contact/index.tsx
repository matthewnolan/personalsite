import Head from 'next/head';
import Link from 'next/link'


const Contact = () => {
  return (
    <div>

      <Head>
        <title>Contact</title>
      </Head>

      <div className="row justify-content-sm-center">
        <div className="col col-sm-8">
          <section>
            <p>
              Contact 

              <Link href={`/`}>A Link</Link>

            </p>
          </section>
        </div>
      </div>

    </div>
  );
};
export default Contact;
