!function(){"use strict";const e=["client/client.952a3b68.js","client/index.2aff710c.js","client/DocsTable.134e8aed.js","client/index.1b788658.js","client/basic.demo.ed409bad.js","client/index.5c470f8b.js","client/duration.demo.1ca3321f.js","client/status.demo.b9a97909.js","client/button.demo.a56dfbd0.js","client/icon.demo.d552fd11.js","client/style.demo.ea1602f6.js","client/placement.demo.22cb7942.js","client/update.demo.7a5833b3.js","client/basic.demo.d5626690.js","client/index.e8d01e30.js","client/icon.demo.bd1cd746.js","client/separator.demo.3684e99c.js","client/multiple-separator.demo.08c0468d.js","client/basic.demo.e855c996.js","client/index.64c9fc84.js","client/disabled.demo.e6317143.js","client/controlled.demo.31225836.js","client/group.demo.490dd60a.js","client/checkall.demo.e1707a7a.js","client/groupslot.demo.1b3ff412.js","client/basic.demo.6733ed04.js","client/index.2262f8f2.js","client/accordion.demo.44274229.js","client/nested.demo.703d6889.js","client/borderless.demo.d0485a06.js","client/custom-panel.demo.068fe2fc.js","client/hide-arrow.demo.e00ca7a9.js","client/right-arrow.demo.19ca3677.js","client/custom-header.demo.7dbc2166.js","client/manual-active.demo.f7fc1763.js","client/horizontal.demo.e21c98cc.js","client/index.c417cb20.js","client/title.demo.e6469745.js","client/vertical.demo.eea80f9d.js","client/basic.demo.99631ca4.js","client/index.11d5b57e.js","client/status.demo.4f74d57f.js","client/duration.demo.ada887f2.js","client/loading.demo.8cafaece.js","client/promise.demo.107b39d4.js","client/update.demo.ef98febe.js","client/type.demo.9c88a812.js","client/index.083d7f00.js","client/icons.demo.0572b177.js","client/size.demo.f8d2c197.js","client/disabled.demo.4717088c.js","client/loading.demo.038b1b35.js","client/danger.demo.5e565350.js","client/block.demo.97165536.js","client/basic.demo.07c741ef.js","client/index.6744253a.js","client/search.demo.ff6fc9bc.js","client/multiple.demo.49f4750d.js","client/tags.demo.8c9d73e7.js","client/sizes.demo.1bf62eaf.js","client/custom-selection.demo.54257e28.js","client/option-group.demo.328967b0.js","client/remote-search.demo.209f516e.js","client/custom-content.demo.cc174a33.js","client/hide-selected.demo.a52f0797.js","client/borderless.demo.44223506.js","client/custom-tags.demo.f360f8ab.js","client/basic.demo.46adca75.js","client/index.e02718cf.js","client/disabled.demo.e96c34c8.js","client/slot.demo.ea4c3681.js","client/size.demo.3f0d9d42.js","client/loading.demo.33bef10c.js","client/basic.demo.2fbfe10a.js","client/index.142ebe19.js","client/basic.demo.66ae0f54.js","client/index.a18c4401.js","client/async.demo.38f421b7.js","client/footer.demo.e9f176cb.js","client/confirm.demo.4bdf9fdb.js","client/ModalInfoExample.49dcfeba.js","client/information.demo.770c8631.js","client/update-destroy.demo.80a2c240.js","client/positioning.demo.b8120bce.js","client/destroy-all.demo.afdb96e6.js","client/basic.demo.47d925bd.js","client/index.678c317c.js","client/disabled.demo.7f06b8e0.js","client/group.demo.18a3c0ec.js","client/verticalGroup.demo.c9344404.js","client/options.demo.59a4d6e4.js","client/radioButton.demo.abe14d8e.js","client/solidButton.demo.ceb32631.js","client/radioGroupSize.demo.969da747.js","client/basic.demo.8b8e1cac.js","client/index.d5e5e137.js","client/twotone.demo.5d908843.js","client/pandaicon.71afa186.js","client/harticon.97023c26.js","client/custom.demo.6f781a12.js","client/basic.demo.71ed2c61.js","client/index.fd0b87e7.js","client/color.demo.99ca6b84.js","client/icon.demo.06bc07b1.js","client/status.demo.97b317d7.js","client/add-remove.demo.3720c6ab.js","client/visibility.demo.0f7939bb.js","client/checkable.demo.fa3729be.js","client/client.1f5bd37d.js"].concat(["service-worker-index.html","ant_logo.svg","docs.min.css","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","prism/prism.css","svant.min.css","svant_logo.svg","svant_logo_full.svg"]),c=new Set(e);self.addEventListener("install",c=>{c.waitUntil(caches.open("cache1623890880723").then(c=>c.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)"cache1623890880723"!==c&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1623890880723").then(async c=>{try{const t=await fetch(e.request);return c.put(e.request,t.clone()),t}catch(t){const s=await c.match(e.request);if(s)return s;throw t}}))))})}();
