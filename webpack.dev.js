const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const javascript = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["es2015", "react"]
    }
  }
};

const images = {
  test: /\.(png|jpg|pdf)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "images/"
    }
  }
};

const scss = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "resolve-url-loader", "sass-loader?sourceMap"],
    publicPath: "/"
  })
};

const fonts = {
  test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "fonts/"
    }
  }
};

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: "./src/index.js",
  devServer: {
    port: 8080,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [javascript, images, scss, fonts]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new ExtractTextPlugin("style.css")
  ]
};
