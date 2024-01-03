/* eslint-disable no-undef */
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (config, env) => {
  if (env === 'production') {
    // Enable gzip compression for production builds
    config.plugins.push(
      new CompressionPlugin()
    );
  }

  return config;
};
