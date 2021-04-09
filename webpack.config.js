const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "wp5-starter",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: {},
    }),
    new HtmlWebpackPlugin(),
  ],
};
