import{S as e,i as t,s,C as a,a as c,e as n,D as $,c as l,b as o,E as d,j as r,v as i,w as f,G as u,d as m,t as p,g,z as b,ay as h,az as x}from"./client.e97d57a9.js";import{i as k,B as y}from"./index.be5cfd18.js";function D(e){let t;return{c(){t=p("Disabled")},l(e){t=g(e,"Disabled")},m(e,s){r(e,t,s)},d(e){e&&m(t)}}}function w(e){let t;return{c(){t=p("Disabled")},l(e){t=g(e,"Disabled")},m(e,s){r(e,t,s)},d(e){e&&m(t)}}}function j(e){let t;return{c(){t=p("Toggle disabled")},l(e){t=g(e,"Toggle disabled")},m(e,s){r(e,t,s)},d(e){e&&m(t)}}}function v(e){let t,s,p,g,v,T,z;function B(t){e[4].call(null,t)}let C={disabled:e[0],$$slots:{default:[D]},$$scope:{ctx:e}};void 0!==e[1]&&(C.checked=e[1]);const E=new k({props:C});function G(t){e[5].call(null,t)}b.push(()=>h(E,"checked",B));let R={disabled:e[0],$$slots:{default:[w]},$$scope:{ctx:e}};void 0!==e[2]&&(R.checked=e[2]);const S=new k({props:R});b.push(()=>h(S,"checked",G));const q=new y({props:{type:"primary",style:{marginTop:20},$$slots:{default:[j]},$$scope:{ctx:e}}});return q.$on("click",e[3]),{c(){a(E.$$.fragment),s=c(),p=n("br"),g=c(),a(S.$$.fragment),T=c(),a(q.$$.fragment)},l(e){$(E.$$.fragment,e),s=l(e),p=o(e,"BR",{}),g=l(e),$(S.$$.fragment,e),T=l(e),$(q.$$.fragment,e)},m(e,t){d(E,e,t),r(e,s,t),r(e,p,t),r(e,g,t),d(S,e,t),r(e,T,t),d(q,e,t),z=!0},p(e,[s]){const a={};1&s&&(a.disabled=e[0]),64&s&&(a.$$scope={dirty:s,ctx:e}),!t&&2&s&&(t=!0,a.checked=e[1],x(()=>t=!1)),E.$set(a);const c={};1&s&&(c.disabled=e[0]),64&s&&(c.$$scope={dirty:s,ctx:e}),!v&&4&s&&(v=!0,c.checked=e[2],x(()=>v=!1)),S.$set(c);const n={};64&s&&(n.$$scope={dirty:s,ctx:e}),q.$set(n)},i(e){z||(i(E.$$.fragment,e),i(S.$$.fragment,e),i(q.$$.fragment,e),z=!0)},o(e){f(E.$$.fragment,e),f(S.$$.fragment,e),f(q.$$.fragment,e),z=!1},d(e){u(E,e),e&&m(s),e&&m(p),e&&m(g),u(S,e),e&&m(T),u(q,e)}}}function T(e,t,s){let a=!0,c=!1,n=!0;return[a,c,n,function(){s(0,a=!a)},function(e){c=e,s(1,c)},function(e){n=e,s(2,n)}]}export default class extends e{constructor(e){super(),t(this,e,T,v,s,{})}}