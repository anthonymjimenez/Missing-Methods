// lodash doc  https://lodash.com/docs/2.4.2#difference

// .none
// returns true if all elements in array fail test implemented by callback function, otherwise returns false;

// example
// isEven = (n) => n % 2;
const none = (array, fn) => {
  let allFailed = true;
  for (let i = 0; array.length > i; i++) {
    if (fn(array[i])) {
      allFailed = false;
    }
  }
  return allFailed;
};

// .union first show solution with array and .includes then optimize with new Set() -> .add array elements one at a time and check with .has
// take n number of arrays and creates an array of unique values in order

// .range

//.intersection

const intersectionWithReduce = (...arrays) => {
  // arrays  => [ [ 1, 2, 3, 4 ], [ 2, 3, 4 ], [ 3, 45, 5 ] ]
  const reducer = (accumulator, currentArray) =>
    accumulator.filter((currentArrayItem) =>
      currentArray.includes(currentArrayItem)
    );
  return arrays.reduce(reducer); // reducing into a single array using the first array passed as initial value
  // returns only currentArray elements that are included in accumulator
  // return value becomes new accumulator
};

// console.log(
//   intersectionWithReduce(
//     [1, 2, 3, 4],
//     [2, 3, 4],
//     [3, 45, 5, 4],
//     [3, 3, 3, 3, 3]
//   )
// );

const _intersectionWithReduce = (...arrays) => {
  const reducer = (accumulator, currentArray) => {
    return currentArray.filter((currentArrayItem) => {
      if (accumulator.includes(currentArrayItem)) {
        accumulator[accumulator.indexOf(currentArrayItem)] = undefined; // modifying accumulator to keep frequency of duplicate objects accurate
        return true;
      } else {
        return false;
      }
    });
  };
  return arrays.reduce(reducer); // reducing into a single array using the first array passed as initial value(accumulator)
  // returns only filter currentArray elements that are included in accumulator
  // modifies accumulator to keep track of accurate number of duplicate elements
  //filtered current array becomes new accumulator used to check if all elements of next array are included in accumulator
  // process continues until all arrays are checked
};

console.log(
  _intersectionWithReduce(
    [1, 2, 4, 4, 3, 3],
    [2, 3, 3, 4, 4],
    [45, 3, 3, 5, 4, 4],
    [3, 3, 3, 3, 4, 3]
  ) // output: [3,3,4]
);
