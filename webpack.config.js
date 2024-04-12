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

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
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
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@entities": path.resolve(__dirname, "src/entities/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
    },
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
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    client: {
      logging: "warn",
      progress: true,
    },
  },
};
