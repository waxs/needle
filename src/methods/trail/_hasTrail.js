/** ----------------------------------------
    Has Trail
 ---------------------------------------- */

/**
 * Will check if a trail can be closed and
 * execute the trail. It will concat any
 * results produced by the trail and push
 * these to the data array creating a extended
 * data set based on given query chain.
 */

function _hasTrail() {
    if(!this._trail.exe.length) return;
    this._data = [].concat.apply([], this._exeTrail());
    return this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _hasTrail;