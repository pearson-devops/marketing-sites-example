const withSvgr = require("next-svgr");
const withTM = require('next-transpile-modules')(['ui']);
const withPlugins = require('next-compose-plugins');

// next.js configuration
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
};

module.exports = withPlugins([

  // add a plugin with specific configuration
  /*[sass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[local]___[hash:base64:5]',
    },
  }],*/

  // add a plugin without a configuration
  withTM,
  withSvgr,

], nextConfig);