import{r as c,aH as wi,aI as Mi,a2 as ei,a0 as V,J as a,Y as he,U as _,Z as D,a1 as W,ai as Je,aE as Ti,aa as _i,a3 as Di,al as Hi,a6 as p,an as Ri,aJ as Fe,aK as Ai,a4 as Li,aL as Ki,aM as qi,aN as Vi,aO as Wi,aP as Xi,aQ as Ji,aR as Fi,a7 as Ui,aS as Gi,aq as Qi,aT as Yi}from"./index-ad7ff6c0.js";import{R as Ue,L as Ge}from"./LeftOutlined-a3e84758.js";import{u as Zi,S as fe}from"./useForceUpdate-49e5bff7.js";function ki(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const i=c.useRef({}),s=Zi(),o=wi();return Mi(()=>{const t=o.subscribe(x=>{i.current=x,e&&s()});return()=>o.unsubscribe(t)},[]),i.current}var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};const it=et;var tt=function(i,s){return c.createElement(ei,V({},i,{ref:s,icon:it}))},nt=c.forwardRef(tt);const Qe=nt;var at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"};const rt=at;var lt=function(i,s){return c.createElement(ei,V({},i,{ref:s,icon:rt}))},ot=c.forwardRef(lt);const Ye=ot;var ct={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"},st=["10","20","50","100"],ut=function(i){var s=i.pageSizeOptions,o=s===void 0?st:s,t=i.locale,x=i.changeSize,M=i.pageSize,I=i.goButton,f=i.quickGo,B=i.rootPrefixCls,E=i.selectComponentClass,j=i.selectPrefixCls,w=i.disabled,m=i.buildOptionText,H=a.useState(""),S=he(H,2),v=S[0],u=S[1],N=function(){return!v||Number.isNaN(v)?void 0:Number(v)},Y=typeof m=="function"?m:function(h){return"".concat(h," ").concat(t.items_per_page)},U=function(d){x==null||x(Number(d))},Z=function(d){u(d.target.value)},X=function(d){I||v===""||(u(""),!(d.relatedTarget&&(d.relatedTarget.className.indexOf("".concat(B,"-item-link"))>=0||d.relatedTarget.className.indexOf("".concat(B,"-item"))>=0))&&(f==null||f(N())))},P=function(d){v!==""&&(d.keyCode===_.ENTER||d.type==="click")&&(u(""),f==null||f(N()))},G=function(){return o.some(function(d){return d.toString()===M.toString()})?o:o.concat([M.toString()]).sort(function(d,Q){var L=Number.isNaN(Number(d))?0:Number(d),K=Number.isNaN(Number(Q))?0:Number(Q);return L-K})},C="".concat(B,"-options");if(!x&&!f)return null;var R=null,A=null,J=null;if(x&&E){var z=G().map(function(h,d){return a.createElement(E.Option,{key:d,value:h.toString()},Y(h))});R=a.createElement(E,{disabled:w,prefixCls:j,showSearch:!1,className:"".concat(C,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(M||o[0]).toString(),onChange:U,getPopupContainer:function(d){return d.parentNode},"aria-label":t.page_size,defaultOpen:!1},z)}return f&&(I&&(J=typeof I=="boolean"?a.createElement("button",{type:"button",onClick:P,onKeyUp:P,disabled:w,className:"".concat(C,"-quick-jumper-button")},t.jump_to_confirm):a.createElement("span",{onClick:P,onKeyUp:P},I)),A=a.createElement("div",{className:"".concat(C,"-quick-jumper")},t.jump_to,a.createElement("input",{disabled:w,type:"text",value:v,onChange:Z,onKeyUp:P,onBlur:X,"aria-label":t.page}),t.page,J)),a.createElement("li",{className:C},R,A)},oe=function(i){var s,o=i.rootPrefixCls,t=i.page,x=i.active,M=i.className,I=i.showTitle,f=i.onClick,B=i.onKeyPress,E=i.itemRender,j="".concat(o,"-item"),w=D(j,"".concat(j,"-").concat(t),(s={},W(s,"".concat(j,"-active"),x),W(s,"".concat(j,"-disabled"),!t),s),M),m=function(){f(t)},H=function(u){B(u,f,t)},S=E(t,"page",a.createElement("a",{rel:"nofollow"},t));return S?a.createElement("li",{title:I?String(t):null,className:w,onClick:m,onKeyDown:H,tabIndex:0},S):null},mt=function(i,s,o){return o};function Ze(){}function ke(e){var i=Number(e);return typeof i=="number"&&!Number.isNaN(i)&&isFinite(i)&&Math.floor(i)===i}function F(e,i,s){var o=typeof e>"u"?i:e;return Math.floor((s-1)/o)+1}var dt=function(i){var s,o=i.prefixCls,t=o===void 0?"rc-pagination":o,x=i.selectPrefixCls,M=x===void 0?"rc-select":x,I=i.className,f=i.selectComponentClass,B=i.current,E=i.defaultCurrent,j=E===void 0?1:E,w=i.total,m=w===void 0?0:w,H=i.pageSize,S=i.defaultPageSize,v=S===void 0?10:S,u=i.onChange,N=u===void 0?Ze:u,Y=i.hideOnSinglePage,U=i.showPrevNextJumpers,Z=U===void 0?!0:U,X=i.showQuickJumper,P=i.showLessItems,G=i.showTitle,C=G===void 0?!0:G,R=i.onShowSizeChange,A=R===void 0?Ze:R,J=i.locale,z=J===void 0?ct:J,h=i.style,d=i.totalBoundaryShowSizeChanger,Q=d===void 0?50:d,L=i.disabled,K=i.simple,Pe=i.showTotal,Se=i.showSizeChanger,ri=i.pageSizeOptions,ze=i.itemRender,k=ze===void 0?mt:ze,Ee=i.jumpPrevIcon,Ne=i.jumpNextIcon,li=i.prevIcon,oi=i.nextIcon,ci=a.useRef(null),si=Je(10,{value:H,defaultValue:v}),Oe=he(si,2),y=Oe[0],ui=Oe[1],mi=Je(1,{value:B,defaultValue:j,postState:function(l){return Math.max(1,Math.min(l,F(void 0,y,m)))}}),Ie=he(mi,2),r=Ie[0],Be=Ie[1],di=a.useState(r),je=he(di,2),ee=je[0],ce=je[1];c.useEffect(function(){ce(r)},[r]);var we=Math.max(1,r-(P?3:5)),Me=Math.min(F(void 0,y,m),r+(P?3:5));function se(n,l){var g=n||a.createElement("button",{type:"button","aria-label":l,className:"".concat(t,"-item-link")});return typeof n=="function"&&(g=a.createElement(n,_i({},i))),g}function Te(n){var l=n.target.value,g=F(void 0,y,m),q;return l===""?q=l:Number.isNaN(Number(l))?q=ee:l>=g?q=g:q=Number(l),q}function gi(n){return ke(n)&&n!==r&&ke(m)&&m>0}var pi=m>y?X:!1;function vi(n){(n.keyCode===_.UP||n.keyCode===_.DOWN)&&n.preventDefault()}function _e(n){var l=Te(n);switch(l!==ee&&ce(l),n.keyCode){case _.ENTER:O(l);break;case _.UP:O(l-1);break;case _.DOWN:O(l+1);break}}function bi(n){O(Te(n))}function hi(n){var l=F(n,y,m),g=r>l&&l!==0?l:r;ui(n),ce(g),A==null||A(r,n),Be(g),N==null||N(g,n)}function O(n){if(gi(n)&&!L){var l=F(void 0,y,m),g=n;return n>l?g=l:n<1&&(g=1),g!==ee&&ce(g),Be(g),N==null||N(g,y),g}return r}var ue=r>1,me=r<F(void 0,y,m),fi=Se??m>Q;function De(){ue&&O(r-1)}function He(){me&&O(r+1)}function Re(){O(we)}function Ae(){O(Me)}function ie(n,l){if(n.key==="Enter"||n.charCode===_.ENTER||n.keyCode===_.ENTER){for(var g=arguments.length,q=new Array(g>2?g-2:0),be=2;be<g;be++)q[be-2]=arguments[be];l.apply(void 0,q)}}function Si(n){ie(n,De)}function Ci(n){ie(n,He)}function $i(n){ie(n,Re)}function xi(n){ie(n,Ae)}function yi(n){var l=k(n,"prev",se(li,"prev page"));return a.isValidElement(l)?a.cloneElement(l,{disabled:!ue}):l}function Pi(n){var l=k(n,"next",se(oi,"next page"));return a.isValidElement(l)?a.cloneElement(l,{disabled:!me}):l}function de(n){(n.type==="click"||n.keyCode===_.ENTER)&&O(ee)}var Le=null,zi=Ti(i,{aria:!0,data:!0}),Ei=Pe&&a.createElement("li",{className:"".concat(t,"-total-text")},Pe(m,[m===0?0:(r-1)*y+1,r*y>m?m:r*y])),Ke=null,b=F(void 0,y,m);if(Y&&m<=y)return null;var $=[],te={rootPrefixCls:t,onClick:O,onKeyPress:ie,showTitle:C,itemRender:k,page:-1},Ni=r-1>0?r-1:0,Oi=r+1<b?r+1:b,ge=X&&X.goButton,ne=ge,qe=null;K&&(ge&&(typeof ge=="boolean"?ne=a.createElement("button",{type:"button",onClick:de,onKeyUp:de},z.jump_to_confirm):ne=a.createElement("span",{onClick:de,onKeyUp:de},ge),ne=a.createElement("li",{title:C?"".concat(z.jump_to).concat(r,"/").concat(b):null,className:"".concat(t,"-simple-pager")},ne)),qe=a.createElement("li",{title:C?"".concat(r,"/").concat(b):null,className:"".concat(t,"-simple-pager")},a.createElement("input",{type:"text",value:ee,disabled:L,onKeyDown:vi,onKeyUp:_e,onChange:_e,onBlur:bi,size:3}),a.createElement("span",{className:"".concat(t,"-slash")},"/"),b));var T=P?1:2;if(b<=3+T*2){b||$.push(a.createElement(oe,V({},te,{key:"noPager",page:1,className:"".concat(t,"-item-disabled")})));for(var ae=1;ae<=b;ae+=1)$.push(a.createElement(oe,V({},te,{key:ae,page:ae,active:r===ae})))}else{var Ii=P?z.prev_3:z.prev_5,Bi=P?z.next_3:z.next_5,Ve=k(we,"jump-prev",se(Ee,"prev page")),We=k(Me,"jump-next",se(Ne,"next page"));Z&&(Le=Ve?a.createElement("li",{title:C?Ii:null,key:"prev",onClick:Re,tabIndex:0,onKeyDown:$i,className:D("".concat(t,"-jump-prev"),W({},"".concat(t,"-jump-prev-custom-icon"),!!Ee))},Ve):null,Ke=We?a.createElement("li",{title:C?Bi:null,key:"next",onClick:Ae,tabIndex:0,onKeyDown:xi,className:D("".concat(t,"-jump-next"),W({},"".concat(t,"-jump-next-custom-icon"),!!Ne))},We):null);var Ce=Math.max(1,r-T),$e=Math.min(r+T,b);r-1<=T&&($e=1+T*2),b-r<=T&&(Ce=b-T*2);for(var re=Ce;re<=$e;re+=1)$.push(a.createElement(oe,V({},te,{key:re,page:re,active:r===re})));if(r-1>=T*2&&r!==1+2&&($[0]=a.cloneElement($[0],{className:D("".concat(t,"-item-after-jump-prev"),$[0].props.className)}),$.unshift(Le)),b-r>=T*2&&r!==b-2){var Xe=$[$.length-1];$[$.length-1]=a.cloneElement(Xe,{className:D("".concat(t,"-item-before-jump-next"),Xe.props.className)}),$.push(Ke)}Ce!==1&&$.unshift(a.createElement(oe,V({},te,{key:1,page:1}))),$e!==b&&$.push(a.createElement(oe,V({},te,{key:b,page:b})))}var pe=yi(Ni);if(pe){var xe=!ue||!b;pe=a.createElement("li",{title:C?z.prev_page:null,onClick:De,tabIndex:xe?null:0,onKeyDown:Si,className:D("".concat(t,"-prev"),W({},"".concat(t,"-disabled"),xe)),"aria-disabled":xe},pe)}var ve=Pi(Oi);if(ve){var le,ye;K?(le=!me,ye=ue?0:null):(le=!me||!b,ye=le?null:0),ve=a.createElement("li",{title:C?z.next_page:null,onClick:He,tabIndex:ye,onKeyDown:Ci,className:D("".concat(t,"-next"),W({},"".concat(t,"-disabled"),le)),"aria-disabled":le},ve)}var ji=D(t,I,(s={},W(s,"".concat(t,"-simple"),K),W(s,"".concat(t,"-disabled"),L),s));return a.createElement("ul",V({className:ji,style:h,ref:ci},zi),Ei,pe,K?qe:$,ve,a.createElement(ut,{locale:z,rootPrefixCls:t,disabled:L,selectComponentClass:f,selectPrefixCls:M,changeSize:fi?hi:null,pageSize:y,pageSizeOptions:ri,quickGo:pi?O:null,goButton:ne}))};const ii=e=>c.createElement(fe,Object.assign({},e,{showSearch:!0,size:"small"})),ti=e=>c.createElement(fe,Object.assign({},e,{showSearch:!0,size:"middle"}));ii.Option=fe.Option;ti.Option=fe.Option;const gt=e=>{const{componentCls:i}=e;return{[`${i}-disabled`]:{"&, &:hover":{cursor:"not-allowed",[`${i}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}},"&:focus-visible":{cursor:"not-allowed",[`${i}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}}},[`&${i}-disabled`]:{cursor:"not-allowed",[`${i}-item`]:{cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},a:{color:e.colorTextDisabled,backgroundColor:"transparent",border:"none",cursor:"not-allowed"},"&-active":{borderColor:e.colorBorder,backgroundColor:e.itemActiveBgDisabled,"&:hover, &:active":{backgroundColor:e.itemActiveBgDisabled},a:{color:e.itemActiveColorDisabled}}},[`${i}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},[`${i}-simple&`]:{backgroundColor:"transparent","&:hover, &:active":{backgroundColor:"transparent"}}},[`${i}-simple-pager`]:{color:e.colorTextDisabled},[`${i}-jump-prev, ${i}-jump-next`]:{[`${i}-item-link-icon`]:{opacity:0},[`${i}-item-ellipsis`]:{opacity:1}}},[`&${i}-simple`]:{[`${i}-prev, ${i}-next`]:{[`&${i}-disabled ${i}-item-link`]:{"&:hover, &:active":{backgroundColor:"transparent"}}}}}},pt=e=>{const{componentCls:i}=e;return{[`&${i}-mini ${i}-total-text, &${i}-mini ${i}-simple-pager`]:{height:e.itemSizeSM,lineHeight:p(e.itemSizeSM)},[`&${i}-mini ${i}-item`]:{minWidth:e.itemSizeSM,height:e.itemSizeSM,margin:0,lineHeight:p(e.calc(e.itemSizeSM).sub(2).equal())},[`&${i}-mini:not(${i}-disabled) ${i}-item:not(${i}-item-active)`]:{backgroundColor:"transparent",borderColor:"transparent","&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},[`&${i}-mini ${i}-prev, &${i}-mini ${i}-next`]:{minWidth:e.itemSizeSM,height:e.itemSizeSM,margin:0,lineHeight:p(e.itemSizeSM)},[`&${i}-mini:not(${i}-disabled)`]:{[`${i}-prev, ${i}-next`]:{[`&:hover ${i}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${i}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${i}-disabled:hover ${i}-item-link`]:{backgroundColor:"transparent"}}},[`
    &${i}-mini ${i}-prev ${i}-item-link,
    &${i}-mini ${i}-next ${i}-item-link
    `]:{backgroundColor:"transparent",borderColor:"transparent","&::after":{height:e.itemSizeSM,lineHeight:p(e.itemSizeSM)}},[`&${i}-mini ${i}-jump-prev, &${i}-mini ${i}-jump-next`]:{height:e.itemSizeSM,marginInlineEnd:0,lineHeight:p(e.itemSizeSM)},[`&${i}-mini ${i}-options`]:{marginInlineStart:e.paginationMiniOptionsMarginInlineStart,"&-size-changer":{top:e.miniOptionsSizeChangerTop},"&-quick-jumper":{height:e.itemSizeSM,lineHeight:p(e.itemSizeSM),input:Object.assign(Object.assign({},qi(e)),{width:e.paginationMiniQuickJumperInputWidth,height:e.controlHeightSM})}}}},vt=e=>{const{componentCls:i}=e;return{[`
    &${i}-simple ${i}-prev,
    &${i}-simple ${i}-next
    `]:{height:e.itemSizeSM,lineHeight:p(e.itemSizeSM),verticalAlign:"top",[`${i}-item-link`]:{height:e.itemSizeSM,backgroundColor:"transparent",border:0,"&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive},"&::after":{height:e.itemSizeSM,lineHeight:p(e.itemSizeSM)}}},[`&${i}-simple ${i}-simple-pager`]:{display:"inline-block",height:e.itemSizeSM,marginInlineEnd:e.marginXS,input:{boxSizing:"border-box",height:"100%",marginInlineEnd:e.marginXS,padding:`0 ${p(e.paginationItemPaddingInline)}`,textAlign:"center",backgroundColor:e.itemInputBg,border:`${p(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadius,outline:"none",transition:`border-color ${e.motionDurationMid}`,color:"inherit","&:hover":{borderColor:e.colorPrimary},"&:focus":{borderColor:e.colorPrimaryHover,boxShadow:`${p(e.inputOutlineOffset)} 0 ${p(e.controlOutlineWidth)} ${e.controlOutline}`},"&[disabled]":{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,cursor:"not-allowed"}}}}},bt=e=>{const{componentCls:i}=e;return{[`${i}-jump-prev, ${i}-jump-next`]:{outline:0,[`${i}-item-container`]:{position:"relative",[`${i}-item-link-icon`]:{color:e.colorPrimary,fontSize:e.fontSizeSM,opacity:0,transition:`all ${e.motionDurationMid}`,"&-svg":{top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,margin:"auto"}},[`${i}-item-ellipsis`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,display:"block",margin:"auto",color:e.colorTextDisabled,fontFamily:"Arial, Helvetica, sans-serif",letterSpacing:e.paginationEllipsisLetterSpacing,textAlign:"center",textIndent:e.paginationEllipsisTextIndent,opacity:1,transition:`all ${e.motionDurationMid}`}},"&:hover":{[`${i}-item-link-icon`]:{opacity:1},[`${i}-item-ellipsis`]:{opacity:0}}},[`
    ${i}-prev,
    ${i}-jump-prev,
    ${i}-jump-next
    `]:{marginInlineEnd:e.marginXS},[`
    ${i}-prev,
    ${i}-next,
    ${i}-jump-prev,
    ${i}-jump-next
    `]:{display:"inline-block",minWidth:e.itemSize,height:e.itemSize,color:e.colorText,fontFamily:e.fontFamily,lineHeight:`${p(e.itemSize)}`,textAlign:"center",verticalAlign:"middle",listStyle:"none",borderRadius:e.borderRadius,cursor:"pointer",transition:`all ${e.motionDurationMid}`},[`${i}-prev, ${i}-next`]:{fontFamily:"Arial, Helvetica, sans-serif",outline:0,button:{color:e.colorText,cursor:"pointer",userSelect:"none"},[`${i}-item-link`]:{display:"block",width:"100%",height:"100%",padding:0,fontSize:e.fontSizeSM,textAlign:"center",backgroundColor:"transparent",border:`${p(e.lineWidth)} ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:"none",transition:`all ${e.motionDurationMid}`},[`&:hover ${i}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${i}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${i}-disabled:hover`]:{[`${i}-item-link`]:{backgroundColor:"transparent"}}},[`${i}-slash`]:{marginInlineEnd:e.paginationSlashMarginInlineEnd,marginInlineStart:e.paginationSlashMarginInlineStart},[`${i}-options`]:{display:"inline-block",marginInlineStart:e.margin,verticalAlign:"middle","&-size-changer.-select":{display:"inline-block",width:"auto"},"&-quick-jumper":{display:"inline-block",height:e.controlHeight,marginInlineStart:e.marginXS,lineHeight:p(e.controlHeight),verticalAlign:"top",input:Object.assign(Object.assign(Object.assign({},Vi(e)),Wi(e,{borderColor:e.colorBorder,hoverBorderColor:e.colorPrimaryHover,activeBorderColor:e.colorPrimary,activeShadow:e.activeShadow})),{"&[disabled]":Object.assign({},Xi(e)),width:e.calc(e.controlHeightLG).mul(1.25).equal(),height:e.controlHeight,boxSizing:"border-box",margin:0,marginInlineStart:e.marginXS,marginInlineEnd:e.marginXS})}}}},ht=e=>{const{componentCls:i}=e;return{[`${i}-item`]:{display:"inline-block",minWidth:e.itemSize,height:e.itemSize,marginInlineEnd:e.marginXS,fontFamily:e.fontFamily,lineHeight:p(e.calc(e.itemSize).sub(2).equal()),textAlign:"center",verticalAlign:"middle",listStyle:"none",backgroundColor:"transparent",border:`${p(e.lineWidth)} ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:0,cursor:"pointer",userSelect:"none",a:{display:"block",padding:`0 ${p(e.paginationItemPaddingInline)}`,color:e.colorText,"&:hover":{textDecoration:"none"}},[`&:not(${i}-item-active)`]:{"&:hover":{transition:`all ${e.motionDurationMid}`,backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},"&-active":{fontWeight:e.fontWeightStrong,backgroundColor:e.itemActiveBg,borderColor:e.colorPrimary,a:{color:e.colorPrimary},"&:hover":{borderColor:e.colorPrimaryHover},"&:hover a":{color:e.colorPrimaryHover}}}}},ft=e=>{const{componentCls:i}=e;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Hi(e)),{"ul, ol":{margin:0,padding:0,listStyle:"none"},"&::after":{display:"block",clear:"both",height:0,overflow:"hidden",visibility:"hidden",content:'""'},[`${i}-total-text`]:{display:"inline-block",height:e.itemSize,marginInlineEnd:e.marginXS,lineHeight:p(e.calc(e.itemSize).sub(2).equal()),verticalAlign:"middle"}}),ht(e)),bt(e)),vt(e)),pt(e)),gt(e)),{[`@media only screen and (max-width: ${e.screenLG}px)`]:{[`${i}-item`]:{"&-after-jump-prev, &-before-jump-next":{display:"none"}}},[`@media only screen and (max-width: ${e.screenSM}px)`]:{[`${i}-options`]:{display:"none"}}}),[`&${e.componentCls}-rtl`]:{direction:"rtl"}}},St=e=>{const{componentCls:i}=e;return{[`${i}:not(${i}-disabled)`]:{[`${i}-item`]:Object.assign({},Ri(e)),[`${i}-jump-prev, ${i}-jump-next`]:{"&:focus-visible":Object.assign({[`${i}-item-link-icon`]:{opacity:1},[`${i}-item-ellipsis`]:{opacity:0}},Fe(e))},[`${i}-prev, ${i}-next`]:{[`&:focus-visible ${i}-item-link`]:Object.assign({},Fe(e))}}}},ni=e=>Object.assign({itemBg:e.colorBgContainer,itemSize:e.controlHeight,itemSizeSM:e.controlHeightSM,itemActiveBg:e.colorBgContainer,itemLinkBg:e.colorBgContainer,itemActiveColorDisabled:e.colorTextDisabled,itemActiveBgDisabled:e.controlItemBgActiveDisabled,itemInputBg:e.colorBgContainer,miniOptionsSizeChangerTop:0},Ai(e)),ai=e=>Li(e,{inputOutlineOffset:0,paginationMiniOptionsMarginInlineStart:e.calc(e.marginXXS).div(2).equal(),paginationMiniQuickJumperInputWidth:e.calc(e.controlHeightLG).mul(1.1).equal(),paginationItemPaddingInline:e.calc(e.marginXXS).mul(1.5).equal(),paginationEllipsisLetterSpacing:e.calc(e.marginXXS).div(2).equal(),paginationSlashMarginInlineStart:e.marginXXS,paginationSlashMarginInlineEnd:e.marginSM,paginationEllipsisTextIndent:"0.13em"},Ki(e)),Ct=Di("Pagination",e=>{const i=ai(e);return[ft(i),St(i)]},ni),$t=e=>{const{componentCls:i}=e;return{[`${i}${i}-bordered${i}-disabled:not(${i}-mini)`]:{"&, &:hover":{[`${i}-item-link`]:{borderColor:e.colorBorder}},"&:focus-visible":{[`${i}-item-link`]:{borderColor:e.colorBorder}},[`${i}-item, ${i}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,[`&:hover:not(${i}-item-active)`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,a:{color:e.colorTextDisabled}},[`&${i}-item-active`]:{backgroundColor:e.itemActiveBgDisabled}},[`${i}-prev, ${i}-next`]:{"&:hover button":{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,color:e.colorTextDisabled},[`${i}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder}}},[`${i}${i}-bordered:not(${i}-mini)`]:{[`${i}-prev, ${i}-next`]:{"&:hover button":{borderColor:e.colorPrimaryHover,backgroundColor:e.itemBg},[`${i}-item-link`]:{backgroundColor:e.itemLinkBg,borderColor:e.colorBorder},[`&:hover ${i}-item-link`]:{borderColor:e.colorPrimary,backgroundColor:e.itemBg,color:e.colorPrimary},[`&${i}-disabled`]:{[`${i}-item-link`]:{borderColor:e.colorBorder,color:e.colorTextDisabled}}},[`${i}-item`]:{backgroundColor:e.itemBg,border:`${p(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,[`&:hover:not(${i}-item-active)`]:{borderColor:e.colorPrimary,backgroundColor:e.itemBg,a:{color:e.colorPrimary}},"&-active":{borderColor:e.colorPrimary}}}}},xt=Ji(["Pagination","bordered"],e=>{const i=ai(e);return[$t(i)]},ni);var yt=globalThis&&globalThis.__rest||function(e,i){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)i.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(s[o[t]]=e[o[t]]);return s};const Pt=e=>{const{prefixCls:i,selectPrefixCls:s,className:o,rootClassName:t,style:x,size:M,locale:I,selectComponentClass:f,responsive:B,showSizeChanger:E}=e,j=yt(e,["prefixCls","selectPrefixCls","className","rootClassName","style","size","locale","selectComponentClass","responsive","showSizeChanger"]),{xs:w}=ki(B),[,m]=Fi(),{getPrefixCls:H,direction:S,pagination:v={}}=c.useContext(Ui),u=H("pagination",i),[N,Y,U]=Ct(u),Z=E??v.showSizeChanger,X=c.useMemo(()=>{const h=c.createElement("span",{className:`${u}-item-ellipsis`},"•••"),d=c.createElement("button",{className:`${u}-item-link`,type:"button",tabIndex:-1},S==="rtl"?c.createElement(Ue,null):c.createElement(Ge,null)),Q=c.createElement("button",{className:`${u}-item-link`,type:"button",tabIndex:-1},S==="rtl"?c.createElement(Ge,null):c.createElement(Ue,null)),L=c.createElement("a",{className:`${u}-item-link`},c.createElement("div",{className:`${u}-item-container`},S==="rtl"?c.createElement(Ye,{className:`${u}-item-link-icon`}):c.createElement(Qe,{className:`${u}-item-link-icon`}),h)),K=c.createElement("a",{className:`${u}-item-link`},c.createElement("div",{className:`${u}-item-container`},S==="rtl"?c.createElement(Qe,{className:`${u}-item-link-icon`}):c.createElement(Ye,{className:`${u}-item-link-icon`}),h));return{prevIcon:d,nextIcon:Q,jumpPrevIcon:L,jumpNextIcon:K}},[S,u]),[P]=Gi("Pagination",Yi),G=Object.assign(Object.assign({},P),I),C=Qi(M),R=C==="small"||!!(w&&!C&&B),A=H("select",s),J=D({[`${u}-mini`]:R,[`${u}-rtl`]:S==="rtl",[`${u}-bordered`]:m.wireframe},v==null?void 0:v.className,o,t,Y,U),z=Object.assign(Object.assign({},v==null?void 0:v.style),x);return N(c.createElement(c.Fragment,null,m.wireframe&&c.createElement(xt,{prefixCls:u}),c.createElement(dt,Object.assign({},X,j,{style:z,prefixCls:u,selectPrefixCls:A,className:J,selectComponentClass:f||(R?ii:ti),locale:G,showSizeChanger:Z}))))},Ot=Pt;export{Ot as P};
