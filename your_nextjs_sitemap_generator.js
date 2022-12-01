// your_nextjs_sitemap_generator.js
// to run   node your_nextjs_sitemap_generator.js

// https://www.npmjs.com/package/nextjs-sitemap-generator
// TODO, not working, come back
 
const sitemap = require('nom');
 
sitemap({
  alternateUrls: {
    en: 'https://matthewnolan.eth',
  },
  baseUrl: 'https://matthewnolan.xyz',
  ignoredPaths: ['admin'],
  extraPaths: ['/extraPath'],
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'public/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: __dirname + "/next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ],
  pagesConfig: {
    '/login': {
      priority: '0.5',
      changefreq: 'daily'
    }
  },
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/test/styles.css"
    },
    {
      type: "text/xsl",
      styleFile: "test/test/styles.xls"
    }
  ]
});
 
console.log(`✅ sitemap.xml generated!`);