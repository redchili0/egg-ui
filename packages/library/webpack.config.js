var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: path.resolve(__dirname, "src/index.ts"),
  entry: {
    button: "./src/components/button/index.tsx",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist/components"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  devtool: "inline-source-map",
  externals: ["react", "remax"],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: __dirname + "/postcss.config.js",
              },
            },
          },
        ],
      },
    ],
  },
  // 提取组件样式，并统一放置到 style 文件夹下
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ],
};
