// lodash doc  https://lodash.com/docs/2.4.2#difference

// .none
// returns true if all elements in array fail test implemented by callback function, otherwise returns false;

// example
// isEven = (n) => n % 2;
// none = (array, fn) => {
// let allFailed = true;
// for(let i = 0; array.length > i; i++) {
// if(fn(array[i])) {
// allFailed = false;
//  }
// }
// return allFailed;
//}

// .union first show solution with array and .includes then optimize with new Set() -> .add array elements one at a time and check with .has

// .range

//.intersection

const intersectionWithReduce = (...arrays) => {
  // arrays  => [ [ 1, 2, 3, 4 ], [ 2, 3, 4 ], [ 3, 45, 5 ] ]
  console.log(arrays);
  const reducer = (accumulator, currentArray) =>
    currentArray.filter((currentArrayItem) =>
      accumulator.includes(currentArrayItem)
    );
  return arrays.reduce(reducer);
};

console.log(intersectionWithReduce([1, 2, 3, 4], [2, 3, 4], [3, 45, 5, 4]));
