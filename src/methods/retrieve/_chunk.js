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

    for (let i = 0; i < this._data.length; i += amount) {
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

/**
 * This method will handle returning the previous
 * chunk based on the current count.
 *
 * @returns { array } - will return previous chunk
 */

function _prevChunk() {
    const c = this._chunks;
    c.current += c.current === 0 ? c.data.length - 1 : -1;
    return this._chain(c.data[c.current]);
}

/** ----------------------------------------
    Next Chunk
 ---------------------------------------- */

/**
 * This method will handle returning the next
 * chunk based on the current count.
 *
 * @returns { array } - will return next chunk
 */

function _nextChunk() {
    const c = this._chunks;
    c.current += c.current < c.data.length - 1 ? 1 : -Math.abs(c.data.length - 1);
    return this._chain(c.data[c.current]);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    chunk,
    _prevChunk,
    _nextChunk
};