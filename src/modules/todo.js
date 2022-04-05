import capitalize from '../helpers/capitalize';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = capitalize(title);
    this.description = capitalize(description);
    this.dueDate = format(parseISO(dueDate), 'MM/dd/yyyy');
    this.priority = priority;
    this.completed = false;
  }

  toggle() {
    this.completed === false ? this.completed = true : this.completed = false;
  }

  edit(property, newValue) {
    this[property] = newValue;
  }
}

export default Todo;
