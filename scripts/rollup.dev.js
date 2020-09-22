import serve from 'rollup-plugin-serve';
const inputOptions = require('./input-options');
const banner = require('./banner');


export default {
    ...inputOptions,
    output: {
        file: 'docs/echarts-for-vue.js',
        format: 'umd',
        name: 'ECharts',
        globals: {
            echarts: 'echarts',
            'resize-detector': 'resizeDetector',
        },
        banner,
    },
    plugins: [
        serve({
            open: true,
            openPage: '/docs/index.html',
        })
    ],
    watch: {
        include: 'src/**',
    },
};