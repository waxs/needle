/** ----------------------------------------
    Webpack
 ---------------------------------------- */

const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

/** ----------------------------------------
    Plugins
 ---------------------------------------- */

const InjectExportableClass = require('./plugins/InjectExportableClass');
const ReplaceFunctions = require('./plugins/ReplaceFunctions');

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'needle.pkg.js'
    },
    plugins: [
        new InjectExportableClass(),
        new ReplaceFunctions()
    ]
});