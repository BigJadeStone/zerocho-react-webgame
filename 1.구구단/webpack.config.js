const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', //운영시에는 production 으로 바꾸기.
  devtool: 'inline-source-map', // 개발시에는 eval <> 운영시에는 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [],
      },
    }],
  },
  plugins: [
      new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};
