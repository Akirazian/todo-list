import Project from './project';
import { displayProjects } from './display';

const projectList = [];

projectList.addProject = (title) => {
  projectList.push(new Project(title));
  displayProjects(projectList);
};

projectList.deleteProject = (position) => {
  projectList.splice(position, 1);
  displayProjects(projectList);
};

export default projectList;
