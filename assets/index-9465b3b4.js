import{r as a,aa as j,bW as Ye,a_ as st,aF as lt,ac as N,ai as ee,I as te,a9 as ct,bX as ut,aJ as $e,ae as we,x as fe,ah as J,_ as ft,aj as Fe,af as ze,aE as Ie,a2 as dt,a6 as Xe,bh as de,bs as mt,ak as vt,X as Ge,F as Ue,H as Ke,J as Qe,Q as Oe,a1 as Ze}from"./index-51183d7f.js";import{D as gt,g as ht,i as pt,E as wt}from"./EyeOutlined-5f22b75d.js";import{C as Ct}from"./pickAttrs-4856a254.js";import{L as St}from"./LeftOutlined-9a65a1da.js";import{R as bt}from"./RightOutlined-d1bd1910.js";function Je(){var t=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:t,height:e}}function xt(t){var e=t.getBoundingClientRect(),o=document.documentElement;return{left:e.left+(window.pageXOffset||o.scrollLeft)-(o.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||o.scrollTop)-(o.clientTop||document.body.clientTop||0)}}var ke=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],ye=a.createContext(null),He=0;function It(t,e){var o=a.useState(function(){return He+=1,String(He)}),n=j(o,1),r=n[0],i=a.useContext(ye),f={data:e,canPreview:t};return a.useEffect(function(){if(i)return i.register(r,f)},[]),a.useEffect(function(){i&&i.register(r,f)},[t,e]),r}function yt(t){return new Promise(function(e){var o=document.createElement("img");o.onerror=function(){return e(!1)},o.onload=function(){return e(!0)},o.src=t})}function qe(t){var e=t.src,o=t.isCustomPlaceholder,n=t.fallback,r=a.useState(o?"loading":"normal"),i=j(r,2),f=i[0],s=i[1],u=a.useRef(!1),d=f==="error";a.useEffect(function(){var h=!0;return yt(e).then(function(v){!v&&h&&s("error")}),function(){h=!1}},[e]),a.useEffect(function(){o&&!u.current?s("loading"):d&&s("normal")},[e]);var w=function(){s("normal")},l=function(v){u.current=!1,f==="loading"&&v!==null&&v!==void 0&&v.complete&&(v.naturalWidth||v.naturalHeight)&&(u.current=!0,w())},S=d&&n?{src:n}:{onLoad:w,src:e};return[l,S,f]}function he(t,e,o,n){var r=Ye.unstable_batchedUpdates?function(f){Ye.unstable_batchedUpdates(o,f)}:o;return t!=null&&t.addEventListener&&t.addEventListener(e,r,n),{remove:function(){t!=null&&t.removeEventListener&&t.removeEventListener(e,r,n)}}}var Ee={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function Rt(t,e,o,n){var r=a.useRef(null),i=a.useRef([]),f=a.useState(Ee),s=j(f,2),u=s[0],d=s[1],w=function(v){d(Ee),n&&!st(Ee,u)&&n({transform:Ee,action:v})},l=function(v,x){r.current===null&&(i.current=[],r.current=lt(function(){d(function(C){var y=C;return i.current.forEach(function(O){y=N(N({},y),O)}),r.current=null,n==null||n({transform:y,action:x}),y})})),i.current.push(N(N({},u),v))},S=function(v,x,C,y,O){var L=t.current,M=L.width,c=L.height,R=L.offsetWidth,g=L.offsetHeight,m=L.offsetLeft,b=L.offsetTop,I=v,p=u.scale*v;p>o?(p=o,I=o/u.scale):p<e&&(p=O?p:e,I=p/u.scale);var P=C??innerWidth/2,k=y??innerHeight/2,_=I-1,A=_*M*.5,X=_*c*.5,B=_*(P-u.x-m),D=_*(k-u.y-b),W=u.x-(B-A),V=u.y-(D-X);if(v<1&&p===1){var G=R*p,U=g*p,oe=Je(),re=oe.width,Y=oe.height;G<=re&&U<=Y&&(W=0,V=0)}l({x:W,y:V,scale:p},x)};return{transform:u,resetTransform:w,updateTransform:l,dispatchZoomChange:S}}function Be(t,e,o,n){var r=e+o,i=(o-n)/2;if(o>n){if(e>0)return ee({},t,i);if(e<0&&r<n)return ee({},t,-i)}else if(e<0||r>n)return ee({},t,e<0?i:-i);return{}}function et(t,e,o,n){var r=Je(),i=r.width,f=r.height,s=null;return t<=i&&e<=f?s={x:0,y:0}:(t>i||e>f)&&(s=N(N({},Be("x",o,t,i)),Be("y",n,e,f))),s}var pe=1,Mt=1;function Et(t,e,o,n,r,i,f){var s=r.rotate,u=r.scale,d=r.x,w=r.y,l=a.useState(!1),S=j(l,2),h=S[0],v=S[1],x=a.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),C=function(c){!e||c.button!==0||(c.preventDefault(),c.stopPropagation(),x.current={diffX:c.pageX-d,diffY:c.pageY-w,transformX:d,transformY:w},v(!0))},y=function(c){o&&h&&i({x:c.pageX-x.current.diffX,y:c.pageY-x.current.diffY},"move")},O=function(){if(o&&h){v(!1);var c=x.current,R=c.transformX,g=c.transformY,m=d!==R&&w!==g;if(!m)return;var b=t.current.offsetWidth*u,I=t.current.offsetHeight*u,p=t.current.getBoundingClientRect(),P=p.left,k=p.top,_=s%180!==0,A=et(_?I:b,_?b:I,P,k);A&&i(N({},A),"dragRebound")}},L=function(c){if(!(!o||c.deltaY==0)){var R=Math.abs(c.deltaY/100),g=Math.min(R,Mt),m=pe+g*n;c.deltaY>0&&(m=pe/m),f(m,"wheel",c.clientX,c.clientY)}};return a.useEffect(function(){var M,c,R,g;if(e){R=he(window,"mouseup",O,!1),g=he(window,"mousemove",y,!1);try{window.top!==window.self&&(M=he(window.top,"mouseup",O,!1),c=he(window.top,"mousemove",y,!1))}catch{}}return function(){var m,b,I,p;(m=R)===null||m===void 0||m.remove(),(b=g)===null||b===void 0||b.remove(),(I=M)===null||I===void 0||I.remove(),(p=c)===null||p===void 0||p.remove()}},[o,h,d,w,s,e]),{isMoving:h,onMouseDown:C,onMouseMove:y,onMouseUp:O,onWheel:L}}function Pe(t,e){var o=t.x-e.x,n=t.y-e.y;return Math.hypot(o,n)}function Ot(t,e,o,n){var r=Pe(t,o),i=Pe(e,n);if(r===0&&i===0)return[t.x,t.y];var f=r/(r+i),s=t.x+f*(e.x-t.x),u=t.y+f*(e.y-t.y);return[s,u]}function Pt(t,e,o,n,r,i,f){var s=r.rotate,u=r.scale,d=r.x,w=r.y,l=a.useState(!1),S=j(l,2),h=S[0],v=S[1],x=a.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),C=function(c){x.current=N(N({},x.current),c)},y=function(c){if(e){c.stopPropagation(),v(!0);var R=c.touches,g=R===void 0?[]:R;g.length>1?C({point1:{x:g[0].clientX,y:g[0].clientY},point2:{x:g[1].clientX,y:g[1].clientY},eventType:"touchZoom"}):C({point1:{x:g[0].clientX-d,y:g[0].clientY-w},eventType:"move"})}},O=function(c){var R=c.touches,g=R===void 0?[]:R,m=x.current,b=m.point1,I=m.point2,p=m.eventType;if(g.length>1&&p==="touchZoom"){var P={x:g[0].clientX,y:g[0].clientY},k={x:g[1].clientX,y:g[1].clientY},_=Ot(b,I,P,k),A=j(_,2),X=A[0],B=A[1],D=Pe(P,k)/Pe(b,I);f(D,"touchZoom",X,B,!0),C({point1:P,point2:k,eventType:"touchZoom"})}else p==="move"&&(i({x:g[0].clientX-b.x,y:g[0].clientY-b.y},"move"),C({eventType:"move"}))},L=function(){if(o){if(h&&v(!1),C({eventType:"none"}),n>u)return i({x:0,y:0,scale:n},"touchZoom");var c=t.current.offsetWidth*u,R=t.current.offsetHeight*u,g=t.current.getBoundingClientRect(),m=g.left,b=g.top,I=s%180!==0,p=et(I?R:c,I?c:R,m,b);p&&i(N({},p),"dragRebound")}};return a.useEffect(function(){var M;return o&&e&&(M=he(window,"touchmove",function(c){return c.preventDefault()},{passive:!1})),function(){var c;(c=M)===null||c===void 0||c.remove()}},[o,e]),{isTouching:h,onTouchStart:y,onTouchMove:O,onTouchEnd:L}}var Tt=function(e){var o=e.visible,n=e.maskTransitionName,r=e.getContainer,i=e.prefixCls,f=e.rootClassName,s=e.icons,u=e.countRender,d=e.showSwitch,w=e.showProgress,l=e.current,S=e.transform,h=e.count,v=e.scale,x=e.minScale,C=e.maxScale,y=e.closeIcon,O=e.onSwitchLeft,L=e.onSwitchRight,M=e.onClose,c=e.onZoomIn,R=e.onZoomOut,g=e.onRotateRight,m=e.onRotateLeft,b=e.onFlipX,I=e.onFlipY,p=e.toolbarRender,P=e.zIndex,k=a.useContext(ye),_=s.rotateLeft,A=s.rotateRight,X=s.zoomIn,B=s.zoomOut,D=s.close,W=s.left,V=s.right,G=s.flipX,U=s.flipY,oe="".concat(i,"-operations-operation");a.useEffect(function(){var T=function(E){E.keyCode===$e.ESC&&M()};return o&&window.addEventListener("keydown",T),function(){window.removeEventListener("keydown",T)}},[o]);var re=[{icon:U,onClick:I,type:"flipY"},{icon:G,onClick:b,type:"flipX"},{icon:_,onClick:m,type:"rotateLeft"},{icon:A,onClick:g,type:"rotateRight"},{icon:B,onClick:R,type:"zoomOut",disabled:v<=x},{icon:X,onClick:c,type:"zoomIn",disabled:v===C}],Y=re.map(function(T){var z,E=T.icon,q=T.onClick,Z=T.type,H=T.disabled;return a.createElement("div",{className:te(oe,(z={},ee(z,"".concat(i,"-operations-operation-").concat(Z),!0),ee(z,"".concat(i,"-operations-operation-disabled"),!!H),z)),onClick:q,key:Z},E)}),F=a.createElement("div",{className:"".concat(i,"-operations")},Y);return a.createElement(ct,{visible:o,motionName:n},function(T){var z=T.className,E=T.style;return a.createElement(ut,{open:!0,getContainer:r??document.body},a.createElement("div",{className:te("".concat(i,"-operations-wrapper"),z,f),style:N(N({},E),{},{zIndex:P})},y===null?null:a.createElement("button",{className:"".concat(i,"-close"),onClick:M},y||D),d&&a.createElement(a.Fragment,null,a.createElement("div",{className:te("".concat(i,"-switch-left"),ee({},"".concat(i,"-switch-left-disabled"),l===0)),onClick:O},W),a.createElement("div",{className:te("".concat(i,"-switch-right"),ee({},"".concat(i,"-switch-right-disabled"),l===h-1)),onClick:L},V)),a.createElement("div",{className:"".concat(i,"-footer")},w&&a.createElement("div",{className:"".concat(i,"-progress")},u?u(l+1,h):"".concat(l+1," / ").concat(h)),p?p(F,N({icons:{flipYIcon:Y[0],flipXIcon:Y[1],rotateLeftIcon:Y[2],rotateRightIcon:Y[3],zoomOutIcon:Y[4],zoomInIcon:Y[5]},actions:{onFlipY:I,onFlipX:b,onRotateLeft:m,onRotateRight:g,onZoomOut:R,onZoomIn:c},transform:S},k?{current:l,total:h}:{})):F)))})},Nt=["fallback","src","imgRef"],Lt=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],_t=function(e){var o=e.fallback,n=e.src,r=e.imgRef,i=we(e,Nt),f=qe({src:n,fallback:o}),s=j(f,2),u=s[0],d=s[1];return fe.createElement("img",J({ref:function(l){r.current=l,u(l)}},i,d))},tt=function(e){var o=e.prefixCls,n=e.src,r=e.alt,i=e.fallback,f=e.movable,s=f===void 0?!0:f,u=e.onClose,d=e.visible,w=e.icons,l=w===void 0?{}:w,S=e.rootClassName,h=e.closeIcon,v=e.getContainer,x=e.current,C=x===void 0?0:x,y=e.count,O=y===void 0?1:y,L=e.countRender,M=e.scaleStep,c=M===void 0?.5:M,R=e.minScale,g=R===void 0?1:R,m=e.maxScale,b=m===void 0?50:m,I=e.transitionName,p=I===void 0?"zoom":I,P=e.maskTransitionName,k=P===void 0?"fade":P,_=e.imageRender,A=e.imgCommonProps,X=e.toolbarRender,B=e.onTransform,D=e.onChange,W=we(e,Lt),V=a.useRef(),G=a.useContext(ye),U=G&&O>1,oe=G&&O>=1,re=a.useState(!0),Y=j(re,2),F=Y[0],T=Y[1],z=Rt(V,g,b,B),E=z.transform,q=z.resetTransform,Z=z.updateTransform,H=z.dispatchZoomChange,se=Et(V,s,d,c,E,Z,H),Ce=se.isMoving,me=se.onMouseDown,Se=se.onWheel,K=Pt(V,s,d,g,E,Z,H),ne=K.isTouching,ae=K.onTouchStart,le=K.onTouchMove,ie=K.onTouchEnd,be=E.rotate,ve=E.scale,ge=te(ee({},"".concat(o,"-moving"),Ce));a.useEffect(function(){F||T(!0)},[F]);var Ne=function(){q("close")},Le=function(){H(pe+c,"zoomIn")},_e=function(){H(pe/(pe+c),"zoomOut")},ce=function(){Z({rotate:be+90},"rotateRight")},ue=function(){Z({rotate:be-90},"rotateLeft")},Re=function(){Z({flipX:!E.flipX},"flipX")},Me=function(){Z({flipY:!E.flipY},"flipY")},xe=function($){$==null||$.preventDefault(),$==null||$.stopPropagation(),C>0&&(T(!1),q("prev"),D==null||D(C-1,C))},Ae=function($){$==null||$.preventDefault(),$==null||$.stopPropagation(),C<O-1&&(T(!1),q("next"),D==null||D(C+1,C))},rt=function($){!d||!U||($.keyCode===$e.LEFT?xe():$.keyCode===$e.RIGHT&&Ae())},it=function($){d&&(ve!==1?Z({x:0,y:0,scale:1},"doubleClick"):H(pe+c,"doubleClick",$.clientX,$.clientY))};a.useEffect(function(){var Q=he(window,"keydown",rt,!1);return function(){Q.remove()}},[d,U,C]);var De=fe.createElement(_t,J({},A,{width:e.width,height:e.height,imgRef:V,className:"".concat(o,"-img"),alt:r,style:{transform:"translate3d(".concat(E.x,"px, ").concat(E.y,"px, 0) scale3d(").concat(E.flipX?"-":"").concat(ve,", ").concat(E.flipY?"-":"").concat(ve,", 1) rotate(").concat(be,"deg)"),transitionDuration:(!F||ne)&&"0s"},fallback:i,src:n,onWheel:Se,onMouseDown:me,onDoubleClick:it,onTouchStart:ae,onTouchMove:le,onTouchEnd:ie,onTouchCancel:ie}));return fe.createElement(fe.Fragment,null,fe.createElement(gt,J({transitionName:p,maskTransitionName:k,closable:!1,keyboard:!0,prefixCls:o,onClose:u,visible:d,classNames:{wrapper:ge},rootClassName:S,getContainer:v},W,{afterClose:Ne}),fe.createElement("div",{className:"".concat(o,"-img-wrapper")},_?_(De,N({transform:E},G?{current:C}:{})):De)),fe.createElement(Tt,{visible:d,transform:E,maskTransitionName:k,closeIcon:h,getContainer:v,prefixCls:o,rootClassName:S,icons:l,countRender:L,showSwitch:U,showProgress:oe,current:C,count:O,scale:ve,minScale:g,maxScale:b,toolbarRender:X,onSwitchLeft:xe,onSwitchRight:Ae,onZoomIn:Le,onZoomOut:_e,onRotateRight:ce,onRotateLeft:ue,onFlipX:Re,onFlipY:Me,onClose:u,zIndex:W.zIndex!==void 0?W.zIndex+1:void 0}))};function $t(t){var e=a.useState({}),o=j(e,2),n=o[0],r=o[1],i=a.useCallback(function(s,u){return r(function(d){return N(N({},d),{},ee({},s,u))}),function(){r(function(d){var w=N({},d);return delete w[s],w})}},[]),f=a.useMemo(function(){return t?t.map(function(s){if(typeof s=="string")return{data:{src:s}};var u={};return Object.keys(s).forEach(function(d){["src"].concat(ft(ke)).includes(d)&&(u[d]=s[d])}),{data:u}}):Object.keys(n).reduce(function(s,u){var d=n[u],w=d.canPreview,l=d.data;return w&&s.push({data:l,id:u}),s},[])},[t,n]);return[f,i]}var zt=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],kt=["src"],jt=function(e){var o,n=e.previewPrefixCls,r=n===void 0?"rc-image-preview":n,i=e.children,f=e.icons,s=f===void 0?{}:f,u=e.items,d=e.preview,w=e.fallback,l=Fe(d)==="object"?d:{},S=l.visible,h=l.onVisibleChange,v=l.getContainer,x=l.current,C=l.movable,y=l.minScale,O=l.maxScale,L=l.countRender,M=l.closeIcon,c=l.onChange,R=l.onTransform,g=l.toolbarRender,m=l.imageRender,b=we(l,zt),I=$t(u),p=j(I,2),P=p[0],k=p[1],_=ze(0,{value:x}),A=j(_,2),X=A[0],B=A[1],D=a.useState(!1),W=j(D,2),V=W[0],G=W[1],U=((o=P[X])===null||o===void 0?void 0:o.data)||{},oe=U.src,re=we(U,kt),Y=ze(!!S,{value:S,onChange:function(ne,ae){h==null||h(ne,ae,X)}}),F=j(Y,2),T=F[0],z=F[1],E=a.useState(null),q=j(E,2),Z=q[0],H=q[1],se=a.useCallback(function(K,ne,ae){var le=P.findIndex(function(ie){return ie.id===K});z(!0),H({x:ne,y:ae}),B(le<0?0:le),G(!0)},[P]);a.useEffect(function(){T?V||B(0):G(!1)},[T]);var Ce=function(ne,ae){B(ne),c==null||c(ne,ae)},me=function(){z(!1),H(null)},Se=a.useMemo(function(){return{register:k,onPreview:se}},[k,se]);return a.createElement(ye.Provider,{value:Se},i,a.createElement(tt,J({"aria-hidden":!T,movable:C,visible:T,prefixCls:r,closeIcon:M,onClose:me,mousePosition:Z,imgCommonProps:re,src:oe,fallback:w,icons:s,minScale:y,maxScale:O,getContainer:v,current:X,count:P.length,countRender:L,onTransform:R,toolbarRender:g,imageRender:m,onChange:Ce},b)))},At=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],Dt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Te=function(e){var o=e.src,n=e.alt,r=e.onPreviewClose,i=e.prefixCls,f=i===void 0?"rc-image":i,s=e.previewPrefixCls,u=s===void 0?"".concat(f,"-preview"):s,d=e.placeholder,w=e.fallback,l=e.width,S=e.height,h=e.style,v=e.preview,x=v===void 0?!0:v,C=e.className,y=e.onClick,O=e.onError,L=e.wrapperClassName,M=e.wrapperStyle,c=e.rootClassName,R=we(e,At),g=d&&d!==!0,m=Fe(x)==="object"?x:{},b=m.src,I=m.visible,p=I===void 0?void 0:I,P=m.onVisibleChange,k=P===void 0?r:P,_=m.getContainer,A=_===void 0?void 0:_,X=m.mask,B=m.maskClassName,D=m.movable,W=m.icons,V=m.scaleStep,G=m.minScale,U=m.maxScale,oe=m.imageRender,re=m.toolbarRender,Y=we(m,Dt),F=b??o,T=ze(!!p,{value:p,onChange:k}),z=j(T,2),E=z[0],q=z[1],Z=qe({src:o,isCustomPlaceholder:g,fallback:w}),H=j(Z,3),se=H[0],Ce=H[1],me=H[2],Se=a.useState(null),K=j(Se,2),ne=K[0],ae=K[1],le=a.useContext(ye),ie=!!x,be=function(){q(!1),ae(null)},ve=te(f,L,c,ee({},"".concat(f,"-error"),me==="error")),ge=a.useMemo(function(){var ce={};return ke.forEach(function(ue){e[ue]!==void 0&&(ce[ue]=e[ue])}),ce},ke.map(function(ce){return e[ce]})),Ne=a.useMemo(function(){return N(N({},ge),{},{src:F})},[F,ge]),Le=It(ie,Ne),_e=function(ue){var Re=xt(ue.target),Me=Re.left,xe=Re.top;le?le.onPreview(Le,Me,xe):(ae({x:Me,y:xe}),q(!0)),y==null||y(ue)};return a.createElement(a.Fragment,null,a.createElement("div",J({},R,{className:ve,onClick:ie?_e:y,style:N({width:l,height:S},M)}),a.createElement("img",J({},ge,{className:te("".concat(f,"-img"),ee({},"".concat(f,"-img-placeholder"),d===!0),C),style:N({height:S},h),ref:se},Ce,{width:l,height:S,onError:O})),me==="loading"&&a.createElement("div",{"aria-hidden":"true",className:"".concat(f,"-placeholder")},d),X&&ie&&a.createElement("div",{className:te("".concat(f,"-mask"),B),style:{display:(h==null?void 0:h.display)==="none"?"none":void 0}},X)),!le&&ie&&a.createElement(tt,J({"aria-hidden":!E,visible:E,prefixCls:u,onClose:be,mousePosition:ne,src:F,alt:n,fallback:w,getContainer:A,icons:W,movable:D,scaleStep:V,minScale:G,maxScale:U,rootClassName:c,imageRender:oe,imgCommonProps:ge,toolbarRender:re},Y)))};Te.PreviewGroup=jt;Te.displayName="Image";var Yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const Xt=Yt;var Zt=function(e,o){return a.createElement(Ie,J({},e,{ref:o,icon:Xt}))},Ht=a.forwardRef(Zt);const Bt=Ht;var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const Vt=Wt;var Ft=function(e,o){return a.createElement(Ie,J({},e,{ref:o,icon:Vt}))},Gt=a.forwardRef(Ft);const Ut=Gt;var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const Qt=Kt;var Jt=function(e,o){return a.createElement(Ie,J({},e,{ref:o,icon:Qt}))},qt=a.forwardRef(Jt);const We=qt;var eo={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const to=eo;var oo=function(e,o){return a.createElement(Ie,J({},e,{ref:o,icon:to}))},no=a.forwardRef(oo);const ao=no;var ro={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const io=ro;var so=function(e,o){return a.createElement(Ie,J({},e,{ref:o,icon:io}))},lo=a.forwardRef(so);const co=lo,je=t=>({position:t||"absolute",inset:0}),uo=t=>{const{iconCls:e,motionDurationSlow:o,paddingXXS:n,marginXXS:r,prefixCls:i,colorTextLightSolid:f}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:f,background:new de("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${o}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},vt),{padding:`0 ${Ge(n)}`,[e]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},fo=t=>{const{previewCls:e,modalMaskBg:o,paddingSM:n,marginXL:r,margin:i,paddingLG:f,previewOperationColorDisabled:s,previewOperationHoverColor:u,motionDurationSlow:d,iconCls:w,colorTextLightSolid:l}=t,S=new de(o).setAlpha(.1),h=S.clone().setAlpha(.2);return{[`${e}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:t.previewOperationColor},[`${e}-progress`]:{marginBottom:i},[`${e}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:l,backgroundColor:S.toRgbString(),borderRadius:"50%",padding:n,outline:0,border:0,cursor:"pointer",transition:`all ${d}`,"&:hover":{backgroundColor:h.toRgbString()},[`& > ${w}`]:{fontSize:t.previewOperationSize}},[`${e}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${Ge(f)}`,backgroundColor:S.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:n,padding:n,cursor:"pointer",transition:`all ${d}`,userSelect:"none",[`&:not(${e}-operations-operation-disabled):hover > ${w}`]:{color:u},"&-disabled":{color:s,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${w}`]:{fontSize:t.previewOperationSize}}}}},mo=t=>{const{modalMaskBg:e,iconCls:o,previewOperationColorDisabled:n,previewCls:r,zIndexPopup:i,motionDurationSlow:f}=t,s=new de(e).setAlpha(.1),u=s.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:t.calc(i).add(1).equal({unit:!1}),display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:t.calc(t.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:t.previewOperationColor,background:s.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,userSelect:"none","&:hover":{background:u.toRgbString()},"&-disabled":{"&, &:hover":{color:n,background:"transparent",cursor:"not-allowed",[`> ${o}`]:{cursor:"not-allowed"}}},[`> ${o}`]:{fontSize:t.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:t.marginSM},[`${r}-switch-right`]:{insetInlineEnd:t.marginSM}}},vo=t=>{const{motionEaseOut:e,previewCls:o,motionDurationSlow:n,componentCls:r}=t;return[{[`${r}-preview-root`]:{[o]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${o}-body`]:Object.assign(Object.assign({},je()),{overflow:"hidden"}),[`${o}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${n} ${e} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},je()),{transition:`transform ${n} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${o}-moving`]:{[`${o}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${o}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:t.calc(t.zIndexPopup).add(1).equal({unit:!1})},"&":[fo(t),mo(t)]}]},go=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},uo(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},je())}}},ho=t=>{const{previewCls:e}=t;return{[`${e}-root`]:mt(t,"zoom"),"&":pt(t,!0)}},po=t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new de(t.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new de(t.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new de(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5}),ot=dt("Image",t=>{const e=`${t.componentCls}-preview`,o=Xe(t,{previewCls:e,modalMaskBg:new de("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[go(o),vo(o),ht(Xe(o,{componentCls:e})),ho(o)]},po);var wo=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const nt={rotateLeft:a.createElement(Bt,null),rotateRight:a.createElement(Ut,null),zoomIn:a.createElement(ao,null),zoomOut:a.createElement(co,null),close:a.createElement(Ct,null),left:a.createElement(St,null),right:a.createElement(bt,null),flipX:a.createElement(We,null),flipY:a.createElement(We,{rotate:90})},Co=t=>{var{previewPrefixCls:e,preview:o}=t,n=wo(t,["previewPrefixCls","preview"]);const{getPrefixCls:r}=a.useContext(Ue),i=r("image",e),f=`${i}-preview`,s=r(),u=Ke(i),[d,w,l]=ot(i,u),[S]=Qe("ImagePreview",typeof o=="object"?o.zIndex:void 0),h=a.useMemo(()=>{var v;if(o===!1)return o;const x=typeof o=="object"?o:{},C=te(w,l,u,(v=x.rootClassName)!==null&&v!==void 0?v:"");return Object.assign(Object.assign({},x),{transitionName:Oe(s,"zoom",x.transitionName),maskTransitionName:Oe(s,"fade",x.maskTransitionName),rootClassName:C,zIndex:S})},[o]);return d(a.createElement(Te.PreviewGroup,Object.assign({preview:h,previewPrefixCls:f,icons:nt},n)))},So=Co;var Ve=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const at=t=>{var e;const{prefixCls:o,preview:n,className:r,rootClassName:i,style:f}=t,s=Ve(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:u,locale:d=Ze,getPopupContainer:w,image:l}=a.useContext(Ue),S=u("image",o),h=u(),v=d.Image||Ze.Image,x=Ke(S),[C,y,O]=ot(S,x),L=te(i,y,O,x),M=te(r,y,l==null?void 0:l.className),[c]=Qe("ImagePreview",typeof n=="object"?n.zIndex:void 0),R=a.useMemo(()=>{var m;if(n===!1)return n;const b=typeof n=="object"?n:{},{getContainer:I,closeIcon:p}=b,P=Ve(b,["getContainer","closeIcon"]);return Object.assign(Object.assign({mask:a.createElement("div",{className:`${S}-mask-info`},a.createElement(wt,null),v==null?void 0:v.preview),icons:nt},P),{getContainer:I??w,transitionName:Oe(h,"zoom",b.transitionName),maskTransitionName:Oe(h,"fade",b.maskTransitionName),zIndex:c,closeIcon:p??((m=l==null?void 0:l.preview)===null||m===void 0?void 0:m.closeIcon)})},[n,v,(e=l==null?void 0:l.preview)===null||e===void 0?void 0:e.closeIcon]),g=Object.assign(Object.assign({},l==null?void 0:l.style),f);return C(a.createElement(Te,Object.assign({prefixCls:S,preview:R,rootClassName:L,className:M,style:g},s)))};at.PreviewGroup=So;const Mo=at;export{Mo as I,he as a,xt as g};