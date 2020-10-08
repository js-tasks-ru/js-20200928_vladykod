/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) return '';
  if (!size) return string;

  const newString = string.split('');
  const newArr = [];

  let item = newString[0];
  let copy = 0;
  newString.forEach(el => {
    if (el === item) {
      copy++;
      if (copy <= size) {
        newArr.push(el);
      }
    } else {
      newArr.push(el);
      item = el;
      copy = 1;
    }
  });

  return newArr.join('');
}
