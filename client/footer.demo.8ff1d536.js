import{S as t,i as e,s as n,C as o,a as s,D as c,c as r,E as $,j as a,v as f,w as m,G as i,d as l,t as p,g as u,e as d,b as g,f as h,h as S,k as x,n as v}from"./client.7d5f28db.js";import{B as y,M as w}from"./index.9f1e07e4.js";function E(t){let e;return{c(){e=p("Open Modal with customized footer")},l(t){e=u(t,"Open Modal with customized footer")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function b(t){let e;return{c(){e=p("Return")},l(t){e=u(t,"Return")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function P(t){let e;return{c(){e=p("Submit")},l(t){e=u(t,"Submit")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function k(t){let e,n,p;const u=new y({props:{$$slots:{default:[b]},$$scope:{ctx:t}}});u.$on("click",t[2]);const v=new y({props:{type:"primary",$$slots:{default:[P]},$$scope:{ctx:t}}});return v.$on("click",t[2]),{c(){e=d("span"),o(u.$$.fragment),n=s(),o(v.$$.fragment),this.h()},l(t){e=g(t,"SPAN",{slot:!0});var o=h(e);c(u.$$.fragment,o),n=r(o),c(v.$$.fragment,o),o.forEach(l),this.h()},h(){S(e,"slot","footer")},m(t,o){a(t,e,o),$(u,e,null),x(e,n),$(v,e,null),p=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),u.$set(n);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),v.$set(o)},i(t){p||(f(u.$$.fragment,t),f(v.$$.fragment,t),p=!0)},o(t){m(u.$$.fragment,t),m(v.$$.fragment,t),p=!1},d(t){t&&l(e),i(u),i(v)}}}function j(t){let e,n,o,c,$,f,m,i,S,y,w,E,b,P,k;return{c(){e=d("p"),n=p("Some contents..."),o=s(),c=d("p"),$=p("Some contents..."),f=s(),m=d("p"),i=p("Some contents..."),S=s(),y=d("p"),w=p("Some contents..."),E=s(),b=d("p"),P=p("Some contents..."),k=s()},l(t){e=g(t,"P",{});var s=h(e);n=u(s,"Some contents..."),s.forEach(l),o=r(t),c=g(t,"P",{});var a=h(c);$=u(a,"Some contents..."),a.forEach(l),f=r(t),m=g(t,"P",{});var p=h(m);i=u(p,"Some contents..."),p.forEach(l),S=r(t),y=g(t,"P",{});var d=h(y);w=u(d,"Some contents..."),d.forEach(l),E=r(t),b=g(t,"P",{});var x=h(b);P=u(x,"Some contents..."),x.forEach(l),k=r(t)},m(t,s){a(t,e,s),x(e,n),a(t,o,s),a(t,c,s),x(c,$),a(t,f,s),a(t,m,s),x(m,i),a(t,S,s),a(t,y,s),x(y,w),a(t,E,s),a(t,b,s),x(b,P),a(t,k,s)},p:v,i:v,o:v,d(t){t&&l(e),t&&l(o),t&&l(c),t&&l(f),t&&l(m),t&&l(S),t&&l(y),t&&l(E),t&&l(b),t&&l(k)}}}function M(t){let e,n;const p=new y({props:{type:"primary",$$slots:{default:[E]},$$scope:{ctx:t}}});p.$on("click",t[1]);const u=new w({props:{visible:t[0],title:"Title",$$slots:{default:[j],footer:[k]},$$scope:{ctx:t}}});return u.$on("ok",t[2]),u.$on("cancel",t[2]),{c(){o(p.$$.fragment),e=s(),o(u.$$.fragment)},l(t){c(p.$$.fragment,t),e=r(t),c(u.$$.fragment,t)},m(t,o){$(p,t,o),a(t,e,o),$(u,t,o),n=!0},p(t,[e]){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),p.$set(n);const o={};1&e&&(o.visible=t[0]),8&e&&(o.$$scope={dirty:e,ctx:t}),u.$set(o)},i(t){n||(f(p.$$.fragment,t),f(u.$$.fragment,t),n=!0)},o(t){m(p.$$.fragment,t),m(u.$$.fragment,t),n=!1},d(t){i(p,t),t&&l(e),i(u,t)}}}function z(t,e,n){let o=!1;return[o,function(){n(0,o=!0)},function(){n(0,o=!1)}]}export default class extends t{constructor(t){super(),e(this,t,z,M,n,{})}}
