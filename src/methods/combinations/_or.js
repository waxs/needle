/** ----------------------------------------
    Or
 ---------------------------------------- */

function or(callback) {
    this._addTrail(true, 'or', callback);
    return this._chain(this._data);
}

function _or(callback, data) {
    return callback(new Needle(data), data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    or,
    _or
};