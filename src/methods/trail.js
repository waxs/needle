/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from './../util/util';

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
     Add Trail
 ---------------------------------------- */

/**
 * The addTrail method will create a new
 * function trail that can be executed once
 * the trail ends.
 *
 * @param { bool } trail - should push trail
 * @param { string } fn - name of function
 * @param { array } args - arguments specified
 */

function _addTrail(trail, fn, ...args) {
    const or = ['orWhere'];
    const and = ['andWhere'];

    trail && this._trail['exe'].push({
        type: (and.includes(fn) && 'and') || (or.includes(fn) && 'or'),
        name: '_' + fn,
        args: args,
        exe: this['_' + fn].bind(this)
    });
}

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

/**
 * If chain is available the executing will
 * process all stacked queries and resolve the
 * results in a new array. This array will be
 * flattened by the hasTrail() method if
 * criteria are matched.
 */

/** ----------------------------------------
     Execute Trail
 ---------------------------------------- */

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

export default {
    _hasTrail,
    _addTrail,
    _resetTrail,
    _exeTrail
};