/** ----------------------------------------
    Initiate Needle Core
 ---------------------------------------- */

class Core {}

/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { extend } from '@js/setup/_extends';

/** ----------------------------------------
     Helpers
 ---------------------------------------- */

import helpers from '@js/methods/helpers/base';
import trail from '@js/methods/trail/base';

/** ----------------------------------------
    Needle Helpers
 ---------------------------------------- */

extend(Core, helpers);
extend(Core, trail);

/** ----------------------------------------
    Methods
 ---------------------------------------- */

import retrieve from '@js/methods/retrieve/base';
import sort from '@js/methods/sorting/base';
import debugging from '@js/methods/debugging/base';
import template from '@js/methods/template/base';
import numbers from '@js/methods/numbers/base';
import dates from '@js/methods/dates/base';
import matches from '@js/methods/matches/base';
import combinations from '@js/methods/combinations/base';
import custom from '@js/methods/custom/base';

/** ----------------------------------------
    Needle Methods
 ---------------------------------------- */

extend(Core, retrieve);
extend(Core, sort);
extend(Core, debugging);
extend(Core, template);
extend(Core, numbers);
extend(Core, dates);
extend(Core, matches);
extend(Core, combinations);
extend(Core, custom);

/** ----------------------------------------
     Handlers
 ---------------------------------------- */

import store from '@js/methods/store/base';
import crud from '@js/methods/crud/base';

/** ----------------------------------------
    Needle Handlers
 ---------------------------------------- */

extend(Core, store);
extend(Core, crud);

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default Core;