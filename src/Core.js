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

import helpers from '@method/helpers/base';
import trail from '@method/trail/base';

/** ----------------------------------------
    Needle Helpers
 ---------------------------------------- */

extend(Core, helpers);
extend(Core, trail);

/** ----------------------------------------
    Methods
 ---------------------------------------- */

import retrieve from '@method/retrieve/base';
import sort from '@method/sorting/base';
import debugging from '@method/debugging/base';
import template from '@method/template/base';
import numbers from '@method/numbers/base';
import dates from '@method/dates/base';
import matches from '@method/matches/base';
import combinations from '@method/combinations/base';
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

import store from '@method/store/base';
import crud from '@method/crud/base';

/** ----------------------------------------
    Needle Handlers
 ---------------------------------------- */

extend(Core, store);
extend(Core, crud);

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default Core;