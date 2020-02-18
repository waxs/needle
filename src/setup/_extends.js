/** ----------------------------------------
     Extend
 ---------------------------------------- */

const extend = (model, fn) => {
    const name = Object.keys(fn)[0];
    Object.keys(fn).forEach((method) => model.prototype[method] = fn[method]);
};

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export {
    extend
};