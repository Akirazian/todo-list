import projectList from './modules/projectList';
import './style.css';

const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', () => {
  const projectName = prompt('Project Name?');
  projectList.addProject(projectName);
});

// Test Projects below

projectList.addProject('New Project');

projectList.addProject('Second Project');

projectList[0].addTodo('New To-Do', 'Testing this Todo', '2021-04-05', 'low');

projectList[0].addTodo('Medium Priority To-Do', 'Testing a second todo', '2021-04-05', 'medium');

projectList[0].addTodo('Urgent To-Do!', 'A whole third todo', '2021-04-05', 'high');