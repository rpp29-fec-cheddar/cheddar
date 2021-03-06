var path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  cache: false,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    ],
  },
};
