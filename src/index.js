// Adapted from https://github.com/WebReflection/stringified-handler
/*! (c) Andrea Giammarchi - ISC */

export const stringifyObject = (handler) => (
  '{' + Object.keys(handler).map(key => {
    const {get, set, value} = Object.getOwnPropertyDescriptor(handler, key);
    if (get && set)
      key = get + ',' + set;
    else if (get)
      key = '' + get;
    else if (set)
      key = '' + set;
    else
      key = JSON.stringify(key) + ':' + parseValue(value, key);
    return key;
  }).join(',') + '}'
);

const parseValue = (value, key) => {
  const type = typeof value;
  if (type === 'function')
    return value.toString().replace(
      new RegExp('^(\\*|async )?\\s*' + key + '[^(]*?\\('),
      (_, $1) => $1 === '*' ? 'function* (' : (($1 || '') + 'function (')
    );
  if (type === 'object' && value)
    return Array.isArray(value) ?
            parseArray(value) :
            stringifyObject(value);
  return JSON.stringify(value);
};

const parseArray = array => ('[' + array.map(parseValue).join(',') + ']');