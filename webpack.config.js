const path = require('path');
const date = new Date();

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          },
          {
            loader: 'banner-loader',
            options: {
              author: 'zhaoyiming',
              time: date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
            }
          }
        ]
      }
    ]
  }
}