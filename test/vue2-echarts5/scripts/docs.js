const config = require('./test');
const path = require('path');


config.mode = 'production';
config.output = {
    path: path.resolve(__dirname, '../../../docs/'),
    filename: '[name].js',
};


module.exports = config;