---
title: Moving DAOs Back on Blockchain 
published: true
datePublished: 1643937046000
author: Matthew Nolan
authorTwitter: ImMatthewNolan
authorPhoto: /images/matthew-nolan-thumbnail.jpg
tags: 
  - Ethereum
  - DAO
thumbnailPhoto: /images/blog-dao-400x400.jpg
bannerPhoto: /images/blog-dao-800x400.jpg
canonicalUrl: /blog/moving-daos-back-on-blockchain
description: There are many benefits to moving DAOs back on-chain which many are overlooking. I wanted to drop a few feature concepts of the sort of problems entirely on-chain DAOs might solve.
---

In the last year we have been working with multiple teams creating various types of DAOs ranging from launchpads to artists grants. It seems everyone is in favor of using off chain tools like [Snapshot](https://snapshot.org/) because of its slick UI and of course to save gas. While Snapshot is cool, I think there are many benefits to moving DAOs back on-chain which many are overlooking. I wanted to drop a few feature concepts of the sort of problems entirely on-chain DAOs might solve.

# Instant Liquidity
Right now across almost all investment or funding DAOs, after a project gets funded it's usually up to the project to launch a liquidity pool (or make a market on a centralized exchange). It's actually a sort of nervous moment for everyone in the community. Although everyone in the DAO invested in who they hope would never do this, it's possible for the project to exit scam at this stage. The sigh of relief and a reconfirmation that the DAO is making smart choices comes only when the project owner deploys some liquidity on an AMM. Investors are now able to at least sell their token should they choose to.

These LPs could be created entirely on-chain automatically at the end of a funding event. There are some projects that come close to doing this like Balancer. The trouble though is that it’s not designed to get projects funding, only distribute tokens. It would be much safer to swap tokens from DAOs / investors / buyers / etc, and afterwards deploy a liquidity pool on the DAOs AMM of choice, entirely on chain.

# Rug Pull Proof LP Management
A "rug pull", for those who don't know, is a type of attack whereby the capital in a liquidity pool is pulled without warning. For instance token buyers see a large amount of liquidity and assume that if they buy a token, they will be able to sell it later at a profit (or loss), but the actor who hold some or all of the liquidity pulls everything out, leaving people holding tokens (which may technically have been increasing in price) without anyone else to sell the token to. Get the name, it’s like having a run pulled out from under you.

The other problem with LBPs or Uniswap “fair launches” is that the original LP tokens are still controlled by individuals who can “rug” the liquidity acquired from the sale. This was recently seen with AnubisDAO where the project did a “fair launch” LBP sale, however one of the core team members controlled all the liquidity tokens and ended up stealing them, running off with $25m in investor funds while the sale was ongoing.

There is a brutally elegant solution to preventing rug pulls: simply locking the LP tokens up in a contract so liquidity is impossible to remove, either a vault, vesting, or giving the DAO control. Many know to look for locked LP tokens and actually some blockchain explorers such as DexTools have even built in features which shows if the LP is locked. So I think it makes sense to do this all at once, on chain, without any ambiguity.

# On-Chain Treasury Governance
Currently many DAOs use Snapshot to vote on project treasury, use of funds, etc. While Snapshot is an extremely cool tool as it lets users vote with their Web3 identity, it lacks the ability to execute proposals.

I'm very inspired by [Vitaliks 2017 post about DAICOs](https://ethresear.ch/t/explanation-of-daicos/465). He aims to solve the problem of exit scam risk and give investors increased transparency and participation in project development. While that exact model may not fit in this market, I think there are some interesting ideas worth borrowing from. The ideal system is one where funds are distributed at regular intervals after a DAO governance vote: milestone conditional funding.

Furthermore it would be useful to move the projects token treasury into a governed smart contract. Recently there was [a controversy](https://www.theblockcrypto.com/post/132340/wonderland-votes-out-quadrigacx-co-founder-sifu-and-is-considering-shutting-down) with WonderlandDAO where the community got upset after it was discovered a possibly shady character was in charge of treasury management. They used Snapshot to vote on whether to have him replaced. It would be better to simply put the entire project treasury on chain and put the DAO itself in control of managing it. Use of treasury funds will simply be a proposal from the development team the DAO votes on. This will also reduce the risk of treasury dumps.

# Distributed Yield Rewards
DAOs might be managing a matrix of assets including, project tokens, the project treasury, LP tokens, and tokens the projects allocate for public LP yield rewards. This presents an opportunity to offer this available capital in over collateralized loans to the broader DeFi ecosystem, which itself will generate returns in the form of fees. DAO members will not just be profiting from their project investments, but also in fees generated from the underlying protocol assets.

Just a few ideas to make the DAO world better and safer. 

[Cross-posted on Mirror.xyz](https://mirror.xyz/matthewnolan.eth/Am3ez7Wy8vanXNZHGKmpfWsb_nGPd2oIGKyOmgiUxM4)