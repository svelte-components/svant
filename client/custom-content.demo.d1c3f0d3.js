import{S as e,i as t,s as n,C as a,D as r,E as o,v as s,w as l,G as f,z as c,ay as i,az as u,X as $,j as d,d as p,a as m,e as g,c as h,b as v,f as y,h as w,k as b,F as I,ag as x,ax as D,I as E,aR as k,t as C,g as N}from"./client.e97d57a9.js";import{S as j,O as A,I as R,B as S}from"./index.be5cfd18.js";if("undefined"!=typeof navigator&&"ReactNative"===navigator.product&&"undefined"==typeof crypto)throw new Error("React Native does not have a built-in secure random generator. If you don’t need unpredictable IDs, you can use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID.");if("undefined"!=typeof msCrypto&&"undefined"==typeof crypto)throw new Error("Add `if (!window.crypto) window.crypto = window.msCrypto` before Nano ID to fix IE 11 support");if("undefined"==typeof crypto)throw new Error("Your browser does not have secure random generator. If you don’t need unpredictable IDs, you can use nanoid/non-secure.");let z=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t};function F(e,t,n){const a=e.slice();return a[6]=t[n],a}function L(e,t){let n,c;const i=new A({props:{value:t[6].value,label:t[6].value}});return{key:e,first:null,c(){n=$(),a(i.$$.fragment),this.h()},l(e){n=$(),r(i.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){d(e,n,t),o(i,e,t),c=!0},p(e,t){const n={};4&t&&(n.value=e[6].value),4&t&&(n.label=e[6].value),i.$set(n)},i(e){c||(s(i.$$.fragment,e),c=!0)},o(e){l(i.$$.fragment,e),c=!1},d(e){e&&p(n),f(i,e)}}}function U(e){let t,n;const c=new k({});return{c(){a(c.$$.fragment),t=C("\n      Add item")},l(e){r(c.$$.fragment,e),t=N(e,"\n      Add item")},m(e,a){o(c,e,a),d(e,t,a),n=!0},i(e){n||(s(c.$$.fragment,e),n=!0)},o(e){l(c.$$.fragment,e),n=!1},d(e){f(c,e),e&&p(t)}}}function V(e){let t,n,$,k,C,N,j,z=[],V=new Map;const B=new A({props:{value:"jack",label:"Jack"}}),G=new A({props:{value:"lucy",label:"Lucy"}});let J=e[2];const M=e=>e[6].id;for(let t=0;t<J.length;t+=1){let n=F(e,J,t),a=M(n);V.set(a,z[t]=L(a,n))}function O(t){e[4].call(null,t)}let X={};void 0!==e[1]&&(X.value=e[1]);const Y=new R({props:X});c.push(()=>i(Y,"value",O));const _=new S({props:{type:"primary",style:{marginLeft:10},$$slots:{default:[U]},$$scope:{ctx:e}}});return _.$on("click",e[3]),{c(){a(B.$$.fragment),t=m(),a(G.$$.fragment),n=m();for(let e=0;e<z.length;e+=1)z[e].c();$=m(),k=g("div"),a(Y.$$.fragment),N=m(),a(_.$$.fragment),this.h()},l(e){r(B.$$.fragment,e),t=h(e),r(G.$$.fragment,e),n=h(e);for(let t=0;t<z.length;t+=1)z[t].l(e);$=h(e),k=v(e,"DIV",{class:!0});var a=y(k);r(Y.$$.fragment,a),N=h(a),r(_.$$.fragment,a),a.forEach(p),this.h()},h(){w(k,"class","add-option svelte-ciuac3")},m(e,a){o(B,e,a),d(e,t,a),o(G,e,a),d(e,n,a);for(let t=0;t<z.length;t+=1)z[t].m(e,a);d(e,$,a),d(e,k,a),o(Y,k,null),b(k,N),o(_,k,null),j=!0},p(e,t){if(4&t){const n=e[2];I(),z=x(z,t,M,1,e,n,V,$.parentNode,D,L,$,F),E()}const n={};!C&&2&t&&(C=!0,n.value=e[1],u(()=>C=!1)),Y.$set(n);const a={};512&t&&(a.$$scope={dirty:t,ctx:e}),_.$set(a)},i(e){if(!j){s(B.$$.fragment,e),s(G.$$.fragment,e);for(let e=0;e<J.length;e+=1)s(z[e]);s(Y.$$.fragment,e),s(_.$$.fragment,e),j=!0}},o(e){l(B.$$.fragment,e),l(G.$$.fragment,e);for(let e=0;e<z.length;e+=1)l(z[e]);l(Y.$$.fragment,e),l(_.$$.fragment,e),j=!1},d(e){f(B,e),e&&p(t),f(G,e),e&&p(n);for(let t=0;t<z.length;t+=1)z[t].d(e);e&&p($),e&&p(k),f(Y),f(_)}}}function B(e){let t,n;function $(t){e[5].call(null,t)}let d={style:{width:250},placeholder:"Custom Dropdown",$$slots:{default:[V]},$$scope:{ctx:e}};void 0!==e[0]&&(d.value=e[0]);const p=new j({props:d});return c.push(()=>i(p,"value",$)),{c(){a(p.$$.fragment)},l(e){r(p.$$.fragment,e)},m(e,t){o(p,e,t),n=!0},p(e,[n]){const a={};518&n&&(a.$$scope={dirty:n,ctx:e}),!t&&1&n&&(t=!0,a.value=e[0],u(()=>t=!1)),p.$set(a)},i(e){n||(s(p.$$.fragment,e),n=!0)},o(e){l(p.$$.fragment,e),n=!1},d(e){f(p,e)}}}function G(e,t,n){let a="",r="",o=[];return[a,r,o,function(){r&&(n(2,o=[...o,{value:r,id:z()}]),n(1,r=""))},function(e){r=e,n(1,r)},function(e){a=e,n(0,a)}]}export default class extends e{constructor(e){super(),t(this,e,G,B,n,{})}}
