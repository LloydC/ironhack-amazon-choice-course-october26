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

let studentGrades = [
  { name: "Julien", grade: 15, passed: true },
  { name: "Alham", grade: 18, passed: true },
  { name: "Nawfel", grade: 12, passed: true },
  { name: "Sarah", grade: 8, passed: false },
  { name: "Thomas", grade: 14, passed: true },
  { name: "Emma", grade: 19, passed: true },
  { name: "Lucas", grade: 7, passed: false },
  { name: "Sophie", grade: 16, passed: true }
];

let events = [
  {
    id: 1,
    title: "JavaScript Workshop",
    category: "Education",
    price: 0,
    attendees: 25,
    isOnline: true
  },
  {
    id: 2,
    title: "Music Festival",
    category: "Music",
    price: 35,
    attendees: 200,
    isOnline: false
  },
  {
    id: 3,
    title: "React Meetup",
    category: "Technology",
    price: 10,
    attendees: 45,
    isOnline: false
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    category: "Education",
    price: 150,
    attendees: 18,
    isOnline: true
  },
  {
    id: 5,
    title: "Startup Networking",
    category: "Business",
    price: 20,
    attendees: 80,
    isOnline: false
  }
];