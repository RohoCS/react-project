const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.tsx",
  },
  output: {
    filename: "[name].[fullhash].js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 4200,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CssPlugin({
      filename: "style[fullhash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [CssPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
