const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client'], //확장자 굳이 안 적어도됨. 나중에 json, css 등등 많이들어옴. -> resolve에 확장자만 추가하면 됨.
  }, //입력

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-refresh/babel']
      },

    }]
  },
  plugins: [
      new RefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'), // C:\\users\zerocho]webstorm\react-webgame\lecture\dist
    filename: 'app.js',
    publicPath: '/dist'
  }, //출력

  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  }
};
