import Head from 'next/head';
import Link from 'next/link'


const Contact = () => {
  return (
    <div>

      <Head>
        <title>Contact</title>
      </Head>

      <section>
        <h4 className="basicHeadline text-center">Contact</h4>
        <p className="text-center">The best way to contact Matthew is to send a DM on his <a target="_blank" href="https://twitter.com/ImMatthewNolan">Twitter</a>.
          <br /><br />
          <Link href={`/`}>Home</Link>
        </p>
      </section>      

      <section>
      </section>


    </div>
  );
};
export default Contact;
