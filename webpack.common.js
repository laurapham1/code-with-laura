const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const port = process.env.PORT || 3000

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, "public", 'dist'),
        clean: true,
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".ts", ".tsx", ".js", "jsx", "json"],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: 'public/favicon.ico',
      }),
    ],
}
