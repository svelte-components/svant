import{_ as e,a,i as n,s as t,b as r,S as o,J as l,c as s,e as c,K as f,f as u,g as i,L as p,l as $,x as v,A as g,B as m,N as d,d as b,o as h,p as A}from"./client.1d17fe99.js";import{R}from"./index.67c0fe2a.js";function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function P(e){var a,n,t,r,o,h,A,y=new R({props:{options:e[2],value:e[0]}});y.$on("change",e[5]);var P=new R({props:{options:e[4],value:e[1]}});P.$on("change",e[6]);var x=new R({props:{options:e[3],disabled:!0,value:O}});return{c:function(){l(y.$$.fragment),a=s(),n=c("br"),t=s(),l(P.$$.fragment),r=s(),o=c("br"),h=s(),l(x.$$.fragment)},l:function(e){f(y.$$.fragment,e),a=u(e),n=i(e,"BR",{}),t=u(e),f(P.$$.fragment,e),r=u(e),o=i(e,"BR",{}),h=u(e),f(x.$$.fragment,e)},m:function(e,l){p(y,e,l),$(e,a,l),$(e,n,l),$(e,t,l),p(P,e,l),$(e,r,l),$(e,o,l),$(e,h,l),p(x,e,l),A=!0},p:function(e,a){var n=v(a,1)[0],t={};1&n&&(t.value=e[0]),y.$set(t);var r={};2&n&&(r.value=e[1]),P.$set(r)},i:function(e){A||(g(y.$$.fragment,e),g(P.$$.fragment,e),g(x.$$.fragment,e),A=!0)},o:function(e){m(y.$$.fragment,e),m(P.$$.fragment,e),m(x.$$.fragment,e),A=!1},d:function(e){d(y,e),e&&b(a),e&&b(n),e&&b(t),d(P,e),e&&b(r),e&&b(o),e&&b(h),d(x,e)}}}var O="Apple";function x(e,a,n){var t="Apple",r="Apple";return[t,r,["Apple","Pear","Orange"],[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],function(e){var a=e.detail;console.log("radio1 checked",a),n(0,t=a)},function(e){var a=e.detail;console.log("radio2 checked",a),n(1,r=a)}]}var w=function(l){e(f,o);var s,c=(s=f,function(){var e,a=h(s);if(y()){var n=h(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return A(this,e)});function f(e){var o;return a(this,f),o=c.call(this),n(r(o),e,x,P,t,{}),o}return f}();export default w;
