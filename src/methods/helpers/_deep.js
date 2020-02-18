/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import deep from '@util/_deep';

/** ----------------------------------------
    Deep
 ---------------------------------------- */

/**
 * The deep method will look if a given key/value
 * is present within the object and loop through
 * available nested objects within the given item.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function _deep(type, key, value = '') {
    const array = [];

    const finder = (key, value, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const layer = deep(key, item);

            if(type === 'has') {
                item.hasOwnProperty(key) && array.push(obj);
            }

            if(type === 'find') {
                if(obj === item) this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
                (layer.length === 0 || Object.keys(item).includes(key)) && this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
            }

            layer.length && finder(key, value, layer.map(key => item[key]), obj);
        });
    };

    finder(key, value);

    return array;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _deep;