import{S as s,i as e,s as t,C as c,D as n,E as a,v as o,w as r,G as f,z as l,ay as d,az as $,t as i,g as u,j as m,d as p}from"./client.7d5598d7.js";import{d as h}from"./index.91f2ffba.js";function g(s){let e;return{c(){e=i("Checkbox")},l(s){e=u(s,"Checkbox")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function x(s){let e,t;function i(e){s[2].call(null,e)}let u={$$slots:{default:[g]},$$scope:{ctx:s}};void 0!==s[0]&&(u.checked=s[0]);const m=new h({props:u});return l.push(()=>d(m,"checked",i)),m.$on("change",s[1]),{c(){c(m.$$.fragment)},l(s){n(m.$$.fragment,s)},m(s,e){a(m,s,e),t=!0},p(s,[t]){const c={};8&t&&(c.$$scope={dirty:t,ctx:s}),!e&&1&t&&(e=!0,c.checked=s[0],$(()=>e=!1)),m.$set(c)},i(s){t||(o(m.$$.fragment,s),t=!0)},o(s){r(m.$$.fragment,s),t=!1},d(s){f(m,s)}}}function k(s,e,t){let c=!1;return[c,function(){console.log("checked = "+c)},function(s){c=s,t(0,c)}]}export default class extends s{constructor(s){super(),e(this,s,k,x,t,{})}}
