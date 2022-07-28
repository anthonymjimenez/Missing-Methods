// lodash doc  https://lodash.com/docs/2.4.2#difference

//_.fromPairs(pairs)
//this method returns an object composed from key-value pairs.
// use: useful for creating lookup objects for optimization
const fromPairs = (pairs) => {
  // pairs = [['x', 1], ['y', 2], ['z', 3]]
  // output: { x: 1, y: 2, z: 3}

  let keyValueObj = {};
  pairs.forEach(([key, value]) => {
    console.log(key, value);
    keyValueObj[key] = value;
  });

  return keyValueObj;
};

exports.fromPairs = fromPairs;
//.toPairs() method is used to create an array of own enumerable string key-value pairs for an object
// useful for converting objects to easily iterable arrays that have access to array methods
const toPairs = (pairs) => {
  const arrayPairs = [];
  for (const property in pairs) {
    arrayPairs.push([property, pairs[property]]);
  }
  return arrayPairs;
};

exports.toPairs = toPairs;

// _.toPairs

// .range
// use: Useful for quickly iterating over a range of numbers or letters without having to create array
// example: quickly create a range of numbers to shuffle through
const range = (start, fin) => {
  let rangeArray = [];
  while (fin >= start) {
    rangeArray.push(start);
    start += 1;
  }
  return rangeArray;
};
// console.log(range(1, 9));

exports.range = range;

// .shuffle
const shuffle = () => {
  // fisher yates
};
// example
// isEven = (n) => n % 2;

// .union first show solution with array and .includes then optimize with new Set() -> .add array elements one at a time and check with .has
// take n number of arrays and creates an array of unique values
// use: useful for taking multiple arrays and spreading into one array of unique values
const union = (...arrays) => {
  let set = new Set(); // Sets maintain uniqueness and are optimized for lookups
  for (let array of arrays) {
    for (let element of array) {
      if (!set.has(element)) {
        set.add(element);
      }
    }
  }
  return set;
};

console.log(union([1, 2, 4], [1, 2, 4, 5], [1, 45]));
//.intersection find the values present in every array evaluated
// use: Useful for confirming all arrays contain a certain element.

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

const intersection = (...arrays) => {
  // using rest operator to accept all arguments and contain in array
  // console.log(arrays);
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

exports.intersection = intersection;

//possible part 2
//

// .difference
//Creates an array of array values not included in the other given arrays

// .none
// returns true if all elements in array fail test implemented by callback function, otherwise returns false;

//IntersectionBy
const none = (array, fn) => {
  let allFailed = true;
  for (let i = 0; array.length > i; i++) {
    if (fn(array[i])) {
      allFailed = false;
    }
  }
  return allFailed;
};
