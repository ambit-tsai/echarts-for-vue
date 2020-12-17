const path = require('path');
const ROOT = __dirname;


export default {
    root: ROOT,
    port: 3005,
    open: true,
    alias: {
        'echarts-for-vue': '/@lib/ECharts.js',
        '/@lib/': path.resolve(ROOT, '../../src'),
        '/@src/': path.resolve(ROOT, '../vue2-echarts3/src'),
    },
}