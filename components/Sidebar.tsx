import React from 'react';
import Link from 'next/link';

import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';

import { globals } from '../globals';

export const Sidebar = (props: {
  introduction: string;
  readme: string;
  posts: PostData[];
}) => {
  // console.log(props);
  return (
// export const Sidebar: React.FC = () => (
      <div className="">
        SIDEBARRRR

        <Link href={`/`}>
          <a className="navbar-brand">
            <small>{globals.siteName}</small>
          </a>
        </Link>

            {props.posts.map((post, j) => {
              return console.log(post);
              {/*return <PostCard post={post} key={j} />;*/}
            })}

    </div>
  );
};
export default Sidebar;

// export const getStaticProps = async () => {
//   const posts = await loadBlogPosts();

//   // comment out to turn off RSS generation
//   // during build step.
//   await generateRSS(posts);

//   const props = {
//     posts,
//   };
//   return { props };
// };
