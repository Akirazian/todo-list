import makeElement from '../helpers/makeElement';

function clearTodos() {
  const todoListContainer = document.getElementById('todo-list-container');
  todoListContainer.innerText = '';
}

function displayTodos(project) {
  const todoListContainer = document.getElementById('todo-list-container');
  todoListContainer.innerText = '';

  const heading = makeElement('h2', project.title, ['project-title'], project.title);
  heading.addEventListener('click', () => { //To seamlessly edit titles in-line, replace the title with an identical text-input
    const projectTitleInput = makeElement('input', 'project-title', ['project-title-input']);
    projectTitleInput.value = project.title;
    projectTitleInput.maxLength = 25;
    projectTitleInput.addEventListener('blur', () => project.editTitle(projectTitleInput.value));
    projectTitleInput.addEventListener('keydown', (e) => { 
      if (e.key === 'Enter') {
        project.editTitle(projectTitleInput.value);
      }
    });
    heading.replaceWith(projectTitleInput);
  });

  const { todoList } = project;
  const todoListUl = makeElement('ul', 'todo-list', ['todo-list']);

  const todoListLength = todoList.length;
  for (let i = 0; i < todoListLength; i++) {
    const todoLi = makeElement('li', `current-todo-${i}`, ['todo-li']);
    const completedStatus = todoList[i].completed ? 'completed' : 'not-completed';
    const checkBox = makeElement('div', '', [completedStatus], todoList[i].completed ? 'X' : '');
    const todoTitle = makeElement('div', '', ['todo-title'], todoList[i].title);

    const todoEndContainer = makeElement('div', '', ['todo-end-container']);
    const todoDate = makeElement('div', '', ['todo-date'], todoList[i].dueDate);
    const todoDeleteButton = makeElement('button', null, ['todo-delete-button'], 'X');
    todoDeleteButton.addEventListener('click', () => {
      project.deleteTodo(i);
    });
    todoEndContainer.append(todoDate, todoDeleteButton);


    checkBox.addEventListener('click', () => {
      todoList[i].toggle();
      displayTodos(project);
    });

    todoLi.append(checkBox, todoTitle, todoEndContainer);
    todoListUl.appendChild(todoLi);
  }

  const newTodoButton = makeElement('button', 'new-todo-button', ['new-todo-button'], 'Add Todo');
  newTodoButton.addEventListener('click', () => {
    const title = prompt('Todo?');
    const description = prompt('Description?');
    const dueDate = prompt('Due date?');
    const priority = prompt('Priority?');

    project.addTodo(title, description, dueDate, priority);
  });

  todoListContainer.append(heading, todoListUl, newTodoButton);
}

function displayProjects(projectList) {
  const projectListContainer = document.getElementById('project-list-container');
  projectListContainer.innerText = '';

  const projectListLength = projectList.length;
  for (let i = 0; i < projectListLength; i++) {
    const projectContainer = makeElement('div', null, ['project-container']);
    const project = makeElement('button', null, ['project-list-item'], projectList[i].title);
    project.addEventListener('click', () => {
      displayTodos(projectList[i]);
    });

    const deleteProjectButton = makeElement('button', null, ['project-delete-button'], 'X');
    deleteProjectButton.addEventListener('click', () => {
      const currentProject = document.querySelector('.project-title');
      if (currentProject !== null) {
        if (currentProject.id === projectList[i].title) {
          clearTodos();
        }
      }
      projectList.deleteProject(i);
    });

    projectContainer.append(project, deleteProjectButton);
    projectListContainer.appendChild(projectContainer);
  }
}

export {
  displayProjects,
  displayTodos,
};
