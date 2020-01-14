/** ----------------------------------------
    Modules
 ---------------------------------------- */

const fs = require('fs');
const path = require('path');

/** ----------------------------------------
     Webpack
 ---------------------------------------- */

const webpack = require('webpack');

/** ----------------------------------------
     Plugins
 ---------------------------------------- */

const InjectExportableClass = require('./plugins/InjectExportableClass');

/** ----------------------------------------
     Settings
 ---------------------------------------- */

const BASE_DIR = __dirname + '/./../';

/** ----------------------------------------
     Banner
 ---------------------------------------- */

const banner = require('./../src/setup/_banner');

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

module.exports = {
    devServer: {
        contentBase: path.join(BASE_DIR),
        port: 3000,
        watchContentBase: true
    },
    entry: './src/needle.js',
    output: {
        filename: 'needle.js',
        path: path.resolve(BASE_DIR + 'dist'),
        umdNamedDefine: true,
        libraryExport: 'default',
        libraryTarget: 'var',
        library: 'Needle'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@build': path.resolve(BASE_DIR, 'dist/'),
            '@js': path.resolve(BASE_DIR, 'src/'),
            '@mock': path.resolve(BASE_DIR, 'mockup/'),
            '@util': path.resolve(BASE_DIR, 'src/util/')
        },
        extensions: ['*', '.js']
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: banner(process.env)
        }),
        new InjectExportableClass('./dist/needle.min.js')
    ]
};