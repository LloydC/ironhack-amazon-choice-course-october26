let students = [
  "Julien",
  "Alham",
  "Nawfel",
  "Sarah",
  "Thomas",
  "Emma",
  "Lucas",
  "Sophie"
];
// 1. Comment retirer tous les eleves apres Nawfel? students.splice(3,5);
// 2. Comment retirer Nawfel de la liste? students.splice(2, 1);
// 3. Comment retirer Emma et Lucas de la liste? students.splice(4, 2);



console.log('students', students)

let prices = [
  12.99,
  5.50,
  29.99,
  3.75,
  15.00,
  8.25,
  49.99,
  2.50
];

const sumOfPrices = prices.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log('sumOfPrices', sumOfPrices)
console.log("average", sumOfPrices/prices.length)

