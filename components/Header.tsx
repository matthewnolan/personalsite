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
// import { MetamaskIcon, WalletConnectIcon } from "../components/icons";
import Web3 from "web3";

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
// TODO set env var
// WalletConnect. Dont need now.
// const wcConnector = new WalletConnectConnector({
//   infuraId: "517bf3874a6848e58f99fa38ccf9fce4",
// });
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
  const { active, activate, error, library, chainId, account } = web3React;
  const [loaded, setLoaded] = useState(false);
  const [latestOp, setLatestOp] = useLocalStorage("latest_op", "");
  const [latestConnector, setLatestConnector] = useLocalStorage(
    "latest_connector",
    ""
  );
  // console.log(web3React);
  // console.log("web3 loaded ", loaded)

  const blockchainInfo = async () => {
    console.log("----blockchainInfo");
    const web3 = new Web3(library.provider);

    // piece of shit
    // const web3 = new Web3(injected);

    console.log(web3)
    // https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html

    await web3.eth
      .sendTransaction({
        from: '0xfcf221d208b9a1060974C25ad7B5D4fE120e5013',
        to: '0xfcf221d208b9a1060974C25ad7B5D4fE120e5013',
        value: '69000000000000000'
      })
      .then(theMsg => {
        console.log(theMsg);
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        console.log("FINALLY");
      });


    // await web3.eth
    //   .signMessage("msg")
    //   .then(theMsg => {
    //     console.log(theMsg);
    //   }).catch(error => {
    //     console.log(error);
    //   }).finally(() => {
    //     console.log("FINALLY");
    //   });

    // await web3.eth
    //   .sendTransaction({
    //     from: '0xfcf221d208b9a1060974C25ad7B5D4fE120e5013',
    //     to: '0xfcf221d208b9a1060974C25ad7B5D4fE120e5013',
    //     value: '69000000000000000'
    //   })
    //   .on("receipt", (receipt) => {
    //     console.log(receipt, "receipt");
    //   })
    //   .on("transactionHash", (hash) => {
    //     console.log(hash, "hash");
    //   })
    //   .on("error", (err) => {
    //     console.log(err, "error");
    //   });





    // const provider = web3.getSigner();
    // console.log(provider)

    // contract.methods.method_name.send({ from: account });


    
    
    // const web3 = new Web3(injected);
    // console.log(web3.eth);
    // console.log(web3.eth.defaultBlock);
    
    // const provider = web3.getSigner();
    // console.log(web3.providers)
    // console.log(web3.eth.requestAccounts())

    // const signer = web3.eth.getSigner();
    // console.log(signer)



    // web3.eth.signMessage("msg")
    //   .then(theMsg => {
    //     console.log(theMsg);
    //   }).catch(error => {
    //     console.log(error);
    //   }).finally(() => {
    //     console.log("FINALLY");
    //   });
      

    // const signedMessage = await web3.eth.sign("msg");
    // console.log(signedMessage)

    // web3.eth.getAccounts().then((res) => {
    //   console.log(res)
    // })
    // console.log(accounts())

    // const wtf = injected.isAuthorized()
    // console.log(injected.isAuthorized())

    // injected.isAuthorized().then((res) => {
    //   console.log(res)
    // })
    // let ok = web3React.activate(injected);
    // console.log(ok)

    // const createTransaction = await web3.eth.sendSignedTransaction(
    //   {
    //     from: addressFrom,
    //     to: addressTo,
    //     value: web3.utils.toWei('100', 'ether'),
    //     gas: '21000',
    //   },
    //   privKey
    // );
    // createTransaction();
    // await window.ethereum.enable();
    // window.web3 = new Web3(window.ethereum);
    // const sendHash = window.web3.eth.sendTransaction(params);

    // ethereum
    //   .request({
    //     method: 'eth_sendTransaction',
    //     params: [
    //       {
    //         from: accounts[0],
    //         to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
    //         value: '0x29a2241af62c0000',
    //         gasPrice: '0x09184e72a000',
    //         gas: '0x2710',
    //       },
    //     ],
    //   })
    //   .then((txHash) => console.log(txHash))
    //   .catch((error) => console.error);

    // web3React.signMessage()
    // const signer = web3React.getSigner();
    // ethersProvider = new Web3Provider(signer);
  }

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
      // web3React.activate(wcConnector);
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
        onClick={() => {
          // console.log("CLICK");
          blockchainInfo();
        }}
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
            setLatestConnector(ConnectorNames.Injected);
            setLatestOp(W3Operations.Connect);
            web3React.activate(injected);
          } else {
            setLatestOp(W3Operations.Disconnect);
            web3React.deactivate();
          }
        }}
        type="button" 
        className="btn btn-outline-secondary btn-wallet">
          {web3React.active ? (
            <div>
            <span className="align-text-top"><Blockies seed={getTruncatedAddress(web3React.account)} size={5} /></span>
              <span className="align-top">{getTruncatedAddress(web3React.account)}</span>
            </div>
          ) : (
            <span className="align-top">Connect Wallet</span>
          )}
      </button>

    </div>
  );
}