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
// example (after 6) Which students were present every day this week? Check the intersection of daily attendance.
// show with and without closure cache

function perfectAttendance(student, ...allAttendance) {
  // using rest operator to accept all arguments and contain in array
  let perfectAttendance = _.intersection(allAttendance); // using spread operator to remove container array and pass all arrays of attendance as arguments to intersection
  console.log(perfectAttendance);
}

perfectAttendance(
  "Anty",
  ["Anty", "James", "King"],
  ["Anty", "James"],
  ["James", "King"]
);

console.log(
  _.intersection(
    [3, 3, 3, 3, 4, 3],
    [1, 2, 4, 4, 3, 3],
    [2, 3, 3, 4, 4],
    [45, 3, 3, 5, 4, 4]
  ) // output: [3,3,4]
);
