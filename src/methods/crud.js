/** ----------------------------------------
     Create
 ---------------------------------------- */

/**
 * The create method will push a new object
 * to the data set. This can be useful if a user
 * is able to interact with a set off data.
 *
 * @param { object } obj - new object
 */

function create(obj) {
    this._hasTrail();
    this._data.push(obj);
    this._chain(this._data);
}

/** ----------------------------------------
     Read
 ---------------------------------------- */

/**
 * Retrieve a specific item from the data set.
 *
 * @returns { object } - item from data set
 */

function read(index) {
    this._hasTrail();
    return this._chain([this._data[index]]);
}

/**
 * The update method will basically replace
 * an excising item within the data set.
 *
 * @params { number } index - index of item
 * @params { object } obj - new item
 */

/** ----------------------------------------
     Update
 ---------------------------------------- */

function update(index, obj) {
    this._hasTrail();
    this._data[index] = obj;
    this._chain(this._data);
}

/**
 * Will update a single item key within the
 * current data set to a given value.
 *
 * @params { number } index - index of item
 * @params { string } key - target key
 * @params { any } value - new value for key
 */

/** ----------------------------------------
     Update Value
 ---------------------------------------- */

function updateValue(index, key, value) {
    this._hasTrail();
    this._data[index][key] = value;
    this._chain(this._data);
}

/**
 * Will update every key within the current
 * data set to a given value.
 *
 * @params { string } key - target key
 * @params { any } value - new value for key
 */

/** ----------------------------------------
     Update All
 ---------------------------------------- */

function updateAll(key, value) {
    this._hasTrail();
    this._data.forEach(item => item[key] = value);
    this._chain(this._data);
}

/** ----------------------------------------
     Delete
 ---------------------------------------- */

/**
 * Delete a single item from the current
 * data set. Will take the index number
 * of the item to be removed.
 *
 * @params { number } index - index of item
 */

function remove(index) {
    this._hasTrail();
    delete this._data[index];
    this._chain(this._data);
}

/** ----------------------------------------
     Delete Value
 ---------------------------------------- */

/**
 * With the deleteValue method a single
 * key can be removed from a given item
 * within the current data set.
 *
 * @params { number } index - index of item
 * @params { string } key - key to be removed from item
 */

function removeValue(index, key) {
    this._hasTrail();
    delete this._data[index][key];
    this._chain(this._data);
}

/** ----------------------------------------
     Delete All
 ---------------------------------------- */

/**
 * The deleteAll method will clear
 * the current data set.
 */

function removeAll(key) {
    this._hasTrail();
    this._data.forEach(item => delete item[key]);
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    create,
    read,
    update,
    updateValue,
    updateAll,
    remove,
    removeValue,
    removeAll
};