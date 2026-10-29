let paragraph = document.getElementById("paragraph");
paragraph.setAttribute("id", "info-paragraph");
paragraph.innerHTML = "What is your fullname and origin?"
console.log(paragraph)

let links = document.getElementsByClassName("link");
links[0].setAttribute("style", "list-style-type: none; color: purple; font-size: 20px;")
links[0].removeAttribute("style")
console.log(links);

let divs = document.getElementsByTagName("div");
console.log(divs);

let h2Tag = document.createElement("h2");
h2Tag.innerHTML = "Elephant";

let parent = document.getElementsByTagName("body")[0]; // you don't have to do this again
console.log(parent)
parent.appendChild(h2Tag)
let h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
parent.replaceChild(h1Tag, paragraph);

let secondParent = document.getElementsByTagName("div")[0]
let h1Child = document.getElementById("title");
secondParent.removeChild(h1Child)

let contentDiv = document.getElementById("content");
// contentDiv.innerHTML = ""; // clears the whole element

const box = document.getElementById("add-item-button")



box.addEventListener("click", function () {
 console.log("adding an element to the list");
});

// exemple de rajout de l'evenement click pour un element "send-button"
let sendButton = document.getElementById("send-btn");
// move the input inside the function (this step is optional):
sendButton.onclick = function (event) {
    event.preventDefault();// empeche la form de rafraichir
  let input = document.getElementsByTagName("input")[0]; // or leave it as it is, outside
  console.log(input.value);
  input.value = "";
};

// exemple de l'ajout de l'évenement click pour tous les elements li détectés

let liTags = document.getElementsByTagName("li");
console.log(liTags)

for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = function (e) {
    console.log(e.target)
    if(e.target.style.background === 'blue'){
        e.target.style.background = '';
    }
    else {
        e.target.style.background = 'blue';
    }
    // console.log(e.currentTarget.innerHTML);
  };
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
 
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});