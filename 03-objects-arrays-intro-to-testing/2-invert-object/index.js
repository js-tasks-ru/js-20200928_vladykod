/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */

export function invertObj(obj) {

  if (!obj) return undefined;

  let map = new Map();
  let newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    map.set(value, key);
  }
  newObj = Object.fromEntries(map.entries());

  return newObj;
}
