const path = require('path');

module.exports = {
  entry: './index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '/'),
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  ignoreWarnings: [/Failed to compile/],
};
