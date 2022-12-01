import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

import { PostData, loadBlogPosts } from '../loader';


// import { globals } from '../globals';

import './global.css';


// export const getStaticProps = async () => {
//   const posts = await loadBlogPosts();
//   return { props: { posts } };
// };

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div>

      <Head>

        <meta name="description" content="Hi I'm Matthew Nolan, an entrepreneur, engineer, and investor. I build tech that makes the world more open and fun." />

        <meta name="keywords" content="Matthew Nolan, blockchain, crypto, app, Verona, Menlo One" />

        <meta httpEquiv="content-language" content="en" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Matthew Nolan" />
        <meta name="url" content="https://matthewnolan.xyz" />
        <meta name="identifier-URL" content="https://matthewnolan.xyz" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ImMatthewNolan" />
        <meta name="twitter:title" content="Matthew Nolan Blog" />
        <meta name="twitter:description" content="Matthew Nolan. Entrepreneur, Engineer, Investor." />
        <meta name="twitter:creator" content="@ImMatthewNolan" />
        <meta name="twitter:url" content="https://matthewnolan.xyz" />
        <meta name="twitter:image" content="https://matthewnolan.xyz/images/matthew-nolan-thumbnail.jpg" />

        <link rel="canonical" href="https://matthewnolan.xyz" />

        <link rel="icon" href="/favicon.ico" />


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />

      </Head>

      <Header />

      <div className="container-fluid">
        <div className="row">

          <div className="col-md-9 ml-md-auto">
            <Component {...pageProps} />
          </div> { /*e col col-sm-8 */ }

          <div className="col-md-3 ml-md-auto" style={{backgroundColor:'red'}}>
            Header Sidebar
            {<Sidebar {...pageProps} />}
            {/*<Sidebar posts={posts} />*/}
          </div> { /*e col col-sm-8 */ }

        </div> { /*e row justify-content-sm-center */ }
      </div> { /*e container */ }


      <Footer />
      <style jsx global>{`
        // reset.css
        html {}
      `}</style>

      <div style={{ flex: 1 }} />

    </div>
  );
};

export default App;

