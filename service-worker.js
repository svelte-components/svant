!function(){"use strict";const e=["client/client.e97d57a9.js","client/index.de5cc337.js","client/DocsTable.60a7f7d1.js","client/index.be5cfd18.js","client/basic.demo.8d16da46.js","client/index.0a64ba20.js","client/duration.demo.797b2ace.js","client/status.demo.f8d9c203.js","client/button.demo.0f0f6dc4.js","client/icon.demo.c791434a.js","client/style.demo.76fcc9c5.js","client/placement.demo.953325e7.js","client/update.demo.79dee907.js","client/basic.demo.0766c369.js","client/index.0c11795c.js","client/icon.demo.f7520600.js","client/separator.demo.a76d5d84.js","client/multiple-separator.demo.89b53e98.js","client/basic.demo.0d52bddc.js","client/index.43dce225.js","client/disabled.demo.bd6ea094.js","client/controlled.demo.4555212c.js","client/group.demo.76e79216.js","client/checkall.demo.4053fe2a.js","client/groupslot.demo.4e57266b.js","client/basic.demo.c7cbb571.js","client/index.d4dd09e0.js","client/accordion.demo.adea4254.js","client/nested.demo.801894b9.js","client/borderless.demo.80154252.js","client/custom-panel.demo.81eb3afb.js","client/hide-arrow.demo.981ccadd.js","client/right-arrow.demo.7fb6064a.js","client/custom-header.demo.9457c359.js","client/manual-active.demo.7a743da1.js","client/horizontal.demo.bd63bda9.js","client/index.3d73ffa5.js","client/title.demo.f6f75914.js","client/vertical.demo.3ebdc6ff.js","client/basic.demo.d68ff817.js","client/index.f159833e.js","client/status.demo.964dc16c.js","client/duration.demo.a16ab4d2.js","client/loading.demo.26645f78.js","client/promise.demo.3e65c46a.js","client/update.demo.1ad89051.js","client/type.demo.0f9da561.js","client/index.be5d5e8d.js","client/icons.demo.80fde59d.js","client/size.demo.ad47008c.js","client/disabled.demo.1b5294c0.js","client/loading.demo.86cfc878.js","client/danger.demo.b0f68ffe.js","client/block.demo.01c73df8.js","client/basic.demo.620aff2a.js","client/index.b7ec0329.js","client/search.demo.4a9347a4.js","client/multiple.demo.4213e394.js","client/tags.demo.bb6db924.js","client/sizes.demo.ee555524.js","client/custom-selection.demo.373fcf36.js","client/option-group.demo.3c175e0f.js","client/remote-search.demo.90b98490.js","client/custom-content.demo.d1c3f0d3.js","client/hide-selected.demo.7c735f30.js","client/borderless.demo.f89f4baa.js","client/custom-tags.demo.4ae40b53.js","client/basic.demo.c8f70cd2.js","client/index.899b1b76.js","client/disabled.demo.11bea92b.js","client/slot.demo.0bdadaf0.js","client/size.demo.d6b7ad78.js","client/loading.demo.5cc9ca34.js","client/basic.demo.b7ea5441.js","client/index.d3df36c4.js","client/basic.demo.a1c1d5ee.js","client/index.9c8b93fe.js","client/async.demo.f827471a.js","client/footer.demo.0ceb977d.js","client/confirm.demo.0d7d5f94.js","client/ModalInfoExample.0cd432fd.js","client/information.demo.212ce23f.js","client/update-destroy.demo.a43ab19b.js","client/positioning.demo.f7d35fcd.js","client/destroy-all.demo.b8be8880.js","client/basic.demo.0b5e4127.js","client/index.6fa5443c.js","client/disabled.demo.4baa0410.js","client/group.demo.be27647a.js","client/verticalGroup.demo.3aaa203c.js","client/options.demo.a93ae1f0.js","client/radioButton.demo.ac0d7764.js","client/solidButton.demo.9d2f6c25.js","client/radioGroupSize.demo.31fc9e8a.js","client/basic.demo.4a0f421d.js","client/index.98259d10.js","client/twotone.demo.404b8229.js","client/pandaicon.e12e87a5.js","client/harticon.8dc6f4fe.js","client/custom.demo.237ff727.js","client/basic.demo.bd19e26e.js","client/index.0ff58229.js","client/color.demo.7d25b5f4.js","client/icon.demo.da062a9e.js","client/status.demo.49910fd7.js","client/add-remove.demo.fa11dada.js","client/visibility.demo.f957f5a3.js","client/checkable.demo.16fb71be.js","client/client.14ac2619.js"].concat(["service-worker-index.html","ant_logo.svg","docs.min.css","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","prism/prism.css","svant.min.css","svant_logo.svg","svant_logo_full.svg"]),c=new Set(e);self.addEventListener("install",c=>{c.waitUntil(caches.open("cache1595336689403").then(c=>c.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)"cache1595336689403"!==c&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1595336689403").then(async c=>{try{const t=await fetch(e.request);return c.put(e.request,t.clone()),t}catch(t){const s=await c.match(e.request);if(s)return s;throw t}}))))})}();
