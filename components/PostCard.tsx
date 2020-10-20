import React from 'react';
import { format } from 'fecha';
import { PostData } from '../loader';
// import { Tag } from './Tag';
import Link from 'next/link'


export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <Link href={`/${post.path}`}> 
    <a className="list-group-item list-group-item-action">

      <div className="media">

        <img src={post.thumbnailPhoto} className="mr-3 -hidden" alt={post.title} 
            style={{
              // background: `url(${post.thumbnailPhoto}) no-repeat center center`,
              // backgroundSize: 'cover',
              width: '80px',
              height: '80px',
              objectFit: 'cover'
            }}
        />

        <div className="media-body">
          
          {post.title && (
            <h5 className="mt-0">
              {post.title}
            </h5>
          )}

          <small>
            {props.post.datePublished
              ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY')
              : ''}
          </small>

          {false && post.subtitle && (
            <p>
              {post.subtitle}
            </p>
          )}

        </div>
      </div>

    </a>
    </Link>
  );
};
