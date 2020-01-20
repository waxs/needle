/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import randomId from '@util/_randomId';
import stamp from '@util/_stamp';

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

function save(store, name) {
    name = name || randomId();
    store.length > 0 && store.forEach(item => item.id++);

    store.push({
        name: name,
        id: 1,
        data: this._data,
        time: stamp()
    });

    store.reverse();
    return name;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default save;