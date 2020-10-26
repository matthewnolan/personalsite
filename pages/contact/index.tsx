import Head from 'next/head';
import Link from 'next/link'


const Contact = () => {
  return (
    <div>

      <Head>
        <title>Contact</title>
      </Head>

      <section>
        <Link href={`/`}>Home</Link>
      </section>


    </div>
  );
};
export default Contact;
