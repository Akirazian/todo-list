import Project from "./modules/project";

let projectList = [];

projectList.add = (title) => projectList.push(new Project(title));

projectList.remove = (position) => projectList.splice(position, 1);

projectList.add("New Project");

projectList[0].add("New Todo", "Testing this Todo", "4/11/1996", "high");

projectList[0].add("Second Todo", "Testing this Todo", "4/11/1996", "high");

projectList[0].add("Third Todo", "Testing this Todo", "4/11/1996", "high");
