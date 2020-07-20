import{_ as e,a as n,i as t,s as o,b as c,S as a,C as r,e as i,t as s,c as l,J as p,g as h,h as f,j as d,d as u,f as m,K as $,l as g,m as b,L as k,x as v,ai as C,aj as x,A as y,B as D,N as w,o as A,p as E,k as P,q as B,n as G}from"./client.96304797.js";import{E as O,D as j}from"./DocsTable.001ca98e.js";import"./index.6a9af403.js";import R from"./basic.demo.f47f6d45.js";import S from"./disabled.demo.ef9833af.js";import L from"./controlled.demo.943fb78d.js";import T from"./group.demo.62d7fa15.js";import I from"./checkall.demo.3668c3c7.js";import N from"./groupslot.demo.632c301c.js";function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function U(e){var n,t;return{c:function(){n=i("p"),t=s("Basic usage of checkbox."),this.h()},l:function(e){n=h(e,"P",{slot:!0});var o=f(n);t=d(o,"Basic usage of checkbox."),o.forEach(u),this.h()},h:function(){P(n,"slot","description")},m:function(e,o){g(e,n,o),b(n,t)},d:function(e){e&&u(n)}}}function V(e){var n,t;return{c:function(){n=i("p"),t=s("Disabled checkbox."),this.h()},l:function(e){n=h(e,"P",{slot:!0});var o=f(n);t=d(o,"Disabled checkbox."),o.forEach(u),this.h()},h:function(){P(n,"slot","description")},m:function(e,o){g(e,n,o),b(n,t)},d:function(e){e&&u(n)}}}function W(e){var n,t;return{c:function(){n=i("p"),t=s("Communicated with other components."),this.h()},l:function(e){n=h(e,"P",{slot:!0});var o=f(n);t=d(o,"Communicated with other components."),o.forEach(u),this.h()},h:function(){P(n,"slot","description")},m:function(e,o){g(e,n,o),b(n,t)},d:function(e){e&&u(n)}}}function z(e){var n,t;return{c:function(){n=i("p"),t=s("Generate a group of checkboxes from an array."),this.h()},l:function(e){n=h(e,"P",{slot:!0});var o=f(n);t=d(o,"Generate a group of checkboxes from an array."),o.forEach(u),this.h()},h:function(){P(n,"slot","description")},m:function(e,o){g(e,n,o),b(n,t)},d:function(e){e&&u(n)}}}function q(e){var n,t,o,c,a;return{c:function(){n=i("p"),t=s("The "),o=i("code"),c=s("indeterminate"),a=s(" property can help you to achieve a 'check all' effect."),this.h()},l:function(e){n=h(e,"P",{slot:!0});var r=f(n);t=d(r,"The "),o=h(r,"CODE",{});var i=f(o);c=d(i,"indeterminate"),i.forEach(u),a=d(r," property can help you to achieve a 'check all' effect."),r.forEach(u),this.h()},h:function(){P(n,"slot","description")},m:function(e,r){g(e,n,r),b(n,t),b(n,o),b(o,c),b(n,a)},d:function(e){e&&u(n)}}}function F(e){var n,t;return{c:function(){n=i("p"),t=s("Instead of using the options attribute you can just provide the checkboxes in the slot"),this.h()},l:function(e){n=h(e,"P",{slot:!0});var o=f(n);t=d(o,"Instead of using the options attribute you can just provide the checkboxes in the slot"),o.forEach(u),this.h()},h:function(){P(n,"slot","description")},m:function(e,o){g(e,n,o),b(n,t)},d:function(e){e&&u(n)}}}function J(e){for(var n,t,o,c,a,A,E,P,B,G,H,J,K,_,M,Q,X,Y,Z,ee,ne=new O({props:{id:"demo-type",title:"Basic",demoComponent:R,demoCode:'<Checkbox bind:checked on:change="{onChange}">Checkbox</Checkbox>\n\n<script>\n  import { Checkbox } from "svant";\n\n  let checked = false;\n\n  function onChange() {\n    console.log(`checked = ${checked}`);\n  }\n<\/script>\n',$$slots:{description:[U]},$$scope:{ctx:e}}}),te=new O({props:{id:"demo-type",title:"Disabled",demoComponent:S,demoCode:'<div>\n  <Checkbox disabled />\n  <br />\n  <Checkbox bind:checked disabled />\n</div>\n\n<script>\n  import { Checkbox } from "svant";\n\n  let checked = true;\n<\/script>\n',$$slots:{description:[V]},$$scope:{ctx:e}}}),oe=new O({props:{id:"demo-type",title:"Controlled Checkbox",demoComponent:L,demoCode:'<div>\n  <p style="{{ marginBottom: \'20px\' }}">\n    <Checkbox bind:checked {disabled} on:change="{onChange}">{label}</Checkbox>\n  </p>\n  <p>\n    <Button type="primary" size="small" on:click="{toggleChecked}">\n      {!checked ? \'Check\' : \'Uncheck\'}\n    </Button>\n    <Button\n      style="{{ margin: \'0 10px\' }}"\n      type="primary"\n      size="small"\n      on:click="{toggleDisable}">\n      {!disabled ? \'Disable\' : \'Enable\'}\n    </Button>\n  </p>\n</div>\n\n<script>\n  import { Checkbox } from "svant";\n  import { Button } from "svant";\n  let checked = true;\n  let disabled = false;\n  let label;\n  $: label = `${checked ? "Checked" : "Unchecked"}-${\n    disabled ? "Disabled" : "Enabled"\n  }`;\n  function toggleChecked() {\n    checked = !checked;\n  }\n\n  function toggleDisable() {\n    disabled = !disabled;\n  }\n\n  function onChange() {\n    console.log("checked = ", checked);\n  }\n<\/script>\n',$$slots:{description:[W]},$$scope:{ctx:e}}}),ce=new O({props:{id:"demo-type",title:"Checkbox Group",demoComponent:T,demoCode:'<div>\n  <CheckboxGroup\n    options="{plainOptions}"\n    bind:value="{value1}"\n    on:change="{onChange}" />\n  <br />\n  <br />\n  <CheckboxGroup {options} bind:value="{value2}" on:change="{onChange}" />\n  <br />\n  <br />\n  <CheckboxGroup\n    options="{optionsWithDisabled}"\n    disabled\n    bind:value="{value3}"\n    on:change="{onChange}" />\n</div>\n\n<script>\n  import { CheckboxGroup } from "svant";\n\n  let value1 = ["Apple"];\n  let value2 = ["Pear"];\n  let value3 = ["Apple"];\n\n  const plainOptions = ["Apple", "Pear", "Orange"];\n  const options = [\n    { label: "Apple", value: "Apple" },\n    { label: "Pear", value: "Pear" },\n    { label: "Orange", value: "Orange", disabled: true }\n  ];\n  const optionsWithDisabled = [\n    { label: "Apple", value: "Apple" },\n    { label: "Pear", value: "Pear" },\n    { label: "Orange", value: "Orange" }\n  ];\n\n  function onChange({ detail: checkedValues }) {\n    console.log("checked = ", checkedValues);\n  }\n<\/script>\n',$$slots:{description:[z]},$$scope:{ctx:e}}}),ae=new O({props:{id:"demo-type",title:"Check all",demoComponent:I,demoCode:'<div>\n  <div className="site-checkbox-all-wrapper">\n    <Checkbox\n      {indeterminate}\n      on:change="{onCheckAllChange}"\n      checked="{checkAll}">\n      Check all\n    </Checkbox>\n  </div>\n  <br />\n  <CheckboxGroup\n    options="{plainOptions}"\n    bind:value="{checkedList}"\n    on:change="{onChange}" />\n</div>\n\n<script>\n  import { CheckboxGroup, Checkbox } from "svant";\n\n  const plainOptions = ["Apple", "Pear", "Orange"];\n  let checkedList = ["Apple", "Orange"];\n  let indeterminate = true;\n  let checkAll = false;\n\n  function onChange({ detail }) {\n    indeterminate =\n      checkedList.length && checkedList.length < plainOptions.length;\n    checkAll = checkedList.length === plainOptions.length;\n  }\n\n  function onCheckAllChange({ detail }) {\n    console.log(detail.target.checked);\n    checkedList = detail.target.checked ? plainOptions : [];\n    indeterminate = false;\n    checkAll = detail.target.checked;\n  }\n<\/script>\n',$$slots:{description:[q]},$$scope:{ctx:e}}}),re=new O({props:{id:"demo-type",title:"Checkbox Group With Slot",demoComponent:N,demoCode:'<CheckboxGroup bind:value style="{{ width: \'100%\' }}" on:change="{onChange}">\n  <Checkbox value="A">A</Checkbox>\n  <Checkbox value="B">B</Checkbox>\n  <Checkbox value="C">C</Checkbox>\n  <Checkbox value="D">D</Checkbox>\n  <Checkbox value="E">E</Checkbox>\n</CheckboxGroup>\n\n<script>\n  import { CheckboxGroup, Checkbox } from "svant";\n  let value = [];\n  function onChange() {\n    console.log("checked = ", value);\n  }\n<\/script>\n',$$slots:{description:[F]},$$scope:{ctx:e}}}),ie=[e[0]],se={},le=0;le<ie.length;le+=1)se=r(se,ie[le]);for(var pe=new j({props:se}),he=[e[1]],fe={},de=0;de<he.length;de+=1)fe=r(fe,he[de]);for(var ue=new j({props:fe}),me=[e[2]],$e={},ge=0;ge<me.length;ge+=1)$e=r($e,me[ge]);for(var be=new j({props:$e}),ke=[e[3]],ve={},Ce=0;Ce<ke.length;Ce+=1)ve=r(ve,ke[Ce]);for(var xe=new j({props:ve}),ye=[e[4]],De={},we=0;we<ye.length;we+=1)De=r(De,ye[we]);var Ae=new j({props:De});return{c:function(){n=i("h1"),t=s("Checkbox"),o=l(),c=i("h2"),a=s("Examples"),A=l(),p(ne.$$.fragment),E=l(),p(te.$$.fragment),P=l(),p(oe.$$.fragment),B=l(),p(ce.$$.fragment),G=l(),p(ae.$$.fragment),H=l(),p(re.$$.fragment),J=l(),K=i("h2"),_=s("API"),M=l(),p(pe.$$.fragment),Q=l(),p(ue.$$.fragment),X=l(),p(be.$$.fragment),Y=l(),p(xe.$$.fragment),Z=l(),p(Ae.$$.fragment)},l:function(e){n=h(e,"H1",{});var r=f(n);t=d(r,"Checkbox"),r.forEach(u),o=m(e),c=h(e,"H2",{});var i=f(c);a=d(i,"Examples"),i.forEach(u),A=m(e),$(ne.$$.fragment,e),E=m(e),$(te.$$.fragment,e),P=m(e),$(oe.$$.fragment,e),B=m(e),$(ce.$$.fragment,e),G=m(e),$(ae.$$.fragment,e),H=m(e),$(re.$$.fragment,e),J=m(e),K=h(e,"H2",{});var s=f(K);_=d(s,"API"),s.forEach(u),M=m(e),$(pe.$$.fragment,e),Q=m(e),$(ue.$$.fragment,e),X=m(e),$(be.$$.fragment,e),Y=m(e),$(xe.$$.fragment,e),Z=m(e),$(Ae.$$.fragment,e)},m:function(e,r){g(e,n,r),b(n,t),g(e,o,r),g(e,c,r),b(c,a),g(e,A,r),k(ne,e,r),g(e,E,r),k(te,e,r),g(e,P,r),k(oe,e,r),g(e,B,r),k(ce,e,r),g(e,G,r),k(ae,e,r),g(e,H,r),k(re,e,r),g(e,J,r),g(e,K,r),b(K,_),g(e,M,r),k(pe,e,r),g(e,Q,r),k(ue,e,r),g(e,X,r),k(be,e,r),g(e,Y,r),k(xe,e,r),g(e,Z,r),k(Ae,e,r),ee=!0},p:function(e,n){var t=v(n,1)[0],o={};32&t&&(o.$$scope={dirty:t,ctx:e}),ne.$set(o);var c={};32&t&&(c.$$scope={dirty:t,ctx:e}),te.$set(c);var a={};32&t&&(a.$$scope={dirty:t,ctx:e}),oe.$set(a);var r={};32&t&&(r.$$scope={dirty:t,ctx:e}),ce.$set(r);var i={};32&t&&(i.$$scope={dirty:t,ctx:e}),ae.$set(i);var s={};32&t&&(s.$$scope={dirty:t,ctx:e}),re.$set(s);var l=1&t?C(ie,[x(e[0])]):{};pe.$set(l);var p=2&t?C(he,[x(e[1])]):{};ue.$set(p);var h=4&t?C(me,[x(e[2])]):{};be.$set(h);var f=8&t?C(ke,[x(e[3])]):{};xe.$set(f);var d=16&t?C(ye,[x(e[4])]):{};Ae.$set(d)},i:function(e){ee||(y(ne.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(ce.$$.fragment,e),y(ae.$$.fragment,e),y(re.$$.fragment,e),y(pe.$$.fragment,e),y(ue.$$.fragment,e),y(be.$$.fragment,e),y(xe.$$.fragment,e),y(Ae.$$.fragment,e),ee=!0)},o:function(e){D(ne.$$.fragment,e),D(te.$$.fragment,e),D(oe.$$.fragment,e),D(ce.$$.fragment,e),D(ae.$$.fragment,e),D(re.$$.fragment,e),D(pe.$$.fragment,e),D(ue.$$.fragment,e),D(be.$$.fragment,e),D(xe.$$.fragment,e),D(Ae.$$.fragment,e),ee=!1},d:function(e){e&&u(n),e&&u(o),e&&u(c),e&&u(A),w(ne,e),e&&u(E),w(te,e),e&&u(P),w(oe,e),e&&u(B),w(ce,e),e&&u(G),w(ae,e),e&&u(H),w(re,e),e&&u(J),e&&u(K),e&&u(M),w(pe,e),e&&u(Q),w(ue,e),e&&u(X),w(be,e),e&&u(Y),w(xe,e),e&&u(Z),w(Ae,e)}}}function K(e){return[{title:"Checkbox Attributes",columns:["Property","Description","Type","Default"],data:[{property:"autoFocus",description:"Set focus when component mounted.",type:"Boolean",default:"false"},{property:"checked",description:"Specifies whether the checkbox is selected. Can be used for 2 way binding.",type:"Boolean",default:"false"},{property:"disabled",description:"Disable checkbox.",type:"Boolean",default:"false"},{property:"indeterminate",description:"Indeterminate checked state of checkbox.",type:"Boolean",default:"false"}]},{title:"CheckboxGroup Attributes",columns:["Property","Description","Type","Default"],data:[{property:"disabled",description:"Disable all checkboxes.",type:"Boolean",default:"false"},{property:"name",description:'The name property of all input[type="checkbox"] children.',type:"String",default:"-"},{property:"options",description:"Specifies options.",type:'String[] | [{label:"",value:"",disabled:false}]',default:"[]"},{property:"value",description:"Used for setting the currently selected value.",type:"String[]",default:"[]"}]},{title:"Checkbox Events",columns:["Name","Description"],data:[{name:"change",description:"Triggers when the checkbox checked state changes."}]},{title:"CheckboxGroup Events",columns:["Name","Description"],data:[{name:"change",description:"Triggers when the checkbox group value changes."}]},{title:"Checkbox Bind",columns:["Name","Description"],data:[{name:"focus",description:"Let's you bind to the input focus method."},{name:"blur",description:"Let's you bind to the input blur method."}]}]}var _=function(r){e(l,a);var i,s=(i=l,function(){var e,n=A(i);if(H()){var t=A(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return E(this,e)});function l(e){var a;return n(this,l),a=s.call(this),t(c(a),e,K,J,o,{}),a}return l}();function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Q(e){var n,t,o,c=new _({});return{c:function(){n=l(),t=i("div"),p(c.$$.fragment),this.h()},l:function(e){B('[data-svelte="svelte-cf1c3i"]',document.head).forEach(u),n=m(e),t=h(e,"DIV",{class:!0});var o=f(t);$(c.$$.fragment,o),o.forEach(u),this.h()},h:function(){document.title="Checkbox",P(t,"class","markdown api-container")},m:function(e,a){g(e,n,a),g(e,t,a),k(c,t,null),o=!0},p:G,i:function(e){o||(y(c.$$.fragment,e),o=!0)},o:function(e){D(c.$$.fragment,e),o=!1},d:function(e){e&&u(n),e&&u(t),w(c)}}}var X=function(r){e(l,a);var i,s=(i=l,function(){var e,n=A(i);if(M()){var t=A(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return E(this,e)});function l(e){var a;return n(this,l),a=s.call(this),t(c(a),e,null,Q,o,{}),a}return l}();export default X;