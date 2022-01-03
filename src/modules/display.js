import makeElement from "../helpers/makeElement";

const projectList = document.getElementById("project-list");

function displayTodos(project) {

  projectList.innerText = "";

  let heading = makeElement("h1", project.title, ["project-title"], project.title);

  let todoList = project.todoList;
  const todoListUl = makeElement("ul", "todo-list", ["todo-list"]);
  todoListUl.innerText = "";

  let todoListLength = todoList.length;

  for (let i = 0; i < todoListLength; i++) {
    let todoLi = makeElement("li");
    todoLi.innerText = todoList[i].title;
    todoListUl.appendChild(todoLi);
  }

  projectList.append(heading, todoListUl);
}

export {
  displayTodos
}