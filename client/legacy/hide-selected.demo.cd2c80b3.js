import{_ as n,a as t,i as a,s as e,b as r,S as u,J as o,K as i,L as f,x as l,A as c,B as s,N as v,o as p,p as $,E as h,aO as d,aP as m,a8 as g,l as b,d as y,M as x,ax as R,aK as w,O as N}from"./client.96304797.js";import{S as O,O as S}from"./index.6a9af403.js";function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function A(n,t,a){var e=n.slice();return e[4]=t[a],e}function B(n,t){var a,e,r=new S({props:{value:t[4].value,label:t[4].label}});return{key:n,first:null,c:function(){a=g(),o(r.$$.fragment),this.h()},l:function(n){a=g(),i(r.$$.fragment,n),this.h()},h:function(){this.first=a},m:function(n,t){b(n,a,t),f(r,n,t),e=!0},p:function(n,t){var a={};2&t&&(a.value=n[4].value),2&t&&(a.label=n[4].label),r.$set(a)},i:function(n){e||(c(r.$$.fragment,n),e=!0)},o:function(n){s(r.$$.fragment,n),e=!1},d:function(n){n&&y(a),v(r,n)}}}function D(n){for(var t,a,e=[],r=new Map,u=n[1],o=function(n){return n[4].value},i=0;i<u.length;i+=1){var f=A(n,u,i),l=o(f);r.set(l,e[i]=B(l,f))}return{c:function(){for(var n=0;n<e.length;n+=1)e[n].c();t=g()},l:function(n){for(var a=0;a<e.length;a+=1)e[a].l(n);t=g()},m:function(n,r){for(var u=0;u<e.length;u+=1)e[u].m(n,r);b(n,t,r),a=!0},p:function(n,a){if(2&a){var u=n[1];x(),e=R(e,a,o,1,n,u,r,t.parentNode,w,B,t,A),N()}},i:function(n){if(!a){for(var t=0;t<u.length;t+=1)c(e[t]);a=!0}},o:function(n){for(var t=0;t<e.length;t+=1)s(e[t]);a=!1},d:function(n){for(var a=0;a<e.length;a+=1)e[a].d(n);n&&y(t)}}}function K(n){var t,a;function e(t){n[3].call(null,t)}var r={mode:"multiple",style:{width:300},placeholder:"Inserted are removed",$$slots:{default:[D]},$$scope:{ctx:n}};void 0!==n[0]&&(r.value=n[0]);var u=new O({props:r});return h.push((function(){return d(u,"value",e)})),{c:function(){o(u.$$.fragment)},l:function(n){i(u.$$.fragment,n)},m:function(n,t){f(u,n,t),a=!0},p:function(n,a){var e=l(a,1)[0],r={};130&e&&(r.$$scope={dirty:e,ctx:n}),!t&&1&e&&(t=!0,r.value=n[0],m((function(){return t=!1}))),u.$set(r)},i:function(n){a||(c(u.$$.fragment,n),a=!0)},o:function(n){s(u.$$.fragment,n),a=!1},d:function(n){v(u,n)}}}function M(n,t,a){var e,r=[{label:"Apples",value:"apples"},{label:"Nails",value:"nails"},{label:"Bananas",value:"bananas"},{label:"Helicopters",value:"helicopters"}],u=[];return n.$$.update=function(){1&n.$$.dirty&&(u.length?a(1,e=r.filter((function(n){return!u.includes(n.value)}))):a(1,e=[].concat(r)))},[u,e,r,function(n){a(0,u=n)}]}var P=function(o){n(l,u);var i,f=(i=l,function(){var n,t=p(i);if(j()){var a=p(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return $(this,n)});function l(n){var u;return t(this,l),u=f.call(this),a(r(u),n,M,K,e,{}),u}return l}();export default P;
