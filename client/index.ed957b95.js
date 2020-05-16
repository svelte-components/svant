import{S as t,i as n,s as e,x as s,e as o,t as a,a as r,C as i,b as c,f as p,g as l,d as u,c as d,D as f,j as m,k as h,E as $,a4 as g,a5 as v,v as I,w as E,G as x,h as D,q as b,n as w}from"./client.7c0f06b8.js";import{E as P,D as y}from"./DocsTable.92cad894.js";import"./index.dee613d5.js";import j from"./basic.demo.71df135c.js";function B(t){let n,e;return{c(){n=o("p"),e=a("Basic description of the Input component goes here"),this.h()},l(t){n=c(t,"P",{slot:!0});var s=p(n);e=l(s,"Basic description of the Input component goes here"),s.forEach(u),this.h()},h(){D(n,"slot","description")},m(t,s){m(t,n,s),h(n,e)},d(t){t&&u(n)}}}function C(t){let n,e,D,b,w,C,A,H,k,S,T,W,q,G;const V=new P({props:{id:"input-demo-basic",title:"Basic",demoComponent:j,demoCode:'<div style="width: 50%; min-width: 230px;">\n  <Input\n    placeholder="Basic usage"\n    bind:value\n    on:input="{onInput}"\n    on:enter="{onEnter}" />\n</div>\n\n<script>\n  import { Input } from "svant";\n\n  let value = "";\n\n  const onInput = () => {\n    console.log("Current value is:", value);\n  };\n\n  const onEnter = () => {\n    console.log("Enter pressed, the value is:", value);\n  };\n<\/script>\n',$$slots:{description:[B]},$$scope:{ctx:t}}}),z=[t[0]];let F={};for(let t=0;t<z.length;t+=1)F=s(F,z[t]);const J=new y({props:F});return{c(){n=o("h1"),e=a("WIP Input"),D=r(),b=o("p"),w=a("Description of the Input's function."),C=r(),A=o("h2"),H=a("Examples"),k=r(),i(V.$$.fragment),S=r(),T=o("h2"),W=a("API"),q=r(),i(J.$$.fragment)},l(t){n=c(t,"H1",{});var s=p(n);e=l(s,"WIP Input"),s.forEach(u),D=d(t),b=c(t,"P",{});var o=p(b);w=l(o,"Description of the Input's function."),o.forEach(u),C=d(t),A=c(t,"H2",{});var a=p(A);H=l(a,"Examples"),a.forEach(u),k=d(t),f(V.$$.fragment,t),S=d(t),T=c(t,"H2",{});var r=p(T);W=l(r,"API"),r.forEach(u),q=d(t),f(J.$$.fragment,t)},m(t,s){m(t,n,s),h(n,e),m(t,D,s),m(t,b,s),h(b,w),m(t,C,s),m(t,A,s),h(A,H),m(t,k,s),$(V,t,s),m(t,S,s),m(t,T,s),h(T,W),m(t,q,s),$(J,t,s),G=!0},p(t,[n]){const e={};2&n&&(e.$$scope={dirty:n,ctx:t}),V.$set(e);const s=1&n?g(z,[v(t[0])]):{};J.$set(s)},i(t){G||(I(V.$$.fragment,t),I(J.$$.fragment,t),G=!0)},o(t){E(V.$$.fragment,t),E(J.$$.fragment,t),G=!1},d(t){t&&u(n),t&&u(D),t&&u(b),t&&u(C),t&&u(A),t&&u(k),x(V,t),t&&u(S),t&&u(T),t&&u(q),x(J,t)}}}function A(t){return[{title:"Attributes",columns:["Property","Description","Type","Default"],data:[{property:"test",description:"test description",type:"String",default:"test"}]}]}class H extends t{constructor(t){super(),n(this,t,A,C,e,{})}}function k(t){let n,e,s;const a=new H({});return{c(){n=r(),e=o("div"),i(a.$$.fragment),this.h()},l(t){b('[data-svelte="svelte-1egdvf9"]',document.head).forEach(u),n=d(t),e=c(t,"DIV",{class:!0});var s=p(e);f(a.$$.fragment,s),s.forEach(u),this.h()},h(){document.title="Input",D(e,"class","markdown api-container")},m(t,o){m(t,n,o),m(t,e,o),$(a,e,null),s=!0},p:w,i(t){s||(I(a.$$.fragment,t),s=!0)},o(t){E(a.$$.fragment,t),s=!1},d(t){t&&u(n),t&&u(e),x(a)}}}export default class extends t{constructor(t){super(),n(this,t,null,k,e,{})}}
