import React from 'react';
import Link from 'next/link';

import { PostData, loadBlogPosts } from '../loader';
import { PostCardSide } from '../components/PostCardSide';
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

        <div className="list-group">
          <div
            style={{
              display: 'grid',
              //gridTemplateColumns: `repeat(auto-fit, minmax(400px,1fr))`,
              // gridRowGap: '8px',
              //gridColumnGap: '8px',
              //width: '100%',
              padding: '0px 0vw',
            }}
          >
            {props.posts.map((post, j) => {
              return <PostCardSide post={post} key={j} />;
            })}
          </div>
        </div>

    </div>
  );
};
export default Sidebar;

