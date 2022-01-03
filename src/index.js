import Project from "./modules/project";
import { displayProjects } from "./modules/display"
import "./style.css"

let projectList = [];

projectList.add = (title) => {
  projectList.push(new Project(title))
  displayProjects(projectList)
}

projectList.remove = (position) => {
  projectList.splice(position, 1)
  displayProjects(projectList)
}

projectList.add("New Project");

projectList.add("Second Project");

projectList[0].addTodo("New Todo", "Testing this Todo", "2/05/2022", "low");

projectList[0].addTodo("Second Todo", "Testing a second todo", "3/11/2022", "medium");

projectList[0].addTodo("Third Todo", "A whole third todo", "1/22/2022", "high");