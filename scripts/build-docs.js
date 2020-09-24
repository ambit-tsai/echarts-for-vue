const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-inline-source-map',
    context: ROOT,
    entry: `${ROOT}/test/main-vue3.js`,
    output: {
        path: `${ROOT}/docs`,
        filename: 'test-vue3.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${ROOT}/test/index.html`,
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};