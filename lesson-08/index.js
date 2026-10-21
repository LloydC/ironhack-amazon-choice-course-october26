//Activity 1 — Predict the Output

let x = 10;
let y = '5';

console.log(x + y); // 105

let fruits = ['apple', 'banana', 'kiwi'];
console.log(fruits[fruits.length - 1]); // kiwi, banana, apple - apple, banana - kiwi

let name = 'JavaScript';
console.log(name.toLowerCase().includes('script')); // javascript * 2 , true

let age = 17;
console.log(age >= 18); // false

let number = 7;
console.log(number % 2 === 0); // false

// Activity 2 — Objects and Arrays

const student = {
  firstName: "Alex",
  lastName: "Johnson",
  age: 22,
  likesJavaScript: true,
  favoriteLanguages: ["JavaScript", "Python", "Java", "C++"],
  address: {
    city: "Amsterdam",
    country: "Netherlands"
  }
};

let fullName = `${student.firstName} ${student.lastName}`
console.log(fullName)

let ville = `${student.address.city}`
console.log(ville)

let firstLanguage = student.favoriteLanguages[0]
let lastLanguage = student.favoriteLanguages[student.favoriteLanguages.length - 1]
console.log(firstLanguage + " "+ lastLanguage)

// console.log(fullName + " is " + student.age + " years old and lives in " + student.address.city + ".") // Nawfel solution
console.log(`${fullName} is ${student.age} years old and lives in ${student.address.city}.`)

for(let a = 0; a < student.favoriteLanguages.length; a++){
    console.log(`position ${a+1}`,student.favoriteLanguages[a])
}
// 1. Displays the student's full name using a template literal. ``
// 2. Displays the student's city.
// 3. Retrieves their first and last favorite programming languages.
// 4. Displays the number of favorite languages.
// 5. Creates a sentence such as: "Alex Johnson is 22 years old and lives in Amsterdam."
// Bonus: Print all three programming languages using a for loop.

// Activity 3 — Functions and Conditional Logic

// Create a function called getWeatherAdvice that accepts a temperature and returns:
// - "It's cold!" when the temperature is below 15.
// - "Nice weather!" when the temperature is between 15 and 25 inclusive.
// - "It's hot!" when the temperature is above 25.

// const temp = 40;

// function getWeatherAdvice(){
//     if(temp < 15){
//         console.log("It's cold!")
//     }
//     else if(15 <= temp && temp <= 25){
//         console.log("Nice weather!")
//     }
//     else {
//         console.log("It's hot!")
//     }
// }

// getWeatherAdvice()


function getWeatherAdvice(temp){
    if(temp < 15){
        console.log("It's cold!")
    }
    else if(15 <= temp && temp <= 25){
        console.log("Nice weather!")
    }
    else {
        console.log("It's hot!")
    }
}

const temperature = 17;
getWeatherAdvice(temperature)
getWeatherAdvice(2)

const shopName = "Fresh Fruits";

const fruitsArray = [
  {
    name: "Apple",
    price: 2,
    quantity: 5
  },
  {
    name: "Banana",
    price: 1,
    quantity: 8
  },
  {
    name: "Mango",
    price: 4,
    quantity: 3
  }
];

console.log(shopName.toUpperCase())

let type = `We have ${fruitsArray.length} types of fruits.`
console.log(type)

function printValuation(p){
    if(p <= 3){
        return "Affordable";
    }
    else {
        return "Expensive";
    }
}

function calculateFruitTotal(price, quantity){
    return price * quantity;
}

let fruitTotal = 0;

for(a = 0; a < fruitsArray.length; a++){
    console.log(`${fruitsArray[a].name} - €${fruitsArray[a].price} - ${printValuation(fruitsArray[a].price)}`)
    fruitTotal = fruitTotal + calculateFruitTotal(fruitsArray[a].price, fruitsArray[a].quantity)
}

console.log(`Total inventory value: €${fruitTotal}`)
// 1. Display the shop name in uppercase.
// 2. Display the number of fruit types available.
// 3. Use a for loop to print each fruit's name and price.
// 4. Create a function calculateFruitTotal(price, quantity).
// 5. Calculate the total inventory value using the function.
// 6. Display whether each fruit is expensive (price > 3) or affordable.
// 7. Print a summary using template literals.

// Final Result
// WELCOME TO FRESH FRUITS

// We have 3 types of fruits.

// Apple - €2 - Affordable
// Banana - €1 - Affordable
// Mango - €4 - Expensive

// Total inventory value: €30