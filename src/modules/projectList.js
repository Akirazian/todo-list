import Project from "./project";
import { displayProjects } from "./display"

let projectList = [];

projectList.addProject = (title) => {
  projectList.push(new Project(title))
  displayProjects(projectList)
}

projectList.removeProject = (position) => {
  projectList.splice(position, 1)
  displayProjects(projectList)
}

export default projectList;