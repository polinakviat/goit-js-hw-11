import{a as h,S as p,i as a}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g="45321984-abcdef1234567890987654321",y="https://pixabay.com/api/";function b(t){const r=new URLSearchParams({key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return h.get(`${y}?${r}`).then(i=>i.data)}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function u(t){t.innerHTML=""}function S(t,r){const i=t.map(({webformatURL:n,largeImageURL:e,tags:o,likes:s,views:f,comments:m,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${n}" alt="${o}" />
          </a>
          <div class="info-block">
            <p class="info-item"><b>Likes:</b> ${s}</p>
            <p class="info-item"><b>Views:</b> ${f}</p>
            <p class="info-item"><b>Comments:</b> ${m}</p>
            <p class="info-item"><b>Downloads:</b> ${d}</p>
          </div>
        </li>
      `).join("");r.innerHTML=i,L.refresh()}function w(t,r){u(r),S(t,r)}function $(t){t.classList.remove("is-hidden")}function P(t){t.classList.add("is-hidden")}const q=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");q.addEventListener("submit",v);function v(t){t.preventDefault();const r=t.currentTarget.elements.query.value.trim();if(r===""){a.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"});return}u(c),$(l),b(r).then(i=>{if(i.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(i.hits,c)}).catch(i=>{a.error({title:"Error",message:"Something went wrong with the server fetching.",position:"topRight"}),console.error(i)}).finally(()=>{P(l)}),t.currentTarget.reset()}
//# sourceMappingURL=index.js.map
