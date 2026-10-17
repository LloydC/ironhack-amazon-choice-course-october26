console.log("Hello from script.js!");

let fullName = "Lloyd Chambrier"; // string ""/''
const age = 30; // number
let isStudent = false; // boolean true/false
fullName = "Lloyd"; // string ""/''

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);

if(fullName === "Lloyd") { // === strict equality operator
    console.log("My name is Lloyd");
}
else {
    console.log("My name is not Lloyd");
}

if(age > 30) {
    console.log("I am older than 30");
}
else if(age < 30) {
    console.log("I am younger than 30");
}
else {
    console.log("I am 30 years old");
}

// const name = window.prompt("Favorite Game of Thrones main character:");
// let house = "";
// if (name === "Khal Drogo") {
//   house = "Dothraki Horselord";
// } else if (name === "Daenerys") {
//   house = "Targaryen";
// } else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
//   house = "Stark";
// } else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
//   house = "Lannister";
// } else {
//   house = "Other";
// }
// console.log(`Your favorite character is from the house ${house}.`);

// const name = prompt("Favorite Game of Thrones main character:");
// let house = "";
// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     house = "Targaryen";
//     break;
//   case "Jon Snow":
//   case "Sansa":
//   case "Arya":
//     house = "Stark";
//     break;
//   default:
//     house = "other";
// }
// console.log(`Your favorite character is from the house ${house}.`);

let i = 0;

// while (i <= 100) {
//   if(i % 2 === 0) {
//     console.log(i, "est pair");
//   }
//   else {
//     console.log(i);
// }
//    i++; // this is the same as i = i + 1
// }

// Ordre croissant
// for (let i = 0; i <= 100; i++) {
//   if(i % 2 === 0) {
//     console.log(i, "est pair");
//   }
//   else {
//     console.log(i);
//     }
// }

// Ordre décroissant
for (let i = 100; i >= 0; i--) {
  if(i % 2 === 0) {
    console.log(i, "est pair");
  }
  else {
    console.log(i);
    }
}
