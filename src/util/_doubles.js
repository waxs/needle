/** ----------------------------------------
    Has Doubles
 ---------------------------------------- */

const hasDoubles = array => {
    return (new Set(array)).size !== array.length;
};

/** ----------------------------------------
    Doubles
 ---------------------------------------- */

const doubles = (array, data = null) => {
    let result;

    const defaultStore = {
        count: 1,
        array: [],
        save: []
    };

    const findDuplicates = (array, data = null) => {
        const store = data || defaultStore;

        array.forEach((item, index) => {
            store.array.includes(item) && store.save.push(item);
            store.array.push(item);

            if(index === array.length - 1 && store.save.length > 0) {
                findDuplicates(store.save, {
                    array: [],
                    save: []
                });

                defaultStore.count++;
            }

            if(store.save.length === 0 && store.array.length) {
                result = store.array;
            }
        });
    };

    findDuplicates(array);

    return {
        count: defaultStore.count,
        result
    };
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default doubles;