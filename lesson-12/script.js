// 1. Add event listener on Add task button
// 2. When clicked, 

const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", (event) => {
// add a new task to the container with a task list
// 1. Capturer la valeur de l'element input
event.preventDefault();

let inputValue = document.querySelector("#task-input").value
// 2. Creer un nouvel element li.task
// 3. Passer inputValue dans son element span.task-text
// const liElement = document.createElement("li");
// liElement.setAttribute("class", "task");

// const spanElement = document.createElement("span")
// spanElement.setAttribute("class", "task-text");
// spanElement.innerHTML = inputValue;

// const divElement = document.createElement("div");
// divElement.setAttribute("class", "actions");

// const buttonElement = document.createElement("button")
// buttonElement.setAttribute("class", "complete-btn");
// buttonElement.innerHTML = "Complete";

// const secondButtonElement = document.createElement("button")
// secondButtonElement.setAttribute("class", "delete-btn");
// secondButtonElement.innerHTML = "Delete";

// divElement.appendChild(buttonElement);
// divElement.appendChild(secondButtonElement);

// liElement.appendChild(spanElement);
// liElement.appendChild(divElement);

const liElement = `<li class="task">
        <span class="task-text">${inputValue}</span>
        <div class="actions">
          <button type="button" class="complete-btn">Complete</button>
          <button type="button" class="delete-btn">Delete</button>
        </div>
      </li>`

// 4. Rajouter le nouvel element li.task a l'interieur 
//    de notre liste ul#task-list
const ulElement = document.querySelector("#task-list")
// ulElement.appendChild(liElement);

ulElement.innerHTML = ulElement.innerHTML + liElement;
document.querySelector("#task-input").value = "";
});

const completeButtons = document.querySelectorAll(".complete-btn");

completeButtons.forEach((completeButton)=> {
    completeButton.addEventListener("click", ()=>{
        // 1. rajouter  
        // sur l'element span.task-text de l'element li.task
       // Si la propriete style existe avec text-decoration, la remettre vide
       // sinon rajoutons text-decoration: line-through
       if(completeButton.parentElement.previousElementSibling.style.textDecoration === "line-through"){
        completeButton.parentElement.previousElementSibling.style.textDecoration = "";
        completeButton.innerHTML = "Complete";
       }
       else {
        completeButton.parentElement.previousElementSibling.style.textDecoration = "line-through";
        completeButton.innerHTML = "Undo";
       }
    })
})

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((deleteButton)=> {
    // Effacer la tache associée au bouton?
deleteButton.addEventListener("click", ()=>{
    const parent = document.getElementById("task-list");
    const child = deleteButton.parentNode.parentNode;
    const throwawayNode = parent.removeChild(child);
})
})
