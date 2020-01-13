/** ----------------------------------------
    Defaults
 ---------------------------------------- */

import setDefaults from '@js/config/default.config';

/** ----------------------------------------
     Construct
 ---------------------------------------- */

function construct(model, data, trail) {
    const defaults = setDefaults(data, trail);
    defaults.forEach(config => model['_' + config.name] = config.value);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    construct
};