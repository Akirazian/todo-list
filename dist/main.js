(()=>{"use strict";const t=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};let i=new class{constructor(t){this.title=t,this.todoList=[]}add(i,s,e,o,c){this.todoList.push(new class{constructor(i,s,e,o,c){this.title=t(i),this.description=t(s),this.dueDate=e,this.priority=o,this.completed=c}toggle(){!1===this.completed?this.completed=!0:this.completed=!1}edit(t,i){this[t]=i}}(i,s,e,o,c))}}("My Project");i.add("finish book","finish reading that book I like","4/11/2022","low",!1),console.log(i)})();
//# sourceMappingURL=main.js.map