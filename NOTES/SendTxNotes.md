
  const blockchainInfo = async () => {
    // console.log("----blockchainInfo");
    // console.log(web3React);

    //  Enable session (triggers QR Code modal)
    // await injected.enable();
    //  Create Web3
    console.log("------ web3 ------")
    const web3 = new Web3(library.provider);
    // const web3 = new Web3(injected);

    console.log(web3)

    const transactionParameters = [
      {
        method: "eth_sendTransaction",
        params: [
          {
            to: "0xfcf221d208b9a1060974C25ad7B5D4fE120e5013", // Required except during contract publications.
            from: "0xfcf221d208b9a1060974C25ad7B5D4fE120e5013", // must match user's active address.
          },
        ],
      },
    ];
    console.log(transactionParameters[0].params[0]);


    await web3.eth
      .sendTransaction(transactionParameters[0].params[0])
      .on("receipt", (receipt) => {
        console.log(receipt, "receipt");
      })
      .on("transactionHash", (hash) => {
        console.log(hash, "hash");
      })
      .on("error", (err) => {
        console.log(err, "error");
      });



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