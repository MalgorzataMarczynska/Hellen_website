const e=document.querySelector(".backdrop"),o=document.querySelectorAll(".open-modal"),t=document.querySelector(".closeModal-button"),n=document.querySelector(".mobile");function c(){e.classList.toggle("show-modal"),n.classList.contains("is-open")&&n.classList.remove("is-open")}o[0].addEventListener("click",c),o[1].addEventListener("click",c),t.addEventListener("click",c),window.addEventListener("click",(function(o){o.target===e&&c()}));const r=document.querySelector(".mobile"),i=document.querySelector(".open-menu"),l=document.querySelector(".is-close"),s=()=>{const e="true"===i.getAttribute("aria-expanded");i.setAttribute("aria-expanded",!e),r.classList.toggle("is-open")},d=e=>{e.matches&&(r.classList.remove("is-open"),i.setAttribute("aria-expanded",!1))},a=window.matchMedia("(min-width: 1280px)");a.addEventListener("change",d),d(a),i.addEventListener("click",s),l.addEventListener("click",s);document.querySelector("body");const u=document.querySelector("button[data-scroll]");window.addEventListener("scroll",(()=>{const e=document.body.scrollHeight-window.innerHeight;100*window.scrollY/e>window.innerHeight/100?u.classList.add("scroll-up-button"):u.classList.remove("scroll-up-button")})),u.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"}),u.classList.remove("scroll-up-button"),console.log("scroll position after click",scrollPosition,"window height",window.innerHeight/100)}));const m=document.querySelector(".reviews__slide__nav__indicator"),v=Array.from(m.children),y=Array.from(document.querySelectorAll(".reviews__slide__nav__indicator .icon")),p=document.querySelector(".reviews__slide__nav__person"),w=Array.from(document.querySelectorAll(".reviews__slide__track > *")),_=[{commentIndex:0,color:"#ff6809",person:"Tonya Kucherovskaya, Kyiv"},{commentIndex:1,color:"#ff6809",person:"Natasza Solonckiya, Lviv"},{commentIndex:2,color:"#ff6809",person:"Olga Momotiuk, Dnipro"},{commentIndex:3,color:"#ff6809",person:"Svietlana Romanova, Charkiv"}];function L(e){w.forEach(((o,t)=>{o.style.opacity=t===e?"1":"0"})),y.forEach(((o,t)=>{o.style.fill=t===e?_[e].color:"#b9b9b9"})),p.innerHTML=_[e].person}v.forEach(((e,o)=>{e.addEventListener("click",(()=>L(o)))})),L(0);
//# sourceMappingURL=index.8882fe3b.js.map
