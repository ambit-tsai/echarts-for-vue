const path = require('path');
const ROOT = path.resolve(__dirname, '../test/vue3');


export default {
    root: ROOT,
    port: 8003,
    open: true,
    alias: {
        vue: 'vue3',
        'echarts-for-vue': '/@src/ECharts.js',
        '/@test/': path.resolve(ROOT, '..'),
        '/@src/': path.resolve(__dirname, '../src'),
    },
}