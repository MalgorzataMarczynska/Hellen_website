const e=document.querySelector(".mobile"),o=document.querySelector(".open-menu"),r=document.querySelector(".is-close"),n=()=>{const r="true"===o.getAttribute("aria-expanded");o.setAttribute("aria-expanded",!r),e.classList.toggle("is-open")},t=r=>{r.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))},c=window.matchMedia("(min-width: 1280px)");c.addEventListener("change",t),t(c),o.addEventListener("click",n),r.addEventListener("click",n);const i=document.querySelector(".reviews__slide__nav__indicator"),a=Array.from(i.children),s=Array.from(document.querySelectorAll(".reviews__slide__nav__indicator .icon")),l=document.querySelector(".reviews__slide__nav__person"),d=Array.from(document.querySelectorAll(".reviews__slide__track > *")),m=[{commentIndex:0,color:"#ff6809",person:"Tonya Kucherovskaya, Kyiv"},{commentIndex:1,color:"#ff6809",person:"Natasza Solonckiya, Lviv"},{commentIndex:2,color:"#ff6809",person:"Olga Momotiuk, Dnipro"},{commentIndex:3,color:"#ff6809",person:"Svietlana Romanova, Charkiv"}];function u(e){d.forEach(((o,r)=>{o.style.opacity=r===e?"1":"0"})),s.forEach(((o,r)=>{o.style.fill=r===e?m[e].color:"#b9b9b9"})),l.innerHTML=m[e].person}a.forEach(((e,o)=>{e.addEventListener("click",(()=>u(o)))})),u(0);
//# sourceMappingURL=index.148e8153.js.map
