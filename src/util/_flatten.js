/** ----------------------------------------
    Flatten
 ---------------------------------------- */

const flatten = array => {
    return [].concat.apply([], array);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default flatten;