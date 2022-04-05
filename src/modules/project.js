import capitalize from '../helpers/capitalize';
import Todo from './todo';
import { displayTodos, displayProjects } from './display';

class Project {
  constructor(title) {
    this.title = capitalize(title);
    this.todoList = [];
  }

  editTitle(newTitle) { 
    this.title = newTitle;
    displayProjects();
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
