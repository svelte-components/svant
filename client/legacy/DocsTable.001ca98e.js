import{r as e,u as t,_ as n,a,i as r,s as i,b as o,S as s,v as c,e as l,c as u,g as f,h as d,d as g,f as p,w as h,k as m,l as v,m as y,x as b,y as k,z as $,A as x,B as w,C as E,D as A,o as S,p as F,E as T,H as C,t as j,j as _,F as P,G as O,I as R,J as L,K as D,L as N,M as I,N as H,O as M,P as z,Q as B,R as q,T as V,U as W,V as Z,W as Y,X as G,Y as U,n as X}from"./client.96304797.js";import{C as J,a as K}from"./index.6a9af403.js";var Q=e((function(e){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i,o=a.util.type(t);switch(n=n||{},o){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var s in r={},n[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=i[s])}var l=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(t,n){n===l&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var c=t[s],l=a.util.type(c);"Object"!==l||i[o(c)]?"Array"!==l||i[o(c)]||(i[o(c)]=!0,e(c,n,s,i)):(i[o(c)]=!0,e(c,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var o=a.util.getLanguage(n),s=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var c=n.parentNode;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var l={element:n,language:o,grammar:s,code:n.textContent};function u(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),i&&i.call(l.element)}if(a.hooks.run("before-sanity-check",l),!l.code)return a.hooks.run("complete",l),void(i&&i.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(r&&e.Worker){var f=new Worker(a.filename);f.onmessage=function(e){u(e.data)},f.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(a.highlight(l.code,l.grammar,l.language));else u(a.util.encode(l.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var c in n)t[c]=n[c];delete t.rest}var l=new i;return o(l,l.head,e),function e(t,n,i,c,l,u,f){for(var d in i)if(i.hasOwnProperty(d)&&i[d]){var g=i[d];g=Array.isArray(g)?g:[g];for(var p=0;p<g.length;++p){if(f&&f==d+","+p)return;var h=g[p],m=h.inside,v=!!h.lookbehind,y=!!h.greedy,b=0,k=h.alias;if(y&&!h.pattern.global){var $=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,$+"g")}h=h.pattern||h;for(var x=c.next,w=l;x!==n.tail;w+=x.value.length,x=x.next){var E=x.value;if(n.length>t.length)return;if(!(E instanceof r)){var A=1;if(y&&x!=n.tail.prev){if(h.lastIndex=w,!(j=h.exec(t)))break;var S=j.index+(v&&j[1]?j[1].length:0),F=j.index+j[0].length,T=w;for(T+=x.value.length;S>=T;)x=x.next,T+=x.value.length;if(T-=x.value.length,w=T,x.value instanceof r)continue;for(var C=x;C!==n.tail&&(T<F||"string"==typeof C.value&&!C.prev.value.greedy);C=C.next)A++,T+=C.value.length;A--,E=t.slice(w,T),j.index-=w}else{h.lastIndex=0;var j=h.exec(E)}if(j){v&&(b=j[1]?j[1].length:0);S=j.index+b,j=j[0].slice(b),F=S+j.length;var _=E.slice(0,S),P=E.slice(F),O=x.prev;_&&(O=o(n,O,_),w+=_.length),s(n,O,A);var R=new r(d,m?a.tokenize(j,m):j,k,j,y);if(x=o(n,O,R),P&&o(n,x,P),A>1&&e(t,n,i,x.prev,w,!0,d+","+p),u)break}else if(u)break}}}}}(e,l,t,l.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(l)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function s(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var s="";for(var c in i.attributes)s+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var c=a.util.currentScript();function l(){a.manual||a.highlightAll()}if(c&&(a.filename=c.src,c.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&c&&c.defer?document.addEventListener("DOMContentLoaded",l):window.requestAnimationFrame?window.requestAnimationFrame(l):window.setTimeout(l,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,r=e.getAttribute("data-src"),i=e,o=/\blang(?:uage)?-([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(a=(e.className.match(o)||[,""])[1]),!a){var s=(r.match(/\.(\w+)$/)||[,""])[1];a=t[s]||s}var c=document.createElement("code");c.className="language-"+a,e.textContent="",c.textContent="Loading…",e.appendChild(c);var l=new XMLHttpRequest;l.open("GET",r,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(c.textContent=l.responseText,n.highlightElement(c),e.setAttribute("data-src-loaded","")):l.status>=400?c.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:c.textContent="✖ Error: File does not exist or is empty")},l.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))})),ee="(if|else if|await|then|catch|each|html|debug)";function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ne(e){var t;return{c:function(){this.h()},l:function(e){this.h()},h:function(){t=new C(e[2],null)},m:function(e,n){t.m(e,n)},p:function(e,n){4&n&&t.p(e[2])},d:function(e){e&&t.d()}}}function ae(e){var t;return{c:function(){t=j(e[2])},l:function(n){t=_(n,e[2])},m:function(e,n){v(e,t,n)},p:function(e,n){4&n&&P(t,e[2])},d:function(e){e&&g(t)}}}function re(e){var t,n,a,r,i,o,s,E=e[8].default,A=c(E,e,e[7],null);function S(e,t){return"none"===e[0]?ae:ne}var F=S(e),T=F(e);return{c:function(){t=l("code"),A&&A.c(),n=u(),a=l("pre"),r=l("code"),T.c(),this.h()},l:function(e){t=f(e,"CODE",{style:!0});var i=d(t);A&&A.l(i),i.forEach(g),n=p(e),a=f(e,"PRE",{class:!0,"command-line":!0,"data-output":!0});var o=d(a);r=f(o,"CODE",{class:!0});var s=d(r);T.l(s),s.forEach(g),o.forEach(g),this.h()},h:function(){h(t,"display","none"),m(r,"class",i="language-"+e[0]),m(a,"class",o="language-"+e[0]),m(a,"command-line",""),m(a,"data-output","2-17")},m:function(i,o){v(i,t,o),A&&A.m(t,null),e[9](t),v(i,n,o),v(i,a,o),y(a,r),T.m(r,null),s=!0},p:function(e,t){var n=b(t,1)[0];A&&A.p&&128&n&&A.p(k(E,e,e[7],null),$(E,e[7],n,null)),F===(F=S(e))&&T?T.p(e,n):(T.d(1),(T=F(e))&&(T.c(),T.m(r,null))),(!s||1&n&&i!==(i="language-"+e[0]))&&m(r,"class",i),(!s||1&n&&o!==(o="language-"+e[0]))&&m(a,"class",o)},i:function(e){s||(x(A,e),s=!0)},o:function(e){w(A,e),s=!1},d:function(r){r&&g(t),A&&A.d(r),e[9](null),r&&g(n),r&&g(a),T.d()}}}Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{#each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/#each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ee+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ee+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}}),Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("svelte","cdata",r)}}),Prism.languages.svelte.tag.addInlined("style","css"),Prism.languages.svelte.tag.addInlined("script","javascript");var ie=function(e){return e},oe=Q;Q.highlightElement;function se(e,t,n){var a,r,i=t.language,o=void 0===i?"javascript":i,s=t.source,c=void 0===s?"":s,l=t.transform,u=void 0===l?function(e){return e}:l;function f(){var e=oe.languages[o],t=c||a.textContent;t=ie(t),t=u(t),n(2,r="none"===o?t:oe.highlight(t,e,o))}var d=t,g=d.$$slots,p=void 0===g?{}:g,h=d.$$scope;return e.$set=function(e){n(6,t=E(E({},t),A(e))),"language"in e&&n(0,o=e.language),"source"in e&&n(3,c=e.source),"transform"in e&&n(4,u=e.transform),"$$scope"in e&&n(7,h=e.$$scope)},e.$$.update=function(){t&&(c||a)&&f()},t=A(t),[o,a,r,c,u,f,t,h,p,function(e){T[e?"unshift":"push"]((function(){n(1,a=e)}))}]}var ce=function(e){n(l,s);var t,c=(t=l,function(){var e,n=S(t);if(te()){var a=S(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return F(this,e)});function l(e){var t;return a(this,l),t=c.call(this),r(o(t),e,se,re,i,{language:0,source:3,transform:4}),t}return l}(),le=O(e((function(e,t){
/*!
   * clipboard.js v2.0.6
   * https://clipboardjs.com/
   * 
   * Licensed MIT © Zeno Rocha
   */
var n;n=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===R(e)&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var a=this;function r(){a.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var i=0,o=a.length;i<o;i++)a[i].fn!==t&&a[i].fn._!==t&&r.push(a[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var a=n(3),r=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(a.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(a.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var a=n(5);function r(e,t,n,a,r){var o=i.apply(this,arguments);return e.addEventListener(n,o,r),{destroy:function(){e.removeEventListener(n,o,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,a,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,a,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){n.r(t);var a=n(0),r=n.n(a),i="function"==typeof Symbol&&"symbol"===R(Symbol.iterator)?function(e){return R(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":R(e)},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),l=n.n(c),u=n(2),f=n.n(u),d="function"==typeof Symbol&&"symbol"===R(Symbol.iterator)?function(e){return R(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":R(e)},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==R(t)&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+R(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),g(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(l.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},e.exports=n()})));function ue(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var fe=function(e){return{}},de=function(e){return{}};function ge(e){var t,n,a,r=e[7]?V:q;if(r)var i=new r({props:{width:"1.5em",height:"1.5em"}});return{c:function(){t=l("div"),i&&L(i.$$.fragment),this.h()},l:function(e){t=f(e,"DIV",{class:!0,"data-clipboard-text":!0});var n=d(t);i&&D(i.$$.fragment,n),n.forEach(g),this.h()},h:function(){m(t,"class","copy-icon clipboard svelte-txr1fp"),m(t,"data-clipboard-text",e[3]),Z(t,"green-icon",e[7])},m:function(r,o,s){v(r,t,o),i&&N(i,t,null),n=!0,s&&Y(a),a=[G(t,"mouseenter",e[9]),G(t,"mouseleave",e[10])]},p:function(e,a){if(r!==(r=e[7]?V:q)){if(i){I();var o=i;w(o.$$.fragment,1,0,(function(){H(o,1)})),M()}r?(i=new r({props:{width:"1.5em",height:"1.5em"}}),L(i.$$.fragment),x(i.$$.fragment,1),N(i,t,null)):i=null}(!n||8&a)&&m(t,"data-clipboard-text",e[3]),128&a&&Z(t,"green-icon",e[7])},i:function(e){n||(i&&x(i.$$.fragment,e),n=!0)},o:function(e){i&&w(i.$$.fragment,e),n=!1},d:function(e){e&&g(t),i&&H(i),Y(a)}}}function pe(e){var t,n,a,r,i,o,s,c,b,k=new W({props:{width:"1.5em",height:"1.5em"}}),$=e[6]&&ge(e);return{c:function(){t=l("div"),n=l("div"),a=l("div"),L(k.$$.fragment),r=u(),i=l("span"),o=j(e[5]),s=u(),$&&$.c(),this.h()},l:function(c){t=f(c,"DIV",{slot:!0,class:!0});var l=d(t);n=f(l,"DIV",{class:!0});var u=d(n);a=f(u,"DIV",{class:!0});var h=d(a);D(k.$$.fragment,h),r=p(h),i=f(h,"SPAN",{style:!0});var m=d(i);o=_(m,e[5]),m.forEach(g),h.forEach(g),u.forEach(g),s=p(l),$&&$.l(l),l.forEach(g),this.h()},h:function(){h(i,"margin","2px 0 0 .5rem"),m(a,"class","toggle-code svelte-txr1fp"),m(n,"class","toggle-code-wrapper svelte-txr1fp"),m(t,"slot","header"),m(t,"class","demo-panel-header svelte-txr1fp")},m:function(l,u,f){v(l,t,u),y(t,n),y(n,a),N(k,a,null),y(a,r),y(a,i),y(i,o),y(t,s),$&&$.m(t,null),c=!0,f&&b(),b=G(n,"click",e[8])},p:function(e,n){(!c||32&n)&&P(o,e[5]),e[6]?$?($.p(e,n),x($,1)):(($=ge(e)).c(),x($,1),$.m(t,null)):$&&(I(),w($,1,1,(function(){$=null})),M())},i:function(e){c||(x(k.$$.fragment,e),x($),c=!0)},o:function(e){w(k.$$.fragment,e),w($),c=!1},d:function(e){e&&g(t),H(k),$&&$.d(),b()}}}function he(e){var t,n,a=new ce({props:{language:"svelte",source:e[3]}});return{c:function(){t=u(),L(a.$$.fragment)},l:function(e){t=p(e),D(a.$$.fragment,e)},m:function(e,r){v(e,t,r),N(a,e,r),n=!0},p:function(e,t){var n={};8&t&&(n.source=e[3]),a.$set(n)},i:function(e){n||(x(a.$$.fragment,e),n=!0)},o:function(e){w(a.$$.fragment,e),n=!1},d:function(e){e&&g(t),H(a,e)}}}function me(e){var t,n=new K({props:{key:"1",hideArrow:!0,class:"demo-code-collapse-panel",$$slots:{default:[he],header:[pe]},$$scope:{ctx:e}}});return{c:function(){L(n.$$.fragment)},l:function(e){D(n.$$.fragment,e)},m:function(e,a){N(n,e,a),t=!0},p:function(e,t){var a={};65768&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i:function(e){t||(x(n.$$.fragment,e),t=!0)},o:function(e){w(n.$$.fragment,e),t=!1},d:function(e){H(n,e)}}}function ve(e){var t,n,a,r,i,o,s,h,E,A=e[15].description,S=c(A,e,e[16],de),F=e[2];if(F)var T=new F({});var C=new J({props:{activeKey:e[4],class:"demo-code-collapse",$$slots:{default:[me]},$$scope:{ctx:e}}});return{c:function(){t=l("div"),n=l("h3"),a=j(e[1]),r=u(),S&&S.c(),i=u(),o=l("section"),s=l("section"),T&&L(T.$$.fragment),h=u(),L(C.$$.fragment),this.h()},l:function(c){t=f(c,"DIV",{id:!0});var l=d(t);n=f(l,"H3",{});var u=d(n);a=_(u,e[1]),u.forEach(g),r=p(l),S&&S.l(l),i=p(l),o=f(l,"SECTION",{class:!0});var m=d(o);s=f(m,"SECTION",{class:!0});var v=d(s);T&&D(T.$$.fragment,v),v.forEach(g),h=p(m),D(C.$$.fragment,m),m.forEach(g),l.forEach(g),this.h()},h:function(){m(s,"class","code-box-demo"),m(o,"class","code-box"),m(t,"id",e[0])},m:function(e,c){v(e,t,c),y(t,n),y(n,a),y(t,r),S&&S.m(t,null),y(t,i),y(t,o),y(o,s),T&&N(T,s,null),y(o,h),N(C,o,null),E=!0},p:function(e,n){var r=b(n,1)[0];if((!E||2&r)&&P(a,e[1]),S&&S.p&&65536&r&&S.p(k(A,e,e[16],de),$(A,e[16],r,fe)),F!==(F=e[2])){if(T){I();var i=T;w(i.$$.fragment,1,0,(function(){H(i,1)})),M()}F?(T=new F({}),L(T.$$.fragment),x(T.$$.fragment,1),N(T,s,null)):T=null}var o={};16&r&&(o.activeKey=e[4]),65768&r&&(o.$$scope={dirty:r,ctx:e}),C.$set(o),(!E||1&r)&&m(t,"id",e[0])},i:function(e){E||(x(S,e),T&&x(T.$$.fragment,e),x(C.$$.fragment,e),E=!0)},o:function(e){w(S,e),T&&w(T.$$.fragment,e),w(C.$$.fragment,e),E=!1},d:function(e){e&&g(t),S&&S.d(e),T&&H(T),H(C)}}}function ye(e,t,n){var a,r=t.id,i=t.title,o=t.demoComponent,s=t.demoCode,c=[],l="View Code",u=!1,f=!1,d=!1,g=q;function p(){n(7,f=!0)}z((function(){a=new le(".clipboard"),n(6,u=le.isSupported()),a.on("success",p)})),B((function(){a&&a.destroy()}));var h=t.$$slots,m=void 0===h?{}:h,v=t.$$scope;return e.$set=function(e){"id"in e&&n(0,r=e.id),"title"in e&&n(1,i=e.title),"demoComponent"in e&&n(2,o=e.demoComponent),"demoCode"in e&&n(3,s=e.demoCode),"$$scope"in e&&n(16,v=e.$$scope)},e.$$.update=function(){4224&e.$$.dirty&&(g=f&&d?V:q),16&e.$$.dirty&&n(5,l=c.includes("1")?"Hide Code":"View Code")},[r,i,o,s,c,l,u,f,function(){n(4,c=c.includes("1")?[]:["1"])},function(){n(12,d=!0)},function(){n(7,f=!1),n(12,d=!1)},a,d,g,p,m,v]}var be=function(e){n(l,s);var t,c=(t=l,function(){var e,n=S(t);if(ue()){var a=S(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return F(this,e)});function l(e){var t;return a(this,l),t=c.call(this),r(o(t),e,ye,ve,i,{id:0,title:1,demoComponent:2,demoCode:3}),t}return l}();function ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function $e(e,t,n){var a=e.slice();return a[6]=t[n],a}function xe(e,t,n){var a=e.slice();return a[3]=t[n],a}function we(e,t,n){var a=e.slice();return a[6]=t[n],a}function Ee(e){var t,n,a=e[6]+"";return{c:function(){t=l("th"),n=j(a)},l:function(e){t=f(e,"TH",{});var r=d(t);n=_(r,a),r.forEach(g)},m:function(e,a){v(e,t,a),y(t,n)},p:function(e,t){2&t&&a!==(a=e[6]+"")&&P(n,a)},d:function(e){e&&g(t)}}}function Ae(e){var t,n,a=e[3][e[6].toLowerCase()]+"";return{c:function(){t=l("td"),n=j(a)},l:function(e){t=f(e,"TD",{});var r=d(t);n=_(r,a),r.forEach(g)},m:function(e,a){v(e,t,a),y(t,n)},p:function(e,t){6&t&&a!==(a=e[3][e[6].toLowerCase()]+"")&&P(n,a)},d:function(e){e&&g(t)}}}function Se(e){for(var t,n,a=e[1],r=[],i=0;i<a.length;i+=1)r[i]=Ae($e(e,a,i));return{c:function(){t=l("tr");for(var e=0;e<r.length;e+=1)r[e].c();n=u()},l:function(e){t=f(e,"TR",{});for(var a=d(t),i=0;i<r.length;i+=1)r[i].l(a);n=p(a),a.forEach(g)},m:function(e,a){v(e,t,a);for(var i=0;i<r.length;i+=1)r[i].m(t,null);y(t,n)},p:function(e,i){if(6&i){var o;for(a=e[1],o=0;o<a.length;o+=1){var s=$e(e,a,o);r[o]?r[o].p(s,i):(r[o]=Ae(s),r[o].c(),r[o].m(t,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}},d:function(e){e&&g(t),U(r,e)}}}function Fe(e){for(var t,n,a,r,i,o,s,c,h=e[1],k=[],$=0;$<h.length;$+=1)k[$]=Ee(we(e,h,$));for(var x=e[2],w=[],E=0;E<x.length;E+=1)w[E]=Se(xe(e,x,E));return{c:function(){t=l("h3"),n=j(e[0]),a=u(),r=l("table"),i=l("thead"),o=l("tr");for(var f=0;f<k.length;f+=1)k[f].c();s=u(),c=l("tbody");for(var d=0;d<w.length;d+=1)w[d].c();this.h()},l:function(l){t=f(l,"H3",{});var u=d(t);n=_(u,e[0]),u.forEach(g),a=p(l),r=f(l,"TABLE",{class:!0});var h=d(r);i=f(h,"THEAD",{});var m=d(i);o=f(m,"TR",{});for(var v=d(o),y=0;y<k.length;y+=1)k[y].l(v);v.forEach(g),m.forEach(g),s=p(h),c=f(h,"TBODY",{});for(var b=d(c),$=0;$<w.length;$+=1)w[$].l(b);b.forEach(g),h.forEach(g),this.h()},h:function(){m(r,"class","docs-table")},m:function(e,l){v(e,t,l),y(t,n),v(e,a,l),v(e,r,l),y(r,i),y(i,o);for(var u=0;u<k.length;u+=1)k[u].m(o,null);y(r,s),y(r,c);for(var f=0;f<w.length;f+=1)w[f].m(c,null)},p:function(e,t){var a=b(t,1)[0];if(1&a&&P(n,e[0]),2&a){var r;for(h=e[1],r=0;r<h.length;r+=1){var i=we(e,h,r);k[r]?k[r].p(i,a):(k[r]=Ee(i),k[r].c(),k[r].m(o,null))}for(;r<k.length;r+=1)k[r].d(1);k.length=h.length}if(6&a){var s;for(x=e[2],s=0;s<x.length;s+=1){var l=xe(e,x,s);w[s]?w[s].p(l,a):(w[s]=Se(l),w[s].c(),w[s].m(c,null))}for(;s<w.length;s+=1)w[s].d(1);w.length=x.length}},i:X,o:X,d:function(e){e&&g(t),e&&g(a),e&&g(r),U(k,e),U(w,e)}}}function Te(e,t,n){var a=t.title,r=void 0===a?"Attributes":a,i=t.columns,o=void 0===i?["Property","Description","Type","Default"]:i,s=t.data;return e.$set=function(e){"title"in e&&n(0,r=e.title),"columns"in e&&n(1,o=e.columns),"data"in e&&n(2,s=e.data)},[r,o,s]}var Ce=function(e){n(l,s);var t,c=(t=l,function(){var e,n=S(t);if(ke()){var a=S(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return F(this,e)});function l(e){var t;return a(this,l),t=c.call(this),r(o(t),e,Te,Fe,i,{title:0,columns:1,data:2}),t}return l}();export{Ce as D,be as E,ce as P};