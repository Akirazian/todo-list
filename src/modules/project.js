import capitalize from "../helpers/capitalize";
import Todo from "./todo";
import { displayTodos } from "./display";

class Project {
  constructor(title) {
    this.title = capitalize(title);
    this.todoList = [];
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  addTodo(title, description, dueDate, priority) {
    this.todoList.push(new Todo(title, description, dueDate, priority));
    displayTodos(this);  
  }

  removeTodo(position) {
    this.todoList.splice(position, 1);
    displayTodos(this);
  }
}

export default Project;