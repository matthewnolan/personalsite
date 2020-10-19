import Head from 'next/head';

import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
import { globals } from '../globals';

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const;

const pStyle = { lineHeight: 1.7 };

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
        <h2 style={{ margin: '4px 0px', fontSize: '34pt' }}>Hello</h2>
        <div style={{ maxWidth: '550px' }}>
          {/* comment */}
          <Markdown source={props.introduction} />
        </div>
      </div>



      <div style={sectionStyle}>
        <h2>Projects</h2>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: 'auto',
            ...pStyle,
          }}
        >
          Here is a list of my projects
        </p>
      </div>


      <div style={sectionStyle}>
        <h2>Featured in...</h2>
        <div>logos</div>
      </div>



      <div style={sectionStyle}>
        <h2 style={{ fontSize: '34pt' }}>Recent Posts</h2>
        <div
          style={{
            width: '100%',
            backgroundColor: '#eeeeee',
            padding: '0px 3vw 50px 3vw',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
              gridRowGap: '8px',
              gridColumnGap: '8px',
              width: '100%',
              padding: '0px 7vw',
            }}
          >
            {props.posts.map((post, j) => {
              return <PostCard post={post} key={j} />;
            })}
          </div>

        </div>
      </div>


      <div style={sectionStyle}>
        <h2
          style={{ margin: '4px 0px', fontSize: '22pt', paddingBottom: '30px' }}
        >
          Get started
        </h2>
        <button
          style={{
            padding: '10px 30px',
            backgroundColor: globals.accentColor,
            color: 'white',
            fontSize: '14pt',
            border: 'none',
            borderRadius: '10px',
          }}
        >
          Fork Devii on GitHub
        </button>
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
