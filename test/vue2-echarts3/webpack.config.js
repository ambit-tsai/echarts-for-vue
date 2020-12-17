const path = require('path');
const ROOT = __dirname;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    context: ROOT,
    entry: `${ROOT}/src/main.js`,
    output: {
        path: `${ROOT}/dist/`,
        filename: '[name].js',
    },
    resolve: {
        alias: {
            'echarts-for-vue$': path.resolve(ROOT, '../../src/ECharts.js'),
        },
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false,    // "vue-style-loader" doesn't support ES Module
                    },
                },
            ],
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: `${ROOT}/index.html`,
            filename: 'index.html',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 2003,
        hot: true,
        open: true,
    },
};