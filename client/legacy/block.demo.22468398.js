import{_ as t,a as n,i as r,s as c,b as e,S as a,J as o,c as f,K as s,f as i,L as u,l as $,x as l,A as p,B as m,N as d,d as g,o as y,p as v,t as x,j as h}from"./client.7a8941b7.js";import{B as k}from"./index.e54a054c.js";function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function D(t){var n;return{c:function(){n=x("Primary")},l:function(t){n=h(t,"Primary")},m:function(t,r){$(t,n,r)},d:function(t){t&&g(n)}}}function R(t){var n;return{c:function(){n=x("Default")},l:function(t){n=h(t,"Default")},m:function(t,r){$(t,n,r)},d:function(t){t&&g(n)}}}function w(t){var n;return{c:function(){n=x("Dashed")},l:function(t){n=h(t,"Dashed")},m:function(t,r){$(t,n,r)},d:function(t){t&&g(n)}}}function j(t){var n;return{c:function(){n=x("Link")},l:function(t){n=h(t,"Link")},m:function(t,r){$(t,n,r)},d:function(t){t&&g(n)}}}function L(t){var n,r,c,e,a=new k({props:{type:"primary",block:!0,$$slots:{default:[D]},$$scope:{ctx:t}}}),y=new k({props:{block:!0,$$slots:{default:[R]},$$scope:{ctx:t}}}),v=new k({props:{type:"dashed",block:!0,$$slots:{default:[w]},$$scope:{ctx:t}}}),x=new k({props:{type:"link",block:!0,$$slots:{default:[j]},$$scope:{ctx:t}}});return{c:function(){o(a.$$.fragment),n=f(),o(y.$$.fragment),r=f(),o(v.$$.fragment),c=f(),o(x.$$.fragment)},l:function(t){s(a.$$.fragment,t),n=i(t),s(y.$$.fragment,t),r=i(t),s(v.$$.fragment,t),c=i(t),s(x.$$.fragment,t)},m:function(t,o){u(a,t,o),$(t,n,o),u(y,t,o),$(t,r,o),u(v,t,o),$(t,c,o),u(x,t,o),e=!0},p:function(t,n){var r=l(n,1)[0],c={};1&r&&(c.$$scope={dirty:r,ctx:t}),a.$set(c);var e={};1&r&&(e.$$scope={dirty:r,ctx:t}),y.$set(e);var o={};1&r&&(o.$$scope={dirty:r,ctx:t}),v.$set(o);var f={};1&r&&(f.$$scope={dirty:r,ctx:t}),x.$set(f)},i:function(t){e||(p(a.$$.fragment,t),p(y.$$.fragment,t),p(v.$$.fragment,t),p(x.$$.fragment,t),e=!0)},o:function(t){m(a.$$.fragment,t),m(y.$$.fragment,t),m(v.$$.fragment,t),m(x.$$.fragment,t),e=!1},d:function(t){d(a,t),t&&g(n),d(y,t),t&&g(r),d(v,t),t&&g(c),d(x,t)}}}var P=function(o){t(i,a);var f,s=(f=i,function(){var t,n=y(f);if(b()){var r=y(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return v(this,t)});function i(t){var a;return n(this,i),a=s.call(this),r(e(a),t,null,L,c,{}),a}return i}();export default P;