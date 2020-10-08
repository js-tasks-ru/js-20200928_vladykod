/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */

export function uniq(arr) {
  let set = new Set();
  let newArr = [];

  if (!arr) return newArr;

  for (const item of arr) {
    set.add(item);
  }
  newArr = Array.from(set);

  return newArr;
}

// правда, точно такая же задача есть в учебнике:
// https://learn.javascript.ru/task/array-unique-map
