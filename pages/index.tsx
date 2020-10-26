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
          <a href="#" target="_blank" className="btn btn-link">Twitter</a>
          <a href="#" target="_blank" className="btn btn-link">LinkedIn</a>
          <a href="#" target="_blank" className="btn btn-link">Instagram</a>
          <a href="#" target="_blank" className="btn btn-link">Github</a>
          <a href="#" target="_blank" className="btn btn-link">Angel List</a>
        </p>
      </section>



      <section>
        <p>I gave a TED talk about how my app Verona address growing problems in social media as a member of the TED Residenty class of '17. <Link href={`/`}>More info on the TED Residency program</Link>. <Link href={`/`}>More info on my app Verona</Link></p>
      </section>

      <section>
        <h5 className="text-center basicHeadline">Featured In</h5>
        <p>...</p>
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
