import React from 'react';
import Link from 'next/link';

import { Markdown } from './Markdown';
import { PostData } from '../loader';
import { PostMeta } from './PostMeta';
import { Author } from './Author';


export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: '0px 0px 100px 0px',
      }}
    >
      <PostMeta post={post} />
      <div style={{ 
        // width: '100%', maxWidth: '600px' 
      }}>
        {post.bannerPhoto && (
          <img
            style={{
              width: '100%',
              // maxHeight: '350px',
              maxWidth: '100%',
              margin: '0px',
            }}
            src={post.bannerPhoto}
            alt={post.title}
          />
        )}
        <div style={{ 
          padding: '1em 0em' 
          // padding: '50px 3vw 50px 3vw' 
        }}>
          {title && (
            <h1
              style={{
                margin: '1em 0em',
                padding: 0,
                border: 'none',
              }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <h2
              style={{
                margin: '0.5em 0em',
                padding: 0,
                border: 'none',
                fontWeight: 400,
                opacity: '0.6',
              }}
            >
              {subtitle}
            </h2>
          )}
          <hr
            style={{
              height: '1px',
              color: '#eee',
              opacity: 0.2,
              margin: '25px 0px',
            }}
          />
          <Author post={post} />

        </div>

        <div style={{ width: '100%', padding: '0px 0px' }}>
          <Markdown source={post.content} />
          <Link href={`/`} className="btn btn-lg btn-link homeBtn"><i className="fa fa-arrow-circle-left fa-1x"></i>Home</Link>

        </div>

      </div>
    </div>
  );
};
