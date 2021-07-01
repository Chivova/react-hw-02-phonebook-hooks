(this["webpackJsonpreact-hw-02-phonebook-hooks"]=this["webpackJsonpreact-hw-02-phonebook-hooks"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__3w9G6"}},17:function(t,e,n){},2:function(t,e,n){t.exports={formTitle:"ContactForm_formTitle__FUHfc",formText:"ContactForm_formText__2zbI8",formInput:"ContactForm_formInput__2IlOG",formBtn:"ContactForm_formBtn__3i16-"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(17),n(12)),s=n(3),l=n(24),u=n(10),m=n.n(u),b=n(11),d=n.n(b),j=n(0);function f(t){var e=t.children;return Object(j.jsx)("div",{className:d.a.container,children:e})}f.protoType={children:m.a.node.isRequired};var p=n(2),h=n.n(p);function O(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],m=l[1],b=function(t){var e=t.target,n=e.value;switch(e.name){case"name":o(n);break;case"number":m(n);break;default:return}},d=function(){o(""),m("")};return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,u),d()},children:[Object(j.jsx)("h1",{className:h.a.formTitle,children:"Phonebook"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:h.a.formText,children:"Name:"}),Object(j.jsx)("input",{className:h.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b,value:r})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:h.a.formText,children:"Number:"}),Object(j.jsx)("input",{className:h.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b,value:u})]}),Object(j.jsx)("button",{className:h.a.formBtn,type:"submit",children:"Add contact"})]})}var x=n(5),_=n.n(x);function v(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("div",{className:_.a.filterWrapp,children:[Object(j.jsx)("h2",{className:_.a.filterTitle,children:"Contacts"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:_.a.filterText,children:"Find Contacts By Name"}),Object(j.jsx)("input",{className:_.a.filterInput,type:"text",value:e,onChange:n})]})]})}var C=n(7),N=n.n(C);function I(t){var e=t.contacts,n=t.onClick;return Object(j.jsx)("ul",{className:N.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:N.a.contactsItem,children:[a,": ",c,Object(j.jsx)("button",{className:N.a.contactsBtn,onClick:function(){return n(e)},type:"button",children:"X"})]},e)}))})}n(21);var L=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],m=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var b=u.toLocaleLowerCase(),d=n.filter((function(t){return t.name.toLocaleLowerCase().includes(b)}));return Object(j.jsxs)(f,{children:[Object(j.jsx)(O,{onSubmit:function(t,e){var a={id:Object(l.a)(),name:t,number:e};n.find((function(e){return e.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))?alert("".concat(t," is already in contacts ")):c([a].concat(Object(i.a)(n)))}}),Object(j.jsx)(v,{value:u,onChange:function(t){var e=t.target.value;m(e)}}),Object(j.jsx)(I,{contacts:d,onClick:function(t){c(n.filter((function(e){return e.id!==t})))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={filterWrapp:"Filter_filterWrapp__3FR_B",filterTitle:"Filter_filterTitle__3LjjC",filterText:"Filter_filterText__3NgHZ",filterInput:"Filter_filterInput__3iv-Q"}},7:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__1-TWA",contactsItem:"ContactList_contactsItem__1dBEj",contactsBtn:"ContactList_contactsBtn__3J-DP"}}},[[22,1,2]]]);
//# sourceMappingURL=main.872d42f3.chunk.js.map