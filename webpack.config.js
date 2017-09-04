
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  devtool: 'eval-source-map',

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }

    ]
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),

    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: "./src/index.html",
      // favicon: path.resolve(__dirname, '../static/favicon.ico'),
    })

  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
};

module.exports = config;
