import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PostCardSide } from '../components/PostCardSide';
import { globals } from '../globals';
import './global.css';


const App: React.FC = ({ Component, pageProps }: any) => {

  let allPosts = [];
  if (!pageProps.hasOwnProperty('posts')) {
    // console.log("no has posts");
  } else { allPosts = pageProps.posts; }

  return (
    <div>

      <Head>

        {globals.googleAnalyticsId && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}></script>
        )}
        {globals.googleAnalyticsId && (
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${globals.googleAnalyticsId}');
            `,
          }}></script>
        )}

        <meta name="description" content="Matthew Nolan: Blockchain Engineer, Founder, Investor." />
        <meta name="keywords" content="Matthew Nolan, blockchain, crypto, app, ethereum, dapp, Verona, Menlo One" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Matthew Nolan" />
        <meta name="url" content="https://matthewnolan.xyz/" />
        <meta name="identifier-URL" content="https://matthewnolan.xyz/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="matthewnolan.xyz" />
        <meta property="twitter:domain" content="matthewnolan.xyz" />
        <meta name="twitter:site" content="@ImMatthewNolan" />
        <meta name="twitter:title" content="Matthew Nolan: Blockchain Engineer" />
        <meta name="twitter:description" content="Matthew Nolan: Blockchain Engineer, Founder, Investor." />
        <meta name="twitter:creator" content="@ImMatthewNolan" />
        <meta name="twitter:url" content="https://matthewnolan.xyz/" />
        <meta property="twitter:url" content="https://matthewnolan.xyz/" />
        <meta name="twitter:image" content="https://matthewnolan.xyz/images/blog-tedresidents-matthew-nolan-2x1.jpg" />

        {/* <meta property="fb:app_id" content="1549968485265325" /> */}

        <link rel="canonical" href="https://matthewnolan.xyz/" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />

        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css" integrity="sha384-nEnU7Ae+3lD52AK+RGNzgieBWMnEfgTbRHIwEvp1XXPdqdO6uLTd/NwXbzboqjc2" crossorigin="anonymous" /> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/superhero/bootstrap.min.css" integrity="sha384-HnTY+mLT0stQlOwD3wcAzSVAZbrBp141qwfR4WfTqVQKSgmcgzk+oP0ieIyrxiFO" crossorigin="anonymous" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossOrigin="anonymous" />
        {/* https://bootswatch.com/darkly/ */}

      </Head>

      {/* <Web3ReactProvider getLibrary={getLibrary}> */}

        <Header />

        <div className="container-fluid">
          <div className="row justify-content-md-center">

            <div className="col-xl-6 col-lg-8 col-md-9 offset-xl-2 offset-lg-1 -ml-md-auto -ml-auto">
              <Component {...pageProps} />
            </div> { /*e col col-sm-8 */ }

            <div className="col-xl-3 col-lg-3 col-md-3 ml-md-auto -ml-auto" style={{backgroundColor:'transparent', marginTop:'8em'}}>
              <div className="list-group">
                <small className="list-group-item recentposts">Recent Posts</small>
                  {allPosts.map((post: any, j: any) => {
                    return <PostCardSide post={post} key={j} />;
                  })}
              </div>
            </div> { /*e col col-sm-8 */ }

          </div> { /*e row justify-content-sm-center */ }
        </div> { /*e container */ }
      {/* </Web3ReactProvider> */}


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
