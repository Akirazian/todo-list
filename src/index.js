import projectList from './modules/projectList';
import { displayTodos } from './modules/display';
import './style.css';
import { localDownload } from './modules/storageHandler';
import getTodos from './modules/todoSorter';
import parse from 'date-fns/parse';

const todayTodosButton = document.getElementById('today-todos-button');
todayTodosButton.addEventListener('click', () => displayTodos(getTodos.today()));
const weekTodosButton = document.getElementById('week-todos-button');
weekTodosButton.addEventListener('click', () => displayTodos(getTodos.week()));

const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', () => {
  const projectName = prompt('Project Name?');
  projectList.addProject(projectName);
});

localDownload();
console.log(parse(projectList[0].todoList[0].dueDate, 'MM/dd/yyyy', new Date()));

if (!projectList.length) {
  projectList.addProject('New Project');
  projectList.addProject('Second Project');
  
  projectList[0].addTodo('New To-Do', 'Testing this Todo', '2022-04-21', 'low');
  projectList[0].addTodo('Medium Priority To-Do', 'Testing a second todo', '2022-04-05', 'medium');
  projectList[0].addTodo('Urgent To-Do!', 'A whole third todo', '2022-04-21', 'high');
  
  projectList[1].addTodo('Second Project Todo', 'Testing this out', '2022-04-21', 'low');
  projectList[1].addTodo('Buy Meatball Food', 'She likes chicken!', '2022-04-19', 'medium');
  projectList[1].addTodo('Buy Brianna Knife', 'She likes japanese knives!', '2022-04-21', 'medium');
}
