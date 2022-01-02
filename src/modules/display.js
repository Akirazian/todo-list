import makeElement from "../helpers/makeElement";

function displayTodos(todoList) {

  const todoListUl = document.getElementById("project");
  todoListUl.innerText = "";

  let todoListLength = todoList.length;

  for (let i = 0; i < todoListLength; i++) {
    let todoLi = makeElement("li");
    todoLi.innerText = todoList[i].title;

    todoListUl.appendChild(todoLi);
  }
}

export {
  displayTodos
}