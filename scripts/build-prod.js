const rollup = require('rollup');
const babel = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const banner = require('./banner');


(async () => {
    const bundle = await rollup.rollup({
        input: 'src/ECharts.js',
        plugins: [
            babel.default({
                babelHelpers: 'bundled',
                presets: [
                    '@babel/preset-env'
                ],
            }),
            terser(),
        ],
    });

    // Create the UMD version
    await bundle.write({
        file: 'dist/echarts-for-vue.js',
        format: 'umd',
        banner,
        name: 'EChartsForVue',
    });

    // Create the ESM version
    await bundle.write({
        file: 'dist/echarts-for-vue.mjs',
        format: 'esm',
        banner,
    });

})();

