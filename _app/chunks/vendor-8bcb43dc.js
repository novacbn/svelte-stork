function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function c(t,e,n){t.$$.on_destroy.push(i(e,n))}function u(t,e,n,s){if(t){const r=a(t,e,n,s);return t[0](r)}}function a(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function f(t,e,n,s,r,l,o){const i=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,l);if(i){const r=a(e,n,s,o);t.p(r,i)}}function h(t,e,n=e){return t.set(n),e}function g(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function _(){return m("")}function b(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t){return Array.from(t.childNodes)}function v(t,e,n,s){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const l=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||l.push(t.name)}for(let t=0;t<l.length;t++)s.removeAttribute(l[t]);return t.splice(r,1)[0]}}return s?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):y(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return m(e)}function q(t){return w(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function A(t,e,n){t.classList[n?"add":"remove"](e)}class M{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)d(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}let S;function I(t){S=t}function j(){if(!S)throw new Error("Function called outside component initialization");return S}function L(t){j().$$.on_mount.push(t)}function O(t){j().$$.after_update.push(t)}function T(t,e){j().$$.context.set(t,e)}function P(t){return j().$$.context.get(t)}const R=[],z=[],C=[],D=[],V=Promise.resolve();let B=!1;function F(t){C.push(t)}let H=!1;const K=new Set;function U(){if(!H){H=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];I(e),G(e.$$)}for(I(null),R.length=0;z.length;)z.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];K.has(e)||(K.add(e),e())}C.length=0}while(R.length);for(;D.length;)D.pop()();B=!1,H=!1,K.clear()}}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const J=new Set;let Q;function W(){Q={r:0,c:[],p:Q}}function X(){Q.r||r(Q.c),Q=Q.p}function Y(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Z(t,e,n,s){if(t&&t.o){if(J.has(t))return;J.add(t),Q.c.push((()=>{J.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function tt(t,e){const n=e.token={};function s(t,s,r,l){if(e.token!==n)return;e.resolved=l;let o=e.ctx;void 0!==r&&(o=o.slice(),o[r]=l);const i=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(W(),Z(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),X())})):e.block.d(1),i.c(),Y(i,1),i.m(e.mount(),e.anchor),c=!0),e.block=i,e.blocks&&(e.blocks[s]=i),c&&U()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=j();if(t.then((t=>{I(n),s(e.then,1,e.value,t),I(null)}),(t=>{if(I(n),s(e.catch,2,e.error,t),I(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var r}function et(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function nt(t,e){Z(t,1,1,(()=>{e.delete(t.key)}))}function st(t,e,n,s,r,l,o,i,c,u,a,f){let h=t.length,g=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],m=new Map,$=new Map;for(d=g;d--;){const t=f(r,l,d),i=n(t);let c=o.get(i);c?s&&c.p(t,e):(c=u(i,t),c.c()),m.set(i,y[d]=c),i in p&&$.set(i,Math.abs(d-p[i]))}const _=new Set,b=new Set;function x(t){Y(t,1),t.m(i,a),o.set(t.key,t),a=t.first,g--}for(;h&&g;){const e=y[g-1],n=t[h-1],s=e.key,r=n.key;e===n?(a=e.first,h--,g--):m.has(r)?!o.has(s)||_.has(s)?x(e):b.has(r)?h--:$.get(s)>$.get(r)?(b.add(s),x(e)):(_.add(r),h--):(c(n,o),h--)}for(;h--;){const e=t[h];m.has(e.key)||c(e,o)}for(;g;)x(y[g-1]);return y}function rt(t,e){const n={},s={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],i=e[l];if(i){for(const t in o)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[l]=i}else for(const t in o)r[t]=1}for(const o in s)o in n||(n[o]=void 0);return n}function lt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function it(t,e){t&&t.l(e)}function ct(t,e,s,o){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,s),o||F((()=>{const e=c.map(n).filter(l);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(F)}function ut(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(R.push(t),B||(B=!0,V.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,l,o,i,c,u=[-1]){const a=S;I(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1};let h=!1;if(f.ctx=l?l(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&at(e,t)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=k(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&Y(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),U()}I(a)}class ht{$destroy(){ut(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt=[];function dt(e,n=t){let s;const r=[];function l(t){if(o(e,t)&&(e=t,s)){const t=!gt.length;for(let n=0;n<r.length;n+=1){const t=r[n];t[1](),gt.push(t,e)}if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(o,i=t){const c=[o,i];return r.push(c),1===r.length&&(s=n(l)||t),o(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function pt(t,e=0){let n;return(...s)=>{n&&(n(),n=null),n=function(t,e=0){const n=setTimeout((()=>t()),e);return()=>clearTimeout(n)}((()=>t(...s)),e)}}async function yt(t){const{index_name:e,index_url:n,wasm_url:s}=t,r=window.stork;if(!r)throw new ReferenceError("bad dispatch to 'register' (Stork namespace not found)");try{await r.initialize(s)}catch(l){throw new Error("bad option 'IRegisterOptions.wasm_url' to 'register' (failed to download and initialize WASM blob)")}try{await r.downloadIndex(e,n)}catch(l){throw new Error("bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)")}}function mt(t){if("undefined"==typeof window)return{subscribe:dt(null,e).subscribe};var e;const{debounce:n=250,index_name:s,minimum_length:r=3}=t,l=window.stork;if(!l)throw new ReferenceError("bad dispatch to 'search' (Stork namespace not found)");const o=dt(null),{set:c,subscribe:u}=o,a=pt((t=>{if(t&&t.length>=r){const e=l.search(s,t);c(e)}else c(null)}),n);return{set:a,subscribe:u,update(t){const e=t(function(t){let e;return i(t,(t=>e=t))(),e}(o));a(e)}}}function $t(e){let n,s,r,l,o;return{c(){n=y("div"),s=m("Powered by "),r=y("a"),l=m("Stork"),this.h()},l(t){n=v(t,"DIV",{class:!0,style:!0});var e=k(n);s=w(e,"Powered by "),r=v(e,"A",{href:!0,target:!0,rel:!0});var o=k(r);l=w(o,"Stork"),o.forEach(p),e.forEach(p),this.h()},h(){x(r,"href","https://stork-search.net"),x(r,"target","_blank"),x(r,"rel","noopener noreferrer"),x(n,"class",o="svelte-stork-attribution "+e[1]),x(n,"style",e[2])},m(t,o){d(t,n,o),g(n,s),g(n,r),g(r,l),e[3](n)},p(t,[e]){2&e&&o!==(o="svelte-stork-attribution "+t[1])&&x(n,"class",o),4&e&&x(n,"style",t[2])},i:t,o:t,d(t){t&&p(n),e[3](null)}}}function _t(t,e,n){let{element:s=null}=e,{class:r=""}=e,{style:l}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"class"in t&&n(1,r=t.class),"style"in t&&n(2,l=t.style)},[s,r,l,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class bt extends ht{constructor(t){super(),ft(this,t,_t,$t,o,{element:0,class:1,style:2})}}function xt(e){let n;return{c(){n=m("No files found.")},l(t){n=w(t,"No files found.")},m(t,e){d(t,n,e)},p:t,d(t){t&&p(n)}}}function kt(t){let e,n,s=t[3].total_hit_count+"";return{c(){e=m(s),n=m(" files found.")},l(t){e=w(t,s),n=w(t," files found.")},m(t,s){d(t,e,s),d(t,n,s)},p(t,n){8&n&&s!==(s=t[3].total_hit_count+"")&&E(e,s)},d(t){t&&p(e),t&&p(n)}}}function vt(e){let n,s;function r(t,e){return t[3].total_hit_count>0?kt:xt}let l=r(e),o=l(e);return{c(){n=y("div"),o.c(),this.h()},l(t){n=v(t,"DIV",{class:!0,style:!0});var e=k(n);o.l(e),e.forEach(p),this.h()},h(){x(n,"class",s="svelte-stork-message "+e[1]),x(n,"style",e[2])},m(t,s){d(t,n,s),o.m(n,null),e[4](n)},p(t,[e]){l===(l=r(t))&&o?o.p(t,e):(o.d(1),o=l(t),o&&(o.c(),o.m(n,null))),2&e&&s!==(s="svelte-stork-message "+t[1])&&x(n,"class",s),4&e&&x(n,"style",t[2])},i:t,o:t,d(t){t&&p(n),o.d(),e[4](null)}}}function wt(t,e,n){let{element:s=null}=e,{class:r=""}=e,{style:l}=e,{query:o}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"class"in t&&n(1,r=t.class),"style"in t&&n(2,l=t.style),"query"in t&&n(3,o=t.query)},[s,r,l,o,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class qt extends ht{constructor(t){super(),ft(this,t,wt,vt,o,{element:0,class:1,style:2,query:3})}}function Et(t,e,n){const s=t.slice();return s[5]=e[n][0],s[6]=e[n][1],s}function Nt(t){let e,n=t[5]+"";return{c(){e=m(n)},l(t){e=w(t,n)},m(t,n){d(t,e,n)},p(t,s){4&s&&n!==(n=t[5]+"")&&E(e,n)},d(t){t&&p(e)}}}function At(t){let e,n,s,r=t[5]+"";return{c(){e=y("mark"),n=m(r),this.h()},l(t){e=v(t,"MARK",{class:!0,style:!0});var s=k(e);n=w(s,r),s.forEach(p),this.h()},h(){x(e,"class",s="svelte-stork-highlight "+t[0]),x(e,"style",t[1])},m(t,s){d(t,e,s),g(e,n)},p(t,l){4&l&&r!==(r=t[5]+"")&&E(n,r),1&l&&s!==(s="svelte-stork-highlight "+t[0])&&x(e,"class",s),2&l&&x(e,"style",t[1])},d(t){t&&p(e)}}}function Mt(t){let e;function n(t,e){return t[6]?At:Nt}let s=n(t),r=s(t);return{c(){r.c(),e=_()},l(t){r.l(t),e=_()},m(t,n){r.m(t,n),d(t,e,n)},p(t,l){s===(s=n(t))&&r?r.p(t,l):(r.d(1),r=s(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&p(e)}}}function St(e){let n,s=e[2],r=[];for(let t=0;t<s.length;t+=1)r[t]=Mt(Et(e,s,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=_()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);n=_()},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);d(t,n,e)},p(t,[e]){if(7&e){let l;for(s=t[2],l=0;l<s.length;l+=1){const o=Et(t,s,l);r[l]?r[l].p(o,e):(r[l]=Mt(o),r[l].c(),r[l].m(n.parentNode,n))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},i:t,o:t,d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&p(n)}}}function It(t,e,n){let s,{class:r=""}=e,{style:l}=e,{ranges:o=[]}=e,{text:i}=e;return t.$$set=t=>{"class"in t&&n(0,r=t.class),"style"in t&&n(1,l=t.style),"ranges"in t&&n(3,o=t.ranges),"text"in t&&n(4,i=t.text)},t.$$.update=()=>{24&t.$$.dirty&&n(2,s=o.length>0?o.reduce(((t,e,n)=>{const{beginning:s,end:r}=e;if(0===n&&s>0&&t.push([i.slice(0,s),!1]),t.push([i.slice(s,r),!0]),r<i.length-1){const e=o[n+1],s=e?e.beginning:i.length;t.push([i.slice(r,s),!1])}return t}),[]):[[i,!1]])},[r,l,s,o,i]}class jt extends ht{constructor(t){super(),ft(this,t,It,St,o,{class:0,style:1,ranges:3,text:4})}}function Lt(t){let e,n,s,r;return n=new jt({props:{ranges:t[4],text:t[3].title}}),{c(){e=y("p"),ot(n.$$.fragment),this.h()},l(t){e=v(t,"P",{class:!0,style:!0});var s=k(e);it(n.$$.fragment,s),s.forEach(p),this.h()},h(){x(e,"class",s="svelte-stork-entry-title "+t[1]),x(e,"style",t[2])},m(s,l){d(s,e,l),ct(n,e,null),t[5](e),r=!0},p(t,[l]){const o={};16&l&&(o.ranges=t[4]),8&l&&(o.text=t[3].title),n.$set(o),(!r||2&l&&s!==(s="svelte-stork-entry-title "+t[1]))&&x(e,"class",s),(!r||4&l)&&x(e,"style",t[2])},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){Z(n.$$.fragment,t),r=!1},d(s){s&&p(e),ut(n),t[5](null)}}}function Ot(t,e,n){let{element:s=null}=e,{class:r=""}=e,{style:l}=e,{entry:o}=e,{title_highlight_ranges:i}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"class"in t&&n(1,r=t.class),"style"in t&&n(2,l=t.style),"entry"in t&&n(3,o=t.entry),"title_highlight_ranges"in t&&n(4,i=t.title_highlight_ranges)},[s,r,l,o,i,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class Tt extends ht{constructor(t){super(),ft(this,t,Ot,Lt,o,{element:0,class:1,style:2,entry:3,title_highlight_ranges:4})}}function Pt(t){let e,n,s,r,l,o;return s=new jt({props:{ranges:t[3].highlight_ranges,text:t[3].text}}),{c(){e=y("p"),n=m("..."),ot(s.$$.fragment),r=m("..."),this.h()},l(t){e=v(t,"P",{class:!0,style:!0});var l=k(e);n=w(l,"..."),it(s.$$.fragment,l),r=w(l,"..."),l.forEach(p),this.h()},h(){x(e,"class",l="svelte-stork-excerpt "+t[1]),x(e,"style",t[2])},m(l,i){d(l,e,i),g(e,n),ct(s,e,null),g(e,r),t[4](e),o=!0},p(t,[n]){const r={};8&n&&(r.ranges=t[3].highlight_ranges),8&n&&(r.text=t[3].text),s.$set(r),(!o||2&n&&l!==(l="svelte-stork-excerpt "+t[1]))&&x(e,"class",l),(!o||4&n)&&x(e,"style",t[2])},i(t){o||(Y(s.$$.fragment,t),o=!0)},o(t){Z(s.$$.fragment,t),o=!1},d(n){n&&p(e),ut(s),t[4](null)}}}function Rt(t,e,n){let{element:s=null}=e,{class:r=""}=e,{style:l}=e,{excerpt:o}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"class"in t&&n(1,r=t.class),"style"in t&&n(2,l=t.style),"excerpt"in t&&n(3,o=t.excerpt)},[s,r,l,o,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class zt extends ht{constructor(t){super(),ft(this,t,Rt,Pt,o,{element:0,class:1,style:2,excerpt:3})}}function Ct(t,e,n){const s=t.slice();return s[8]=e[n],s}function Dt(t,e){let n,s,r;return s=new zt({props:{excerpt:e[8]}}),{key:t,first:null,c(){n=_(),ot(s.$$.fragment),this.h()},l(t){n=_(),it(s.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){d(t,n,e),ct(s,t,e),r=!0},p(t,n){e=t;const r={};8&n&&(r.excerpt=e[8]),s.$set(r)},i(t){r||(Y(s.$$.fragment,t),r=!0)},o(t){Z(s.$$.fragment,t),r=!1},d(t){t&&p(n),ut(s,t)}}}function Vt(t){let e,n,s,r,l,o,i=[],c=new Map;n=new Tt({props:{entry:t[4],title_highlight_ranges:t[6]}});let u=t[3];const a=t=>t[8].text;for(let f=0;f<u.length;f+=1){let e=Ct(t,u,f),n=a(e);c.set(n,i[f]=Dt(n,e))}return{c(){e=y("a"),ot(n.$$.fragment),s=$();for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=v(t,"A",{class:!0,href:!0,target:!0,rel:!0,style:!0});var r=k(e);it(n.$$.fragment,r),s=q(r);for(let e=0;e<i.length;e+=1)i[e].l(r);r.forEach(p),this.h()},h(){x(e,"class",r="svelte-stork-entry "+t[1]),x(e,"href",l=""+(t[5].url_prefix+t[4].url)),x(e,"target","_blank"),x(e,"rel","noopener noreferrer"),x(e,"style",t[2])},m(r,l){d(r,e,l),ct(n,e,null),g(e,s);for(let t=0;t<i.length;t+=1)i[t].m(e,null);t[7](e),o=!0},p(t,[s]){const f={};16&s&&(f.entry=t[4]),64&s&&(f.title_highlight_ranges=t[6]),n.$set(f),8&s&&(u=t[3],W(),i=st(i,s,a,1,t,u,c,e,nt,Dt,null,Ct),X()),(!o||2&s&&r!==(r="svelte-stork-entry "+t[1]))&&x(e,"class",r),(!o||48&s&&l!==(l=""+(t[5].url_prefix+t[4].url)))&&x(e,"href",l),(!o||4&s)&&x(e,"style",t[2])},i(t){if(!o){Y(n.$$.fragment,t);for(let t=0;t<u.length;t+=1)Y(i[t]);o=!0}},o(t){Z(n.$$.fragment,t);for(let e=0;e<i.length;e+=1)Z(i[e]);o=!1},d(s){s&&p(e),ut(n);for(let t=0;t<i.length;t+=1)i[t].d();t[7](null)}}}function Bt(t,e,n){let{element:s=null}=e,{class:r=""}=e,{style:l}=e,{excerpts:o}=e,{entry:i}=e,{query:c}=e,{title_highlight_ranges:u}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"class"in t&&n(1,r=t.class),"style"in t&&n(2,l=t.style),"excerpts"in t&&n(3,o=t.excerpts),"entry"in t&&n(4,i=t.entry),"query"in t&&n(5,c=t.query),"title_highlight_ranges"in t&&n(6,u=t.title_highlight_ranges)},[s,r,l,o,i,c,u,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class Ft extends ht{constructor(t){super(),ft(this,t,Bt,Vt,o,{element:0,class:1,style:2,excerpts:3,entry:4,query:5,title_highlight_ranges:6})}}function Ht(t){let e,n,s;return n=new Ft({props:{entry:t[2].entry,excerpts:t[2].excerpts,title_highlight_ranges:t[2].title_highlight_ranges,query:t[3]}}),{c(){e=y("li"),ot(n.$$.fragment),this.h()},l(t){e=v(t,"LI",{class:!0,style:!0});var s=k(e);it(n.$$.fragment,s),s.forEach(p),this.h()},h(){x(e,"class","svelte-stork-result "+Kt),x(e,"style",t[1])},m(r,l){d(r,e,l),ct(n,e,null),t[4](e),s=!0},p(t,[r]){const l={};4&r&&(l.entry=t[2].entry),4&r&&(l.excerpts=t[2].excerpts),4&r&&(l.title_highlight_ranges=t[2].title_highlight_ranges),8&r&&(l.query=t[3]),n.$set(l),(!s||2&r)&&x(e,"style",t[1])},i(t){s||(Y(n.$$.fragment,t),s=!0)},o(t){Z(n.$$.fragment,t),s=!1},d(s){s&&p(e),ut(n),t[4](null)}}}let Kt="";function Ut(t,e,n){let{element:s=null}=e,{style:r}=e,{result:l}=e,{query:o}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"style"in t&&n(1,r=t.style),"result"in t&&n(2,l=t.result),"query"in t&&n(3,o=t.query)},[s,r,l,o,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class Gt extends ht{constructor(t){super(),ft(this,t,Ut,Ht,o,{element:0,style:1,result:2,query:3})}}function Jt(t,e,n){const s=t.slice();return s[5]=e[n],s}function Qt(t,e){let n,s,r;return s=new Gt({props:{query:e[3],result:e[5]}}),{key:t,first:null,c(){n=_(),ot(s.$$.fragment),this.h()},l(t){n=_(),it(s.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){d(t,n,e),ct(s,t,e),r=!0},p(t,n){e=t;const r={};8&n&&(r.query=e[3]),4&n&&(r.result=e[5]),s.$set(r)},i(t){r||(Y(s.$$.fragment,t),r=!0)},o(t){Z(s.$$.fragment,t),r=!1},d(t){t&&p(n),ut(s,t)}}}function Wt(t){let e,n,s=[],r=new Map,l=t[2];const o=t=>t[5].entry.url;for(let i=0;i<l.length;i+=1){let e=Jt(t,l,i),n=o(e);r.set(n,s[i]=Qt(n,e))}return{c(){e=y("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=v(t,"UL",{class:!0,style:!0});var n=k(e);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(p),this.h()},h(){x(e,"class","svelte-stork-results "+Xt),x(e,"style",t[1])},m(r,l){d(r,e,l);for(let t=0;t<s.length;t+=1)s[t].m(e,null);t[4](e),n=!0},p(t,[i]){12&i&&(l=t[2],W(),s=st(s,i,o,1,t,l,r,e,nt,Qt,null,Jt),X()),(!n||2&i)&&x(e,"style",t[1])},i(t){if(!n){for(let t=0;t<l.length;t+=1)Y(s[t]);n=!0}},o(t){for(let e=0;e<s.length;e+=1)Z(s[e]);n=!1},d(n){n&&p(e);for(let t=0;t<s.length;t+=1)s[t].d();t[4](null)}}}let Xt="";function Yt(t,e,n){let{element:s=null}=e,{style:r}=e,{results:l}=e,{query:o}=e;return t.$$set=t=>{"element"in t&&n(0,s=t.element),"style"in t&&n(1,r=t.style),"results"in t&&n(2,l=t.results),"query"in t&&n(3,o=t.query)},[s,r,l,o,function(t){z[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class Zt extends ht{constructor(t){super(),ft(this,t,Yt,Wt,o,{element:0,style:1,results:2,query:3})}}function te(t){let e,n;return e=new Zt({props:{results:t[4],query:t[3]}}),{c(){ot(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,s){ct(e,t,s),n=!0},p(t,n){const s={};16&n&&(s.results=t[4]),8&n&&(s.query=t[3]),e.$set(s)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function ee(t){let e,n,s,r,l,o,i;n=new qt({props:{query:t[3]}});let c=t[4].length>0&&te(t);return l=new bt({}),{c(){e=y("div"),ot(n.$$.fragment),s=$(),c&&c.c(),r=$(),ot(l.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0,style:!0});var o=k(e);it(n.$$.fragment,o),s=q(o),c&&c.l(o),r=q(o),it(l.$$.fragment,o),o.forEach(p),this.h()},h(){x(e,"class",o="svelte-stork-output "+t[1]),x(e,"style",t[2])},m(o,u){d(o,e,u),ct(n,e,null),g(e,s),c&&c.m(e,null),g(e,r),ct(l,e,null),t[6](e),i=!0},p(t,[s]){const l={};8&s&&(l.query=t[3]),n.$set(l),t[4].length>0?c?(c.p(t,s),16&s&&Y(c,1)):(c=te(t),c.c(),Y(c,1),c.m(e,r)):c&&(W(),Z(c,1,1,(()=>{c=null})),X()),(!i||2&s&&o!==(o="svelte-stork-output "+t[1]))&&x(e,"class",o),(!i||4&s)&&x(e,"style",t[2])},i(t){i||(Y(n.$$.fragment,t),Y(c),Y(l.$$.fragment,t),i=!0)},o(t){Z(n.$$.fragment,t),Z(c),Z(l.$$.fragment,t),i=!1},d(s){s&&p(e),ut(n),c&&c.d(),ut(l),t[6](null)}}}function ne(t,e,n){let s,{element:r=null}=e,{class:l=""}=e,{style:o}=e,{query:i}=e,{results:c}=e;return t.$$set=t=>{"element"in t&&n(0,r=t.element),"class"in t&&n(1,l=t.class),"style"in t&&n(2,o=t.style),"query"in t&&n(3,i=t.query),"results"in t&&n(5,c=t.results)},t.$$.update=()=>{40&t.$$.dirty&&n(4,s=c||i.results)},[r,l,o,i,s,c,function(t){z[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class se extends ht{constructor(t){super(),ft(this,t,ne,ee,o,{element:0,class:1,style:2,query:3,results:5})}}export{e as A,W as B,dt as C,P as D,u as E,A as F,g as G,f as H,c as I,t as J,M as K,yt as L,mt as M,h as N,tt as O,et as P,N as Q,b as R,ht as S,r as T,se as U,k as a,x as b,v as c,p as d,y as e,d as f,w as g,E as h,ft as i,ot as j,$ as k,_ as l,it as m,q as n,ct as o,rt as p,lt as q,Z as r,o as s,m as t,X as u,Y as v,ut as w,T as x,O as y,L as z};
