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
    const or = ['or', 'orWhere'];
    const and = ['and', 'andWhere'];

    trail && this._trail['exe'].push({
        type: (and.includes(fn) && 'and') || (or.includes(fn) && 'or'),
        name: '_' + fn,
        args: args,
        exe: this['_' + fn].bind(this)
    });
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _addTrail;