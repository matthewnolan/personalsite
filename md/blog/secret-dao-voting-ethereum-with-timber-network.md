---
title: Secret DAO Voting on Ethereum with Timber Network 
published: true
datePublished: 1671618794000
author: Matthew Nolan
authorTwitter: ImMatthewNolan
authorPhoto: /images/matthew-nolan-thumbnail.jpg
tags: 
  - Timber
  - Ethereum
  - DAO
  - Secret
  - SCRT
thumbnailPhoto: /images/blog-timber-network-ethereum-dao-secret-vote-thumbnail-400x400.jpg
bannerPhoto: /images/blog-timber-network-ethereum-dao-secret-vote-1500x750.jpg
canonicalUrl: /blog/secret-dao-voting-ethereum-with-timber-network
description: We are developing a new cross-chain messaging relayer we call Timber Network, which we used to allow Ethereum DAOs to vote secretly by leveraging the Secret blockchain. 
---

In Brief:
- Some colleagues and I are developing a new cross-chain messaging relayer we call [Timber Network](https://github.com/timbernetwork). 
- We used it for a prototype which leverages the [Secret Network](https://scrt.network/) to enable Ethereum DAOs to vote secretly without ever having to migrate their ERC20 tokens (video demo below).
- Our prototype [won a hackathon sponsored by BitDao](https://twitter.com/sozuhaus/status/1600305757353701377), of which we are extremely honored.
- 🌳🌐


<p><div className="text-center embed-container">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/xgD8ouIV50M" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>
</div>
<small>In this video I demonstrate an Ethereum DAO user doing secret ballot voting by using Timber Network to leverage the privacy features of Secret Network without having migrate their tokens off of Ethereum.</small>
</p>

# Application Specific Cross-Chain Messaging

I wanted to share a little info on a project I've been working on with some colleagues. We're building a network which allows different distinct blockchains to communicate and interact with one another. We call it [Timber Network](https://github.com/timbernetwork). Timber stands for Trustless Incentivized Messaging Blockchain Encrypted Relayer.

The [first generation of this sort of technology, the "bridges"](https://jumpcrypto.com/security-stack-up-how-bridges-compare/), were  comprised of trusted third parties which simply moved tokens from ChainA to ChainB, several having some high profile security issues. Then came the 2nd generation, the "relayers" which are much harder in terms of security. Some introduced features for "generalized" cross-chain message relaying. This feature could be very useful though it's primary use for token transfers in and out of liquidity pools ie "bridging".

While some of these generalized messaging relayers are extremely cool, they all seem to focus on "general messaging" as its primary use was token transfers. I see a need for a next generation, relayers which execute more complex logic: an "application specific" relayer. The concept is that dApps that share common dApp primitives (ie voting, minting NFTs, swaps) agree on a standardized set of messaging protocols which would allow distinct blockchains to work interoperably. The goal is to connect blockchains together and leverage one another’s features like Lego's.

# Introducing Timber Network

Timber Network has three primary components: a base blockchain which manages governance, gateway smart contract deployed on supported chains, and relayers which are responsible for interacting with gateway smart contracts. Privacy is preserved using [ZK-SNARKs](https://vitalik.ca/general/2022/06/15/using_snarks.html) between the relayer and base chain. The base chain enforces trust minimization in the network while allowing modularity in the from the contracts and relayer.

# Working Example: Secret Ballot DAO Voting for Ethereum

**Problem:** The Ethereum network is public by design which is usually great for most use cases, but bad for DAOs who want a secret ballot (since anyone can see how you voted). Secret ballots are sort of an [MVP feature of democracy](https://en.wikipedia.org/wiki/Secret_ballot) which isn't possible on Ethereum alone. This is actually a growing problem as teams increasingly form DAOs to operate their startup (voting against your team or boss might lead to some awkward situations).

There are other blockchains which have privacy features, one of our favorites being [The Secret Network](https://scrt.network/). But it's difficult for a DAO to simply pack up and migrate to an entirely different blockchain because the DAO might have voting tokens which they cannot bridge, a locked treasury, or using ENS for their identity. With an "application specific" cross-chain relayer, the DAO can balance the strengths and weakness of multiple chains together such as keeping their voting tokens on Ethereum but using the privacy of Secret Network to vote.

**Solution:** To demonstrate this we built a prototype which balances both networks. We have contracts deployed to both Secret and Ethereum and a relayer with limited permissions on each. Upon voting the relayer provides Secret with the only data points it needs to know: a signed message with their ETH address, voting token balance, and chain metadata which registers the user to vote on Secret.

What is known is that a user is registered but not what they voted for. At the end of the proposal only the result is sent back to Ethereum, where it would be possible to then call another contract such as a treasury contract. All execution is trustless, votes are private, and the relayer only has permissions to read and write these specific data.

# Further Plans

This DAO use case is just one example of the potential possibilities of using blockchains in this way. There are endless possibilities when connecting these networks like this. Our long term vision is a blockchain equivalent of [Zapier](https://zapier.com/).  As a developer this is what I want:

- I want a private, encrypted, front run resistant order book on `Oasis` to trigger transactions on `Ethereum` `Uniswap`
- I want members of my DAO on `Ethereum` to vote on a political party privately on `Secret Network` with their `Ethereum` voting tokens, and then give those who voted access to my politics group on `Lens Protocol`
- I want to `mint an NFT` on `BSC` only to users who own a `Bored Ape` on `Ethereum`
- I want users to be able to stake their `Solana` NFTs to validate on `Cosmos`
- I want users to add liquidity to my token on `Uniswap` on `Ethereum` and then `bridge` their LP token over to my yield farm on `Avalanche`
- I want to build an epic Web3 game where the top PFP NFTs from `Ethereum` `BSC` and `Avalanche` battle one another in a fierce metaverse dance off for yield rewards on `Moonbeam`

And I want all of that to happen in a way which is trustless, verifiable, private when it needs to be, and without making a single Web2 API call.  

# Final Thoughts

Timber Network is under heavy development and there is still a lot of work to be done. If you're interested in working with us, please reach out on [Twitter](https://x.com/CryptoDiscoFun) or email.

Team Timber would also like to give thanks to [BitDAO](https://www.bitdao.io/) and [Sozu House](https://twitter.com/sozuhaus) for their support on this project.


