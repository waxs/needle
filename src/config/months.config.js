/** ----------------------------------------
    Configuration
 ---------------------------------------- */

const months = [];

const monthNames = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
];

/** ----------------------------------------
    Days in Month
 ---------------------------------------- */

const daysInMonth = (month, year) => {
    const date = new Date();
    year = year || date.getFullYear();
    return new Date(year, month + 1, 0).getDate();
};

/** ----------------------------------------
    Create Months
 ---------------------------------------- */

monthNames.forEach((name, index) => {
    months.push({
        index: index,
        month: name,
        days: daysInMonth(index)
    });
});

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default months;