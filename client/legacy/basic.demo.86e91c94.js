import{_ as t,a as n,i as e,s as a,b as c,S as r,J as o,c as s,K as f,f as i,L as u,l as $,x as l,A as p,B as m,N as d,d as g,o as v,p as h,t as x,j as y,e as T,g as b,h as w,k as R,m as k}from"./client.b66d7d89.js";import{T as j,m as C}from"./index.22aa12a9.js";function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function P(t){var n;return{c:function(){n=x("Tag 1")},l:function(t){n=y(t,"Tag 1")},m:function(t,e){$(t,n,e)},d:function(t){t&&g(n)}}}function A(t){var n,e;return{c:function(){n=T("a"),e=x("Link"),this.h()},l:function(t){n=b(t,"A",{href:!0});var a=w(n);e=y(a,"Link"),a.forEach(g),this.h()},h:function(){R(n,"href","https://svant.dev")},m:function(t,a){$(t,n,a),k(n,e)},d:function(t){t&&g(n)}}}function D(t){var n;return{c:function(){n=x("Tag 2")},l:function(t){n=y(t,"Tag 2")},m:function(t,e){$(t,n,e)},d:function(t){t&&g(n)}}}function S(t){var n;return{c:function(){n=x("Prevent Close")},l:function(t){n=y(t,"Prevent Close")},m:function(t,e){$(t,n,e)},d:function(t){t&&g(n)}}}function B(t){var n,e,a,c,r=new j({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),v=new j({props:{$$slots:{default:[A]},$$scope:{ctx:t}}}),h=new j({props:{closable:!0,$$slots:{default:[D]},$$scope:{ctx:t}}});h.$on("close",E);var x=new j({props:{closable:!0,$$slots:{default:[S]},$$scope:{ctx:t}}});return x.$on("close",J),{c:function(){o(r.$$.fragment),n=s(),o(v.$$.fragment),e=s(),o(h.$$.fragment),a=s(),o(x.$$.fragment)},l:function(t){f(r.$$.fragment,t),n=i(t),f(v.$$.fragment,t),e=i(t),f(h.$$.fragment,t),a=i(t),f(x.$$.fragment,t)},m:function(t,o){u(r,t,o),$(t,n,o),u(v,t,o),$(t,e,o),u(h,t,o),$(t,a,o),u(x,t,o),c=!0},p:function(t,n){var e=l(n,1)[0],a={};1&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a);var c={};1&e&&(c.$$scope={dirty:e,ctx:t}),v.$set(c);var o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);var s={};1&e&&(s.$$scope={dirty:e,ctx:t}),x.$set(s)},i:function(t){c||(p(r.$$.fragment,t),p(v.$$.fragment,t),p(h.$$.fragment,t),p(x.$$.fragment,t),c=!0)},o:function(t){m(r.$$.fragment,t),m(v.$$.fragment,t),m(h.$$.fragment,t),m(x.$$.fragment,t),c=!1},d:function(t){d(r,t),t&&g(n),d(v,t),t&&g(e),d(h,t),t&&g(a),d(x,t)}}}function E(){C.info("Tag 2 closed")}function J(t){t.detail.preventClose(),C.info("Tag 3 clicked but close was prevented")}var K=function(o){t(i,r);var s,f=(s=i,function(){var t,n=v(s);if(L()){var e=v(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return h(this,t)});function i(t){var r;return n(this,i),r=f.call(this),e(c(r),t,null,B,a,{}),r}return i}();export default K;
