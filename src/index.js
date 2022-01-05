import projectList from "./modules/projectList";
import "./style.css"

projectList.addProject("New Project");

projectList.addProject("Second Project");

projectList[0].addTodo("New Todo", "Testing this Todo", "2/05/2022", "low");

projectList[0].addTodo("Second Todo", "Testing a second todo", "3/11/2022", "medium");

projectList[0].addTodo("Third Todo", "A whole third todo", "1/22/2022", "high");