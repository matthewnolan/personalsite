import React from 'react';
import NextHead from 'next/head';
import { globals } from '../globals';

export const Meta: React.FC<{
  meta: {
    title: string;
    link?: string;
    desc?: string;
    image?: string;
  };
}> = (props) => {
  const { meta } = props;
  const canonical = `${globals.url}${meta.link}`;
  console.log(canonical);
  console.log(meta);
  console.log(globals.url)
  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="copyright" content="Matthew Nolan" />

      {meta.link && <link rel="canonical" href={globals.url + meta.link} />}
      {meta.desc && <meta name="description" content={meta.desc} />}

      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={meta.title} />
      {meta.desc && (
        <meta
          name="og:description"
          property="og:description"
          content={meta.desc}
        />
      )}
      <meta property="og:site_name" content={globals.siteName} />
      {meta.link && <meta property="og:url" content={`${globals.url+meta.link}`} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      {meta.desc && <meta name="twitter:description" content={meta.desc} />}
      <meta name="twitter:site" content={globals.twitterHandle} />
      <meta name="twitter:creator" content={globals.twitterHandle} />
      {meta.image && <meta name="twitter:image" content={globals.url + meta.image} />}
      {meta.image && <meta property="og:image" content={`${globals.url + meta.image}`} />}
    </NextHead>
  );
};
