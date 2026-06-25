import{a as c,S as l,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="YOUR_PIXABAY_API_KEY",f="https://pixabay.com/api/";function h(o){const i=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return c.get(`${f}?${i}`).then(r=>r.data)}function g(o){o.innerHTML=""}const p=document.querySelector(".gallery"),m=new l(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const i=o.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
          </a>
          <div class="info-block">
            <p><b>Likes:</b> ${r.likes}</p>
            <p><b>Views:</b> ${r.views}</p>
          </div>
        </li>
      `).join("");p.innerHTML=i,m.refresh()}const d=document.querySelector(".search-form");d.addEventListener("submit",b);function b(o){o.preventDefault();const i=o.currentTarget.elements.query.value.trim();if(i===""){n.warning({title:"Warning",message:"Search field cannot be empty. Please enter a keyword!",position:"topRight"});return}g(),h(i).then(r=>{if(r.hits.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits)}).catch(r=>{n.error({title:"Error",message:"Something went wrong with the server fetching.",position:"topRight"}),console.error(r)}),o.currentTarget.reset()}
//# sourceMappingURL=index.js.map
