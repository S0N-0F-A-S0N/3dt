
const uuidRegex = /^([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}){1}$/
export const isUUID = str => {
  return typeof str === 'string' && uuidRegex.test(str);
};

export const getEntityName = entity => {
  return entity.name || entity.baseType;
};

// These color conversions should be way more robust..
// @TODO use THREE.Color
export const hexNumberToCSSString = hex =>
  `#${("000000" + (hex).toString(16)).slice(-6)}`;

export const cssStringToHexNumber = string => {
  if (typeof string !== 'string') return NaN;
  let hex = string.startsWith('#') ? string.slice(1) : string;
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  if (hex.length !== 6) return NaN;
  return parseInt(hex, 16);
};

/**
 * Operates on a serialized THREE object,
 * recursively searching through the objects for a
 * matching UUID.
 */
export const getObjectByUUID = (obj, uuid) => {
  if (obj.uuid === uuid) {
    return obj;
  } else if (obj.children && obj.children.length) {
    for (let child of obj.children) {
      let result = getObjectByUUID(child, uuid);
      if (result) {
        return result;
      }
    }
  } else {
    return null;
  }
};
