import{S as t,i as s,s as n,C as e,D as i,E as o,v as a,w as c,G as r,t as f,g as l,j as $,d as m}from"./client.952a3b68.js";import{B as p,n as d}from"./index.1b788658.js";function h(t){let s;return{c(){s=f("Open styled notification box")},l(t){s=l(t,"Open styled notification box")},m(t,n){$(t,s,n)},d(t){t&&m(s)}}}function u(t){let s;const n=new p({props:{type:"primary",$$slots:{default:[h]},$$scope:{ctx:t}}});return n.$on("click",t[0]),{c(){e(n.$$.fragment)},l(t){i(n.$$.fragment,t)},m(t,e){o(n,t,e),s=!0},p(t,[s]){const e={};2&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(a(n.$$.fragment,t),s=!0)},o(t){c(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function g(t){return[()=>{d.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{marginLeft:-265},className:"test-notification-demo-class"})}]}export default class extends t{constructor(t){super(),s(this,t,g,u,n,{})}}
