const path = require('path');

const config = {
  mode: 'development',
  entry: {
    main: './src/view/index.jsx',
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
};

module.exports = config;
