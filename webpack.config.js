/** ----------------------------------------
     Modules
 ---------------------------------------- */

const fs = require('fs');
const path = require('path');

/** ----------------------------------------
     Configuration
 ---------------------------------------- */

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, './'),
        port: 3000,
        watchContentBase: true
    },
    entry: './src/needle.js',
    output: {
        filename: 'needle.js',
        path: path.resolve(__dirname, 'dist'),
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
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};