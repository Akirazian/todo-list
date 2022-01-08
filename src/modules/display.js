import makeElement from "../helpers/makeElement";

function displayProjects(projectList) {
  const projectListContainer = document.getElementById("project-list-container");
  projectListContainer.innerText = "";

  let projectListLength = projectList.length;
  for (let i = 0; i < projectListLength; i++) {
    let projectContainer = makeElement("div", null, ["project-container"]);
    let project = makeElement("button", null, ["project-list-item"], projectList[i].title);
    project.addEventListener("click", () => {
      displayTodos(projectList[i])
    });

    let deleteProjectButton = makeElement("button", null, ["project-delete-button"], "X");
    deleteProjectButton.addEventListener("click", () => {
      let currentProject = document.querySelector(".project-title");
      if (currentProject !== null) {
        if (currentProject.id === projectList[i].title) {
          clearTodos();
        }
      }
      projectList.deleteProject(i);
    })

    projectContainer.append(project, deleteProjectButton)
    projectListContainer.appendChild(projectContainer);
  }
}

function displayTodos(project) {
  const todoListContainer = document.getElementById("todo-list-container");
  todoListContainer.innerText = "";

  let heading = makeElement("h2", project.title, ["project-title"], project.title);

  let todoList = project.todoList;
  const todoListUl = makeElement("ul", "todo-list", ["todo-list"]);

  let todoListLength = todoList.length;
  for (let i = 0; i < todoListLength; i++) {
    let todoLi = makeElement("li");
    let completedStatus = todoList[i].completed ? "[X]" : "[ ]";
    todoLi.innerText = `${completedStatus} | ${todoList[i].title} | Due: ${todoList[i].dueDate}`;
    
    let todoToggleButton = makeElement("button", null, ["todo-toggle-button"], "Toggle");
    todoToggleButton.addEventListener("click", () => {
      todoList[i].toggle();
      displayTodos(project);
    })

    let todoDeleteButton = makeElement("button", null, ["todo-delete-button"], "X");
    todoDeleteButton.addEventListener("click", () => {
      project.deleteTodo(i);
    });
    
    todoLi.append(todoToggleButton, todoDeleteButton);
    todoListUl.appendChild(todoLi);
  }

  let newTodoButton = makeElement("button", "new-todo-button", ["new-todo-button"], "Add Todo");
  newTodoButton.addEventListener("click", () => {
    let title = prompt("Todo?");
    let description = prompt("Description?");
    let dueDate = prompt("Due date?");
    let priority = prompt ("Priority?");

    project.addTodo(title, description, dueDate, priority);
  });

  todoListContainer.append(heading, todoListUl, newTodoButton);
}

function clearTodos() {
  const todoListContainer = document.getElementById("todo-list-container");
  todoListContainer.innerText = "";
}

export {
  displayProjects,
  displayTodos
}