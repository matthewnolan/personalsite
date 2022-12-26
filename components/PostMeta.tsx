import React from 'react';
import { PostData } from '../loader';
import { Meta } from './Meta';

export const PostMeta: React.FC<{ post: PostData }> = ({ post }) => {
  console.log(post);
  return (
    <div>
      <Meta
        meta={{
          title: post.title,
          desc: post.description,
          link: post.canonicalUrl,
          image: post.bannerPhoto,
        }}
        />
      <div>stuff2</div>
      <div>{post.title}</div>
      <div>{post.datePublished}</div>
    </div>
  );
};
