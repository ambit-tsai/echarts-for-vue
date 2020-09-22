const rollup = require('rollup');
const inputOptions = require('./input-options');
const banner = require('./banner');


(async () => {
    const bundle = await rollup.rollup(inputOptions);

    // Create the UMD version
    await bundle.write({
        file: 'dist/echarts-for-vue.js',
        format: 'umd',
        banner,
        name: 'ECharts',
        globals: {
            echarts: 'echarts',
            'resize-detector': 'resizeDetector',
        },
    });

    // Create the ESM version
    await bundle.write({
        file: 'dist/echarts-for-vue.mjs',
        format: 'esm',
        banner,
    });

})();

