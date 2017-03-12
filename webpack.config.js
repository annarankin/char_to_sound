var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
