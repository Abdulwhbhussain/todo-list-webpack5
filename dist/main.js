(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"html {\r\n  font-size: 1.3rem;\r\n}\r\n\r\nbody {\r\n  background: #f1f2f5;\r\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\r\n  font-weight: 300;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  /* height: 100vh; */\r\n  overflow-x: hidden;\r\n}\r\n\r\ndiv {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#todo-list-container {\r\n  width: 80%;\r\n  max-width: 500px;\r\n  margin: auto;\r\n  padding: 0;\r\n  background-color: #fff;\r\n  box-sizing: border-box;\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  text-align: left;\r\n  position: relative;\r\n  top: 200px;\r\n  padding-bottom: 1px;\r\n  height: fit-content;\r\n}\r\n\r\n.todo-element-padding {\r\n  padding: 8px 15px;\r\n}\r\n\r\n#todo-footer-button {\r\n  opacity: 0.5;\r\n  appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  margin: 1rem auto;\r\n  display: block;\r\n  cursor: pointer;\r\n\r\n  /* text-transform: none; */\r\n  overflow: visible;\r\n  text-align: center;\r\n  padding: 1px 6px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#todo-footer-button:hover {\r\n  opacity: 1;\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Sync Icon */\r\n\r\n.gg-sync {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: block;\r\n  transform: scale(var(--ggs, 1));\r\n  border-radius: 40px;\r\n  border: 2px solid;\r\n  margin: 1px;\r\n  border-left-color: transparent;\r\n  border-right-color: transparent;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.gg-sync::after,\r\n.gg-sync::before {\r\n  content: \"\";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 4px solid transparent;\r\n  border-bottom: 4px solid transparent;\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.gg-sync::before {\r\n  border-left: 6px solid;\r\n  bottom: -1px;\r\n  right: -3px;\r\n}\r\n\r\n.gg-sync::after {\r\n  border-right: 6px solid;\r\n  top: -1px;\r\n  left: -3px;\r\n}\r\n\r\n#todo-title-element {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n#todo-title {\r\n  color: #545862;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n\r\n  /* padding: 1rem; */\r\n  line-height: 20px;\r\n  margin: 0;\r\n\r\n  /* text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap; */\r\n}\r\n\r\n#todo-input {\r\n  width: 93%;\r\n\r\n  /* padding: 0 40px 0 1rem; */\r\n  line-height: 40px;\r\n  height: 40px;\r\n  font-style: italic;\r\n  appearance: none;\r\n  vertical-align: middle;\r\n  border: none !important;\r\n  outline: none;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  resize: none;\r\n  font-size: 1rem;\r\n  cursor: auto;\r\n}\r\n\r\n.ellipsis {\r\n  text-overflow: ellipsis; /* enables ellipsis */\r\n  white-space: nowrap; /* keeps the text in a single line */\r\n  overflow: hidden; /* keeps the element from overflowing its parent */\r\n}\r\n\r\n#todo-enter {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Apply Grid on the todo ITEM container */\r\n\r\n.todo-item-container {\r\n  display: grid;\r\n  grid-template-columns: 6% 84% 10%;\r\n  grid-template-rows: auto;\r\n  column-gap: 13px;\r\n  margin: 0;\r\n  list-style: none;\r\n  align-items: center;\r\n}\r\n\r\n",""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var d=e[l],s=r.base?d[0]+r.base:d[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var g=o(u,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var d=r(e,o),s=0;s<i.length;s++){var c=n(i[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),l=n(565),d=n.n(l),s=n(216),c=n.n(s),p=n(589),m=n.n(p),u=n(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),t()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const f=document.getElementById("todo-input");localStorage.getItem("input")?f.value=localStorage.getItem("input"):localStorage.setItem("input",""),f.addEventListener("change",(e=>{localStorage.setItem("input",`${e.target.value}`)})),document.getElementById("todo-list-element");let h=[];localStorage.getItem("todoList")?h=JSON.parse(localStorage.getItem("todoList")):localStorage.setItem("todoList",JSON.stringify(h)),document.getElementById("todo-enter").addEventListener("click",(e=>{const t=f.value;f.value="",localStorage.setItem("input",f.value),h.push({description:t,completed:!1,index:h.length}),localStorage.setItem("todoList",JSON.stringify(h)),x(t,!1,h.length-1)}));const x=(e,t,n)=>{const r=document.createElement("div");r.classList.add("todo-element-padding"),r.classList.add("todo-item-container");const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("id",`todo-list-check-${n}`),r.appendChild(o);const i=document.createElement("span");i.classList.add("ellipsis"),i.innerText=e,r.appendChild(i);const a=document.createElement("span");a.innerHTML="&#8942;",r.appendChild(a),document.getElementById("todo-list-element").appendChild(r),document.getElementById("todo-list-element").appendChild(document.createElement("hr")),o.addEventListener("click",(e=>{!0===o.checked?(o.nextElementSibling.style.textDecoration="line-through",o.nextElementSibling.style.opacity="0.5",h[n].completed=!0):(o.nextElementSibling.style.textDecoration="none",o.nextElementSibling.style.opacity="1",h[n].completed=!1),localStorage.setItem("todoList",JSON.stringify(h))}))};h.forEach((e=>{const t=document.createElement("div");t.classList.add("todo-element-padding"),t.classList.add("todo-item-container");const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",`todo-list-check-${e.index}`),n.classList.add("test-check"),t.appendChild(n);const r=document.createElement("span");r.classList.add("ellipsis"),r.innerText=e.description,t.appendChild(r);const o=document.createElement("span");o.innerHTML="&#8942;",t.appendChild(o),document.getElementById("todo-list-element").appendChild(t),document.getElementById("todo-list-element").appendChild(document.createElement("hr")),n.addEventListener("click",(e=>{if(!0===n.checked){n.nextElementSibling.style.textDecoration="line-through",n.nextElementSibling.style.opacity="0.5";let e=n.id.split("").pop();h.forEach((t=>{t.index===Number(e)&&(t.completed=!0)})),localStorage.setItem("todoList",JSON.stringify(h))}else{n.nextElementSibling.style.textDecoration="none",n.nextElementSibling.style.opacity="1";let e=n.id.split("").pop();h.forEach((t=>{t.index===Number(e)&&(t.completed=!1)})),localStorage.setItem("todoList",JSON.stringify(h))}}))})),document.getElementById("todo-footer-button").addEventListener("click",(e=>{const t=h.filter((e=>!1===e.completed));for(let e=0;e<t.length;e++)t[e].index=e;h=t,localStorage.setItem("todoList",JSON.stringify(h)),document.getElementById("todo-list-element").innerHTML="",h.forEach((e=>{const t=document.createElement("div");t.classList.add("todo-element-padding"),t.classList.add("todo-item-container");const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",`todo-list-check-${e.index}`),n.classList.add("test-check"),t.appendChild(n);const r=document.createElement("span");r.classList.add("ellipsis"),r.innerText=e.description,t.appendChild(r);const o=document.createElement("span");o.innerHTML="&#8942;",t.appendChild(o),document.getElementById("todo-list-element").appendChild(t),document.getElementById("todo-list-element").appendChild(document.createElement("hr")),n.addEventListener("click",(e=>{if(!0===n.checked){n.nextElementSibling.style.textDecoration="line-through",n.nextElementSibling.style.opacity="0.5";let e=n.id.split("").pop();h.forEach((t=>{t.index===Number(e)&&(t.completed=!0)})),localStorage.setItem("todoList",JSON.stringify(h))}else{n.nextElementSibling.style.textDecoration="none",n.nextElementSibling.style.opacity="1";let e=n.id.split("").pop();h.forEach((t=>{t.index===Number(e)&&(t.completed=!1)})),localStorage.setItem("todoList",JSON.stringify(h))}}))}))}))})()})();