import{S as t,i as e,s,C as i,D as a,E as n,v as o,w as r,G as c,t as p,g as $,j as d,d as l}from"./client.952a3b68.js";import{B as u,n as f}from"./index.1b788658.js";function m(t){let e;return{c(){e=p("Open the notification box")},l(t){e=$(t,"Open the notification box")},m(t,s){d(t,e,s)},d(t){t&&l(e)}}}function g(t){let e;const s=new u({props:{type:"primary",$$slots:{default:[m]},$$scope:{ctx:t}}});return s.$on("click",t[0]),{c(){i(s.$$.fragment)},l(t){a(s.$$.fragment,t)},m(t,i){n(s,t,i),e=!0},p(t,[e]){const i={};2&e&&(i.$$scope={dirty:e,ctx:t}),s.$set(i)},i(t){e||(o(s.$$.fragment,t),e=!0)},o(t){r(s.$$.fragment,t),e=!1},d(t){c(s,t)}}}function x(t){return[()=>{f.error({key:"updatable",message:"Original Notification Title",description:"description."}),setTimeout(()=>{f.success({key:"updatable",message:"New Title",description:"New description.",duration:3e3})},1e3)}]}export default class extends t{constructor(t){super(),e(this,t,x,g,s,{})}}