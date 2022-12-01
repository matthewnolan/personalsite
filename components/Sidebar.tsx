import React from 'react';
import Link from 'next/link';

// import { PostData, loadBlogPosts } from '../loader';
import { PostCardSide } from '../components/PostCardSide';

import { globals } from '../globals';

export const Sidebar = (props: {
  posts: PostData[];
}) => {
  console.log("SIDEBARR props ", props);

  return (
      <div className="">

{/*        <Link href={`/`}>
          <a className="navbar-brand">
            <small>{globals.siteName}</small>
          </a>
        </Link>*/}

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
          <p>Posts</p>
            {props.posts.map((post, j) => {
              return <PostCardSide post={post} key={j} />;
            })}
          </div>
        </div>

    </div>
  );
};
