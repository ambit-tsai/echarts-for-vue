const rollup = require('rollup');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const banner = require('./banner');


(async () => {
    const bundle = await rollup.rollup({
        input: 'src/ECharts.ts',
        plugins: [
            typescript(),
            terser(),
        ],
    });

    // Create the UMD version
    await bundle.write({
        file: 'dist/echarts-for-vue.js',
        banner,
        sourcemap: true,
        format: 'umd',
        name: 'EChartsForVue',
    });

    // Create the ESM version
    await bundle.write({
        file: 'dist/echarts-for-vue.mjs',
        banner,
        sourcemap: true,
        format: 'esm',
    });

})();

