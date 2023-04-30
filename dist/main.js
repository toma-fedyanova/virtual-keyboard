(()=>{"use strict";class t{constructor({elem:t,className:e,text:n}){this.element=t,this.className=e,this.text=n}generateElement(){let t=document.createElement(this.element);return this.className&&(t.className=this.className),this.text&&(t.textContent=this.text),t}}const e=document.getElementsByTagName("body")[0];let n=!0,a=!1,s=new t({elem:"h1",text:"RSS Виртуальная клавиатура"}).generateElement();e.append(s);const o=document.createElement("div");o.style.width="80%",o.style.margin="15px auto",e.append(o);const l=document.createElement("textarea");l.rows="12",l.cols="50",l.className="textarea",o.append(l);let c=new t({elem:"section",className:"keyboard"}).generateElement();e.append(c);let u=new t({elem:"section",className:"info"}).generateElement();e.append(u);let i=new t({elem:"p",text:"Клавиатура создана в операционной системе Windows"}).generateElement();u.append(i);let r=new t({elem:"p",text:"Для переключения языка комбинация: ctrl + alt"}).generateElement();async function d(t){const e=await fetch("../valuesButton.json"),n=await e.json();this.textContent=n.valuesButton[t].content,this.id=n.valuesButton[t].id,this.className=n.valuesButton[t].class,this.setAttribute("data-num",n.valuesButton[t]["data-num"]),this.setAttribute("data-upper",n.valuesButton[t].contentAdd),this.setAttribute("data-lower",n.valuesButton[t].content)}async function m(t){const e=await fetch("../valuesButton.json"),n=await e.json();this.textContent=n.valuesButton[t].contentEn,this.id=n.valuesButton[t].id,this.className=n.valuesButton[t].class,this.setAttribute("data-num",n.valuesButton[t]["data-num"]),this.setAttribute("data-upperen",n.valuesButton[t].contentAddEn),this.setAttribute("data-loweren",n.valuesButton[t].contentEn)}function p(){this.textContent=this.dataset.upper}function h(){this.textContent=this.dataset.upperen}function b(){this.textContent=this.dataset.lower}function f(){this.textContent=this.dataset.loweren}function g(){this.classList.add("colored")}function v(){this.classList.remove("colored")}function w(t){l.value+=t.textContent}function E(){l.value+=" "}function x(t,e){const a=document.createElement("div");a.className="keybourd__row";for(let s=t;s<e;s+=1){const t=document.createElement("button");!0===n?d.call(t,s):m.call(t,s),a.append(t)}c.append(a)}u.append(r),document.getElementsByClassName("keyboard")[0].addEventListener("mousedown",(function(t){let e=t.target.closest("button.button-square"),n=t.target.closest("button.button_dark");n?(g.call(n),"CapsLock"===n.textContent&&(a?(a=!1,v.call(B[29]),N()):(a=!0,y()))):e?(w(e),g.call(e)):t.target.closest("button.button-space")&&(g.call(t.target.closest("button.button-space")),E())})),document.getElementsByClassName("keyboard")[0].addEventListener("mouseup",(function(t){let e=t.target.closest("button.button-square"),n=t.target.closest("button.button_dark");e?v.call(e):t.target.closest("button.button-space")?v.call(t.target.closest("button.button-space")):n&&"CapsLock"!==n.textContent&&v.call(n)}));let B=document.getElementsByTagName("button");function y(){for(let t=0;t<B.length;t+=1)!0===n&&!0===a?p.call(B[t]):!1===n&&!0===a&&h.call(B[t])}function N(){for(let t=0;t<B.length;t+=1)!0===n&&!1===a?b.call(B[t]):!1===n&&!1===a&&f.call(B[t])}e.addEventListener("keydown",(function(t){t.preventDefault();let e=t.which;for(let t of B)e===Number(t.getAttribute("data-num"))&&(t.classList.contains("button-space")?E():w(t),g.call(t));for(let e of B)String(t.code)===e.getAttribute("data-num")&&g.call(e);"CapsLock"===t.code&&(a?(a=!1,v.call(B[29]),N()):(g.call(B[29]),a=!0,y())),t.ctrlKey&&t.altKey&&(n=!n,c.innerHTML="",x(0,14),x(14,29),x(29,42),x(42,55),x(55,65))})),e.addEventListener("keyup",(function(t){t.preventDefault();let e=t.which;for(let t of B)e===Number(t.getAttribute("data-num"))&&v.call(t);for(let e of B)String(t.code)===e.getAttribute("data-num")&&v.call(e)})),window.addEventListener("load",(function(){x(0,14),x(14,29),x(29,42),x(42,55),x(55,65),a&&g.call(B[29]),l.focus()}))})();