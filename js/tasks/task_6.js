// Напиши функцию
// calculateTotalPrice(allProdcuts, productName),
//  которая получает массив объектов и имя продукта
//  (значение свойства name).
// Возвращает общую стоимость продукта
// (цена * количество).
// Вызовы функции для проверки работоспособности
//  твоей реализации.

const calculateTotalPrice = function (allProducts, productName) {
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === productName) {
      total = allProducts[i].price * allProducts[i].quantity;
    }
  }
  return total;
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Сканер"));
