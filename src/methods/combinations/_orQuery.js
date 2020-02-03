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
    const filter = this._query(callback(this), 'unique');
    return this._chain(filter.merge);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default orQuery;