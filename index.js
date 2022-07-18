// lodash doc  https://lodash.com/docs/2.4.2#difference

//_.fromPairs(pairs) / _.toPairs
//this method returns an object composed from key-value pairs.
// use: useful for creating lookup objects for optimization

// .range
// use: Useful for quickly iterating over a range of numbers or letters without having to create array
// example: quickly create a range of numbers to shuffle through

//
// .shuffle
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
// use: useful for taking multiple arrays and spreading into one array of unique values

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
    [3, 3, 3, 3, 4, 3],
    [1, 2, 4, 4, 3, 3],
    [2, 3, 3, 4, 4],
    [45, 3, 3, 5, 4, 4]
  ) // output: [3,3,4]
);

//possible part 2
//

// .difference
//Creates an array of array values not included in the other given arrays

// .none
// returns true if all elements in array fail test implemented by callback function, otherwise returns false;
