/** ----------------------------------------
    Retrieve
 ---------------------------------------- */

/**
 * The retrieve method will return a
 * saved data set from the store by a given
 * name or identifier.
 *
 * @param { string } name - name of data set
 * @returns { object } - will return item from store
 */

function retrieve(name, store) {
    return this._find('name', name, store);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default retrieve;