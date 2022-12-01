import React from 'react';
import { format } from 'fecha';
import { PostData } from '../loader';
// import { Tag } from './Tag';
import Link from 'next/link'


export const PostCardSide: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <Link href={`/${post.path}`}> 
    <a className="list-group-item list-group-item-action">

      <div className="media mb-1">

        <img src={post.thumbnailPhoto} className="mr-3 -hidden" alt={post.title} 
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'cover'
            }}
        />

        <div className="media-body">
          
          {post.title && (
            <h6 className="m-0">
              {post.title}
            </h6>
          )}

          <small className="m-0">
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
