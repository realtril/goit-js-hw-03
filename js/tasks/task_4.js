const countTotalSalary = function (employees) {
  total = 0;
  amountEarned = Object.values(employees);
  for (let salary of amountEarned) {
    total += salary;
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);
