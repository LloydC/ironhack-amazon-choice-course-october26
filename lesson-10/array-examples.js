const numbers = [42, 7, 19, 85, 3, 56, 12, 30];

//.reverse() exemple
const reverseNumbers = [...numbers].reverse()// creer une copie exacte de l'array "numbers", inversez l'ordre de cette array
console.log("numbers", numbers)
console.log("reverse", reverseNumbers)
function double(number) {
  return number * 2;
}

// const doubled = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubled.push(double(numbers[i]));
// }

//.forEach() exemple

// const doubled = [];
 
// numbers.forEach((element)=>{
//    doubled.push(element * 2)
// })

//.map() exemple

const doubled = numbers.map((number) =>{ return number*2;})
console.log(".map()",doubled);

// .sort() exemple

const sortNumbers = numbers.sort((a, b)=>{
    return b - a;
})

console.log("sortNumbers", sortNumbers)

// .reduce() exemple

const sumWithInitial = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log("reduce", sumWithInitial)
//.reduce(anonFunc, 0)




const fruits = ["Banana","Apple","Mango","Kiwi","Orange","Pineapple"];

//.sort() exemple
// Sort the fruits alphabetically.
const sortFruits = fruits.sort((a, b)=>{
    return b.localeCompare(a)
})
console.log("sortFruits", sortFruits)

//.filter() exemple
const filterFruits = fruits.filter((fruit) =>{
    return fruit.length >= 5;
})
//.found() exemple
const foundFruit = fruits.find((element) =>{
    return  element.length >= 5
});

console.log("filterFruits", filterFruits)
console.log("foundFruit", foundFruit)


// 2. Reverse the order of the fruits.






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

// 3. Sort the studentsGrades in ascending order.
const ascendingGrades = studentGrades.sort((a, b)=>{
    return a.grade - b.grade;
})
console.log("ascendingGrades", ascendingGrades)
// 4. Sort the studentsGrades in descending order.
const descendingGrades = studentGrades.sort((a, b)=>{
    return b.grade - a.grade;
})
console.log("descendingGrades", descendingGrades)

const ascendingNames = studentGrades.sort((a, b) => {
    return a.name.localeCompare(b.name)
})
console.log("ascendingNames", ascendingNames)

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

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 899,
    stock: 5
  },
  {
    id: 2,
    name: "Mouse",
    category: "Electronics",
    price: 25,
    stock: 20
  },
  {
    id: 3,
    name: "Desk",
    category: "Furniture",
    price: 250,
    stock: 3
  },
  {
    id: 4,
    name: "Chair",
    category: "Furniture",
    price: 150,
    stock: 8
  },
  {
    id: 5,
    name: "Keyboard",
    category: "Electronics",
    price: 75,
    stock: 12
  },
  {
    id: 6,
    name: "Monitor",
    category: "Electronics",
    price: 320,
    stock: 0
  },
  {
    id: 7,
    name: "Notebook",
    category: "Stationery",
    price: 8,
    stock: 50
  }
];



// 5. Sort the students by age, youngest first.
// 6. Sort the students by grade, highest first.

const greeting = () => {
    console.log("Hello there!");
    console.log("test");}
