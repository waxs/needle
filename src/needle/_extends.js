/** ----------------------------------------
    Needle Config
 ---------------------------------------- */

import config from '../needle.config';

/** ----------------------------------------
     Extend
 ---------------------------------------- */

const extend = (model, name, fn) => {
    Object.keys(fn).forEach((method) => {
        const unknow = typeof config[name] === 'undefined';
        model.prototype[method] = (unknow || config[name][method]) && fn[method];
    });
};

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export {
    extend
};