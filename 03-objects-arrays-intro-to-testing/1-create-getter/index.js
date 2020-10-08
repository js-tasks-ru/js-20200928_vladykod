/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
//export function createGetter(path) {
function createGetter(path) {

}

///
const product = {
  category: {
    title: "Goods"
  }
};

const getter = createGetter('category.title');

console.log(getter(product));
