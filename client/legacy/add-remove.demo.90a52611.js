import{_ as n,a as t,i as r,s as a,b as e,S as o,a8 as c,J as i,K as f,l as u,L as s,A as l,B as $,d as p,N as d,c as v,f as m,x as g,ax as h,O as y,o as b,p as w,M as x,aK as T,t as N,j as R,F as j,E as k,aO as S,aP as A,bh as D,a_ as K,a$ as M,bi as O}from"./client.b66d7d89.js";import{T as P,I as _}from"./index.22aa12a9.js";function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function B(n,t,r){var a=n.slice();return a[8]=t[r],a[10]=r,a}function E(n){var t,r=n[8].label+"";return{c:function(){t=N(r)},l:function(n){t=R(n,r)},m:function(n,r){u(n,t,r)},p:function(n,a){1&a&&r!==(r=n[8].label+"")&&j(t,r)},d:function(n){n&&p(t)}}}function F(n,t){var r,a;var e=new P({props:{closable:!0,$$slots:{default:[E]},$$scope:{ctx:t}}});return e.$on("close",(function(){for(var n,r=arguments.length,a=new Array(r),e=0;e<r;e++)a[e]=arguments[e];return(n=t)[6].apply(n,[t[8]].concat(a))})),{key:n,first:null,c:function(){r=c(),i(e.$$.fragment),this.h()},l:function(n){r=c(),f(e.$$.fragment,n),this.h()},h:function(){this.first=r},m:function(n,t){u(n,r,t),s(e,n,t),a=!0},p:function(n,r){t=n;var a={};2049&r&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i:function(n){a||(l(e.$$.fragment,n),a=!0)},o:function(n){$(e.$$.fragment,n),a=!1},d:function(n){n&&p(r),d(e,n)}}}function I(n){var t,r;function a(t){n[7].call(null,t)}var e={class:"demo-site-add-tag-input"};void 0!==n[2]&&(e.value=n[2]);var o=new _({props:e});return k.push((function(){return S(o,"value",a)})),o.$on("enter",n[3]),{c:function(){i(o.$$.fragment)},l:function(n){f(o.$$.fragment,n)},m:function(n,t){s(o,n,t),r=!0},p:function(n,r){var a={};!t&&4&r&&(t=!0,a.value=n[2],A((function(){return t=!1}))),o.$set(a)},i:function(n){r||(l(o.$$.fragment,n),r=!0)},o:function(n){$(o.$$.fragment,n),r=!1},d:function(n){d(o,n)}}}function J(n){var t,r=new P({props:{class:"demo-site-add-tag",disableTransition:!0,$$slots:{default:[L]},$$scope:{ctx:n}}});return r.$on("click",n[5]),{c:function(){i(r.$$.fragment)},l:function(n){f(r.$$.fragment,n)},m:function(n,a){s(r,n,a),t=!0},p:function(n,t){var a={};2048&t&&(a.$$scope={dirty:t,ctx:n}),r.$set(a)},i:function(n){t||(l(r.$$.fragment,n),t=!0)},o:function(n){$(r.$$.fragment,n),t=!1},d:function(n){d(r,n)}}}function L(n){var t,r,a=new D({});return{c:function(){i(a.$$.fragment),t=N("\n    New Tag")},l:function(n){f(a.$$.fragment,n),t=R(n,"\n    New Tag")},m:function(n,e){s(a,n,e),u(n,t,e),r=!0},i:function(n){r||(l(a.$$.fragment,n),r=!0)},o:function(n){$(a.$$.fragment,n),r=!1},d:function(n){d(a,n),n&&p(t)}}}function z(n){for(var t,r,a,e,o,i=[],f=new Map,s=n[0],d=function(n){return n[8].id},b=0;b<s.length;b+=1){var w=B(n,s,b),N=d(w);f.set(N,i[b]=F(N,w))}var R=[J,I],j=[];function k(n,t){return n[1]?1:0}return r=k(n),a=j[r]=R[r](n),{c:function(){for(var n=0;n<i.length;n+=1)i[n].c();t=v(),a.c(),e=c()},l:function(n){for(var r=0;r<i.length;r+=1)i[r].l(n);t=m(n),a.l(n),e=c()},m:function(n,a){for(var c=0;c<i.length;c+=1)i[c].m(n,a);u(n,t,a),j[r].m(n,a),u(n,e,a),o=!0},p:function(n,o){var c=g(o,1)[0];if(17&c){var u=n[0];x(),i=h(i,c,d,1,n,u,f,t.parentNode,T,F,t,B),y()}var s=r;(r=k(n))===s?j[r].p(n,c):(x(),$(j[s],1,1,(function(){j[s]=null})),y(),(a=j[r])||(a=j[r]=R[r](n)).c(),l(a,1),a.m(e.parentNode,e))},i:function(n){if(!o){for(var t=0;t<s.length;t+=1)l(i[t]);l(a),o=!0}},o:function(n){for(var t=0;t<i.length;t+=1)$(i[t]);$(a),o=!1},d:function(n){for(var a=0;a<i.length;a+=1)i[a].d(n);n&&p(t),j[r].d(n),n&&p(e)}}}function C(n,t,r){var a=[{label:"Tag one",id:1},{label:"Tag two",id:2}],e=!1,o="",c=function(n){r(0,a=a.filter((function(t){return t.id!==n.id})))},i=function(){var n=K(M.mark((function n(){return M.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(1,e=!0),n.next=3,O();case 3:document.querySelector(".ant-input").focus();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return[a,e,o,function(){r(1,e=!1),r(0,a[a.length]={label:o,id:a.length+1},a),r(2,o="")},c,i,function(n){return c(n.id)},function(n){r(2,o=n)}]}var G=function(c){n(u,o);var i,f=(i=u,function(){var n,t=b(i);if(q()){var r=b(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return w(this,n)});function u(n){var o;return t(this,u),o=f.call(this),r(e(o),n,C,z,a,{}),o}return u}();export default G;
