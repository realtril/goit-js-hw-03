const getAllPropValues = function (arr, prop) {
  let newArr = [];
  for (let j = 0, len = 1; j < len; j++) {
    if (Object.keys(products[j]).includes(prop) === true) {
      for (let i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i][prop]);
      }
    }
  }
  return newArr;
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "price"));

//2-й способ

// const getAllPropValues = function (arr, prop) {
//   let newArr = [];
//   for (const product of products) {
//     newArr.push(product[prop]);
//   }
//   return newArr;
// };
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "price"));
