export const sitemap = '';
import glob from 'glob';
import { getStaticPaths as getBlogPaths } from './pages/blog/[blog]';
// import { getStaticPaths as getBlogPaths } from './pages/blog/[blog]';

export const generateSitemap = async () => {
  const pagesDir = './pages/**/*.*';
  const posts = await glob.sync(pagesDir);

  const pagePaths = posts
    .filter((path) => !path.includes('['))
    .filter((path) => !path.includes('/_'))
    .map((path) => path.slice(1));

  const blogPaths = await getBlogPaths().paths;
  // console.log(blogs);

  // console.log(JSON.stringify(pages, null, 2));
  // const templates = posts
  //   .filter((path) => path.includes('['))
  //   .filter((path) => path.includes(']'))
  //   .filter((path) => !path.includes('/_')).map(path => `.${path}`);

  // console.log(JSON.stringify(templates, null, 2));

  // for (const temp of templates) {
  //   console.log(temp);
  //   const imports = await import(`${temp}`);
  //   console.log(imports);
  // const { getStaticPaths } = await import(`${temp}`);
  // console.log(getStaticPaths);
  // }

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>https://matthewnolan.xyz</loc>
      <lastmod>2020-06-01</lastmod>
  </url>
${[...pagePaths, ...blogPaths].map((path) => {
  const item = [`<url>`];
  item.push(`  <loc>https://matthewnolan.xyz${path}</loc>`);
  item.push(`  <lastmod>2020-06-01</lastmod>`);
  return [`<url>`];
})}

    <url>
        <loc>https://matthewnolan.xyz/essay/zod</loc>
        <lastmod>2020-03-28</lastmod>
    </url>
    <url>
        <loc>https://matthewnolan.xyz/essay/devii</loc>
        <lastmod>2020-05-28</lastmod>
    </url>
    <url>
        <loc>https://matthewnolan.xyz/essay/say-no-to-emotion-core</loc>
        <lastmod>2020-06-05</lastmod>
    </url>
    <url>
        <loc>https://matthewnolan.xyz/essay/css-in-js-is-inevitable</loc>
        <lastmod>2020-06-07</lastmod>
    </url>
</urlset>`;

  return sitemap;
};
