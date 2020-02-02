/** ----------------------------------------
    And Query
 ---------------------------------------- */

function orQuery(callback) {
    return this._query(callback(this), 'unique')
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default orQuery;