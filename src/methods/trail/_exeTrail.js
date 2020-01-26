/** ----------------------------------------
    Execute Trail
 ---------------------------------------- */

/**
 * If chain is available the executing will
 * process all stacked queries and resolve the
 * results in a new array. This array will be
 * flattened by the hasTrail() method if
 * criteria are matched.
 */

function _exeTrail() {
    let executed = [];
    let setData = [];

    const result = this._trail.exe.map(fn => {
        if(fn.type === 'or') setData = this._trail.data;
        if(fn.type === 'and') setData = this._trail.prev;
        executed.push(fn.type);
        return fn.exe(...fn.args, setData);
    });

    if(!executed.includes('and')) {
        result.push(this._trail.prev);
    }

    this._resetTrail();
    return result;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _exeTrail;