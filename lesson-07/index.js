let firstName = 'Lloyd'; // Data type --> String
// firstName = 'lloyd'
let lastName = "Chambrier" // Data type --> String
let fullName = `${firstName.toUpperCase()} ${lastName.toLowerCase()}`;
console.log('fullname', fullName )
const age = 36; // Data type --> Number

let likesCoffee = true; // Data type --> Boolean
let likesPets = true; // Data type --> Boolean
let likesCold = false; // Data type --> Boolean

let person = { // Data type --> Object
    firstName: 'Lloyd',
    lastName: 'Chambrier',
    age: 36,
    likesCoffee: false,
    likesTea: false,
    likesJuice: true,
    favoriteFruit: {
        name: 'Passion fruit',
        color: 'orange',
        price: 6,
        quantity: 4
    },
    students: ["Julien", "Alham", "Nawfel"]
}
console.log(person.firstName, 'likes', person.favoriteFruit.name)
// let favoriteFruit = {
//     name: 'Passion fruit',
//     color: 'orange',
//     price: 6,
//     quantity: 4
// }

let exampleVar; // undefined
let devClass = ["Julien", "Alham", "Nawfel"]; // data type --> Array
let fruits = ["orange", "tomate", "kiwi", "ananas", "raisin", "pomme"]

console.log(exampleVar)
console.log(devClass.length, "devClass length")
console.log(devClass[0])
console.log(devClass[1])
console.log(devClass[devClass.length - 1])
console.log(fruits[fruits.length - 1])





// Problem statement: emails list of customers
function errorNotification(){
    // console.log('There is something wrong.....')
    return 'There is something wrong.....';
}
function sendMail(){
    // console.log('Sending email now....')
    return 'Sending email now....';
}

function somme(a, b){
  return a+b;
}
let temperature = 25;

function convertToFarhenheit(celciusVal){
  return ((celciusVal*9/5) + 32).toString();
}

console.log(somme(100, 200))
console.log(`${temperature} degres Celcius is ${convertToFarhenheit(temperature)} fahrenheit`)
// Emails only customers above the age of 18 about alcohol discounts at my shop
// if(person.age > 18) {
//     sendMail()
// }

// Emails customers that likes coffee and who are above the age of 18
// if(person.age > 18 && person.likesCoffee === true) {
//     sendMail()
// }

// else{
//     errorNotification()
// }

// if(!person.likesCoffee === true && !person.likesTea === true){
// if(person.likesCoffee !== true && person.likesTea !== true){
//     console.log('This person does not like coffee and tea :)')
// }
// if(person.likesCoffee === true || person.likesTea === true){
//         console.log('This person likes coffee or tea :)')
// }
// if(person.likesCoffee && (personLikesJuice || person.likesTea)){
//     console.log('This person does not likes coffee or tea :(')
// }

if(person.likesCoffee === true && person.likesTea === true){
    console.log('This person likes coffee and tea :)')
}
else if(person.likesCoffee === true){
    console.log('This person only likes coffee :)')
}
else if(person.likesTea === true){
    console.log('This person only likes tea :)')
}
else {
    console.log('This person does not likes coffee or tea :(')
}

let likesHotWeather; // Data type --> undefined
let sum = null; // Null Empty value

sum = somme(3, 5);


console.log(firstName.length, lastName.length)// printing to the console
console.log(fullName)
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 15;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
const sentence = 'The quick brown fox is priceless.';
const word = 'price';
const wordTwo = 'quick';

console.log(sentence.includes(word)) // Control F

for (let i = 0; i < 100; i++) { // i++ -> i = i + 1
  if(i%2 === 0){
    console.log('even number', i)
  }
  else {
    console.log('odd number', i)
  }
}