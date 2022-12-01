module.exports = {
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    return config;
  },
};
