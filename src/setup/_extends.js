/** ----------------------------------------
    Needle Config
 ---------------------------------------- */

import methods from '../config/method.config';

/** ----------------------------------------
     Extend
 ---------------------------------------- */

const extend = (model, fn) => {
    const name = Object.keys(fn)[0];

    Object.keys(fn).forEach((method) => {
        const unknow = typeof methods[name] === 'undefined';
        model.prototype[method] = (unknow || methods[name][method]) && fn[method];
    });
};

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export {
    extend
};