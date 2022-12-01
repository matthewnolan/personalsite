import React from 'react';
import Link from 'next/link';
import { globals } from '../globals';



// import { useEffect, useState, useRef } from "react";
import { useEffect, useState } from "react";
// import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { Web3Provider } from "@ethersproject/providers";
import useLocalStorage from "../hooks/useLocalStorage";
import { MetamaskIcon, WalletConnectIcon } from "../components/icons";

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
// TODO set env var
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


export const Header: React.FC = () => (
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link href={`/`} className="navbar-brand">
          {globals.siteName}
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="-collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href={`/blog`} className="nav-link">Posts</Link>
            </li>
            <li className="nav-item">
              <Link href={`/about`} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact`} className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://twitter.com/ImMatthewNolan"><i className="fa fa-twitter fa-1x"></i></a>
            </li>
          </ul>
        </div>

        <HomeMM />

      </nav>
);




function HomeMM() {
  const web3React = useWeb3React();
  // const { active, activate, error } = web3React;
  const [loaded, setLoaded] = useState(false);
  const [latestOp, setLatestOp] = useLocalStorage("latest_op", "");
  const [latestConnector, setLatestConnector] = useLocalStorage(
    "latest_connector",
    ""
  );
  // console.log(web3React);
  console.log("web3 loaded ", loaded)

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
    <div className="wallet-container">
      {!web3React.active ? (
        <div className="connect-wallet-container">
          <div className="connect-wallet-card">
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
            {/* <div
              className="button walletconnect"
              onClick={() => {
                setLatestConnector(ConnectorNames.WalletConnect);
                setLatestOp(W3Operations.Connect);
                web3React.activate(wcConnector);
              }}
            >
              WalletConnect
              <WalletConnectIcon />
            </div> */}
          </div>
        </div>
      ) : null}

      {web3React.active ? (
        <>
          <div className="connected-container">
            <button type="button" className="btn btn-primary">Primary</button>
            <div className="connected-card">
              <div className="wallet-row network-section">
                {/* <div className="row-title">Network</div> */}
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
                className="wallet-row disconnect-button"
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

          // .container {
          //   // min-height: 100vh;
          //   /* padding: 0 0.5rem; */
          //   // display: flex;
          //   // flex-direction: column;
          //   // justify-content: center;
          //   align-items: center;
          //   /* height: 100vh; */
          //   background-color: #fafafa;
          // }
          // .connect-wallet-container {
          //   display: flex;
          //   width: 400px;
          //   height: 300px;
          //   border-radius: 30px;
          //   background: #ffffff;
          //   justify-content: center;
          //   align-items: center;
          //   text-align: center;
          //   box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
          // }
          // .wallet-header {
          //   font-size: 20px;
          //   font-weight: 700;
          //   margin-bottom: 30px;
          // }
          // .button {
          //   // width: 300px;
          //   height: 60px;
          //   background: #ffffff;
          //   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          //   border-radius: 10px;
          //   display: flex;
          //   align-items: center;
          //   justify-content: space-between;
          //   padding: 0 25px;
          //   margin: 20px auto;
          // }
          // .button:hover {
          //   cursor: pointer;
          // }
          // .connected-container {
          //   // display: flex;
          //   /* margin: 20px auto; */
          //   // width: 400px;
          //   border-radius: 30px;
          //   background: #ffffff;
          //   box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
          // }
          // .row {
          //   display: flex;
          //   flex-direction: column;
          //   height: 80px;
          //   width: 400px;
          //   justify-content: center;
          //   padding: 0 20px;
          // }
          // .row-title {
          //   font-size: 16px;
          //   color: #afafaf;
          //   font-weight: 900;
          // }
          // .row-subtitle {
          //   font-size: 22px;
          //   font-weight: 700;
          // }
          // .disconnect-button {
          //   align-items: center;
          //   color: #f96666;
          //   font-size: 20px;
          //   font-weight: 900;
          // }
          // .disconnect-button:hover {
          //   cursor: pointer;
          // }
          // .divider {
          //   height: 0.1px;
          //   background-color: #e5e5e5;
          //   border: none;
          //   margin: unset;
          // }
          // .github {
          //   position: fixed;
          //   bottom: 30px;
          // }
          // @media screen and (max-width: 400px) {
          //   .connect-wallet-container {
          //     width: 80%;    
          //   }
          //   .button {
          //     width: 240px;
          //   }
          //   .connected-container, .row  {
          //     width: 300px;
          //   }
        `}</style>
    </div>
  );
}






    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // web3React.signMessage();
    // const signer = provider.getSigner();
    // const signedMessage = await signer.signMessage("stuff to sign");
    // console.log(signedMessage); 