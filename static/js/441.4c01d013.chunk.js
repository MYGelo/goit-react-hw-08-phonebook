"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[441],{9054:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(9434),a=n(1413);function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=n(184),c=["selected","type","children"],i=function(e){e.selected;var t=e.type,n=void 0===t?"button":t,r=e.children,i=o(e,c);return(0,s.jsx)("button",(0,a.Z)((0,a.Z)({type:n},i),{},{children:r}))},l="contactForm_container__Fi-5m",u="contactForm_btn__iLGf9",d=function(e){return e.contacts.items},h=function(e){return e.filters},f=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},p=n(633),x=function(){var e=(0,r.I0)(),t=(0,r.v9)(d);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target,a=r.elements.text.value;t.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts.")):(e((0,p.uK)({name:a,phone:r.elements.number.value})),r.reset())},className:l,children:[(0,s.jsx)("label",{children:"Name"}),(0,s.jsx)("input",{type:"text",name:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,s.jsx)("label",{children:"Number"}),(0,s.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,s.jsx)(i,{className:u,type:"submit",children:"Add contact"})]})})},b="contactList_contact__list__yfr2X",v="contactList_contact__list__item__LgiXv",_=function(){var e=(0,r.v9)(d),t=(0,r.v9)(h).toLowerCase().toLowerCase(),n=e.filter((function(e){return e.name.toLowerCase().includes(t)})),a=(0,r.I0)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:b,children:n.map((function(e){return(0,s.jsxs)("li",{className:v,children:[(0,s.jsxs)("span",{children:[e.name," : "]}),(0,s.jsxs)("span",{children:[e.phone," "]}),(0,s.jsx)("button",{type:"button",onClick:function(){return a((0,p.GK)(e.id))},children:"Delete"})]},e.id)}))})})},j=n(4110),y=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}(),g=function(){var e=(0,r.I0)(),t=(0,r.v9)(h);return(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:y,children:"Find contacts by"}),(0,s.jsx)("input",{id:y,type:"text",name:"filter",value:t,onChange:function(t){e((0,j.m)(t.target.value))}})]})},w=n(2957),C=n(2791),L="Home_one__5Vblw";function k(){var e=(0,r.I0)(),t=(0,r.v9)(f),n=(0,r.v9)(m);return(0,C.useEffect)((function(){e((0,p.yF)())}),[e]),(0,s.jsxs)("div",{className:L,children:[(0,s.jsx)("h1",{children:"Phonebook"}),(0,s.jsx)(x,{}),(0,s.jsx)("h2",{children:"Contacts"}),(0,s.jsx)(g,{}),t&&!n&&(0,s.jsx)(w.a,{}),(0,s.jsx)(_,{})]})}}}]);
//# sourceMappingURL=441.4c01d013.chunk.js.map