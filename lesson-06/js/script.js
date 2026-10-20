console.log('hello')

function displayDate() {
  document.getElementById("hero-title").innerHTML = Date();
}

const box = document.getElementById("signup-button");

// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Mouse is out!";
});