/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
//export function sortStrings(arr, param = 'asc') {
function sortStrings(arr, param) {

  for (let j = arr.length - 1 ; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (param === 'asc') {
        if (new Intl.Collator('ru', {caseFirst: 'upper'}).compare(arr[i], arr[i + 1]) > 0) {
          let buf = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = buf;
        }
      } else {
        if (new Intl.Collator('ru', {caseFirst: 'lower'}).compare(arr[i], arr[i + 1]) < 0) {
          let buf = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = buf;
        }
      }
    }
  }

  console.log(arr)
}

//вот это, как и индекс, нужно будет удалить
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'вишня', 'ёжик', 'Ёжик'], 'asc');
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'Вишня', 'Вишня', 'вишня', 'груша', 'ёжик', 'Ёжик'], 'desc');

sortStrings(['b', 'a', 'B', 'C', 'c'], 'asc'); // ['a', 'b', 'c']
sortStrings(['b', 'a', 'A', 'c'], 'desc'); // ['c', 'b', 'a']
