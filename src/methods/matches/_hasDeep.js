/** ----------------------------------------
    Has Deep
 ---------------------------------------- */

/**
 * The hasDeep method will look if a given key
 * is present within the object and loop through
 * available nested objects within the given item.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function hasDeep(key) {
    this._hasTrail();
    const array = [];

    const finder = (key, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const deep = this._deep(key, item);
            item.hasOwnProperty(key) && array.push(obj);
            deep.length && finder(key, deep.map(key => item[key]), obj);
        });
    };

    finder(key);
    return this._chain(array);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default hasDeep;