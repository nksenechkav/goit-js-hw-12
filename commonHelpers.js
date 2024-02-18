import{i as L,S as b,a as v}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a={form:document.querySelector(".search-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".search-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")};function S(r){const{largeImageURL:t,webformatURL:s,tags:i,likes:e,views:o,comments:n,downloads:u}=r;return`<li class="gallery-item">
          <a href="${t}" class="gallery-link">
            <img
              src="${s}"
              class="gallery-image"
              alt="${i}"
            />
          </a>
          <div class="modal-text"> 
              <div class="modal-element"><p>Likes</p><span>${e}</span></div>
              <div class="modal-element"><p>Views</p><span>${o}</span></div>
              <div class="modal-element"><p>Comments</p><span>${n}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${u}</span></div>
          </div>
        </li>`}const E="Sorry, there are no images matching your search query. Please try again!";function c(){L.error({message:E,position:"topRight"})}function m(r){const t=r.hits.map(S).join("");r.hits.length?(a.galleryList.innerHTML=t,new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):c()}async function f(r,t){const s="42271393-ceafa19bde7d0a63fb15d5d6f",o="https://pixabay.com/api/",n={key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};return(await v.get(o,{params:n})).data}function p(){a.loader.classList.remove("hidden")}function g(){a.loader.classList.add("hidden")}let d,l,h;async function q(r){if(r.preventDefault(),d=r.currentTarget.elements.input.value.trim(),l=1,!d){c();return}p();try{const t=await f(d,l);t.totalHits===0&&c(),h=Math.ceil(t.totalHits/15),m(t.images),console.log(t)}catch{c()}g(),y(),a.form.reset()}async function w(){l+=1,p();const r=await f(userSearch,l);m(r.images),g(),y();const t=a.galleryList.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t})}function M(){a.btnLoadMore.classList.remove("hidden")}function O(){a.btnLoadMore.classList.add("hidden")}function y(){l>=h?O():M()}a.form.addEventListener("submit",q);a.btnLoadMore.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
