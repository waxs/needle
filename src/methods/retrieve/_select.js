/** ----------------------------------------
    Select
 ---------------------------------------- */

/**
 * The selected method will convert the items
 * from the data array into a new array of items
 * limiting the keys as based on a given amount
 * of selectors. Can hold multiple strings.
 *
 * @param { array } keys - selected keys to be retrieved
 * @returns { Needle } object - new instance
 */

function select(...keys) {
    this._hasTrail();

    const select = this._data.map(item => {
        const obj = {};

        keys.forEach(key => {
            const deep = key.indexOf('.') !== -1 && this._objPath(key);
            if(item[key] || item[deep[0]]) deep ? obj[deep.slice(-1)[0]] = this._objReduce(deep, item) : obj[key] = item[key];
        });
    
        return obj;
    });

    return this._chain(select);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default select;