/** ----------------------------------------
    Package
 ---------------------------------------- */

import Needle from '@js/Needle';

/** ----------------------------------------
    Chain
 ---------------------------------------- */

/**
 * The chain method returns a new instance
 * of the Needle class.
 *
 * @param { array } data - new array of manipulated data
 * @returns { Needle } object - new instance
 */

function _chain(data) {
    return new Needle(data, this._trail);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _chain;