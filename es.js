/*! (c) Andrea Giammarchi - ISC */
const t=t=>"{"+Object.keys(t).map(e=>{const{get:r,set:o,value:c}=Object.getOwnPropertyDescriptor(t,e);return e=r&&o?r+","+o:r?""+r:o?""+o:JSON.stringify(e)+":"+n(c,e)}).join(",")+"}",n=(n,r)=>{const o=typeof n;return"function"===o?n.toString().replace(new RegExp("^(\\*|async )?\\s*"+r+"[^(]*?\\("),(t,n)=>"*"===n?"function* (":(n||"")+"function ("):"object"===o&&n?Array.isArray(n)?e(n):t(n):JSON.stringify(n)},e=t=>"["+t.map(n).join(",")+"]";export{t as stringifyObject};
