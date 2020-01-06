/** ----------------------------------------
     Utils
 ---------------------------------------- */

import * as util from './util/util';

/** ----------------------------------------
     Store
 ---------------------------------------- */

let model = [];
const store = [];

/** ----------------------------------------
     Needle
 ---------------------------------------- */

class Needle {

    constructor(data = [], settings) {
        model = model.length ? model : data;
        this._amount = data.length;
        this._calc = 0;
        this._data = data;
    }

    /** ----------------------------------------
         Data
     ---------------------------------------- */

    get data() {
        return this._data;
    }

    set data(array) {
        this._data = array;
    }

    /** ----------------------------------------
         Chain
     ---------------------------------------- */

    /**
     * The chain method returns a new instance
     * of the Needle class.
     *
     * @param { array } data - new array of manipulated data
     */

    _chain(data) {
        return new Needle(data);
    }

    /** ----------------------------------------
        Filter Helper
     ---------------------------------------- */

    _deep(key, item) {
        return Object.keys(item).filter(key => typeof item[key] === 'object' && item);
    }

    _find(key, value, data = this._data) {
        return data.filter(item => item[key] === value);
    }

    _objPath(keys) {
        return keys.split('.');
    }

    _objReduce(array, item) {
        return array.map(key => key)
            .reduce((array, key) => array[key], item);
    }

    /** ----------------------------------------
        Filter
     ---------------------------------------- */

    /**
     * Check for a boolean value of a specific
     * key as passed as an argument. Will only
     * look for first layer of keys.
     *
     * @param { string } key - selected key
     */

    is(key) {
        const filter = this._data.filter(item => item[key]);
        return this._chain(filter);
    }

    /**
     * The has method will look if a given key
     * is present within the object, will only
     * look for the first layer of keys.
     *
     * @param { string } key - selected key
     */

    has(key) {
        const filter = this._data.filter(item => item.hasOwnProperty(key));
        return this._chain(filter);
    }

    /**
     * The hasDeep method will look if a given key
     * is present within the object and loop through
     * available nested objects within the given item.
     *
     * @param { string } key - selected key
     */

    hasDeep(key) {
        const array = [];

        const finder = (key, data = this._data, prev) => {
            data.forEach(item => {
                const obj = prev || item;
                const deep = this._deep(key, item);
                item.hasOwnProperty(key) && array.push(obj)
                deep.length && finder(key, deep.map(key => item[key]), obj);
            });
        }

        finder(key);
        return this._chain(array);
    }

    /**
     * The find method will return a specific
     * key value pair within the object, the
     * find method only look for the first
     * layer of keys present in the item.
     *
     * @param { string } key - selected key
     * @param { string } value - matching value
     */

    find(key, value) {
        const filter = this._find(key, value);
        return this._chain(filter);
    }

    /**
     * The findDeep method will return a specific
     * key value pair within the object, the
     * findDeep method will also look for any
     * nested object inside the item.
     *
     * @param { string } key - selected key
     * @param { string } value - matching value
     */

    findDeep(key, value) {
        const array = [];

        const finder = (key, value, data = this._data, prev) => {
            data.forEach(item => {
                const obj = prev || item;
                const deep = this._deep(key, item);
                item[key] === value && array.push(obj);
                deep.length && finder(key, value, deep.map(key => item[key]), obj);
             });
        };

        finder(key, value);
        return this._chain(array);
    }

    /** ----------------------------------------
        Values Operator
     ---------------------------------------- */

    _operator(key, type, value, date = false) {
        return this._data.filter(item => util.evaluate(item[key], type, value, date));
    }

    smaller(key, value, date = false) {
        const filter = this._operator(key, '<=', value, date);
        return this._chain(filter);
    }

    bigger(key, value, date = false) {
        const filter = this._operator(key, '>=', value, date);
        return this._chain(filter);
    }

    between(key, values, date = false) {
        const filter = this._data.filter(item => {
            return util.evaluate(item[key], '>=', values[0], date) && util.evaluate(item[key], '<=', values[1], date)
        });

        return this._chain(filter);
    }

    /**
     * The equal method will look for a matching
     * item within the data array. This method
     * uses the operator helper method.
     *
     * @param { string } key - selected key
     * @param { string } value - matching value
     */

    equal(key, value) {
        const filter = this._operator(key, '=', value);
        return new Needle(filter);
    }

    /**
     * The min method will map the data array
     * and retrieve minimum of a given key.
     *
     * @param { string } key - selected key
     */

    min(key) {
        const min = Math.min(...this._data.map(item => item[key]));
        return this.find(key, min);
    }

    /**
     * The max method will map the data array
     * and retrieve maximum of a given key.
     *
     * @param { string } key - selected key
     */

    max(key) {
        const max = Math.max(...this._data.map(item => item[key]));
        return this.find(key, max);
    }

    /** ----------------------------------------
         Calc
     ---------------------------------------- */

    /**
     * The sum method will retrieve the sum of
     * a given key, meaning sum every value of
     * the given key present within the data array.
     *
     * @param { string } key - selected key
     */

    sum(key) {
        this._calc = this._data.reduce((total, item) => total + item[key], 0);
        return this._calc;
    }

    /** ----------------------------------------
         Time
     ---------------------------------------- */

    before(key, value) {
        return this.smaller(key, value, true);
    }

    after(key, value) {
        return this.bigger(key, value, true);
    }

    period(key, values) {
        return this.between(key, values, true);
    }

    /** ----------------------------------------
        Select
     ---------------------------------------- */

    take(number) {
        const select = this._data.slice(0, number);
        const all = !number || number >= this._data.length;
        return all && this._data || select;
    }

    select(...keys) {
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

    index(id) {
        return this._data[id];
    }

    get() {
        return this._chain(this._data);
    }

    first() {
        const select = this._data[0];
        return this._chain(select);
    }

    last() {
        const select = this._data.slice(-1)[0];
        return this._chain(select);
    }

    count() {
        return this._amount;
    }

    /** ----------------------------------------
         Sorting
     ---------------------------------------- */

    sort(key, type = 'asc') {
        const sort = util.arrange(this._data, key, type);
        return this._chain(sort);
    }

    /** ----------------------------------------
        Retrieve
     ---------------------------------------- */

    log(number) {
        console.log(number && this.take(number) || this._data);
    }

    print(el) {
        const result = document.querySelector('#result' || el) || document.body;
        result.textContent = [this._data].map(item => JSON.stringify(item));
    }

    /** ----------------------------------------
         Template
     ---------------------------------------- */

    template(callback) {
        return this._data.forEach(item =>  callback(item));
    }

    /** ----------------------------------------
         Random
     ---------------------------------------- */

    random(number = 1) {
        let array = [];

        while (array.length !== number || array.length === this._data.length) {
            const random = Math.floor(Math.random() * (1 + this._data.length - 1));
            array.indexOf(this._data[random]) === -1 && array.push(this._data[random]);
        }

        return this._chain(array);
    }

}

export default Needle;