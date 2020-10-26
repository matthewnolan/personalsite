import Head from 'next/head';
import Link from 'next/link'

import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
// import { globals } from '../globals';


const Home = (props: {
  introduction: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div>

      <Head>
        <title>Matthew Nolan</title>
      </Head>

      <section>
        <div className="text-center basicHeadline">
          <h5 className="">Hi I'm Matthew Nolan</h5>
          <h6 className="">Entrepreneur, Engineer, Artist</h6>
        </div>

        <p>
          Matthew Nolan is the founder of blockchain software software company <a href="https://menlo.one/" target="_blank">Menlo One</a>. He previously founded socoal discovery app <a href="https://www.getverona.com/" target="_blank">Verona</a>. Matthew has worked with companies like IBM, JP Morgan, and High 5 Games. Matthew gave a TED talk about how my app Verona addresses growing problems in social media as a member of the spring '19 TED Residenty class. <Link href={`/blog/ted-talk/`}>More info on the TED Residency</Link>.
        </p>

        <p className="text-center">
          <a href="https://twitter.com/ImMatthewNolan" target="_blank" className="btn btn-link">Twitter</a>
          <a href="http://www.linkedin.com/in/buildbuildbuild/" target="_blank" className="btn btn-link">LinkedIn</a>
          <a href="https://github.com/matthewnolan" target="_blank" className="btn btn-link">Github</a>
          <a href="https://angel.co/u/matthew-nolan" target="_blank" className="btn btn-link">Angel List</a>
        </p>
      </section>

      <section>
        <p className="embed-container">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/M-SE6Fm6PGU" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </p>

      </section>

      <section>
        <h5 className="text-center basicHeadline">Featured In</h5>
        <div className="mediaLogos">
            <div className="mediaLogos-wrapper">

<a target="_blank" className="menloLogos" href="https://www.forbes.com/sites/andrewrossow/2018/07/10/top-10-new-blockchain-companies-to-watch-for-in-2018">
  <img src="/images/logos/logo-forbes.svg" alt="Forbes" /></a>
<a target="_blank" className="menloLogos" href="https://bit.ly/2HXdoPw">
  <img src="/images/logos/logo-venturebeat.svg" alt="VentureBeat Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://www.inc.com/melanie-curtin/the-problem-with-blockchain-that-no-ones-talking-about.html">
  <img src="/images/logos/logo-inc.png" alt="Inc Magazine Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://www.entrepreneur.com/article/316184">
  <img src="/images/logos/logo-entrepreneur.png" alt="Entrepreneur Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://www.influencive.com/menlo-one-ceo-matthew-nolan-on-building-the-future-of-decentralized-applications-dapps/">
  <img src="/images/logos/logo-influencive.png" alt="Influencive Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://hackernoon.com/scammed-in-an-ico-3b106fc84031">
  <img src="/images/logos/logo-hackernoon.png" alt="Hackernoon" /></a>
<a target="_blank" className="menloLogos" href="https://bitcoinexchangeguide.com/civic-secure-identity-platform-selected-for-menlo-one-for-blockchain-verification/">
  <img src="/images/logos/logo-beg.png" alt="Bitcoin Exchange Guide Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://theblockchainland.com/2018/08/28/top-10-promising-blockchain-projects-of-2018/">
  <img src="/images/logos/logo-blockchainland.png" alt="Blockchain Land Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://nulltx.com/what-are-dapp-scaling-frameworks/"><img src="/images/logos/logo-nulltx.png" alt="The Merkle Null TX Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos"  href="https://www.fastcompany.com/3057048/new-app-wants-to-make-peace-between-trump-supporters-and-latinos">
  <img src="/images/logos/fast-company-verona.png" /></a>
<a target="_blank" className="menloLogos" href="http://www.bbc.co.uk/programmes/p03lz3yk">
  <img src="/images/logos/m-logo-bbc.png" /></a>
<a target="_blank" className="menloLogos"  href="https://www.vice.com/en/article/wd795q/a-new-app-is-trying-to-forge-friendships-between-democrats-and-republicans" >
  <img src="/images/logos/m-logo-vice.png" /></a>
<a target="_blank" className="menloLogos"  href="http://www.refinery29.com/verona-app-world-peace" >
  <img src="/images/logos/m-logo-ref.png" /></a>
<a target="_blank" className="menloLogos" href="https://www.livescience.com/51392-will-tech-bring-humanity-together-or-tear-it-apart.html">
  <img src="/images/logos/media-live-science-verona.png" /></a>
<a target="_blank" className="menloLogos" href="http://www.nbcwashington.com/news/local/5-Signs-America-Is-Not-So-Divided-After-All-397482681.html">
  <img src="/images/logos/m-logo-nbc.png" /></a>
<a target="_blank" className="menloLogos"  href="http://rt.com/news/256173-dating-app-verona-peace/" >
  <img src="/images/logos/m-logo-rt.png" /></a>
<a target="_blank" className="menloLogos"  href="http://www.france24.com/fr/20150518-verona-tinder-isreal-palestine-rencontre-application-android-smartphone-amour-paix-conflit" >
  <img src="/images/logos/m-logo-france24.png" /></a>
<a target="_blank" className="menloLogos" href="http://nextshark.com/verona-app-matthew-nolan/">
  <img src="/images/logos/m-logo-next-shark.png" /></a>
<a target="_blank" className="menloLogos"   href="http://www.vanityfair.it/lifestyle/hi-tech/15/06/09/verona-app-che-fa-incontrare-israeliani-e-palestinesi">
  <img src="/images/logos/m-logo-vanity.png" /></a>
<a target="_blank" className="menloLogos"   href="http://www.producthunt.com/tech/verona" >
  <img src="/images/logos/m-logo-product-hunt.png" /></a>
<a target="_blank" className="menloLogos"  href="http://i100.independent.co.uk/article/new-dating-app-seeks-to-build-peace-in-the-middle-east-by-connecting-israelis-and-palestinians--lyeDWyNkzbb" >
  <img src="/images/logos/m-logo-independent.png" /></a>
<a target="_blank" className="menloLogos" href="http://www.buzzfeed.com/felixramallo/una-app-tipo-tinder-quiere-achicar-la-grieta-y-uni-1yf12#.qqBqmMmxx">
  <img src="/images/logos/m-logo-buzzfeed.png" /></a>
<a target="_blank" className="menloLogos" href="https://www.fox5dc.com/news/verona-app-seeks-to-bridge-divide-between-democrats-and-republicans">
  <img src="/images/logos/m-logo-fox-news.png" /></a>
<a target="_blank" className="menloLogos" href="http://mic.com/articles/136375/i-tried-a-tinder-for-democrats-and-republicans">
  <img src="/images/logos/m-logo-mic.png" /></a>
<a target="_blank" className="menloLogos" href="https://www.vice.com/fr/article/wng8vq/verona-veut-toujours-vous-faire-pecho-votre-pire-ennemi">
  <img src="/images/logos/m-logo-motherboard.png" /></a>

          </div>
        </div>
      </section>


      <section>
        <h5 className="text-center">Recent Posts</h5>
        <div className="list-group">
          <div
            style={{
              // display: 'grid',
              // gridTemplateColumns: `repeat(auto-fit, minmax(400px,1fr))`,
              // gridRowGap: '8px',
              // gridColumnGap: '8px',
              // width: '100%',
              // padding: '0px 7vw',
            }}
          >
            {props.posts.map((post, j) => {
              return <PostCard post={post} key={j} />;
            })}
          </div>
        </div>
      </section>



      <section>
        <h5 className="text-center basicHeadline"></h5>
      </section>


    </div>






  );
};
export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile('introduction.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;

  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    readme: readme,
    posts,
  };
  return { props };
};
