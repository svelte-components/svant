import{S as t,i as s,s as e,C as n,D as i,E as o,v as a,w as c,G as f,t as r,g as l,j as $,d as m}from"./client.7d5f28db.js";import{B as p,n as d}from"./index.9f1e07e4.js";function h(t){let s;return{c(){s=r("Open styled notification box")},l(t){s=l(t,"Open styled notification box")},m(t,e){$(t,s,e)},d(t){t&&m(s)}}}function u(t){let s;const e=new p({props:{type:"primary",$$slots:{default:[h]},$$scope:{ctx:t}}});return e.$on("click",t[0]),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,n){o(e,t,n),s=!0},p(t,[s]){const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function g(t){return[()=>{d.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{marginLeft:-265},className:"test-notification-demo-class"})}]}export default class extends t{constructor(t){super(),s(this,t,g,u,e,{})}}
