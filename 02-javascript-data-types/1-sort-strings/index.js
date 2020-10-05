/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
//export function sortStrings(arr, param = 'asc') {
function sortStrings(arr, param) {

  if (param === 'asc') {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i].toUpperCase() > arr[i + 1].toUpperCase()) {
          let buf = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = buf;
        }
      }
    }

    replaceNeighbors(arr);

    let yoLength = yoLengthCalc(arr) ;

    if (yoLength > 0) {
      const yo = arr.splice(0, yoLength);
      let beforeYo = 0;
      for (let i = yoLength; i < arr.length; i++) {
        if (arr[i].toUpperCase().charCodeAt(0).toString(16) <= 'Е'.charCodeAt(0).toString(16)) {
          beforeYo++;
        }
      }

      arr.splice(beforeYo + 2, 0, ...yo);
    }

  } else {

    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i].toUpperCase() < arr[i + 1].toUpperCase()) {
          let buf = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = buf;
        }
      }
    }

    replaceNeighbors(arr);

    let yoLength = yoLengthCalc(arr) ;

    if (yoLength > 0) {
      const yo = arr.splice(arr.length - yoLength, yoLength);
      let beforeYo = 0;
      for (let i = yoLength; i < arr.length - yoLength; i++) {
        if (arr[i].toLowerCase().charCodeAt(0).toString(16) >= 'е'.charCodeAt(0).toString(16)) {
          beforeYo++;
        }
      }
      arr.splice(beforeYo + yoLength, 0, ...yo);
    }
  }


  console.log(arr)

}


//предположим, мы точно знаем, что все буквы парные
function replaceNeighbors(arr) {
  const additionalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let differentLetters = 0;
    let sameBigLetters = 0;

    do {
      differentLetters++;
      i++;

      if (arr[i].toUpperCase().charCodeAt(0) === arr[i].charCodeAt(0)) {
        sameBigLetters++;
      }
    } while(arr[i + 1] &&
    arr[i].toUpperCase().charCodeAt(0) === arr[i + 1].toUpperCase().charCodeAt(0));
    additionalArr.push([arr[i], differentLetters, sameBigLetters])

  }
  console.log(additionalArr)

    /*
    if (arr[i] > arr[i + 1] && arr[i + 1]) {
      let buf = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = buf;
    } */
}

function yoLengthCalc(arr) {
  let yoLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0).toString(16) === 'ё'.charCodeAt(0).toString(16) ||
      arr[i].charCodeAt(0).toString(16) === 'Ё'.charCodeAt(0).toString(16)) {
      yoLength++;
    }
  }
  return yoLength;
}

//вот это, как и индекс, нужно будет удалить
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'вишня', 'ёжик', 'Ёжик'], 'asc');
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'Вишня','Вишня','вишня', 'груша', 'ёжик', 'Ёжик'], 'desc');


sortStrings(['b', 'a', 'B', 'C', 'c'], 'asc'); // ['a', 'b', 'c']
sortStrings(['b', 'a', 'A', 'c'], 'desc'); // ['c', 'b', 'a']
