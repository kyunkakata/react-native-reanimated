"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>ue,contentTitle:()=>le,default:()=>pe,frontMatter:()=>oe,metadata:()=>ie,toc:()=>ce});var r=n(7462),a=n(7294),o=n(3905);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}function u(e){var t=(0,a.useRef)(e),n=(0,a.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,n.current}var c=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),e>n?n:e<t?t:e},s=function(e){return"touches"in e},p=function(e){return e&&e.ownerDocument.defaultView||self},m=function(e,t,n){var r=e.getBoundingClientRect(),a=s(t)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].identifier===t)return e[n];return e[0]}(t.touches,n):t;return{left:c((a.pageX-(r.left+p(e).pageXOffset))/r.width),top:c((a.pageY-(r.top+p(e).pageYOffset))/r.height)}},f=function(e){!s(e)&&e.preventDefault()},d=a.memo((function(e){var t=e.onMove,n=e.onKey,r=i(e,["onMove","onKey"]),o=(0,a.useRef)(null),c=u(t),d=u(n),h=(0,a.useRef)(null),g=(0,a.useRef)(!1),v=(0,a.useMemo)((function(){var e=function(e){f(e),(s(e)?e.touches.length>0:e.buttons>0)&&o.current?c(m(o.current,e,h.current)):n(!1)},t=function(){return n(!1)};function n(n){var r=g.current,a=p(o.current),l=n?a.addEventListener:a.removeEventListener;l(r?"touchmove":"mousemove",e),l(r?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,r=o.current;if(r&&(f(t),!function(e,t){return t&&!s(e)}(t,g.current)&&r)){if(s(t)){g.current=!0;var a=t.changedTouches||[];a.length&&(h.current=a[0].identifier)}r.focus(),c(m(r,t,h.current)),n(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),d({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},n]}),[d,c]),b=v[0],k=v[1],y=v[2];return(0,a.useEffect)((function(){return y}),[y]),a.createElement("div",l({},r,{onTouchStart:b,onMouseDown:b,className:"react-colorful__interactive",ref:o,onKeyDown:k,tabIndex:0,role:"slider"}))})),h=function(e){return e.filter(Boolean).join(" ")},g=function(e){var t=e.color,n=e.left,r=e.top,o=void 0===r?.5:r,l=h(["react-colorful__pointer",e.className]);return a.createElement("div",{className:l,style:{top:100*o+"%",left:100*n+"%"}},a.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},v=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*e)/n},b=(Math.PI,function(e){return N(k(e))}),k=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?v(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?v(parseInt(e.substring(6,8),16)/255,2):1}},y=function(e){return _(C(e))},E=function(e){var t=e.s,n=e.v,r=e.a,a=(200-t)*n/100;return{h:v(e.h),s:v(a>0&&a<200?t*n/100/(a<=100?a:200-a)*100:0),l:v(a/2),a:v(r,2)}},w=function(e){var t=E(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},C=function(e){var t=e.h,n=e.s,r=e.v,a=e.a;t=t/360*6,n/=100,r/=100;var o=Math.floor(t),l=r*(1-n),i=r*(1-(t-o)*n),u=r*(1-(1-t+o)*n),c=o%6;return{r:v(255*[r,i,l,l,u,r][c]),g:v(255*[u,r,r,i,l,l][c]),b:v(255*[l,l,u,r,r,i][c]),a:v(a,2)}},x=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},_=function(e){var t=e.r,n=e.g,r=e.b,a=e.a,o=a<1?x(v(255*a)):"";return"#"+x(t)+x(n)+x(r)+o},N=function(e){var t=e.r,n=e.g,r=e.b,a=e.a,o=Math.max(t,n,r),l=o-Math.min(t,n,r),i=l?o===t?(n-r)/l:o===n?2+(r-t)/l:4+(t-n)/l:0;return{h:v(60*(i<0?i+6:i)),s:v(o?l/o*100:0),v:v(o/255*100),a:a}},O=a.memo((function(e){var t=e.hue,n=e.onChange,r=h(["react-colorful__hue",e.className]);return a.createElement("div",{className:r},a.createElement(d,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:c(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":v(t),"aria-valuemax":"360","aria-valuemin":"0"},a.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:w({h:t,s:100,v:100,a:1})})))})),M=a.memo((function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:w({h:t.h,s:100,v:100,a:1})};return a.createElement("div",{className:"react-colorful__saturation",style:r},a.createElement(d,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:c(t.s+100*e.left,0,100),v:c(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+v(t.s)+"%, Brightness "+v(t.v)+"%"},a.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:w(t)})))})),S=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},j=function(e,t){return e.toLowerCase()===t.toLowerCase()||S(k(e),k(t))};function R(e,t,n){var r=u(n),o=(0,a.useState)((function(){return e.toHsva(t)})),l=o[0],i=o[1],c=(0,a.useRef)({color:t,hsva:l});(0,a.useEffect)((function(){if(!e.equal(t,c.current.color)){var n=e.toHsva(t);c.current={hsva:n,color:t},i(n)}}),[t,e]),(0,a.useEffect)((function(){var t;S(l,c.current.hsva)||e.equal(t=e.fromHsva(l),c.current.color)||(c.current={hsva:l,color:t},r(t))}),[l,e,r]);var s=(0,a.useCallback)((function(e){i((function(t){return Object.assign({},t,e)}))}),[]);return[l,s]}var I,B="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,F=new Map,H=function(e){B((function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!F.has(t)){var r=t.createElement("style");r.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',F.set(t,r);var a=I||n.nc;a&&r.setAttribute("nonce",a),t.head.appendChild(r)}}),[])},T=function(e){var t=e.className,n=e.colorModel,r=e.color,o=void 0===r?n.defaultColor:r,u=e.onChange,c=i(e,["className","colorModel","color","onChange"]),s=(0,a.useRef)(null);H(s);var p=R(n,o,u),m=p[0],f=p[1],d=h(["react-colorful",t]);return a.createElement("div",l({},c,{ref:s,className:d}),a.createElement(M,{hsva:m,onChange:f}),a.createElement(O,{hue:m.h,onChange:f,className:"react-colorful__last-control"}))},P={defaultColor:"000",toHsva:b,fromHsva:function(e){return y({h:e.h,s:e.s,v:e.v,a:1})},equal:j},V=function(e){return a.createElement(T,l({},e,{colorModel:P}))},A=/^#?([0-9A-F]{3,8})$/i,D=function(e){var t=e.color,n=void 0===t?"":t,r=e.onChange,o=e.onBlur,c=e.escape,s=e.validate,p=e.format,m=e.process,f=i(e,["color","onChange","onBlur","escape","validate","format","process"]),d=(0,a.useState)((function(){return c(n)})),h=d[0],g=d[1],v=u(r),b=u(o),k=(0,a.useCallback)((function(e){var t=c(e.target.value);g(t),s(t)&&v(m?m(t):t)}),[c,m,s,v]),y=(0,a.useCallback)((function(e){s(e.target.value)||g(c(n)),b(e)}),[n,c,s,b]);return(0,a.useEffect)((function(){g(c(n))}),[n,c]),a.createElement("input",l({},f,{value:p?p(h):h,spellCheck:"false",onChange:k,onBlur:y}))},G=function(e){return"#"+e},L=function(e){var t=e.prefixed,n=e.alpha,r=i(e,["prefixed","alpha"]),o=(0,a.useCallback)((function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,n?8:6)}),[n]),u=(0,a.useCallback)((function(e){return function(e,t){var n=A.exec(e),r=n?n[1].length:0;return 3===r||6===r||!!t&&4===r||!!t&&8===r}(e,n)}),[n]);return a.createElement(D,l({},r,{escape:o,format:t?G:void 0,process:G,validate:u}))};const z="smallBox_jmBB",q="animatedBox_Q0MY",K="row_cF5w",X="gap_zuK6",U="marginTop_oKpp",Y="marginLeft_jZ7X",Z="form_lbN6",J=e=>("#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16)}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}),Q=(e,t)=>({r:Math.pow(e.r/255,t),g:Math.pow(e.g/255,t),b:Math.pow(e.b/255,t)}),W=(e,t,n,r)=>(t=Q(t,r),n=Q(n,r),((e,t)=>({r:Math.round(255*Math.pow(e.r,1/t)),g:Math.round(255*Math.pow(e.g,1/t)),b:Math.round(255*Math.pow(e.b,1/t))}))({r:t.r+(n.r-t.r)*e,g:t.g+(n.g-t.g)*e,b:t.b+(n.b-t.b)*e},r)),$=e=>{const{r:t,g:n,b:r}=e,a=Math.max(t,n,r),o=Math.min(t,n,r),l=a-o,i=0===a?0:l/a,u=a/255;let c;switch(a){default:case o:c=0;break;case t:c=n-r+l*(n<r?6:0),c/=6*l;break;case n:c=r-t+2*l,c/=6*l;break;case r:c=t-n+4*l,c/=6*l}return{h:c,s:i,v:u}},ee=(e,t,n,r)=>{let a,o=$(t),l=$(n),i=l.h-o.h;if(r){let t=e;if(o.h>l.h){var u=l.h;l.h=o.h,o.h=u,i=-i,t=1-e}i>.5&&(o.h=o.h+1,a=(o.h+t*(l.h-o.h))%1),i<=.5&&(a=o.h+t*i)}else a=o.h+e*i;return(e=>{const{h:t,s:n,v:r}=e;let a,o,l,i,u,c,s,p;switch(i=Math.floor(6*t),u=6*t-i,c=r*(1-n),s=r*(1-u*n),p=r*(1-(1-u)*n),i%6){case 0:a=r,o=p,l=c;break;case 1:a=s,o=r,l=c;break;case 2:a=c,o=r,l=p;break;case 3:a=c,o=s,l=r;break;case 4:a=p,o=c,l=r;break;case 5:a=r,o=c,l=s}return{r:Math.round(255*a),g:Math.round(255*o),b:Math.round(255*l)}})({h:a,s:o.s+(l.s-o.s)*e,v:o.v+(l.v-o.v)*e})},te=e=>"rgb("+e.r+", "+e.g+", "+e.b+")",ne=e=>{let{color1:t,color2:n,interpolateFunction:r}=e;return a.createElement("div",{className:K},new Array(11).fill(null).map(((e,t)=>t/10)).map((e=>a.createElement("div",{key:""+e,className:z,style:{backgroundColor:te(r(t,n,e))}}))))},re=e=>{let{color1:t,color2:n,interpolateFunction:r}=e;const o=(0,a.useRef)(),l=(0,a.useRef)(0),i=(0,a.useRef)(performance.now()),u=(0,a.useRef)(t),[c,s]=(0,a.useState)(0),p=[t,n];(0,a.useEffect)((()=>{if(te(u.current)!=te(p[c]))return i.current=performance.now(),l.current=requestAnimationFrame(m),()=>cancelAnimationFrame(l.current)}),[c]),(0,a.useEffect)((()=>{const e=o.current;s(0),u.current=p[0],e&&(e.style.backgroundColor=te(p[0]))}),[t,n,o,r]);const m=e=>{let r=(e-i.current)/1e3;r>1&&(r=1),f(r),1!=r?l.current=requestAnimationFrame(m):u.current=[t,n][c]},f=e=>{const t=o.current;t&&(t.style.backgroundColor=te(r(p[1-c],p[c],e)))};return a.createElement("div",{className:K+" "+X+" "+U},a.createElement("div",{className:q,ref:o}),a.createElement("button",{type:"button",onClick:()=>s(1-c)},"Start animation!"))},ae=()=>{const[e,t]=(0,a.useState)("RGB"),[n,r]=(0,a.useState)("#00ff00"),[o,l]=(0,a.useState)("#ffc0cb"),[i,u]=(0,a.useState)(2.2),[c,s]=(0,a.useState)(!0);return a.createElement("div",null,a.createElement("div",{className:K+" "+X},a.createElement("div",null,a.createElement("h4",null,"From: ",a.createElement(L,{color:n,onChange:r,prefixed:!0})),a.createElement(V,{color:n,onChange:r})),a.createElement("div",null,a.createElement("h4",null,"To: ",a.createElement(L,{color:o,onChange:l,prefixed:!0})),a.createElement(V,{color:o,onChange:l}))),a.createElement("table",{className:U},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Mode"),a.createElement("th",null,"Result"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"RGB without gamma correction"),a.createElement("td",null,a.createElement(ne,{color1:J(n),color2:J(o),interpolateFunction:(e,t,n)=>W(n,e,t,1)}))),a.createElement("tr",null,a.createElement("td",null,"RGB with gamma = 2.2 (default)"),a.createElement("td",null,a.createElement(ne,{color1:J(n),color2:J(o),interpolateFunction:(e,t,n)=>W(n,e,t,2.2)}))),a.createElement("tr",null,a.createElement("td",null,"HSV without correction"),a.createElement("td",null,a.createElement(ne,{color1:J(n),color2:J(o),interpolateFunction:(e,t,n)=>ee(n,e,t,!1)}))),a.createElement("tr",null,a.createElement("td",null,"HSV with correction"),a.createElement("td",null,a.createElement(ne,{color1:J(n),color2:J(o),interpolateFunction:(e,t,n)=>ee(n,e,t,!0)}))))),a.createElement("div",{className:Z},a.createElement("h3",null,"Live demo"),a.createElement("label",null,"Select colorspace:",a.createElement("select",{value:e,onChange:e=>{t(e.target.value)},className:Y},a.createElement("option",{value:"RGB"},"RGB"),a.createElement("option",{value:"HSV"},"HSV"))),"RGB"===e&&a.createElement("label",null,"Gamma:",a.createElement("input",{type:"number",value:i,onChange:e=>{const t=e.target.value;u(parseFloat(t))},step:"0.1",min:"0.1",max:"10",className:Y})),"HSV"===e&&a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:c,onChange:()=>s(!c)}),"Use corrected HSV"),a.createElement(re,{color1:J(n),color2:J(o),interpolateFunction:(t,n,r)=>"RGB"===e?W(r,t,n,i):ee(r,t,n,c)})))},oe={id:"interpolateColors",title:"interpolateColor",sidebar_label:"interpolateColor"},le=void 0,ie={unversionedId:"api/miscellaneous/interpolateColors",id:"api/miscellaneous/interpolateColors",title:"interpolateColor",description:"Maps input range to output colors using linear interpolation. It works just like interpolate function but the output is color string in rgba(r, g, b, a) notation.",source:"@site/docs/api/miscellaneous/interpolateColors.mdx",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/interpolateColors",permalink:"/react-native-reanimated/docs/next/api/miscellaneous/interpolateColors",draft:!1,tags:[],version:"current",frontMatter:{id:"interpolateColors",title:"interpolateColor",sidebar_label:"interpolateColor"},sidebar:"docs",previous:{title:"runOnUI",permalink:"/react-native-reanimated/docs/next/api/miscellaneous/runOnUI"},next:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/next/guide/testing"}},ue={},ce=[{value:"Arguments",id:"arguments",level:3},{value:"<code>value</code> Float",id:"value-float",level:4},{value:"<code>input range</code> [Float[]]",id:"input-range-float",level:4},{value:"<code>output range</code> [(string | number)[]]",id:"output-range-string--number",level:4},{value:"<code>color space</code> String",id:"color-space-string",level:4},{value:"<code>options</code> Object",id:"options-object",level:4},{value:"Returns",id:"returns",level:3},{value:"Options explanation",id:"options-explanation",level:3},{value:"Example",id:"example",level:2},{value:"Playground",id:"playground",level:2}],se={toc:ce};function pe(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},se,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Maps input range to output colors using linear interpolation. It works just like ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," function but the output is color string in ",(0,o.kt)("inlineCode",{parentName:"p"},"rgba(r, g, b, a)")," notation."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"value-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"value")," ","[Float]"),(0,o.kt)("p",null,"Value from within the input range that should be mapped to a value from the output range."),(0,o.kt)("h4",{id:"input-range-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"input range")," [Float[]]"),(0,o.kt)("p",null,"An array of Floats that contains points that indicate the range of the input value. Values in the input range should be increasing."),(0,o.kt)("h4",{id:"output-range-string--number"},(0,o.kt)("inlineCode",{parentName:"h4"},"output range")," [(string | number)[]]"),(0,o.kt)("p",null,"An array of colors (strings like ",(0,o.kt)("inlineCode",{parentName:"p"},"'red'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'#ff0000'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'rgba(255, 0, 0, 0.5)'")," etc.) that contains points that indicate the range of the output value. It should have at least the same number of points as the input range."),(0,o.kt)("h4",{id:"color-space-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"color space")," ","[String]"),(0,o.kt)("p",null,"Can be either ",(0,o.kt)("inlineCode",{parentName:"p"},"'RGB'")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'HSV'"),"."),(0,o.kt)("h4",{id:"options-object"},(0,o.kt)("inlineCode",{parentName:"h4"},"options")," ","[Object]"),(0,o.kt)("p",null,"Object containg color interpolation options. Allowed parameters are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gamma"),(0,o.kt)("td",{parentName:"tr",align:null},"2.2"),(0,o.kt)("td",{parentName:"tr",align:null},"Gamma parameter used in gamma correction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useCorrectedHSVInterpolation"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"See ",(0,o.kt)("a",{parentName:"td",href:"#options-explanation"},"Options explanation")," section")))),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"interpolateColor")," returns the color after interpolation from within the output range in ",(0,o.kt)("inlineCode",{parentName:"p"},"rgba(r, g, b, a)")," format."),(0,o.kt)("h3",{id:"options-explanation"},"Options explanation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"gamma")," - Colors on web / mobile are expressed in sRGB colorspace which is gamma-corrected, that is non-linear.\nOperations on colors in non-linear space like addition will give wrong results. For example the interpolated color\nmay appear darker than it should. That's why when interpolating we convert sRGB to linear space first and then convert\nthe result back into non-linear sRGB space. Gamma correction is device-dependent but for most devices to convert\nfrom non-linear to linear space raising components to the power of gamma=2.2 is a good approximation. If you'd like to\ndisable that you can always set gamma=1. A nice article on that if you'd like to know more: ",(0,o.kt)("a",{parentName:"li",href:"https://observablehq.com/@sebastien/srgb-rgb-gamma"},"https://observablehq.com/@sebastien/srgb-rgb-gamma")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"useCorrectedHSVInterpolation")," - Sometimes (for example when interpolating from yellow to purple) HSV interpolation goes\nthrough many other hues. This option allows to reduce the number of hues in such cases by treating HSV hues like a circular spectrum and choosing\nthe shortest arc (so instead of going from yellow to purple through green and blue, it goes only through red).")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Component = () => {\n  const progress = useSharedValue(0);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      backgroundColor: interpolateColor(\n        progress.value,\n        [0, 1],\n        ['red', 'green']\n      ),\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[{ width: 100, height: 100 }, animatedStyle]} />\n      <Button\n        onPress={() => {\n          progress.value = withTiming(1 - progress.value, { duration: 1000 });\n        }}\n        title=\"run animation\"\n      />\n    </View>\n  );\n};\n")),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(ae,{mdxType:"ColorWidgets"}))}pe.isMDXComponent=!0}}]);