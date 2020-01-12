/** ----------------------------------------
     Configuration
 ---------------------------------------- */

const config = {

    /** ----------------------------------------
         Sorting
     ---------------------------------------- */

    sort: {
        sort: true,
        sortDate: true
    },

    /** ----------------------------------------
         Debugging
     ---------------------------------------- */

    debugging: {
        log: true,
        print: true,
        random: true
    },

    /** ----------------------------------------
         Template
     ---------------------------------------- */

    template: {
        template: true
    },

    /** ----------------------------------------
        Numbers
     ---------------------------------------- */

    numbers: {
        bigger: true,
        smaller: true,
        between: true,
        equal: true,
        min: true,
        max: true,
        positive: true,
        negative: true,
        sum: true
    },

    /** ----------------------------------------
         Dates
     ---------------------------------------- */

    dates: {
        before: true,
        after: true,
        period: true,
        month: true,
        year: true,
        previous: true,
        upcoming: true
    },

    /** ----------------------------------------
        Matches
     ---------------------------------------- */

    matches: {
        is: true,
        has: true,
        hasDeep: true,
        find: true,
        findDeep: true
    },

    /** ----------------------------------------
        Combinations
     ---------------------------------------- */

    combinations: {
        where: true,
        orWhere: true,
        _orWhere: true,
        andWhere: true,
        _andWhere: true
    },

    /** ----------------------------------------
         Store
     ---------------------------------------- */

    store: {
        save: false,
        retrieve: false
    },

    /** ----------------------------------------
         CRUD
     ---------------------------------------- */

    crud: {
        create: false,
        read: false,
        update: false,
        updateValue: false,
        updateAll: false,
        remove: false,
        removeValue: false,
        removeAll:false
    }


};

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default config;