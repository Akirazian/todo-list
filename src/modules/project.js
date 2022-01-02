import capitalize from "../helpers/capitalize";
import Todo from "./todo";

class Project {
  constructor(title) {
    this.title = capitalize(title);
    this.todoList = [];
  }

  add(title, description, dueDate, priority) {
    this.todoList.push(new Todo(title, description, dueDate, priority));
  }

  remove(position) {
    this.todoList.splice(position, 1);
  }
}

export default Project;