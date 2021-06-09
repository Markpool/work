const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  mode: 'development',
  entry: './src/page.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/page.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
    open: true
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }
          }
        ]
      },

      {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          // "style-loader",
          // "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

    ]
  },

  plugins: [
    //очистка папки dist сборкой
    new CleanWebpackPlugin(),

    //pug файлы генерируемые в html
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/pug/index.pug',
      inject: 'body'
    }),

    new HtmlWebpackPlugin({
      filename: "content.html",
      template: './src/pug/content.pug',
      inject: 'body'
    }),


    //отвечает за css
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    }),

    //отвечает за копирование не компилируемых файлов в продакшен
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/public',
          to: './'
        }
      ]
    })

    
  ]
}