/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { extend } from './util/_extends';

/** ----------------------------------------
     Helpers
 ---------------------------------------- */

import helpers from './methods/helpers';
import trail from './methods/trail';

/** ----------------------------------------
    Methods
 ---------------------------------------- */

import retrieve from './methods/retrieve';
import sort from './methods/sorting';
import debugging from './methods/debugging';
import template from './methods/template';
import numbers from './methods/numbers';
import dates from './methods/dates';
import matches from './methods/matches';
import combinations from './methods/combinations';

/** ----------------------------------------
     Handlers
 ---------------------------------------- */

import store from './methods/store';
import crud from './methods/crud';

/** ----------------------------------------
     Initiate Needle Core
 ---------------------------------------- */

class Core {}

/** ----------------------------------------
    Needle Helpers
 ---------------------------------------- */

extend(Core, helpers);
extend(Core, trail);

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
    Needle Handlers
 ---------------------------------------- */

extend(Core, store);
extend(Core, crud);

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default Core;