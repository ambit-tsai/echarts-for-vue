const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    // devtool: 'cheap-module-inline-source-map',
    context: ROOT,
    entry: `${ROOT}/test/vue2/main.js`,
    output: {
        path: `${ROOT}/dist/test-vue2`,
        filename: 'index.js',
    },
    resolve: {
        alias: {
            vue: 'vue2',
        },
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
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
                'vue-style-loader',
                'css-loader'
            ],
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: `${ROOT}/test/vue2/index.html`,
            filename: 'index.html',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        contentBase: `${ROOT}/dist/test-vue2`,
        port: 8002,
        hot: true,
        open: true,
    },
};