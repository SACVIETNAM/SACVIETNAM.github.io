import{r as g,j as i,a6 as M,a7 as C}from"./index-a474a351.js";import{G as P}from"./iconBase-aef1e179.js";import{i as I,p as R,v as Y,d as F,e as G,f as x,g as V,h as X,b as D,w as U,j as v,c as _,u as B,m as b,E as q}from"./useLang-ee5e60b0.js";import{L as K}from"./index-8dd2b5eb.js";import{A as O}from"./index-252c24af.js";import{P as J}from"./index-9871ebde.js";import{c as $}from"./index.esm-1bee1ab6.js";import{d as Q}from"./index.esm-0e98f0d4.js";import"./zoom-8cb5ff56.js";function Z(e,t,r){var s;if(typeof e=="string"){let n=document;t&&(I(!!t.current),n=t.current),r?((s=r[e])!==null&&s!==void 0||(r[e]=n.querySelectorAll(e)),e=r[e]):e=n.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const w=new WeakMap;let h;function ee(e,t){if(t){const{inlineSize:r,blockSize:s}=t[0];return{width:r,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function te({target:e,contentRect:t,borderBoxSize:r}){var s;(s=w.get(e))===null||s===void 0||s.forEach(n=>{n({target:e,contentSize:t,get size(){return ee(e,r)}})})}function se(e){e.forEach(te)}function ne(){typeof ResizeObserver>"u"||(h=new ResizeObserver(se))}function re(e,t){h||ne();const r=Z(e);return r.forEach(s=>{let n=w.get(s);n||(n=new Set,w.set(s,n)),n.add(t),h==null||h.observe(s)}),()=>{r.forEach(s=>{const n=w.get(s);n==null||n.delete(t),n!=null&&n.size||h==null||h.unobserve(s)})}}const y=new Set;let m;function ie(){m=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};y.forEach(r=>r(t))},window.addEventListener("resize",m)}function oe(e){return y.add(e),m||ie(),()=>{y.delete(e),!y.size&&m&&(m=void 0)}}function le(e,t){return typeof e=="function"?oe(e):re(e,t)}const ce=50,N=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ae=()=>({time:0,x:N(),y:N()}),de={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function z(e,t,r,s){const n=r[t],{length:o,position:l}=de[t],c=n.current,f=r.time;n.current=e["scroll"+l],n.scrollLength=e["scroll"+o]-e["client"+o],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=R(0,n.scrollLength,n.current);const d=s-f;n.velocity=d>ce?0:Y(n.current-c,d)}function fe(e,t,r){z(e,"x",t,r),z(e,"y",t,r),t.time=r}function ue(e,t){const r={x:0,y:0};let s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)r.x+=s.offsetLeft,r.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const n=s.getBoundingClientRect();s=s.parentElement;const o=s.getBoundingClientRect();r.x+=n.left-o.left,r.y+=n.top-o.top}else if(s instanceof SVGGraphicsElement){const{x:n,y:o}=s.getBBox();r.x+=n,r.y+=o;let l=null,c=s.parentNode;for(;!l;)c.tagName==="svg"&&(l=c),c=s.parentNode;s=l}else break;return r}const he={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L={start:0,center:.5,end:1};function H(e,t,r=0){let s=0;if(L[e]!==void 0&&(e=L[e]),typeof e=="string"){const n=parseFloat(e);e.endsWith("px")?s=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?s=n/100*document.documentElement.clientWidth:e.endsWith("vh")?s=n/100*document.documentElement.clientHeight:e=n}return typeof e=="number"&&(s=t*e),r+s}const ge=[0,0];function pe(e,t,r,s){let n=Array.isArray(e)?e:ge,o=0,l=0;return typeof e=="number"?n=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,L[e]?e:"0"]),o=H(n[0],r,s),l=H(n[1],t),o-l}const me={x:0,y:0};function xe(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function ve(e,t,r){let{offset:s=he.All}=r;const{target:n=e,axis:o="y"}=r,l=o==="y"?"height":"width",c=n!==e?ue(n,e):me,f=n===e?{width:e.scrollWidth,height:e.scrollHeight}:xe(n),d={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const j=s.length;for(let a=0;a<j;a++){const S=pe(s[a],d[l],f[l],c[o]);!u&&S!==t[o].interpolatorOffsets[a]&&(u=!0),t[o].offset[a]=S}u&&(t[o].interpolate=F(t[o].offset,G(s)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function we(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)r.x.targetOffset+=s.offsetLeft,r.y.targetOffset+=s.offsetTop,s=s.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function ye(e,t,r,s={}){return{measure:()=>we(e,s.target,r),update:n=>{fe(e,r,n),(s.offset||s.target)&&ve(e,r,s)},notify:()=>t(r)}}const p=new WeakMap,T=new WeakMap,E=new WeakMap,k=e=>e===document.documentElement?window:e;function be(e,{container:t=document.documentElement,...r}={}){let s=E.get(t);s||(s=new Set,E.set(t,s));const n=ae(),o=ye(t,e,n,r);if(s.add(o),!p.has(t)){const c=()=>{for(const a of s)a.measure()},f=()=>{for(const a of s)a.update(X.timestamp)},d=()=>{for(const a of s)a.notify()},u=()=>{x.read(c,!1,!0),x.update(f,!1,!0),x.update(d,!1,!0)};p.set(t,u);const j=k(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&T.set(t,le(t,u)),j.addEventListener("scroll",u,{passive:!0})}const l=p.get(t);return x.read(l,!1,!0),()=>{var c;V(l);const f=E.get(t);if(!f||(f.delete(o),f.size))return;const d=p.get(t);p.delete(t),d&&(k(t).removeEventListener("scroll",d),(c=T.get(t))===null||c===void 0||c(),window.removeEventListener("resize",d))}}function W(e,t){U(!!(!t||t.current))}const je=()=>({scrollX:v(0),scrollY:v(0),scrollXProgress:v(0),scrollYProgress:v(0)});function Ee({container:e,target:t,layoutEffect:r=!0,...s}={}){const n=D(je);return(r?_:g.useEffect)(()=>(W("target",t),W("container",e),be(({x:l,y:c})=>{n.scrollX.set(l.current),n.scrollXProgress.set(l.progress),n.scrollY.set(c.current),n.scrollYProgress.set(c.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(s.offset)]),n}const Le=()=>{const[e,t]=g.useState(()=>window.innerWidth<=768);return g.useEffect(()=>{window.addEventListener("resize",()=>{t(window.innerWidth<=768)})},[]),e};function Se(e){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}const Ne="/assets/saco-7b5e4703.png",A=()=>i.jsx("div",{className:"flex items-center justify-between w-full md:w-fit",children:i.jsx(M,{className:"flex items-center justify-between gap-4 select-none",to:"/",children:i.jsx("img",{width:100,height:50,src:Ne,alt:"SAC logo"})})}),ze=[{label:{en:"Home",vi:"Trang chủ"},path:"/"},{label:{en:"The story",vi:"Câu chuyện"},path:"/story"},{label:{en:"The product",vi:"Sản phẩm"},path:"/product"},{label:{en:"Download",vi:"Tải xuống"},path:"/download"},{label:{en:"Meet the team",vi:"Gặp gỡ đội"},path:"/about-us"}],He=()=>{const[e,t]=g.useState(!1),r=Le(),s=()=>{t(!e)},{getContentCurrentLang:n}=B();return i.jsx("header",{className:"sticky top-0 z-50 p-2 bg-white border-b-2 border-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 ",children:i.jsxs("div",{className:"flex flex-col justify-between max-w-screen-xl mx-auto md:flex-row md:items-center ",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx(A,{}),r&&i.jsx("div",{className:"p-4",onClick:s,children:i.jsx(Se,{})})]}),i.jsx(O,{children:(!r||e)&&i.jsx(b.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{height:0,opacity:0},children:i.jsx("nav",{children:i.jsxs("ul",{className:"flex flex-col items-center justify-center gap-8 pt-4 font-bold md:flex-row md:pt-0",onClick:s,children:[i.jsx(q,{of:ze,render:o=>i.jsx(b.li,{whileTap:{scale:.9},className:"p-2 hoverable-text",children:i.jsx(C,{to:o.path,className:({isActive:l,isPending:c})=>c?"pending text-secondary":l?"active text-primary font-display font-medium":"",children:n(o.label)})},o.path)}),i.jsx(J,{trigger:"hover",content:n({en:"Chuyển sang Tiếng Việt",vi:"Switch to English"}),children:i.jsx("li",{children:i.jsx(K,{variant:"round"})})})]})})})})]})})},Te="/assets/thesharks-17967cd4.png",ke="/assets/iuh-8ade5623.png",We=()=>{const{getContentCurrentLang:e}=B();return i.jsxs("footer",{className:"bg-white border-t text-text",children:[i.jsxs("div",{className:"grid max-w-screen-xl grid-cols-1 gap-4 p-2 mx-auto md:grid-cols-2",children:[i.jsxs("div",{className:"flex flex-col items-center gap-2 md:items-start",children:[i.jsx("div",{className:"items-center",children:i.jsx(A,{})}),i.jsx("h3",{className:"font-semibold text-primary",children:"THE SHARKS TEAM"}),i.jsx("p",{className:"text-center",children:e({en:"Students of Industrial University of Ho Chi Minh City",vi:"Sinh viên Trường Đại học Công nghiệp Thành phố Hồ Chí Minh"})}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("a",{href:"https://iuh.edu.vn/",children:i.jsx("img",{className:"object-contain w-[60px] h-[60px]",src:ke,alt:"logo-iuh"})}),i.jsx("img",{className:"object-contain w-[60px] h-[60px]",src:Te,alt:"logo-the-sharks"})]})]}),i.jsxs("div",{className:"flex flex-col items-center gap-2 md:items-end",children:[i.jsx("h3",{className:"font-semibold",children:e({en:"Social Media",vi:"Mạng xã hội"})}),i.jsx("div",{className:"flex gap-4",children:i.jsx("a",{href:"https://www.facebook.com/profile.php?id=61555656479452",children:i.jsx($,{className:"w-10 h-10 text-primary"})})})]})]}),i.jsx("div",{className:"text-center text-white p-1/2 bg-primary",children:i.jsx("span",{children:"2024 The Sharks Team"})})]})},Be=()=>{const[e,t]=g.useState(!1),r=()=>{window.scrollTo({behavior:"smooth",left:0,top:0})};return g.useEffect(()=>{const s=()=>{window.scrollY>150&&t(!0),window.scrollY<=0&&t(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),i.jsx(O,{children:e&&i.jsx(b.button,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},exit:{opacity:0,y:40},whileTap:{scale:.8},className:"fixed z-50 p-2 border border-b-2 border-gray-200 rounded-full shadow-md bottom-4 right-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60",onClick:r,children:i.jsx(Q,{className:"text-3xl"})})})},Oe=()=>{const{scrollYProgress:e}=Ee();return i.jsx(b.div,{style:{scaleX:e,transformOrigin:"0%"},className:"fixed bottom-0 left-0 right-0 h-2 opacity-80 bg-primary "})},Ve=({children:e})=>(g.useEffect(()=>{window.scrollTo(0,0)},[e]),i.jsxs("div",{className:"text-text",children:[i.jsx(He,{}),i.jsx("main",{className:"mx-auto min-h-lvh",children:e}),i.jsx(We,{}),i.jsx(Be,{}),i.jsx(Oe,{})]}));export{Ve as default};