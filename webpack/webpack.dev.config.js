/** ----------------------------------------
    Webpack
 ---------------------------------------- */

const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'needle.js'
    }
});