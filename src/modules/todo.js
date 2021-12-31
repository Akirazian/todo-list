import capitalize from "../helpers/capitalize";

class Todo {
  constructor(title, description, dueDate, priority, completed) {
    this.title = capitalize(title);
    this.description = capitalize(description);
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  toggle() {
    this.completed === false ? this.completed = true : this.completed = false;
  }

  edit(property, newValue) {
    this[property] = newValue;
  }
}

export default Todo;


