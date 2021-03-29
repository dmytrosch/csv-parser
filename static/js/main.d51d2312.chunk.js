(this["webpackJsonpcsv-parser"]=this["webpackJsonpcsv-parser"]||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(28),c=n.n(i),a=n(30),l=n(4),u=n(29),s=n.n(u),o=["Full Name","Phone","Email","Age","Experience","Yearly income","Has children","Licence states","Expiration date","License number"],j=n(5),h=n.n(j),b=n(14).isValidStateInput,d={currentAge:null,email:function(e){return h.a.isEmail(e)},age:function(e){return this.currentAge=e,e>=21&&h.a.isInt(e.toString())},phone:function(e){return h.a.isMobilePhone(e,"en-US")},experience:function(e){var t=Number(e);if(!this.currentAge&&t>=0)return!0;var n=t>=0&&t<=this.currentAge;return this.currentAge=null,n},yearlyIncome:function(e){return Number(e)>=0&&Number(e)<=1e6&&h.a.isDecimal(e)},expirationDate:function(e){var t=h.a.isDate(e,{format:"YYYY/MM/DD"})||h.a.isDate(e,{format:"MM/DD/YYYY"}),n=new Date(e)>new Date;return t&&n},licenseStates:function(e){return e.includes("|")?e.split("|").every((function(e){return b(e)})):b(e)},hasChildren:function(e){return h.a.isBoolean(e.toLowerCase())},licenseNumber:function(e){return h.a.matches(e,/^[a-zA-Z0-9]+$/)&&6===e.length}},m=n(1);function f(e){var t=e.children,n=e.column,i=e.isDublicated,c=Object(r.useState)(!1),a=Object(l.a)(c,2),u=a[0],s=a[1];return Object(r.useEffect)((function(){i?s(!0):n&&t&&!d[n](t)&&s(!0)}),[t,n,i]),Object(m.jsx)("td",{style:u?{backgroundColor:"red"}:{},children:t})}function p(e){var t=e.row,n=e.arr,i=Object(r.useState)(null),c=Object(l.a)(i,2),a=c[0],u=c[1],s=Object(r.useState)(null),o=Object(l.a)(s,2),j=o[0],h=o[1];return Object(r.useEffect)((function(){var e=function(e,t){var n,r=e.filter((function(e){return e.id!==t.id&&(e.phone===t.phone?(n="phone",!0):e.email===t.email&&(n="email",!0))}));return r.length?[r.map((function(e){return e.id})).join(","),n]:null}(n,t);if(e){var r=Object(l.a)(e,2),i=r[0],c=r[1];h(c),u(i)}}),[t,n]),Object(m.jsxs)("tr",{children:[Object(m.jsx)(f,{children:t.id}),Object(m.jsx)(f,{children:t.fullName}),Object(m.jsx)(f,{column:"phone",isDublicated:"phone"===j,children:t.phone}),Object(m.jsx)(f,{column:"email",isDublicated:"email"===j,children:t.email}),Object(m.jsx)(f,{column:"age",children:t.age}),Object(m.jsx)(f,{column:"experience",children:t.experience}),Object(m.jsx)(f,{column:"yearlyIncome",children:t.yearlyIncome}),Object(m.jsx)(f,{column:"hasChildren",children:t.hasChildren}),Object(m.jsx)(f,{column:"licenseStates",children:t.licenseStates}),Object(m.jsx)(f,{column:"expirationDate",children:t.expirationDate}),Object(m.jsx)(f,{column:"licenseNumber",children:t.licenseNumber}),Object(m.jsx)(f,{children:a})]})}function O(e){var t=e.data;return Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"id"}),o.map((function(e){return Object(m.jsx)("th",{children:e},e)})),Object(m.jsx)("th",{children:"Dublicated with"})]})}),Object(m.jsx)("tbody",{children:t&&t.map((function(e,t,n){return Object(m.jsx)(p,{row:e,arr:n},e.id)}))})]})}var x=n(14).retrieveStateInformation;function v(e){return e.map((function(e,t){var n={};n.id=t+1,n.fullName=e[0]&&e[0].trim();var r,i=e[1];return n.phone=function(e){var t=e.toString();return 10===t.length?"+1"+e:11===t.length?"+"+e:t}(i),n.email=e[2]&&e[2].toLowerCase().trim(),n.age=e[3],n.experience=e[4],n.yearlyIncome=e[5]&&e[5].toFixed(2),n.hasChildren=e[6]?e[6].toString().toUpperCase().trim():"FALSE",n.licenseStates=e[7]&&((r=e[7]).includes(",")?r.split(",").map((function(e){if(e.length>2){var t=x(e);return t?t.abbreviation:e}return e})).join("|"):r),n.expirationDate=e[8]&&e[8].trim(),n.licenseNumber=e[9]&&e[9].trim(),n}))}var g=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),u=Object(l.a)(c,2),j=u[0],h=u[1],b=Object(r.useState)(null),d=Object(l.a)(b,2),f=d[0],p=d[1];return Object(r.useEffect)((function(){var e;if(n)if(j&&h(!1),(e=n[0]).length===o.length&&e.every((function(e,t){return e.toLowerCase()===o[t].toLowerCase()}))){var t=Object(a.a)(n);null===t[t.length-1][0]&&t.pop(),t.shift();var r=v(t);r.every((function(e){return e.fullName&&e.email&&e.phone}))?p(r):h(!0)}else h(!0)}),[n,h]),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];"text/csv"===t.type&&t?s.a.parse(t,{dynamicTyping:!0,complete:function(e){return i(e.data)}}):h(!0)},className:"upload"}),!j&&n&&Object(m.jsx)(O,{data:f}),j&&Object(m.jsx)("div",{className:"alert",children:Object(m.jsx)("span",{className:"alert-text",children:"Wrong file"})})]})};n(115);c.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.d51d2312.chunk.js.map