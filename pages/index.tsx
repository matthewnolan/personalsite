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
        <h5 className="text-center basicHeadline">Hi I'm Matthew Nolan</h5>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
        </p>

        <p className="text-center">
          <a href="https://twitter.com/ImMatthewNolan" target="_blank" className="btn btn-link">Twitter</a>
          <a href="http://www.linkedin.com/in/buildbuildbuild/" target="_blank" className="btn btn-link">LinkedIn</a>
          <a href="#" target="_blank" className="btn btn-link">Instagram</a>
          <a href="https://github.com/matthewnolan" target="_blank" className="btn btn-link">Github</a>
          <a href="#" target="_blank" className="btn btn-link">Angel List</a>
        </p>
      </section>



      <section>
        <p>I gave a TED talk about how my app Verona address growing problems in social media as a member of the TED Residenty class of '17. <Link href={`/`}>More info on the TED Residency program</Link>. <Link href={`/`}>More info on my app Verona</Link></p>
      </section>

      <section>
        <h5 className="text-center basicHeadline">Featured In</h5>
        <div>


<a target="_blank" className="sprite1 homeLogo"  href="http://www.bbc.co.uk/programmes/p03lz3yk"></a>
<a target="_blank" className="sprite2 homeLogo"  href="https://www.vice.com/read/a-new-app-is-trying-to-forge-friendships-between-democrats-and-republicans" ></a>
<a target="_blank" className="sprite18 homeLogo"  href="https://www.fastcompany.com/3057048/new-app-wants-to-make-peace-between-trump-supporters-and-latinos">
<img src="/fast-company-verona.png" /></a>
<a target="_blank" className="sprite3 homeLogo"  href="http://www.refinery29.com/verona-app-world-peace" ></a>
<a target="_blank" className="sprite16 homeLogo " href="http://www.nbcwashington.com/news/local/5-Signs-America-Is-Not-So-Divided-After-All-397482681.html"></a>
<a target="_blank" className="sprite5 homeLogo"  href="http://rt.com/news/256173-dating-app-verona-peace/" ></a>
<a target="_blank" className="sprite6 homeLogo "  href="http://timeout.co.il/%D7%90%D7%99%D7%A0%D7%98%D7%A8%D7%A0%D7%98-%D7%95%D7%98%D7%9B%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94/%D7%9E%D7%92%D7%A2%D7%99%D7%9D-%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%99%D7%9D" ></a>
<a target="_blank" className="sprite7 homeLogo"  href="http://www.france24.com/fr/20150518-verona-tinder-isreal-palestine-rencontre-application-android-smartphone-amour-paix-conflit" ></a>
<a target="_blank" className="sprite9 homeLogo "  href="http://www.vanityfair.it/lifestyle/hi-tech/15/06/09/verona-app-che-fa-incontrare-israeliani-e-palestinesi"></a>
<a target="_blank" className="sprite8 homeLogo "  href="http://www.producthunt.com/tech/verona" ></a>
<a target="_blank" className="sprite10 homeLogo "  href="http://www.dailydot.com/politics/verona-app-israel-palestine-tinder/" ></a>
<a target="_blank" className="sprite11 homeLogo "  href="http://i100.independent.co.uk/article/new-dating-app-seeks-to-build-peace-in-the-middle-east-by-connecting-israelis-and-palestinians--lyeDWyNkzbb" ></a>
<a target="_blank" className="sprite13 homeLogo " href="http://www.buzzfeed.com/felixramallo/una-app-tipo-tinder-quiere-achicar-la-grieta-y-uni-1yf12#.qqBqmMmxx"></a>
<a target="_blank" className="sprite14 homeLogo " href="https://www.fox5dc.com/news/verona-app-seeks-to-bridge-divide-between-democrats-and-republicans"></a>
<a target="_blank" className="sprite15 homeLogo " href="http://mic.com/articles/136375/i-tried-a-tinder-for-democrats-and-republicans"></a>
<a target="_blank" className="sprite12 homeLogo " href="http://motherboard.vice.com/fr/read/verona-veut-toujours-vous-faire-pecho-votre-pire-ennemi"></a>
<a target="_blank" className="sprite4 homeLogo"  href="http://www.ynetnews.com/articles/0,7340,L-4655458,00.html" ></a>
<a target="_blank" className="sprite19 homeLogo" href="https://www.favrify.com/verona-app/"><img src="/media-favrify-verona.png" /></a>
<a target="_blank" className="sprite20 homeLogo" href="https://techable.jp/archives/37259"><img src="/media-techable-verona.png" alt="Verona in Techable, Venture news site in Japan and overseas" /></a>
<a target="_blank" className="sprite20 homeLogo" href="https://www.livescience.com/51392-will-tech-bring-humanity-together-or-tear-it-apart.html">
  <img src="/media-live-science-verona.png" /></a>
<a target="_blank" className="sprite20 homeLogo" href="https://getnews.jp/archives/1423448"><img src="/media-japan-verona.png" alt="Verona's goal is to provide a new kind of conversation platform that bridges people from different positions" /></a>
<a target="_blank" className="sprite17 homeLogo " href="http://nextshark.com/verona-app-matthew-nolan/"></a>



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


      <section className="hidden">
        <h2>Hello</h2>
        <div>
          {/* comment */}
          {/* intro, ted talk, media logos, social links. thats it! */}
          <Markdown source={props.introduction} />
          <p>social icons</p>
        </div>
      </section>


      <section>
        <h5 className="text-center basicHeadline">Featured In</h5>
        <p>...</p>
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
