import{_ as t,a as n,i as e,s as r,b as c,S as s,J as o,c as a,K as i,f as u,L as f,l as p,x as l,A as $,B as d,N as m,d as g,o as v,p as y,t as h,j as x}from"./client.61bc4cd9.js";import{B as R,m as w}from"./index.bc006dd2.js";function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function j(t){var n;return{c:function(){n=h("Customized display duration")},l:function(t){n=x(t,"Customized display duration")},m:function(t,e){p(t,n,e)},d:function(t){t&&g(n)}}}function k(t){var n;return{c:function(){n=h("Open never closing message")},l:function(t){n=x(t,"Open never closing message")},m:function(t,e){p(t,n,e)},d:function(t){t&&g(n)}}}function z(t){var n,e,r=new R({props:{type:"primary",$$slots:{default:[j]},$$scope:{ctx:t}}});r.$on("click",t[0]);var c=new R({props:{type:"primary",$$slots:{default:[k]},$$scope:{ctx:t}}});return c.$on("click",t[1]),{c:function(){o(r.$$.fragment),n=a(),o(c.$$.fragment)},l:function(t){i(r.$$.fragment,t),n=u(t),i(c.$$.fragment,t)},m:function(t,s){f(r,t,s),p(t,n,s),f(c,t,s),e=!0},p:function(t,n){var e=l(n,1)[0],s={};4&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s);var o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i:function(t){e||($(r.$$.fragment,t),$(c.$$.fragment,t),e=!0)},o:function(t){d(r.$$.fragment,t),d(c.$$.fragment,t),e=!1},d:function(t){m(r,t),t&&g(n),m(c,t)}}}function B(t){return[function(){w.success({content:"This is a prompt message for success, and it will disappear in 1 second",duration:1e3})},function(){w.info({content:"This is a prompt that will never close",duration:0})}]}var C=function(o){t(u,s);var a,i=(a=u,function(){var t,n=v(a);if(b()){var e=v(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return y(this,t)});function u(t){var s;return n(this,u),s=i.call(this),e(c(s),t,B,z,r,{}),s}return u}();export default C;
