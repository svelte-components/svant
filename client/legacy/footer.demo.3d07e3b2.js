import{_ as t,a as n,i as o,s as c,b as e,S as r,J as a,c as f,K as i,f as s,L as u,l as $,x as l,A as m,B as p,N as d,d as v,o as h,p as g,t as S,j as y,e as x,g as b,h as P,k as R,m as w,n as E}from"./client.61bc4cd9.js";import{B as k,M as j}from"./index.bc006dd2.js";function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function z(t){var n;return{c:function(){n=S("Open Modal with customized footer")},l:function(t){n=y(t,"Open Modal with customized footer")},m:function(t,o){$(t,n,o)},d:function(t){t&&v(n)}}}function A(t){var n;return{c:function(){n=S("Return")},l:function(t){n=y(t,"Return")},m:function(t,o){$(t,n,o)},d:function(t){t&&v(n)}}}function B(t){var n;return{c:function(){n=S("Submit")},l:function(t){n=y(t,"Submit")},m:function(t,o){$(t,n,o)},d:function(t){t&&v(n)}}}function D(t){var n,o,c,e=new k({props:{$$slots:{default:[A]},$$scope:{ctx:t}}});e.$on("click",t[2]);var r=new k({props:{type:"primary",$$slots:{default:[B]},$$scope:{ctx:t}}});return r.$on("click",t[2]),{c:function(){n=x("span"),a(e.$$.fragment),o=f(),a(r.$$.fragment),this.h()},l:function(t){n=b(t,"SPAN",{slot:!0});var c=P(n);i(e.$$.fragment,c),o=s(c),i(r.$$.fragment,c),c.forEach(v),this.h()},h:function(){R(n,"slot","footer")},m:function(t,a){$(t,n,a),u(e,n,null),w(n,o),u(r,n,null),c=!0},p:function(t,n){var o={};8&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);var c={};8&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c)},i:function(t){c||(m(e.$$.fragment,t),m(r.$$.fragment,t),c=!0)},o:function(t){p(e.$$.fragment,t),p(r.$$.fragment,t),c=!1},d:function(t){t&&v(n),d(e),d(r)}}}function N(t){var n,o,c,e,r,a,i,u,l,m,p,d,h,g,R;return{c:function(){n=x("p"),o=S("Some contents..."),c=f(),e=x("p"),r=S("Some contents..."),a=f(),i=x("p"),u=S("Some contents..."),l=f(),m=x("p"),p=S("Some contents..."),d=f(),h=x("p"),g=S("Some contents..."),R=f()},l:function(t){n=b(t,"P",{});var f=P(n);o=y(f,"Some contents..."),f.forEach(v),c=s(t),e=b(t,"P",{});var $=P(e);r=y($,"Some contents..."),$.forEach(v),a=s(t),i=b(t,"P",{});var S=P(i);u=y(S,"Some contents..."),S.forEach(v),l=s(t),m=b(t,"P",{});var x=P(m);p=y(x,"Some contents..."),x.forEach(v),d=s(t),h=b(t,"P",{});var w=P(h);g=y(w,"Some contents..."),w.forEach(v),R=s(t)},m:function(t,f){$(t,n,f),w(n,o),$(t,c,f),$(t,e,f),w(e,r),$(t,a,f),$(t,i,f),w(i,u),$(t,l,f),$(t,m,f),w(m,p),$(t,d,f),$(t,h,f),w(h,g),$(t,R,f)},p:E,i:E,o:E,d:function(t){t&&v(n),t&&v(c),t&&v(e),t&&v(a),t&&v(i),t&&v(l),t&&v(m),t&&v(d),t&&v(h),t&&v(R)}}}function O(t){var n,o,c=new k({props:{type:"primary",$$slots:{default:[z]},$$scope:{ctx:t}}});c.$on("click",t[1]);var e=new j({props:{visible:t[0],title:"Title",$$slots:{default:[N],footer:[D]},$$scope:{ctx:t}}});return e.$on("ok",t[2]),e.$on("cancel",t[2]),{c:function(){a(c.$$.fragment),n=f(),a(e.$$.fragment)},l:function(t){i(c.$$.fragment,t),n=s(t),i(e.$$.fragment,t)},m:function(t,r){u(c,t,r),$(t,n,r),u(e,t,r),o=!0},p:function(t,n){var o=l(n,1)[0],r={};8&o&&(r.$$scope={dirty:o,ctx:t}),c.$set(r);var a={};1&o&&(a.visible=t[0]),8&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){o||(m(c.$$.fragment,t),m(e.$$.fragment,t),o=!0)},o:function(t){p(c.$$.fragment,t),p(e.$$.fragment,t),o=!1},d:function(t){d(c,t),t&&v(n),d(e,t)}}}function J(t,n,o){var c=!1;return[c,function(){o(0,c=!0)},function(){o(0,c=!1)}]}var K=function(a){t(s,r);var f,i=(f=s,function(){var t,n=h(f);if(M()){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return g(this,t)});function s(t){var r;return n(this,s),r=i.call(this),o(e(r),t,J,O,c,{}),r}return s}();export default K;
