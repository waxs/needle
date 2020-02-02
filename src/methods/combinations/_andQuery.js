/** ----------------------------------------
    And Query
 ---------------------------------------- */

function andQuery(callback) {
    return this._query(callback(this), 'doubles')
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default andQuery;