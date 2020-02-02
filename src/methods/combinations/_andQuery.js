/** ----------------------------------------
    And Query
 ---------------------------------------- */

/**
 * The andQuery will execute a list of queries
 * matching all inclusive queries. Meaning where
 * all values match common values.
 *
 * @param { array } callback - array containing queries
 * @returns { Needle } object - new instance
 */

function andQuery(callback) {
    return this._query(callback(this), 'doubles');
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default andQuery;