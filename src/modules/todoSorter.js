import projectList from "./projectList";
import format from 'date-fns/format';
import Project from "./project";

function getTodayTodos() {
  let todayDate = format(new Date(), 'MM/dd/yyyy')
  let todayTodos = []

  projectList.forEach(project => {
    project.todoList.forEach(todo => {
      if (todo.dueDate === todayDate) {
        todayTodos.push(todo);
      }
    });
  });
  
  let todayTodosProject = new Project('Today');
  todayTodosProject.todoList = todayTodos;
  return todayTodosProject;
}

export default getTodayTodos;