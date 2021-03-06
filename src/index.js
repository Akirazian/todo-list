import projectList from './modules/projectList';
import { displayAddProject, displayTodos } from './modules/display';
import './style.css';
import { localDownload } from './modules/storageHandler';
import getTodos from './modules/todoSorter';
const todayTodosButton = document.getElementById('today-todos-button');
todayTodosButton.addEventListener('click', () => displayTodos(getTodos.today()));
const weekTodosButton = document.getElementById('week-todos-button');
weekTodosButton.addEventListener('click', () => displayTodos(getTodos.week()));
const overDueButton = document.getElementById('overdue-todos-button');
overDueButton.addEventListener('click', () => displayTodos(getTodos.overdue()));

const projectSidebar = document.getElementById('project-sidebar');
const newProjectButton = document.getElementById('new-project-button');
newProjectButton.addEventListener('click', () => {
  projectSidebar.removeChild(newProjectButton);
  displayAddProject();
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => projectSidebar.classList.toggle('active'));
localDownload();

if (!projectList.length) { //Default projects
  projectList.addProject('New Project');
  projectList.addProject('Second Project');
  projectList[0].addTodo('New To-Do', 'More info can be found here!', '2022-05-21', 'low');
  projectList[0].addTodo('Medium Priority To-Do', '', '2022-05-05', 'medium');
  projectList[0].addTodo('Urgent To-Do!', 'A whole third todo!', '2022-05-21', 'high');
  projectList[1].addTodo('Second Project Todo', 'Testing this out', '2022-05-21', 'low');
  projectList[1].addTodo('Buy some groceries', 'The kids love chicken!', '2022-05-19', 'medium');
  projectList[1].addTodo('Buy catfood', 'She likes tuna!', '2022-05-21', 'low');
  displayTodos(projectList[0]);
}
