import Head from 'next/head';
import Link from 'next/link'


const Contact = () => {
  return (
    <div>

      <Head>
        <title>Contact Matthew Nolan</title>
      </Head>

      <section>
        <h4 className="basicHeadline text-center">Contact Matthew</h4>
        <p className="text-center">The best way to contact Matthew is to send a DM on his <a target="_blank" href="https://twitter.com/ImMatthewNolan">Twitter</a>.
          <br /><br />
        </p>
      </section>      

      <section>
        <Link href={`/`}><a className="btn btn-lg btn-link homeBtn"><i className="fa fa-arrow-circle-left fa-1x"></i>Home</a></Link>
      </section>


    </div>
  );
};
export default Contact;
