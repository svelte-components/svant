import{_ as n,a as t,i as r,s as c,b as s,S as e,J as a,c as o,K as i,f,L as u,l as $,x as l,A as m,B as p,N as g,d,o as v,p as h,t as x,j as y}from"./client.b66d7d89.js";import{B as w,m as R}from"./index.22aa12a9.js";function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function j(n){var t;return{c:function(){t=x("Success")},l:function(n){t=y(n,"Success")},m:function(n,r){$(n,t,r)},d:function(n){n&&d(t)}}}function k(n){var t;return{c:function(){t=x("Error")},l:function(n){t=y(n,"Error")},m:function(n,r){$(n,t,r)},d:function(n){n&&d(t)}}}function T(n){var t;return{c:function(){t=x("Warning")},l:function(n){t=y(n,"Warning")},m:function(n,r){$(n,t,r)},d:function(n){n&&d(t)}}}function b(n){var t,r,c,s=new w({props:{$$slots:{default:[j]},$$scope:{ctx:n}}});s.$on("click",n[0]);var e=new w({props:{$$slots:{default:[k]},$$scope:{ctx:n}}});e.$on("click",n[1]);var v=new w({props:{$$slots:{default:[T]},$$scope:{ctx:n}}});return v.$on("click",n[2]),{c:function(){a(s.$$.fragment),t=o(),a(e.$$.fragment),r=o(),a(v.$$.fragment)},l:function(n){i(s.$$.fragment,n),t=f(n),i(e.$$.fragment,n),r=f(n),i(v.$$.fragment,n)},m:function(n,a){u(s,n,a),$(n,t,a),u(e,n,a),$(n,r,a),u(v,n,a),c=!0},p:function(n,t){var r=l(t,1)[0],c={};8&r&&(c.$$scope={dirty:r,ctx:n}),s.$set(c);var a={};8&r&&(a.$$scope={dirty:r,ctx:n}),e.$set(a);var o={};8&r&&(o.$$scope={dirty:r,ctx:n}),v.$set(o)},i:function(n){c||(m(s.$$.fragment,n),m(e.$$.fragment,n),m(v.$$.fragment,n),c=!0)},o:function(n){p(s.$$.fragment,n),p(e.$$.fragment,n),p(v.$$.fragment,n),c=!1},d:function(n){g(s,n),n&&d(t),g(e,n),n&&d(r),g(v,n)}}}function B(n){return[function(){R.success("This is a success message")},function(){R.error("This is an error message")},function(){R.warning("This is a warning message")}]}var D=function(a){n(f,e);var o,i=(o=f,function(){var n,t=v(o);if(S()){var r=v(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return h(this,n)});function f(n){var e;return t(this,f),e=i.call(this),r(s(e),n,B,b,c,{}),e}return f}();export default D;
