import Head from 'next/head';
import Link from 'next/link'


const Contact = () => {
  return (
    <div>

      <Head>
        <title>Contact Matthew Nolan</title>
      </Head>


<section>
  <div className="text-center basicHeadline">
    <h1 className="h3">Contact Matthew</h1>
  </div>
</section>
<section>

  <ul>
    <li>Email - the best way to contact me: <b>matthew at menlo dot one</b></li>
    <li>Keybase: <a target="_blank" href="https://keybase.io/matthewnolan">matthewnolan</a></li>
    <li>Twitter: <a target="_blank" href="https://twitter.com/ImMatthewNolan">@ImMatthewNolan</a></li>
    <br />
    <li><del>Telegram</del>: too full of spam</li>
    <li><del>LinkedIn</del>: too full of spam</li>
  </ul>

</section>

<section>
  <h2 className="h4">Other</h2>
  <ul>
    <li>ENS Address: <a target="_blank" href="https://matthewnolan.eth">matthewnolan.eth</a></li>
    <li>END Address points here: <a target="_blank" href="https://etherscan.io/address/0x2a406639ad1a4b5d7ecbdeaaff10539097347076">0x2a406639ad1a4b5d7ecbdeaaff10539097347076</a></li>
  </ul>
</section>


          
    

      <section>
        <Link href={`/`}><a className="btn btn-lg btn-link homeBtn"><i className="fa fa-arrow-circle-left fa-1x"></i>Home</a></Link>
      </section>


    </div>
  );
};
export default Contact;
