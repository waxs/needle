/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import doubles from '@util/_doubles';
import flatten from '@util/_flatten';
import unique from '@util/_unique';

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

        return {
            type: fn.type,
            result: fn.exe(...fn.args, setData)
        };
    });

    const and = result
        .filter(value => value.type === 'and')
        .map(value => value.result);

    const flattenAnd = flatten(and);
    const andResult = and.length > 1 ? doubles(flattenAnd) : flattenAnd;

    const or = result
        .filter(value => value.type === 'or')
        .map(value => value.result);

    const flattenOr = flatten(or);
    const orResult = unique(flattenOr);

    this._resetTrail();
    return [andResult, orResult];
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _exeTrail;