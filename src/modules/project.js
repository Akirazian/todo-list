import Todo from "./todo";

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  add(title, description, dueDate, priority, completed) {
    this.todoList.push(new Todo(title, description, dueDate, priority, completed));
  }
}

export default Project;