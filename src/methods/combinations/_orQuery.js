/** ----------------------------------------
    Or Query
 ---------------------------------------- */

/**
 * The orQuery will execute a list of queries
 * matching all inclusive queries. Meaning where
 * all values match unique values.
 *
 * @param { array } callback - array containing queries
 * @returns { Needle } object - new instance
 */

function orQuery(callback) {
    return this._query(callback(this), 'unique');
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default orQuery;