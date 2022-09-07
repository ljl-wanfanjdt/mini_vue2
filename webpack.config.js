const path = require('path')
module.exports = {
  entry: './src/index.js',
  optput: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: []
  },
  plugins: []
}