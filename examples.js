const _ = require("./index");

console.log(_);

console.log(
  _.toPairs(
    _.fromPairs([
      ["x", 1],
      ["y", 2],
      ["z", 3],
    ])
  )
);

let userRevenue = {
  augustBalance: 500,
  julyBalance: 300,
  juneBalance: 200,
  mayBalance: 100,
  aprilBalance: 700,
};

// example after(1,2) : take a revenue  object -> convert to array(toPairs) -> sort in ascending order -> convert back to object(fromPairs) of sorted revenues
let sortUserRevenue = (userObject) => {
  let convertedArray = _.toPairs(userObject); // convert object to array of arrays
  let sortedArray = convertedArray.sort(function (a, b) {
    return b[1] - a[1];
  }); // sort in ascending order
  return _.fromPairs(sortedArray); //return newly sorted object
};

let sortedRevenueObject = sortUserRevenue(userRevenue);
console.log(sortedRevenueObject);

// example (after 3,4): create range of numbers -> shuffle -> return number;
// example (after 6) Was a student present every day of the year? Check the intersection of daily attendance.
