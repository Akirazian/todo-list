import Todo from "./modules/todo";

let test = new Todo("Try This", "Attempt to make a todo", new Date().toDateString(), "High", true);

console.log(test);

test.toggle();

console.log(test);