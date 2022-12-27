---
title: Experiments in NFT Derivatives
published: true
datePublished: 1672131985000
author: Matthew Nolan
authorTwitter: ImMatthewNolan
authorPhoto: /images/matthew-nolan-thumbnail.jpg
tags: 
  - NFT
  - crosschain
  - ethereum
  - bsc
  - binance
  - derivatives
thumbnailPhoto: /images/blog-nft-cell-300x300.gif
bannerPhoto: /images/blog-nft-cell-500x1000.gif
canonicalUrl: /blog/cross-chain-nft-derivatives
description: I’m currently working on a prototype for a protocol which creates derivatives of NFTs across multiple blockchains.
---

I’m currently working on a prototype for a protocol which creates derivatives of NFTs across multiple blockchains. I want to share some of the architectural concerns.

*Our Goal:* A permissionless, decentralized system which allows users to create derivatives of NFTs like Bored Apes across multiple blockchains and markets.

# Problems We Want to Solve
- **The blockchain ecosystem is growing increasingly fractured.** There are many blockchains which support NFTs, but each chain is somewhat of an island onto itself, and the NFTs on those chains are trapped on the blockchain of its origin.
- **Lack of liquidity.** While Non-Fungible Tokens are designed to be, well, non-fungible. There is nonetheless a demand for liquidity.
- **The Ethereum gas is too high.** Most of the “blue-chip” NFTs are on Ethereum. However the Ethereum network is relatively slow and expensive in terms of gas fees. Allowing users to create derivatives of their Ethereum NFTs on other networks would give them new flexibility.

# Overall Architecture
Essentially what we want is something which allows anybody to create derivatives of any NFT. (Waiting for the sole owner of a Bored Ape to lock up their NFT would slow user acquisition).

## Over-Collateralized Debt Positions
There are protocols which allow users to "fractionalize" NFTs by locking them in a contract and minting fungible tokens which represent their asset’s. However the ideal system is much more flexible and market supply is not dependent on converting sole NFT owners. (Waiting for the sole owner of a Bored Ape to lock up their NFT would slow user acquisition).

The ideal system is one where any user can create derivatives of any NFT. What we want is something similar to MakerDAO, where users over-collateralize the value of an NFT with another asset. Basically, if an NFT floor is at $100, the user would deposit $150 of DAI to mint their fungible derivative, which they could then freely trade. A key difference is that MakerDAO is a system for creating [Collateralized Debt Positions](https://coinmarketcap.com/alexandria/glossary/collateralized-debt-position-cdp) for a single asset, the U.S. dollar. We essentially need to create millions of MakerDAOs for a market of millions of NFTs.

## Creating Cross Chain Markets
As previously mentioned, allowing users to supply collateral on one chain and mint a derivative on another, is a critical feature. Since it allows users to trade assets on a chain, it will result in cheaper transaction fees. Critically, this design creates arbitrage opportunities between the various markets, which invites autonomous actors to effectively make markets.

*Example:* A user wants to create a derivative of their favorite Ethereum NFT (Bored Monkey), which has a floor price of $100. The user deposits $150 into the dApp, and it mints a fungible token representing that NFT on a blockchain of the users preference, let's say on BSC. The user then deposits their synthetic Bored Monkey derivative into a Liquidity Pool on Pancake Swap with $100 BUSD. There is now a market for Bored Monkey on another blockchain with $200 liquidity. And this user is now earning yield on trading fees.

Because BSC is cheaper than Ethereum, someone else buys that Bored Monkey derivative. Other people notice this new market and also mint Bored Monkey derivatives to do the same. Because this Bored Monkey has more volume on BSC than the illiquid NFT on Ethereum, it trades on BSC slightly higher than the floor price of the original NFT (lets say $105). There is now an arbitrage opportunity between these markets. As traders jump on the opportunity this creates even more volume and liquidity. Meanwhile back on Ethereum, seeing this price action someone buys the original Bored Monkey for $104.

# Oracle Considerations
CDP’s require a price feed to ensure the token stays stable. Generally, most NFT defi products use the collection floor price as the “value” of the NFT asset. One of the challenges to applying defi financial primitives to NFTs is the dependency on price data, which originates off-chain like the Open Sea API. [Chainlink](https://docs.chain.link/data-feeds/nft-floor-price) is of course the dominant oracle project and they recently launched an API for NFT price data. One major consideration from the NFT market is that it’s critical to have a diverse set of price feeds as a singular source, which is subject to price manipulation. Our users will want transparency into these data sources to trust our system. Ideally, we will need to aggregate price data from a wide matrix of price feeds.

# The Tech
This protocol is sort of a mashup of existing technology. We know there are excellent smart contract CDP systems. We know they are on-chain Oracles. The final piece is a secure, cost efficient cross chain messaging system.

## Bridging Tech: Committee Based vs Proof Based
Bridges come in two basic flavors: 1) proof-based and 2) committee-based. Proof-based solutions entail cryptographic proving of the validity of any transaction of one chain in the other. Whereas the committee-based solution relies on the social consensus of the bridge validators to attest for the transaction validity, which often involves no cryptographic proving.

Proof-based messaging can be made to be totally disintermediated. Committee-based introduces potential censorship and security vulnerabilities. I personally tend to be a bit of a decentralization maximalist if only for the security guarantees, so Proof-based is the most attractive.

# Final Thoughts
This project is currently under development. Just wanted to share some thoughts about how to make NFTs a bit more liquid.