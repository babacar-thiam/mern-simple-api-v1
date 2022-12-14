const path = require('path')
const wepack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  mode: 'production',
  entry: [
    path.join(CURRENT_WORKING_DIR, 'client/index.js')
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_externals/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  }
}

module.exports = config
