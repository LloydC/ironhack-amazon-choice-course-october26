console.log('hello')

function displayDate() {
  document.getElementById("hero-title").innerHTML = Date();
}

const box = document.getElementById("signup-button");

// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  console.log("this",this)
  box.innerHTML = "Mouse is over me!";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Sign up";
});

// setTimeout(function () {
//   alert("I am anonymous function and I will execute after 1 second.");
// }, 1000);

setInterval(function () {
  console.log("I am anonymous function and I will execute after 1 second.");
}, 1000);


this.age += 1;  // this.age = this.age + 1
this.age -= 3;  // this.age = this.age - 3
i++; // i = i + 1

// T --> email + mot de passe
// const loginTime = new Date()
// const timeUntilLoginIsValid = new Date() + 6min;
// const authCode = generateAUthenticationCode()
// sendResponseToUser(timeUntilLoginIsValid, authCode) 