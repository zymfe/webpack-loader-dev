const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'test/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  // loader 执行顺序是 pre loader > normal loader > inline loader > post loader
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['test-loader-1', 'test-loader-2'],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: ['test-loader-4']
      },
      {
        test: /\.js$/,
        use: 'test-loader-3',
        enforce: 'post'
      }
    ]
  }
};