const path = require('path');

const config = {
  mode: 'development',
  entry: {
    main: './src/view/index.jsx',
    fetch: 'whatwg-fetch',
  },
  output: {
    path: path.resolve(__dirname, 'template', 'js'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
          },
        },
      },
    ],
  },
  serve: {
    port: 8080,
    content: './template/',
    dev: {
      publicPath: '/js/',
    },
    clipboard: false,
  },
};

module.exports = config;
