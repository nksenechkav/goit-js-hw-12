import{i as d,S as u,a as m}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n={form:document.querySelector(".search-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".search-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};function f(o){const{largeImageURL:r,webformatURL:a,tags:i,likes:e,views:t,comments:s,downloads:c}=o;return`<li class="gallery-item">
          <a href="${r}" class="gallery-link">
            <img
              src="${a}"
              class="gallery-image"
              alt="${i}"
            />
          </a>
          <div class="modal-text"> 
              <div class="modal-element"><p>Likes</p><span>${e}</span></div>
              <div class="modal-element"><p>Views</p><span>${t}</span></div>
              <div class="modal-element"><p>Comments</p><span>${s}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${c}</span></div>
          </div>
        </li>`}const p="Sorry, there are no images matching your search query. Please try again!";function l(){d.error({message:p,position:"topRight"})}function y(o){const r=o.hits.map(f).join("");o.hits.length?(n.galleryList.innerHTML=r,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):l()}async function g(o){const r="42271393-ceafa19bde7d0a63fb15d5d6f",e="https://pixabay.com/api/",t={key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15};return(await m.get(e,{params:t})).data}function h(){n.loader.classList.remove("hidden")}function L(){n.loader.classList.add("hidden")}function v(o){o.preventDefault(),h(),n.galleryList.innerHTML="";const r=o.currentTarget.elements.input.value.trim();g(r).then(y).catch(l).finally(L),n.form.reset()}n.form.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
