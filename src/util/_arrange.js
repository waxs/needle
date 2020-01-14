/** ----------------------------------------
     Arrange
 ---------------------------------------- */

const arrange = (array, key, type, date = false) => {
    const convert = (a, b) => {
        a = date ? new Date(a[key]) : a[key];
        b = date ? new Date(b[key]) : b[key];
        return { a, b };
    };

    const asc = (a, b) => {
        const item = convert(a, b);
        return item.b < item.a ? 1 : item.b > item.a ? -1 : 0;
    };

    const desc = (a, b) => {
        const item = convert(a, b);
        return item.a < item.b ? 1 : item.a > item.b ? -1 : 0;
    };

    const sortType = {
        'asc': () => array.sort(asc),
        'desc': () => array.sort(desc)
    };

    return sortType[type]();
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default arrange;