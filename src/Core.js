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

import helpers from '@js/methods/helpers';
import trail from '@js/methods/trail';

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
import template from '@js/methods/template';
import numbers from '@js/methods/numbers';
import dates from '@js/methods/dates';
import matches from '@js/methods/matches';
import combinations from '@js/methods/combinations';

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

/** ----------------------------------------
     Handlers
 ---------------------------------------- */

import store from '@js/methods/store';
import crud from '@js/methods/crud';

/** ----------------------------------------
    Needle Handlers
 ---------------------------------------- */

extend(Core, store);
extend(Core, crud);

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default Core;