import{S as e,i as t,s,C as a,D as n,E as o,v as r,w as $,G as c,a as f,c as i,j as l,d,e as p,t as m,b as u,f as g,g as h,k as y,n as x}from"./client.7c0f06b8.js";import{C as w,a as k,M as v}from"./index.dee613d5.js";function E(e){let t,s;return{c(){t=p("p"),s=m(e[1])},l(a){t=u(a,"P",{});var n=g(t);s=h(n,e[1]),n.forEach(d)},m(e,a){l(e,t,a),y(t,s)},p:x,d(e){e&&d(t)}}}function K(e){let t,s;return{c(){t=p("p"),s=m(e[1])},l(a){t=u(a,"P",{});var n=g(t);s=h(n,e[1]),n.forEach(d)},m(e,a){l(e,t,a),y(t,s)},p:x,d(e){e&&d(t)}}}function b(e){let t,s;return{c(){t=p("p"),s=m(e[1])},l(a){t=u(a,"P",{});var n=g(t);s=h(n,e[1]),n.forEach(d)},m(e,a){l(e,t,a),y(t,s)},p:x,d(e){e&&d(t)}}}function j(e){let t,s,p;const m=new k({props:{header:"This is panel header 1",key:"1",$$slots:{default:[E]},$$scope:{ctx:e}}}),u=new k({props:{header:"This is panel header 2",key:"2",$$slots:{default:[K]},$$scope:{ctx:e}}}),g=new k({props:{header:"This is panel header 3",key:"3",$$slots:{default:[b]},$$scope:{ctx:e}}});return{c(){a(m.$$.fragment),t=f(),a(u.$$.fragment),s=f(),a(g.$$.fragment)},l(e){n(m.$$.fragment,e),t=i(e),n(u.$$.fragment,e),s=i(e),n(g.$$.fragment,e)},m(e,a){o(m,e,a),l(e,t,a),o(u,e,a),l(e,s,a),o(g,e,a),p=!0},p(e,t){const s={};8&t&&(s.$$scope={dirty:t,ctx:e}),m.$set(s);const a={};8&t&&(a.$$scope={dirty:t,ctx:e}),u.$set(a);const n={};8&t&&(n.$$scope={dirty:t,ctx:e}),g.$set(n)},i(e){p||(r(m.$$.fragment,e),r(u.$$.fragment,e),r(g.$$.fragment,e),p=!0)},o(e){$(m.$$.fragment,e),$(u.$$.fragment,e),$(g.$$.fragment,e),p=!1},d(e){c(m,e),e&&d(t),c(u,e),e&&d(s),c(g,e)}}}function C(e){let t;const s=new w({props:{activeKey:e[0],$$slots:{default:[j]},$$scope:{ctx:e}}});return s.$on("click",e[2]),{c(){a(s.$$.fragment)},l(e){n(s.$$.fragment,e)},m(e,a){o(s,e,a),t=!0},p(e,[t]){const a={};1&t&&(a.activeKey=e[0]),8&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){t||(r(s.$$.fragment,e),t=!0)},o(e){$(s.$$.fragment,e),t=!1},d(e){c(s,e)}}}function P(e,t,s){let a=["1"];return[a,"\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  ",function({detail:e}){const{lastKeyClicked:t}=e,n=a.includes(t),o=`Are you sure you want to ${n?"close":"open"} this panel`;v.confirm({content:o,onOk:()=>{s(0,a=n?a.splice(a.indexOf(t),0):[...a,t])}})}]}export default class extends e{constructor(e){super(),t(this,e,P,C,s,{})}}
