import Head from 'next/head';
import Link from 'next/link'

import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
// import { globals } from '../globals';



// import { useEffect, useState, useRef } from "react";
import { useEffect, useState } from "react";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Web3Provider } from "@ethersproject/providers";
import useLocalStorage from "../hooks/useLocalStorage";
import { MetamaskIcon, WalletConnectIcon } from "../components/icons";
// import Layout from "../components/Layout";

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
const wcConnector = new WalletConnectConnector({
  infuraId: "517bf3874a6848e58f99fa38ccf9fce4",
});

const ConnectorNames = {
  Injected: "injected",
  WalletConnect: "walletconnect",
};

const W3Operations = {
  Connect: "connect",
  Disconnect: "disconnect",
};

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  // library.pollingInterval = 12000;
  return library;
}

// export default function WrapperHome() {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <Home />
//     </Web3ReactProvider>
//   );
// }


const Home = (props: {
  posts: PostData[];
}) => {

  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <HomeMM />
      </Web3ReactProvider>

      <Head>
        <title>Matthew Nolan | Entrepreneur, Engineer, Investor</title>
      </Head>

      <section
        style={{
          marginTop: '2em'
        }}
      >
        <div className="text-center">
          <img className="rounded-circle img-thumbnail" src="/images/matthew-nolan-thumbnail.jpg" alt="Matthew Nolan" 
            style={{ maxWidth: '80px', maxHeight: '80px', margin: '1em' }} 
          />
          <h1 className="h4">Hi I'm Matthew Nolan</h1>
          <h2 className="h6">Entrepreneur, Engineer, Investor. Founder of <a href="https://www.menlo.one" target="_blank">Menlo One</a></h2>
        </div>

        <div className="basicHeadline">
          <p className="text-center">
            <a href="https://twitter.com/ImMatthewNolan" target="_blank" className="btn btn-link">Twitter</a>
            <a href="http://www.linkedin.com/in/buildbuildbuild/" target="_blank" className="btn btn-link">LinkedIn</a>
            <a href="https://github.com/matthewnolan" target="_blank" className="btn btn-link">Github</a>
            <a href="https://angel.co/u/matthew-nolan" target="_blank" className="btn btn-link">Angel List</a>
            <a href="https://www.menlo.one" target="_blank" className="btn btn-link">Menlo One</a>
          </p>
        </div>

        <div className="lead"
          style={{
            marginTop: '2em'
          }}
        >
          <p>
          Hi I'm Matthew Nolan, an entrepreneur, engineer, &amp; investor. I build tech that makes the world more open and fun. I'm a <Link href={`/blog/ted-talk/`}>TED Resident alum</Link> and public speaker on the intersection of society, technology, and culture.
          </p><p>
          My belief is the Internet can do more than show us the world, it can help us to re-think it. I previously founded <a href="https://www.getverona.com/" target="_blank">Verona</a>, an app that connects people across social and political divides. At the dawn of the virtual work movement I co-founded Speek, a meeting and collaboration platform. I also previously worked at IBM where I developed tools to better understand how people use social media. I built enterprise grade fintech systems at JP Morgan.
          </p><p>
          I'm very focused on blockchain technology which I've been involved in since it's early days. I'm currently the founder and CEO of <a href="https://menlo.one/" target="_blank">Menlo One</a>, a blockchain technology company that makes it easy to build products that are secure, transparent, and censorship resistant. 
          </p>
        </div>
      </section>


      <section>
        <p className="embed-container">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/M-SE6Fm6PGU" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </p>
      </section>



      <section>
        <h3 className="text-center h4">Featured In</h3>
        <div className="mediaLogos">
            <div className="mediaLogos-wrapper">

<a target="_blank" className="menloLogos" href="https://www.forbes.com/sites/andrewrossow/2018/07/10/top-10-new-blockchain-companies-to-watch-for-in-2018">
  <img src="/images/logos/logo-forbes.svg" alt="Matthew Nolan in Forbes" /></a>
<a target="_blank" className="menloLogos" href="https://venturebeat.com/2018/04/26/menlo-one-launches-townhall-to-reward-users-for-sharing-token-sale-news/">
  <img src="/images/logos/logo-venturebeat.svg" alt="VentureBeat Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://www.inc.com/melanie-curtin/the-problem-with-blockchain-that-no-ones-talking-about.html">
  <img src="/images/logos/logo-inc.png" alt="Inc Magazine Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://www.entrepreneur.com/article/316184">
  <img src="/images/logos/logo-entrepreneur.png" alt="Entrepreneur Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://www.vice.com/fr/article/wng8vq/verona-veut-toujours-vous-faire-pecho-votre-pire-ennemi"><img src="/images/logos/m-logo-motherboard.png" alt="Matthew Nolan in Motherboard" /></a>
<a target="_blank" className="menloLogos" href="https://www.influencive.com/menlo-one-ceo-matthew-nolan-on-building-the-future-of-decentralized-applications-dapps/">
  <img src="/images/logos/logo-influencive.png" alt="Influencive Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos" href="https://hackernoon.com/scammed-in-an-ico-3b106fc84031">
  <img src="/images/logos/logo-hackernoon.png" alt="Hackernoon" /></a>
<a target="_blank" className="menloLogos" href="https://nulltx.com/what-are-dapp-scaling-frameworks/"><img src="/images/logos/logo-nulltx.png" alt="The Merkle Null TX Blockchain media article about the decentralized menlo one blockchain framework" /></a>
<a target="_blank" className="menloLogos"  href="https://www.fastcompany.com/3057048/new-app-wants-to-make-peace-between-trump-supporters-and-latinos">
  <img src="/images/logos/fast-company-verona.png" alt="Matthew Nolan in Fast Company" /></a>
<a target="_blank" className="menloLogos" href="http://www.bbc.co.uk/programmes/p03lz3yk">
  <img src="/images/logos/m-logo-bbc.png" alt="Matthew Nolan in BBC" /></a>
<a target="_blank" className="menloLogos"  href="https://www.vice.com/en/article/wd795q/a-new-app-is-trying-to-forge-friendships-between-democrats-and-republicans" >
  <img src="/images/logos/m-logo-vice.png" alt="Matthew Nolan in Vice" /></a>
<a target="_blank" className="menloLogos"  href="http://www.refinery29.com/verona-app-world-peace" >
  <img src="/images/logos/m-logo-ref.png" alt="Matthew Nolan in refinery29" /></a>
<a target="_blank" className="menloLogos" href="https://www.livescience.com/51392-will-tech-bring-humanity-together-or-tear-it-apart.html">
  <img src="/images/logos/media-live-science-verona.png" alt="Matthew Nolan in live science" /></a>
<a target="_blank" className="menloLogos" href="http://www.nbcwashington.com/news/local/5-Signs-America-Is-Not-So-Divided-After-All-397482681.html">
  <img src="/images/logos/m-logo-nbc.png" alt="Matthew Nolan in refinery29" /></a>
<a target="_blank" className="menloLogos"  href="http://rt.com/news/256173-dating-app-verona-peace/" >
  <img src="/images/logos/m-logo-rt.png" alt="Matthew Nolan in rt" /></a>
<a target="_blank" className="menloLogos"  href="http://www.france24.com/fr/20150518-verona-tinder-isreal-palestine-rencontre-application-android-smartphone-amour-paix-conflit" >
  <img src="/images/logos/m-logo-france24.png" alt="Matthew Nolan in france24" /></a>
<a target="_blank" className="menloLogos" href="http://nextshark.com/verona-app-matthew-nolan/">
  <img src="/images/logos/m-logo-next-shark.png" alt="Matthew Nolan in nextshark" /></a>
<a target="_blank" className="menloLogos"   href="http://www.vanityfair.it/lifestyle/hi-tech/15/06/09/verona-app-che-fa-incontrare-israeliani-e-palestinesi">
  <img src="/images/logos/m-logo-vanity.png" alt="Matthew Nolan in vanityfair" /></a>
<a target="_blank" className="menloLogos"   href="http://www.producthunt.com/tech/verona" >
  <img src="/images/logos/m-logo-product-hunt.png" alt="Matthew Nolan in producthunt" /></a>
<a target="_blank" className="menloLogos"  href="http://i100.independent.co.uk/article/new-dating-app-seeks-to-build-peace-in-the-middle-east-by-connecting-israelis-and-palestinians--lyeDWyNkzbb" >
  <img src="/images/logos/m-logo-independent.png" alt="Matthew Nolan in independent" /></a>
<a target="_blank" className="menloLogos" href="http://www.buzzfeed.com/felixramallo/una-app-tipo-tinder-quiere-achicar-la-grieta-y-uni-1yf12#.qqBqmMmxx">
  <img src="/images/logos/m-logo-buzzfeed.png" alt="Matthew Nolan in buzzfeed" /></a>
<a target="_blank" className="menloLogos" href="https://www.fox5dc.com/news/verona-app-seeks-to-bridge-divide-between-democrats-and-republicans">
  <img src="/images/logos/m-logo-fox-news.png" alt="Matthew Nolan in fox news" /></a>
<a target="_blank" className="menloLogos" href="http://mic.com/articles/136375/i-tried-a-tinder-for-democrats-and-republicans">
  <img src="/images/logos/m-logo-mic.png" alt="Matthew Nolan in mic.com" /></a>

          </div>
        </div>
      </section>


      <section className="">
        <h3 className="text-center">Recent Posts</h3>
        <div className="list-group">
          <div
            style={{
              // display: 'grid',
              // gridTemplateColumns: `repeat(auto-fit, minmax(400px,1fr))`,
              // gridRowGap: '8px',
              // gridColumnGap: '8px',
              // width: '100%',
              // padding: '0px 7vw',
            }}
          >
            {props.posts.map((post, j) => {
              return <PostCard post={post} key={j} />;
            })}
          </div>
        </div>
      </section>



    </div>
  );
};
export default Home;


// can only use getStaticProps in PAGES dir
export const getStaticProps = async () => {
  // this has to go on every page now to make sidebar work
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);

  const props = {
    posts,
  };
  return { props };
};





function HomeMM() {
  const web3React = useWeb3React();
  // const { active, activate, error } = web3React;
  const [loaded, setLoaded] = useState(false);

  const [latestOp, setLatestOp] = useLocalStorage("latest_op", "");
  const [latestConnector, setLatestConnector] = useLocalStorage(
    "latest_connector",
    ""
  );
  console.log(web3React);
  console.log(loaded);

  useEffect(() => {
    if (latestOp == "connect" && latestConnector == "injected") {
      injected
        .isAuthorized()
        .then((isAuthorized) => {
          setLoaded(true);
          if (isAuthorized && !web3React.active && !web3React.error) {
            web3React.activate(injected);
          }
        })
        .catch(() => {
          setLoaded(true);
        });
    } else if (latestOp == "connect" && latestConnector == "walletconnect") {
      web3React.activate(wcConnector);
    }
  }, []);

  const getTruncatedAddress = (address: any) => {
    if (address && address.startsWith("0x")) {
      return address.substr(0, 4) + "..." + address.substr(address.length - 4);
    }
    return address;
  };

  const getNetwork = (chainId: any) => {
    switch (chainId) {
      case 1:
        return "Mainnet";
      case 3:
        return "Ropsten";
      case 4:
        return "Rinkeby";
      case 5:
        return "Goerli";
      case 42:
        return "Kovan";
      default:
        return `unknown network ${chainId}`;
    }
  };

  return (
      <div className="container">
        {!web3React.active ? (
          <div className="connect-wallet-container">
            <div className="connect-wallet-card">
              <div className="wallet-header">Connect your wallet</div>
              <div
                className="button metamask"
                onClick={() => {
                  setLatestConnector(ConnectorNames.Injected);
                  setLatestOp(W3Operations.Connect);
                  web3React.activate(injected);
                }}
              >
                Metamask
                <MetamaskIcon />
              </div>
              <div
                className="button walletconnect"
                onClick={() => {
                  setLatestConnector(ConnectorNames.WalletConnect);
                  setLatestOp(W3Operations.Connect);
                  web3React.activate(wcConnector);
                }}
              >
                WalletConnect
                <WalletConnectIcon />
              </div>
            </div>
          </div>
        ) : null}

        {web3React.active ? (
          <>
            <div className="connected-container">
              <div className="connected-card">
                <div className="row network-section">
                  <div className="row-title">Network</div>
                  <div className="row-subtitle">
                    {getNetwork(web3React.chainId)}
                  </div>
                </div>
                <hr className="divider" />
                <div className="row network-section">
                  <div className="row-title">Address</div>
                  <div className="row-subtitle">
                    {getTruncatedAddress(web3React.account)}
                  </div>
                </div>
                <hr className="divider" />
                <div
                  className="row disconnect-button"
                  onClick={() => {
                    setLatestOp(W3Operations.Disconnect);
                    web3React.deactivate();
                  }}
                >
                  Disconnect
                </div>
              </div>
            </div>
          </>
        ) : null}


        <style jsx>{`
          .container {
            // min-height: 100vh;
            /* padding: 0 0.5rem; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* height: 100vh; */
            background-color: #fafafa;
          }
          .connect-wallet-container {
            display: flex;
            width: 400px;
            height: 300px;
            border-radius: 30px;
            background: #ffffff;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
          }
          .wallet-header {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 30px;
          }
          .button {
            width: 300px;
            height: 60px;
            background: #ffffff;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 25px;
            margin: 20px auto;
          }
          .button:hover {
            cursor: pointer;
          }
          .connected-container {
            display: flex;
            /* margin: 20px auto; */
            width: 400px;
            border-radius: 30px;
            background: #ffffff;
            box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
          }
          .row {
            display: flex;
            flex-direction: column;
            height: 80px;
            width: 400px;
            justify-content: center;
            padding: 0 20px;
          }
          .row-title {
            font-size: 16px;
            color: #afafaf;
            font-weight: 900;
          }
          .row-subtitle {
            font-size: 22px;
            font-weight: 700;
          }
          .disconnect-button {
            align-items: center;
            color: #f96666;
            font-size: 20px;
            font-weight: 900;
          }
          .disconnect-button:hover {
            cursor: pointer;
          }
          .divider {
            height: 0.1px;
            background-color: #e5e5e5;
            border: none;
            margin: unset;
          }
          .github {
            position: fixed;
            bottom: 30px;
          }
          @media screen and (max-width: 400px) {
            .connect-wallet-container {
              width: 80%;    
            }
            .button {
              width: 240px;
            }
            .connected-container, .row  {
              width: 300px;
            }
        `}</style>
      </div>
  );
}
