import Head from 'next/head';
import Link from 'next/link'
import { loadBlogPosts } from '../../loader';

const About = () => {
  return (
    <div>

      <Head>
        <title>About Matthew Nolan</title>
      </Head>



<section>
  <div className="text-center basicHeadline">
    <h1 className="h3">About Matthew Nolan</h1>
    <h2 className="h5">Awards, Talks, Interviews, Other Stuff</h2>
  </div>
</section>



<section className="">
  <div className="row">

    <div className="col-md-12 col-lg-6 mb-5">
      <img src="/images/matthew-nolan-app-blockchain-speaker.png" 
        alt="Matthew Nolan Blockchain Speaker"
        className="img-fluid"
      />
      <h2 className="h4 mt-4">Contact</h2>
      <ul className="list-inline">
        <li>Email - the best way to contact me: <b>matthew at menlo dot one</b></li>
        <li>Twitter: <a target="_blank" href="https://twitter.com/ImMatthewNolan">@ImMatthewNolan</a></li>
        <li>ENS Address: <a target="_blank" href="https://matthewnolan.eth">matthewnolan.eth</a></li>
      </ul>
    </div>

    <div className="col-md-12 col-lg-6">

      <h2 className="h4">Speaking Engagements</h2>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="https://www.ted.com/talks/matthew_nolan_world_peace_one_swipe_at_a_time" target="_blank">
        TED: World Peace, one swipe at a time, New York City 
        </a></li>

        <li><Link href={`/blog/ted-talk/`}>TED: Blog Post About TED Residency</Link></li>

        <li><a href="https://theblockchainday.com/team-member/matthew-nolan/" target="_blank">
        Paris Blockchain Day, Paris 
        </a></li>

        <li><a href="https://youtu.be/61Hr9PPaZKo" target="_blank">
        Token Sky, Tokyo 
        </a></li>

        <li><a href="https://coinagenda.com/" target="_blank">
        Coin Agenda, Singapore 
        </a></li>

        <li><a href="https://youtu.be/CxPY-Xgz0yw" target="_blank">
        Hybrid Summit, Bangkok 
        </a></li>
      </ul>

      <h2 className="h4 mt-4">Awards &amp; Honors</h2>
      <ul className="list-inline">
        <li><a href="http://www.webbyawards.com/winners/2016/mobile-sites-apps/general-sites-apps/social/verona/" target="_blank">The Webby Awards - 2016 Official Honoree</a></li>

        <li><a href="http://www.fastcompany.com/company/verona" target="_blank">Fast Company - 2016 Most Innovative Companies</a></li>
      </ul>


      <h2 className="h4 mt-4">Interviews</h2>
      <ul className="list-inline">
        <li><a href="https://youtu.be/mZ3eOQ9ysQs" target="_blank">
        Documentry: Menlo One at Puerto Rico Blockchain Week
        </a></li>
        <li><a href="https://youtu.be/6hDZQhnF-yQ" target="_blank">
        Improving Blockchain Usability at Bitcoin Korea
        </a></li>

        <li><a href="http://block.news/makers/matthew-nolan/" target="_blank">
        Block.news Meet the Makers
        </a></li>
      </ul>


    </div>
  </div> 
</section>


<section>
  <Link href={`/`} className="btn btn-lg btn-link homeBtn"><i className="fa fa-arrow-circle-left fa-1x"></i>Home</Link>
</section>

    </div>
  );
};
export default About;


export const getStaticProps = async () => {
  // this has to go on every page now to make sidebar work
  const posts = await loadBlogPosts();
  const props = { posts };
  return { props };
};

