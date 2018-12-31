const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body"
})

const mode = process.NODE_ENV || "production";
module.exports = {
    mode,
	entry: "./src/index.js",
	output: {
		path: path.resolve("dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }]
			},
			{
				test: [/\.js$/, /\.jsx?$/],
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
    },
    plugins: [HtmlWebpackPluginConfig,
      new Dotenv({
        path: "./.env",
        safe: true,
        systemvars: true,
        silent: true
      })
    ],
  devServer: {
    // http: true,
    historyApiFallback: true
  },

};
