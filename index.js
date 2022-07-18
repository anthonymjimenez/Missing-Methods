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
//.toPairs() method is used to create an array of own enumerable string key-value pairs for an object
// useful for converting objects to easily iterable arrays that have access to array methods
const toPairs = (pairs) => {
  const arrayPairs = [];
  for (const property in pairs) {
    arrayPairs.push([property, pairs[property]]);
  }
  return arrayPairs;
};
// console.log(
//   toPairs(
//     fromPairs([
//       ["x", 1],
//       ["y", 2],
//       ["z", 3],
//     ])
//   )
// );
let userRevenue = {
  augustBalance: 500,
  julyBalance: 300,
  juneBalance: 200,
  mayBalance: 100,
  aprilBalance: 700,
};
// example : take a revenue  object -> convert to array(toPairs) -> sort in ascending order -> convert back to object(fromPairs) of sorted revenues
let grabUserInfo = (userObject) => {
  let convertedArray = toPairs(userObject); // convert object to array of arrays
  let sortedArray = convertedArray.sort(function (a, b) {
    return b[1] - a[1];
  }); // sort in ascending order
  return fromPairs(sortedArray); //return newly sorted object
};

let sortedRevenueObject = grabUserInfo(userRevenue);
console.log(sortedRevenueObject);
// _.toPairs

// .range
// use: Useful for quickly iterating over a range of numbers or letters without having to create array
// example: quickly create a range of numbers to shuffle through

//
// .shuffle
// example
// isEven = (n) => n % 2;

// example: create range of numbers -> shuffle -> return number;

// .union first show solution with array and .includes then optimize with new Set() -> .add array elements one at a time and check with .has
// take n number of arrays and creates an array of unique values
// use: useful for taking multiple arrays and spreading into one array of unique values

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

// example: Was a student present every day of the year? Check the intersection of daily attendance.
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
