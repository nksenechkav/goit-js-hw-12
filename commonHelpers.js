import{i as c,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n={form:document.querySelector(".search-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".search-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};function u(t){return`<li class="gallery-item">
          <a href="${t.largeImageURL}" class="gallery-link">
            <img
              src="${t.webformatURL}"
              class="gallery-image"
              alt="${t.tags}"
            />
          </a>
          <div class="modal-text"> 
              <div class="modal-element"><p>Likes</p><span>${t.likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${t.views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${t.comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${t.downloads}</span></div>
          </div>
        </li>`}const m="Sorry, there are no images matching your search query. Please try again!";function l(){c.error({message:m,position:"topRight"})}function f(t){const o=t.hits.map(u).join("");t.hits.length?(n.galleryList.innerHTML=o,new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):l()}function p(t){const o="42271393-ceafa19bde7d0a63fb15d5d6f",s="https://pixabay.com/api/",a=`q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,e=`${s}?key=${o}&${a}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(){n.loader.classList.remove("hidden")}function h(){n.loader.classList.add("hidden")}function g(t){t.preventDefault(),y(),n.galleryList.innerHTML="";const o=t.currentTarget.elements.input.value.trim();p(o).then(f).catch(l).finally(h),n.form.reset()}n.form.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
