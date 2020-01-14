/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import isArray from '@util/_isArray';
import isType from '@util/_isType';

/** ----------------------------------------
     Contents
 ---------------------------------------- */

function contents(model, data) {
    Object.keys(data[0]).forEach(value => {
        if(isType(data[0][value]) !== 'object') {
            model['_content'][value] = isType(data[0][value]);
        }
    });
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    contents
};