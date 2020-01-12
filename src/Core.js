/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { extend } from './needle/_extends';

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

extend(Core, 'helpers', helpers);
extend(Core, 'trail', trail);

/** ----------------------------------------
    Needle Methods
 ---------------------------------------- */

extend(Core, 'retrieve', retrieve);
extend(Core, 'sort', sort);
extend(Core, 'debugging', debugging);
extend(Core, 'template', template);
extend(Core, 'numbers', numbers);
extend(Core, 'dates', dates);
extend(Core, 'matches', matches);
extend(Core, 'combinations', combinations);

/** ----------------------------------------
    Needle Handlers
 ---------------------------------------- */

extend(Core, 'store', store);
extend(Core, 'crud', crud);

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default Core;