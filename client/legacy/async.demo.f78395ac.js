import{_ as t,a as n,i as o,s as c,b as e,S as a,W as r,c as i,Y as s,f,Z as u,l,x as $,A as p,B as m,$ as d,d as g,o as v,p as h,t as y,j as b,e as x,g as w,h as R,m as j,F as C}from"./client.79853e4c.js";import{b as M,M as T}from"./index.5100c5bb.js";function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function D(t){var n;return{c:function(){n=y("Open Modal with async logic")},l:function(t){n=b(t,"Open Modal with async logic")},m:function(t,o){l(t,n,o)},d:function(t){t&&g(n)}}}function L(t){var n,o;return{c:function(){n=x("p"),o=y(t[1])},l:function(c){n=w(c,"P",{});var e=R(n);o=b(e,t[1]),e.forEach(g)},m:function(t,c){l(t,n,c),j(n,o)},p:function(t,n){2&n&&C(o,t[1])},d:function(t){t&&g(n)}}}function O(t){var n,o,c=new M({props:{type:"primary",$$slots:{default:[D]},$$scope:{ctx:t}}});c.$on("click",t[3]);var e=new T({props:{title:"Title",visible:t[0],confirmLoading:t[2],$$slots:{default:[L]},$$scope:{ctx:t}}});return e.$on("ok",t[4]),e.$on("cancel",t[5]),{c:function(){r(c.$$.fragment),n=i(),r(e.$$.fragment)},l:function(t){s(c.$$.fragment,t),n=f(t),s(e.$$.fragment,t)},m:function(t,a){u(c,t,a),l(t,n,a),u(e,t,a),o=!0},p:function(t,n){var o=$(n,1)[0],a={};64&o&&(a.$$scope={dirty:o,ctx:t}),c.$set(a);var r={};1&o&&(r.visible=t[0]),4&o&&(r.confirmLoading=t[2]),66&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i:function(t){o||(p(c.$$.fragment,t),p(e.$$.fragment,t),o=!0)},o:function(t){m(c.$$.fragment,t),m(e.$$.fragment,t),o=!1},d:function(t){d(c,t),t&&g(n),d(e,t)}}}function P(t,n,o){var c=!1,e="Content of the modal",a=!1;return[c,e,a,function(){o(0,c=!0)},function(){o(1,e="The modal will be closed after two seconds"),o(2,a=!0),setTimeout((function(){o(0,c=!1),o(2,a=!1),o(1,e="Content of the modal")}),2e3)},function(){console.log("Cancel button pressed"),o(0,c=!1)}]}var S=function(r){t(f,a);var i,s=(i=f,function(){var t,n=v(i);if(k()){var o=v(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)});function f(t){var a;return n(this,f),a=s.call(this),o(e(a),t,P,O,c,{}),a}return f}();export default S;