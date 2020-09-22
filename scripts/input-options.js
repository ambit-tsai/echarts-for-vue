const babel = require('@rollup/plugin-babel');
const {terser} = require('rollup-plugin-terser');


module.exports = {
    input: 'src/ECharts.js',
    external: [
        'echarts',
        'resize-detector',
    ],
    plugins: [
        babel.default({
            babelHelpers: 'bundled',
            presets: [
                '@babel/preset-env'
            ],
        }),
        terser(),
    ],
};