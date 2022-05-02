import projectList from "./projectList";
import Project from "./project";
import parse from 'date-fns/parse';
import format from "date-fns/format";
import isSameWeek from "date-fns/isSameWeek";


const getTodos = (() => {
  const today = () => {
    let todayDate = format(new Date(), 'MM/dd/yyyy');
    let todayTodosProject = new Project('Today');
    projectList.forEach(project => {
      project.todoList.forEach(todo => {
        if (todo.dueDate === todayDate) {
          todayTodosProject.todoList.push(todo);
        }
      });
    });
    return todayTodosProject;
  }

  const week = () => {
    let thisWeek = new Date();
    let weekTodosProject = new Project('This Week');
    projectList.forEach(project => {
      project.todoList.forEach(todo => {
        if (isSameWeek(thisWeek, parse(todo.dueDate, 'MM/dd/yyyy', new Date()))) {
          weekTodosProject.todoList.push(todo);
        }
      });
    });
    return weekTodosProject;
  }

  return {
    today,
    week
  }
})();


export default getTodos;