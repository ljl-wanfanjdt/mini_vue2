const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    vue: {
      import: './src/index.js',
      filename: 'vue.js'
    },

  },
  output: {
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      name: 'Vue',
      type: 'umd',
      export: 'default'
    }
  }
}