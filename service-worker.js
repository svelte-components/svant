!function(){"use strict";const e=["client/client.a3873b31.js","client/index.f9726b94.js","client/DocsTable.dde3330b.js","client/index.a62895c0.js","client/basic.demo.3b64fca0.js","client/index.3a77ed0c.js","client/duration.demo.d9a4b945.js","client/status.demo.9eb7c679.js","client/button.demo.909523f4.js","client/icon.demo.01d08ddd.js","client/style.demo.3c32a4ef.js","client/placement.demo.412a2166.js","client/update.demo.f64edd4c.js","client/basic.demo.6bb7a6bf.js","client/index.e54557dd.js","client/icon.demo.e4841216.js","client/separator.demo.df29a8d5.js","client/multiple-separator.demo.b07b5744.js","client/basic.demo.9c5f610a.js","client/index.59eb286c.js","client/disabled.demo.90153eba.js","client/controlled.demo.df23a029.js","client/group.demo.7decbad3.js","client/checkall.demo.cb710796.js","client/groupslot.demo.db32787c.js","client/basic.demo.4dbab521.js","client/index.0608c7b1.js","client/accordion.demo.19e4473f.js","client/nested.demo.1a05b75a.js","client/borderless.demo.17c0d224.js","client/custom-panel.demo.ed91e765.js","client/hide-arrow.demo.fbfab01f.js","client/right-arrow.demo.9da7bd28.js","client/custom-header.demo.526cfb4a.js","client/manual-active.demo.c37f2d7d.js","client/basic.demo.19e4c018.js","client/index.8922a9fa.js","client/status.demo.3b230e4b.js","client/duration.demo.102c065b.js","client/loading.demo.2bc14e88.js","client/promise.demo.2175be6a.js","client/update.demo.2238161d.js","client/type.demo.5571358f.js","client/index.0a359e57.js","client/icons.demo.0267ffb7.js","client/size.demo.f8541c3d.js","client/disabled.demo.73b2191c.js","client/loading.demo.be8e55f7.js","client/danger.demo.6d3a124c.js","client/block.demo.55937e42.js","client/basic.demo.72a1e07d.js","client/index.83f995e1.js","client/disabled.demo.ec75a831.js","client/slot.demo.e2c81a7e.js","client/size.demo.296c5811.js","client/loading.demo.a033b663.js","client/basic.demo.a3a7a4c8.js","client/index.46b79588.js","client/basic.demo.4f6f7580.js","client/index.70220ae2.js","client/async.demo.c2136dc0.js","client/footer.demo.180e83a1.js","client/confirm.demo.1eaf9697.js","client/ModalInfoExample.d35073b6.js","client/information.demo.7e999fae.js","client/update-destroy.demo.166a5a9b.js","client/positioning.demo.022ae913.js","client/destroy-all.demo.1f505b73.js","client/basic.demo.2152f228.js","client/index.53d64751.js","client/disabled.demo.20dc3156.js","client/group.demo.2df4efed.js","client/verticalGroup.demo.d3d4cbed.js","client/options.demo.007c4e98.js","client/radioButton.demo.f0df4fa6.js","client/solidButton.demo.42d40c11.js","client/radioGroupSize.demo.5fc57c6c.js","client/basic.demo.421fc803.js","client/index.92c8f767.js","client/twotone.demo.8333cda2.js","client/pandaicon.495de671.js","client/harticon.8c6cdf37.js","client/custom.demo.21ea6b0b.js","client/basic.demo.8a01f1f9.js","client/index.dc5625bd.js","client/color.demo.b8c2b68d.js","client/icon.demo.3c564136.js","client/status.demo.879af616.js","client/add-remove.demo.c2f821af.js","client/visibility.demo.40129cc2.js","client/checkable.demo.963af246.js","client/client.a11faae3.js"].concat(["service-worker-index.html","ant_logo.svg","docs.min.css","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","prism/prism.css","svant.min.css","svant_logo.svg","svant_logo_full.svg"]),c=new Set(e);self.addEventListener("install",c=>{c.waitUntil(caches.open("cache1590857833499").then(c=>c.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)"cache1590857833499"!==c&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590857833499").then(async c=>{try{const t=await fetch(e.request);return c.put(e.request,t.clone()),t}catch(t){const s=await c.match(e.request);if(s)return s;throw t}}))))})}();
