/** ----------------------------------------
    And
 ---------------------------------------- */

function and(callback) {
    this._addTrail(true, 'and', callback);
    return this._chain(this._data);
}

function _and(callback, data) {
    return callback(new Needle(data), data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    and,
    _and
};