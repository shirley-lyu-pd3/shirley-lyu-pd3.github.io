!function(){"use strict";const e=1607109695059,t=`cache${e}`,n=["/client/client.dcc61392.js","/client/inject_styles.5607aec6.js","/client/index.0a14babf.js","/client/work-mode-selection.cbba8e33.js","/client/static-standing.a808cc0d.js","/client/static-sitting.0cda9769.js","/client/exercise-end.ef472373.js","/client/exercise.55dc3911.js","/client/movement.0ce5dead.js","/client/setting.15d59f0f.js","/client/warning.d6109d4f.js"].concat(["/service-worker-index.html","/background1.jpg","/background2.jpg","/exercise.gif","/favicon.png","/font/Houschka Rounded Medium.ttf","/global.css","/layout.GIF","/logo-192.png","/logo-512.png","/manifest.json","/music.png","/pointer.png","/research.png","/warning_tri.png","/word.png"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&c.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!s||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
