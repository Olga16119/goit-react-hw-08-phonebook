"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[794],{7794:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(2791),a=t(9434),o=t(6351),s=t(1718),u=t(6172),c=t(425),i=t(184),l=function(){var e=(0,a.I0)(),n=(0,a.v9)(o.zK);return(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e((0,c.M)(n.target.value))},placeholder:"Enter name four search"})," ","Find contacts"]})},d="ContactList_contactList__UFVCg",m="ContactList_contactItem__ppNQ5",h=function(e){var n=e.id,t=e.name,r=e.number,o=(0,a.I0)();return(0,i.jsxs)("li",{id:n,className:m,children:[t,".........................................",r,(0,i.jsx)("button",{onClick:function(){return function(e){return o((0,s.GK)(e))}(n)},children:" Delete"})]})},f=function(){var e=(0,a.v9)(o.zK),n=(0,a.v9)(o.K2),t=(0,a.v9)(o.by),r=(0,a.v9)(o.Vc);return(0,i.jsxs)(i.Fragment,{children:[!r&&!t,(0,i.jsx)("ul",{className:d,children:function(){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){var n=e.id,t=e.name,r=e.number;return(0,i.jsx)(h,{id:n,name:t,number:r},n)}))})]})},p=t(9439),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},_=function(){var e=(0,r.useState)(""),n=(0,p.Z)(e,2),t=n[0],u=n[1],c=(0,r.useState)(""),l=(0,p.Z)(c,2),d=l[0],m=l[1],h=(0,a.I0)(),f=(0,a.v9)(o.K2),_=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"number":m(r);break;case"name":u(r);break;default:throw new Error("Error")}},b=function(){u(""),m("")};return(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),f.find((function(e){return e.name.toLowerCase()===t.toLocaleLowerCase()}))||f.find((function(e){return e.number===d})))return alert(" ".concat(t," already is in phonebook"));var n={name:t,number:d};h((0,s.uK)(n)),b()},children:[(0,i.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter your name",value:t,onChange:_,id:v(),required:!0}),(0,i.jsx)("input",{type:"tel",name:"number",placeholder:"Enter your number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:_,id:v()}),(0,i.jsx)("button",{children:"Add"})]})},b=t(6450),g=function(){var e=(0,a.I0)(),n=(0,a.v9)(o.Vc);return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,i.jsxs)("div",{className:b.Z.contactsPage,children:[(0,i.jsx)("h2",{children:"YOUR CONTACTS"}),(0,i.jsx)(_,{}),(0,i.jsx)(l,{}),(0,i.jsx)(f,{}),n&&(0,i.jsx)(u.Z,{})]})}},6450:function(e,n){n.Z={home:"Views_home__slhqh",login:"Views_login__33g-u",register:"Views_register__utdsV",contactsPage:"Views_contactsPage__ldccz"}}}]);
//# sourceMappingURL=794.41bc6df9.chunk.js.map