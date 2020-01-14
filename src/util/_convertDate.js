/** ----------------------------------------
     Convert Date
 ---------------------------------------- */

const convertDate = (value, convert, direction = 'history') => {
    const date = convert ? new Date(convert) : new Date();
    value = (value * 24 * 60 * 60 * 1000);

    const dir = {
        history: date.getTime() - value,
        future: date.getTime() + value
    };

    const calc = new Date(dir[direction]);

    const day = calc.getDate();
    const month = calc.getMonth() + 1;
    const year = calc.getFullYear();

    return calc;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default convertDate;