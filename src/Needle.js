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

    _chain(data) {
        return new Needle(data);
    }

    /** ----------------------------------------
        Filter
     ---------------------------------------- */

    is(key) {
        const filter = this._data.filter(item => item[key]);
        return this._chain(filter);
    }

    has(key) {
        const filter = this._data.filter(item => item.hasOwnProperty(key));
        return this._chain(filter);
    }

    _find(key, value) {
        return this._data.filter(item => item[key] === value);
    }

    find(key, value) {
        const filter = this._find(key, value);
        return this._chain(filter);
    }

    /** ----------------------------------------
        Values Operator
     ---------------------------------------- */

    _operator(key, type, value, date = false) {
        return this._data.filter(item => util.evaluate(item[key], type, value, date));
    }

    smaller(key, value, date = false) {
        const filter = this._operator(key, '<', value, date);
        return this._chain(filter);
    }

    bigger(key, value, date = false) {
        const filter = this._operator(key, '>', value, date);
        return this._chain(filter);
    }

    between(key, values, date = false) {
        const filter = this._data.filter(item => {
            return util.evaluate(item[key], '>', values[0], date) && util.evaluate(item[key], '<', values[1], date)
        });

        return this._chain(filter);
    }

    equal(key, value) {
        const filter = this._operator(key, '=', value);
        return new Needle(filter);
    }

    min(key) {
        const min = Math.min(...this._data.map(item => item[key]));
        return this.find(key, min);
    }

    max(key) {
        const max = Math.max(...this._data.map(item => item[key]));
        return this.find(key, max);
    }

    /** ----------------------------------------
         Calc
     ---------------------------------------- */

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