import{a as P,S,i as m}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="/goit-js-hw-12/assets/icon-2142baf8.svg";function f(s){return s.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:o,comments:n,downloads:w})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${t}" alt="${a}" />
            <div class="gallery-thumb">
              <div class="thumb">
                <h2 class="thumb-title">Likes</h2>
                <p class="thumb-description">${e}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Views</h2>
                <p class="thumb-description">${o}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Comments</h2>
                <p class="thumb-description">${n}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Downloads</h2>
                <p class="thumb-description">${w}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}let d=1,g=15;async function y(s,t){const r=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:g});return await(await P.get(`https://pixabay.com/api/?${r}`)).data}function C(){d=1}function O(){d+=1}const h=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-button"),b="42531953-f4fd7fd73c35883c60e461dd3";let u=h.elements.input;const L=new S(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",$);async function $(s){s.preventDefault(),l.classList.remove("hidden"),i.classList.add("hidden"),C(),c.innerHTML="",u=s.target.input.value;try{const t=await y(b,u);if(h.reset(),l.classList.add("hidden"),!t.hits.length)return m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:p});c.insertAdjacentHTML("beforeend",f(t.hits)),L.refresh(),v(t),i.classList.remove("hidden")}catch(t){console.log(t)}}i.addEventListener("click",q);async function q(){O(),i.classList.add("hidden"),l.classList.remove("hidden");try{const s=await y(b,u);i.classList.remove("hidden"),l.classList.add("hidden"),c.insertAdjacentHTML("beforeend",f(s.hits)),L.refresh(),v(s);const t=c.firstChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}catch(s){console.log(s)}}function v(s){const t=Math.ceil(s.totalHits/g);if(d>=t)return i.classList.add("hidden"),m.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:p})}
//# sourceMappingURL=commonHelpers.js.map
