import{a as w,S as P,i as m}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="/goit-js-hw-12/assets/icon-2142baf8.svg";function f(o){return o.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:s,comments:n,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${t}" alt="${a}" />
            <div class="gallery-thumb">
              <div class="thumb">
                <h2 class="thumb-title">Likes</h2>
                <p class="thumb-description">${e}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Views</h2>
                <p class="thumb-description">${s}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Comments</h2>
                <p class="thumb-description">${n}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Downloads</h2>
                <p class="thumb-description">${v}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}let d=1,g=100;async function y(o,t){const r=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:g});return await(await w.get(`https://pixabay.com/api/?${r}`)).data}function S(){d=1}function C(){d+=1}const h=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-button");let u=h.elements.input;const b="42531953-f4fd7fd73c35883c60e461dd3",L=new P(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",O);async function O(o){o.preventDefault(),l.classList.remove("hidden"),i.classList.add("hidden"),S(),c.innerHTML="",u=o.target.input.value;try{const t=await y(b,u);if(h.reset(),l.classList.add("hidden"),!t.hits.length)return m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:p});c.insertAdjacentHTML("beforeend",f(t.hits)),L.refresh(),i.classList.remove("hidden")}catch(t){console.log(t)}}i.addEventListener("click",$);async function $(){C(),i.classList.add("hidden"),l.classList.remove("hidden");try{const o=await y(b,u);i.classList.remove("hidden"),l.classList.add("hidden");const t=Math.ceil(o.totalHits/g);if(c.insertAdjacentHTML("beforeend",f(o.hits)),L.refresh(),d>=t)return i.classList.add("hidden"),m.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:p});const r=c.firstChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}catch(o){console.log(o)}}
//# sourceMappingURL=commonHelpers.js.map
