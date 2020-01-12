/** ----------------------------------------
     Extend
 ---------------------------------------- */

const extend = (model, fn) => {
    Object.keys(fn).forEach((name) => {
        model.prototype[name] = fn[name];
    });
};

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export {
    extend
};