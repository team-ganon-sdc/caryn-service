const path = require('path');
const SRC_DIR = path.join(__dirname, './client/src');
const BUILD_DIR = path.resolve(__dirname, './public/build');
var DIST_DIR = path.join(__dirname, './client/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: '/node_modules/',
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
