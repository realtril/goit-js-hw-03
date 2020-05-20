//короткий способ

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps({ name: "Mango", age: 2 })); // 2

//2-й способ

const countProps = function (obj) {
  counter = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      counter++;
    }
  }
  return counter;
};

console.log(countProps({ name: "Mango", age: 2 })); // 2
