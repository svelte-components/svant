import{S as t,i as e,s as $,C as s,a,D as n,c as r,E as c,j as o,v as f,w as l,G as m,d as p,t as i,g as d}from"./client.952a3b68.js";import{B as u}from"./index.1b788658.js";function g(t){let e;return{c(){e=i("Primary")},l(t){e=d(t,"Primary")},m(t,$){o(t,e,$)},d(t){t&&p(e)}}}function x(t){let e;return{c(){e=i("Default")},l(t){e=d(t,"Default")},m(t,$){o(t,e,$)},d(t){t&&p(e)}}}function y(t){let e;return{c(){e=i("Dashed")},l(t){e=d(t,"Dashed")},m(t,$){o(t,e,$)},d(t){t&&p(e)}}}function k(t){let e;return{c(){e=i("Link")},l(t){e=d(t,"Link")},m(t,$){o(t,e,$)},d(t){t&&p(e)}}}function b(t){let e,$,i,d;const b=new u({props:{type:"primary",block:!0,$$slots:{default:[g]},$$scope:{ctx:t}}}),w=new u({props:{block:!0,$$slots:{default:[x]},$$scope:{ctx:t}}}),D=new u({props:{type:"dashed",block:!0,$$slots:{default:[y]},$$scope:{ctx:t}}}),h=new u({props:{type:"link",block:!0,$$slots:{default:[k]},$$scope:{ctx:t}}});return{c(){s(b.$$.fragment),e=a(),s(w.$$.fragment),$=a(),s(D.$$.fragment),i=a(),s(h.$$.fragment)},l(t){n(b.$$.fragment,t),e=r(t),n(w.$$.fragment,t),$=r(t),n(D.$$.fragment,t),i=r(t),n(h.$$.fragment,t)},m(t,s){c(b,t,s),o(t,e,s),c(w,t,s),o(t,$,s),c(D,t,s),o(t,i,s),c(h,t,s),d=!0},p(t,[e]){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),b.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),w.$set(s);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),D.$set(a);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),h.$set(n)},i(t){d||(f(b.$$.fragment,t),f(w.$$.fragment,t),f(D.$$.fragment,t),f(h.$$.fragment,t),d=!0)},o(t){l(b.$$.fragment,t),l(w.$$.fragment,t),l(D.$$.fragment,t),l(h.$$.fragment,t),d=!1},d(t){m(b,t),t&&p(e),m(w,t),t&&p($),m(D,t),t&&p(i),m(h,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,b,$,{})}}