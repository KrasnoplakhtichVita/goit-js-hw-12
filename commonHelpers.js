import{a as w,S,i as m}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="/goit-js-hw-12/assets/icon-2142baf8.svg";function f(o){return o.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:s,comments:a,downloads:L})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${t}" alt="${i}" />
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
                <p class="thumb-description">${a}</p>
              </div>
              <div class="thumb">
                <h2 class="thumb-title">Downloads</h2>
                <p class="thumb-description">${L}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}let d=1,g=15;async function y(o,t){const r=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:g});return await(await w.get(`https://pixabay.com/api/?${r}`)).data}function P(){d=1}function C(){d+=1}const h=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".load-button");let u=h.elements.input;const b="42531953-f4fd7fd73c35883c60e461dd3",v=new S(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",O);async function O(o){o.preventDefault(),l.classList.remove("hidden"),n.classList.add("hidden"),P(),c.innerHTML="",u=o.target.input.value;try{const t=await y(b,u);if(l.classList.add("hidden"),h.reset(),!t.hits.length)return m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:p});c.insertAdjacentHTML("beforeend",f(t.hits)),v.refresh(),n.classList.remove("hidden")}catch(t){console.log(t)}}n.addEventListener("click",$);async function $(){C(),l.classList.remove("hidden"),n.classList.add("hidden");try{const o=await y(b,u);if(l.classList.add("hidden"),d*g>=o.totalHits)return m.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:p});c.insertAdjacentHTML("beforeend",f(o.hits)),v.refresh(),n.classList.remove("hidden");const r=c.firstChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}catch(o){console.log(o)}}
//# sourceMappingURL=commonHelpers.js.map
