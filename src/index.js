document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //grab task form
  const taskElement = document.getElementById("create-task-form");

  //grab list
  const theList = document.getElementById("tasks");

  //event listener for form
  taskElement.addEventListener("submit", (e) => {
    e.preventDefault();
    //add item to list\
    const listElement = document.createElement("li");
    theList.appendChild(listElement);
    listElement.innerHTML = e.target["new-task-description"].value;
    e.target.reset();
  })
});
