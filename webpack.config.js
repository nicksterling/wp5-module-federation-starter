const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
//const deps = require("./package.json").dependencies;

module.exports = {
  mode: "production",
  // devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "wp5-starter",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {},
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
};