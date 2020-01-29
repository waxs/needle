/** ----------------------------------------
    Doubles
 ---------------------------------------- */

const doubles = (array, data = null) => {
    let result;

    const defaultStore = {
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
            }

            if(store.save.length === 0 && store.array.length) {
                result = store.array;
            }
        });
    };

    findDuplicates(array);
    return result;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default doubles;