import React from 'react';
import { PostData } from '../loader';
import { Meta } from './Meta';
import { format } from 'fecha';

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
      <div
        className='hidden'
        itemProp={'datePublished'}
        content={post.datePublished ? format(new Date(post.datePublished), 'YYYY-MM-DD') : ''}
      >{post.datePublished ? format(new Date(post.datePublished), 'YYYY-MM-DD') : ''}</div>
    </div>
  );
};
