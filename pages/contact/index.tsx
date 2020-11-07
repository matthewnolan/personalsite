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

          Email: matthew @ menlo dot one
          Twitter: DMs always welcome
          <strike>Telegram</strike>: too full of spam
          <strike>LinkedIn</strike>: too full of spam

          OTHER

          An ETH address for me: 
          My ETH domain:
          PGP
        </p>
      </section>      

      <section>
        <Link href={`/`}><a className="btn btn-lg btn-link homeBtn"><i className="fa fa-arrow-circle-left fa-1x"></i>Home</a></Link>
      </section>


    </div>
  );
};
export default Contact;
