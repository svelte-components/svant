import{_ as t,a as n,i as o,s as i,b as e,S as c,J as s,K as a,L as r,x as f,A as u,B as l,N as p,o as m,p as h,t as $,j as d,l as y,d as x}from"./client.b66d7d89.js";import{B as v,n as b,m as g}from"./index.22aa12a9.js";function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function R(t){var n;return{c:function(){n=$("Open the notification box")},l:function(t){n=d(t,"Open the notification box")},m:function(t,o){y(t,n,o)},d:function(t){t&&x(n)}}}function C(t){var n,o=new v({props:{type:"primary",$$slots:{default:[R]},$$scope:{ctx:t}}});return o.$on("click",t[0]),{c:function(){s(o.$$.fragment)},l:function(t){a(o.$$.fragment,t)},m:function(t,i){r(o,t,i),n=!0},p:function(t,n){var i=f(n,1)[0],e={};2&i&&(e.$$scope={dirty:i,ctx:t}),o.$set(e)},i:function(t){n||(u(o.$$.fragment,t),n=!0)},o:function(t){l(o.$$.fragment,t),n=!1},d:function(t){p(o,t)}}}function T(t){return[function(){b.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",key:"custom_key",onClose:function(){g.info("Notification closed")},button:{type:"primary",size:"small",text:"Confirm",onClick:function(){g.info("Close button clicked!"),b.close("custom_key")}}})}]}var j=function(s){t(f,c);var a,r=(a=f,function(){var t,n=m(a);if(k()){var o=m(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)});function f(t){var c;return n(this,f),c=r.call(this),o(e(c),t,T,C,i,{}),c}return f}();export default j;
