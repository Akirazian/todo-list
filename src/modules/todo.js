class Todo {
  constructor(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  toggle() {
    this.completed === false ? this.completed = true : this.completed = false;
  }

}

export default Todo;


