(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(20),a=n.n(s),o=(n(29),n(0)),i=function(e){var t=e.title;return Object(o.jsx)("div",{children:Object(o.jsx)("header",{className:"h-50 bg-white border-b-2 py-5 shadow-sm px-3 sm:px-10 flex justify-between text-center",children:Object(o.jsx)("h1",{className:"font-bold text-2xl",children:t})})})};i.defaultProps={title:"Task Tracker"};var u=i,l=n(14),d=n(24),j=n(7),b=n.n(j),x=n(11),h=n(8),m=n(9),f=n(2),p=function(e){e.text;var t=e.btnClickAdd,n=e.showAdd,r=Object(f.e)();return Object(o.jsx)("div",{children:"/"===r.pathname&&Object(o.jsx)("button",{onClick:t,className:"bg-blue-500 text-sm text-white py-1 px-3 rounded-sm hover:bg-blue-600 font-light",children:n?"Close":"Add"})})},O=n(23),v=function(e){var t=e.list,n=e.onDelete,r=e.onToggle,c=t.day.split(" ");return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{onDoubleClick:function(){return r(t.id)},className:"task ".concat(t.reminder?"border-l-2 border-blue-500 reminder":"reminder"),children:[Object(o.jsx)(O.a,{onClick:function(){return n(t.id)},className:"float-right text-red-600 cursor-pointer hover:text-red-900"}),Object(o.jsx)("h3",{children:t.text}),Object(o.jsx)("small",{children:new Date(c[0]).toDateString()+" - "+c[1]})]})})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(o.jsx)("div",{className:"mt-5",children:t.map((function(e){return Object(o.jsx)(v,{list:e,onDelete:n,onToggle:r},e.id)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(h.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(""),u=Object(h.a)(i,2),l=u[0],d=u[1],j=Object(r.useState)(""),b=Object(h.a)(j,2),x=b[0],m=b[1],f=Object(r.useState)(!1),p=Object(h.a)(f,2),O=p[0],v=p[1];return Object(o.jsx)("div",{className:"mt-5 py-5 px-4 bg-white shadow-sm mx-auto",children:Object(o.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),s)?(t({text:s,day:l+" "+x,reminder:O}),a(""),d(""),m(""),v(!1)):alert("Please add a task")},children:[Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("p",{className:"text-sm font-semibold",children:"Name"}),Object(o.jsx)("input",{type:"text",className:"w-full rounded-sm bg-white px-2 py-1 border border-gray-200",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("p",{className:"text-sm font-semibold",children:"Date and Time"}),Object(o.jsxs)("div",{className:"inline-flex space-x-4",children:[Object(o.jsx)("input",{type:"date",className:"w-full rounded-sm bg-white px-2 py-1 border border-gray-200",value:l,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("input",{type:"time",className:"w-full rounded-sm bg-white px-2 py-1 border border-gray-200",value:x,onChange:function(e){return m(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"my-2 inline-flex spance-x-2 items-center",children:[Object(o.jsx)("p",{className:"text-sm mr-2 font-semibold",children:"Remind Me"}),Object(o.jsx)("input",{type:"checkbox",className:"cursor-pointer",checked:O,value:O,onChange:function(e){return v(e.currentTarget.checked)}})]}),Object(o.jsx)("div",{className:"my-2",children:Object(o.jsx)("button",{className:"w-full bg-blue-600 text-white rounded-sm py-2 text-sm",children:"Save Task"})})]})})},w=function(){return Object(o.jsxs)("footer",{className:"w-full mx-auto text-center items-center text-sm mt-5 px-10",children:[Object(o.jsx)("p",{children:"Copyright \xa9 2021"}),Object(o.jsx)(m.b,{to:"/about",children:"About"})]})},k=function(){return Object(o.jsxs)("div",{className:"w-full mx-auto text-sm text-center items-center mt-5",children:[Object(o.jsx)("h1",{className:"text-xl text-gray-300",children:"Version 1.0.0"}),Object(o.jsx)(m.b,{className:"text-sm text-gray-300",to:"/",children:"Back"})]})},N=function(){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(h.a)(s,2),i=a[0],u=a[1];Object(r.useEffect)((function(){(function(){var e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(x.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,u([].concat(Object(d.a)(i),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:u(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(b.a.mark((function e(t){var n,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(l.a)(Object(l.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:s=e.sent,u(i.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{reminder:s.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(m.a,{children:Object(o.jsxs)("div",{className:"max-w-xl mx-auto px-2 pb-10",children:[Object(o.jsxs)("div",{className:"mt-10 w-full flex justify-between items-center bg-white shadow-sm py-2 px-4 rounded-sm",children:[Object(o.jsx)("label",{className:"font-semibold",children:"Task"}),Object(o.jsx)(p,{btnClickAdd:function(){return c(!n)},showAdd:n})]}),Object(o.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(o.jsxs)(o.Fragment,{children:[n&&Object(o.jsx)(y,{onAdd:v}),i.length>0?Object(o.jsx)(g,{tasks:i,onDelete:N,onToggle:T}):Object(o.jsx)("div",{className:"text-center w-full text-gray-300 mt-10 font-semibold",children:"No Task available"})]})}}),Object(o.jsx)(f.a,{path:"/about",component:k}),Object(o.jsx)(w,{})]})})},T=function(){return Object(o.jsxs)("div",{className:"bg-gray-100 top-0 left-0 font-openSans ",children:[Object(o.jsx)(u,{title:"Task Tracker"}),Object(o.jsx)(N,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.e580b8ff.chunk.js.map