import{S as e,i as t,s,C as a,D as n,E as l,v as r,w as o,G as c,X as i,j as f,d as u,F as h,ag as $,ax as p,I as d,z as m,ay as g,az as w}from"./client.e97d57a9.js";import{S as v,O as y}from"./index.be5cfd18.js";function x(e,t,s){const a=e.slice();return a[7]=t[s],a}function b(e,t){let s,h;const $=new y({props:{value:t[7],label:t[7]}});return{key:e,first:null,c(){s=i(),a($.$$.fragment),this.h()},l(e){s=i(),n($.$$.fragment,e),this.h()},h(){this.first=s},m(e,t){f(e,s,t),l($,e,t),h=!0},p(e,t){const s={};4&t&&(s.value=e[7]),4&t&&(s.label=e[7]),$.$set(s)},i(e){h||(r($.$$.fragment,e),h=!0)},o(e){o($.$$.fragment,e),h=!1},d(e){e&&u(s),c($,e)}}}function j(e){let t,s,a=[],n=new Map,l=e[2];const c=e=>e[7];for(let t=0;t<l.length;t+=1){let s=x(e,l,t),r=c(s);n.set(r,a[t]=b(r,s))}return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=i()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=i()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);f(e,t,n),s=!0},p(e,s){if(4&s){const l=e[2];h(),a=$(a,s,c,1,e,l,n,t.parentNode,p,b,t,x),d()}},i(e){if(!s){for(let e=0;e<l.length;e+=1)r(a[e]);s=!0}},o(e){for(let e=0;e<a.length;e+=1)o(a[e]);s=!1},d(e){for(let t=0;t<a.length;t+=1)a[t].d(e);e&&u(t)}}}function C(e){let t,s;function i(t){e[6].call(null,t)}let f={searchable:!0,searchFunction:S,placeholder:"Search for Star Wars Characters",style:{width:275},showEmptyMessage:e[3],loading:e[1],$$slots:{default:[j]},$$scope:{ctx:e}};void 0!==e[0]&&(f.value=e[0]);const u=new v({props:f});return m.push(()=>g(u,"value",i)),u.$on("search",e[4]),{c(){a(u.$$.fragment)},l(e){n(u.$$.fragment,e)},m(e,t){l(u,e,t),s=!0},p(e,[s]){const a={};8&s&&(a.showEmptyMessage=e[3]),2&s&&(a.loading=e[1]),1028&s&&(a.$$scope={dirty:s,ctx:e}),!t&&1&s&&(t=!0,a.value=e[0],w(()=>t=!1)),u.$set(a)},i(e){s||(r(u.$$.fragment,e),s=!0)},o(e){o(u.$$.fragment,e),s=!1},d(e){c(u,e)}}}function S(e,t){return t.value.toLowerCase().indexOf(e.toLowerCase())>=0}function E(e,t,s){let a,n,l="",r=!1,o=[];return e.$$.update=()=>{4&e.$$.dirty&&(o.length?s(3,n=!1):s(3,n=!0))},[l,r,o,n,function({detail:e}){s(1,r=!0),a&&(clearTimeout(a),a=null),a=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+e).then(e=>e.json()).then(async e=>{s(2,o=e.results.map(e=>e.name)),s(1,r=!1)})},1e3)},a,function(e){l=e,s(0,l)}]}export default class extends e{constructor(e){super(),t(this,e,E,C,s,{})}}
