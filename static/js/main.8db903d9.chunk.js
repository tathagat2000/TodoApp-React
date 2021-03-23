(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a,n,o=c(1),s=c.n(o),i=c(14),r=c.n(i),l=(c(20),c(21),c(5)),d=c(4),j={LOW:"low",MEDIUM:"medium",HIGH:"high"},u={PERSONAL:"personal",ACADEMIC:"academic",SOCIAL:"social"},b="urgency",O="category",m="text",f="EDIT",h="DELETE",x="BULKCOMPLETE",v="BULKINCOMPLETE",p="BULKDELETE",y="RESET",g="UPDATE",N="ADD",C=c(2),S=c(6),T=c(7),A=c(0),k=(a={},Object(C.a)(a,j.LOW,Object(A.jsx)(S.a,{className:"grey",icon:T.d})),Object(C.a)(a,j.MEDIUM,Object(A.jsx)(S.a,{className:"orange",icon:T.d})),Object(C.a)(a,j.HIGH,Object(A.jsx)(S.a,{className:"red",icon:T.d})),Object(C.a)(a,u.PERSONAL,Object(A.jsx)(S.a,{className:"blue",icon:T.g})),Object(C.a)(a,u.ACADEMIC,Object(A.jsx)(S.a,{className:"grey",icon:T.a})),Object(C.a)(a,u.SOCIAL,Object(A.jsx)(S.a,{className:"pink",icon:T.h})),Object(C.a)(a,f,Object(A.jsx)(S.a,{icon:T.c})),Object(C.a)(a,h,Object(A.jsx)(S.a,{icon:T.f})),Object(C.a)(a,x,Object(A.jsx)(S.a,{icon:T.b})),Object(C.a)(a,v,Object(A.jsx)(S.a,{icon:T.e})),Object(C.a)(a,p,Object(A.jsx)(S.a,{icon:T.f})),a),E=s.a.memo((function(e){var t=e.todo,c=e.onAction,a=e.toggleSelectTodo,n=e.showEditWindow,o=e.isSelected,s="todo";return t.isCompleted&&(s+=" opacity"),o&&(s+=" selected"),Object(A.jsxs)("div",{className:s,"data-id":t.id,children:[Object(A.jsxs)("div",{className:"buttons",children:[Object(A.jsx)("button",{className:"edit",onClick:function(){n(t)},children:k[f]}),Object(A.jsx)("button",{className:"delete",onClick:function(e){c({type:h,payload:t.id}).catch((function(e){console.log(e)}))},children:k[h]})]}),Object(A.jsx)("div",{className:"todoText",children:t.text}),Object(A.jsx)("div",{className:"time",children:t.time}),Object(A.jsxs)("div",{className:"symbols",children:[k[t.urgency],k[t.category]]}),Object(A.jsx)("div",{className:"complete",children:Object(A.jsx)("button",{className:"completeButton",onClick:function(e){var a=Object(d.a)(Object(d.a)({},t),{},{isCompleted:!t.isCompleted});c({type:g,payload:a}).catch((function(e){console.log(e)}))},children:t.isCompleted?"Completed. Undo?":"Mark Complete"})}),Object(A.jsx)("div",{className:o?"notSelect bgRed":"notSelect bgWhite",onClick:function(e){a(t.id)}})]})})),I=s.a.memo((function(e){var t=e.todos,c=e.onAction,a=e.toggleSelectTodo,n=e.selectedTodoIds,o=e.showEditWindow;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"todoList",children:t.map((function(e){return Object(A.jsx)(E,{todo:e,onAction:c,toggleSelectTodo:a,showEditWindow:o,isSelected:n.includes(e.id)},e.id)}))})})})),L=s.a.memo((function(e){var t=e.selectedTodoIds,c=e.resetSelectedTodoIds,a=e.onAction,n=e.findTodoById,o=function(e){var o=t.map(n).map((function(t){return Object(d.a)(Object(d.a)({},t),{},{isCompleted:e})}));a({type:g,payload:o}).then((function(){c()})).catch((function(e){console.log(e)}))};return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"bulkSelection",children:[Object(A.jsxs)("div",{className:"completeSelection",children:[Object(A.jsx)("div",{className:"hiddenTextCompleteSelection",children:"Mark Selection Complete"}),Object(A.jsx)("button",{className:"round",onClick:function(){return o(!0)},children:k[x]})]}),Object(A.jsxs)("div",{className:"incompleteSelection",children:[Object(A.jsx)("span",{className:"hiddenTextIncompleteSelection",children:"Mark Selection Incomplete"}),Object(A.jsx)("button",{className:"round",onClick:function(){return o(!1)},children:k[v]})]}),Object(A.jsxs)("div",{className:"deleteSelection",children:[Object(A.jsx)("span",{className:"hiddenTextDeleteSelection",children:"Delete Selection"}),Object(A.jsx)("button",{className:"round",onClick:function(){a({type:h,payload:t}).then((function(){c()})).catch((function(e){console.log(e)}))},children:k[p]})]})]})})})),D=s.a.memo((function(e){var t=e.value,c=e.filterState,a=e.handleClick;return Object.entries(t).map((function(e){var t,n=Object(l.a)(e,2),o=n[0],s=n[1];return t=c[s]?"icon larger":"icon",Object(A.jsx)("button",{onClick:a,className:t,"data-name":s,children:k[s]},o)}))})),w=s.a.memo((function(e){var t=e.filterState,c=e.toggleFilterState,a=Object(o.useCallback)((function(e){var t=e.target.closest("[data-name]");t&&c(t.dataset.name)}),[c]);return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"filter colorAndRadius",children:[Object(A.jsxs)("div",{className:"logos",children:[Object(A.jsx)(D,{value:j,filterState:t,handleClick:a}),Object(A.jsx)(D,{value:u,filterState:t,handleClick:a})]}),Object(A.jsx)("p",{className:"filterText",children:"Filter Todos"})]})})})),M=s.a.memo((function(e){var t=e.todos,c=t.length,a=t.filter((function(e){return!0===e.isCompleted})).length,n=function(e,t){return(0===t?0:Math.round(100*t/e))+" % "}(c,a),o=function(e,t){return t+" / "+e}(c,a);return Object(A.jsxs)("div",{className:"analytics colorAndRadius",children:[Object(A.jsxs)("div",{className:"circle",children:[Object(A.jsx)("div",{className:"percent",children:n}),Object(A.jsx)("div",{className:"ratio",children:o})]}),Object(A.jsx)("p",{className:"analyticsText",children:"Analytics"})]})})),W={getTime:function(){return(new Date).toLocaleDateString()+", "+(new Date).toLocaleTimeString()},makeCopy:function(e){return Array.isArray(e)&&e[0]instanceof Object?e.map((function(e){return Object(d.a)({},e)})):e instanceof Object?Object(d.a)({},e):e}};W.convertToList=function(e){return Array.isArray(e)?e:[e]};var F,P=(n={},Object(C.a)(n,m,""),Object(C.a)(n,b,j.LOW),Object(C.a)(n,O,u.PERSONAL),n),R=function(e,t){switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},Object(C.a)({},t.payload.type,t.payload.value));case y:return P;default:return e}},B=s.a.memo((function(e){var t=e.value;return Object(A.jsx)(A.Fragment,{children:Object.entries(t).map((function(e){var t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(A.jsx)("option",{value:a,children:a},c)}))})})),U=s.a.memo((function(e){var t=e.onAction,c=Object(o.useReducer)(R,P),a=Object(l.a)(c,2),n=a[0],s=a[1],i=Object(o.useCallback)((function(e){s({type:g,payload:{type:e.target.dataset.type,value:e.target.value}})}),[]);return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"createTodo colorAndRadius",onKeyPress:function(e){if(13===(e.keyCode||e.which||0)&&n.text){var c=function(e){return Object(d.a)({id:(new Date).valueOf(),isCompleted:!1,time:W.getTime()},e)}(n);t({type:N,payload:c}).then((function(){s({type:y})})).catch((function(e){console.log(e)}))}},children:[Object(A.jsx)("div",{className:"createText",children:"Create Todo"}),Object(A.jsx)("input",{"data-type":m,value:n[m],type:"text",className:"addTodo",placeholder:"Add Your Todo...",onChange:i}),Object(A.jsxs)("div",{className:"urgency",children:[Object(A.jsx)("p",{className:"text",children:"Urgency"}),Object(A.jsx)("select",{value:n[b],"data-type":b,className:"selector",onChange:i,children:Object(A.jsx)(B,{value:j})})]}),Object(A.jsxs)("div",{className:"category",children:[Object(A.jsx)("p",{className:"text",children:"Category"}),Object(A.jsx)("select",{value:n[O],"data-type":O,className:"selector",onChange:i,children:Object(A.jsx)(B,{value:u})})]})]})})})),H=c(9),G=c(15),J=new function e(){var t=this;Object(G.a)(this,e),this.isServerWorking=function(){return Math.random()>t.FailProbability},this.getDatabase=function(){return new Promise((function(e,c){t.isServerWorking()?e(W.makeCopy(t.database)):c("Please Refresh Again")}))},this.saveDatabaseInLocalStorage=function(){return localStorage.setItem("todos",JSON.stringify(t.database))},this.loadDatabaseFromLocalStorage=function(){return JSON.parse(localStorage.getItem("todos"))||[]},this.findIndexOfTodoById=function(e){return t.database.findIndex((function(t){return t.id===e}))},this.createTodo=function(e){var c=W.convertToList(e);return new Promise((function(e,a){if(t.isServerWorking()){var n=W.makeCopy(c);t.database=[].concat(Object(H.a)(t.database),Object(H.a)(n)),t.saveDatabaseInLocalStorage(),e("done")}else a("Could Not Add Bulk Todos")}))},this.deleteTodo=function(e){var c=W.convertToList(e);return new Promise((function(e,a){t.isServerWorking()?(t.database=t.database.filter((function(e){return!c.includes(e.id)})),t.saveDatabaseInLocalStorage(),e("done")):a("Could Not Delete Selected Todos")}))},this.updateTodo=function(e){var c=W.convertToList(e);return new Promise((function(e,a){if(t.isServerWorking()){var n=W.makeCopy(t.database);c.forEach((function(e){var c=t.findIndexOfTodoById(e.id);n[c]=Object(d.a)({},e)})),t.database=n,t.saveDatabaseInLocalStorage(),e("done")}else a("Could Not Update Selected Todos")}))},this.database=this.loadDatabaseFromLocalStorage(),this.FailProbability=0},K=function(e,t){switch(t.type){case N:return[].concat(Object(H.a)(e),[t.payload]);case h:return e.filter((function(e){return e.id!==t.payload}));case g:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));default:return e}},Y=function(){var e=Object(o.useReducer)(K,[]),t=Object(l.a)(e,2),c=t[0],a=t[1];Object(o.useEffect)((function(){J.getDatabase().then((function(e){var t;e&&(null===(t=e.forEach)||void 0===t||t.call(e,(function(e){a({type:N,payload:e})})))}))}),[]);var n=Object(o.useCallback)((function(e){switch(e.type){case N:return function(e){return J.createTodo(e).then((function(){W.convertToList(e).forEach((function(e){a({type:N,payload:e})}))}))}(e.payload);case g:return function(e){return J.updateTodo(e).then((function(){W.convertToList(e).forEach((function(e){a({type:g,payload:e})}))}))}(e.payload);case h:return t=e.payload,J.deleteTodo(t).then((function(){W.convertToList(t).forEach((function(e){a({type:h,payload:e})}))}))}var t}),[]),s=Object(o.useCallback)((function(e){return c.find((function(t){return t.id===e}))}),[c]);return[c,s,n]},q=(F={},Object(C.a)(F,j.LOW,!1),Object(C.a)(F,j.MEDIUM,!1),Object(C.a)(F,j.HIGH,!1),Object(C.a)(F,u.PERSONAL,!1),Object(C.a)(F,u.ACADEMIC,!1),Object(C.a)(F,u.SOCIAL,!1),F),z=function(){var e=Object(o.useState)(q),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useCallback)((function(e){a((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(C.a)({},e,!t[e]))}))}),[]),s=Object(o.useCallback)((function(e){var t=c[j.LOW]||c[j.MEDIUM]||c[j.HIGH],a=c[u.PERSONAL]||c[u.ACADEMIC]||c[u.SOCIAL];return!1===t&&!1===a?e:function(e){return e.filter((function(e){return c[[e[b]]]||c[[e[O]]]}))}(e)}),[c]);return[c,s,n]},Q=function(e){var t=e.value;return Object(A.jsx)(A.Fragment,{children:Object.entries(t).map((function(e){var t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(A.jsx)("option",{value:a,children:a},c)}))})},V=function(e){var t=e.todo,c=e.closeEditWindow,a=e.onAction,n=Object(o.useState)(t),s=Object(l.a)(n,2),i=s[0],r=s[1],f=function(e){r((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(C.a)({},e.target.dataset.type,e.target.value))}))};return Object(A.jsx)("div",{className:"myModal",children:Object(A.jsxs)("div",{className:"modalContent",children:[Object(A.jsx)("input",{"data-type":m,type:"text",className:"addTodo",value:i[m],onChange:f}),Object(A.jsxs)("div",{className:"urgency",children:[Object(A.jsx)("p",{className:"text",children:"Urgency"}),Object(A.jsx)("select",{value:i[b],"data-type":b,className:"selector",onChange:f,children:Object(A.jsx)(Q,{value:j})})]}),Object(A.jsxs)("div",{className:"category",children:[Object(A.jsx)("p",{className:"text",children:"Category"}),Object(A.jsx)("select",{value:i[O],"data-type":O,className:"selector",onChange:f,children:Object(A.jsx)(Q,{value:u})})]}),Object(A.jsxs)("div",{className:"modalButtons",children:[Object(A.jsx)("button",{className:"cancel",onClick:function(){c()},children:"Cancel"}),Object(A.jsx)("button",{className:"save",onClick:function(){a({type:g,payload:i}).then(c).catch((function(e){console.log(e)}))},children:"Save"})]})]})})},X=s.a.memo((function(){var e=Y(),t=Object(l.a)(e,3),c=t[0],a=t[1],n=t[2],s=z(),i=Object(l.a)(s,3),r=i[0],d=i[1],j=i[2],u=function(e){var t=Object(o.useState)({show:!1}),c=Object(l.a)(t,2),a=c[0],n=c[1],s=Object(o.useCallback)((function(e){n({show:!0,payload:e})}),[]),i=Object(o.useCallback)((function(){n({show:!1})}),[]);return[Object(o.useMemo)((function(){return!0===a.show?Object(A.jsx)(V,{todo:a.payload,closeEditWindow:i,onAction:e}):void 0}),[a,i,e]),s]}(n),b=Object(l.a)(u,2),O=b[0],m=b[1],f=Object(o.useState)([]),h=Object(l.a)(f,2),x=h[0],v=h[1],p=Object(o.useCallback)((function(e){v((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):t.concat(e)}))}),[]),y=Object(o.useCallback)((function(){v([])}),[]),g=Object(o.useMemo)((function(){return d(c)}),[d,c]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"mainBody",children:[Object(A.jsxs)("div",{className:"col1 colorAndRadius",children:[Object(A.jsx)(I,{todos:g,onAction:n,toggleSelectTodo:p,selectedTodoIds:x,showEditWindow:m}),Object(A.jsx)(L,{selectedTodoIds:x,resetSelectedTodoIds:y,onAction:n,findTodoById:a})]}),Object(A.jsxs)("div",{className:"col2",children:[Object(A.jsx)(w,{filterState:r,toggleFilterState:j}),Object(A.jsx)(M,{todos:g}),Object(A.jsx)(U,{onAction:n})]})]}),O]})})),Z=s.a.memo((function(){var e=(new Date).toDateString();return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"header colorAndRadius",children:[Object(A.jsx)("div",{className:"date",children:e}),Object(A.jsx)("div",{className:"heading",children:"To-Do App"})]})})}));var $=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Z,{}),Object(A.jsx)(X,{})]})};r.a.render(Object(A.jsx)($,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8db903d9.chunk.js.map