import{_ as t,a as e,i as n,s as i,b as r,S as o,C as a,e as s,t as c,c as d,J as p,g as f,h as l,j as u,d as m,f as h,K as v,l as $,m as y,L as g,x as D,ai as b,aj as x,A as E,B as R,N as q,o as w,p as C,k as S,q as L,n as P}from"./client.7a8941b7.js";import{E as T,D as j}from"./DocsTable.48071af6.js";import"./index.e54a054c.js";import A from"./horizontal.demo.9cb0a4eb.js";import z from"./title.demo.54bf2037.js";import O from"./vertical.demo.5607fbc3.js";function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function H(t){var e,n,i,r,o;return{c:function(){e=s("p"),n=c("A simple example. The "),i=s("code"),r=c("Divider"),o=c(" is horizontal by default."),this.h()},l:function(t){e=f(t,"P",{slot:!0});var a=l(e);n=u(a,"A simple example. The "),i=f(a,"CODE",{});var s=l(i);r=u(s,"Divider"),s.forEach(m),o=u(a," is horizontal by default."),a.forEach(m),this.h()},h:function(){S(e,"slot","description")},m:function(t,a){$(t,e,a),y(e,n),y(e,i),y(i,r),y(e,o)},d:function(t){t&&m(e)}}}function B(t){var e,n,i,r,o,a,d,p;return{c:function(){e=s("p"),n=c("An inner title can be added using the "),i=s("code"),r=c("orientation"),o=c(" prop. The heading style can be removed with the "),a=s("code"),d=c("plain"),p=c(" prop."),this.h()},l:function(t){e=f(t,"P",{slot:!0});var s=l(e);n=u(s,"An inner title can be added using the "),i=f(s,"CODE",{});var c=l(i);r=u(c,"orientation"),c.forEach(m),o=u(s," prop. The heading style can be removed with the "),a=f(s,"CODE",{});var h=l(a);d=u(h,"plain"),h.forEach(m),p=u(s," prop."),s.forEach(m),this.h()},h:function(){S(e,"slot","description")},m:function(t,s){$(t,e,s),y(e,n),y(e,i),y(i,r),y(e,o),y(e,a),y(a,d),y(e,p)},d:function(t){t&&m(e)}}}function I(t){var e,n,i,r,o;return{c:function(){e=s("p"),n=c("A "),i=s("code"),r=c("Divider"),o=c(" can also be vertical."),this.h()},l:function(t){e=f(t,"P",{slot:!0});var a=l(e);n=u(a,"A "),i=f(a,"CODE",{});var s=l(i);r=u(s,"Divider"),s.forEach(m),o=u(a," can also be vertical."),a.forEach(m),this.h()},h:function(){S(e,"slot","description")},m:function(t,a){$(t,e,a),y(e,n),y(e,i),y(i,r),y(e,o)},d:function(t){t&&m(e)}}}function V(t){for(var e,n,i,r,o,w,C,S,L,P,k,V,J,K,M,N,W=new T({props:{id:"divider-demo-horizontal",title:"Horizontal",demoComponent:A,demoCode:'<div class="wrapper">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n  <Divider />\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n  <Divider dashed />\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n</div>\n\n<script>\n  import { Divider } from "svant";\n<\/script>\n\n<style>\n  .wrapper {\n    max-width: 450px;\n  }\n</style>\n',$$slots:{description:[H]},$$scope:{ctx:t}}}),_=new T({props:{id:"divider-demo-title",title:"Title",demoComponent:z,demoCode:'<div class="wrapper">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n  <Divider>Text</Divider>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n  <Divider orientation="left">Left Text</Divider>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n  <Divider orientation="right" plain>Plain Right Text</Divider>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo\n    modo.\n  </p>\n</div>\n\n<script>\n  import { Divider } from "svant";\n<\/script>\n\n<style>\n  .wrapper {\n    max-width: 450px;\n  }\n</style>\n',$$slots:{description:[B]},$$scope:{ctx:t}}}),F=new T({props:{id:"divider-demo-vertical",title:"Vertical",demoComponent:O,demoCode:'<span>Text</span>\n<Divider type="vertical" />\n<a href="/divider">Link</a>\n<Divider type="vertical" />\n<a href="/divider">Link</a>\n\n<script>\n  import { Divider } from "svant";\n<\/script>\n',$$slots:{description:[I]},$$scope:{ctx:t}}}),G=[t[0]],Q={},U=0;U<G.length;U+=1)Q=a(Q,G[U]);var X=new j({props:Q});return{c:function(){e=s("h1"),n=c("Divider"),i=d(),r=s("p"),o=c("Description of the Divider's function."),w=d(),C=s("h2"),S=c("Examples"),L=d(),p(W.$$.fragment),P=d(),p(_.$$.fragment),k=d(),p(F.$$.fragment),V=d(),J=s("h2"),K=c("API"),M=d(),p(X.$$.fragment)},l:function(t){e=f(t,"H1",{});var a=l(e);n=u(a,"Divider"),a.forEach(m),i=h(t),r=f(t,"P",{});var s=l(r);o=u(s,"Description of the Divider's function."),s.forEach(m),w=h(t),C=f(t,"H2",{});var c=l(C);S=u(c,"Examples"),c.forEach(m),L=h(t),v(W.$$.fragment,t),P=h(t),v(_.$$.fragment,t),k=h(t),v(F.$$.fragment,t),V=h(t),J=f(t,"H2",{});var d=l(J);K=u(d,"API"),d.forEach(m),M=h(t),v(X.$$.fragment,t)},m:function(t,a){$(t,e,a),y(e,n),$(t,i,a),$(t,r,a),y(r,o),$(t,w,a),$(t,C,a),y(C,S),$(t,L,a),g(W,t,a),$(t,P,a),g(_,t,a),$(t,k,a),g(F,t,a),$(t,V,a),$(t,J,a),y(J,K),$(t,M,a),g(X,t,a),N=!0},p:function(t,e){var n=D(e,1)[0],i={};2&n&&(i.$$scope={dirty:n,ctx:t}),W.$set(i);var r={};2&n&&(r.$$scope={dirty:n,ctx:t}),_.$set(r);var o={};2&n&&(o.$$scope={dirty:n,ctx:t}),F.$set(o);var a=1&n?b(G,[x(t[0])]):{};X.$set(a)},i:function(t){N||(E(W.$$.fragment,t),E(_.$$.fragment,t),E(F.$$.fragment,t),E(X.$$.fragment,t),N=!0)},o:function(t){R(W.$$.fragment,t),R(_.$$.fragment,t),R(F.$$.fragment,t),R(X.$$.fragment,t),N=!1},d:function(t){t&&m(e),t&&m(i),t&&m(r),t&&m(w),t&&m(C),t&&m(L),q(W,t),t&&m(P),q(_,t),t&&m(k),q(F,t),t&&m(V),t&&m(J),t&&m(M),q(X,t)}}}function J(t){return[{title:"Attributes",columns:["Property","Description","Type","Default"],data:[{property:"type",description:"Direction if the divider.",type:"horizontal | vertical",default:"horizontal"},{property:"dashed",description:"Whether the line is dashed.",type:"Boolean",default:"false"},{property:"orientation",description:"Position of the title inside the divider.",type:"left | right | center",default:"center"},{property:"plain",description:"Makes the title inside the divider is plain text instead of a heading.",type:"Boolean",default:"false"},{property:"class",description:"Custom class for the divider.",type:"String|Object",default:"-"},{property:"style",description:"Custom style of the divider.",type:"String|Object",default:"-"}]}]}var K=function(a){t(d,o);var s,c=(s=d,function(){var t,e=w(s);if(k()){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function d(t){var o;return e(this,d),o=c.call(this),n(r(o),t,J,V,i,{}),o}return d}();function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function N(t){var e,n,i,r=new K({});return{c:function(){e=d(),n=s("div"),p(r.$$.fragment),this.h()},l:function(t){L('[data-svelte="svelte-1uzq5c8"]',document.head).forEach(m),e=h(t),n=f(t,"DIV",{class:!0});var i=l(n);v(r.$$.fragment,i),i.forEach(m),this.h()},h:function(){document.title="Divider",S(n,"class","markdown api-container")},m:function(t,o){$(t,e,o),$(t,n,o),g(r,n,null),i=!0},p:P,i:function(t){i||(E(r.$$.fragment,t),i=!0)},o:function(t){R(r.$$.fragment,t),i=!1},d:function(t){t&&m(e),t&&m(n),q(r)}}}var W=function(a){t(d,o);var s,c=(s=d,function(){var t,e=w(s);if(M()){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function d(t){var o;return e(this,d),o=c.call(this),n(r(o),t,null,N,i,{}),o}return d}();export default W;