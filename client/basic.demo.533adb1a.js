import{S as e,i as s,s as t,C as c,D as n,E as a,v as o,w as r,G as l,z as d,ay as f,az as $,t as i,g as u,j as m,d as p}from"./client.7d5f28db.js";import{d as h}from"./index.9f1e07e4.js";function g(e){let s;return{c(){s=i("Checkbox")},l(e){s=u(e,"Checkbox")},m(e,t){m(e,s,t)},d(e){e&&p(s)}}}function x(e){let s,t;function i(s){e[2].call(null,s)}let u={$$slots:{default:[g]},$$scope:{ctx:e}};void 0!==e[0]&&(u.checked=e[0]);const m=new h({props:u});return d.push(()=>f(m,"checked",i)),m.$on("change",e[1]),{c(){c(m.$$.fragment)},l(e){n(m.$$.fragment,e)},m(e,s){a(m,e,s),t=!0},p(e,[t]){const c={};8&t&&(c.$$scope={dirty:t,ctx:e}),!s&&1&t&&(s=!0,c.checked=e[0],$(()=>s=!1)),m.$set(c)},i(e){t||(o(m.$$.fragment,e),t=!0)},o(e){r(m.$$.fragment,e),t=!1},d(e){l(m,e)}}}function k(e,s,t){let c=!1;return[c,function(){console.log("checked = "+c)},function(e){c=e,t(0,c)}]}export default class extends e{constructor(e){super(),s(this,e,k,x,t,{})}}
