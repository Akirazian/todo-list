(()=>{"use strict";const t=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},e=(t,e,i,o)=>{const s=document.createElement(t);return e&&(s.id=e),i&&i.forEach((t=>s.classList.add(t))),o&&(s.innerText=o),s};function i(t){const i=document.getElementById("project");i.innerText="";let o=t.length;for(let s=0;s<o;s++){let o=e("li");o.innerText=t[s].title,i.appendChild(o)}}let o=[];o.add=e=>o.push(new class{constructor(e){this.title=t(e),this.todoList=[]}add(e,o,s,d){this.todoList.push(new class{constructor(e,i,o,s){this.title=t(e),this.description=t(i),this.dueDate=o,this.priority=s,this.completed=!1}toggle(){!1===this.completed?this.completed=!0:this.completed=!1}edit(t,e){this[t]=e}}(e,o,s,d)),i(this.todoList)}remove(t){this.todoList.splice(t,1),i(this.todoList)}}(e)),o.remove=t=>o.splice(t,1),o.add("New Project"),o[0].add("New Todo","Testing this Todo","4/11/1996","high"),o[0].add("Second Todo","Testing this Todo","4/11/1996","high"),o[0].add("Third Todo","Testing this Todo","4/11/1996","high")})();
//# sourceMappingURL=main.js.map