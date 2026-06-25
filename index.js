import{a as u,S as m,i as a}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="YOUR_PIXABAY_API_KEY",p="https://pixabay.com/api/";function g(r){const o=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`${p}?${o}`).then(i=>i.data)}function h(r){r.innerHTML=""}const y=document.querySelector(".gallery"),d=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const o=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:c,downloads:l})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${i}" alt="${e}" />
          </a>
          <div class="info-block">
            <p class="info-item"><b>Likes:</b> ${t}</p>
            <p class="info-item"><b>Views:</b> ${s}</p>
            <p class="info-item"><b>Comments:</b> ${c}</p>
            <p class="info-item"><b>Downloads:</b> ${l}</p>
          </div>
        </li>
      `).join("");y.innerHTML=o,d.refresh()}const L=document.querySelector(".search-form");L.addEventListener("submit",P);function P(r){r.preventDefault();const o=r.currentTarget.elements.query.value.trim();if(o===""){a.warning({title:"Warning",message:"Search field cannot be empty. Please enter a keyword!",position:"topRight"});return}h(),g(o).then(i=>{if(i.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(i=>{a.error({title:"Error",message:"Something went wrong with the server fetching.",position:"topRight"}),console.error(i)}),r.currentTarget.reset()}
//# sourceMappingURL=index.js.map
