/*!
 * Needle (0.8.1) by Sander Hidding
 * Find your needle in a haystack. Needle is a small and fast query builder for sorting, manipulating and retrieving data.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/needle.git)
 */
var Needle=function(t){var n={};function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";r.r(n);var e=function(t,n){Object.keys(n)[0];Object.keys(n).forEach((function(r){return t.prototype[r]=n[r]}))};var a=function(t){return Array.isArray(t)},i=function(t,n,r){return a(t[n])?t[n].includes(r):t[n]===r},u=function(t){return a(t)&&1===t.length&&t[0]||t},o=function(t){return Date.parse(t)};function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(t){return("number"==typeof t||isNaN(o(t))?Array.isArray(t)&&"array":"date")||h(t)};var c=function(t,n,r,e){t=e?new Date(t):t,r=e?new Date(r):r;var i=function(n){return t=u(t),a(t)?t.map((function(t){return o(t,n)})).some((function(t){return t})):o(t,n)},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a={">":t>e,"<":t<e,">=":t>=e,"<=":t<=e,"=":t===e,"!=":t!==e};return a[n]},h="="===n?"some":"every";return a(r)?r[h]((function(t){return i(t)})):i(r)};var f={_c:function(t){return new Needle(t,this._trail)},_f:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._data;n=u(n);var e=s(n),o=function(r){return r[t]&&i(r,t,n)};return{array:function(){return r.filter((function(r){return a(r[t])?function(r){return r[t].some((function(t){return n.includes(t)}))}(r):function(r){return n.includes(r[t])}(r)}))},boolean:function(){return r.filter((function(n){return n[t]}))},string:function(){return r.filter(o)},number:function(){return r.filter(o)}}[e]()},_o:function(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(arguments.length>4&&void 0!==arguments[4]?arguments[4]:this._data).filter((function(a){return c(a[t],n,r,e)}))}};var l=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var n,r={count:1,array:[],save:[]},e=function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=a||r;e.forEach((function(a,u){i.array.includes(a)&&i.save.push(a),i.array.push(a),u===e.length-1&&i.save.length>0&&(t(i.save,{array:[],save:[]}),r.count++),0===i.save.length&&i.array.length&&(n=i.array)}))};return e(t),{count:r.count,result:n}},_=function(t){return[].concat.apply([],t)};function d(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=function(t){return d(new Set(t))};function p(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y={_aT:function(t,n){for(var r=arguments.length,e=new Array(r>2?r-2:0),a=2;a<r;a++)e[a-2]=arguments[a];t&&this._trail.exe.push({type:["and","andWhere"].includes(n)?"and":["or","orWhere"].includes(n)&&"or",name:"_"+n,args:e,exe:this["_"+n].bind(this)})},_eT:function(){var t=this,n=[],r=[],e=this._trail.exe.map((function(e){return"or"===e.type&&(r=t._trail.data),"and"===e.type&&(r=t._trail.prev),n.push(e.type),{type:e.type,result:e.exe.apply(e,p(e.args).concat([r]))}})),a=e.filter((function(t){return"and"===t.type})).map((function(t){return t.result})),i=_(a),u=a.length>1?l(i):i,o=e.filter((function(t){return"or"===t.type})).map((function(t){return t.result})),h=_(o),s=v(h);return n.includes("and")||(u=this._trail.prev),this._rT(),[u,s]},_hT:function(){if(this._trail.exe.length)return this._data=v([].concat.apply([],this._eT())),this._c(this._data)},_rT:function(){this._trail={exe:[],data:[],prev:[]}}};var m=function(t){return t.split(".")};var g=function(t,n){return t.map((function(t){return t})).reduce((function(t,n){return t[n]}),n)};function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var T=function(t,n){return Object.keys(n).filter((function(t){var r=!a(n[t]),e="object"===b(n[t]);return r&&e&&n}))};var w={chunk:function(t){var n=this;this._hT(),this._chunks.data=[],this._chunks.current=0;for(var r=0;r<this._data.length;r+=t)this._chunks.data.push(this._data.slice(r,r+t));var e={chunks:this._chunks.data,current:this._chunks.selected,amount:this._chunks.data.length,size:t,prev:function(){return n._prevChunk()},next:function(){return n._nextChunk()},start:function(t){return n.template(t,n._chunks.data[0]),e}};return e},_prevChunk:function(){var t=this._chunks;return t.current+=0===t.current?t.data.length-1:-1,this._c(t.data[t.current])},_nextChunk:function(){var t=this._chunks;return t.current+=t.current<t.data.length-1?1:-Math.abs(t.data.length-1),this._c(t.data[t.current])},count:function(){return this._hT(),this._amount},first:function(){this._hT();var t=this._data[0];return this._c([t])},get:function(){return this._hT(),this._c(this._data)},index:function(t){return this._hT(),this._data[t]},last:function(){this._hT();var t=this._data.slice(-1)[0];return this._c([t])},select:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._hT();var e=this._data.map((function(t){var r={};return n.forEach((function(n){var e=-1!==n.indexOf(".")&&m(n);(t[n]||t[e[0]])&&(e?r[e.slice(-1)[0]]=g(e,t):r[n]=t[n])})),r}));return this._c(e)},take:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._data.length,n=arguments.length>1?arguments[1]:void 0;this._hT(),"string"===s(t)&&"all"===t&&(t=this._data.length);var r=this._data.slice(0,t),e=(!t||t>=this._data.length)&&this._data||r;return this.info=e.length,n&&{results:e,info:this.info}||e||[]},values:function(t){var n=this;this._hT();var r=[];return function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._data,i=arguments.length>2?arguments[2]:void 0;a.forEach((function(n){var a=i||n,u=T(e,n);n.hasOwnProperty(e)&&r.push(n[e]),u.length&&t(e,u.map((function(t){return n[t]})),a)}))}(t),v(_(r))}},O=function(t,n,r){var e="date"===s(t[0][n]),a=function(t,r){return{a:t=e?new Date(t[n]):t[n],b:r=e?new Date(r[n]):r[n]}},i=function(t,n){var r=a(t,n);return r.b<r.a?1:r.b>r.a?-1:0},u=function(t,n){var r=a(t,n);return r.a<r.b?1:r.a>r.b?-1:0};return{asc:function(){return t.sort(i)},desc:function(){return t.sort(u)}}[r]()};var j={sort:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";this._hT();var r=O(this._data,t,n);return this._c(r)}};var S={log:function(t){this._hT(),console.log(t&&this.take(t)||this._data)},print:function(t){this._hT(),(document.querySelector("#result")||document.body).textContent=[this._data].map((function(t){return JSON.stringify(t)}))},random:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._hT();for(var n=[];n.length!==t||n.length===this._data.length;){var r=Math.floor(Math.random()*(1+this._data.length-1));-1===n.indexOf(this._data[r])&&n.push(this._data[r])}return this._c(n)}};var k={_empty:function(t){var n=this;return 0===this._data.length&&t(this.config),{results:function(t){return n._results(t)}}},_results:function(t){var n=this;return t(this.info),{empty:function(t){return n._empty(t)}}},template:function(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._data;if(this._hT())return this._data.forEach(t,this);var e={needle:this,info:this.info};return r.length>0&&r.forEach(t,e),{info:this.info,empty:function(t){return n._empty(t)},results:function(t){return n._results(t)}}}};function x(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var A=function(t,n,r){return Math[r].apply(Math,x(t.map((function(t){return t[n]}))))};var D={average:function(t){this._hT();var n=this._data.reduce((function(n,r){return n+r[t]}),0)/this._data.length,r=this._data.reduce((function(r,e){return Math.abs(r[t]-n)<Math.abs(e[t]-n)?r:e}));return this.find(t,r[t])},smaller:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._hT();var e=this._o(t,"<=",n,r);return this._c(e)},bigger:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._hT();var e="date"===s(n),a=n?this._o(t,">=",n,e||r):this._data;return this._c(a)},between:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._hT();var e=this._data.filter((function(e){return c(e[t],">=",n[0],r)&&c(e[t],"<=",n[1],r)}));return this._c(e)},min:function(t){this._hT();var n=A(this._data,t,"min");return this.find(t,n)},max:function(t){this._hT();var n=A(this._data,t,"max");return this.find(t,n)},positive:function(t){this._hT();var n=this._o(t,">=",0);return this._c(n)},negative:function(t){this._hT();var n=this._o(t,"<",0);return this._c(n)},sum:function(t){return this._hT(),this._calc=this._data.reduce((function(n,r){return n+r[t]}),0),this._calc}};var E=function(t,n){return this.bigger(t,n,!0)};var M=function(t,n){return this.smaller(t,n,!0)},P=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"history",e=n?new Date(n):new Date;t=24*t*60*60*1e3;var a={history:e.getTime()-t,future:e.getTime()+t},i=new Date(a[r]);i.getDate(),i.getMonth(),i.getFullYear();return i},q=[];["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].forEach((function(t,n){var r,e,a;q.push({index:n,month:t,days:(r=n,a=new Date,e=e||a.getFullYear(),new Date(e,r+1,0).getDate())})}));var W=q,C=function(){return W};var N=function(){return(new Date).getFullYear()%4==0},F=function(){var t=new Date,n=t.getMonth(),r=t.getFullYear();return[{name:"days",amount:1},{name:"weeks",amount:7},{name:"months",year:r,month:n,amount:30},{name:"quarters",year:r,amount:Math.round((N?366:365)/4)},{name:"years",year:r,amount:N?366:365}]},Y=function(){return F};var I={after:E,before:M,month:function(t,n,r){var e=C(),a=this._f("month",n,e)[0],i=P(0,"".concat(a.month,"/1/").concat(r)),u=P(0,"".concat(a.month,"/").concat(a.days,"/").concat(r));return this.between(t,[i,u],!0)},_nD:function(t){var n=Y();return this._f("name",t,n)[0]},period:function(t,n){return this.between(t,n,!0)},previous:function(t,n,r){var e=this._nD(r),a=P(e.amount*n);return this.between(t,[a,new Date],!0)},upcoming:function(t,n,r){var e=this._nD(r),a=P(e.amount*n,new Date,"future");return this.between(t,[new Date,a],!0)},year:function(t,n){return this.between(t,["1/1/".concat(n),"12/31/".concat(n)],!0)}};var Q={find:function(t,n){this._hT();var r=n?this._f(t,n):this._data;return this._c(r)},findDeep:function(t,n){var r=this;this._hT();var e=[];return function t(n,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r._data,u=arguments.length>3?arguments[3]:void 0;i.forEach((function(i){var o=u||i,h=T(n,i);o===i&&r._f(n,a,[i]).length>0&&!e.includes(o)&&e.push(o),(0===h.length||Object.keys(i).includes(n))&&r._f(n,a,[i]).length>0&&!e.includes(o)&&e.push(o),h.length&&t(n,a,h.map((function(t){return i[t]})),o)}))}(t,n),this._c(e)},has:function(t){this._hT();var n=this._data.filter((function(n){return n.hasOwnProperty(t)}));return this._c(n)},hasDeep:function(t){var n=this;this._hT();var r=[];return function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._data,i=arguments.length>2?arguments[2]:void 0;a.forEach((function(n){var a=i||n,u=T(e,n);n.hasOwnProperty(e)&&r.push(a),u.length&&t(e,u.map((function(t){return n[t]})),a)}))}(t),this._c(r)},is:function(t){this._hT();var n=this._data.filter((function(n){return n[t]}));return this._c(n)},not:function(t){this._hT();var n=this._data.filter((function(n){return!n[t]}));return this._c(n)}};var V={where:function(t,n,r){!r&&(r=n)&&(n="="),this._hT(),this._trail.data=this._data;var e=r&&0!==r.length&&this._o(t,n,r)||this._data;return this._trail.prev=e,this._c(e)},andWhere:function(t,n,r){return!r&&(r=n)&&(n="="),r&&0!==r.length&&this._aT(!0,"andWhere",t,n,r),this._c(this._data)},_andWhere:function(t,n,r,e){return this._o(t,n,r,!1,e)},orWhere:function(t,n,r){return!r&&(r=n)&&(n="="),r&&0!==r.length&&this._aT(!0,"orWhere",t,n,r),this._c(this._data)},_orWhere:function(t,n,r,e){return this._o(t,n,r,!1,e)},query:function(t){this._hT(),this._trail.data=this._data;var n=t(this,this._data);return this._trail.prev=n,this._c(v(n))},_query:function(t,n){this._hT();var r={unique:v,doubles:l},e=t.map((function(t){return t.data})),a=r[n](_(e));return{amount:t.length,merge:a}},and:function(t){return this._aT(!0,"and",t),this._c(this._data)},_and:function(t,n){return t(new Needle(n),n)},or:function(t){return this._aT(!0,"or",t),this._c(this._data)},_or:function(t,n){return t(new Needle(n),n)},orQuery:function(t){var n=this._query(t(this),"unique");return this._c(n.merge)},andQuery:function(t){var n=this._query(t(this),"doubles"),r=n.merge.count===n.amount;return this._c(r?n.merge.result:[])}};var z={customEach:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._data;this._hT();var r=n.map(t);return this._c(r)},customFilter:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._data;this._hT();var r=n.filter(t);return this._c(r)}},J=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},R=function(){return Math.floor(Date.now()/1e3)};var B={save:function(t,n){return n=n||J(),t.length>0&&t.forEach((function(t){return t.id++})),t.push({name:n,id:1,data:this._data,time:R()}),t.reverse(),n},retrieve:function(t,n){return this._f("name",t,n)}};var G={create:function(t){this._hT(),this._data.push(t),this._c(this._data)},read:function(t){return this._hT(),this._c([this._data[t]])},remove:function(t){return this._hT(),this._data.splice(t,1),this._c(this._data)},removeValue:function(t,n){this._hT(),delete this._data[t][n],this._c(this._data)},removeAll:function(t){this._hT(),this._data.forEach((function(n){return delete n[t]})),this._c(this._data)},update:function(t,n){this._hT(),this._data[t]=n,this._c(this._data)},updateValue:function(t,n,r){this._hT(),this._data[t][n]=r,this._c(this._data)},updateAll:function(t,n){this._hT(),this._data.forEach((function(r){return r[t]=n})),this._c(this._data)}};var H=function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)};e(H,f),e(H,y),e(H,w),e(H,j),e(H,S),e(H,k),e(H,D),e(H,I),e(H,Q),e(H,V),e(H,z),e(H,B),e(H,G);var K=[],L=function(t,n){return K=K.length>0?K:t,[{name:"amount",value:t.length||0},{name:"calc",value:0},{name:"chunks",value:{}},{name:"content",value:{}},{name:"data",value:t},{name:"info",value:{set:K.length,length:t.length}},{name:"trail",value:n||{exe:[],data:[],prev:[]}}]};function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tt(t,n){return(tt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var nt=function(t){function n(){var t,r,e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,t=!(e=Z(n).call(this))||"object"!==U(e)&&"function"!=typeof e?$(r):e,function(t,n,r){L(n,r).forEach((function(n){return t["_"+n.name]=n.value}))}($(t),a,i),function(t,n){n.length&&Object.keys(n[0]).forEach((function(r){"object"!==s(n[0][r])&&(t._content[r]=s(n[0][r]))}))}($(t),a),t}var r,e,a;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&tt(t,n)}(n,t),r=n,(e=[{key:"data",get:function(){return this._data},set:function(t){this._data=t}},{key:"content",get:function(){return this._content}},{key:"info",get:function(){return this._info},set:function(t){this._info.length=t}},{key:"config",set:function(t){this._settings=t},get:function(){return this._settings}}])&&X(r.prototype,e),a&&X(r,a),n}(H);n.default=nt}]).default;module.exports=Needle;