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

    constructor(data = [], trail) {
        model = model.length ? model : data;
        this._amount = data.length;
        this._calc = 0;
        this._chunks = [];
        this._data = data;
        this._info = {
            chunks: { ...this._chunks },
            original: model.length,
            length: this._data.length
        };
        this._settings = {};
        this._stamp = {};
        this._trail = trail || { exe: [], data: [], prev: [] };
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

    /**
     * Retrieve information about the query
     * results and changes. Set the result length
     * if has end of query pipe.
     */

    get info() {
        return this._info;
    }

    set info(length) {
        this._info['length'] = length;
    }

    /** ----------------------------------------
         Settings
     ---------------------------------------- */

    set config(config) {
        this._settings = config;
    }

    get config() {
        return this._settings;
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
        return new Needle(data, this._trail);
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
        return Object.keys(item).filter(key => !util.isArray(item[key]) && typeof item[key] === 'object' && item);
    }

    /**
     * Simple helper that will filter through an array
     * of data, by default this will be the data as
     * stored within the constructor. Give it a key
     * and value to find matching pairs.
     *
     * @param { string } key - selected key
     * @param { string | bool | array | number } value - matching value
     * @param { array } data - array of objects
     * @returns { array } new array of filtered items
     */

    _find(key, value, data = this._data) {
        value = util.singleArray(value);
        const valueType = util.isType(value);

        const fnType = {
            'array': () => data.filter(item => item[key] && item[key].some(index => value.includes(index))),
            'boolean': () => data.filter(item => item[key]),
            'string': () => data.filter(item => item[key] && util.compareInArray(item, key, value)),
            'number': () => data.filter(item => item[key] && util.compareInArray(item, key, value))
        };

        return fnType[valueType]();
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

    _operator(key, type, value, date = false, data = this._data) {
        return data.filter(item => util.evaluate(item[key], type, value, date));
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
     * @param { bool } info - will return info about the query if true
     * @returns { array } - array of (manipulated) data
     */

    take(amount = this._data.length, info) {
        this._hasTrail();
        if(util.isType(amount) === 'string' && amount === 'all') amount = this._data.length;
        const select = this._data.slice(0, amount);
        const all = !amount || amount >= this._data.length;
        const result = all && this._data || select;
        this.info = result.length;
        return info && { results: result, info: this.info } || result;
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
     * The values method will retrieve an array of values
     * matching a key available in the item. This function
     * will not chain at is an end of the road utility.
     *
     * @param { string } key - selected key to be retrieved
     * @returns { object } - will return an object with chunk data
     */

    values(key) {
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

    /**
     * The index method can retrieve a given
     * index from the data array.
     *
     * @param { number } id - selected index
     * @returns { object } - will return selected item from data
     */

    index(id) {
        this._hasTrail();
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
        this._hasTrail();
        return this._chain(this._data);
    }

    /**
     * The first method will return the first
     * item from the data array.
     *
     * @returns { Needle } object - new instance
     */

    first() {
        this._hasTrail();
        const select = this._data[0];
        return this._chain([select]);
    }

    /**
     * The last method will return the last
     * item from the data array.
     *
     * @returns { Needle } object - new instance
     */

    last() {
        this._hasTrail();
        const select = this._data.slice(-1)[0];
        return this._chain([select]);
    }

    /**
     * The count method will return the amount
     * of items present within the manipulated
     * data set.
     *
     * @returns { number } - amount of items in current data
     */

    count() {
        this._hasTrail();
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
        this._hasTrail();
        const sort = util.arrange(this._data, key, type);
        return this._chain(sort);
    }

    /**
     * The sortDate method will sort the items within
     * the data array based on asc or desc order.
     * This sort method should only be used if dates
     * are provided with the selected value of a key.
     *
     * @param { number } key - selected key
     * @param { string } type - either "asc" or "desc"
     * @returns { Needle } object - new instance
     */

    sortDate(key, type = 'asc') {
        this._hasTrail();
        const sort = util.arrange(this._data, key, type, true);
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
        this._hasTrail();
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
        this._hasTrail();
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
        this._hasTrail();
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
     * passed into the callback. The template method
     * will also return a object containing information
     * about the results.
     *
     * @param { function } callback - executable
     * @returns { object } - containing info about the query
     */

    template(callback, data = this._data) {
        if(this._hasTrail()) return this._data.forEach(callback, this);
        data.forEach(callback, { needle: this, info: this.info });
        return this.info;
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
        this._hasTrail();
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
        this._hasTrail();
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
        this._hasTrail();

        const filter = this._data.filter(item => {
            return util.evaluate(item[key], '>=', values[0], date) && util.evaluate(item[key], '<=', values[1], date);
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
        this._hasTrail();
        const filter = this._operator(key, '=', value);
        return this._chain(filter);
    }

    /**
     * The min method will map the data array
     * and retrieve minimum of a given key.
     *
     * @param { string } key - selected key
     * @returns { Needle } object - new instance
     */

    min(key) {
        this._hasTrail();
        const min = Math.min(...this._data.map(item => item[key]));
        return this.find(key, min);
    }

    /**
     * The max method will map the data array
     * and retrieve maximum of a given key.
     *
     * @param { string } key - selected key
     * @returns { Needle } object - new instance
     */

    max(key) {
        this._hasTrail();
        const max = Math.max(...this._data.map(item => item[key]));
        return this.find(key, max);
    }

    /**
     * Return all positive values from an array
     *
     * @param { string } key - selected key
     * @returns { Needle } object - new instance
     */

    positive(key) {
        this._hasTrail();
        const filter = this._operator(key, '>=', 0);
        return this._chain(filter);
    }

    /**
     * Return all negative values from an array
     *
     * @param { string } key - selected key
     * @returns { Needle } object - new instance
     */

    negative(key) {
        this._hasTrail();
        const filter = this._operator(key, '<', 0);
        return this._chain(filter);
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
        this._hasTrail();
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

    /**
     * Shorthand for working with months, this
     * method accepts the name of the month and
     * year to select a period of dates.
     *
     * @param { string } key - selected key
     * @param { string } month - selected month
     * @param { number } year - selected year
     * @returns { Needle } object - new instance
     */

    month(key, month, year) {
        const months = util.dateOptions();
        const date = this._find('month', month, months)[0];
        const start = util.convertDate(0, `${ date.month }/1/${ year }`);
        const end = util.convertDate(0, `${ date.month }/${ date.days }/${ year }`);
        return this.between(key, [start, end], true);
    }

    /**
     * Shorthand for working with years, this
     * method accepts the year where the selection
     * needs to take place.
     *
     * @param { string } key - selected key
     * @param { number } year - selected year
     * @returns { Needle } object - new instance
     */

    year(key, year) {
        return this.between(key, [`1/1/${ year }`, `12/31/${ year }`], true);
    }

    _visualDate(amount, selector) {
        const type = util.isType(amount);
        selector = type !== 'number' ? amount : selector;
        const duration = util.durationOption();
        return this._find('name', selector, duration);
    }

    last(key, amount, selector) {
        const match = this._visualDate(amount, selector);
        const convert = util.convertDate(amount, match.amount * amount);
        return this.between(key, [convert, new Date()], true);
    }

    next(key, amount, selector) {
        const match = this._visualDate(amount, selector);
        const convert = util.convertDate(amount, match.amount * amount, 'future');
        return this.between(key, [new Date(), convert], true);
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
        this._hasTrail();
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
        this._hasTrail();
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
        this._hasTrail();
        const array = [];

        const finder = (key, data = this._data, prev) => {
            data.forEach(item => {
                const obj = prev || item;
                const deep = this._deep(key, item);
                item.hasOwnProperty(key) && array.push(obj);
                deep.length && finder(key, deep.map(key => item[key]), obj);
            });
        };

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
     * @param { string | bool | array | number } value - matching value
     * @returns { Needle } object - new instance
     */

    find(key, value) {
        this._hasTrail();
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
     * @param { string | bool | array | number } value - matching value
     * @returns { Needle } object - new instance
     */

    findDeep(key, value) {
        this._hasTrail();
        const array = [];

        const finder = (key, value, data = this._data, prev) => {
            data.forEach(item => {
                const obj = prev || item;
                const deep = this._deep(key, item);
                if(obj === item) this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
                (deep.length === 0 || Object.keys(item).includes(key)) && this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
                deep.length && finder(key, value, deep.map(key => item[key]), obj);
            });
        };

        finder(key, value);
        return this._chain(array);
    }

    /** ----------------------------------------
         Combinations
     ---------------------------------------- */

    /**
     * Will check if a trail can be closed and
     * execute the trail. It will concat any
     * results produced by the trail and push
     * these to the data array creating a extended
     * data set based on given query chain.
     */

    _hasTrail() {
        if(!this._trail.exe.length) return;
        this._data = [].concat.apply([], this._exeTrail());
        return this._chain(this._data);
    }

    /**
     * The addTrail method will create a new
     * function trail that can be executed once
     * the trail ends.
     *
     * @param { bool } trail - should push trail
     * @param { string } fn - name of function
     * @param { array } args - arguments specified
     */

    _addTrail(trail, fn, ...args) {
        const or = ['orWhere'];
        const and = ['andWhere'];

        trail && this._trail['exe'].push({
            type: (and.includes(fn) && 'and') || (or.includes(fn) && 'or'),
            name: '_' + fn,
            args: args,
            exe: this['_' + fn].bind(this)
        });
    }

    /**
     * Will reset the trail to it's native state
     * and make sure that other chained methods
     * will execute without interference.
     */

    _resetTrail() {
        this._trail = { exe: [], data: [], prev: [] };
    }

    /**
     * If chain is available the executing will
     * process all stacked queries and resolve the
     * results in a new array. This array will be
     * flattened by the hasTrail() method if
     * criteria are matched.
     */

    _exeTrail() {
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

    /**
     * The where operator can execute a series
     * of commands, combining multiple criteria
     * that need to be matched.
     *
     * @param { string } key - selected key
     * @param { string } type - operator type
     * @param { string | number } value - matching value
     * @returns { Needle } object - new instance
     */

    where(key, type, value) {
        this._hasTrail();
        this._trail['data'] = this._data;
        const filter = this._operator(key, type, value);
        this._trail['prev'] = filter;
        return this._chain(filter);
    }

    /**
     * The orWhere will create a new trail function
     * that will be executed once the trail comes
     * to an end.
     *
     * @param { string } key - selected key
     * @param { string } type - operator type
     * @param { string | number } value - matching value
     * @returns { Needle } object - new instance
     */

    orWhere(key, type, value) {
        this._addTrail(true, 'orWhere', key, type, value);
        return this._chain(this._data);
    }

    /**
     * The actual executable function that will
     * be resolved once the trail ends related
     * to the orWhere() method. The or will
     * resolve from previous data set.
     *
     * @param { string } key - selected key
     * @param { string } type - operator type
     * @param { string | number } value - matching value
     * @returns { array } - results from operation
     */

    _orWhere(key, type, value, data) {
        return this._operator(key, type, value, false, data);
    }

    /**
     * The orWhere will create a new trail function
     * that will be executed once the trail comes
     * to an end.
     *
     * @param { string } key - selected key
     * @param { string } type - operator type
     * @param { string | number } value - matching value
     * @returns { Needle } object - new instance
     */

    andWhere(key, type, value) {
        this._addTrail(true, 'andWhere', key, type, value);
        return this._chain(this._data);
    }

    /**
     * The actual executable function that will
     * be resolved once the trail ends related
     * to the andWhere() method. The and will
     * resolve from original data set.
     *
     * @param { string } key - selected key
     * @param { string } type - operator type
     * @param { string | number } value - matching value
     * @returns { array } - results from operation
     */

    _andWhere(key, type, value, data) {
        return this._operator(key, type, value, false, data);
    }

    /** ----------------------------------------
         Handle
     ---------------------------------------- */

    /**
     * The create method will push a new object
     * to the data set. This can be useful if a user
     * is able to interact with a set off data.
     *
     * @param { object } obj - new object
     */

    create(obj) {
       this._data.push(obj);
       this._chain(this._data);
    }
    
    /**
     * Retrieve a specific item from the data set.
     *
     * @returns { object } - item from data set
     */

    read(index) {
        this._hasTrail();
        return this._data[index];
    }

    /**
     * The update method will basically replace
     * an excising item within the data set. 
     *
     * @params { number } index - index of item
     * @params { object } obj - new item
     */
    
    update(index, obj) {
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
    
    updateValue(index, key, value) {
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

    updateAll(key, value) {
        this._hasTrail();
        this._data.forEach(item => item[key] = value);
        this._chain(this._data);
    }

    /**
     * Delete a single item from the current
     * data set. Will take the index number
     * of the item to be removed.
     *
     * @params { number } index - index of item
     */
    
    delete(index) {
        this._hasTrail();
        delete this._data[index];
        this._chain(this._data);
    }

    /**
     * With the deleteValue method a single
     * key can be removed from a given item
     * within the current data set.
     *
     * @params { number } index - index of item
     * @params { string } key - key to be removed from item
     */

    deleteValue(index, key) {
        this._hasTrail();
        delete this._data[index][key];
        this._chain(this._data);
    }

    /**
     * The deleteAll method will clear
     * the current data set.
     */

    deleteAll() {
        this._hasTrail();
        this._data = [];
        this._chain(this._data);
    }

    /** ----------------------------------------
        Store
     ---------------------------------------- */

    /**
     * Using this get function the store can
     * be retrieved for further manipulation.
     *
     * @returns { array } - store
     */

    get store() {
        return store;
    }

    /**
     * The save method will push a collection
     * of data to the store. This means selections
     * can be saved from time to time to create
     * a snapshot of the current data manipulation.
     *
     * @param { string } name - give the snapshot a name
     * @returns { string } - will return identifier name of store
     */

    save(name) {
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

    /**
     * The retrieve method will return a
     * saved data set from the store by a given
     * name or identifier.
     *
     * @param { string } name - name of data set
     * @returns { object } - will return item from store
     */

    retrieve(name) {
        return this._find('name', name, store);
    }

}

export default Needle;