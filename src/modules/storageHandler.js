import { displayProjects, displayTodos } from './display';
import Project from './project';
import projectList from './projectList'
import Todo from './todo';

//Set up some new methods to make dealing with localStorage easier:
Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}

function localSave() {
  localStorage.setObject("projectList", projectList);
}

function localDownload() {
  let downloadedList = localStorage.getObject('projectList');
  if (downloadedList === null || !downloadedList.length) return;
  for (let i = 0; i < downloadedList.length; i++) { //JSON can't store functions, so each project/to-do is added again as a new objects to return their lost methods.
    projectList.push(new Project(downloadedList[i].title));
    for (let j = 0; j < downloadedList[i].todoList.length; j++) {
      projectList[i].todoList.push(new Todo(downloadedList[i].todoList[j].title, downloadedList[i].todoList[j].description, downloadedList[i].todoList[j].dueDate, downloadedList[i].todoList[j].priority));
      projectList[i].todoList[j].completed = downloadedList[i].todoList[j].completed;
    }
  }
  displayProjects(); 
  displayTodos(projectList[0]);
}

export {
  localSave, 
  localDownload
}