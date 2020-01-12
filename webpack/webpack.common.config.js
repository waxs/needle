/** ----------------------------------------
    Modules
 ---------------------------------------- */

const fs = require('fs');
const path = require('path');

/** ----------------------------------------
     Settings
 ---------------------------------------- */

const BASE_DIR = __dirname + '/./../';

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
    }
};