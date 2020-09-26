const path = require('path');
const ROOT = path.resolve(__dirname, '../test/vue3');


export default {
    root: ROOT,
    port: 8003,
    open: true,
    alias: {
        vue: 'vue3',
        '/@test/': path.resolve(ROOT, '..'),
        '/@dist/': path.resolve(__dirname, '../dist'),
    },
}