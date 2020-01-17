/** ----------------------------------------
     Configuration
 ---------------------------------------- */

const methods = {

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
        create: true,
        read: true,
        update: true,
        updateValue: true,
        updateAll: true,
        remove: true,
        removeValue: true,
        removeAll:true
    },

    /** ----------------------------------------
         Custom
     ---------------------------------------- */

    custom: {
        customEach: true,
        customFilter: true
    }

};

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default methods;