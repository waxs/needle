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
        this._chunks = [];
        this._data = data;
    }

    /** ----------------------------------------
         Data
     ---------------------------------------- */

    /**
     * Retrieve data from instance with this
     * getter, will return original data.
     */

    get data() {
        return this._data;
    }

    /**
     * Set new data in constructor, using this
     * setter as an alternative for passing
     * array of object to Needle.
     */

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
     * @returns { Needle } object - new instance
     */

    _chain(data) {
        return new Needle(data);
    }

    /** ----------------------------------------
        Filter Helper
     ---------------------------------------- */

    /**
     * The deep helper will look for keys that
     * contain object values (nested objects).
     *
     * @param { string } key - selected key
     * @param { object } item - base object
     * @returns { array } - filtered items
     */

    _deep(key, item) {
        return Object.keys(item).filter(key => typeof item[key] === 'object' && item);
    }

    /**
     * Simple helper that will filter through an array
     * of data, by default this will be the data as
     * stored within the constructor. Give it a key
     * and value to find matching pairs.
     *
     * @param { string } key - selected key
     * @param { string } value - operator type
     * @param { array } data - array of objects
     * @returns { array } new array of filtered items
     */

    _find(key, value, data = this._data) {
        return data.filter(item => item[key] === value);
    }

    /** ----------------------------------------
         Format Helper
     ---------------------------------------- */

    /**
     * This helper will return an array containing
     * each given key from a dot notation in string
     * format, for instance "contact.email.work".
     *
     * @param { string } path - using object dot notation
     * @returns { array } array containing split of string
     */

    _objPath(path) {
        return path.split('.');
    }

    /** ----------------------------------------
         Object Helper
     ---------------------------------------- */

    /**
     * This helper will reduce given keys
     * to a new object.
     *
     * @param { array } array - array of keys to be maintained
     * @param { object } item - original object
     * @returns { array } - manipulated object
     */

    _objReduce(array, item) {
        return array.map(key => key)
            .reduce((array, key) => array[key], item);
    }

    /** ----------------------------------------
         Operator Helper
     ---------------------------------------- */

    /**
     * The operator helper can handle multiple
     * operation based on given arguments. The type
     * will determine the type operation executed.
     *
     * @param { string } key - selected key
     * @param { string } type - operator type
     * @param { string | number } value - matching value
     * @param { bool } date - will parse values to date
     * @returns { array } - filtered data
     */

    _operator(key, type, value, date = false) {
        return this._data.filter(item => util.evaluate(item[key], type, value, date));
    }

    /** ----------------------------------------
        Retrieve Data
     ---------------------------------------- */

    /**
     * The take method will resolve a selected
     * amount of items from the data array and
     * return all by default, if more items are
     * required it will limit itself to the
     * total amount of items present.
     *
     * @param { number } amount - selected amount of items
     * @returns { array } - array of (manipulated) data
     */

    take(amount) {
        const select = this._data.slice(0, amount);
        const all = !amount || amount >= this._data.length;
        return all && this._data || select;
    }

    /**
     * The selected method will convert the items
     * from the data array into a new array of items
     * limiting the keys as based on a given amount
     * of selectors. Can hold multiple strings.
     *
     * @param { array } keys - selected keys to be retrieved
     * @returns { Needle } object - new instance
     */

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

    /**
     * The chunk method will return chunks of data
     * based on a given amount per chunk. Meaning,
     * the data will be defined into separate sections
     * based on the amount declared as a parameter.
     *
     * @param { number } number - selected amount of items
     * @returns { object } - will return an object with chunk data
     */

    chunk(amount) {
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
        }

        return chunked;
    }

    _prevChunk() {
        const chunk = this._chunks;
        chunk.current += chunk.current === 0 ? chunk.data.length - 1 : -1;
        return this._chain(chunk.data[chunk.current]);
    }

    _nextChunk() {
        const chunk = this._chunks;
        chunk.current += chunk.current < chunk.data.length - 1 ? 1 : -Math.abs(chunk.data.length - 1);
        return this._chain(chunk.data[chunk.current]);
    }

    /**
     * The index method can retrieve a given
     * index from the data array.
     *
     * @param { number } id - selected index
     * @returns { object } - will return selected item from data
     */

    index(id) {
        return this._data[id];
    }

    /**
     * With the get method the entire class will
     * be returned, making it possible to iterate
     * with any custom script.
     *
     * @returns { Needle } object - new instance
     */

    get() {
        return this._chain(this._data);
    }

    /**
     * The first method will return the first
     * item from the data array.
     *
     * @returns { Needle } object - new instance
     */

    first() {
        const select = this._data[0];
        return this._chain(select);
    }

    /**
     * The last method will return the last
     * item from the data array.
     *
     * @returns { Needle } object - new instance
     */

    last() {
        const select = this._data.slice(-1)[0];
        return this._chain(select);
    }

    /**
     * The count method will return the amount
     * of items present within the manipulated
     * data set.
     *
     * @returns { number } - amount of items in current data
     */

    count() {
        return this._amount;
    }

    /** ----------------------------------------
         Sorting
     ---------------------------------------- */

    /**
     * The sort method will sort the items within
     * the data array based on asc or desc order.
     * This can be specified as a second argument
     * and will use a default of asc.
     *
     * @param { number } key - selected key
     * @param { string } type - either "asc" or "desc"
     * @returns { Needle } object - new instance
     */

    sort(key, type = 'asc') {
        const sort = util.arrange(this._data, key, type);
        return this._chain(sort);
    }

    /** ----------------------------------------
        Debugging
     ---------------------------------------- */

    /**
     * The log method is used for testing and
     * debugging. It will log the latest state
     * of the data array to the console. It can
     * be limited to a given number of items.
     *
     * @param { number } number - amount of items
     * @yields { array } - will console log array of items
     */

    log(number) {
        console.log(number && this.take(number) || this._data);
    }

    /**
     * The print method is used for testing and
     * debugging. It will print the items of the
     * data array into the DOM, making results
     * visible, it will look for a element with
     * the id "#result" by default, and element
     * can also be provided as an argument, if both
     * are unable to match, the function will execute
     * on the body.
     *
     * @param { string } el - CSS selector for DOM element
     * @yields { string } print string to DOM
     */

    print(el) {
        const result = document.querySelector('#result' || el) || document.body;
        result.textContent = [this._data].map(item => JSON.stringify(item));
    }

    /**
     * With the random method a random amount
     * of items can be returned from the latest
     * data state. This makes it easy to quickly
     * test multiple sets of data.
     *
     * @param { number } number - amount of items
     * @returns { Needle } object - new instance
     */

    random(number = 1) {
        let array = [];

        while (array.length !== number || array.length === this._data.length) {
            const random = Math.floor(Math.random() * (1 + this._data.length - 1));
            array.indexOf(this._data[random]) === -1 && array.push(this._data[random]);
        }

        return this._chain(array);
    }

    /** ----------------------------------------
        Template
     ---------------------------------------- */

    /**
     * With the template method a callback will be
     * executed for every item present within the
     * data array. The data of each item will be
     * passed into the callback.
     *
     * @param { function } callback - executable
     */

    template(callback, data = this._data) {
        return data.forEach(item =>  callback(item));
    }

    /** ----------------------------------------
        Numbers
     ---------------------------------------- */

    /**
     * The smaller method will compare each item
     * to a given value and return the items
     * that match the given criteria.
     *
     * @param { string } key - selected key
     * @param { string | number } value - matching value
     * @param { bool } date - will parse values to date
     * @returns { Needle } object - new instance
     */

    smaller(key, value, date = false) {
        const filter = this._operator(key, '<=', value, date);
        return this._chain(filter);
    }

    /**
     * The bigger method will compare each item
     * to a given value and return the items
     * that match the given criteria.
     *
     * @param { string } key - selected key
     * @param { string | number } value - matching value
     * @param { bool } date - will parse values to date
     * @returns { Needle } object - new instance
     */

    bigger(key, value, date = false) {
        const filter = this._operator(key, '>=', value, date);
        return this._chain(filter);
    }

    /**
     * The between method returns an array of
     * items that are in between two given
     * values.
     *
     * @param { string } key - selected key
     * @param { array } values - matching values max 2
     * @param { bool } date - will parse values to date
     * @returns { Needle } object - new instance
     */

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
     * @param { number } value - matching value
     * @returns { Needle } object - new instance
     */

    equal(key, value) {
        const filter = this._operator(key, '=', value);
        return new Needle(filter);
    }

    /**
     * The min method will map the data array
     * and retrieve minimum of a given key.
     *
     * @param { number } key - selected key
     * @returns { Needle } object - new instance
     */

    min(key) {
        const min = Math.min(...this._data.map(item => item[key]));
        return this.find(key, min);
    }

    /**
     * The max method will map the data array
     * and retrieve maximum of a given key.
     *
     * @param { number } key - selected key
     * @returns { Needle } object - new instance
     */

    max(key) {
        const max = Math.max(...this._data.map(item => item[key]));
        return this.find(key, max);
    }

    /**
     * The sum method will retrieve the sum of
     * a given key, meaning sum every value of
     * the given key present within the data array.
     *
     * @param { string } key - selected key
     * @returns { number } amount of sum of given key
     */

    sum(key) {
        this._calc = this._data.reduce((total, item) => total + item[key], 0);
        return this._calc;
    }

    /** ----------------------------------------
         Dates
     ---------------------------------------- */

    /**
     * Basically the same as the smaller method
     * but will convert the value into a unix
     * timestamp and compare given value within
     * the data object.
     *
     * @param { string } key - selected key
     * @param { string } value - matching value
     * @returns { Needle } object - new instance
     */

    before(key, value) {
        return this.smaller(key, value, true);
    }

    /**
     * Basically the same as the bigger method
     * but will convert the value into a unix
     * timestamp and compare given value within
     * the data object.
     *
     * @param { string } key - selected key
     * @param { string } value - matching value
     * @returns { Needle } object - new instance
     */

    after(key, value) {
        return this.bigger(key, value, true);
    }

    /**
     * Basically the same as the between method
     * but will convert the values into a unix
     * timestamp and compare given values within
     * a range of the data object.
     *
     * @param { string } key - selected key
     * @param { array } values - matching values max 2
     * @returns { Needle } object - new instance
     */

    period(key, values) {
        return this.between(key, values, true);
    }

    /** ----------------------------------------
         Matches
     ---------------------------------------- */

    /**
     * Check for a boolean value of a specific
     * key as passed as an argument. Will only
     * look for first layer of keys.
     *
     * @param { string } key - selected key
     * @returns { Needle } object - new instance
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
     * @returns { Needle } object - new instance
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
     * @returns { Needle } object - new instance
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
     * @returns { Needle } object - new instance
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
     * @returns { Needle } object - new instance
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


}

export default Needle;