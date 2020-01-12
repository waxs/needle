/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from './../util/util';

/** ----------------------------------------
    Save
 ---------------------------------------- */

/**
 * The save method will push a collection
 * of data to the store. This means selections
 * can be saved from time to time to create
 * a snapshot of the current data manipulation.
 *
 * @param { string } name - give the snapshot a name
 * @returns { string } - will return identifier name of store
 */

function save(name) {
    name = name || util.unique();
    store.forEach(item => item.id++);

    store.push({
        name: name,
        id: 1,
        data: this._data,
        time: util.stamp()
    });

    store.reverse();
    return name;
}

/** ----------------------------------------
     Retrieve
 ---------------------------------------- */

/**
 * The retrieve method will return a
 * saved data set from the store by a given
 * name or identifier.
 *
 * @param { string } name - name of data set
 * @returns { object } - will return item from store
 */

function retrieve(name) {
    return this._find('name', name, store);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    save,
    retrieve
};