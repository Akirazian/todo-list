import capitalize from '../helpers/capitalize';
import Todo from './todo';
import { displayTodos } from './display';
import { displayProjects } from './display';
import projectList from './projectList';

class Project {
  constructor(title) {
    this.title = capitalize(title);
    this.todoList = [];
  }

  editTitle(newTitle) { 
    this.title = newTitle;
    displayProjects(projectList);
  }

  addTodo(title, description, dueDate, priority) {
    this.todoList.push(new Todo(title, description, dueDate, priority));
    displayTodos(this);
  }

  deleteTodo(position) {
    this.todoList.splice(position, 1);
    displayTodos(this);
  }
}

export default Project;
