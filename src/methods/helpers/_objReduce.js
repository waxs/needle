/** ----------------------------------------
    Object Reducer
 ---------------------------------------- */

/**
 * This helper will reduce given keys
 * to a new object.
 *
 * @param { array } array - array of keys to be maintained
 * @param { object } item - original object
 * @returns { array } - manipulated object
 */

function _objReduce(array, item) {
    return array.map(key => key).reduce((array, key) => array[key], item);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _objReduce;