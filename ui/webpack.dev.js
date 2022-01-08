const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, 'public'),
  entry: path.join(__dirname, 'src', 'container', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    },{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.(png|svg|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: 'images/'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simpleweb',
      inject: false,
      template: path.join(__dirname, 'src', 'index.ejs'),
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  }
};
