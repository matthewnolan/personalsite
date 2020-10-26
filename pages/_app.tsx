import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { globals } from '../globals';

import './global.css';


const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // minHeight: '100vh',
      }}
    >
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

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col col-sm-8">
            <Component {...pageProps} />
          </div>
        </div>
      </div>


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
