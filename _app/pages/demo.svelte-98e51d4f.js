var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;import{L as a,M as o,C as c,S as u,i as h,s as f,e as g,t as p,c as d,a as m,g as y,d as $,b as v,f as x,G as w,J as b,N as _,h as k,l as E,O as q,j as P,m as I,o as O,v as S,r as R,w as A,k as L,n as T,B as j,P as D,Q as N,u as V,I as M,R as C,T as H,U,V as W,W as B,X as J}from"../chunks/vendor-09cf0bef.js";import{b as X}from"../chunks/paths-45dac81d.js";function z(e,t=0){let s;return(...r)=>{s&&(s(),s=null),s=function(e,t=0){const s=setTimeout((()=>e()),t);return()=>clearTimeout(s)}((()=>e(...r)),t)}}function F(e){let t,s,r,n,l;return{c(){t=g("div"),s=p("Powered by "),r=g("a"),n=p("Stork"),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0});var l=m(t);s=y(l,"Powered by "),r=d(l,"A",{href:!0,target:!0,rel:!0});var i=m(r);n=y(i,"Stork"),i.forEach($),l.forEach($),this.h()},h(){v(r,"href","https://stork-search.net"),v(r,"target","_blank"),v(r,"rel","noopener noreferrer"),v(t,"class",l="svelte-stork-attribution "+e[1]),v(t,"style",e[2])},m(l,i){x(l,t,i),w(t,s),w(t,r),w(r,n),e[3](t)},p(e,[s]){2&s&&l!==(l="svelte-stork-attribution "+e[1])&&v(t,"class",l),4&s&&v(t,"style",e[2])},i:b,o:b,d(s){s&&$(t),e[3](null)}}}function G(e,t,s){let{element:r=null}=t,{class:n=""}=t,{style:l}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"class"in e&&s(1,n=e.class),"style"in e&&s(2,l=e.style)},[r,n,l,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class Y extends u{constructor(e){super(),h(this,e,G,F,f,{element:0,class:1,style:2})}}function K(e){let t;return{c(){t=p("No files found.")},l(e){t=y(e,"No files found.")},m(e,s){x(e,t,s)},p:b,d(e){e&&$(t)}}}function Q(e){let t,s,r=e[3].total_hit_count+"";return{c(){t=p(r),s=p(" files found.")},l(e){t=y(e,r),s=y(e," files found.")},m(e,r){x(e,t,r),x(e,s,r)},p(e,s){8&s&&r!==(r=e[3].total_hit_count+"")&&k(t,r)},d(e){e&&$(t),e&&$(s)}}}function Z(e){let t,s;function r(e,t){return e[3].total_hit_count>0?Q:K}let n=r(e),l=n(e);return{c(){t=g("div"),l.c(),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0});var s=m(t);l.l(s),s.forEach($),this.h()},h(){v(t,"class",s="svelte-stork-message "+e[1]),v(t,"style",e[2])},m(s,r){x(s,t,r),l.m(t,null),e[4](t)},p(e,[i]){n===(n=r(e))&&l?l.p(e,i):(l.d(1),l=n(e),l&&(l.c(),l.m(t,null))),2&i&&s!==(s="svelte-stork-message "+e[1])&&v(t,"class",s),4&i&&v(t,"style",e[2])},i:b,o:b,d(s){s&&$(t),l.d(),e[4](null)}}}function ee(e,t,s){let{element:r=null}=t,{class:n=""}=t,{style:l}=t,{query:i}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"class"in e&&s(1,n=e.class),"style"in e&&s(2,l=e.style),"query"in e&&s(3,i=e.query)},[r,n,l,i,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class te extends u{constructor(e){super(),h(this,e,ee,Z,f,{element:0,class:1,style:2,query:3})}}function se(e,t,s){const r=e.slice();return r[5]=t[s][0],r[6]=t[s][1],r}function re(e){let t,s=e[5]+"";return{c(){t=p(s)},l(e){t=y(e,s)},m(e,s){x(e,t,s)},p(e,r){4&r&&s!==(s=e[5]+"")&&k(t,s)},d(e){e&&$(t)}}}function ne(e){let t,s,r,n=e[5]+"";return{c(){t=g("mark"),s=p(n),this.h()},l(e){t=d(e,"MARK",{class:!0,style:!0});var r=m(t);s=y(r,n),r.forEach($),this.h()},h(){v(t,"class",r="svelte-stork-highlight "+e[0]),v(t,"style",e[1])},m(e,r){x(e,t,r),w(t,s)},p(e,l){4&l&&n!==(n=e[5]+"")&&k(s,n),1&l&&r!==(r="svelte-stork-highlight "+e[0])&&v(t,"class",r),2&l&&v(t,"style",e[1])},d(e){e&&$(t)}}}function le(e){let t;function s(e,t){return e[6]?ne:re}let r=s(e),n=r(e);return{c(){n.c(),t=E()},l(e){n.l(e),t=E()},m(e,s){n.m(e,s),x(e,t,s)},p(e,l){r===(r=s(e))&&n?n.p(e,l):(n.d(1),n=r(e),n&&(n.c(),n.m(t.parentNode,t)))},d(e){n.d(e),e&&$(t)}}}function ie(e){let t,s=e[2],r=[];for(let n=0;n<s.length;n+=1)r[n]=le(se(e,s,n));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=E()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=E()},m(e,s){for(let t=0;t<r.length;t+=1)r[t].m(e,s);x(e,t,s)},p(e,[n]){if(7&n){let l;for(s=e[2],l=0;l<s.length;l+=1){const i=se(e,s,l);r[l]?r[l].p(i,n):(r[l]=le(i),r[l].c(),r[l].m(t.parentNode,t))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},i:b,o:b,d(e){q(r,e),e&&$(t)}}}function ae(e,t,s){let r,{class:n=""}=t,{style:l}=t,{ranges:i=[]}=t,{text:a}=t;return e.$$set=e=>{"class"in e&&s(0,n=e.class),"style"in e&&s(1,l=e.style),"ranges"in e&&s(3,i=e.ranges),"text"in e&&s(4,a=e.text)},e.$$.update=()=>{24&e.$$.dirty&&s(2,r=i.length>0?i.reduce(((e,t,s)=>{const{beginning:r,end:n}=t;if(0===s&&r>0&&e.push([a.slice(0,r),!1]),e.push([a.slice(r,n),!0]),n<a.length-1){const t=i[s+1],r=t?t.beginning:a.length;e.push([a.slice(n,r),!1])}return e}),[]):[[a,!1]])},[n,l,r,i,a]}class oe extends u{constructor(e){super(),h(this,e,ae,ie,f,{class:0,style:1,ranges:3,text:4})}}function ce(e){let t,s,r,n;return s=new oe({props:{ranges:e[4],text:e[3].title}}),{c(){t=g("p"),P(s.$$.fragment),this.h()},l(e){t=d(e,"P",{class:!0,style:!0});var r=m(t);I(s.$$.fragment,r),r.forEach($),this.h()},h(){v(t,"class",r="svelte-stork-entry-title "+e[1]),v(t,"style",e[2])},m(r,l){x(r,t,l),O(s,t,null),e[5](t),n=!0},p(e,[l]){const i={};16&l&&(i.ranges=e[4]),8&l&&(i.text=e[3].title),s.$set(i),(!n||2&l&&r!==(r="svelte-stork-entry-title "+e[1]))&&v(t,"class",r),(!n||4&l)&&v(t,"style",e[2])},i(e){n||(S(s.$$.fragment,e),n=!0)},o(e){R(s.$$.fragment,e),n=!1},d(r){r&&$(t),A(s),e[5](null)}}}function ue(e,t,s){let{element:r=null}=t,{class:n=""}=t,{style:l}=t,{entry:i}=t,{title_highlight_ranges:a}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"class"in e&&s(1,n=e.class),"style"in e&&s(2,l=e.style),"entry"in e&&s(3,i=e.entry),"title_highlight_ranges"in e&&s(4,a=e.title_highlight_ranges)},[r,n,l,i,a,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class he extends u{constructor(e){super(),h(this,e,ue,ce,f,{element:0,class:1,style:2,entry:3,title_highlight_ranges:4})}}function fe(e){let t,s,r,n,l,i;return r=new oe({props:{ranges:e[3].highlight_ranges,text:e[3].text}}),{c(){t=g("p"),s=p("..."),P(r.$$.fragment),n=p("..."),this.h()},l(e){t=d(e,"P",{class:!0,style:!0});var l=m(t);s=y(l,"..."),I(r.$$.fragment,l),n=y(l,"..."),l.forEach($),this.h()},h(){v(t,"class",l="svelte-stork-excerpt "+e[1]),v(t,"style",e[2])},m(l,a){x(l,t,a),w(t,s),O(r,t,null),w(t,n),e[4](t),i=!0},p(e,[s]){const n={};8&s&&(n.ranges=e[3].highlight_ranges),8&s&&(n.text=e[3].text),r.$set(n),(!i||2&s&&l!==(l="svelte-stork-excerpt "+e[1]))&&v(t,"class",l),(!i||4&s)&&v(t,"style",e[2])},i(e){i||(S(r.$$.fragment,e),i=!0)},o(e){R(r.$$.fragment,e),i=!1},d(s){s&&$(t),A(r),e[4](null)}}}function ge(e,t,s){let{element:r=null}=t,{class:n=""}=t,{style:l}=t,{excerpt:i}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"class"in e&&s(1,n=e.class),"style"in e&&s(2,l=e.style),"excerpt"in e&&s(3,i=e.excerpt)},[r,n,l,i,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class pe extends u{constructor(e){super(),h(this,e,ge,fe,f,{element:0,class:1,style:2,excerpt:3})}}function de(e,t,s){const r=e.slice();return r[8]=t[s],r}function me(e,t){let s,r,n;return r=new pe({props:{excerpt:t[8]}}),{key:e,first:null,c(){s=E(),P(r.$$.fragment),this.h()},l(e){s=E(),I(r.$$.fragment,e),this.h()},h(){this.first=s},m(e,t){x(e,s,t),O(r,e,t),n=!0},p(e,s){t=e;const n={};8&s&&(n.excerpt=t[8]),r.$set(n)},i(e){n||(S(r.$$.fragment,e),n=!0)},o(e){R(r.$$.fragment,e),n=!1},d(e){e&&$(s),A(r,e)}}}function ye(e){let t,s,r,n,l,i,a=[],o=new Map;s=new he({props:{entry:e[4],title_highlight_ranges:e[6]}});let c=e[3];const u=e=>e[8].text;for(let h=0;h<c.length;h+=1){let t=de(e,c,h),s=u(t);o.set(s,a[h]=me(s,t))}return{c(){t=g("a"),P(s.$$.fragment),r=L();for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=d(e,"A",{class:!0,href:!0,target:!0,rel:!0,style:!0});var n=m(t);I(s.$$.fragment,n),r=T(n);for(let t=0;t<a.length;t+=1)a[t].l(n);n.forEach($),this.h()},h(){v(t,"class",n="svelte-stork-entry "+e[1]),v(t,"href",l=""+(e[5].url_prefix+e[4].url)),v(t,"target","_blank"),v(t,"rel","noopener noreferrer"),v(t,"style",e[2])},m(n,l){x(n,t,l),O(s,t,null),w(t,r);for(let e=0;e<a.length;e+=1)a[e].m(t,null);e[7](t),i=!0},p(e,[r]){const h={};16&r&&(h.entry=e[4]),64&r&&(h.title_highlight_ranges=e[6]),s.$set(h),8&r&&(c=e[3],j(),a=D(a,r,u,1,e,c,o,t,N,me,null,de),V()),(!i||2&r&&n!==(n="svelte-stork-entry "+e[1]))&&v(t,"class",n),(!i||48&r&&l!==(l=""+(e[5].url_prefix+e[4].url)))&&v(t,"href",l),(!i||4&r)&&v(t,"style",e[2])},i(e){if(!i){S(s.$$.fragment,e);for(let e=0;e<c.length;e+=1)S(a[e]);i=!0}},o(e){R(s.$$.fragment,e);for(let t=0;t<a.length;t+=1)R(a[t]);i=!1},d(r){r&&$(t),A(s);for(let e=0;e<a.length;e+=1)a[e].d();e[7](null)}}}function $e(e,t,s){let{element:r=null}=t,{class:n=""}=t,{style:l}=t,{excerpts:i}=t,{entry:a}=t,{query:o}=t,{title_highlight_ranges:c}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"class"in e&&s(1,n=e.class),"style"in e&&s(2,l=e.style),"excerpts"in e&&s(3,i=e.excerpts),"entry"in e&&s(4,a=e.entry),"query"in e&&s(5,o=e.query),"title_highlight_ranges"in e&&s(6,c=e.title_highlight_ranges)},[r,n,l,i,a,o,c,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class ve extends u{constructor(e){super(),h(this,e,$e,ye,f,{element:0,class:1,style:2,excerpts:3,entry:4,query:5,title_highlight_ranges:6})}}function xe(e){let t,s,r;return s=new ve({props:{entry:e[2].entry,excerpts:e[2].excerpts,title_highlight_ranges:e[2].title_highlight_ranges,query:e[3]}}),{c(){t=g("li"),P(s.$$.fragment),this.h()},l(e){t=d(e,"LI",{class:!0,style:!0});var r=m(t);I(s.$$.fragment,r),r.forEach($),this.h()},h(){v(t,"class","svelte-stork-result "+we),v(t,"style",e[1])},m(n,l){x(n,t,l),O(s,t,null),e[4](t),r=!0},p(e,[n]){const l={};4&n&&(l.entry=e[2].entry),4&n&&(l.excerpts=e[2].excerpts),4&n&&(l.title_highlight_ranges=e[2].title_highlight_ranges),8&n&&(l.query=e[3]),s.$set(l),(!r||2&n)&&v(t,"style",e[1])},i(e){r||(S(s.$$.fragment,e),r=!0)},o(e){R(s.$$.fragment,e),r=!1},d(r){r&&$(t),A(s),e[4](null)}}}let we="";function be(e,t,s){let{element:r=null}=t,{style:n}=t,{result:l}=t,{query:i}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"style"in e&&s(1,n=e.style),"result"in e&&s(2,l=e.result),"query"in e&&s(3,i=e.query)},[r,n,l,i,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class _e extends u{constructor(e){super(),h(this,e,be,xe,f,{element:0,style:1,result:2,query:3})}}function ke(e,t,s){const r=e.slice();return r[5]=t[s],r}function Ee(e,t){let s,r,n;return r=new _e({props:{query:t[3],result:t[5]}}),{key:e,first:null,c(){s=E(),P(r.$$.fragment),this.h()},l(e){s=E(),I(r.$$.fragment,e),this.h()},h(){this.first=s},m(e,t){x(e,s,t),O(r,e,t),n=!0},p(e,s){t=e;const n={};8&s&&(n.query=t[3]),4&s&&(n.result=t[5]),r.$set(n)},i(e){n||(S(r.$$.fragment,e),n=!0)},o(e){R(r.$$.fragment,e),n=!1},d(e){e&&$(s),A(r,e)}}}function qe(e){let t,s,r=[],n=new Map,l=e[2];const i=e=>e[5].entry.url;for(let a=0;a<l.length;a+=1){let t=ke(e,l,a),s=i(t);n.set(s,r[a]=Ee(s,t))}return{c(){t=g("ul");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=d(e,"UL",{class:!0,style:!0});var s=m(t);for(let t=0;t<r.length;t+=1)r[t].l(s);s.forEach($),this.h()},h(){v(t,"class","svelte-stork-results "+Pe),v(t,"style",e[1])},m(n,l){x(n,t,l);for(let e=0;e<r.length;e+=1)r[e].m(t,null);e[4](t),s=!0},p(e,[a]){12&a&&(l=e[2],j(),r=D(r,a,i,1,e,l,n,t,N,Ee,null,ke),V()),(!s||2&a)&&v(t,"style",e[1])},i(e){if(!s){for(let e=0;e<l.length;e+=1)S(r[e]);s=!0}},o(e){for(let t=0;t<r.length;t+=1)R(r[t]);s=!1},d(s){s&&$(t);for(let e=0;e<r.length;e+=1)r[e].d();e[4](null)}}}let Pe="";function Ie(e,t,s){let{element:r=null}=t,{style:n}=t,{results:l}=t,{query:i}=t;return e.$$set=e=>{"element"in e&&s(0,r=e.element),"style"in e&&s(1,n=e.style),"results"in e&&s(2,l=e.results),"query"in e&&s(3,i=e.query)},[r,n,l,i,function(e){_[e?"unshift":"push"]((()=>{r=e,s(0,r)}))}]}class Oe extends u{constructor(e){super(),h(this,e,Ie,qe,f,{element:0,style:1,results:2,query:3})}}function Se(e){let t,s;return t=new Oe({props:{results:e[4],query:e[3]}}),{c(){P(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,r){O(t,e,r),s=!0},p(e,s){const r={};16&s&&(r.results=e[4]),8&s&&(r.query=e[3]),t.$set(r)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){R(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function Re(e){let t,s,r,n,l,i,a;s=new te({props:{query:e[3]}});let o=e[4].length>0&&Se(e);return l=new Y({}),{c(){t=g("div"),P(s.$$.fragment),r=L(),o&&o.c(),n=L(),P(l.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0});var i=m(t);I(s.$$.fragment,i),r=T(i),o&&o.l(i),n=T(i),I(l.$$.fragment,i),i.forEach($),this.h()},h(){v(t,"class",i="svelte-stork-output "+e[1]),v(t,"style",e[2])},m(i,c){x(i,t,c),O(s,t,null),w(t,r),o&&o.m(t,null),w(t,n),O(l,t,null),e[6](t),a=!0},p(e,[r]){const l={};8&r&&(l.query=e[3]),s.$set(l),e[4].length>0?o?(o.p(e,r),16&r&&S(o,1)):(o=Se(e),o.c(),S(o,1),o.m(t,n)):o&&(j(),R(o,1,1,(()=>{o=null})),V()),(!a||2&r&&i!==(i="svelte-stork-output "+e[1]))&&v(t,"class",i),(!a||4&r)&&v(t,"style",e[2])},i(e){a||(S(s.$$.fragment,e),S(o),S(l.$$.fragment,e),a=!0)},o(e){R(s.$$.fragment,e),R(o),R(l.$$.fragment,e),a=!1},d(r){r&&$(t),A(s),o&&o.d(),A(l),e[6](null)}}}function Ae(e,t,s){let r,{element:n=null}=t,{class:l=""}=t,{style:i}=t,{query:a}=t,{results:o}=t;return e.$$set=e=>{"element"in e&&s(0,n=e.element),"class"in e&&s(1,l=e.class),"style"in e&&s(2,i=e.style),"query"in e&&s(3,a=e.query),"results"in e&&s(5,o=e.results)},e.$$.update=()=>{40&e.$$.dirty&&s(4,r=o||a.results)},[n,l,i,a,r,o,function(e){_[e?"unshift":"push"]((()=>{n=e,s(0,n)}))}]}class Le extends u{constructor(e){super(),h(this,e,Ae,Re,f,{element:0,class:1,style:2,query:3,results:5})}}function Te(e){let t,s,r;return{c(){t=g("div"),s=g("p"),r=p("Your client currently does not support Javascript, or is otherwise disabled."),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=m(t);s=d(n,"P",{});var l=m(s);r=y(l,"Your client currently does not support Javascript, or is otherwise disabled."),l.forEach($),n.forEach($),this.h()},h(){v(t,"class","card bd-error text-error")},m(e,n){x(e,t,n),w(t,s),w(s,r)},p:b,i:b,o:b,d(e){e&&$(t)}}}function je(e){let t,s,r={ctx:e,current:null,token:null,hasCatch:!0,pending:Me,then:Ne,catch:De,value:8,error:9,blocks:[,,,]};return H(e[3],r),{c(){t=E(),r.block.c()},l(e){t=E(),r.block.l(e)},m(e,n){x(e,t,n),r.block.m(e,r.anchor=n),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(t,s){U(r,e=t,s)},i(e){s||(S(r.block),s=!0)},o(e){for(let t=0;t<3;t+=1){const e=r.blocks[t];R(e)}s=!1},d(e){e&&$(t),r.block.d(e),r.token=null,r=null}}}function De(e){let t,s,r,n,l,i,a,o=e[9].message+"";return{c(){t=g("div"),s=g("p"),r=p("There was an error while loading the search index."),n=L(),l=g("pre"),i=g("code"),a=p(o),this.h()},l(e){t=d(e,"DIV",{class:!0});var c=m(t);s=d(c,"P",{});var u=m(s);r=y(u,"There was an error while loading the search index."),u.forEach($),n=T(c),l=d(c,"PRE",{});var h=m(l);i=d(h,"CODE",{});var f=m(i);a=y(f,o),f.forEach($),h.forEach($),c.forEach($),this.h()},h(){v(t,"class","card bd-error text-error")},m(e,o){x(e,t,o),w(t,s),w(s,r),w(t,n),w(t,l),w(l,i),w(i,a)},p:b,i:b,o:b,d(e){e&&$(t)}}}function Ne(e){let t,s,r,n,l,i,a,o,c,u,h,f,b,_,k,q,P,I,O,A=e[2]&&Ve(e);return{c(){t=g("label"),s=g("strong"),r=g("small"),n=p("SEARCH THE FEDERALIST PAPERS*:"),l=L(),i=g("p"),a=g("input"),o=L(),c=g("button"),u=p("X"),f=L(),b=g("small"),_=p("* Well, just the first twenty."),k=L(),A&&A.c(),q=E(),this.h()},l(e){t=d(e,"LABEL",{for:!0});var h=m(t);s=d(h,"STRONG",{});var g=m(s);r=d(g,"SMALL",{});var p=m(r);n=y(p,"SEARCH THE FEDERALIST PAPERS*:"),p.forEach($),g.forEach($),h.forEach($),l=T(e),i=d(e,"P",{class:!0});var v=m(i);a=d(v,"INPUT",{id:!0,type:!0,placeholder:!0}),o=T(v),c=d(v,"BUTTON",{class:!0,disabled:!0});var x=m(c);u=y(x,"X"),x.forEach($),v.forEach($),f=T(e),b=d(e,"SMALL",{});var w=m(b);_=y(w,"* Well, just the first twenty."),w.forEach($),k=T(e),A&&A.l(e),q=E(),this.h()},h(){v(t,"for","search"),v(a,"id","search"),v(a,"type","search"),v(a,"placeholder","liberty"),v(c,"class","button error"),c.disabled=h=!e[0],v(i,"class","grouped")},m(h,g){x(h,t,g),w(t,s),w(s,r),w(r,n),x(h,l,g),x(h,i,g),w(i,a),W(a,e[0]),w(i,o),w(i,c),w(c,u),x(h,f,g),x(h,b,g),w(b,_),x(h,k,g),A&&A.m(h,g),x(h,q,g),P=!0,I||(O=[B(a,"input",e[6]),B(c,"click",e[7])],I=!0)},p(e,t){1&t&&W(a,e[0]),(!P||1&t&&h!==(h=!e[0]))&&(c.disabled=h),e[2]?A?(A.p(e,t),4&t&&S(A,1)):(A=Ve(e),A.c(),S(A,1),A.m(q.parentNode,q)):A&&(j(),R(A,1,1,(()=>{A=null})),V())},i(e){P||(S(A),P=!0)},o(e){R(A),P=!1},d(e){e&&$(t),e&&$(l),e&&$(i),e&&$(f),e&&$(b),e&&$(k),A&&A.d(e),e&&$(q),I=!1,J(O)}}}function Ve(e){let t,s,r;return s=new Le({props:{query:e[2],results:e[1]}}),{c(){t=g("div"),P(s.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var r=m(t);I(s.$$.fragment,r),r.forEach($),this.h()},h(){v(t,"class","card is-paddingless")},m(e,n){x(e,t,n),O(s,t,null),r=!0},p(e,t){const r={};4&t&&(r.query=e[2]),2&t&&(r.results=e[1]),s.$set(r)},i(e){r||(S(s.$$.fragment,e),r=!0)},o(e){R(s.$$.fragment,e),r=!1},d(e){e&&$(t),A(s)}}}function Me(e){let t,s,r;return{c(){t=g("div"),s=g("p"),r=p("Loading search index..."),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=m(t);s=d(n,"P",{});var l=m(s);r=y(l,"Loading search index..."),l.forEach($),n.forEach($),this.h()},h(){v(t,"class","card bd-primary text-primary")},m(e,n){x(e,t,n),w(t,s),w(s,r)},p:b,i:b,o:b,d(e){e&&$(t)}}}function Ce(e){let t,s,r,n;const l=[je,Te],i=[];return t=0,s=i[0]=l[0](e),{c(){s.c(),r=E()},l(e){s.l(e),r=E()},m(e,t){i[0].m(e,t),x(e,r,t),n=!0},p(e,[t]){s.p(e,t)},i(e){n||(S(s),n=!0)},o(e){R(s),n=!1},d(e){i[0].d(e),e&&$(r)}}}function He(e,t){return e.score<t.score}function Ue(e,u,h){let f,g="",p=async function(e){const{index_name:t,index_url:s,overwrite:r=!1,wasm_url:n}=e,l=window.stork;if(!l)throw new ReferenceError("bad dispatch to 'register' (Stork namespace not found)");try{await l.initialize(n)}catch(i){throw new Error("bad option 'IRegisterOptions.wasm_url' to 'register' (failed to download and initialize WASM blob)")}try{await l.downloadIndex(t,s,{forceOverwrite:r})}catch(i){throw new Error("bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)")}}({index_name:"federalist-stork-1.2.1",index_url:X+"/assets/stork/federalist-stork-1.2.1.st",overwrite:!0,wasm_url:X+"/assets/scripts/stork.wasm"});const d=function(e){if("undefined"==typeof window)return a(null);const{debounce:t=250,index_name:s,minimum_length:r=3}=e,n=window.stork;if(!n)throw new ReferenceError("bad dispatch to 'search' (Stork namespace not found)");const l=c(null),{set:i,subscribe:u}=l,h=z((e=>{if(e&&e.length>=r){const t=n.search(s,e);i(t)}else i(null)}),t);return{set:h,subscribe:u,update(e){const t=e(o(l));h(t)}}}({index_name:"federalist-stork-1.2.1"});M(e,d,(e=>h(5,f=e)));let m=[],y=null;return e.$$.update=()=>{1&e.$$.dirty&&C(d,f=g,f),38&e.$$.dirty&&(h(2,y=f),y&&(h(1,m=y.results.map((e=>{let{excerpts:a}=e;return a=a.slice(0,3),a.sort(He),o=((e,t)=>{for(var s in t||(t={}))n.call(t,s)&&i(e,s,t[s]);if(r)for(var s of r(t))l.call(t,s)&&i(e,s,t[s]);return e})({},e),t(o,s({excerpts:a}));var o}))),m.sort(He)))},[g,m,y,p,d,f,function(){g=this.value,h(0,g)},()=>h(0,g="")]}export default class extends u{constructor(e){super(),h(this,e,Ue,Ce,f,{})}}