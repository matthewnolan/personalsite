          <img className="rounded-circle img-thumbnail" src="/images/matthew-nolan-thumbnail.jpg" alt="Matthew Nolan" style={{ maxWidth: '80px' }} />



<!-- on index -->

      <section className="hidden">
        <h2>Hello</h2>
        <div>
          {/* comment */}
          {/* intro, ted talk, media logos, social links. thats it! */}
          <Markdown source={props.introduction} />
          <p>social icons</p>
        </div>
      </section>



<a target="_blank" className="menloLogos hidden" href="https://bitcoinexchangeguide.com/civic-secure-identity-platform-selected-for-menlo-one-for-blockchain-verification/"><img src="/images/logos/logo-beg.png" alt="Bitcoin Exchange Guide Blockchain media article about the decentralized menlo one blockchain framework" /></a>

<a target="_blank" className="menloLogos hidden" href="https://theblockchainland.com/2018/08/28/top-10-promising-blockchain-projects-of-2018/"><img src="/images/logos/logo-blockchainland.png" alt="Blockchain Land Blockchain media article about the decentralized menlo one blockchain framework" /></a>



//importing old stuff on index

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile('introduction.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;

  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    readme: readme,
    posts,
  };
  return { props };
};
