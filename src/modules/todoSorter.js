import projectList from "./projectList";
import Project from "./project";
import parse from 'date-fns/parse';
import format from "date-fns/format";
import isSameWeek from "date-fns/isSameWeek";
import { isPast } from "date-fns";


const getTodos = (() => {
  const today = () => {
    let todayDate = format(new Date(), 'yyyy-MM-dd');
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
        if (isSameWeek(thisWeek, parse(todo.dueDate, 'yyyy-MM-dd', new Date()))) {
          weekTodosProject.todoList.push(todo);
        }
      });
    });
    return weekTodosProject;
  }

  const overdue = () => {
    let overdueProject = new Project('Overdue');
    projectList.forEach(project => {
      project.todoList.forEach(todo => {
        if (isPast(parse(todo.dueDate, 'yyyy-MM-dd', new Date()))) {
          overdueProject.todoList.push(todo);
        }
      });
    });
    return overdueProject;
  }

  return {
    today,
    week,
    overdue
  }
})();


export default getTodos;