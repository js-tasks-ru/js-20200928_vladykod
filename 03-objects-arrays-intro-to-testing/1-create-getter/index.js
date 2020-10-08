/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
//export function createGetter(path) {
function createGetter(path) {
  let newPath = path.split('.');

  return function getter(product) {

  };
}

///
const product = {
  category: {
    title: "Goods",
    prices: {
      rub: '100',
      eur: '1'
    }
  }
};

const getter = createGetter('category.title');

getter(product)
