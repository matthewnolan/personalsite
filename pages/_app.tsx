import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PostCardSide } from '../components/PostCardSide';
// import { globals } from '../globals';
import './global.css';

// ------- S Web3 Stuff
// import { useEffect, useState, useRef } from "react";
// import { useEffect, useState } from "react";
// import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { Web3ReactProvider } from "@web3-react/core";
// import { InjectedConnector } from "@web3-react/injected-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Web3Provider } from "@ethersproject/providers";
// import useLocalStorage from "../hooks/useLocalStorage";
// import { MetamaskIcon, WalletConnectIcon } from "../components/icons";

// Needed where Web3 is used
// const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
// const wcConnector = new WalletConnectConnector({
//   infuraId: "517bf3874a6848e58f99fa38ccf9fce4",
// });
// const ConnectorNames = {
//   Injected: "injected",
//   WalletConnect: "walletconnect",
// };
// const W3Operations = {
//   Connect: "connect",
//   Disconnect: "disconnect",
// };

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  // library.pollingInterval = 12000;
  return library;
}
// ------- E Web3 Stuff





const App: React.FC = ({ Component, pageProps }: any) => {

  // console.log("appprops ", pageProps);

  let allPosts = [];
  if (!pageProps.hasOwnProperty('posts')) {
    console.log("no has posts");
  } else { allPosts = pageProps.posts; }

  return (
    <div>

      <Head>

        <meta name="description" content="Hi I'm Matthew Nolan. I build blockchain technology that makes the world more open and connected." />

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

        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css" integrity="sha384-nEnU7Ae+3lD52AK+RGNzgieBWMnEfgTbRHIwEvp1XXPdqdO6uLTd/NwXbzboqjc2" crossorigin="anonymous" /> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/superhero/bootstrap.min.css" integrity="sha384-HnTY+mLT0stQlOwD3wcAzSVAZbrBp141qwfR4WfTqVQKSgmcgzk+oP0ieIyrxiFO" crossorigin="anonymous" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" />

      </Head>

      <Web3ReactProvider getLibrary={getLibrary}>

        <Header />

        <div className="container-fluid">
          <div className="row justify-content-md-center">

            <div className="col-xl-6 col-lg-8 col-md-9 offset-xl-2 offset-lg-1 -ml-md-auto -ml-auto">
              <Component {...pageProps} />
            </div> { /*e col col-sm-8 */ }

            <div className="col-xl-3 col-lg-3 col-md-3 ml-md-auto -ml-auto" style={{backgroundColor:'transparent', marginTop:'8em'}}>
              <div className="list-group">
                <small className="list-group-item">Recent Posts</small>
                  {allPosts.map((post: any, j: any) => {
                    return <PostCardSide post={post} key={j} />;
                  })}
              </div>
            </div> { /*e col col-sm-8 */ }

          </div> { /*e row justify-content-sm-center */ }
        </div> { /*e container */ }
      </Web3ReactProvider>


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

