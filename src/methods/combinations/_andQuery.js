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
    const filter = this._query(callback(this), 'doubles');
    const check = filter.merge.count === filter.amount;
    return this._chain(check ? filter.merge.result : []);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default andQuery;