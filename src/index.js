import Project from "./modules/project";

let projectList = [];

projectList.add = (title) => projectList.push(new Project(title));

projectList.remove = (position) => projectList.splice(0, 1);

