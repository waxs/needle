/** ----------------------------------------
    Webpack Configuration
 ---------------------------------------- */

const path = './webpack';

/** ----------------------------------------
    Webpack Exports
 ---------------------------------------- */

module.exports = (env) => {
    return require(`${ path }/webpack.${ env }.config.js`);
}