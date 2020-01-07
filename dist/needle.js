var Needle=function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r=function(t){return new Date(t).getTime()/1e3},a=function(t,n,e,a){return{">":(t=a?r(t):t)>(e=a?r(e):e),"<":t<e,">=":t>=e,"<=":t<=e,"=":t===e}[n]},i=function(t,n,e){var r=function(t,e){return e[n]<t[n]?1:e[n]>t[n]?-1:0},a=function(t,e){return t[n]<e[n]?1:t[n]>e[n]?1:0};return{asc:function(){return t.sort(r)},desc:function(){return t.sort(a)}}[e]()};function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=[],s=[],l=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];arguments.length>1&&arguments[1];!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),h=h.length?h:n,this._amount=n.length,this._calc=0,this._chunks=[],this._data=n}var n,e,r;return n=t,(e=[{key:"_chain",value:function(n){return new t(n)}},{key:"_deep",value:function(t,n){return Object.keys(n).filter((function(t){return"object"===o(n[t])&&n}))}},{key:"_find",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._data;return e.filter((function(e){return e[t]===n}))}},{key:"_objPath",value:function(t){return t.split(".")}},{key:"_objReduce",value:function(t,n){return t.map((function(t){return t})).reduce((function(t,n){return t[n]}),n)}},{key:"_operator",value:function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return this._data.filter((function(i){return a(i[t],n,e,r)}))}},{key:"take",value:function(t){var n=this._data.slice(0,t);return(!t||t>=this._data.length)&&this._data||n}},{key:"select",value:function(){for(var t=this,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var a=this._data.map((function(n){var r={};return e.forEach((function(e){var a=-1!==e.indexOf(".")&&t._objPath(e);(n[e]||n[a[0]])&&(a?r[a.slice(-1)[0]]=t._objReduce(a,n):r[e]=n[e])})),r}));return this._chain(a)}},{key:"chunk",value:function(t){var n=this;this._chunks.data=[],this._chunks.current=0;for(var e=0;e<this._data.length;e+=t)this._chunks.data.push(this._data.slice(e,e+t));var r={chunks:this._chunks.data,current:this._chunks.selected,amount:this._chunks.data.length,size:t,prev:function(){return n._prevChunk()},next:function(){return n._nextChunk()},start:function(t){return n.template(t,n._chunks.data[0]),r}};return r}},{key:"_prevChunk",value:function(){var t=this._chunks;return t.current+=0===t.current?t.data.length-1:-1,this._chain(t.data[t.current])}},{key:"_nextChunk",value:function(){var t=this._chunks;return t.current+=t.current<t.data.length-1?1:-Math.abs(t.data.length-1),this._chain(t.data[t.current])}},{key:"index",value:function(t){return this._data[t]}},{key:"get",value:function(){return this._chain(this._data)}},{key:"first",value:function(){var t=this._data[0];return this._chain(t)}},{key:"last",value:function(){var t=this._data.slice(-1)[0];return this._chain(t)}},{key:"count",value:function(){return this._amount}},{key:"sort",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",e=i(this._data,t,n);return this._chain(e)}},{key:"log",value:function(t){console.log(t&&this.take(t)||this._data)}},{key:"print",value:function(t){(document.querySelector("#result")||document.body).textContent=[this._data].map((function(t){return JSON.stringify(t)}))}},{key:"random",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=[];n.length!==t||n.length===this._data.length;){var e=Math.floor(Math.random()*(1+this._data.length-1));-1===n.indexOf(this._data[e])&&n.push(this._data[e])}return this._chain(n)}},{key:"template",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._data;return n.forEach((function(n){return t(n)}))}},{key:"smaller",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._operator(t,"<=",n,e);return this._chain(r)}},{key:"bigger",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._operator(t,">=",n,e);return this._chain(r)}},{key:"between",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._data.filter((function(r){return a(r[t],">=",n[0],e)&&a(r[t],"<=",n[1],e)}));return this._chain(r)}},{key:"equal",value:function(n,e){return new t(this._operator(n,"=",e))}},{key:"min",value:function(t){var n=Math.min.apply(Math,u(this._data.map((function(n){return n[t]}))));return this.find(t,n)}},{key:"max",value:function(t){var n=Math.max.apply(Math,u(this._data.map((function(n){return n[t]}))));return this.find(t,n)}},{key:"sum",value:function(t){return this._calc=this._data.reduce((function(n,e){return n+e[t]}),0),this._calc}},{key:"before",value:function(t,n){return this.smaller(t,n,!0)}},{key:"after",value:function(t,n){return this.bigger(t,n,!0)}},{key:"period",value:function(t,n){return this.between(t,n,!0)}},{key:"is",value:function(t){var n=this._data.filter((function(n){return n[t]}));return this._chain(n)}},{key:"has",value:function(t){var n=this._data.filter((function(n){return n.hasOwnProperty(t)}));return this._chain(n)}},{key:"hasDeep",value:function(t){var n=this,e=[];return function t(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._data,i=arguments.length>2?arguments[2]:void 0;a.forEach((function(a){var u=i||a,o=n._deep(r,a);a.hasOwnProperty(r)&&e.push(u),o.length&&t(r,o.map((function(t){return a[t]})),u)}))}(t),this._chain(e)}},{key:"find",value:function(t,n){var e=this._find(t,n);return this._chain(e)}},{key:"findDeep",value:function(t,n){var e=this,r=[];return function t(n,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e._data,u=arguments.length>3?arguments[3]:void 0;i.forEach((function(i){var o=u||i,c=e._deep(n,i);i[n]===a&&r.push(o),c.length&&t(n,a,c.map((function(t){return i[t]})),o)}))}(t,n),this._chain(r)}},{key:"create",value:function(t){this._data.push(t),this._chain(this._data)}},{key:"read",value:function(t){return this._data[t]}},{key:"update",value:function(t,n){this._data[t]=n,this._chain(this._data)}},{key:"updateValue",value:function(t,n,e){this._data[t][n]=e,this._chain(this._data)}},{key:"updateAll",value:function(t,n){this._data.forEach((function(e){return e[t]=n})),this._chain(this._data)}},{key:"delete",value:function(t){delete this._data[t],this._chain(this._data)}},{key:"deleteValue",value:function(t,n){delete this._data[t][n],this._chain(this._data)}},{key:"deleteAll",value:function(){this._data=[],this._chain(this._data)}},{key:"save",value:function(n){return n=n||(65536*(1+Math.random())|0).toString(16).substring(1),s.forEach((function(t){return t.id++})),s.push({name:n,id:1,data:new t(this._data),time:Math.floor(Date.now()/1e3)}),s.reverse(),n}},{key:"retrieve",value:function(t){return this._find("name",t,s)}},{key:"data",get:function(){return this._data},set:function(t){this._data=t}},{key:"store",get:function(){return s}}])&&c(n.prototype,e),r&&c(n,r),t}();n.default=l}]).default;