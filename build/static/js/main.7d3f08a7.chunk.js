(this["webpackJsonptailwind-react-redux"]=this["webpackJsonptailwind-react-redux"]||[]).push([[0],{41:function(e,t,a){e.exports=a(71)},48:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(4),i=a(13),s=a(3),m=a(19),d=a.n(m),u=a(32),g=a(9),b=a(22),p=a(33),x=(a(48),function(e){var t=e.children,a=(e.text,e.head);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("title",null,a," - CEIDUNS")),r.a.createElement("div",{className:"relative bg-gray-200 md:min-h-screen animate__animated animate__fadeIn animate__faster"},r.a.createElement("div",{className:"relative bg-transparent md:pt-24 pb-6 pt-6 full-body"},r.a.createElement("div",{className:"px-4 md:px-6 mx-auto w-full"},r.a.createElement("div",null,t)))))}),y=function(e){return e.loading?r.a.createElement("div",{className:"w-full h-full fixed block align-middle top-0 left-0 bg-white opacity-75 z-50"},r.a.createElement("span",{className:"text-green-500 opacity-75 block relative w-0 h-0",style:{top:"calc(50% - 29px)",left:"calc(50% - 29px)"}},r.a.createElement("div",{className:"w-12 h-12 border-4 border-teal-600 rounded-full loader"}))):null},E=a(18),f=a(36),h=a.n(f),N=function(e){var t=new E.default("portrait","pt","A4");t.setFontSize(15);var a={startY:50,head:[e.headers],body:e.data,headStyles:{halign:"center"},columnStyles:{0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"},4:{halign:"center"},5:{halign:"center"},6:{halign:"center"},7:{halign:"center"},8:{halign:"center"},9:{halign:"center"},10:{halign:"center"}},margin:{top:10}};t.text(e.title,40,40),h()(t,a),t.save("".concat(e.name,".pdf"))},v=a(37),w=a.n(v).a.create({baseURL:"http://localhost:9191/"}),k=function(){return w.get("notes/new")},j=function(){var e=Object(s.g)(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(new Array),m=Object(g.a)(i,2),p=m[0],E=m[1],f=function(){c(!0),w.get("notes/all").then((function(e){E(e.data),c(!1)})).catch((function(e){o.c.error(e.response?e.response.data.message:"Error de Servidor"),c(!1)}))},h=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=p.map((function(e,t){return[t+1,"".concat(e.student.name," ").concat(e.student.lastname),"".concat(e.cycle.schedule.language.name," ").concat(e.cycle.schedule.language.level),"".concat(e.cycle.name),e.listeningnote,e.readingnote,e.speakingnote,e.middlexexamnote,e.writingnote,e.finalexamnote,Math.round((e.listeningnote+e.readingnote+e.speakingnote+e.middlexexamnote+e.writingnote+e.finalexamnote)/6)]})),N({title:"Reporte de Notas",headers:["#","Alumno","Idioma","Ciclo","Listening","Reading","Speaking","MiddleEx","Writting","FinalEx","Promedio"],data:t,name:"notas"})}catch(a){alert("ERROR")}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),r.a.createElement(x,{text:"Nota",head:"Administraci\xf3n de Notas"},r.a.createElement(y,{loading:l}),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("h1",{className:"text-4xl py-4 mb-4"},"Registro de Notas"),r.a.createElement("div",{className:"text-center pb-4"},r.a.createElement("button",{className:"bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",onClick:function(){return e.push("/notes/new")}},r.a.createElement(b.a,{style:{fontSize:"1.5em"}}),r.a.createElement("span",null,"Registrar Nota")),r.a.createElement("button",{className:"bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-4 rounded inline-flex items-center",onClick:function(){return h()}},r.a.createElement(b.b,{style:{fontSize:"1.5em"}}),r.a.createElement("span",null,"Reporte General"))),r.a.createElement("div",{className:"overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"},r.a.createElement("table",{className:"table border-collapse table-auto w-full whitespace-no-wrap table-striped  relative"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Alumno"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Idioma"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Ciclo"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Listening"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Reading"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Speaking"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"MiddleExam"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Writting"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"FinalExam"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Promedio"),r.a.createElement("th",{className:"bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-800 font-bold tracking-wider uppercase text-xs bg-blue-300"},"Accion"))),r.a.createElement("tbody",null,p.map((function(t){return r.a.createElement("tr",{key:t.id,className:"hover:bg-gray-400"},r.a.createElement("td",{className:"border-dashed border-t border-gray-200 "},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},"".concat(t.student.name," ").concat(t.student.lastname))),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},"".concat(t.cycle.schedule.language.name," ").concat(t.cycle.schedule.language.level))),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},"".concat(t.cycle.name))),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},t.listeningnote)),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},t.readingnote)),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},t.speakingnote)),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},t.middlexexamnote)),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},t.writingnote)),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},t.finalexamnote)),r.a.createElement("td",{className:"border-dashed border-t border-gray-200"},r.a.createElement("span",{className:"text-gray-700 px-6 py-3 flex justify-center"},Math.round((t.listeningnote+t.readingnote+t.speakingnote+t.middlexexamnote+t.writingnote+t.finalexamnote)/6))),r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",onClick:function(){return e.push("/notes/".concat(t.id))}},r.a.createElement("span",null,"Editar")))})))))))},O=a(2),C=function(){var e=Object(s.g)(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(new Array),m=Object(g.a)(i,2),d=m[0],u=m[1],b=Object(n.useState)(new Array),p=Object(g.a)(b,2),E=p[0],f=p[1],h=Object(n.useState)({writingnote:0,listeningnote:0,readingnote:0,speakingnote:0,middlexexamnote:0,finalexamnote:0,cycle_id:0,student_id:0}),N=Object(g.a)(h,2),v=N[0],j=N[1];return Object(n.useEffect)((function(){k().then((function(e){u(e.data.students),f(e.data.cycles)})).catch((function(e){o.c.error(e.response?e.response.data.message:"Error de Servidor")}))}),[]),r.a.createElement(x,{text:"Ciclos",head:"Creaci\xf3n de Nota"},r.a.createElement(y,{loading:l}),r.a.createElement("div",{className:"leading-loose"},r.a.createElement("h1",{className:"text-4xl py-0 text-center"},"Registrar Nota"),r.a.createElement("form",{className:"max-w-xl m-4 p-10 bg-red-400 rounded shadow-xl container mx-auto",onSubmit:function(t){var a;t.preventDefault(),(0===v.student_id?(o.c.warn("Asigne un Estudiante"),0):0!==v.cycle_id||(o.c.warn("Asigne un Ciclo"),0))&&(c(!0),(a=v,w.post("notes/new",a)).then((function(t){o.c.success(t.data.message),e.push("/notes"),c(!1)})).catch((function(e){o.c.error(e.response?e.response.data.message:"Error de Servidor"),c(!1)})))},noValidate:!0},r.a.createElement("div",{className:"mt-2"},r.a.createElement("label",{className:"block text-sm text-gray-00"},"Estudiante"),r.a.createElement("div",{className:"relative"},r.a.createElement("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{student_id:Number(e.target.value)}))},value:v.student_id},r.a.createElement("option",{value:0},"Seleccionar Alumno"),d.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},"".concat(e.name," ").concat(e.lastname," - ").concat(e.university_id?e.university_id:"Externo"))}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",{className:"mt-2"},r.a.createElement("label",{className:"block text-sm text-gray-00"},"Ciclo"),r.a.createElement("div",{className:"relative"},r.a.createElement("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{cycle_id:Number(e.target.value)}))},value:v.cycle_id},r.a.createElement("option",{value:0},"Seleccionar Ciclo"),E.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},"".concat(e.schedule.language.name," ").concat(e.schedule.language.level," ").concat(e.name)," ")}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Listening"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-300 rounded",id:"listening",name:"listening",type:"number",step:"0.01",required:!0,onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{listeningnote:Number(e.target.value)}))}})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Reading"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-300 rounded",id:"reading",name:"reading",type:"number",step:"0.01",required:!0,onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{readingnote:Number(e.target.value)}))}})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Speaking"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-300 rounded",id:"speaking",name:"speaking",type:"number",step:"0.01",required:!0,onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{speakingnote:Number(e.target.value)}))}})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Middle Exam"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",id:"middle",name:"middle",type:"number",step:"0.01",required:!0,onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{middlexexamnote:Number(e.target.value)}))}})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Writting"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",id:"writting",name:"writting",type:"number",step:"0.01",required:!0,onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{writingnote:Number(e.target.value)}))}})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Final Exam"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",id:"final",name:"final",type:"number",step:"0.01",required:!0,onChange:function(e){return j(Object(O.a)(Object(O.a)({},v),{},{finalexamnote:Number(e.target.value)}))}})),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement("button",{className:"bg-black hover:bg-gray-800 font-light tracking-wider text-white font-bold py-1 px-4 rounded inline-flex items-center",onClick:function(){return e.push("/notes")}},"Volver"),r.a.createElement("button",{className:"bg-black hover:bg-gray-800 text-white font-bold py-1 px-4 mx-4 rounded inline-flex items-center",type:"submit"},"Registrar")))))},S=function(){var e=Object(s.g)(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(new Array),m=Object(g.a)(i,2),d=m[0],u=m[1],b=Object(n.useState)(new Array),p=Object(g.a)(b,2),E=p[0],f=p[1],h=Object(s.h)().id,N=Object(n.useState)({writingnote:0,listeningnote:0,readingnote:0,speakingnote:0,middlexexamnote:0,finalexamnote:0,cycle_id:0,student_id:0}),v=Object(g.a)(N,2),j=v[0],C=v[1],S=function(){var e;c(!0),(e=h,w.get("notes/"+e)).then((function(e){C(e.data),c(!1)})).catch((function(e){o.c.error(e.response?e.response.data.message:"Error de Servidor"),c(!1)}))};Object(n.useEffect)((function(){S(),k().then((function(e){u(e.data.students),f(e.data.cycles)})).catch((function(e){o.c.error(e.response?e.response.data.message:"Error de Servidor")}))}),[]);var _=function(){return 0===j.student_id?(o.c.warn("Asigne un Estudiante"),!1):0!==j.cycle_id||(o.c.warn("Asigne un Ciclo"),!1)};return r.a.createElement(x,{text:"Ciclos",head:"Actualizar Nota"},r.a.createElement(y,{loading:l}),r.a.createElement("div",{className:"leading-loose"},r.a.createElement("h1",{className:"text-4xl py-0 text-center"},"Actualizar Nota"),r.a.createElement("form",{className:"max-w-xl m-4 p-10 bg-red-400 rounded shadow-xl container mx-auto",onSubmit:function(t){var a;t.preventDefault(),_()&&(c(!0),(a=j,w.put("notes/edit",a)).then((function(t){o.c.success(t.data.message),e.push("/notes"),c(!1)})).catch((function(e){o.c.error(e.response?e.response.data.message:"Error de Servidor"),c(!1)})))},noValidate:!0},r.a.createElement("div",{className:"mt-2"},r.a.createElement("label",{className:"block text-sm text-gray-00"},"Estudiante"),r.a.createElement("div",{className:"relative"},r.a.createElement("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state","aria-readonly":!0,value:j.student_id},r.a.createElement("option",{value:0},"Seleccionar Alumno"),d.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},"".concat(e.name," ").concat(e.lastname," - ").concat(e.university_id?e.university_id:"Externo"))}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",{className:"mt-2"},r.a.createElement("label",{className:"block text-sm text-gray-00"},"Ciclo"),r.a.createElement("div",{className:"relative"},r.a.createElement("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state","aria-readonly":!0,value:j.cycle_id},r.a.createElement("option",{value:0},"Seleccionar Ciclo"),E.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},"".concat(e.schedule.language.name," ").concat(e.schedule.language.level," ").concat(e.name)," ")}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Listening"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-300 rounded",id:"listening",name:"listening",type:"number",step:"0.01",required:!0,onChange:function(e){return C(Object(O.a)(Object(O.a)({},j),{},{listeningnote:Number(e.target.value)}))},value:j.listeningnote})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Reading"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-300 rounded",id:"reading",name:"reading",type:"number",step:"0.01",required:!0,onChange:function(e){return C(Object(O.a)(Object(O.a)({},j),{},{readingnote:Number(e.target.value)}))},value:j.readingnote})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Speaking"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-300 rounded",id:"speaking",name:"speaking",type:"number",step:"0.01",required:!0,onChange:function(e){return C(Object(O.a)(Object(O.a)({},j),{},{speakingnote:Number(e.target.value)}))},value:j.speakingnote})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Middle Exam"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",id:"middle",name:"middle",type:"number",step:"0.01",required:!0,onChange:function(e){return C(Object(O.a)(Object(O.a)({},j),{},{middlexexamnote:Number(e.target.value)}))},value:j.middlexexamnote})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Writting"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",id:"writting",name:"writting",type:"number",step:"0.01",required:!0,onChange:function(e){return C(Object(O.a)(Object(O.a)({},j),{},{writingnote:Number(e.target.value)}))},value:j.writingnote})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-sm text-gray-00"},"Nota Final Exam"),r.a.createElement("input",{className:"w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",id:"final",name:"final",type:"number",step:"0.01",required:!0,onChange:function(e){return C(Object(O.a)(Object(O.a)({},j),{},{finalexamnote:Number(e.target.value)}))},value:j.finalexamnote})),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement("button",{className:"bg-black hover:bg-gray-800 font-light tracking-wider text-white font-bold py-1 px-4 rounded inline-flex items-center",onClick:function(){return e.push("/notes")}},"Volver"),r.a.createElement("button",{className:"bg-black hover:bg-gray-800 text-white font-bold py-1 px-4 mx-4 rounded inline-flex items-center",type:"submit"},"Actualizar")))))},_=function(){var e=Object(s.i)().path;return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"".concat(e),exact:!0,component:j}),r.a.createElement(s.b,{path:"".concat(e,"/new"),exact:!0,component:C}),r.a.createElement(s.b,{path:"".concat(e,"/:id"),exact:!0,component:S}),r.a.createElement(s.a,{to:"".concat(e)}))},A=function(){return r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/notes",component:_}),r.a.createElement(s.a,{to:"/notes"})))};a(68),a(69),a(70);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{autoClose:5e3,limit:4,closeOnClick:!1,position:o.c.POSITION.BOTTOM_CENTER,transition:o.b}),r.a.createElement(A,null)),document.getElementById("root"))}},[[41,1,3]]]);
//# sourceMappingURL=main.7d3f08a7.chunk.js.map