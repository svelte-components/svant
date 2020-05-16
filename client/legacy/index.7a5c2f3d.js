import{_ as t,a as n,i as e,s as r,b as o,S as a,C as c,e as s,t as i,c as u,J as f,g as p,h as l,j as h,d,f as m,K as v,l as $,m as g,L as y,x as I,ai as E,aj as D,A as x,B as R,N as P,o as b,p as j,k as w,q as B,n as A}from"./client.b66d7d89.js";import{E as C,D as S}from"./DocsTable.3fff4f31.js";import"./index.22aa12a9.js";import H from"./basic.demo.eeaaa178.js";function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t){var n,e;return{c:function(){n=s("p"),e=i("Basic description of the Input component goes here"),this.h()},l:function(t){n=p(t,"P",{slot:!0});var r=l(n);e=h(r,"Basic description of the Input component goes here"),r.forEach(d),this.h()},h:function(){w(n,"slot","description")},m:function(t,r){$(t,n,r),g(n,e)},d:function(t){t&&d(n)}}}function W(t){for(var n,e,r,o,a,b,j,w,B,A,k,W,q,J,K=new C({props:{id:"input-demo-basic",title:"Basic",demoComponent:H,demoCode:'<div style="width: 50%; min-width: 230px;">\n  <Input\n    placeholder="Basic usage"\n    bind:value\n    on:input="{onInput}"\n    on:enter="{onEnter}" />\n</div>\n\n<script>\n  import { Input } from "svant";\n\n  let value = "";\n\n  const onInput = () => {\n    console.log("Current value is:", value);\n  };\n\n  const onEnter = () => {\n    console.log("Enter pressed, the value is:", value);\n  };\n<\/script>\n',$$slots:{description:[T]},$$scope:{ctx:t}}}),L=[t[0]],N={},V=0;V<L.length;V+=1)N=c(N,L[V]);var _=new S({props:N});return{c:function(){n=s("h1"),e=i("WIP Input"),r=u(),o=s("p"),a=i("Description of the Input's function."),b=u(),j=s("h2"),w=i("Examples"),B=u(),f(K.$$.fragment),A=u(),k=s("h2"),W=i("API"),q=u(),f(_.$$.fragment)},l:function(t){n=p(t,"H1",{});var c=l(n);e=h(c,"WIP Input"),c.forEach(d),r=m(t),o=p(t,"P",{});var s=l(o);a=h(s,"Description of the Input's function."),s.forEach(d),b=m(t),j=p(t,"H2",{});var i=l(j);w=h(i,"Examples"),i.forEach(d),B=m(t),v(K.$$.fragment,t),A=m(t),k=p(t,"H2",{});var u=l(k);W=h(u,"API"),u.forEach(d),q=m(t),v(_.$$.fragment,t)},m:function(t,c){$(t,n,c),g(n,e),$(t,r,c),$(t,o,c),g(o,a),$(t,b,c),$(t,j,c),g(j,w),$(t,B,c),y(K,t,c),$(t,A,c),$(t,k,c),g(k,W),$(t,q,c),y(_,t,c),J=!0},p:function(t,n){var e=I(n,1)[0],r={};2&e&&(r.$$scope={dirty:e,ctx:t}),K.$set(r);var o=1&e?E(L,[D(t[0])]):{};_.$set(o)},i:function(t){J||(x(K.$$.fragment,t),x(_.$$.fragment,t),J=!0)},o:function(t){R(K.$$.fragment,t),R(_.$$.fragment,t),J=!1},d:function(t){t&&d(n),t&&d(r),t&&d(o),t&&d(b),t&&d(j),t&&d(B),P(K,t),t&&d(A),t&&d(k),t&&d(q),P(_,t)}}}function q(t){return[{title:"Attributes",columns:["Property","Description","Type","Default"],data:[{property:"test",description:"test description",type:"String",default:"test"}]}]}var J=function(c){t(u,a);var s,i=(s=u,function(){var t,n=b(s);if(k()){var e=b(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return j(this,t)});function u(t){var a;return n(this,u),a=i.call(this),e(o(a),t,q,W,r,{}),a}return u}();function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t){var n,e,r,o=new J({});return{c:function(){n=u(),e=s("div"),f(o.$$.fragment),this.h()},l:function(t){B('[data-svelte="svelte-1egdvf9"]',document.head).forEach(d),n=m(t),e=p(t,"DIV",{class:!0});var r=l(e);v(o.$$.fragment,r),r.forEach(d),this.h()},h:function(){document.title="Input",w(e,"class","markdown api-container")},m:function(t,a){$(t,n,a),$(t,e,a),y(o,e,null),r=!0},p:A,i:function(t){r||(x(o.$$.fragment,t),r=!0)},o:function(t){R(o.$$.fragment,t),r=!1},d:function(t){t&&d(n),t&&d(e),P(o)}}}var N=function(c){t(u,a);var s,i=(s=u,function(){var t,n=b(s);if(K()){var e=b(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return j(this,t)});function u(t){var a;return n(this,u),a=i.call(this),e(o(a),t,null,L,r,{}),a}return u}();export default N;
