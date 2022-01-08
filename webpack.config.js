const path = require('path');

const mode = 'production';
const devtool = (mode === 'development') ? 'eval-source-map' : 'source-map';

module.exports = {
  mode,
  entry: {
    index: './src/index.js',
  },
  devtool,
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
};
