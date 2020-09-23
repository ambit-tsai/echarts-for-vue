import serve from 'rollup-plugin-serve';


const babel = require('@rollup/plugin-babel');
const inputOptions = require('./input-options');
const banner = require('./banner');


export default {
    ...inputOptions,
    output: {
        file: 'docs/echarts-for-vue.js',
        format: 'umd',
        name: 'EChartsForVue',
        banner,
    },
    plugins: [
        babel.default({
            babelHelpers: 'bundled',
            presets: [
                '@babel/preset-env'
            ],
        }),
        serve({
            open: true,
            openPage: '/docs/index.html',
        }),
    ],
    watch: {
        include: 'src/**',
    },
};