//1-й способ

// const findBestEmployee = function (employees) {
//   return Math.max.apply(null, Object.values(employees));
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

//2-й способ

// const findBestEmployee = function (employees) {
//   let theBest = 0;
//   let keys = Object.keys(employees);
//   for (let key of keys) {
//     if (employees[key] > theBest) {
//       theBest = employees[key];
//     }
//   }
//   return theBest;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

//3-й способ

const findBestEmployee = function (employees) {
  let theBestEmployee = Object.keys(employees)[0];
  let theBestStats = Object.values(employees)[0];

  for (let [key, value] of Object.entries(employees)) {
    if (theBestStats < value) {
      theBestStats = value;
      theBestEmployee = key;
    }
  }
  return theBestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
