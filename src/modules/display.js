import makeElement from '../helpers/makeElement';

function clearTodos() {
  const todoListContainer = document.getElementById('todo-list-container');
  todoListContainer.innerText = '';
}

function displayTodos(project) {
  const todoListContainer = document.getElementById('todo-list-container');
  todoListContainer.innerText = '';

  const heading = makeElement('h2', project.title, ['project-title'], project.title);
  heading.addEventListener('click', () => {
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
    const todoLi = makeElement('li');
    const completedStatus = todoList[i].completed ? '[X]' : '[ ]';
    todoLi.innerText = `${completedStatus} | ${todoList[i].title} | Due: ${todoList[i].dueDate}`;

    const todoToggleButton = makeElement('button', null, ['todo-toggle-button'], 'Toggle');
    todoToggleButton.addEventListener('click', () => {
      todoList[i].toggle();
      displayTodos(project);
    });

    const todoDeleteButton = makeElement('button', null, ['todo-delete-button'], 'X');
    todoDeleteButton.addEventListener('click', () => {
      project.deleteTodo(i);
    });

    todoLi.append(todoToggleButton, todoDeleteButton);
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
