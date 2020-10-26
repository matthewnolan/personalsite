import Head from 'next/head';
import Link from 'next/link'

import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
// import { globals } from '../globals';

const sectionStyle = {
  width: '100%',
  padding: '30px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const;


const Home = (props: {
  introduction: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div style={{ width: '100%' }}>



      <Head>
        <title>Matthew Nolan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div style={sectionStyle}>
        <h2>Hello</h2>
        <div>
          {/* comment */}
          {/* intro, ted talk, media logos, social links. thats it! */}
          <Markdown source={props.introduction} />
          <p>social icons</p>
        </div>
      </div>



      <div style={sectionStyle}>
        <h2>Projects</h2>
        <p>
          Here is a list of my projects
          <Link href={`/menlo`}>TODO Menlo</Link>
        </p>
      </div>


      <div style={sectionStyle}>
        <h2>Featured in...</h2>
        <div>logos</div>
      </div>



      <div style={sectionStyle}>
        <h2>Featured in...</h2>
        <div>logos</div>
      </div>



      <div style={sectionStyle}>
        <h2>Recent Posts</h2>
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
      </div>



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
