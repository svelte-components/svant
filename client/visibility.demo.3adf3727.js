import{S as s,i as t,s as e,C as a,a as n,e as o,D as $,c as r,b as c,f as l,d as i,p as f,E as m,j as p,v as d,w as g,G as u,t as x,g as h}from"./client.7c0f06b8.js";import{T as v,B as b}from"./index.dee613d5.js";function j(s){let t;return{c(){t=x("Movies")},l(s){t=h(s,"Movies")},m(s,e){p(s,t,e)},d(s){s&&i(t)}}}function w(s){let t;return{c(){t=x("Toggle")},l(s){t=h(s,"Toggle")},m(s,e){p(s,t,e)},d(s){s&&i(t)}}}function y(s){let t,e,x;const h=new v({props:{visible:s[0],closable:!0,$$slots:{default:[j]},$$scope:{ctx:s}}});h.$on("close",s[2]);const y=new b({props:{size:"small",$$slots:{default:[w]},$$scope:{ctx:s}}});return y.$on("click",s[1]),{c(){a(h.$$.fragment),t=n(),e=o("div"),a(y.$$.fragment),this.h()},l(s){$(h.$$.fragment,s),t=r(s),e=c(s,"DIV",{style:!0});var a=l(e);$(y.$$.fragment,a),a.forEach(i),this.h()},h(){f(e,"margin-top","15px")},m(s,a){m(h,s,a),p(s,t,a),p(s,e,a),m(y,e,null),x=!0},p(s,[t]){const e={};1&t&&(e.visible=s[0]),8&t&&(e.$$scope={dirty:t,ctx:s}),h.$set(e);const a={};8&t&&(a.$$scope={dirty:t,ctx:s}),y.$set(a)},i(s){x||(d(h.$$.fragment,s),d(y.$$.fragment,s),x=!0)},o(s){g(h.$$.fragment,s),g(y.$$.fragment,s),x=!1},d(s){u(h,s),s&&i(t),s&&i(e),u(y)}}}function T(s,t,e){let a=!0;return[a,()=>{e(0,a=!a)},()=>{e(0,a=!1)}]}export default class extends s{constructor(s){super(),t(this,s,T,y,e,{})}}
