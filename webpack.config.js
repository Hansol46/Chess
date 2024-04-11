const path = require("path");
const MiniCssExtactPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const cssLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[hash:base64:5]",
      auto: true,
    },
  },
};

/**
 * Настроить dev server
 */
module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    publicPath: "auto",
    chunkFilename: "[contenthash].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "swc-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtactPlugin.loader, cssLoader],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtactPlugin.loader, cssLoader, "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new MiniCssExtactPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), 
    }),
  ],
};
