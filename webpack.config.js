const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/frontend/index.jsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: {
                "presets": [
                  "@babel/preset-env",
                  "@babel/preset-react",
                ],
                "plugins": ["@babel/plugin-proposal-object-rest-spread"]
              },
            },
            {
              test: /\.(css)$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                  }
                }
              ]
            },
            {
              test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
              loader: "file-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/frontend/public/index.html"
        })
    ]
}