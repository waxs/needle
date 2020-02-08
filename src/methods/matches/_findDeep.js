/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import deep from '@util/_deep';

/** ----------------------------------------
    Find Deep
 ---------------------------------------- */

/**
 * The findDeep method will return a specific
 * key value pair within the object, the
 * findDeep method will also look for any
 * nested object inside the item.
 *
 * @param { string } key - selected key
 * @param { string | bool | array | number } value - matching value
 * @returns { Needle } object - new instance
 */

function findDeep(key, value) {
    this._hasTrail();
    const array = [];

    const finder = (key, value, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const layer = deep(key, item);
            if(obj === item) this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
            (layer.length === 0 || Object.keys(item).includes(key)) && this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
            layer.length && finder(key, value, layer.map(key => item[key]), obj);
        });
    };

    finder(key, value);
    return this._chain(array);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default findDeep;