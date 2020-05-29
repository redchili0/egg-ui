// babel.config.js
module.exports = {
  presets: [
    // path.resolve(__dirname, "../../linaria-loader/babel.js"),
    [
      "remax",
      {
        typescript: {
          allowNamespaces: true,
        },
        "class-properties": {
          loose: true,
        },
        decorators: {
          legacy: true,
        },
        "throw-if-namespace": true,
        targets: ["chrome >= 49", "firefox >= 64", "ios >= 8", "Android > 4.4"],
      },
    ],
  ],
};
