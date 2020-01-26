/** ----------------------------------------
    Reset Trail
 ---------------------------------------- */

/**
 * Will reset the trail to it's native state
 * and make sure that other chained methods
 * will execute without interference.
 */

function _resetTrail() {
    this._trail = { exe: [], data: [], prev: [] };
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _resetTrail;