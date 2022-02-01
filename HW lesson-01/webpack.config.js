const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'GeekBrains Shop JS2',
      template: path.resolve(__dirname, './public/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
  ],

  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: "sass-loader",
          options: {
            // Prefer `dart-sass`
            implementation: require("sass"),
          },
        },
      ]
    }]
  },
}