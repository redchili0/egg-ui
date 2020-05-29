var path = require("path");

module.exports = {
  // output: 'build',
  configWebpack({ config, webpack, addCSSRule }) {
    // config 是的 https://github.com/neutrinojs/webpack-chain Config 对象。

    config.module
      .rule("js")
      .use("linariaLoader")
      .loader("linaria/loader")
      .options({
        sourceMap: process.env.NODE_ENV !== "production"
        // extensions: ".linaria.wxss"
      });
  },
};
