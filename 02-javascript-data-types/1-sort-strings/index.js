/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {

  const sorted = [...arr];
  const collator = new Intl.Collator(['ru', 'en'], {caseFirst: 'upper'});

  const compare = (a, b) => {
    switch (param) {
    case 'asc':
      return collator.compare(a, b);
    case 'desc':
    default:
      return collator.compare(b, a);
    }
  };

  return sorted.sort(compare);
}
