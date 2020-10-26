import Head from 'next/head';
import Link from 'next/link'


const Contact = () => {
  return (
    <div>

      <Head>
        <title>Contact</title>
      </Head>

      <section>
        <p>
          Contact 
          <Link href={`/`}>A Link</Link>
        </p>
      </section>


    </div>
  );
};
export default Contact;
