/** ----------------------------------------
     Leap Year
 ---------------------------------------- */

const leapYear = () => new Date().getFullYear() % 4 === 0;

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default leapYear;