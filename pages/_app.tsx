import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { globals } from '../globals';

import './global.css';


const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div>

      <Head>
        {globals.googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          ></script>
        )}
        {globals.googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}
          ></script>
        )}

        <meta name="description" content="Hi I'm Matthew Nolan, an entrepreneur, engineer, and artist. I build tech that makes the world more open and fun." />

        <meta name="keywords" content="Matthew Nolan, blockchain, app, Verona, Menlo One" />

        <meta httpEquiv="content-language" content="en" />


        <meta name="robots" content="index, follow" />
        <meta name="author" content="Matthew Nolan" />
        <meta name="url" content="https://matthewnolan.xyz" />
        <meta name="identifier-URL" content="https://matthewnolan.xyz" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ImMatthewNolan" />
        <meta name="twitter:title" content="Matthew Nolan Blog" />
        <meta name="twitter:description" content="Matthew Nolan. Entrepreneur, Engineer, Investor, Artist." />
        <meta name="twitter:creator" content="@ImMatthewNolan" />
        <meta name="twitter:url" content="https://matthewnolan.xyz" />
        <meta name="twitter:image" content="https://matthewnolan.xyz/images/matthew-nolan-thumbnail.jpg" />

        <link rel="canonical" href="https://matthewnolan.xyz/" />

        <link rel="icon" href="/favicon.ico" />



        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />


      </Head>

      <Header />

      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col col-sm-8">
            <Component {...pageProps} />
          </div> { /*e col col-sm-8 */ }
        </div> { /*e row justify-content-sm-center */ }
      </div> { /*e container */ }


      <Footer />
      <style jsx global>{`
        // reset.css

        html,
        body,
        #__next {
          min-height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .hidden {display:none !important;}
      `}</style>

      <div style={{ flex: 1 }} />

    </div>
  );
};

export default App;
