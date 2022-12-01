import React from 'react';
import Link from 'next/link';
import { globals } from '../globals';

import Blockies from 'react-blockies';

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
      return address.substr(0, 6) + "..." + address.substr(address.length - 4);
    }
    return address;
  };

  const getNetwork = (chainId: any) => {
    switch (chainId) {
      case 1:
        return "Ethereum Mainnet";
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

      <button 
        type="button" 
        className="btn btn-outline-secondary disabled btn-wallet">
          {web3React.active ? (
            <div className="align-top">{getNetwork(web3React.chainId)}</div>
          ) : (
            <div className="hidden-text align-top">Ethereum Mainnet</div>
          )}
      </button>

      <button 
        onClick={() => {
          if (!web3React.active) {
            console.log("connect btn")
            setLatestConnector(ConnectorNames.Injected);
            setLatestOp(W3Operations.Connect);
            web3React.activate(injected);
          } else {
            console.log("disconnect btn")
            setLatestOp(W3Operations.Disconnect);
            web3React.deactivate();
          }
        }}
        type="button" 
        className="btn btn-outline-secondary btn-wallet">
          {web3React.active ? (
            <div>
              <span className="align-text-top"><Blockies seed={web3React.account} size={5}></Blockies></span>
              <span className="align-top">{getTruncatedAddress(web3React.account)}</span>
            </div>
          ) : (
            <span className="align-top">Connect Wallet</span>
          )}
      </button>

    </div>
  );
}






    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // web3React.signMessage();
    // const signer = provider.getSigner();
    // const signedMessage = await signer.signMessage("stuff to sign");
    // console.log(signedMessage); 