(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{25:function(e,t,n){"use strict";n.r(t);var s=n(9),c=n(15),a=n(17);const i=document.getElementById("search");function o(e){e.preventDefault();const t=(n=i.value,Object(s.a)().filter(e=>{const t=new RegExp(n,"gi");return e.title.match(t)||e.description.match(t)}));var n;console.log("this ",t);const o=document.createDocumentFragment();t.forEach(e=>{const t=document.createElement("a");t.setAttribute("data-anchor",e._id),t.setAttribute("href","javascript:void(0);"),t.classList="dropdown-item";const n=document.createElement("i");n.classList="fe-settings mr-1",n.setAttribute("data-anchor",e._id);const s=document.createTextNode(e.title);t.appendChild(n),t.appendChild(s),o.appendChild(t)});const r=document.getElementById("search-results");for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(o),r.classList.add("show"),window.addEventListener("click",()=>r.classList.remove("show")),r.addEventListener("click",function e(t){r.classList.remove("show"),Object(c.a)(t.target.dataset.anchor),Object(a.a)(t),this.removeEventListener("click",e)})}i.addEventListener("keyup",o),document.querySelector(".app-search").addEventListener("submit",o),(()=>{const e=document.getElementById("search-project");e.addEventListener("keyup",function(t){t.preventDefault();const n=(i=e.value,Object(s.a)().filter(e=>{const t=new RegExp(i,"gi");return e.title.match(t)||e.description.match(t)}));var i;console.log("this ",n);const o=document.createDocumentFragment();n.forEach(e=>{const t=document.createElement("a");t.setAttribute("data-anchor",e._id),t.setAttribute("href","javascript:void(0);"),t.classList="dropdown-item";const n=document.createElement("i");n.classList="fe-settings mr-1",n.setAttribute("data-anchor",e._id);const s=document.createTextNode(e.title);t.appendChild(n),t.appendChild(s),o.appendChild(t)});const r=document.querySelector(".search-results-left");for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(o),r.classList.add("show"),window.addEventListener("click",()=>r.classList.remove("show")),r.addEventListener("click",function t(n){r.classList.remove("show"),Object(c.a)(n.target.dataset.anchor),Object(a.a)(n),e.value="",this.removeEventListener("click",t)})})})()}}]);