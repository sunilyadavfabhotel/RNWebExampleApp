const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets, plugins} = require(`${appDirectory}/babel.config.js`);
const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: [
    path.resolve(__dirname, 'index.web.js'),
    path.resolve(__dirname, 'App.tsx'),
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'component'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  type: 'asset',
  generator: {
    filename: 'images/[hash][ext][query]',
  },
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
};

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'web-build'),
    publicPath: './',
    filename: 'js/[name].[contenthash].bundle.js',
    chunkFilename: 'js/[name].[contenthash].chunk.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      cssLoaderConfiguration,
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false),
    }),
  ],
};
