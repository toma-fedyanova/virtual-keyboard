(()=>{"use strict";class t{constructor({elem:t,className:e,text:n}){this.element=t,this.className=e,this.text=n}generateElement(){let t=document.createElement(this.element);return this.className&&(t.className=this.className),this.text&&(t.textContent=this.text),t}}const e=document.getElementsByTagName("body")[0];let n="true",a=!1;window.addEventListener("load",(function(){localStorage.getItem("flag")&&(n=localStorage.getItem("flag")),B(0,14),B(14,29),B(29,42),B(42,55),B(55,65),a&&b.call(N[29]),l.focus()})),window.addEventListener("beforeunload",(function(){localStorage.setItem("flag",n)}));let o=new t({elem:"h1",text:"RSS Виртуальная клавиатура"}).generateElement();e.append(o);const s=document.createElement("div");s.style.width="80%",s.style.margin="15px auto",e.append(s);const l=document.createElement("textarea");l.rows="12",l.cols="50",l.className="textarea",s.append(l);let c=new t({elem:"section",className:"keyboard"}).generateElement();e.append(c);let u=new t({elem:"section",className:"info"}).generateElement();e.append(u);let i=new t({elem:"p",text:"Клавиатура создана в операционной системе Windows"}).generateElement();u.append(i);let r=new t({elem:"p",text:"Для переключения языка комбинация: ctrl + alt"}).generateElement();async function d(t){const e=await fetch("../valuesButton.json"),n=await e.json();this.textContent=n.valuesButton[t].content,this.id=n.valuesButton[t].id,this.className=n.valuesButton[t].class,this.setAttribute("data-num",n.valuesButton[t]["data-num"]),this.setAttribute("data-upper",n.valuesButton[t].contentAdd),this.setAttribute("data-lower",n.valuesButton[t].content)}async function m(t){const e=await fetch("../valuesButton.json"),n=await e.json();this.textContent=n.valuesButton[t].contentEn,this.id=n.valuesButton[t].id,this.className=n.valuesButton[t].class,this.setAttribute("data-num",n.valuesButton[t]["data-num"]),this.setAttribute("data-upperen",n.valuesButton[t].contentAddEn),this.setAttribute("data-loweren",n.valuesButton[t].contentEn)}function f(){this.textContent=this.dataset.upper}function h(){this.textContent=this.dataset.upperen}function p(){this.textContent=this.dataset.lower}function g(){this.textContent=this.dataset.loweren}function b(){this.classList.add("colored")}function v(){this.classList.remove("colored")}function w(t){l.value+=t.textContent}function x(){l.value+=" "}function E(){l.value+="  "}function y(){for(let t=0;t<N.length;t+=1)"true"===n&&!0===a?f.call(N[t]):"false"===n&&!0===a&&h.call(N[t])}function C(){for(let t=0;t<N.length;t+=1)"true"===n&&!1===a?p.call(N[t]):"false"===n&&!1===a&&g.call(N[t])}function B(t,e){const a=document.createElement("div");a.className="keybourd__row";for(let o=t;o<e;o+=1){console.log(`${n} loop`);const t=document.createElement("button");"true"===n?(console.log("true"),d.call(t,o)):(m.call(t,o),console.log("false")),a.append(t)}c.append(a)}u.append(r),document.getElementsByClassName("keyboard")[0].addEventListener("mousedown",(function(t){let e=t.target.closest("button.button-square"),n=t.target.closest("button.button_dark");n?(b.call(n),"CapsLock"===n.textContent?a?(a=!1,v.call(N[29]),C()):(a=!0,y()):"Shift"===n.textContent?(a=!0,y()):"Tab"===n.textContent&&E()):e?(w(e),b.call(e)):t.target.closest("button.button-space")&&(b.call(t.target.closest("button.button-space")),x())})),document.getElementsByClassName("keyboard")[0].addEventListener("mouseup",(function(t){let e=t.target.closest("button.button-square"),n=t.target.closest("button.button_dark");e?v.call(e):t.target.closest("button.button-space")?v.call(t.target.closest("button.button-space")):n&&("CapsLock"!==n.textContent&&v.call(n),"Shift"===n.textContent&&(a=!1,C()))}));let N=document.getElementsByTagName("button");e.addEventListener("keydown",(function(t){t.preventDefault(),l.focus();let e=t.which;for(let t of N)e===Number(t.getAttribute("data-num"))&&(t.classList.contains("button-space")?x():"Tab"===t.textContent?E():w(t),b.call(t));for(let e of N)String(t.code)===e.getAttribute("data-num")&&b.call(e);"CapsLock"===t.code&&(a?(a=!1,v.call(N[29]),C()):(b.call(N[29]),a=!0,y())),t.shiftKey&&(a=!0,y()),t.ctrlKey&&t.altKey&&(n="true"===n?"false":"true",c.innerHTML="",B(0,14),B(14,29),B(29,42),B(42,55),B(55,65))})),e.addEventListener("keyup",(function(t){t.preventDefault();let e=t.which;for(let t of N)e===Number(t.getAttribute("data-num"))&&v.call(t);for(let e of N)String(t.code)===e.getAttribute("data-num")&&v.call(e);"Shift"===t.key&&(a=!1,C())}))})();