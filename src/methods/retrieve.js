/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from '@util/util';

/** ----------------------------------------
    Take
 ---------------------------------------- */

/**
 * The take method will resolve a selected
 * amount of items from the data array and
 * return all by default, if more items are
 * required it will limit itself to the
 * total amount of items present.
 *
 * @param { number } amount - selected amount of items
 * @param { bool } info - will return info about the query if true
 * @returns { array } - array of (manipulated) data
 */

function take(amount = this._data.length, info) {
    this._hasTrail();
    if(util.isType(amount) === 'string' && amount === 'all') amount = this._data.length;
    const select = this._data.slice(0, amount);
    const all = !amount || amount >= this._data.length;
    const result = all && this._data || select;
    this.info = result.length;
    return info && { results: result, info: this.info } || result;
}

/** ----------------------------------------
     Select
 ---------------------------------------- */

/**
 * The selected method will convert the items
 * from the data array into a new array of items
 * limiting the keys as based on a given amount
 * of selectors. Can hold multiple strings.
 *
 * @param { array } keys - selected keys to be retrieved
 * @returns { Needle } object - new instance
 */

function select(...keys) {
    this._hasTrail();

    const select = this._data.map(item => {
        const obj = {};

        keys.forEach(key => {
            const deep = key.indexOf('.') !== -1 && this._objPath(key);
            if(item[key] || item[deep[0]]) deep ? obj[deep.slice(-1)[0]] = this._objReduce(deep, item) : obj[key] = item[key];
        });

        return obj;
    });

    return this._chain(select);
}

/** ----------------------------------------
     Chunk
 ---------------------------------------- */

/**
 * The chunk method will return chunks of data
 * based on a given amount per chunk. Meaning,
 * the data will be defined into separate sections
 * based on the amount declared as a parameter.
 *
 * @param { number } number - selected amount of items
 * @returns { object } - will return an object with chunk data
 */

function chunk(amount) {
    this._hasTrail();
    this._chunks['data'] = [];
    this._chunks['current'] = 0;

    for (let i = 0; i < this._data.length; i+= amount) {
        this._chunks.data.push(this._data.slice(i, i + amount));
    }

    const chunked = {
        chunks: this._chunks.data,
        current: this._chunks.selected,
        amount: this._chunks.data.length,
        size: amount,
        prev: () => this._prevChunk(),
        next: () => this._nextChunk()
    };

    chunked['start'] = callback => {
        this.template(callback, this._chunks.data[0]);
        return chunked;
    };

    return chunked;
}

/** ----------------------------------------
     Previous Chunk
 ---------------------------------------- */

function _prevChunk() {
    const chunk = this._chunks;
    chunk.current += chunk.current === 0 ? chunk.data.length - 1 : -1;
    return this._chain(chunk.data[chunk.current]);
}

/** ----------------------------------------
     Next Chunk
 ---------------------------------------- */

function _nextChunk() {
    const chunk = this._chunks;
    chunk.current += chunk.current < chunk.data.length - 1 ? 1 : -Math.abs(chunk.data.length - 1);
    return this._chain(chunk.data[chunk.current]);
}

/** ----------------------------------------
     Values
 ---------------------------------------- */

/**
 * The values method will retrieve an array of values
 * matching a key available in the item. This function
 * will not chain at is an end of the road utility.
 *
 * @param { string } key - selected key to be retrieved
 * @returns { object } - will return an object with chunk data
 */

function values(key) {
    this._hasTrail();
    const array = [];

    const finder = (key, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const deep = this._deep(key, item);
            item.hasOwnProperty(key) && array.push(item[key]);
            deep.length && finder(key, deep.map(key => item[key]), obj);
        });
    };

    finder(key);
    return array;
}

/** ----------------------------------------
     Index
 ---------------------------------------- */

/**
 * The index method can retrieve a given
 * index from the data array.
 *
 * @param { number } id - selected index
 * @returns { object } - will return selected item from data
 */

function index(id) {
    this._hasTrail();
    return this._data[id];
}

/** ----------------------------------------
    Get
 ---------------------------------------- */

/**
 * With the get method the entire class will
 * be returned, making it possible to iterate
 * with any custom script.
 *
 * @returns { Needle } object - new instance
 */

function get() {
    this._hasTrail();
    return this._chain(this._data);
}

/** ----------------------------------------
     First
 ---------------------------------------- */

/**
 * The first method will return the first
 * item from the data array.
 *
 * @returns { Needle } object - new instance
 */

function first() {
    this._hasTrail();
    const select = this._data[0];
    return this._chain([select]);
}

/** ----------------------------------------
     Last
 ---------------------------------------- */

/**
 * The last method will return the last
 * item from the data array.
 *
 * @returns { Needle } object - new instance
 */

function last() {
    this._hasTrail();
    const select = this._data.slice(-1)[0];
    return this._chain([select]);
}

/** ----------------------------------------
     Count
 ---------------------------------------- */

/**
 * The count method will return the amount
 * of items present within the manipulated
 * data set.
 *
 * @returns { number } - amount of items in current data
 */

function count() {
    this._hasTrail();
    return this._amount;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    take,
    select,
    chunk,
    _prevChunk,
    _nextChunk,
    values,
    index,
    get,
    first,
    last,
    count
};