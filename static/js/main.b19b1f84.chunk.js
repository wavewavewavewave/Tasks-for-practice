(this.webpackJsonphometask=this.webpackJsonphometask||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={link:"Header_link__3_mht",active:"Header_active__5_BTM",block:"Header_block__3Nygo",header:"Header_header__1uCrg"}},,function(e,t,n){e.exports={message:"Message_message__2Zkh-",ava:"Message_ava__3Phsl",name:"Message_name__ZrXlk",corner:"Message_corner__1hluf",content:"Message_content__1q7a-",time:"Message_time__3Cr5Z"}},function(e,t,n){e.exports={group:"SuperInputText_group__1ycjk",superInput:"SuperInputText_superInput__1nI_I",errorInput:"SuperInputText_errorInput__2q5jN",error:"SuperInputText_error__2TlNI"}},function(e,t,n){e.exports={Greeting:"Greeting_Greeting__1uWrS",someClass:"Greeting_someClass__2nhWT",error:"Greeting_error___e3bC",errorInput:"Greeting_errorInput__190qp",input:"Greeting_input__1C2gW"}},function(e,t,n){e.exports={item:"HW8_item__1u_Ez",button:"HW8_button__3RbD0",qwery:"HW8_qwery__-WQu6"}},,,,,function(e,t,n){e.exports={blue:"HW4_blue__3qE1C",column:"HW4_column__19we9",testSpanError:"HW4_testSpanError__2npQU"}},,,function(e,t,n){e.exports={default:"SuperButton_default__1Grx2",red:"SuperButton_red__VGETY"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1QVhe",spanClassName:"SuperCheckbox_spanClassName__NY9K5"}},,,,function(e,t,n){e.exports={App:"App_App__1NxRj"}},function(e,t,n){e.exports={span:"EditableSpan_span__2NnFI"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(28),c=n.n(r),s=(n(37),n(29)),i=n.n(s),o=n(12),j=n(11),l=n.n(j),u=n(13),d=n.n(u),b=n(0);function h(e){return Object(b.jsxs)("div",{className:d.a.message,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:e.avatar,alt:"#props.avatar",className:d.a.ava})}),Object(b.jsx)("div",{className:d.a.corner}),Object(b.jsxs)("div",{className:d.a.content,children:[Object(b.jsx)("div",{className:d.a.name,children:e.name}),Object(b.jsx)("div",{children:e.message}),Object(b.jsx)("div",{className:d.a.time,children:e.time})]})]})}var O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",m="some text",p="22:00";var _=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(h,{avatar:O,name:x,message:m,time:p})]})},v=n(3);var f=function(e){return Object(b.jsxs)("div",{children:[e.affair.name,Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var g=function(e){var t=e.data.map((function(t){return Object(b.jsx)(f,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(a.useState)(C),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(g,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return C.filter((function(e){return e._id!==t}))}(0,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},N=n(20),y=n(46),S=n(15),w=n.n(S),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.addFromButton,i=w.a.error?w.a.errorInput:w.a.input;return Object(b.jsxs)("div",{className:w.a.Greeting,children:[Object(b.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(b.jsx)("div",{className:w.a.error,children:r}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("button",{onClick:a,children:"add"}),Object(b.jsx)("span",{children:c})]})},T=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(v.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(v.a)(o,2),l=j[0],u=j[1],d=function(){n(s),alert("Hello ".concat(s," !"))},h=t.length;return Object(b.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("NEPRAVELNII TITLE!!"))},addUser:d,error:l,totalUsers:h,addFromButton:function(e){u(""),13===e.charCode&&d()}})};var E=function(){var e=Object(y.a)(),t=Object(a.useState)([{_id:e,name:"Nikita"}]),n=Object(v.a)(t,2),r=n[0],c=n[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(T,{users:r,addUserCallback:function(t){c([{_id:e,name:t}].concat(Object(N.a)(r)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},F=n(7),W=n(6),A=n(14),H=n.n(A),P=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,P),j="".concat(H.a.error," ").concat(i||""),l="".concat(H.a.errorInput," ").concat(c?H.a.errorInput:H.a.superInput," ").concat(s);return Object(b.jsxs)("div",{className:H.a.group,children:[Object(b.jsx)("div",{className:H.a.superInput,children:Object(b.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o))}),c&&Object(b.jsx)("span",{className:j,children:c})]})},G=n(21),q=n.n(G),J=n(24),M=n.n(J),U=["red","className"],K=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,U),r="".concat(t?M.a.red:M.a.default," ").concat(n);return Object(b.jsx)("button",Object(F.a)({className:r},a))},D=n(25),R=n.n(D),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],L=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(W.a)(e,Z),s="".concat(R.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(b.jsx)("span",{className:R.a.spanClassName,children:r})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(v.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:q.a.column,children:[Object(b.jsx)(B,{value:n,onChangeText:r,onEnter:s,error:c,spanClassName:q.a.testSpanError}),Object(b.jsx)(B,{className:q.a.blue}),Object(b.jsx)(K,{children:"default"}),Object(b.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(K,{disabled:!0,children:"disabled"}),Object(b.jsx)(L,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(L,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},V=n(30),X=n.n(V),Y=["autoFocus","onBlur","onEnter","spanProps"],z=["children","onDoubleClick","className"],$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(W.a)(e,Y),s=Object(a.useState)(!1),i=Object(v.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,d=l.onDoubleClick,h=l.className,O=Object(W.a)(l,z),x="".concat(X.a.span," ").concat(h||"");return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(B,Object(F.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsxs)("span",Object(F.a)(Object(F.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},O),{},{children:["%",u||c.value]}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)($,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(K,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(b.jsx)(K,{onClick:function(){r(te("editable-span-value",""))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ae=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)(k,{}),Object(b.jsx)(E,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(ne,{})]})};var re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ce=["options","onChange","onChangeOption"],se=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(W.a)(e,ce),c=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(b.jsx)("select",Object(F.a)(Object(F.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},ie=["type","name","options","value","onChange","onChangeOption"],oe=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(W.a)(e,ie),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,onChange:s,value:e,checked:e===a}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},je=["x","y","z"];var le=function(){var e=Object(a.useState)(je[1]),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(se,{options:je,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(oe,{name:"radio",options:je,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}],de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sort":var n=Object(N.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},be=n(16),he=n.n(be),Oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var xe=function(){var e=Object(a.useState)(Oe),t=Object(v.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(b.jsxs)("div",{className:he.a.item,children:[Object(b.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",c,Object(b.jsxs)("div",{className:he.a.button,children:[Object(b.jsx)("div",{className:he.a.qwery,children:Object(b.jsx)(K,{onClick:function(){return r(de(Oe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{className:he.a.qwery,children:Object(b.jsx)(K,{onClick:function(){return r(de(Oe,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{className:he.a.qwery,children:Object(b.jsx)(K,{onClick:function(){return r(de(Oe,{type:"check",payload:18}))},children:"check 18"})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var me=function(){return Object(b.jsxs)("div",{children:["junior",Object(b.jsx)(le,{}),Object(b.jsx)(xe,{})]})};var pe=function(){return Object(b.jsx)("div",{children:"junior+"})},_e=n(2),ve="/pre-junior",fe="/junior",ge="/hard-junior";var Ce=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(_e.d,{children:[Object(b.jsx)(_e.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(_e.a,{to:ve})}}),Object(b.jsx)(_e.b,{path:ve,render:function(){return Object(b.jsx)(ae,{})}}),Object(b.jsx)(_e.b,{path:fe,render:function(){return Object(b.jsx)(me,{})}}),Object(b.jsx)(_e.b,{path:ge,render:function(){return Object(b.jsx)(pe,{})}}),"// add routes",Object(b.jsx)(_e.b,{render:function(){return Object(b.jsx)(re,{})}})]})})};var ke=function(){return Object(b.jsxs)("div",{className:l.a.header,children:[Object(b.jsx)(o.b,{to:ve,className:l.a.link,activeClassName:l.a.active,children:"PreJunior"}),Object(b.jsx)(o.b,{to:fe,className:l.a.link,activeClassName:l.a.active,children:"Junior"}),Object(b.jsx)(o.b,{to:ge,className:l.a.link,activeClassName:l.a.active,children:"Junior+"}),Object(b.jsx)("div",{className:l.a.block})]})},Ne=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(ke,{}),Object(b.jsx)(Ce,{})]})})};var ye=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(ye,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.b19b1f84.chunk.js.map