(()=>{"use strict";const t=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};let s=[];s.add=e=>s.push(new class{constructor(s){this.title=t(s),this.todoList=[]}add(s,e,i,o){this.todoList.push(new class{constructor(s,e,i,o){this.title=t(s),this.description=t(e),this.dueDate=i,this.priority=o,this.completed=!1}toggle(){!1===this.completed?this.completed=!0:this.completed=!1}edit(t,s){this[t]=s}}(s,e,i,o))}remove(t){this.todoList.splice(t,1)}}(e)),s.remove=t=>s.splice(0,1)})();
//# sourceMappingURL=main.js.map