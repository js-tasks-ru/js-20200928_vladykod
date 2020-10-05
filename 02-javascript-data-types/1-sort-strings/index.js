/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {

  const enLang = ['65', '122'];
  const ruLang = ['1025', '1105'];
  let locale = '';
  const sorted = [];


  for (let i = 0; i < arr.length; i++) {
    sorted.push(arr[i]);
  }

  if (sorted[0].charCodeAt(0) > enLang[0] && sorted[0].charCodeAt(0) < enLang[1]) {
    locale = 'en';
  } else if (sorted[0].charCodeAt(0) > ruLang[0] && sorted[0].charCodeAt(0) < ruLang[1]) {
    locale = 'ru';
  } else {
    alert('Допускаются только русский и английский языки');
    return sorted;
  }

  for (let j = arr.length - 1 ; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (param === 'asc') {
        if (new Intl.Collator(locale, {caseFirst: 'upper'}).compare(sorted[i], sorted[i + 1]) > 0) {
          let buf = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = buf;
        }
      } else {
        if (new Intl.Collator(locale, {caseFirst: 'lower'}).compare(sorted[i], sorted[i + 1]) < 0) {
          let buf = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = buf;
        }
      }
    }
  }

  return sorted;
}
