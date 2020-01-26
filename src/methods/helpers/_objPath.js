/** ----------------------------------------
     Object Path
 ---------------------------------------- */

/**
 * This helper will return an array containing
 * each given key from a dot notation in string
 * format, for instance "contact.email.work".
 *
 * @param { string } path - using object dot notation
 * @returns { array } array containing split of string
 */

function _objPath(path) {
    return path.split('.');
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _objPath;