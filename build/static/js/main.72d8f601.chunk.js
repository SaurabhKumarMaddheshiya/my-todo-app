(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[0],{26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(18),o=a.n(c),s=a(11),r=a(21),l=(a(26),a(8)),i=a(0);function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/my-todo-app",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/my-todo-app",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/my-todo-app/about",children:"About"})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}var b=new Date;b=b.getHours();var j="",m={};b>=1&&b<=11?(j="Good Morning",m.color="green"):b>=12&&b<17?(j="Good Afternoon",m.color="orange"):b>=17&&b<=19?(j="Good Evening",m.color="yellow"):(j="Good Night",m.color="brown");var u=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("h5",{children:["Hello, ",Object(i.jsx)("span",{style:m,children:j})]})})},h=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],r=c[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),b=d[0],j=d[1];return Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o&&b?(t(o,b),r(""),j("")):alert("Title and Description can not blank")},children:[Object(i.jsx)("h3",{children:" Add a Todo"}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(i.jsx)("input",{type:"text",value:o,onChange:function(e){r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(i.jsx)("input",{type:"text",value:b,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})})};var p=function(e){var t=e.todo,a=e.onDelete;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:t.title}),Object(i.jsx)("p",{children:t.desc}),Object(i.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return a(t)},children:"Delete"})]})}),Object(i.jsx)("hr",{})]})},x=function(e){return Object(i.jsxs)("div",{className:"container my-3",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(i.jsx)("h3",{className:"my-3",children:"Todos List"}),0==e.todos.length?"No Todos to display":e.todos.map((function(t){return Object(i.jsx)(p,{todo:t,onDelete:e.onDelete},t.sno)}))]})};function O(){return Object(i.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(i.jsx)("p",{className:"text-center",style:{position:"relative",bottom:0},children:"Copyright \xa9 MyTodosList.com"})})}var g=function(){return Object(i.jsxs)("div",{children:["This is an about component.",Object(i.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi dolor molestiae. Deleniti autem, repellendus repudiandae quo consequatur magnam? Commodi praesentium eos similique excepturi ratione sunt reprehenderit qui, laboriosam vel."})]})},v=a(2);var f=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am onDelete",e),j(b.filter((function(t){return t!==e})))},a=function(e,t){console.log("I am adding this Todo",e,t);var a={sno:0==b.length?0:b[b.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(b),[a])),console.log(a),localStorage.getItem("todos")&&localStorage.setItem("todos",JSON.stringify(b))},c=Object(n.useState)(e),o=Object(s.a)(c,2),b=o[0],j=o[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(b))}),[b]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(d,{title:"My Todos List"}),Object(i.jsxs)(v.c,{children:[Object(i.jsx)(v.a,{exact:!0,path:"/my-todo-app",render:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(h,{addTodo:a}),Object(i.jsx)(x,{todos:b,onDelete:t})]})}}),Object(i.jsx)(v.a,{exact:!0,path:"/my-todo-app/about",children:Object(i.jsx)(g,{})})]}),Object(i.jsx)(O,{})]})})};o.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.72d8f601.chunk.js.map