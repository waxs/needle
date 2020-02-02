/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import doubles from '@util/_doubles';
import flatten from '@util/_flatten';
import unique from '@util/_unique';

/** ----------------------------------------
     Query
 ---------------------------------------- */

function _query(array, type) {
    this._hasTrail();
    const types = { unique, doubles };
    const results = array.map(fn => fn.take());
    return this._chain(types[type](flatten(results)));
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _query;