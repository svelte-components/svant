import{S as s,i as a,s as e,e as t,C as n,b as o,f as l,D as r,d as i,p as u,j as c,E as f,v as p,w as h,G as d,z as $,ay as m,az as v}from"./client.952a3b68.js";import{I as g}from"./index.1b788658.js";function w(s){let a,e,w;function x(a){s[3].call(null,a)}let b={placeholder:"Basic usage"};void 0!==s[0]&&(b.value=s[0]);const j=new g({props:b});return $.push(()=>m(j,"value",x)),j.$on("input",s[1]),j.$on("enter",s[2]),{c(){a=t("div"),n(j.$$.fragment),this.h()},l(s){a=o(s,"DIV",{style:!0});var e=l(a);r(j.$$.fragment,e),e.forEach(i),this.h()},h(){u(a,"width","50%"),u(a,"min-width","230px")},m(s,e){c(s,a,e),f(j,a,null),w=!0},p(s,[a]){const t={};!e&&1&a&&(e=!0,t.value=s[0],v(()=>e=!1)),j.$set(t)},i(s){w||(p(j.$$.fragment,s),w=!0)},o(s){h(j.$$.fragment,s),w=!1},d(s){s&&i(a),d(j)}}}function x(s,a,e){let t="";return[t,()=>{console.log("Current value is:",t)},()=>{console.log("Enter pressed, the value is:",t)},function(s){t=s,e(0,t)}]}export default class extends s{constructor(s){super(),a(this,s,x,w,e,{})}}