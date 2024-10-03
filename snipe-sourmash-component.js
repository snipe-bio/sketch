/*! For license information please see snipe-sourmash-component.js.LICENSE.txt */
(()=>{var t={526:(t,e)=>{"use strict";e.byteLength=function(t){var e=s(t),r=e[0],o=e[1];return 3*(r+o)/4-o},e.toByteArray=function(t){var e,r,i=s(t),a=i[0],l=i[1],d=new n(function(t,e,r){return 3*(e+r)/4-r}(0,a,l)),c=0,p=l>0?a-4:a;for(r=0;r<p;r+=4)e=o[t.charCodeAt(r)]<<18|o[t.charCodeAt(r+1)]<<12|o[t.charCodeAt(r+2)]<<6|o[t.charCodeAt(r+3)],d[c++]=e>>16&255,d[c++]=e>>8&255,d[c++]=255&e;return 2===l&&(e=o[t.charCodeAt(r)]<<2|o[t.charCodeAt(r+1)]>>4,d[c++]=255&e),1===l&&(e=o[t.charCodeAt(r)]<<10|o[t.charCodeAt(r+1)]<<4|o[t.charCodeAt(r+2)]>>2,d[c++]=e>>8&255,d[c++]=255&e),d},e.fromByteArray=function(t){for(var e,o=t.length,n=o%3,i=[],a=16383,s=0,d=o-n;s<d;s+=a)i.push(l(t,s,s+a>d?d:s+a));return 1===n?(e=t[o-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===n&&(e=(t[o-2]<<8)+t[o-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),i.join("")};for(var r=[],o=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)r[a]=i[a],o[i.charCodeAt(a)]=a;function s(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t,e,o){for(var n,i,a=[],s=e;s<o;s+=3)n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),a.push(r[(i=n)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},287:(t,e,r)=>{"use strict";const o=r(526),n=r(251),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.hp=l,e.IS=50;const a=2147483647;function s(t){if(t>a)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return d(t,e,r)}function d(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|b(t,e);let o=s(r);const n=o.write(t,e);return n!==r&&(o=o.slice(0,n)),o}(t,e);if(ArrayBuffer.isView(t))return function(t){if(K(t,Uint8Array)){const e=new Uint8Array(t);return f(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(K(t,ArrayBuffer)||t&&K(t.buffer,ArrayBuffer))return f(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(K(t,SharedArrayBuffer)||t&&K(t.buffer,SharedArrayBuffer)))return f(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const o=t.valueOf&&t.valueOf();if(null!=o&&o!==t)return l.from(o,e,r);const n=function(t){if(l.isBuffer(t)){const e=0|u(t.length),r=s(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||Y(t.length)?s(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return l.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return c(t),s(t<0?0:0|u(t))}function h(t){const e=t.length<0?0:0|u(t.length),r=s(e);for(let o=0;o<e;o+=1)r[o]=255&t[o];return r}function f(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let o;return o=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(o,l.prototype),o}function u(t){if(t>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|t}function b(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||K(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===r)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(t).length;default:if(n)return o?-1:q(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,r){let o=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,r);case"utf8":case"utf-8":return S(this,e,r);case"ascii":return C(this,e,r);case"latin1":case"binary":return B(this,e,r);case"base64":return E(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}function m(t,e,r){const o=t[e];t[e]=t[r],t[r]=o}function v(t,e,r,o,n){if(0===t.length)return-1;if("string"==typeof r?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=n?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(n)return-1;r=t.length-1}else if(r<0){if(!n)return-1;r=0}if("string"==typeof e&&(e=l.from(e,o)),l.isBuffer(e))return 0===e.length?-1:y(t,e,r,o,n);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):y(t,[e],r,o,n);throw new TypeError("val must be string, number or Buffer")}function y(t,e,r,o,n){let i,a=1,s=t.length,l=e.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(t.length<2||e.length<2)return-1;a=2,s/=2,l/=2,r/=2}function d(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(n){let o=-1;for(i=r;i<s;i++)if(d(t,i)===d(e,-1===o?0:i-o)){if(-1===o&&(o=i),i-o+1===l)return o*a}else-1!==o&&(i-=i-o),o=-1}else for(r+l>s&&(r=s-l),i=r;i>=0;i--){let r=!0;for(let o=0;o<l;o++)if(d(t,i+o)!==d(e,o)){r=!1;break}if(r)return i}return-1}function x(t,e,r,o){r=Number(r)||0;const n=t.length-r;o?(o=Number(o))>n&&(o=n):o=n;const i=e.length;let a;for(o>i/2&&(o=i/2),a=0;a<o;++a){const o=parseInt(e.substr(2*a,2),16);if(Y(o))return a;t[r+a]=o}return a}function w(t,e,r,o){return V(q(e,t.length-r),t,r,o)}function k(t,e,r,o){return V(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,o)}function _(t,e,r,o){return V(G(e),t,r,o)}function z(t,e,r,o){return V(function(t,e){let r,o,n;const i=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)r=t.charCodeAt(a),o=r>>8,n=r%256,i.push(n),i.push(o);return i}(e,t.length-r),t,r,o)}function E(t,e,r){return 0===e&&r===t.length?o.fromByteArray(t):o.fromByteArray(t.slice(e,r))}function S(t,e,r){r=Math.min(t.length,r);const o=[];let n=e;for(;n<r;){const e=t[n];let i=null,a=e>239?4:e>223?3:e>191?2:1;if(n+a<=r){let r,o,s,l;switch(a){case 1:e<128&&(i=e);break;case 2:r=t[n+1],128==(192&r)&&(l=(31&e)<<6|63&r,l>127&&(i=l));break;case 3:r=t[n+1],o=t[n+2],128==(192&r)&&128==(192&o)&&(l=(15&e)<<12|(63&r)<<6|63&o,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=t[n+1],o=t[n+2],s=t[n+3],128==(192&r)&&128==(192&o)&&128==(192&s)&&(l=(15&e)<<18|(63&r)<<12|(63&o)<<6|63&s,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,o.push(i>>>10&1023|55296),i=56320|1023&i),o.push(i),n+=a}return function(t){const e=t.length;if(e<=A)return String.fromCharCode.apply(String,t);let r="",o=0;for(;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=A));return r}(o)}l.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(t,e,r){return d(t,e,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(t,e,r){return function(t,e,r){return c(t),t<=0?s(t):void 0!==e?"string"==typeof r?s(t).fill(e,r):s(t).fill(e):s(t)}(t,e,r)},l.allocUnsafe=function(t){return p(t)},l.allocUnsafeSlow=function(t){return p(t)},l.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==l.prototype},l.compare=function(t,e){if(K(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),K(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(t)||!l.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,o=e.length;for(let n=0,i=Math.min(r,o);n<i;++n)if(t[n]!==e[n]){r=t[n],o=e[n];break}return r<o?-1:o<r?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const o=l.allocUnsafe(e);let n=0;for(r=0;r<t.length;++r){let e=t[r];if(K(e,Uint8Array))n+e.length>o.length?(l.isBuffer(e)||(e=l.from(e)),e.copy(o,n)):Uint8Array.prototype.set.call(o,e,n);else{if(!l.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(o,n)}n+=e.length}return o},l.byteLength=b,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)m(this,e,e+1);return this},l.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},l.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},l.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?S(this,0,t):g.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(t){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){let t="";const r=e.IS;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(t,e,r,o,n){if(K(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===o&&(o=0),void 0===n&&(n=this.length),e<0||r>t.length||o<0||n>this.length)throw new RangeError("out of range index");if(o>=n&&e>=r)return 0;if(o>=n)return-1;if(e>=r)return 1;if(this===t)return 0;let i=(n>>>=0)-(o>>>=0),a=(r>>>=0)-(e>>>=0);const s=Math.min(i,a),d=this.slice(o,n),c=t.slice(e,r);for(let t=0;t<s;++t)if(d[t]!==c[t]){i=d[t],a=c[t];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},l.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},l.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},l.prototype.write=function(t,e,r,o){if(void 0===e)o="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)o=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===o&&(o="utf8")):(o=r,r=void 0)}const n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let i=!1;for(;;)switch(o){case"hex":return x(this,t,e,r);case"utf8":case"utf-8":return w(this,t,e,r);case"ascii":case"latin1":case"binary":return k(this,t,e,r);case"base64":return _(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function C(t,e,r){let o="";r=Math.min(t.length,r);for(let n=e;n<r;++n)o+=String.fromCharCode(127&t[n]);return o}function B(t,e,r){let o="";r=Math.min(t.length,r);for(let n=e;n<r;++n)o+=String.fromCharCode(t[n]);return o}function I(t,e,r){const o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);let n="";for(let o=e;o<r;++o)n+=X[t[o]];return n}function O(t,e,r){const o=t.slice(e,r);let n="";for(let t=0;t<o.length-1;t+=2)n+=String.fromCharCode(o[t]+256*o[t+1]);return n}function T(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,r,o,n,i){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<i)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}function U(t,e,r,o,n){$(e,o,n,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function j(t,e,r,o,n){$(e,o,n,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function N(t,e,r,o,n,i){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function P(t,e,r,o,i){return e=+e,r>>>=0,i||N(t,0,r,4),n.write(t,e,r,o,23,4),r+4}function L(t,e,r,o,i){return e=+e,r>>>=0,i||N(t,0,r,8),n.write(t,e,r,o,52,8),r+8}l.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const o=this.subarray(t,e);return Object.setPrototypeOf(o,l.prototype),o},l.prototype.readUintLE=l.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||T(t,e,this.length);let o=this[t],n=1,i=0;for(;++i<e&&(n*=256);)o+=this[t+i]*n;return o},l.prototype.readUintBE=l.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||T(t,e,this.length);let o=this[t+--e],n=1;for(;e>0&&(n*=256);)o+=this[t+--e]*n;return o},l.prototype.readUint8=l.prototype.readUInt8=function(t,e){return t>>>=0,e||T(t,1,this.length),this[t]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(t,e){return t>>>=0,e||T(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(t,e){return t>>>=0,e||T(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(t,e){return t>>>=0,e||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(t,e){return t>>>=0,e||T(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readBigUInt64LE=J((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Z(t,this.length-8);const o=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,n=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(o)+(BigInt(n)<<BigInt(32))})),l.prototype.readBigUInt64BE=J((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Z(t,this.length-8);const o=e*2**24+65536*this[++t]+256*this[++t]+this[++t],n=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(o)<<BigInt(32))+BigInt(n)})),l.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||T(t,e,this.length);let o=this[t],n=1,i=0;for(;++i<e&&(n*=256);)o+=this[t+i]*n;return n*=128,o>=n&&(o-=Math.pow(2,8*e)),o},l.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||T(t,e,this.length);let o=e,n=1,i=this[t+--o];for(;o>0&&(n*=256);)i+=this[t+--o]*n;return n*=128,i>=n&&(i-=Math.pow(2,8*e)),i},l.prototype.readInt8=function(t,e){return t>>>=0,e||T(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},l.prototype.readInt16LE=function(t,e){t>>>=0,e||T(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(t,e){t>>>=0,e||T(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(t,e){return t>>>=0,e||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return t>>>=0,e||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readBigInt64LE=J((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Z(t,this.length-8);const o=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(o)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),l.prototype.readBigInt64BE=J((function(t){W(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Z(t,this.length-8);const o=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(o)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),l.prototype.readFloatLE=function(t,e){return t>>>=0,e||T(t,4,this.length),n.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return t>>>=0,e||T(t,4,this.length),n.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return t>>>=0,e||T(t,8,this.length),n.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return t>>>=0,e||T(t,8,this.length),n.read(this,t,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(t,e,r,o){t=+t,e>>>=0,r>>>=0,o||R(this,t,e,r,Math.pow(2,8*r)-1,0);let n=1,i=0;for(this[e]=255&t;++i<r&&(n*=256);)this[e+i]=t/n&255;return e+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(t,e,r,o){t=+t,e>>>=0,r>>>=0,o||R(this,t,e,r,Math.pow(2,8*r)-1,0);let n=r-1,i=1;for(this[e+n]=255&t;--n>=0&&(i*=256);)this[e+n]=t/i&255;return e+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,255,0),this[e]=255&t,e+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigUInt64LE=J((function(t,e=0){return U(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=J((function(t,e=0){return j(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(t,e,r,o){if(t=+t,e>>>=0,!o){const o=Math.pow(2,8*r-1);R(this,t,e,r,o-1,-o)}let n=0,i=1,a=0;for(this[e]=255&t;++n<r&&(i*=256);)t<0&&0===a&&0!==this[e+n-1]&&(a=1),this[e+n]=(t/i>>0)-a&255;return e+r},l.prototype.writeIntBE=function(t,e,r,o){if(t=+t,e>>>=0,!o){const o=Math.pow(2,8*r-1);R(this,t,e,r,o-1,-o)}let n=r-1,i=1,a=0;for(this[e+n]=255&t;--n>=0&&(i*=256);)t<0&&0===a&&0!==this[e+n+1]&&(a=1),this[e+n]=(t/i>>0)-a&255;return e+r},l.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},l.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigInt64LE=J((function(t,e=0){return U(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=J((function(t,e=0){return j(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(t,e,r){return P(this,t,e,!0,r)},l.prototype.writeFloatBE=function(t,e,r){return P(this,t,e,!1,r)},l.prototype.writeDoubleLE=function(t,e,r){return L(this,t,e,!0,r)},l.prototype.writeDoubleBE=function(t,e,r){return L(this,t,e,!1,r)},l.prototype.copy=function(t,e,r,o){if(!l.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),o||0===o||(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<r&&(o=r),o===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-r&&(o=t.length-e+r);const n=o-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,o):Uint8Array.prototype.set.call(t,this.subarray(r,o),e),n},l.prototype.fill=function(t,e,r,o){if("string"==typeof t){if("string"==typeof e?(o=e,e=0,r=this.length):"string"==typeof r&&(o=r,r=this.length),void 0!==o&&"string"!=typeof o)throw new TypeError("encoding must be a string");if("string"==typeof o&&!l.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(1===t.length){const e=t.charCodeAt(0);("utf8"===o&&e<128||"latin1"===o)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let n;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(n=e;n<r;++n)this[n]=t;else{const i=l.isBuffer(t)?t:l.from(t,o),a=i.length;if(0===a)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(n=0;n<r-e;++n)this[n+e]=i[n%a]}return this};const D={};function F(t,e,r){D[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function M(t){let e="",r=t.length;const o="-"===t[0]?1:0;for(;r>=o+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function $(t,e,r,o,n,i){if(t>r||t<e){const o="bigint"==typeof e?"n":"";let n;throw n=i>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${8*(i+1)}${o}`:`>= -(2${o} ** ${8*(i+1)-1}${o}) and < 2 ** ${8*(i+1)-1}${o}`:`>= ${e}${o} and <= ${r}${o}`,new D.ERR_OUT_OF_RANGE("value",n,t)}!function(t,e,r){W(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||Z(e,t.length-(r+1))}(o,n,i)}function W(t,e){if("number"!=typeof t)throw new D.ERR_INVALID_ARG_TYPE(e,"number",t)}function Z(t,e,r){if(Math.floor(t)!==t)throw W(t,r),new D.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}F("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),F("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),F("ERR_OUT_OF_RANGE",(function(t,e,r){let o=`The value of "${t}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>2**32?n=M(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=M(n)),n+="n"),o+=` It must be ${e}. Received ${n}`,o}),RangeError);const H=/[^+/0-9A-Za-z-_]/g;function q(t,e){let r;e=e||1/0;const o=t.length;let n=null;const i=[];for(let a=0;a<o;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!n){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===o){(e-=3)>-1&&i.push(239,191,189);continue}n=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(e-=3)>-1&&i.push(239,191,189);if(n=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function G(t){return o.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(H,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,r,o){let n;for(n=0;n<o&&!(n+r>=e.length||n>=t.length);++n)e[n+r]=t[n];return n}function K(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Y(t){return t!=t}const X=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const o=16*r;for(let n=0;n<16;++n)e[o+n]=t[r]+t[n]}return e}();function J(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},251:(t,e)=>{e.read=function(t,e,r,o,n){var i,a,s=8*n-o-1,l=(1<<s)-1,d=l>>1,c=-7,p=r?n-1:0,h=r?-1:1,f=t[e+p];for(p+=h,i=f&(1<<-c)-1,f>>=-c,c+=s;c>0;i=256*i+t[e+p],p+=h,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=o;c>0;a=256*a+t[e+p],p+=h,c-=8);if(0===i)i=1-d;else{if(i===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,o),i-=d}return(f?-1:1)*a*Math.pow(2,i-o)},e.write=function(t,e,r,o,n,i){var a,s,l,d=8*i-n-1,c=(1<<d)-1,p=c>>1,h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,f=o?0:i-1,u=o?1:-1,b=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+p>=1?h/l:h*Math.pow(2,1-p))*l>=2&&(a++,l/=2),a+p>=c?(s=0,a=c):a+p>=1?(s=(e*l-1)*Math.pow(2,n),a+=p):(s=e*Math.pow(2,p-1)*Math.pow(2,n),a=0));n>=8;t[r+f]=255&s,f+=u,s/=256,n-=8);for(a=a<<n|s,d+=n;d>0;t[r+f]=255&a,f+=u,a/=256,d-=8);t[r+f-u]|=128*b}},710:(t,e,r)=>{var o=r(287).hp,n=r(606);t.exports=function t(e,r,o){function n(a,s){if(!r[a]){if(!e[a]){if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=r[a]={exports:{}};e[a][0].call(d.exports,(function(t){return n(e[a][1][t]||t)}),d,d.exports,t,e,r,o)}return r[a].exports}for(var i=void 0,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(t,e,r){"use strict";var o=t("./utils"),n=t("./support"),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(t){for(var e,r,n,a,s,l,d,c=[],p=0,h=t.length,f=h,u="string"!==o.getTypeOf(t);p<t.length;)f=h-p,n=u?(e=t[p++],r=p<h?t[p++]:0,p<h?t[p++]:0):(e=t.charCodeAt(p++),r=p<h?t.charCodeAt(p++):0,p<h?t.charCodeAt(p++):0),a=e>>2,s=(3&e)<<4|r>>4,l=1<f?(15&r)<<2|n>>6:64,d=2<f?63&n:64,c.push(i.charAt(a)+i.charAt(s)+i.charAt(l)+i.charAt(d));return c.join("")},r.decode=function(t){var e,r,o,a,s,l,d=0,c=0,p="data:";if(t.substr(0,5)===p)throw new Error("Invalid base64 input, it looks like a data url.");var h,f=3*(t=t.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(t.charAt(t.length-1)===i.charAt(64)&&f--,t.charAt(t.length-2)===i.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(h=n.uint8array?new Uint8Array(0|f):new Array(0|f);d<t.length;)e=i.indexOf(t.charAt(d++))<<2|(a=i.indexOf(t.charAt(d++)))>>4,r=(15&a)<<4|(s=i.indexOf(t.charAt(d++)))>>2,o=(3&s)<<6|(l=i.indexOf(t.charAt(d++))),h[c++]=e,64!==s&&(h[c++]=r),64!==l&&(h[c++]=o);return h}},{"./support":30,"./utils":32}],2:[function(t,e,r){"use strict";var o=t("./external"),n=t("./stream/DataWorker"),i=t("./stream/Crc32Probe"),a=t("./stream/DataLengthProbe");function s(t,e,r,o,n){this.compressedSize=t,this.uncompressedSize=e,this.crc32=r,this.compression=o,this.compressedContent=n}s.prototype={getContentWorker:function(){var t=new n(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),e=this;return t.on("end",(function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")})),t},getCompressedWorker:function(){return new n(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},s.createWorkerFrom=function(t,e,r){return t.pipe(new i).pipe(new a("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",e)},e.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,e,r){"use strict";var o=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,e,r){"use strict";var o=t("./utils"),n=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var o=0;o<8;o++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==o.getTypeOf(t)?function(t,e,r,o){var i=n,a=0+r;t^=-1;for(var s=0;s<a;s++)t=t>>>8^i[255&(t^e[s])];return-1^t}(0|e,t,t.length):function(t,e,r,o){var i=n,a=0+r;t^=-1;for(var s=0;s<a;s++)t=t>>>8^i[255&(t^e.charCodeAt(s))];return-1^t}(0|e,t,t.length):0}},{"./utils":32}],5:[function(t,e,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,e,r){"use strict";var o;o="undefined"!=typeof Promise?Promise:t("lie"),e.exports={Promise:o}},{lie:37}],7:[function(t,e,r){"use strict";var o="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=t("pako"),i=t("./utils"),a=t("./stream/GenericWorker"),s=o?"uint8array":"array";function l(t,e){a.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}r.magic="\b\0",i.inherits(l,a),l.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(i.transformTo(s,t.data),!1)},l.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(t){return new l("Deflate",t)},r.uncompressWorker=function(){return new l("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){"use strict";function o(t,e){var r,o="";for(r=0;r<e;r++)o+=String.fromCharCode(255&t),t>>>=8;return o}function n(t,e,r,n,a,c){var p,h,f=t.file,u=t.compression,b=c!==s.utf8encode,g=i.transformTo("string",c(f.name)),m=i.transformTo("string",s.utf8encode(f.name)),v=f.comment,y=i.transformTo("string",c(v)),x=i.transformTo("string",s.utf8encode(v)),w=m.length!==f.name.length,k=x.length!==v.length,_="",z="",E="",S=f.dir,A=f.date,C={crc32:0,compressedSize:0,uncompressedSize:0};e&&!r||(C.crc32=t.crc32,C.compressedSize=t.compressedSize,C.uncompressedSize=t.uncompressedSize);var B=0;e&&(B|=8),b||!w&&!k||(B|=2048);var I=0,O=0;S&&(I|=16),"UNIX"===a?(O=798,I|=function(t,e){var r=t;return t||(r=e?16893:33204),(65535&r)<<16}(f.unixPermissions,S)):(O=20,I|=function(t){return 63&(t||0)}(f.dosPermissions)),p=A.getUTCHours(),p<<=6,p|=A.getUTCMinutes(),p<<=5,p|=A.getUTCSeconds()/2,h=A.getUTCFullYear()-1980,h<<=4,h|=A.getUTCMonth()+1,h<<=5,h|=A.getUTCDate(),w&&(z=o(1,1)+o(l(g),4)+m,_+="up"+o(z.length,2)+z),k&&(E=o(1,1)+o(l(y),4)+x,_+="uc"+o(E.length,2)+E);var T="";return T+="\n\0",T+=o(B,2),T+=u.magic,T+=o(p,2),T+=o(h,2),T+=o(C.crc32,4),T+=o(C.compressedSize,4),T+=o(C.uncompressedSize,4),T+=o(g.length,2),T+=o(_.length,2),{fileRecord:d.LOCAL_FILE_HEADER+T+g+_,dirRecord:d.CENTRAL_FILE_HEADER+o(O,2)+T+o(y.length,2)+"\0\0\0\0"+o(I,4)+o(n,4)+g+_+y}}var i=t("../utils"),a=t("../stream/GenericWorker"),s=t("../utf8"),l=t("../crc32"),d=t("../signature");function c(t,e,r,o){a.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=r,this.encodeFileName=o,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}i.inherits(c,a),c.prototype.push=function(t){var e=t.meta.percent||0,r=this.entriesCount,o=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,a.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:r?(e+100*(r-o-1))/r:100}}))},c.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var r=n(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},c.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,r=n(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),e)this.push({data:function(t){return d.DATA_DESCRIPTOR+o(t.crc32,4)+o(t.compressedSize,4)+o(t.uncompressedSize,4)}(t),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},c.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var r=this.bytesWritten-t,n=function(t,e,r,n,a){var s=i.transformTo("string",a(n));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(t,2)+o(t,2)+o(e,4)+o(r,4)+o(s.length,2)+s}(this.dirRecords.length,r,t,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},c.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},c.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",(function(t){e.processChunk(t)})),t.on("end",(function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()})),t.on("error",(function(t){e.error(t)})),this},c.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},c.prototype.error=function(t){var e=this._sources;if(!a.prototype.error.call(this,t))return!1;for(var r=0;r<e.length;r++)try{e[r].error(t)}catch(t){}return!0},c.prototype.lock=function(){a.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=c},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,e,r){"use strict";var o=t("../compressions"),n=t("./ZipFileWorker");r.generateWorker=function(t,e,r){var i=new n(e.streamFiles,r,e.platform,e.encodeFileName),a=0;try{t.forEach((function(t,r){a++;var n=function(t,e){var r=t||e,n=o[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(r.options.compression,e.compression),s=r.options.compressionOptions||e.compressionOptions||{},l=r.dir,d=r.date;r._compressWorker(n,s).withStreamInfo("file",{name:t,dir:l,date:d,comment:r.comment||"",unixPermissions:r.unixPermissions,dosPermissions:r.dosPermissions}).pipe(i)})),i.entriesCount=a}catch(t){i.error(t)}return i}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,e,r){"use strict";function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var t=new o;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}(o.prototype=t("./object")).loadAsync=t("./load"),o.support=t("./support"),o.defaults=t("./defaults"),o.version="3.10.1",o.loadAsync=function(t,e){return(new o).loadAsync(t,e)},o.external=t("./external"),e.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,e,r){"use strict";var o=t("./utils"),n=t("./external"),i=t("./utf8"),a=t("./zipEntries"),s=t("./stream/Crc32Probe"),l=t("./nodejsUtils");function d(t){return new n.Promise((function(e,r){var o=t.decompressed.getContentWorker().pipe(new s);o.on("error",(function(t){r(t)})).on("end",(function(){o.streamInfo.crc32!==t.decompressed.crc32?r(new Error("Corrupted zip : CRC32 mismatch")):e()})).resume()}))}e.exports=function(t,e){var r=this;return e=o.extend(e||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:i.utf8decode}),l.isNode&&l.isStream(t)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",t,!0,e.optimizedBinaryString,e.base64).then((function(t){var r=new a(e);return r.load(t),r})).then((function(t){var r=[n.Promise.resolve(t)],o=t.files;if(e.checkCRC32)for(var i=0;i<o.length;i++)r.push(d(o[i]));return n.Promise.all(r)})).then((function(t){for(var n=t.shift(),i=n.files,a=0;a<i.length;a++){var s=i[a],l=s.fileNameStr,d=o.resolve(s.fileNameStr);r.file(d,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:e.createFolders}),s.dir||(r.file(d).unsafeOriginalName=l)}return n.zipComment.length&&(r.comment=n.zipComment),r}))}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,e,r){"use strict";var o=t("../utils"),n=t("../stream/GenericWorker");function i(t,e){n.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}o.inherits(i,n),i.prototype._bindStream=function(t){var e=this;(this._stream=t).pause(),t.on("data",(function(t){e.push({data:t,meta:{percent:0}})})).on("error",(function(t){e.isPaused?this.generatedError=t:e.error(t)})).on("end",(function(){e.isPaused?e._upstreamEnded=!0:e.end()}))},i.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},i.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=i},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,e,r){"use strict";var o=t("readable-stream").Readable;function n(t,e,r){o.call(this,e),this._helper=t;var n=this;t.on("data",(function(t,e){n.push(t)||n._helper.pause(),r&&r(e)})).on("error",(function(t){n.emit("error",t)})).on("end",(function(){n.push(null)}))}t("../utils").inherits(n,o),n.prototype._read=function(){this._helper.resume()},e.exports=n},{"../utils":32,"readable-stream":16}],14:[function(t,e,r){"use strict";e.exports={isNode:void 0!==o,newBufferFrom:function(t,e){if(o.from&&o.from!==Uint8Array.from)return o.from(t,e);if("number"==typeof t)throw new Error('The "data" argument must not be a number');return new o(t,e)},allocBuffer:function(t){if(o.alloc)return o.alloc(t);var e=new o(t);return e.fill(0),e},isBuffer:function(t){return o.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){"use strict";function o(t,e,r){var o,n=i.getTypeOf(e),s=i.extend(r||{},l);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(t=b(t)),s.createFolders&&(o=u(t))&&g.call(this,o,!0);var p="string"===n&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!p),(e instanceof d&&0===e.uncompressedSize||s.dir||!e||0===e.length)&&(s.base64=!1,s.binary=!0,e="",s.compression="STORE",n="string");var m;m=e instanceof d||e instanceof a?e:h.isNode&&h.isStream(e)?new f(t,e):i.prepareContent(t,e,s.binary,s.optimizedBinaryString,s.base64);var v=new c(t,m,s);this.files[t]=v}var n=t("./utf8"),i=t("./utils"),a=t("./stream/GenericWorker"),s=t("./stream/StreamHelper"),l=t("./defaults"),d=t("./compressedObject"),c=t("./zipObject"),p=t("./generate"),h=t("./nodejsUtils"),f=t("./nodejs/NodejsStreamInputAdapter"),u=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return 0<e?t.substring(0,e):""},b=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},g=function(t,e){return e=void 0!==e?e:l.createFolders,t=b(t),this.files[t]||o.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function m(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,r,o;for(e in this.files)o=this.files[e],(r=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(r,o)},filter:function(t){var e=[];return this.forEach((function(r,o){t(r,o)&&e.push(o)})),e},file:function(t,e,r){if(1!==arguments.length)return t=this.root+t,o.call(this,t,e,r),this;if(m(t)){var n=t;return this.filter((function(t,e){return!e.dir&&n.test(t)}))}var i=this.files[this.root+t];return i&&!i.dir?i:null},folder:function(t){if(!t)return this;if(m(t))return this.filter((function(e,r){return r.dir&&t.test(e)}));var e=this.root+t,r=g.call(this,e),o=this.clone();return o.root=r.name,o},remove:function(t){t=this.root+t;var e=this.files[t];if(e||("/"!==t.slice(-1)&&(t+="/"),e=this.files[t]),e&&!e.dir)delete this.files[t];else for(var r=this.filter((function(e,r){return r.name.slice(0,t.length)===t})),o=0;o<r.length;o++)delete this.files[r[o].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,r={};try{if((r=i.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");i.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var o=r.comment||this.comment||"";e=p.generateWorker(this,r,o)}catch(t){(e=new a("error")).error(t)}return new s(e,r.type||"string",r.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,e,r){"use strict";e.exports=t("stream")},{stream:void 0}],17:[function(t,e,r){"use strict";var o=t("./DataReader");function n(t){o.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t("../utils").inherits(n,o),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),o=t.charCodeAt(2),n=t.charCodeAt(3),i=this.length-4;0<=i;--i)if(this.data[i]===e&&this.data[i+1]===r&&this.data[i+2]===o&&this.data[i+3]===n)return i-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),r=t.charCodeAt(1),o=t.charCodeAt(2),n=t.charCodeAt(3),i=this.readData(4);return e===i[0]&&r===i[1]&&o===i[2]&&n===i[3]},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],18:[function(t,e,r){"use strict";var o=t("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(){},readInt:function(t){var e,r=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e);return this.index+=t,r},readString:function(t){return o.transformTo("string",this.readData(t))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=n},{"../utils":32}],19:[function(t,e,r){"use strict";var o=t("./Uint8ArrayReader");function n(t){o.call(this,t)}t("../utils").inherits(n,o),n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,e,r){"use strict";var o=t("./DataReader");function n(t){o.call(this,t)}t("../utils").inherits(n,o),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],21:[function(t,e,r){"use strict";var o=t("./ArrayReader");function n(t){o.call(this,t)}t("../utils").inherits(n,o),n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(t,e,r){"use strict";var o=t("../utils"),n=t("../support"),i=t("./ArrayReader"),a=t("./StringReader"),s=t("./NodeBufferReader"),l=t("./Uint8ArrayReader");e.exports=function(t){var e=o.getTypeOf(t);return o.checkSupport(e),"string"!==e||n.uint8array?"nodebuffer"===e?new s(t):n.uint8array?new l(o.transformTo("uint8array",t)):new i(o.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,e,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(t,e,r){"use strict";var o=t("./GenericWorker"),n=t("../utils");function i(t){o.call(this,"ConvertWorker to "+t),this.destType=t}n.inherits(i,o),i.prototype.processChunk=function(t){this.push({data:n.transformTo(this.destType,t.data),meta:t.meta})},e.exports=i},{"../utils":32,"./GenericWorker":28}],25:[function(t,e,r){"use strict";var o=t("./GenericWorker"),n=t("../crc32");function i(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(i,o),i.prototype.processChunk=function(t){this.streamInfo.crc32=n(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=i},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,e,r){"use strict";var o=t("../utils"),n=t("./GenericWorker");function i(t){n.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}o.inherits(i,n),i.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}n.prototype.processChunk.call(this,t)},e.exports=i},{"../utils":32,"./GenericWorker":28}],27:[function(t,e,r){"use strict";var o=t("../utils"),n=t("./GenericWorker");function i(t){n.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then((function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=o.getTypeOf(t),e.isPaused||e._tickAndRepeat()}),(function(t){e.error(t)}))}o.inherits(i,n),i.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},i.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},i.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},i.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=i},{"../utils":32,"./GenericWorker":28}],28:[function(t,e,r){"use strict";function o(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",(function(t){e.processChunk(t)})),t.on("end",(function(){e.end()})),t.on("error",(function(t){e.error(t)})),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var t=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=o},{}],29:[function(t,e,r){"use strict";var n=t("../utils"),i=t("./ConvertWorker"),a=t("./GenericWorker"),s=t("../base64"),l=t("../support"),d=t("../external"),c=null;if(l.nodestream)try{c=t("../nodejs/NodejsStreamOutputAdapter")}catch(t){}function p(t,e,r){var o=e;switch(e){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=e,this._mimeType=r,n.checkSupport(o),this._worker=t.pipe(new i(o)),t.lock()}catch(t){this._worker=new a("error"),this._worker.error(t)}}p.prototype={accumulate:function(t){return function(t,e){return new d.Promise((function(r,i){var a=[],l=t._internalType,d=t._outputType,c=t._mimeType;t.on("data",(function(t,r){a.push(t),e&&e(r)})).on("error",(function(t){a=[],i(t)})).on("end",(function(){try{var t=function(t,e,r){switch(t){case"blob":return n.newBlob(n.transformTo("arraybuffer",e),r);case"base64":return s.encode(e);default:return n.transformTo(t,e)}}(d,function(t,e){var r,n=0,i=null,a=0;for(r=0;r<e.length;r++)a+=e[r].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(i=new Uint8Array(a),r=0;r<e.length;r++)i.set(e[r],n),n+=e[r].length;return i;case"nodebuffer":return o.concat(e);default:throw new Error("concat : unsupported type '"+t+"'")}}(l,a),c);r(t)}catch(t){i(t)}a=[]})).resume()}))}(this,t)},on:function(t,e){var r=this;return"data"===t?this._worker.on(t,(function(t){e.call(r,t.data,t.meta)})):this._worker.on(t,(function(){n.delay(e,arguments,r)})),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(n.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,e,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer=void 0!==o,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(t){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(t){r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch(t){r.nodestream=!1}},{"readable-stream":16}],31:[function(t,e,r){"use strict";for(var o=t("./utils"),n=t("./support"),i=t("./nodejsUtils"),a=t("./stream/GenericWorker"),s=new Array(256),l=0;l<256;l++)s[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(){a.call(this,"utf-8 decode"),this.leftOver=null}function c(){a.call(this,"utf-8 encode")}s[254]=s[254]=1,r.utf8encode=function(t){return n.nodebuffer?i.newBufferFrom(t,"utf-8"):function(t){var e,r,o,i,a,s=t.length,l=0;for(i=0;i<s;i++)55296==(64512&(r=t.charCodeAt(i)))&&i+1<s&&56320==(64512&(o=t.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(o-56320),i++),l+=r<128?1:r<2048?2:r<65536?3:4;for(e=n.uint8array?new Uint8Array(l):new Array(l),i=a=0;a<l;i++)55296==(64512&(r=t.charCodeAt(i)))&&i+1<s&&56320==(64512&(o=t.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(o-56320),i++),r<128?e[a++]=r:(r<2048?e[a++]=192|r>>>6:(r<65536?e[a++]=224|r>>>12:(e[a++]=240|r>>>18,e[a++]=128|r>>>12&63),e[a++]=128|r>>>6&63),e[a++]=128|63&r);return e}(t)},r.utf8decode=function(t){return n.nodebuffer?o.transformTo("nodebuffer",t).toString("utf-8"):function(t){var e,r,n,i,a=t.length,l=new Array(2*a);for(e=r=0;e<a;)if((n=t[e++])<128)l[r++]=n;else if(4<(i=s[n]))l[r++]=65533,e+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&e<a;)n=n<<6|63&t[e++],i--;1<i?l[r++]=65533:n<65536?l[r++]=n:(n-=65536,l[r++]=55296|n>>10&1023,l[r++]=56320|1023&n)}return l.length!==r&&(l.subarray?l=l.subarray(0,r):l.length=r),o.applyFromCharCode(l)}(t=o.transformTo(n.uint8array?"uint8array":"array",t))},o.inherits(d,a),d.prototype.processChunk=function(t){var e=o.transformTo(n.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(n.uint8array){var i=e;(e=new Uint8Array(i.length+this.leftOver.length)).set(this.leftOver,0),e.set(i,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var a=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0||0===r?e:r+s[t[r]]>e?r:e}(e),l=e;a!==e.length&&(n.uint8array?(l=e.subarray(0,a),this.leftOver=e.subarray(a,e.length)):(l=e.slice(0,a),this.leftOver=e.slice(a,e.length))),this.push({data:r.utf8decode(l),meta:t.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,o.inherits(c,a),c.prototype.processChunk=function(t){this.push({data:r.utf8encode(t.data),meta:t.meta})},r.Utf8EncodeWorker=c},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,e,r){"use strict";var o=t("./support"),n=t("./base64"),i=t("./nodejsUtils"),a=t("./external");function s(t){return t}function l(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r);return e}t("setimmediate"),r.newBlob=function(t,e){r.checkSupport("blob");try{return new Blob([t],{type:e})}catch(r){try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return o.append(t),o.getBlob(e)}catch(t){throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(t,e,r){var o=[],n=0,i=t.length;if(i<=r)return String.fromCharCode.apply(null,t);for(;n<i;)"array"===e||"nodebuffer"===e?o.push(String.fromCharCode.apply(null,t.slice(n,Math.min(n+r,i)))):o.push(String.fromCharCode.apply(null,t.subarray(n,Math.min(n+r,i)))),n+=r;return o.join("")},stringifyByChar:function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,i.allocBuffer(1)).length}catch(t){return!1}}()}};function c(t){var e=65536,o=r.getTypeOf(t),n=!0;if("uint8array"===o?n=d.applyCanBeUsed.uint8array:"nodebuffer"===o&&(n=d.applyCanBeUsed.nodebuffer),n)for(;1<e;)try{return d.stringifyByChunk(t,o,e)}catch(t){e=Math.floor(e/2)}return d.stringifyByChar(t)}function p(t,e){for(var r=0;r<t.length;r++)e[r]=t[r];return e}r.applyFromCharCode=c;var h={};h.string={string:s,array:function(t){return l(t,new Array(t.length))},arraybuffer:function(t){return h.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,i.allocBuffer(t.length))}},h.array={string:c,array:s,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return i.newBufferFrom(t)}},h.arraybuffer={string:function(t){return c(new Uint8Array(t))},array:function(t){return p(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:s,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return i.newBufferFrom(new Uint8Array(t))}},h.uint8array={string:c,array:function(t){return p(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:s,nodebuffer:function(t){return i.newBufferFrom(t)}},h.nodebuffer={string:c,array:function(t){return p(t,new Array(t.length))},arraybuffer:function(t){return h.nodebuffer.uint8array(t).buffer},uint8array:function(t){return p(t,new Uint8Array(t.length))},nodebuffer:s},r.transformTo=function(t,e){if(e=e||"",!t)return e;r.checkSupport(t);var o=r.getTypeOf(e);return h[o][t](e)},r.resolve=function(t){for(var e=t.split("/"),r=[],o=0;o<e.length;o++){var n=e[o];"."===n||""===n&&0!==o&&o!==e.length-1||(".."===n?r.pop():r.push(n))}return r.join("/")},r.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&i.isBuffer(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(t){var e,r,o="";for(r=0;r<(t||"").length;r++)o+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase();return o},r.delay=function(t,e,r){setImmediate((function(){t.apply(r||null,e||[])}))},r.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.prototype=new r},r.extend=function(){var t,e,r={};for(t=0;t<arguments.length;t++)for(e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&void 0===r[e]&&(r[e]=arguments[t][e]);return r},r.prepareContent=function(t,e,i,s,d){return a.Promise.resolve(e).then((function(t){return o.blob&&(t instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(t)))&&"undefined"!=typeof FileReader?new a.Promise((function(e,r){var o=new FileReader;o.onload=function(t){e(t.target.result)},o.onerror=function(t){r(t.target.error)},o.readAsArrayBuffer(t)})):t})).then((function(e){var c=r.getTypeOf(e);return c?("arraybuffer"===c?e=r.transformTo("uint8array",e):"string"===c&&(d?e=n.decode(e):i&&!0!==s&&(e=function(t){return l(t,o.uint8array?new Uint8Array(t.length):new Array(t.length))}(e))),e):a.Promise.reject(new Error("Can't read the data of '"+t+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))}))}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,e,r){"use strict";var o=t("./reader/readerFor"),n=t("./utils"),i=t("./signature"),a=t("./zipEntry"),s=t("./support");function l(t){this.files=[],this.loadOptions=t}l.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(e)+", expected "+n.pretty(t)+")")}},isSignature:function(t,e){var r=this.reader.index;this.reader.setIndex(t);var o=this.reader.readString(4)===e;return this.reader.setIndex(r),o},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=s.uint8array?"uint8array":"array",r=n.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,r,o=this.zip64EndOfCentralSize-44;0<o;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(i.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER);)(t=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);if(t<0)throw this.isSignature(0,i.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(t);var e=t;if(this.checkSignature(i.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,i.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var o=e-r;if(0<o)this.isSignature(e,i.CENTRAL_FILE_HEADER)||(this.reader.zero=o);else if(o<0)throw new Error("Corrupted zip: missing "+Math.abs(o)+" bytes.")},prepareReader:function(t){this.reader=o(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=l},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){"use strict";var o=t("./reader/readerFor"),n=t("./utils"),i=t("./compressedObject"),a=t("./crc32"),s=t("./utf8"),l=t("./compressions"),d=t("./support");function c(t,e){this.options=t,this.loadOptions=e}c.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(t){var e,r;if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=function(t){for(var e in l)if(Object.prototype.hasOwnProperty.call(l,e)&&l[e].magic===t)return l[e];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+n.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==t&&(this.dosPermissions=63&this.externalFileAttributes),3==t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var t=o(this.extraFields[1].value);this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=t.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=t.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=t.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=t.readInt(4))}},readExtraFields:function(t){var e,r,o,n=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<n;)e=t.readInt(2),r=t.readInt(2),o=t.readData(r),this.extraFields[e]={id:e,length:r,value:o};t.setIndex(n)},handleUTF8:function(){var t=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var r=n.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var o=this.findExtraFieldUnicodeComment();if(null!==o)this.fileCommentStr=o;else{var i=n.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=o(t.value);return 1!==e.readInt(1)||a(this.fileName)!==e.readInt(4)?null:s.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=o(t.value);return 1!==e.readInt(1)||a(this.fileComment)!==e.readInt(4)?null:s.utf8decode(e.readData(t.length-5))}return null}},e.exports=c},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,e,r){"use strict";function o(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=e,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var n=t("./stream/StreamHelper"),i=t("./stream/DataWorker"),a=t("./utf8"),s=t("./compressedObject"),l=t("./stream/GenericWorker");o.prototype={internalStream:function(t){var e=null,r="string";try{if(!t)throw new Error("No output type specified.");var o="string"===(r=t.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),e=this._decompressWorker();var i=!this._dataBinary;i&&!o&&(e=e.pipe(new a.Utf8EncodeWorker)),!i&&o&&(e=e.pipe(new a.Utf8DecodeWorker))}catch(t){(e=new l("error")).error(t)}return new n(e,r,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof s&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),s.createWorkerFrom(r,t,e)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof l?this._data:new i(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],c=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<d.length;p++)o.prototype[d[p]]=c;e.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,e,o){(function(t){"use strict";var r,o,n=t.MutationObserver||t.WebKitMutationObserver;if(n){var i=0,a=new n(c),s=t.document.createTextNode("");a.observe(s,{characterData:!0}),r=function(){s.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){c(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(c,0)};else{var l=new t.MessageChannel;l.port1.onmessage=c,r=function(){l.port2.postMessage(0)}}var d=[];function c(){var t,e;o=!0;for(var r=d.length;r;){for(e=d,d=[],t=-1;++t<r;)e[t]();r=d.length}o=!1}e.exports=function(t){1!==d.push(t)||o||r()}}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){"use strict";var o=t("immediate");function n(){}var i={},a=["REJECTED"],s=["FULFILLED"],l=["PENDING"];function d(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,t!==n&&f(this,t)}function c(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function p(t,e,r){o((function(){var o;try{o=e(r)}catch(o){return i.reject(t,o)}o===t?i.reject(t,new TypeError("Cannot resolve promise with itself")):i.resolve(t,o)}))}function h(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function f(t,e){var r=!1;function o(e){r||(r=!0,i.reject(t,e))}function n(e){r||(r=!0,i.resolve(t,e))}var a=u((function(){e(n,o)}));"error"===a.status&&o(a.value)}function u(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}(e.exports=d).prototype.finally=function(t){if("function"!=typeof t)return this;var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))},d.prototype.catch=function(t){return this.then(null,t)},d.prototype.then=function(t,e){if("function"!=typeof t&&this.state===s||"function"!=typeof e&&this.state===a)return this;var r=new this.constructor(n);return this.state!==l?p(r,this.state===s?t:e,this.outcome):this.queue.push(new c(r,t,e)),r},c.prototype.callFulfilled=function(t){i.resolve(this.promise,t)},c.prototype.otherCallFulfilled=function(t){p(this.promise,this.onFulfilled,t)},c.prototype.callRejected=function(t){i.reject(this.promise,t)},c.prototype.otherCallRejected=function(t){p(this.promise,this.onRejected,t)},i.resolve=function(t,e){var r=u(h,e);if("error"===r.status)return i.reject(t,r.value);var o=r.value;if(o)f(t,o);else{t.state=s,t.outcome=e;for(var n=-1,a=t.queue.length;++n<a;)t.queue[n].callFulfilled(e)}return t},i.reject=function(t,e){t.state=a,t.outcome=e;for(var r=-1,o=t.queue.length;++r<o;)t.queue[r].callRejected(e);return t},d.resolve=function(t){return t instanceof this?t:i.resolve(new this(n),t)},d.reject=function(t){var e=new this(n);return i.reject(e,t)},d.all=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,o=!1;if(!r)return this.resolve([]);for(var a=new Array(r),s=0,l=-1,d=new this(n);++l<r;)c(t[l],l);return d;function c(t,n){e.resolve(t).then((function(t){a[n]=t,++s!==r||o||(o=!0,i.resolve(d,a))}),(function(t){o||(o=!0,i.reject(d,t))}))}},d.race=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var e=t.length,r=!1;if(!e)return this.resolve([]);for(var o,a=-1,s=new this(n);++a<e;)o=t[a],this.resolve(o).then((function(t){r||(r=!0,i.resolve(s,t))}),(function(t){r||(r=!0,i.reject(s,t))}));return s}},{immediate:36}],38:[function(t,e,r){"use strict";var o={};(0,t("./lib/utils/common").assign)(o,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,e,r){"use strict";var o=t("./zlib/deflate"),n=t("./utils/common"),i=t("./utils/strings"),a=t("./zlib/messages"),s=t("./zlib/zstream"),l=Object.prototype.toString,d=0,c=-1,p=0,h=8;function f(t){if(!(this instanceof f))return new f(t);this.options=n.assign({level:c,method:h,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=o.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==d)throw new Error(a[r]);if(e.header&&o.deflateSetHeader(this.strm,e.header),e.dictionary){var u;if(u="string"==typeof e.dictionary?i.string2buf(e.dictionary):"[object ArrayBuffer]"===l.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=o.deflateSetDictionary(this.strm,u))!==d)throw new Error(a[r]);this._dict_set=!0}}function u(t,e){var r=new f(e);if(r.push(t,!0),r.err)throw r.msg||a[r.err];return r.result}f.prototype.push=function(t,e){var r,a,s=this.strm,c=this.options.chunkSize;if(this.ended)return!1;a=e===~~e?e:!0===e?4:0,"string"==typeof t?s.input=i.string2buf(t):"[object ArrayBuffer]"===l.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new n.Buf8(c),s.next_out=0,s.avail_out=c),1!==(r=o.deflate(s,a))&&r!==d)return this.onEnd(r),!(this.ended=!0);0!==s.avail_out&&(0!==s.avail_in||4!==a&&2!==a)||("string"===this.options.to?this.onData(i.buf2binstring(n.shrinkBuf(s.output,s.next_out))):this.onData(n.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||0===s.avail_out)&&1!==r);return 4===a?(r=o.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===d):2!==a||(this.onEnd(d),!(s.avail_out=0))},f.prototype.onData=function(t){this.chunks.push(t)},f.prototype.onEnd=function(t){t===d&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=f,r.deflate=u,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,u(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,u(t,e)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,e,r){"use strict";var o=t("./zlib/inflate"),n=t("./utils/common"),i=t("./utils/strings"),a=t("./zlib/constants"),s=t("./zlib/messages"),l=t("./zlib/zstream"),d=t("./zlib/gzheader"),c=Object.prototype.toString;function p(t){if(!(this instanceof p))return new p(t);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&0<=e.windowBits&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(0<=e.windowBits&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),15<e.windowBits&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var r=o.inflateInit2(this.strm,e.windowBits);if(r!==a.Z_OK)throw new Error(s[r]);this.header=new d,o.inflateGetHeader(this.strm,this.header)}function h(t,e){var r=new p(e);if(r.push(t,!0),r.err)throw r.msg||s[r.err];return r.result}p.prototype.push=function(t,e){var r,s,l,d,p,h,f=this.strm,u=this.options.chunkSize,b=this.options.dictionary,g=!1;if(this.ended)return!1;s=e===~~e?e:!0===e?a.Z_FINISH:a.Z_NO_FLUSH,"string"==typeof t?f.input=i.binstring2buf(t):"[object ArrayBuffer]"===c.call(t)?f.input=new Uint8Array(t):f.input=t,f.next_in=0,f.avail_in=f.input.length;do{if(0===f.avail_out&&(f.output=new n.Buf8(u),f.next_out=0,f.avail_out=u),(r=o.inflate(f,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&b&&(h="string"==typeof b?i.string2buf(b):"[object ArrayBuffer]"===c.call(b)?new Uint8Array(b):b,r=o.inflateSetDictionary(this.strm,h)),r===a.Z_BUF_ERROR&&!0===g&&(r=a.Z_OK,g=!1),r!==a.Z_STREAM_END&&r!==a.Z_OK)return this.onEnd(r),!(this.ended=!0);f.next_out&&(0!==f.avail_out&&r!==a.Z_STREAM_END&&(0!==f.avail_in||s!==a.Z_FINISH&&s!==a.Z_SYNC_FLUSH)||("string"===this.options.to?(l=i.utf8border(f.output,f.next_out),d=f.next_out-l,p=i.buf2string(f.output,l),f.next_out=d,f.avail_out=u-d,d&&n.arraySet(f.output,f.output,l,d,0),this.onData(p)):this.onData(n.shrinkBuf(f.output,f.next_out)))),0===f.avail_in&&0===f.avail_out&&(g=!0)}while((0<f.avail_in||0===f.avail_out)&&r!==a.Z_STREAM_END);return r===a.Z_STREAM_END&&(s=a.Z_FINISH),s===a.Z_FINISH?(r=o.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===a.Z_OK):s!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),!(f.avail_out=0))},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===a.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=p,r.inflate=h,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,h(t,e)},r.ungzip=h},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,e,r){"use strict";var o="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,o,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+o),n);else for(var i=0;i<o;i++)t[n+i]=e[r+i]},flattenChunks:function(t){var e,r,o,n,i,a;for(e=o=0,r=t.length;e<r;e++)o+=t[e].length;for(a=new Uint8Array(o),e=n=0,r=t.length;e<r;e++)i=t[e],a.set(i,n),n+=i.length;return a}},i={arraySet:function(t,e,r,o,n){for(var i=0;i<o;i++)t[n+i]=e[r+i]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,i))},r.setTyped(o)},{}],42:[function(t,e,r){"use strict";var o=t("./common"),n=!0,i=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){i=!1}for(var a=new o.Buf8(256),s=0;s<256;s++)a[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function l(t,e){if(e<65537&&(t.subarray&&i||!t.subarray&&n))return String.fromCharCode.apply(null,o.shrinkBuf(t,e));for(var r="",a=0;a<e;a++)r+=String.fromCharCode(t[a]);return r}a[254]=a[254]=1,r.string2buf=function(t){var e,r,n,i,a,s=t.length,l=0;for(i=0;i<s;i++)55296==(64512&(r=t.charCodeAt(i)))&&i+1<s&&56320==(64512&(n=t.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),l+=r<128?1:r<2048?2:r<65536?3:4;for(e=new o.Buf8(l),i=a=0;a<l;i++)55296==(64512&(r=t.charCodeAt(i)))&&i+1<s&&56320==(64512&(n=t.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?e[a++]=r:(r<2048?e[a++]=192|r>>>6:(r<65536?e[a++]=224|r>>>12:(e[a++]=240|r>>>18,e[a++]=128|r>>>12&63),e[a++]=128|r>>>6&63),e[a++]=128|63&r);return e},r.buf2binstring=function(t){return l(t,t.length)},r.binstring2buf=function(t){for(var e=new o.Buf8(t.length),r=0,n=e.length;r<n;r++)e[r]=t.charCodeAt(r);return e},r.buf2string=function(t,e){var r,o,n,i,s=e||t.length,d=new Array(2*s);for(r=o=0;r<s;)if((n=t[r++])<128)d[o++]=n;else if(4<(i=a[n]))d[o++]=65533,r+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&r<s;)n=n<<6|63&t[r++],i--;1<i?d[o++]=65533:n<65536?d[o++]=n:(n-=65536,d[o++]=55296|n>>10&1023,d[o++]=56320|1023&n)}return l(d,o)},r.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0||0===r?e:r+a[t[r]]>e?r:e}},{"./common":41}],43:[function(t,e,r){"use strict";e.exports=function(t,e,r,o){for(var n=65535&t|0,i=t>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;i=i+(n=n+e[o++]|0)|0,--a;);n%=65521,i%=65521}return n|i<<16|0}},{}],44:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,e,r){"use strict";var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var o=0;o<8;o++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,n){var i=o,a=n+r;t^=-1;for(var s=n;s<a;s++)t=t>>>8^i[255&(t^e[s])];return-1^t}},{}],46:[function(t,e,r){"use strict";var o,n=t("../utils/common"),i=t("./trees"),a=t("./adler32"),s=t("./crc32"),l=t("./messages"),d=0,c=0,p=-2,h=2,f=8,u=286,b=30,g=19,m=2*u+1,v=15,y=3,x=258,w=x+y+1,k=42,_=113;function z(t,e){return t.msg=l[e],e}function E(t){return(t<<1)-(4<t?9:0)}function S(t){for(var e=t.length;0<=--e;)t[e]=0}function A(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(n.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function C(t,e){i._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,A(t.strm)}function B(t,e){t.pending_buf[t.pending++]=e}function I(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function O(t,e){var r,o,n=t.max_chain_length,i=t.strstart,a=t.prev_length,s=t.nice_match,l=t.strstart>t.w_size-w?t.strstart-(t.w_size-w):0,d=t.window,c=t.w_mask,p=t.prev,h=t.strstart+x,f=d[i+a-1],u=d[i+a];t.prev_length>=t.good_match&&(n>>=2),s>t.lookahead&&(s=t.lookahead);do{if(d[(r=e)+a]===u&&d[r+a-1]===f&&d[r]===d[i]&&d[++r]===d[i+1]){i+=2,r++;do{}while(d[++i]===d[++r]&&d[++i]===d[++r]&&d[++i]===d[++r]&&d[++i]===d[++r]&&d[++i]===d[++r]&&d[++i]===d[++r]&&d[++i]===d[++r]&&d[++i]===d[++r]&&i<h);if(o=x-(h-i),i=h-x,a<o){if(t.match_start=e,s<=(a=o))break;f=d[i+a-1],u=d[i+a]}}}while((e=p[e&c])>l&&0!=--n);return a<=t.lookahead?a:t.lookahead}function T(t){var e,r,o,i,l,d,c,p,h,f,u=t.w_size;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=u+(u-w)){for(n.arraySet(t.window,t.window,u,u,0),t.match_start-=u,t.strstart-=u,t.block_start-=u,e=r=t.hash_size;o=t.head[--e],t.head[e]=u<=o?o-u:0,--r;);for(e=r=u;o=t.prev[--e],t.prev[e]=u<=o?o-u:0,--r;);i+=u}if(0===t.strm.avail_in)break;if(d=t.strm,c=t.window,p=t.strstart+t.lookahead,f=void 0,(h=i)<(f=d.avail_in)&&(f=h),r=0===f?0:(d.avail_in-=f,n.arraySet(c,d.input,d.next_in,f,p),1===d.state.wrap?d.adler=a(d.adler,c,f,p):2===d.state.wrap&&(d.adler=s(d.adler,c,f,p)),d.next_in+=f,d.total_in+=f,f),t.lookahead+=r,t.lookahead+t.insert>=y)for(l=t.strstart-t.insert,t.ins_h=t.window[l],t.ins_h=(t.ins_h<<t.hash_shift^t.window[l+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[l+y-1])&t.hash_mask,t.prev[l&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=l,l++,t.insert--,!(t.lookahead+t.insert<y)););}while(t.lookahead<w&&0!==t.strm.avail_in)}function R(t,e){for(var r,o;;){if(t.lookahead<w){if(T(t),t.lookahead<w&&e===d)return 1;if(0===t.lookahead)break}if(r=0,t.lookahead>=y&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+y-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-w&&(t.match_length=O(t,r)),t.match_length>=y)if(o=i._tr_tally(t,t.strstart-t.match_start,t.match_length-y),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=y){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+y-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else o=i._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(o&&(C(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<y-1?t.strstart:y-1,4===e?(C(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(C(t,!1),0===t.strm.avail_out)?1:2}function U(t,e){for(var r,o,n;;){if(t.lookahead<w){if(T(t),t.lookahead<w&&e===d)return 1;if(0===t.lookahead)break}if(r=0,t.lookahead>=y&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+y-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=y-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-w&&(t.match_length=O(t,r),t.match_length<=5&&(1===t.strategy||t.match_length===y&&4096<t.strstart-t.match_start)&&(t.match_length=y-1)),t.prev_length>=y&&t.match_length<=t.prev_length){for(n=t.strstart+t.lookahead-y,o=i._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-y),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+y-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=y-1,t.strstart++,o&&(C(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((o=i._tr_tally(t,0,t.window[t.strstart-1]))&&C(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(o=i._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<y-1?t.strstart:y-1,4===e?(C(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(C(t,!1),0===t.strm.avail_out)?1:2}function j(t,e,r,o,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=o,this.func=n}function N(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=f,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*m),this.dyn_dtree=new n.Buf16(2*(2*b+1)),this.bl_tree=new n.Buf16(2*(2*g+1)),S(this.dyn_ltree),S(this.dyn_dtree),S(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(v+1),this.heap=new n.Buf16(2*u+1),S(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*u+1),S(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function P(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=h,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?k:_,t.adler=2===e.wrap?0:1,e.last_flush=d,i._tr_init(e),c):z(t,p)}function L(t){var e=P(t);return e===c&&function(t){t.window_size=2*t.w_size,S(t.head),t.max_lazy_match=o[t.level].max_lazy,t.good_match=o[t.level].good_length,t.nice_match=o[t.level].nice_length,t.max_chain_length=o[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=y-1,t.match_available=0,t.ins_h=0}(t.state),e}function D(t,e,r,o,i,a){if(!t)return p;var s=1;if(-1===e&&(e=6),o<0?(s=0,o=-o):15<o&&(s=2,o-=16),i<1||9<i||r!==f||o<8||15<o||e<0||9<e||a<0||4<a)return z(t,p);8===o&&(o=9);var l=new N;return(t.state=l).strm=t,l.wrap=s,l.gzhead=null,l.w_bits=o,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=i+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+y-1)/y),l.window=new n.Buf8(2*l.w_size),l.head=new n.Buf16(l.hash_size),l.prev=new n.Buf16(l.w_size),l.lit_bufsize=1<<i+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new n.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=a,l.method=r,L(t)}o=[new j(0,0,0,0,(function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(T(t),0===t.lookahead&&e===d)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var o=t.block_start+r;if((0===t.strstart||t.strstart>=o)&&(t.lookahead=t.strstart-o,t.strstart=o,C(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-w&&(C(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(C(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(C(t,!1),t.strm.avail_out),1)})),new j(4,4,8,4,R),new j(4,5,16,8,R),new j(4,6,32,32,R),new j(4,4,16,16,U),new j(8,16,32,32,U),new j(8,16,128,128,U),new j(8,32,128,256,U),new j(32,128,258,1024,U),new j(32,258,258,4096,U)],r.deflateInit=function(t,e){return D(t,e,f,15,8,0)},r.deflateInit2=D,r.deflateReset=L,r.deflateResetKeep=P,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?p:(t.state.gzhead=e,c):p},r.deflate=function(t,e){var r,n,a,l;if(!t||!t.state||5<e||e<0)return t?z(t,p):p;if(n=t.state,!t.output||!t.input&&0!==t.avail_in||666===n.status&&4!==e)return z(t,0===t.avail_out?-5:p);if(n.strm=t,r=n.last_flush,n.last_flush=e,n.status===k)if(2===n.wrap)t.adler=0,B(n,31),B(n,139),B(n,8),n.gzhead?(B(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),B(n,255&n.gzhead.time),B(n,n.gzhead.time>>8&255),B(n,n.gzhead.time>>16&255),B(n,n.gzhead.time>>24&255),B(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),B(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(B(n,255&n.gzhead.extra.length),B(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=s(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(B(n,0),B(n,0),B(n,0),B(n,0),B(n,0),B(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),B(n,3),n.status=_);else{var h=f+(n.w_bits-8<<4)<<8;h|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(h|=32),h+=31-h%31,n.status=_,I(n,h),0!==n.strstart&&(I(n,t.adler>>>16),I(n,65535&t.adler)),t.adler=1}if(69===n.status)if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),A(t),a=n.pending,n.pending!==n.pending_buf_size));)B(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),A(t),a=n.pending,n.pending===n.pending_buf_size)){l=1;break}l=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,B(n,l)}while(0!==l);n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),0===l&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),A(t),a=n.pending,n.pending===n.pending_buf_size)){l=1;break}l=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,B(n,l)}while(0!==l);n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),0===l&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&A(t),n.pending+2<=n.pending_buf_size&&(B(n,255&t.adler),B(n,t.adler>>8&255),t.adler=0,n.status=_)):n.status=_),0!==n.pending){if(A(t),0===t.avail_out)return n.last_flush=-1,c}else if(0===t.avail_in&&E(e)<=E(r)&&4!==e)return z(t,-5);if(666===n.status&&0!==t.avail_in)return z(t,-5);if(0!==t.avail_in||0!==n.lookahead||e!==d&&666!==n.status){var u=2===n.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(T(t),0===t.lookahead)){if(e===d)return 1;break}if(t.match_length=0,r=i._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(C(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(C(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(C(t,!1),0===t.strm.avail_out)?1:2}(n,e):3===n.strategy?function(t,e){for(var r,o,n,a,s=t.window;;){if(t.lookahead<=x){if(T(t),t.lookahead<=x&&e===d)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=y&&0<t.strstart&&(o=s[n=t.strstart-1])===s[++n]&&o===s[++n]&&o===s[++n]){a=t.strstart+x;do{}while(o===s[++n]&&o===s[++n]&&o===s[++n]&&o===s[++n]&&o===s[++n]&&o===s[++n]&&o===s[++n]&&o===s[++n]&&n<a);t.match_length=x-(a-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=y?(r=i._tr_tally(t,1,t.match_length-y),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=i._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(C(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(C(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(C(t,!1),0===t.strm.avail_out)?1:2}(n,e):o[n.level].func(n,e);if(3!==u&&4!==u||(n.status=666),1===u||3===u)return 0===t.avail_out&&(n.last_flush=-1),c;if(2===u&&(1===e?i._tr_align(n):5!==e&&(i._tr_stored_block(n,0,0,!1),3===e&&(S(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),A(t),0===t.avail_out))return n.last_flush=-1,c}return 4!==e?c:n.wrap<=0?1:(2===n.wrap?(B(n,255&t.adler),B(n,t.adler>>8&255),B(n,t.adler>>16&255),B(n,t.adler>>24&255),B(n,255&t.total_in),B(n,t.total_in>>8&255),B(n,t.total_in>>16&255),B(n,t.total_in>>24&255)):(I(n,t.adler>>>16),I(n,65535&t.adler)),A(t),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?c:1)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==k&&69!==e&&73!==e&&91!==e&&103!==e&&e!==_&&666!==e?z(t,p):(t.state=null,e===_?z(t,-3):c):p},r.deflateSetDictionary=function(t,e){var r,o,i,s,l,d,h,f,u=e.length;if(!t||!t.state)return p;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==k||r.lookahead)return p;for(1===s&&(t.adler=a(t.adler,e,u,0)),r.wrap=0,u>=r.w_size&&(0===s&&(S(r.head),r.strstart=0,r.block_start=0,r.insert=0),f=new n.Buf8(r.w_size),n.arraySet(f,e,u-r.w_size,r.w_size,0),e=f,u=r.w_size),l=t.avail_in,d=t.next_in,h=t.input,t.avail_in=u,t.next_in=0,t.input=e,T(r);r.lookahead>=y;){for(o=r.strstart,i=r.lookahead-(y-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[o+y-1])&r.hash_mask,r.prev[o&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=o,o++,--i;);r.strstart=o,r.lookahead=y-1,T(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=y-1,r.match_available=0,t.next_in=d,t.input=h,t.avail_in=l,r.wrap=s,c},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,e,r){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,e,r){"use strict";e.exports=function(t,e){var r,o,n,i,a,s,l,d,c,p,h,f,u,b,g,m,v,y,x,w,k,_,z,E,S;r=t.state,o=t.next_in,E=t.input,n=o+(t.avail_in-5),i=t.next_out,S=t.output,a=i-(e-t.avail_out),s=i+(t.avail_out-257),l=r.dmax,d=r.wsize,c=r.whave,p=r.wnext,h=r.window,f=r.hold,u=r.bits,b=r.lencode,g=r.distcode,m=(1<<r.lenbits)-1,v=(1<<r.distbits)-1;t:do{u<15&&(f+=E[o++]<<u,u+=8,f+=E[o++]<<u,u+=8),y=b[f&m];e:for(;;){if(f>>>=x=y>>>24,u-=x,0==(x=y>>>16&255))S[i++]=65535&y;else{if(!(16&x)){if(0==(64&x)){y=b[(65535&y)+(f&(1<<x)-1)];continue e}if(32&x){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}w=65535&y,(x&=15)&&(u<x&&(f+=E[o++]<<u,u+=8),w+=f&(1<<x)-1,f>>>=x,u-=x),u<15&&(f+=E[o++]<<u,u+=8,f+=E[o++]<<u,u+=8),y=g[f&v];r:for(;;){if(f>>>=x=y>>>24,u-=x,!(16&(x=y>>>16&255))){if(0==(64&x)){y=g[(65535&y)+(f&(1<<x)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(k=65535&y,u<(x&=15)&&(f+=E[o++]<<u,(u+=8)<x&&(f+=E[o++]<<u,u+=8)),l<(k+=f&(1<<x)-1)){t.msg="invalid distance too far back",r.mode=30;break t}if(f>>>=x,u-=x,(x=i-a)<k){if(c<(x=k-x)&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(z=h,(_=0)===p){if(_+=d-x,x<w){for(w-=x;S[i++]=h[_++],--x;);_=i-k,z=S}}else if(p<x){if(_+=d+p-x,(x-=p)<w){for(w-=x;S[i++]=h[_++],--x;);if(_=0,p<w){for(w-=x=p;S[i++]=h[_++],--x;);_=i-k,z=S}}}else if(_+=p-x,x<w){for(w-=x;S[i++]=h[_++],--x;);_=i-k,z=S}for(;2<w;)S[i++]=z[_++],S[i++]=z[_++],S[i++]=z[_++],w-=3;w&&(S[i++]=z[_++],1<w&&(S[i++]=z[_++]))}else{for(_=i-k;S[i++]=S[_++],S[i++]=S[_++],S[i++]=S[_++],2<(w-=3););w&&(S[i++]=S[_++],1<w&&(S[i++]=S[_++]))}break}}break}}while(o<n&&i<s);o-=w=u>>3,f&=(1<<(u-=w<<3))-1,t.next_in=o,t.next_out=i,t.avail_in=o<n?n-o+5:5-(o-n),t.avail_out=i<s?s-i+257:257-(i-s),r.hold=f,r.bits=u}},{}],49:[function(t,e,r){"use strict";var o=t("../utils/common"),n=t("./adler32"),i=t("./crc32"),a=t("./inffast"),s=t("./inftrees"),l=0,d=-2,c=1,p=852,h=592;function f(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function u(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=c,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new o.Buf32(p),e.distcode=e.distdyn=new o.Buf32(h),e.sane=1,e.back=-1,l):d}function g(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,b(t)):d}function m(t,e){var r,o;return t&&t.state?(o=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||15<e)?d:(null!==o.window&&o.wbits!==e&&(o.window=null),o.wrap=r,o.wbits=e,g(t))):d}function v(t,e){var r,o;return t?(o=new u,(t.state=o).window=null,(r=m(t,e))!==l&&(t.state=null),r):d}var y,x,w=!0;function k(t){if(w){var e;for(y=new o.Buf32(512),x=new o.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(s(1,t.lens,0,288,y,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;s(2,t.lens,0,32,x,0,t.work,{bits:5}),w=!1}t.lencode=y,t.lenbits=9,t.distcode=x,t.distbits=5}function _(t,e,r,n){var i,a=t.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new o.Buf8(a.wsize)),n>=a.wsize?(o.arraySet(a.window,e,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(n<(i=a.wsize-a.wnext)&&(i=n),o.arraySet(a.window,e,r-n,i,a.wnext),(n-=i)?(o.arraySet(a.window,e,r-n,n,0),a.wnext=n,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=i))),0}r.inflateReset=g,r.inflateReset2=m,r.inflateResetKeep=b,r.inflateInit=function(t){return v(t,15)},r.inflateInit2=v,r.inflate=function(t,e){var r,p,h,u,b,g,m,v,y,x,w,z,E,S,A,C,B,I,O,T,R,U,j,N,P=0,L=new o.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return d;12===(r=t.state).mode&&(r.mode=13),b=t.next_out,h=t.output,m=t.avail_out,u=t.next_in,p=t.input,g=t.avail_in,v=r.hold,y=r.bits,x=g,w=m,U=l;t:for(;;)switch(r.mode){case c:if(0===r.wrap){r.mode=13;break}for(;y<16;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(2&r.wrap&&35615===v){L[r.check=0]=255&v,L[1]=v>>>8&255,r.check=i(r.check,L,2,0),y=v=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&v)<<8)+(v>>8))%31){t.msg="incorrect header check",r.mode=30;break}if(8!=(15&v)){t.msg="unknown compression method",r.mode=30;break}if(y-=4,R=8+(15&(v>>>=4)),0===r.wbits)r.wbits=R;else if(R>r.wbits){t.msg="invalid window size",r.mode=30;break}r.dmax=1<<R,t.adler=r.check=1,r.mode=512&v?10:12,y=v=0;break;case 2:for(;y<16;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(r.flags=v,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=v>>8&1),512&r.flags&&(L[0]=255&v,L[1]=v>>>8&255,r.check=i(r.check,L,2,0)),y=v=0,r.mode=3;case 3:for(;y<32;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}r.head&&(r.head.time=v),512&r.flags&&(L[0]=255&v,L[1]=v>>>8&255,L[2]=v>>>16&255,L[3]=v>>>24&255,r.check=i(r.check,L,4,0)),y=v=0,r.mode=4;case 4:for(;y<16;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}r.head&&(r.head.xflags=255&v,r.head.os=v>>8),512&r.flags&&(L[0]=255&v,L[1]=v>>>8&255,r.check=i(r.check,L,2,0)),y=v=0,r.mode=5;case 5:if(1024&r.flags){for(;y<16;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}r.length=v,r.head&&(r.head.extra_len=v),512&r.flags&&(L[0]=255&v,L[1]=v>>>8&255,r.check=i(r.check,L,2,0)),y=v=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(g<(z=r.length)&&(z=g),z&&(r.head&&(R=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),o.arraySet(r.head.extra,p,u,z,R)),512&r.flags&&(r.check=i(r.check,p,z,u)),g-=z,u+=z,r.length-=z),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===g)break t;for(z=0;R=p[u+z++],r.head&&R&&r.length<65536&&(r.head.name+=String.fromCharCode(R)),R&&z<g;);if(512&r.flags&&(r.check=i(r.check,p,z,u)),g-=z,u+=z,R)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===g)break t;for(z=0;R=p[u+z++],r.head&&R&&r.length<65536&&(r.head.comment+=String.fromCharCode(R)),R&&z<g;);if(512&r.flags&&(r.check=i(r.check,p,z,u)),g-=z,u+=z,R)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;y<16;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(v!==(65535&r.check)){t.msg="header crc mismatch",r.mode=30;break}y=v=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=12;break;case 10:for(;y<32;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}t.adler=r.check=f(v),y=v=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=b,t.avail_out=m,t.next_in=u,t.avail_in=g,r.hold=v,r.bits=y,2;t.adler=r.check=1,r.mode=12;case 12:if(5===e||6===e)break t;case 13:if(r.last){v>>>=7&y,y-=7&y,r.mode=27;break}for(;y<3;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}switch(r.last=1&v,y-=1,3&(v>>>=1)){case 0:r.mode=14;break;case 1:if(k(r),r.mode=20,6!==e)break;v>>>=2,y-=2;break t;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=30}v>>>=2,y-=2;break;case 14:for(v>>>=7&y,y-=7&y;y<32;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if((65535&v)!=(v>>>16^65535)){t.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&v,y=v=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(z=r.length){if(g<z&&(z=g),m<z&&(z=m),0===z)break t;o.arraySet(h,p,u,z,b),g-=z,u+=z,m-=z,b+=z,r.length-=z;break}r.mode=12;break;case 17:for(;y<14;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(r.nlen=257+(31&v),v>>>=5,y-=5,r.ndist=1+(31&v),v>>>=5,y-=5,r.ncode=4+(15&v),v>>>=4,y-=4,286<r.nlen||30<r.ndist){t.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;y<3;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}r.lens[D[r.have++]]=7&v,v>>>=3,y-=3}for(;r.have<19;)r.lens[D[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,j={bits:r.lenbits},U=s(0,r.lens,0,19,r.lencode,0,r.work,j),r.lenbits=j.bits,U){t.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;C=(P=r.lencode[v&(1<<r.lenbits)-1])>>>16&255,B=65535&P,!((A=P>>>24)<=y);){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(B<16)v>>>=A,y-=A,r.lens[r.have++]=B;else{if(16===B){for(N=A+2;y<N;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(v>>>=A,y-=A,0===r.have){t.msg="invalid bit length repeat",r.mode=30;break}R=r.lens[r.have-1],z=3+(3&v),v>>>=2,y-=2}else if(17===B){for(N=A+3;y<N;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}y-=A,R=0,z=3+(7&(v>>>=A)),v>>>=3,y-=3}else{for(N=A+7;y<N;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}y-=A,R=0,z=11+(127&(v>>>=A)),v>>>=7,y-=7}if(r.have+z>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=30;break}for(;z--;)r.lens[r.have++]=R}}if(30===r.mode)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,j={bits:r.lenbits},U=s(1,r.lens,0,r.nlen,r.lencode,0,r.work,j),r.lenbits=j.bits,U){t.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,j={bits:r.distbits},U=s(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,j),r.distbits=j.bits,U){t.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(6<=g&&258<=m){t.next_out=b,t.avail_out=m,t.next_in=u,t.avail_in=g,r.hold=v,r.bits=y,a(t,w),b=t.next_out,h=t.output,m=t.avail_out,u=t.next_in,p=t.input,g=t.avail_in,v=r.hold,y=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;C=(P=r.lencode[v&(1<<r.lenbits)-1])>>>16&255,B=65535&P,!((A=P>>>24)<=y);){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(C&&0==(240&C)){for(I=A,O=C,T=B;C=(P=r.lencode[T+((v&(1<<I+O)-1)>>I)])>>>16&255,B=65535&P,!(I+(A=P>>>24)<=y);){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}v>>>=I,y-=I,r.back+=I}if(v>>>=A,y-=A,r.back+=A,r.length=B,0===C){r.mode=26;break}if(32&C){r.back=-1,r.mode=12;break}if(64&C){t.msg="invalid literal/length code",r.mode=30;break}r.extra=15&C,r.mode=22;case 22:if(r.extra){for(N=r.extra;y<N;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}r.length+=v&(1<<r.extra)-1,v>>>=r.extra,y-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;C=(P=r.distcode[v&(1<<r.distbits)-1])>>>16&255,B=65535&P,!((A=P>>>24)<=y);){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(0==(240&C)){for(I=A,O=C,T=B;C=(P=r.distcode[T+((v&(1<<I+O)-1)>>I)])>>>16&255,B=65535&P,!(I+(A=P>>>24)<=y);){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}v>>>=I,y-=I,r.back+=I}if(v>>>=A,y-=A,r.back+=A,64&C){t.msg="invalid distance code",r.mode=30;break}r.offset=B,r.extra=15&C,r.mode=24;case 24:if(r.extra){for(N=r.extra;y<N;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}r.offset+=v&(1<<r.extra)-1,v>>>=r.extra,y-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===m)break t;if(z=w-m,r.offset>z){if((z=r.offset-z)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=30;break}E=z>r.wnext?(z-=r.wnext,r.wsize-z):r.wnext-z,z>r.length&&(z=r.length),S=r.window}else S=h,E=b-r.offset,z=r.length;for(m<z&&(z=m),m-=z,r.length-=z;h[b++]=S[E++],--z;);0===r.length&&(r.mode=21);break;case 26:if(0===m)break t;h[b++]=r.length,m--,r.mode=21;break;case 27:if(r.wrap){for(;y<32;){if(0===g)break t;g--,v|=p[u++]<<y,y+=8}if(w-=m,t.total_out+=w,r.total+=w,w&&(t.adler=r.check=r.flags?i(r.check,h,w,b-w):n(r.check,h,w,b-w)),w=m,(r.flags?v:f(v))!==r.check){t.msg="incorrect data check",r.mode=30;break}y=v=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;y<32;){if(0===g)break t;g--,v+=p[u++]<<y,y+=8}if(v!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=30;break}y=v=0}r.mode=29;case 29:U=1;break t;case 30:U=-3;break t;case 31:return-4;default:return d}return t.next_out=b,t.avail_out=m,t.next_in=u,t.avail_in=g,r.hold=v,r.bits=y,(r.wsize||w!==t.avail_out&&r.mode<30&&(r.mode<27||4!==e))&&_(t,t.output,t.next_out,w-t.avail_out)?(r.mode=31,-4):(x-=t.avail_in,w-=t.avail_out,t.total_in+=x,t.total_out+=w,r.total+=w,r.wrap&&w&&(t.adler=r.check=r.flags?i(r.check,h,w,t.next_out-w):n(r.check,h,w,t.next_out-w)),t.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==x&&0===w||4===e)&&U===l&&(U=-5),U)},r.inflateEnd=function(t){if(!t||!t.state)return d;var e=t.state;return e.window&&(e.window=null),t.state=null,l},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?d:((r.head=e).done=!1,l):d},r.inflateSetDictionary=function(t,e){var r,o=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?d:11===r.mode&&n(1,e,o,0)!==r.check?-3:_(t,e,o,o)?(r.mode=31,-4):(r.havedict=1,l):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,e,r){"use strict";var o=t("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],i=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,l,d,c,p,h){var f,u,b,g,m,v,y,x,w,k=h.bits,_=0,z=0,E=0,S=0,A=0,C=0,B=0,I=0,O=0,T=0,R=null,U=0,j=new o.Buf16(16),N=new o.Buf16(16),P=null,L=0;for(_=0;_<=15;_++)j[_]=0;for(z=0;z<l;z++)j[e[r+z]]++;for(A=k,S=15;1<=S&&0===j[S];S--);if(S<A&&(A=S),0===S)return d[c++]=20971520,d[c++]=20971520,h.bits=1,0;for(E=1;E<S&&0===j[E];E++);for(A<E&&(A=E),_=I=1;_<=15;_++)if(I<<=1,(I-=j[_])<0)return-1;if(0<I&&(0===t||1!==S))return-1;for(N[1]=0,_=1;_<15;_++)N[_+1]=N[_]+j[_];for(z=0;z<l;z++)0!==e[r+z]&&(p[N[e[r+z]]++]=z);if(v=0===t?(R=P=p,19):1===t?(R=n,U-=257,P=i,L-=257,256):(R=a,P=s,-1),_=E,m=c,B=z=T=0,b=-1,g=(O=1<<(C=A))-1,1===t&&852<O||2===t&&592<O)return 1;for(;;){for(y=_-B,w=p[z]<v?(x=0,p[z]):p[z]>v?(x=P[L+p[z]],R[U+p[z]]):(x=96,0),f=1<<_-B,E=u=1<<C;d[m+(T>>B)+(u-=f)]=y<<24|x<<16|w|0,0!==u;);for(f=1<<_-1;T&f;)f>>=1;if(0!==f?(T&=f-1,T+=f):T=0,z++,0==--j[_]){if(_===S)break;_=e[r+p[z]]}if(A<_&&(T&g)!==b){for(0===B&&(B=A),m+=E,I=1<<(C=_-B);C+B<S&&!((I-=j[C+B])<=0);)C++,I<<=1;if(O+=1<<C,1===t&&852<O||2===t&&592<O)return 1;d[b=T&g]=A<<24|C<<16|m-c|0}}return 0!==T&&(d[m+T]=_-B<<24|64<<16|0),h.bits=A,0}},{"../utils/common":41}],51:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,e,r){"use strict";var o=t("../utils/common");function n(t){for(var e=t.length;0<=--e;)t[e]=0}var i=256,a=286,s=30,l=15,d=16,c=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],p=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],f=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u=new Array(576);n(u);var b=new Array(60);n(b);var g=new Array(512);n(g);var m=new Array(256);n(m);var v=new Array(29);n(v);var y,x,w,k=new Array(s);function _(t,e,r,o,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=o,this.max_length=n,this.has_stree=t&&t.length}function z(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function E(t){return t<256?g[t]:g[256+(t>>>7)]}function S(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function A(t,e,r){t.bi_valid>d-r?(t.bi_buf|=e<<t.bi_valid&65535,S(t,t.bi_buf),t.bi_buf=e>>d-t.bi_valid,t.bi_valid+=r-d):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function C(t,e,r){A(t,r[2*e],r[2*e+1])}function B(t,e){for(var r=0;r|=1&t,t>>>=1,r<<=1,0<--e;);return r>>>1}function I(t,e,r){var o,n,i=new Array(l+1),a=0;for(o=1;o<=l;o++)i[o]=a=a+r[o-1]<<1;for(n=0;n<=e;n++){var s=t[2*n+1];0!==s&&(t[2*n]=B(i[s]++,s))}}function O(t){var e;for(e=0;e<a;e++)t.dyn_ltree[2*e]=0;for(e=0;e<s;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function T(t){8<t.bi_valid?S(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function R(t,e,r,o){var n=2*e,i=2*r;return t[n]<t[i]||t[n]===t[i]&&o[e]<=o[r]}function U(t,e,r){for(var o=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&R(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!R(e,o,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=o}function j(t,e,r){var o,n,a,s,l=0;if(0!==t.last_lit)for(;o=t.pending_buf[t.d_buf+2*l]<<8|t.pending_buf[t.d_buf+2*l+1],n=t.pending_buf[t.l_buf+l],l++,0===o?C(t,n,e):(C(t,(a=m[n])+i+1,e),0!==(s=c[a])&&A(t,n-=v[a],s),C(t,a=E(--o),r),0!==(s=p[a])&&A(t,o-=k[a],s)),l<t.last_lit;);C(t,256,e)}function N(t,e){var r,o,n,i=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,d=e.stat_desc.elems,c=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<d;r++)0!==i[2*r]?(t.heap[++t.heap_len]=c=r,t.depth[r]=0):i[2*r+1]=0;for(;t.heap_len<2;)i[2*(n=t.heap[++t.heap_len]=c<2?++c:0)]=1,t.depth[n]=0,t.opt_len--,s&&(t.static_len-=a[2*n+1]);for(e.max_code=c,r=t.heap_len>>1;1<=r;r--)U(t,i,r);for(n=d;r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],U(t,i,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,i[2*n]=i[2*r]+i[2*o],t.depth[n]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,i[2*r+1]=i[2*o+1]=n,t.heap[1]=n++,U(t,i,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,o,n,i,a,s,d=e.dyn_tree,c=e.max_code,p=e.stat_desc.static_tree,h=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,b=e.stat_desc.max_length,g=0;for(i=0;i<=l;i++)t.bl_count[i]=0;for(d[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<573;r++)b<(i=d[2*d[2*(o=t.heap[r])+1]+1]+1)&&(i=b,g++),d[2*o+1]=i,c<o||(t.bl_count[i]++,a=0,u<=o&&(a=f[o-u]),s=d[2*o],t.opt_len+=s*(i+a),h&&(t.static_len+=s*(p[2*o+1]+a)));if(0!==g){do{for(i=b-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[b]--,g-=2}while(0<g);for(i=b;0!==i;i--)for(o=t.bl_count[i];0!==o;)c<(n=t.heap[--r])||(d[2*n+1]!==i&&(t.opt_len+=(i-d[2*n+1])*d[2*n],d[2*n+1]=i),o--)}}(t,e),I(i,c,t.bl_count)}function P(t,e,r){var o,n,i=-1,a=e[1],s=0,l=7,d=4;for(0===a&&(l=138,d=3),e[2*(r+1)+1]=65535,o=0;o<=r;o++)n=a,a=e[2*(o+1)+1],++s<l&&n===a||(s<d?t.bl_tree[2*n]+=s:0!==n?(n!==i&&t.bl_tree[2*n]++,t.bl_tree[32]++):s<=10?t.bl_tree[34]++:t.bl_tree[36]++,i=n,d=(s=0)===a?(l=138,3):n===a?(l=6,3):(l=7,4))}function L(t,e,r){var o,n,i=-1,a=e[1],s=0,l=7,d=4;for(0===a&&(l=138,d=3),o=0;o<=r;o++)if(n=a,a=e[2*(o+1)+1],!(++s<l&&n===a)){if(s<d)for(;C(t,n,t.bl_tree),0!=--s;);else 0!==n?(n!==i&&(C(t,n,t.bl_tree),s--),C(t,16,t.bl_tree),A(t,s-3,2)):s<=10?(C(t,17,t.bl_tree),A(t,s-3,3)):(C(t,18,t.bl_tree),A(t,s-11,7));i=n,d=(s=0)===a?(l=138,3):n===a?(l=6,3):(l=7,4)}}n(k);var D=!1;function F(t,e,r,n){A(t,0+(n?1:0),3),function(t,e,r,n){T(t),S(t,r),S(t,~r),o.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r)}r._tr_init=function(t){D||(function(){var t,e,r,o,n,i=new Array(l+1);for(o=r=0;o<28;o++)for(v[o]=r,t=0;t<1<<c[o];t++)m[r++]=o;for(m[r-1]=o,o=n=0;o<16;o++)for(k[o]=n,t=0;t<1<<p[o];t++)g[n++]=o;for(n>>=7;o<s;o++)for(k[o]=n<<7,t=0;t<1<<p[o]-7;t++)g[256+n++]=o;for(e=0;e<=l;e++)i[e]=0;for(t=0;t<=143;)u[2*t+1]=8,t++,i[8]++;for(;t<=255;)u[2*t+1]=9,t++,i[9]++;for(;t<=279;)u[2*t+1]=7,t++,i[7]++;for(;t<=287;)u[2*t+1]=8,t++,i[8]++;for(I(u,287,i),t=0;t<s;t++)b[2*t+1]=5,b[2*t]=B(t,5);y=new _(u,c,257,a,l),x=new _(b,p,0,s,l),w=new _(new Array(0),h,0,19,7)}(),D=!0),t.l_desc=new z(t.dyn_ltree,y),t.d_desc=new z(t.dyn_dtree,x),t.bl_desc=new z(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,O(t)},r._tr_stored_block=F,r._tr_flush_block=function(t,e,r,o){var n,a,s=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<i;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),N(t,t.l_desc),N(t,t.d_desc),s=function(t){var e;for(P(t,t.dyn_ltree,t.l_desc.max_code),P(t,t.dyn_dtree,t.d_desc.max_code),N(t,t.bl_desc),e=18;3<=e&&0===t.bl_tree[2*f[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(a=t.static_len+3+7>>>3)<=n&&(n=a)):n=a=r+5,r+4<=n&&-1!==e?F(t,e,r,o):4===t.strategy||a===n?(A(t,2+(o?1:0),3),j(t,u,b)):(A(t,4+(o?1:0),3),function(t,e,r,o){var n;for(A(t,e-257,5),A(t,r-1,5),A(t,o-4,4),n=0;n<o;n++)A(t,t.bl_tree[2*f[n]+1],3);L(t,t.dyn_ltree,e-1),L(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),j(t,t.dyn_ltree,t.dyn_dtree)),O(t),o&&T(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(m[r]+i+1)]++,t.dyn_dtree[2*E(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){A(t,2,3),C(t,256,u),function(t){16===t.bi_valid?(S(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":41}],53:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,e,o){(function(t){!function(t,e){"use strict";if(!t.setImmediate){var r,o,i,a,s=1,l={},d=!1,c=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,r="[object process]"==={}.toString.call(t.process)?function(t){n.nextTick((function(){f(t)}))}:function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?(a="setImmediate$"+Math.random()+"$",t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),function(e){t.postMessage(a+e,"*")}):t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){f(t.data)},function(t){i.port2.postMessage(t)}):c&&"onreadystatechange"in c.createElement("script")?(o=c.documentElement,function(t){var e=c.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):function(t){setTimeout(f,0,t)},p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),o=0;o<e.length;o++)e[o]=arguments[o+1];var n={callback:t,args:e};return l[s]=n,r(s),s++},p.clearImmediate=h}function h(t){delete l[t]}function f(t){if(d)setTimeout(f,0,t);else{var r=l[t];if(r){d=!0;try{!function(t){var r=t.callback,o=t.args;switch(o.length){case 0:r();break;case 1:r(o[0]);break;case 2:r(o[0],o[1]);break;case 3:r(o[0],o[1],o[2]);break;default:r.apply(e,o)}}(r)}finally{h(t),d=!1}}}}function u(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&f(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)},606:t=>{var e,r,o=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:n}catch(t){e=n}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var s,l=[],d=!1,c=-1;function p(){d&&s&&(d=!1,s.length?l=s.concat(l):c=-1,l.length&&h())}function h(){if(!d){var t=a(p);d=!0;for(var e=l.length;e;){for(s=l,l=[];++c<e;)s&&s[c].run();c=-1,e=l.length}s=null,d=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function u(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new f(t,e)),1!==l.length||d||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=u,o.addListener=u,o.once=u,o.off=u,o.removeListener=u,o.removeAllListeners=u,o.emit=u,o.prependListener=u,o.prependOnceListener=u,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class o{constructor(t,r){if(r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,i=t=>{let r=n.get(t);return void 0===r&&n.set(t,r=new o(t,e)),r},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>i("string"==typeof t?t:t+""))(e)})(t):t;var s,l,d,c;const p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},h=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this.Πp(r,e);void 0!==o&&(this.Πm.set(o,r),t.push(o))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static Πp(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const r=document.createElement("style");r.textContent=t.cssText,e.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,r){this.K(t,r)}Πj(t,e,r=f){var o,n;const i=this.constructor.Πp(t,r);if(void 0!==i&&!0===r.reflect){const a=(null!==(n=null===(o=r.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:p.toAttribute)(e,r.type);this.Πh=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this.Πh=null}}K(t,e){var r,o,n;const i=this.constructor,a=i.Πm.get(t);if(void 0!==a&&this.Πh!==a){const t=i.getPropertyOptions(a),s=t.converter,l=null!==(n=null!==(o=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==n?n:p.fromAttribute;this.Πh=a,this[a]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===r.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const r=this.L;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(r)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var b,g,m,v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null===(l=(s=globalThis).reactiveElementPlatformSupport)||void 0===l||l.call(s,{ReactiveElement:u}),(null!==(d=(c=globalThis).reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.0.0-rc.2");const y=globalThis.trustedTypes,x=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,k="?"+w,_=`<${k}>`,z=document,E=(t="")=>z.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,I=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,R=/"/g,U=/^(?:script|style|textarea)$/i,j=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),N=j(1),P=(j(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),D=new WeakMap,F=z.createTreeWalker(z,129,null,!1);class M{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,i=0;const a=t.length-1,s=this.parts,[l,d]=((t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",a=C;for(let e=0;e<r;e++){const r=t[e];let s,l,d=-1,c=0;for(;c<r.length&&(a.lastIndex=c,l=a.exec(r),null!==l);)c=a.lastIndex,a===C?"!--"===l[1]?a=B:void 0!==l[1]?a=I:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=O):void 0!==l[3]&&(a=O):a===O?">"===l[0]?(a=null!=n?n:C,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?O:'"'===l[3]?R:T):a===R||a===T?a=O:a===B||a===I?a=C:(a=O,n=void 0);const p=a===O&&t[e+1].startsWith("/>")?" ":"";i+=a===C?r+_:d>=0?(o.push(s),r.slice(0,d)+"$lit$"+r.slice(d)+w+p):r+w+(-2===d?(o.push(void 0),e):p)}const s=i+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==x?x.createHTML(s):s,o]})(t,e);if(this.el=M.createElement(l,r),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=F.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const r=d[i++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?G:"@"===e[1]?V:H})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(U.test(o.tagName)){const t=o.textContent.split(w),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],E()),F.nextNode(),s.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===k)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(w,t+1));)s.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const r=z.createElement("template");return r.innerHTML=t,r}}function $(t,e,r=t,o){var n,i,a,s;if(e===P)return e;let l=void 0!==o?null===(n=r.Σi)||void 0===n?void 0:n[o]:r.Σo;const d=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(i=null==l?void 0:l.O)||void 0===i||i.call(l,!1),void 0===d?l=void 0:(l=new d(t),l.T(t,r,o)),void 0!==o?(null!==(a=(s=r).Σi)&&void 0!==a?a:s.Σi=[])[o]=l:r.Σo=l),void 0!==l&&(e=$(t,l.S(t,e.values),l,o)),e}class W{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:r},parts:o}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:z).importNode(r,!0);F.currentNode=n;let i=F.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Z(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new K(i,this,t)),this.l.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(i=F.nextNode(),a++)}return n}v(t){let e=0;for(const r of this.l)void 0!==r&&(void 0!==r.strings?(r.I(t,r,e),e+=r.strings.length-2):r.I(t[e])),e++}}class Z{constructor(t,e,r,o){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=r,this.options=o}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=$(this,t,e),S(t)?t===L||null==t||""===t?(this.H!==L&&this.R(),this.H=L):t!==this.H&&t!==P&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(z.createTextNode(t)),this.H=t}_(t){var e;const{values:r,_$litType$:o}=t,n="number"==typeof o?this.C(t):(void 0===o.el&&(o.el=M.createElement(o.h,this.options)),o);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(r);else{const t=new W(n,this),e=t.u(this.options);t.v(r),this.$(e),this.H=t}}C(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new M(t)),e}g(t){A(this.H)||(this.H=[],this.R());const e=this.H;let r,o=0;for(const n of t)o===e.length?e.push(r=new Z(this.k(E()),this.k(E()),this,this.options)):r=e[o],r.I(n),o++;o<e.length&&(this.R(r&&r.B.nextSibling,o),e.length=o)}R(t=this.A.nextSibling,e){var r;for(null===(r=this.P)||void 0===r||r.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class H{constructor(t,e,r,o,n){this.type=1,this.H=L,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this.H=Array(r.length-1).fill(L),this.strings=r):this.H=L}get tagName(){return this.element.tagName}I(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=$(this,t,e,0),i=!S(t)||t!==this.H&&t!==P,i&&(this.H=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=$(this,o[r+a],e,a),s===P&&(s=this.H[a]),i||(i=!S(s)||s!==this.H[a]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[a+1]),this.H[a]=s}i&&!o&&this.W(t)}W(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===L?void 0:t}}class G extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var r;if((t=null!==(r=$(this,t,e,0))&&void 0!==r?r:L)===P)return;const o=this.H,n=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==L&&(o===L||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,r;"function"==typeof this.H?this.H.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this.H.handleEvent(t)}}class K{constructor(t,e,r){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=r}I(t){$(this,t)}}var Y,X,J,Q,tt,et;null===(g=(b=globalThis).litHtmlPlatformSupport)||void 0===g||g.call(b,M,Z),(null!==(m=(v=globalThis).litHtmlVersions)&&void 0!==m?m:v.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Y=(et=globalThis).litElementVersions)&&void 0!==Y?Y:et.litElementVersions=[]).push("3.0.0-rc.2");class rt extends u{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();super.update(t),this.Φt=((t,e,r)=>{var o,n;const i=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let a=i._$litPart$;if(void 0===a){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=a=new Z(e.insertBefore(E(),t),t,void 0,r)}return a.I(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return P}}rt.finalized=!0,rt._$litElement$=!0,null===(J=(X=globalThis).litElementHydrateSupport)||void 0===J||J.call(X,{LitElement:rt}),null===(tt=(Q=globalThis).litElementPlatformSupport)||void 0===tt||tt.call(Q,{LitElement:rt});const ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function nt(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):ot(t,e)}const it=Element.prototype;it.msMatchesSelector||it.webkitMatchesSelector;var at=r(710),st=r.n(at);const lt=((t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(t instanceof o)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return i(r)})`.snipe-sourmash-component {
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, FreeSans, Liberation Sans, sans-serif;
}

/* label.file {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 2.5rem;
  box-sizing: border-box;
  color: #5a5a5a;
  border: 0.075rem solid #ddd;
  border-radius: 0 0.25rem 0.25rem 0;
} */

/* .file-custom:after {
  content: attr(data-label);
  position: absolute;
  inset: -0.075rem -0.075rem -0.075rem 0px;
  padding: 0.5rem 1rem;
  line-height: 1.5;
}

.file-custom:before {
  position: absolute;
  top: -0.075rem;
  right: -0.075rem;
  bottom: -0.075rem;
  z-index: 6;
  display: block;
  content: 'Browse';
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #eee;
  border: 0.075rem solid #ddd;
  border-radius: 0 0.25rem 0.25rem 0;
}

input[type='file'] {
  min-width: 14rem;
  margin: 0;
  opacity: 0;
} */

div.mode-selector {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 0.4em;
}

div.mode-selector button {
  background-color: #eee;
  color: #555;
  padding: 0.5em;
  margin: 0;
  appearance: none;
  border: 0;
  border-radius: 0 0.25rem 0.25rem 0;
}

div.mode-selector button:nth-child(even) {
  border-radius: 0.25rem 0 0 0.25rem;
}

div.mode-selector button.selected {
  background-color: #444;
  color: #fefefe;
  font-weight: bold;
}

.snipe-sourmash-component ul {
  list-style-type: none;
}

.snipe-sourmash-component ul li {
  margin-bottom: 0.8em;
}

.snipe-sourmash-component progress {
  display: block;
  min-width: 50vw;
  height: 0.4em;
}


/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  -moz-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {
  *,
  *:before,
  *:after {
    color: #000 !important;
    text-shadow: none !important;
    background: transparent !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}
@font-face {
  font-family: "Glyphicons Halflings";
  src: url("../fonts/glyphicons-halflings-regular.eot");
  src: url("../fonts/glyphicons-halflings-regular.eot?#iefix") format("embedded-opentype"), url("../fonts/glyphicons-halflings-regular.woff2") format("woff2"), url("../fonts/glyphicons-halflings-regular.woff") format("woff"), url("../fonts/glyphicons-halflings-regular.ttf") format("truetype"), url("../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular") format("svg");
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\\002a";
}
.glyphicon-plus:before {
  content: "\\002b";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\\20ac";
}
.glyphicon-minus:before {
  content: "\\2212";
}
.glyphicon-cloud:before {
  content: "\\2601";
}
.glyphicon-envelope:before {
  content: "\\2709";
}
.glyphicon-pencil:before {
  content: "\\270f";
}
.glyphicon-glass:before {
  content: "\\e001";
}
.glyphicon-music:before {
  content: "\\e002";
}
.glyphicon-search:before {
  content: "\\e003";
}
.glyphicon-heart:before {
  content: "\\e005";
}
.glyphicon-star:before {
  content: "\\e006";
}
.glyphicon-star-empty:before {
  content: "\\e007";
}
.glyphicon-user:before {
  content: "\\e008";
}
.glyphicon-film:before {
  content: "\\e009";
}
.glyphicon-th-large:before {
  content: "\\e010";
}
.glyphicon-th:before {
  content: "\\e011";
}
.glyphicon-th-list:before {
  content: "\\e012";
}
.glyphicon-ok:before {
  content: "\\e013";
}
.glyphicon-remove:before {
  content: "\\e014";
}
.glyphicon-zoom-in:before {
  content: "\\e015";
}
.glyphicon-zoom-out:before {
  content: "\\e016";
}
.glyphicon-off:before {
  content: "\\e017";
}
.glyphicon-signal:before {
  content: "\\e018";
}
.glyphicon-cog:before {
  content: "\\e019";
}
.glyphicon-trash:before {
  content: "\\e020";
}
.glyphicon-home:before {
  content: "\\e021";
}
.glyphicon-file:before {
  content: "\\e022";
}
.glyphicon-time:before {
  content: "\\e023";
}
.glyphicon-road:before {
  content: "\\e024";
}
.glyphicon-download-alt:before {
  content: "\\e025";
}
.glyphicon-download:before {
  content: "\\e026";
}
.glyphicon-upload:before {
  content: "\\e027";
}
.glyphicon-inbox:before {
  content: "\\e028";
}
.glyphicon-play-circle:before {
  content: "\\e029";
}
.glyphicon-repeat:before {
  content: "\\e030";
}
.glyphicon-refresh:before {
  content: "\\e031";
}
.glyphicon-list-alt:before {
  content: "\\e032";
}
.glyphicon-lock:before {
  content: "\\e033";
}
.glyphicon-flag:before {
  content: "\\e034";
}
.glyphicon-headphones:before {
  content: "\\e035";
}
.glyphicon-volume-off:before {
  content: "\\e036";
}
.glyphicon-volume-down:before {
  content: "\\e037";
}
.glyphicon-volume-up:before {
  content: "\\e038";
}
.glyphicon-qrcode:before {
  content: "\\e039";
}
.glyphicon-barcode:before {
  content: "\\e040";
}
.glyphicon-tag:before {
  content: "\\e041";
}
.glyphicon-tags:before {
  content: "\\e042";
}
.glyphicon-book:before {
  content: "\\e043";
}
.glyphicon-bookmark:before {
  content: "\\e044";
}
.glyphicon-print:before {
  content: "\\e045";
}
.glyphicon-camera:before {
  content: "\\e046";
}
.glyphicon-font:before {
  content: "\\e047";
}
.glyphicon-bold:before {
  content: "\\e048";
}
.glyphicon-italic:before {
  content: "\\e049";
}
.glyphicon-text-height:before {
  content: "\\e050";
}
.glyphicon-text-width:before {
  content: "\\e051";
}
.glyphicon-align-left:before {
  content: "\\e052";
}
.glyphicon-align-center:before {
  content: "\\e053";
}
.glyphicon-align-right:before {
  content: "\\e054";
}
.glyphicon-align-justify:before {
  content: "\\e055";
}
.glyphicon-list:before {
  content: "\\e056";
}
.glyphicon-indent-left:before {
  content: "\\e057";
}
.glyphicon-indent-right:before {
  content: "\\e058";
}
.glyphicon-facetime-video:before {
  content: "\\e059";
}
.glyphicon-picture:before {
  content: "\\e060";
}
.glyphicon-map-marker:before {
  content: "\\e062";
}
.glyphicon-adjust:before {
  content: "\\e063";
}
.glyphicon-tint:before {
  content: "\\e064";
}
.glyphicon-edit:before {
  content: "\\e065";
}
.glyphicon-share:before {
  content: "\\e066";
}
.glyphicon-check:before {
  content: "\\e067";
}
.glyphicon-move:before {
  content: "\\e068";
}
.glyphicon-step-backward:before {
  content: "\\e069";
}
.glyphicon-fast-backward:before {
  content: "\\e070";
}
.glyphicon-backward:before {
  content: "\\e071";
}
.glyphicon-play:before {
  content: "\\e072";
}
.glyphicon-pause:before {
  content: "\\e073";
}
.glyphicon-stop:before {
  content: "\\e074";
}
.glyphicon-forward:before {
  content: "\\e075";
}
.glyphicon-fast-forward:before {
  content: "\\e076";
}
.glyphicon-step-forward:before {
  content: "\\e077";
}
.glyphicon-eject:before {
  content: "\\e078";
}
.glyphicon-chevron-left:before {
  content: "\\e079";
}
.glyphicon-chevron-right:before {
  content: "\\e080";
}
.glyphicon-plus-sign:before {
  content: "\\e081";
}
.glyphicon-minus-sign:before {
  content: "\\e082";
}
.glyphicon-remove-sign:before {
  content: "\\e083";
}
.glyphicon-ok-sign:before {
  content: "\\e084";
}
.glyphicon-question-sign:before {
  content: "\\e085";
}
.glyphicon-info-sign:before {
  content: "\\e086";
}
.glyphicon-screenshot:before {
  content: "\\e087";
}
.glyphicon-remove-circle:before {
  content: "\\e088";
}
.glyphicon-ok-circle:before {
  content: "\\e089";
}
.glyphicon-ban-circle:before {
  content: "\\e090";
}
.glyphicon-arrow-left:before {
  content: "\\e091";
}
.glyphicon-arrow-right:before {
  content: "\\e092";
}
.glyphicon-arrow-up:before {
  content: "\\e093";
}
.glyphicon-arrow-down:before {
  content: "\\e094";
}
.glyphicon-share-alt:before {
  content: "\\e095";
}
.glyphicon-resize-full:before {
  content: "\\e096";
}
.glyphicon-resize-small:before {
  content: "\\e097";
}
.glyphicon-exclamation-sign:before {
  content: "\\e101";
}
.glyphicon-gift:before {
  content: "\\e102";
}
.glyphicon-leaf:before {
  content: "\\e103";
}
.glyphicon-fire:before {
  content: "\\e104";
}
.glyphicon-eye-open:before {
  content: "\\e105";
}
.glyphicon-eye-close:before {
  content: "\\e106";
}
.glyphicon-warning-sign:before {
  content: "\\e107";
}
.glyphicon-plane:before {
  content: "\\e108";
}
.glyphicon-calendar:before {
  content: "\\e109";
}
.glyphicon-random:before {
  content: "\\e110";
}
.glyphicon-comment:before {
  content: "\\e111";
}
.glyphicon-magnet:before {
  content: "\\e112";
}
.glyphicon-chevron-up:before {
  content: "\\e113";
}
.glyphicon-chevron-down:before {
  content: "\\e114";
}
.glyphicon-retweet:before {
  content: "\\e115";
}
.glyphicon-shopping-cart:before {
  content: "\\e116";
}
.glyphicon-folder-close:before {
  content: "\\e117";
}
.glyphicon-folder-open:before {
  content: "\\e118";
}
.glyphicon-resize-vertical:before {
  content: "\\e119";
}
.glyphicon-resize-horizontal:before {
  content: "\\e120";
}
.glyphicon-hdd:before {
  content: "\\e121";
}
.glyphicon-bullhorn:before {
  content: "\\e122";
}
.glyphicon-bell:before {
  content: "\\e123";
}
.glyphicon-certificate:before {
  content: "\\e124";
}
.glyphicon-thumbs-up:before {
  content: "\\e125";
}
.glyphicon-thumbs-down:before {
  content: "\\e126";
}
.glyphicon-hand-right:before {
  content: "\\e127";
}
.glyphicon-hand-left:before {
  content: "\\e128";
}
.glyphicon-hand-up:before {
  content: "\\e129";
}
.glyphicon-hand-down:before {
  content: "\\e130";
}
.glyphicon-circle-arrow-right:before {
  content: "\\e131";
}
.glyphicon-circle-arrow-left:before {
  content: "\\e132";
}
.glyphicon-circle-arrow-up:before {
  content: "\\e133";
}
.glyphicon-circle-arrow-down:before {
  content: "\\e134";
}
.glyphicon-globe:before {
  content: "\\e135";
}
.glyphicon-wrench:before {
  content: "\\e136";
}
.glyphicon-tasks:before {
  content: "\\e137";
}
.glyphicon-filter:before {
  content: "\\e138";
}
.glyphicon-briefcase:before {
  content: "\\e139";
}
.glyphicon-fullscreen:before {
  content: "\\e140";
}
.glyphicon-dashboard:before {
  content: "\\e141";
}
.glyphicon-paperclip:before {
  content: "\\e142";
}
.glyphicon-heart-empty:before {
  content: "\\e143";
}
.glyphicon-link:before {
  content: "\\e144";
}
.glyphicon-phone:before {
  content: "\\e145";
}
.glyphicon-pushpin:before {
  content: "\\e146";
}
.glyphicon-usd:before {
  content: "\\e148";
}
.glyphicon-gbp:before {
  content: "\\e149";
}
.glyphicon-sort:before {
  content: "\\e150";
}
.glyphicon-sort-by-alphabet:before {
  content: "\\e151";
}
.glyphicon-sort-by-alphabet-alt:before {
  content: "\\e152";
}
.glyphicon-sort-by-order:before {
  content: "\\e153";
}
.glyphicon-sort-by-order-alt:before {
  content: "\\e154";
}
.glyphicon-sort-by-attributes:before {
  content: "\\e155";
}
.glyphicon-sort-by-attributes-alt:before {
  content: "\\e156";
}
.glyphicon-unchecked:before {
  content: "\\e157";
}
.glyphicon-expand:before {
  content: "\\e158";
}
.glyphicon-collapse-down:before {
  content: "\\e159";
}
.glyphicon-collapse-up:before {
  content: "\\e160";
}
.glyphicon-log-in:before {
  content: "\\e161";
}
.glyphicon-flash:before {
  content: "\\e162";
}
.glyphicon-log-out:before {
  content: "\\e163";
}
.glyphicon-new-window:before {
  content: "\\e164";
}
.glyphicon-record:before {
  content: "\\e165";
}
.glyphicon-save:before {
  content: "\\e166";
}
.glyphicon-open:before {
  content: "\\e167";
}
.glyphicon-saved:before {
  content: "\\e168";
}
.glyphicon-import:before {
  content: "\\e169";
}
.glyphicon-export:before {
  content: "\\e170";
}
.glyphicon-send:before {
  content: "\\e171";
}
.glyphicon-floppy-disk:before {
  content: "\\e172";
}
.glyphicon-floppy-saved:before {
  content: "\\e173";
}
.glyphicon-floppy-remove:before {
  content: "\\e174";
}
.glyphicon-floppy-save:before {
  content: "\\e175";
}
.glyphicon-floppy-open:before {
  content: "\\e176";
}
.glyphicon-credit-card:before {
  content: "\\e177";
}
.glyphicon-transfer:before {
  content: "\\e178";
}
.glyphicon-cutlery:before {
  content: "\\e179";
}
.glyphicon-header:before {
  content: "\\e180";
}
.glyphicon-compressed:before {
  content: "\\e181";
}
.glyphicon-earphone:before {
  content: "\\e182";
}
.glyphicon-phone-alt:before {
  content: "\\e183";
}
.glyphicon-tower:before {
  content: "\\e184";
}
.glyphicon-stats:before {
  content: "\\e185";
}
.glyphicon-sd-video:before {
  content: "\\e186";
}
.glyphicon-hd-video:before {
  content: "\\e187";
}
.glyphicon-subtitles:before {
  content: "\\e188";
}
.glyphicon-sound-stereo:before {
  content: "\\e189";
}
.glyphicon-sound-dolby:before {
  content: "\\e190";
}
.glyphicon-sound-5-1:before {
  content: "\\e191";
}
.glyphicon-sound-6-1:before {
  content: "\\e192";
}
.glyphicon-sound-7-1:before {
  content: "\\e193";
}
.glyphicon-copyright-mark:before {
  content: "\\e194";
}
.glyphicon-registration-mark:before {
  content: "\\e195";
}
.glyphicon-cloud-download:before {
  content: "\\e197";
}
.glyphicon-cloud-upload:before {
  content: "\\e198";
}
.glyphicon-tree-conifer:before {
  content: "\\e199";
}
.glyphicon-tree-deciduous:before {
  content: "\\e200";
}
.glyphicon-cd:before {
  content: "\\e201";
}
.glyphicon-save-file:before {
  content: "\\e202";
}
.glyphicon-open-file:before {
  content: "\\e203";
}
.glyphicon-level-up:before {
  content: "\\e204";
}
.glyphicon-copy:before {
  content: "\\e205";
}
.glyphicon-paste:before {
  content: "\\e206";
}
.glyphicon-alert:before {
  content: "\\e209";
}
.glyphicon-equalizer:before {
  content: "\\e210";
}
.glyphicon-king:before {
  content: "\\e211";
}
.glyphicon-queen:before {
  content: "\\e212";
}
.glyphicon-pawn:before {
  content: "\\e213";
}
.glyphicon-bishop:before {
  content: "\\e214";
}
.glyphicon-knight:before {
  content: "\\e215";
}
.glyphicon-baby-formula:before {
  content: "\\e216";
}
.glyphicon-tent:before {
  content: "\\26fa";
}
.glyphicon-blackboard:before {
  content: "\\e218";
}
.glyphicon-bed:before {
  content: "\\e219";
}
.glyphicon-apple:before {
  content: "\\f8ff";
}
.glyphicon-erase:before {
  content: "\\e221";
}
.glyphicon-hourglass:before {
  content: "\\231b";
}
.glyphicon-lamp:before {
  content: "\\e223";
}
.glyphicon-duplicate:before {
  content: "\\e224";
}
.glyphicon-piggy-bank:before {
  content: "\\e225";
}
.glyphicon-scissors:before {
  content: "\\e226";
}
.glyphicon-bitcoin:before {
  content: "\\e227";
}
.glyphicon-btc:before {
  content: "\\e227";
}
.glyphicon-xbt:before {
  content: "\\e227";
}
.glyphicon-yen:before {
  content: "\\00a5";
}
.glyphicon-jpy:before {
  content: "\\00a5";
}
.glyphicon-ruble:before {
  content: "\\20bd";
}
.glyphicon-rub:before {
  content: "\\20bd";
}
.glyphicon-scale:before {
  content: "\\e230";
}
.glyphicon-ice-lolly:before {
  content: "\\e231";
}
.glyphicon-ice-lolly-tasted:before {
  content: "\\e232";
}
.glyphicon-education:before {
  content: "\\e233";
}
.glyphicon-option-horizontal:before {
  content: "\\e234";
}
.glyphicon-option-vertical:before {
  content: "\\e235";
}
.glyphicon-menu-hamburger:before {
  content: "\\e236";
}
.glyphicon-modal-window:before {
  content: "\\e237";
}
.glyphicon-oil:before {
  content: "\\e238";
}
.glyphicon-grain:before {
  content: "\\e239";
}
.glyphicon-sunglasses:before {
  content: "\\e240";
}
.glyphicon-text-size:before {
  content: "\\e241";
}
.glyphicon-text-color:before {
  content: "\\e242";
}
.glyphicon-text-background:before {
  content: "\\e243";
}
.glyphicon-object-align-top:before {
  content: "\\e244";
}
.glyphicon-object-align-bottom:before {
  content: "\\e245";
}
.glyphicon-object-align-horizontal:before {
  content: "\\e246";
}
.glyphicon-object-align-left:before {
  content: "\\e247";
}
.glyphicon-object-align-vertical:before {
  content: "\\e248";
}
.glyphicon-object-align-right:before {
  content: "\\e249";
}
.glyphicon-triangle-right:before {
  content: "\\e250";
}
.glyphicon-triangle-left:before {
  content: "\\e251";
}
.glyphicon-triangle-bottom:before {
  content: "\\e252";
}
.glyphicon-triangle-top:before {
  content: "\\e253";
}
.glyphicon-console:before {
  content: "\\e254";
}
.glyphicon-superscript:before {
  content: "\\e255";
}
.glyphicon-subscript:before {
  content: "\\e256";
}
.glyphicon-menu-left:before {
  content: "\\e257";
}
.glyphicon-menu-right:before {
  content: "\\e258";
}
.glyphicon-menu-down:before {
  content: "\\e259";
}
.glyphicon-menu-up:before {
  content: "\\e260";
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #fff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 6px;
}
.img-thumbnail {
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
[role="button"] {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: 400;
  line-height: 1;
  color: #777777;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}
h1,
.h1 {
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-muted {
  color: #777777;
}
.text-primary {
  color: #337ab7;
}
a.text-primary:hover,
a.text-primary:focus {
  color: #286090;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover,
a.text-success:focus {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover,
a.text-info:focus {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover,
a.text-warning:focus {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover,
a.text-danger:focus {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #337ab7;
}
a.bg-primary:hover,
a.bg-primary:focus {
  background-color: #286090;
}
.bg-success {
  background-color: #dff0d8;
}
a.bg-success:hover,
a.bg-success:focus {
  background-color: #c1e2b3;
}
.bg-info {
  background-color: #d9edf7;
}
a.bg-info:hover,
a.bg-info:focus {
  background-color: #afd9ee;
}
.bg-warning {
  background-color: #fcf8e3;
}
a.bg-warning:hover,
a.bg-warning:focus {
  background-color: #f7ecb5;
}
.bg-danger {
  background-color: #f2dede;
}
a.bg-danger:hover,
a.bg-danger:focus {
  background-color: #e4b9b9;
}
.page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eeeeee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: 700;
}
dd {
  margin-left: 0;
}
@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eeeeee;
}
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}
blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777777;
}
blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: "\\2014 \\00A0";
}
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  text-align: right;
  border-right: 5px solid #eeeeee;
  border-left: 0;
}
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: "";
}
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: "\\00A0 \\2014";
}
address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857143;
}
code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
  -webkit-box-shadow: none;
  box-shadow: none;
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.row-no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.row-no-gutters [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12 {
  float: left;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-11 {
  width: 91.66666667%;
}
.col-xs-10 {
  width: 83.33333333%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-7 {
  width: 58.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-5 {
  width: 41.66666667%;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-2 {
  width: 16.66666667%;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-pull-12 {
  right: 100%;
}
.col-xs-pull-11 {
  right: 91.66666667%;
}
.col-xs-pull-10 {
  right: 83.33333333%;
}
.col-xs-pull-9 {
  right: 75%;
}
.col-xs-pull-8 {
  right: 66.66666667%;
}
.col-xs-pull-7 {
  right: 58.33333333%;
}
.col-xs-pull-6 {
  right: 50%;
}
.col-xs-pull-5 {
  right: 41.66666667%;
}
.col-xs-pull-4 {
  right: 33.33333333%;
}
.col-xs-pull-3 {
  right: 25%;
}
.col-xs-pull-2 {
  right: 16.66666667%;
}
.col-xs-pull-1 {
  right: 8.33333333%;
}
.col-xs-pull-0 {
  right: auto;
}
.col-xs-push-12 {
  left: 100%;
}
.col-xs-push-11 {
  left: 91.66666667%;
}
.col-xs-push-10 {
  left: 83.33333333%;
}
.col-xs-push-9 {
  left: 75%;
}
.col-xs-push-8 {
  left: 66.66666667%;
}
.col-xs-push-7 {
  left: 58.33333333%;
}
.col-xs-push-6 {
  left: 50%;
}
.col-xs-push-5 {
  left: 41.66666667%;
}
.col-xs-push-4 {
  left: 33.33333333%;
}
.col-xs-push-3 {
  left: 25%;
}
.col-xs-push-2 {
  left: 16.66666667%;
}
.col-xs-push-1 {
  left: 8.33333333%;
}
.col-xs-push-0 {
  left: auto;
}
.col-xs-offset-12 {
  margin-left: 100%;
}
.col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.col-xs-offset-9 {
  margin-left: 75%;
}
.col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.col-xs-offset-6 {
  margin-left: 50%;
}
.col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.col-xs-offset-3 {
  margin-left: 25%;
}
.col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.col-xs-offset-0 {
  margin-left: 0%;
}
@media (min-width: 768px) {
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 992px) {
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0%;
  }
}
table {
  background-color: transparent;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
}
caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777777;
  text-align: left;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
}
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}
.table-bordered {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}
.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}
.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}
.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th {
  background-color: #dff0d8;
}
.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}
.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th {
  background-color: #d9edf7;
}
.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}
.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}
.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}
.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}
.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
.table-responsive {
  min-height: 0.01%;
  overflow-x: auto;
}
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \\9;
  line-height: normal;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
input[type="file"] {
  display: block;
}
input[type="range"] {
  display: block;
  width: 100%;
}
select[multiple],
select[size] {
  height: auto;
}
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
output {
  display: block;
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eeeeee;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="time"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control {
    line-height: 34px;
  }
  input[type="date"].input-sm,
  input[type="time"].input-sm,
  input[type="datetime-local"].input-sm,
  input[type="month"].input-sm,
  .input-group-sm input[type="date"],
  .input-group-sm input[type="time"],
  .input-group-sm input[type="datetime-local"],
  .input-group-sm input[type="month"] {
    line-height: 30px;
  }
  input[type="date"].input-lg,
  input[type="time"].input-lg,
  input[type="datetime-local"].input-lg,
  input[type="month"].input-lg,
  .input-group-lg input[type="date"],
  .input-group-lg input[type="time"],
  .input-group-lg input[type="datetime-local"],
  .input-group-lg input[type="month"] {
    line-height: 46px;
  }
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.radio label,
.checkbox label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: 4px \\9;
  margin-left: -20px;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
.form-control-static {
  min-height: 34px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
}
.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-right: 0;
  padding-left: 0;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.form-group-sm select.form-control {
  height: 30px;
  line-height: 30px;
}
.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 30px;
  min-height: 32px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.form-group-lg .form-control {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.form-group-lg select.form-control {
  height: 46px;
  line-height: 46px;
}
.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 46px;
  min-height: 38px;
  padding: 11px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  pointer-events: none;
}
.input-lg + .form-control-feedback,
.input-group-lg + .form-control-feedback,
.form-group-lg .form-control + .form-control-feedback {
  width: 46px;
  height: 46px;
  line-height: 46px;
}
.input-sm + .form-control-feedback,
.input-group-sm + .form-control-feedback,
.form-group-sm .form-control + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.has-feedback label ~ .form-control-feedback {
  top: 25px;
}
.has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}
@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  opacity: 0.65;
  -webkit-box-shadow: none;
  box-shadow: none;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:focus,
.btn-default.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  background-image: none;
  border-color: #adadad;
}
.btn-default:active:hover,
.btn-default.active:hover,
.open > .dropdown-toggle.btn-default:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.open > .dropdown-toggle.btn-default:focus,
.btn-default:active.focus,
.btn-default.active.focus,
.open > .dropdown-toggle.btn-default.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #286090;
  background-image: none;
  border-color: #204d74;
}
.btn-primary:active:hover,
.btn-primary.active:hover,
.open > .dropdown-toggle.btn-primary:hover,
.btn-primary:active:focus,
.btn-primary.active:focus,
.open > .dropdown-toggle.btn-primary:focus,
.btn-primary:active.focus,
.btn-primary.active.focus,
.open > .dropdown-toggle.btn-primary.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary .badge {
  color: #337ab7;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}
.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #449d44;
  background-image: none;
  border-color: #398439;
}
.btn-success:active:hover,
.btn-success.active:hover,
.open > .dropdown-toggle.btn-success:hover,
.btn-success:active:focus,
.btn-success.active:focus,
.open > .dropdown-toggle.btn-success:focus,
.btn-success:active.focus,
.btn-success.active.focus,
.open > .dropdown-toggle.btn-success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #31b0d5;
  background-image: none;
  border-color: #269abc;
}
.btn-info:active:hover,
.btn-info.active:hover,
.open > .dropdown-toggle.btn-info:hover,
.btn-info:active:focus,
.btn-info.active:focus,
.open > .dropdown-toggle.btn-info:focus,
.btn-info:active.focus,
.btn-info.active.focus,
.open > .dropdown-toggle.btn-info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:focus,
.btn-warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}
.btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ec971f;
  background-image: none;
  border-color: #d58512;
}
.btn-warning:active:hover,
.btn-warning.active:hover,
.open > .dropdown-toggle.btn-warning:hover,
.btn-warning:active:focus,
.btn-warning.active:focus,
.open > .dropdown-toggle.btn-warning:focus,
.btn-warning:active.focus,
.btn-warning.active.focus,
.open > .dropdown-toggle.btn-warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #c9302c;
  background-image: none;
  border-color: #ac2925;
}
.btn-danger:active:hover,
.btn-danger.active:hover,
.open > .dropdown-toggle.btn-danger:hover,
.btn-danger:active:focus,
.btn-danger.active:focus,
.open > .dropdown-toggle.btn-danger:focus,
.btn-danger:active.focus,
.btn-danger.active.focus,
.open > .dropdown-toggle.btn-danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: 400;
  color: #337ab7;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}
.btn-link:hover,
.btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #777777;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  -o-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  -o-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \\9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropup,
.dropdown {
  position: relative;
}
.dropdown-toggle:focus {
  outline: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #337ab7;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777777;
  white-space: nowrap;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid \\9;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
  }
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group .form-control:focus {
  z-index: 3;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}
.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs-justified {
  border-bottom: 0;
}
.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
@media (min-width: 768px) {
  .navbar {
    border-radius: 4px;
  }
}
@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
}
.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-right: 0;
    padding-left: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
.navbar-brand > img {
  display: block;
}
@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}
.navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-right: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: 0;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
}
.navbar-nav {
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 768px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-right: -15px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 8px;
  margin-bottom: 8px;
}
@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .form-control-static {
    display: inline-block;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
  .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-default .btn-link {
  color: #777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #9d9d9d;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #9d9d9d;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-link {
  color: #9d9d9d;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.navbar-inverse .btn-link {
  color: #9d9d9d;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #fff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #777777;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  z-index: 2;
  color: #23527c;
  background-color: #eeeeee;
  border-color: #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777777;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
}
a.label:hover,
a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.label:empty {
  display: none;
}
.btn .label {
  position: relative;
  top: -1px;
}
.label-default {
  background-color: #777777;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}
.label-primary {
  background-color: #337ab7;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #286090;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777777;
  border-radius: 10px;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.btn-xs .badge,
.btn-group-xs > .btn .badge {
  top: 0;
  padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #337ab7;
  background-color: #fff;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .jumbotron,
.container-fluid .jumbotron {
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron,
  .container-fluid .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #337ab7;
}
.thumbnail .caption {
  padding: 9px;
  color: #333333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-o-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media-body {
  width: 10000px;
}
.media-object {
  display: block;
}
.media-object.img-thumbnail {
  max-width: none;
}
.media-right,
.media > .pull-right {
  padding-left: 10px;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}
.media-middle {
  vertical-align: middle;
}
.media-bottom {
  vertical-align: bottom;
}
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  color: #777777;
  cursor: not-allowed;
  background-color: #eeeeee;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777777;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #c7ddef;
}
a.list-group-item,
button.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
button.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:focus {
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}
button.list-group-item {
  width: 100%;
  text-align: left;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
button.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
button.list-group-item-success.active,
a.list-group-item-success.active:hover,
button.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info,
button.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
button.list-group-item-info:hover,
a.list-group-item-info:focus,
button.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
button.list-group-item-info.active,
a.list-group-item-info.active:hover,
button.list-group-item-info.active:hover,
a.list-group-item-info.active:focus,
button.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning,
button.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
button.list-group-item-warning:hover,
a.list-group-item-warning:focus,
button.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
button.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
button.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus,
button.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger,
button.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
button.list-group-item-danger:hover,
a.list-group-item-danger:focus,
button.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
button.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
button.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus,
button.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.panel > .table caption,
.panel > .table-responsive > .table caption,
.panel > .panel-collapse > .table caption {
  padding-right: 15px;
  padding-left: 15px;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive,
.panel > .table + .panel-body,
.panel > .table-responsive + .panel-body {
  border-top: 1px solid #ddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.panel > .table-responsive {
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}
.well-lg {
  padding: 24px;
  border-radius: 6px;
}
.well-sm {
  padding: 9px;
  border-radius: 3px;
}
.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: 0.2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: 0.5;
}
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -o-transform 0.3s ease-out;
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: 0.5;
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal-header .close {
  margin-top: -2px;
}
.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.modal-body {
  position: relative;
  padding: 15px;
}
.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857143;
  line-break: auto;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  font-size: 12px;
  filter: alpha(opacity=0);
  opacity: 0;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: 0.9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  right: 5px;
  bottom: 0;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  bottom: 0;
  left: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  right: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  left: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 4px;
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857143;
  line-break: auto;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  font-size: 14px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.popover.top {
  margin-top: -10px;
}
.popover.right {
  margin-left: 10px;
}
.popover.bottom {
  margin-top: 10px;
}
.popover.left {
  margin-left: -10px;
}
.popover > .arrow {
  border-width: 11px;
}
.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover > .arrow:after {
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel-inner > .item {
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out, -o-transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }
  .carousel-inner > .item.next,
  .carousel-inner > .item.active.right {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.prev,
  .carousel-inner > .item.active.left {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.next.left,
  .carousel-inner > .item.prev.right,
  .carousel-inner > .item.active {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
  }
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.carousel-inner > .next {
  left: 100%;
}
.carousel-inner > .prev {
  left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}
.carousel-inner > .active.left {
  left: -100%;
}
.carousel-inner > .active.right {
  left: 100%;
}
.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0);
  filter: alpha(opacity=50);
  opacity: 0.5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  filter: alpha(opacity=90);
  opacity: 0.9;
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
  margin-top: -10px;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  font-family: serif;
  line-height: 1;
}
.carousel-control .icon-prev:before {
  content: "\\2039";
}
.carousel-control .icon-next:before {
  content: "\\203a";
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -10px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -10px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
  display: table;
  content: " ";
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
  clear: both;
}
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.hidden {
  display: none !important;
}
.affix {
  position: fixed;
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table !important;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table !important;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table !important;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table !important;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
.visible-print {
  display: none !important;
}
@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table !important;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */`,dt=lt;var ct=function(t,e,r,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a};const pt=new function(){return new Worker(r.p+"snipe-sourmash-component.worker.js")},ht=[".fa",".fasta",".fna",".gz",".fq",".fastq"];let ft=class extends rt{constructor(){super(),this.directory=!1,this.show_directory_checkbox=!1,this.show_signatures=!1,this.num=0,this.ksize=51,this.is_protein=!1,this.dayhoff=!1,this.hp=!1,this.seed=42,this.scaled=1e4,this.track_abundance=!0,this.selectedFiles=[],this.progress={},this.signatures={},this.errors={},this.initWorker()}initWorker(){pt.addEventListener("message",(t=>{var e;switch(null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.type){case"progress:read":this.progress[t.data.filename]=t.data.progress,this.requestUpdate();break;case"signature:error":this.errors[t.data.filename]=t.data.error,this.requestUpdate();break;case"signature:generated":this.signatures[t.data.filename]=t.data.signature,this.progress[t.data.filename]=100,this.requestUpdate()}}))}handleFileChanges(t){const e=t.target;e.files&&(this.selectedFiles=Array.from(e.files).filter((t=>ht.some((e=>t.name.endsWith(e))))),this.requestUpdate())}handleInputChange(t,e){const r=t.target;this[e]="checkbox"===r.type?r.checked:Number(r.value)}startSketching(){var t;(null===(t=this.selectedFiles)||void 0===t?void 0:t.length)?pt.postMessage({files:this.selectedFiles,options:{num:this.num,ksize:this.ksize,is_protein:this.is_protein,dayhoff:this.dayhoff,hp:this.hp,seed:this.seed,scaled:this.scaled,track_abundance:this.track_abundance}}):alert("Please select files before starting sketching.")}clearSession(){this.selectedFiles=[],this.progress={},this.signatures={},this.errors={},this.requestUpdate()}downloadAllSketches(){const t=new(st());Object.entries(this.signatures).forEach((([e,r])=>{const o=e.split(".").slice(0,-1).join(".");t.file(`${o}.sig`,r)})),t.generateAsync({type:"blob"}).then((t=>{const e=document.createElement("a");e.href=URL.createObjectURL(t),e.download="sketches.zip",e.click()}))}downloadSketch(t){const e=this.signatures[t],r=t.split(".").slice(0,-1).join("."),o=new Blob([e],{type:"text/plain"}),n=document.createElement("a");n.href=URL.createObjectURL(o),n.download=`${r}.sig`,n.click()}renderSelectedFiles(){var t;return((null===(t=this.selectedFiles)||void 0===t?void 0:t.length)||0)<1?"":N`
      <div>
        <h2>Selected Files:</h2>
        <ul class="list-group">
          ${this.selectedFiles.map((t=>{var e;const r=(null===(e=this.progress)||void 0===e?void 0:e[t.name])||0,o=this.signatures[t.name],n=this.errors[t.name];let i="";return o&&(i="✅"),n&&(i="⚠️"),N`
              <li class="list-group-item">
                <div class="row align-items-center">
                  <!-- File name -->
                  <div class="col-md-3">
                    <h6 class="mb-0">${t.name} ${i}</h6>
                  </div>
  
                  <!-- Progress bar -->
                  <div class="col-md-6">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: ${r}%;"
                        aria-valuenow="${r}"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
  
                  <!-- Download button -->
                  <div class="col-md-3 text-end">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      @click=${()=>this.downloadSketch(t.name)}
                      ?disabled=${r<100}
                    >
                      Download
                    </button>
                  </div>
                </div>
  
                <!-- Error message, if any -->
                ${n?N`<div class="alert alert-danger mt-2" role="alert">${n}</div>`:""}
              </li>
            `}))}
        </ul>
      </div>
    `}render(){return N`
    <style>
      ${dt}
    </style>
      <body class="container snipe-sourmash-component py-5">
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5RW3TB3"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->
          
        <div class="container" style="max-width: 800px;">
          <h1 class="text-center mb-4">Snipe Sketching Dashboard</h1>
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <label for="file-input" class="form-label">Select Files:</label>
                <input
                  class="form-control"
                  type="file"
                  id="file-input"
                  @change=${this.handleFileChanges}
                  multiple
                  accept=${ht.join(",")}
                />
              </div>

              <div class="mb-3">
                <label for="folder-input" class="form-label">Select Folder:</label>
                <input
                  class="form-control"
                  type="file"
                  id="folder-input"
                  webkitdirectory
                  @change=${this.handleFileChanges}
                />
              </div>

              <div class="row mb-3">
                <div class="col-md-4">
                  <label for="ksize" class="form-label">K-size:</label>
                  <input
                    type="number"
                    id="ksize"
                    class="form-control"
                    .value="${this.ksize}"
                    @input=${t=>this.handleInputChange(t,"ksize")}
                  />
                </div>
                <div class="col-md-4">
                  <label for="scaled" class="form-label">Scaled:</label>
                  <input
                    type="number"
                    id="scaled"
                    class="form-control"
                    .value="${this.scaled}"
                    @input=${t=>this.handleInputChange(t,"scaled")}
                  />
                </div>
                <div class="col-md-4">
                  <div class="form-check mt-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="track-abundance"
                      .checked="${this.track_abundance}"
                      @input=${t=>this.handleInputChange(t,"track_abundance")}
                    />
                    <label class="form-check-label" for="track-abundance">
                      Track Abundance
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-primary" @click=${this.startSketching}>Start Sketching</button>
                <button class="btn btn-secondary ms-2" @click=${this.clearSession}>Clear</button>
                ${Object.keys(this.signatures).length>0?N`
                      <button class="btn btn-success ms-2" @click=${this.downloadAllSketches}>
                        Download All as Zip
                      </button>
                    `:""}
              </div>
              <hr />

              ${this.renderSelectedFiles()}
            </div>
          </div>
        </div>
      </body>
    `}};ct([nt({type:Boolean,reflect:!0})],ft.prototype,"directory",void 0),ct([nt({type:Boolean})],ft.prototype,"show_directory_checkbox",void 0),ct([nt({type:Boolean})],ft.prototype,"show_signatures",void 0),ct([nt({type:Number})],ft.prototype,"num",void 0),ct([nt({type:Number})],ft.prototype,"ksize",void 0),ct([nt({type:Boolean})],ft.prototype,"is_protein",void 0),ct([nt({type:Boolean})],ft.prototype,"dayhoff",void 0),ct([nt({type:Boolean})],ft.prototype,"hp",void 0),ct([nt({type:Number})],ft.prototype,"seed",void 0),ct([nt({type:Number})],ft.prototype,"scaled",void 0),ct([nt({type:Boolean})],ft.prototype,"track_abundance",void 0),ft=ct([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e))("snipe-sourmash-component")],ft)})()})();
//# sourceMappingURL=snipe-sourmash-component.js.map