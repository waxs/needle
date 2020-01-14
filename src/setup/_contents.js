/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import isType from '@util/_isType';

/** ----------------------------------------
     Contents
 ---------------------------------------- */

function contents(model, data) {
    Object.keys(data[0]).forEach(value => model['_content'][value] = isType(data[0][value]));
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    contents
};