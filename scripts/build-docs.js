const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const config = require('./test-vue2');


module.exports = {
    ...config,
    mode: 'production',
    output: {
        path: `${ROOT}/docs`,
        filename: 'index.js',
    },
};