var Rt=Object.defineProperty;var Nt=(e,t,i)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var te=(e,t,i)=>Nt(e,typeof t!="symbol"?t+"":t,i);import{d as J,f as dt,h as ze,i as zt,j as Lt,k as re,l as Le,s as U,e as T,n as H,p as K,F as He,q as Se,v as Ht,x as _e,y as We,c as de,a as P,w as Ze,u as Q,t as ve,r as Wt,g as A,o as pe,_ as Yt,b as Gt}from"./styles-dOjvTARq.js";import{f as kt,_ as b,P as W,b as z,I as Ye,c as k,o as Vt,i as Xt,d as Ut,g as qt,e as Kt,r as pt,m as xe,h as Zt,j as ft,s as Qt,k as ae,l as ie,n as Qe,u as ht,p as ge,q as Te,t as Jt,v as mt,w as gt,N as Je,x as et,B as Tt,y as ei,z as ne,A as we,D as ti,E as ii,a as De,S as tt,M as ni,C as ai}from"./folder-BuCtMlhz.js";var yt=function(){if(typeof Map<"u")return Map;function e(t,i){var n=-1;return t.some(function(a,o){return a[0]===i?(n=o,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(i){var n=e(this.__entries__,i),a=this.__entries__[n];return a&&a[1]},t.prototype.set=function(i,n){var a=e(this.__entries__,i);~a?this.__entries__[a][1]=n:this.__entries__.push([i,n])},t.prototype.delete=function(i){var n=this.__entries__,a=e(n,i);~a&&n.splice(a,1)},t.prototype.has=function(i){return!!~e(this.__entries__,i)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(i,n){n===void 0&&(n=null);for(var a=0,o=this.__entries__;a<o.length;a++){var l=o[a];i.call(n,l[1],l[0])}},t}()}(),Be=typeof window<"u"&&typeof document<"u"&&window.document===document,Ie=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ri=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ie):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),oi=2;function li(e,t){var i=!1,n=!1,a=0;function o(){i&&(i=!1,e()),n&&r()}function l(){ri(o)}function r(){var c=Date.now();if(i){if(c-a<oi)return;n=!0}else i=!0,n=!1,setTimeout(l,t);a=c}return r}var si=20,ui=["top","right","bottom","left","width","height","size","weight"],ci=typeof MutationObserver<"u",di=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=li(this.refresh.bind(this),si)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var i=this.observers_,n=i.indexOf(t);~n&&i.splice(n,1),!i.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(i){return i.gatherActive(),i.hasActive()});return t.forEach(function(i){return i.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Be||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ci?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Be||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var i=t.propertyName,n=i===void 0?"":i,a=ui.some(function(o){return!!~n.indexOf(o)});a&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),bt=function(e,t){for(var i=0,n=Object.keys(t);i<n.length;i++){var a=n[i];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e},ue=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ie},vt=je(0,0,0,0);function Oe(e){return parseFloat(e)||0}function it(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return t.reduce(function(n,a){var o=e["border-"+a+"-width"];return n+Oe(o)},0)}function pi(e){for(var t=["top","right","bottom","left"],i={},n=0,a=t;n<a.length;n++){var o=a[n],l=e["padding-"+o];i[o]=Oe(l)}return i}function fi(e){var t=e.getBBox();return je(0,0,t.width,t.height)}function hi(e){var t=e.clientWidth,i=e.clientHeight;if(!t&&!i)return vt;var n=ue(e).getComputedStyle(e),a=pi(n),o=a.left+a.right,l=a.top+a.bottom,r=Oe(n.width),c=Oe(n.height);if(n.boxSizing==="border-box"&&(Math.round(r+o)!==t&&(r-=it(n,"left","right")+o),Math.round(c+l)!==i&&(c-=it(n,"top","bottom")+l)),!gi(e)){var d=Math.round(r+o)-t,p=Math.round(c+l)-i;Math.abs(d)!==1&&(r-=d),Math.abs(p)!==1&&(c-=p)}return je(a.left,a.top,r,c)}var mi=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof ue(e).SVGGraphicsElement}:function(e){return e instanceof ue(e).SVGElement&&typeof e.getBBox=="function"}}();function gi(e){return e===ue(e).document.documentElement}function Ti(e){return Be?mi(e)?fi(e):hi(e):vt}function yi(e){var t=e.x,i=e.y,n=e.width,a=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return bt(l,{x:t,y:i,width:n,height:a,top:i,right:t+n,bottom:a+i,left:t}),l}function je(e,t,i,n){return{x:e,y:t,width:i,height:n}}var bi=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=je(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Ti(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),vi=function(){function e(t,i){var n=yi(i);bt(this,{target:t,contentRect:n})}return e}(),wi=function(){function e(t,i,n){if(this.activeObservations_=[],this.observations_=new yt,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=i,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ue(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var i=this.observations_;i.has(t)||(i.set(t,new bi(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ue(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var i=this.observations_;i.has(t)&&(i.delete(t),i.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(i){i.isActive()&&t.activeObservations_.push(i)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,i=this.activeObservations_.map(function(n){return new vi(n.target,n.broadcastRect())});this.callback_.call(t,i,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),wt=typeof WeakMap<"u"?new WeakMap:new yt,Dt=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=di.getInstance(),n=new wi(t,i,this);wt.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Dt.prototype[e]=function(){var t;return(t=wt.get(this))[e].apply(t,arguments)}});var Di=function(){return typeof Ie.ResizeObserver<"u"?Ie.ResizeObserver:Dt}();const Ci=J({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(e,t){let{slots:i}=t;const n=dt({width:0,height:0,offsetHeight:0,offsetWidth:0});let a=null,o=null;const l=()=>{o&&(o.disconnect(),o=null)},r=p=>{const{onResize:f}=e,s=p[0].target,{width:v,height:C}=s.getBoundingClientRect(),{offsetWidth:D,offsetHeight:h}=s,m=Math.floor(v),g=Math.floor(C);if(n.width!==m||n.height!==g||n.offsetWidth!==D||n.offsetHeight!==h){const S={width:m,height:g,offsetWidth:D,offsetHeight:h};b(n,S),f&&Promise.resolve().then(()=>{f(b(b({},S),{offsetWidth:D,offsetHeight:h}),s)})}},c=Le(),d=()=>{const{disabled:p}=e;if(p){l();return}const f=kt(c);f!==a&&(l(),a=f),!o&&f&&(o=new Di(r),o.observe(f))};return ze(()=>{d()}),zt(()=>{d()}),Lt(()=>{l()}),re(()=>e.disabled,()=>{d()},{flush:"post"}),()=>{var p;return(p=i.default)===null||p===void 0?void 0:p.call(i)[0]}}});var Si=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const xi=J({compatConfig:{MODE:3},props:{disabled:W.looseBool,type:W.string,value:W.any,tag:{type:String,default:"input"},size:W.string,onChange:Function,onInput:Function,onBlur:Function,onFocus:Function,onKeydown:Function,onCompositionstart:Function,onCompositionend:Function,onKeyup:Function,onPaste:Function,onMousedown:Function},emits:["change","input","blur","keydown","focus","compositionstart","compositionend","keyup","paste","mousedown"],setup(e,t){let{expose:i}=t;const n=U(null);return i({focus:()=>{n.value&&n.value.focus()},blur:()=>{n.value&&n.value.blur()},input:n,setSelectionRange:(c,d,p)=>{var f;(f=n.value)===null||f===void 0||f.setSelectionRange(c,d,p)},select:()=>{var c;(c=n.value)===null||c===void 0||c.select()},getSelectionStart:()=>{var c;return(c=n.value)===null||c===void 0?void 0:c.selectionStart},getSelectionEnd:()=>{var c;return(c=n.value)===null||c===void 0?void 0:c.selectionEnd},getScrollTop:()=>{var c;return(c=n.value)===null||c===void 0?void 0:c.scrollTop}}),()=>{const{tag:c,value:d}=e,p=Si(e,["tag","value"]);return T(c,z(z({},p),{},{ref:n,value:d}),null)}}});function Ii(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return typeof n>"u"||n===null||(t+=`${i}: ${e[i]};`),t},"")}var Oi=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const Ct=J({compatConfig:{MODE:3},inheritAttrs:!1,props:{disabled:W.looseBool,type:W.string,value:W.any,lazy:W.bool.def(!0),tag:{type:String,default:"input"},size:W.string,style:W.oneOfType([String,Object]),class:W.string},emits:["change","input","blur","keydown","focus","compositionstart","compositionend","keyup","paste","mousedown"],setup(e,t){let{emit:i,attrs:n,expose:a}=t;const o=U(null),l=H(),r=H(!1);re([()=>e.value,r],()=>{r.value||(l.value=e.value)},{immediate:!0});const c=u=>{i("change",u)},d=u=>{r.value=!0,u.target.composing=!0,i("compositionstart",u)},p=u=>{r.value=!1,u.target.composing=!1,i("compositionend",u);const j=document.createEvent("HTMLEvents");j.initEvent("input",!0,!0),u.target.dispatchEvent(j),c(u)},f=u=>{if(r.value&&e.lazy){l.value=u.target.value;return}i("input",u)},s=u=>{i("blur",u)},v=u=>{i("focus",u)},C=()=>{o.value&&o.value.focus()},D=()=>{o.value&&o.value.blur()},h=u=>{i("keydown",u)},m=u=>{i("keyup",u)},g=(u,j,I)=>{var M;(M=o.value)===null||M===void 0||M.setSelectionRange(u,j,I)},S=()=>{var u;(u=o.value)===null||u===void 0||u.select()};a({focus:C,blur:D,input:K(()=>{var u;return(u=o.value)===null||u===void 0?void 0:u.input}),setSelectionRange:g,select:S,getSelectionStart:()=>{var u;return(u=o.value)===null||u===void 0?void 0:u.getSelectionStart()},getSelectionEnd:()=>{var u;return(u=o.value)===null||u===void 0?void 0:u.getSelectionEnd()},getScrollTop:()=>{var u;return(u=o.value)===null||u===void 0?void 0:u.getScrollTop()}});const $=u=>{i("mousedown",u)},w=u=>{i("paste",u)},x=K(()=>e.style&&typeof e.style!="string"?Ii(e.style):e.style);return()=>{const u=Oi(e,["style","lazy"]);return T(xi,z(z(z({},u),n),{},{style:x.value,onInput:f,onChange:c,onBlur:s,onFocus:v,ref:o,value:l.value,onCompositionstart:d,onCompositionend:p,onKeyup:m,onKeydown:h,onPaste:w,onMousedown:$}),null)}}});var ji={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};function nt(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable}))),n.forEach(function(a){Fi(e,a,i[a])})}return e}function Fi(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ge=function(t,i){var n=nt({},t,i.attrs);return T(Ye,nt({},n,{icon:ji}),null)};Ge.displayName="SearchOutlined";Ge.inheritAttrs=!1;function fe(e,t,i){return k({[`${e}-status-success`]:t==="success",[`${e}-status-warning`]:t==="warning",[`${e}-status-error`]:t==="error",[`${e}-status-validating`]:t==="validating",[`${e}-has-feedback`]:i})}const ke=(e,t)=>t||e;var Mi=Vt(Object.getPrototypeOf,Object),Ei="[object Object]",$i=Function.prototype,Ai=Object.prototype,St=$i.toString,Pi=Ai.hasOwnProperty,_i=St.call(Object);function Bi(e){if(!Xt(e)||Ut(e)!=Ei)return!1;var t=Mi(e);if(t===null)return!0;var i=Pi.call(t,"constructor")&&t.constructor;return typeof i=="function"&&i instanceof i&&St.call(i)==_i}const Ri=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),Ve=e=>({borderColor:e.inputBorderHoverColor,borderInlineEndWidth:e.lineWidth}),Re=e=>({borderColor:e.inputBorderHoverColor,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,borderInlineEndWidth:e.lineWidth,outline:0}),Ni=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"&:hover":b({},Ve(xe(e,{inputBorderHoverColor:e.colorBorder})))}),xt=e=>{const{inputPaddingVerticalLG:t,fontSizeLG:i,lineHeightLG:n,borderRadiusLG:a,inputPaddingHorizontalLG:o}=e;return{padding:`${t}px ${o}px`,fontSize:i,lineHeight:n,borderRadius:a}},It=e=>({padding:`${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM-1}px`,borderRadius:e.borderRadiusSM}),Ot=(e,t)=>{const{componentCls:i,colorError:n,colorWarning:a,colorErrorOutline:o,colorWarningOutline:l,colorErrorBorderHover:r,colorWarningBorderHover:c}=e;return{[`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]:{borderColor:n,"&:hover":{borderColor:r},"&:focus, &-focused":b({},Re(xe(e,{inputBorderActiveColor:n,inputBorderHoverColor:n,controlOutline:o}))),[`${i}-prefix`]:{color:n}},[`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]:{borderColor:a,"&:hover":{borderColor:c},"&:focus, &-focused":b({},Re(xe(e,{inputBorderActiveColor:a,inputBorderHoverColor:a,controlOutline:l}))),[`${i}-prefix`]:{color:a}}}},jt=e=>b(b({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,backgroundColor:e.colorBgContainer,backgroundImage:"none",borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:e.colorBorder,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},Ri(e.colorTextPlaceholder)),{"&:hover":b({},Ve(e)),"&:focus, &-focused":b({},Re(e)),"&-disabled, &[disabled]":b({},Ni(e)),"&-borderless":{"&, &:hover, &:focus, &-focused, &-disabled, &[disabled]":{backgroundColor:"transparent",border:"none",boxShadow:"none"}},"textarea&":{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}, height 0s`,resize:"vertical"},"&-lg":b({},xt(e)),"&-sm":b({},It(e)),"&-rtl":{direction:"rtl"},"&-textarea-rtl":{direction:"rtl"}}),zi=e=>{const{componentCls:t,antCls:i}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:b({},xt(e)),[`&-sm ${t}, &-sm > ${t}-group-addon`]:b({},It(e)),[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${e.inputPaddingHorizontal}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,textAlign:"center",backgroundColor:e.colorFillAlter,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${i}-select`]:{margin:`-${e.inputPaddingVertical+1}px -${e.inputPaddingHorizontal}px`,[`&${i}-select-single:not(${i}-select-customize-input)`]:{[`${i}-select-selector`]:{backgroundColor:"inherit",border:`${e.lineWidth}px ${e.lineType} transparent`,boxShadow:"none"}},"&-open, &-focused":{[`${i}-select-selector`]:{color:e.colorPrimary}}},[`${i}-cascader-picker`]:{margin:`-9px -${e.inputPaddingHorizontal}px`,backgroundColor:"transparent",[`${i}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}},[`${t}`]:{float:"inline-start",width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${t}-search-with-button &`]:{zIndex:0}}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${i}-select ${i}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${i}-select ${i}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${t}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:b(b({display:"block"},Zt()),{[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover":{zIndex:1},"&:focus":{zIndex:1}}},"& > *":{display:"inline-block",float:"none",verticalAlign:"top",borderRadius:0},[`& > ${t}-affix-wrapper`]:{display:"inline-flex"},[`& > ${i}-picker-range`]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:-e.lineWidth,borderInlineEndWidth:e.lineWidth},[`${t}`]:{float:"none"},[`& > ${i}-select > ${i}-select-selector,
      & > ${i}-select-auto-complete ${t},
      & > ${i}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover":{zIndex:1},"&:focus":{zIndex:1}},[`& > ${i}-select-focused`]:{zIndex:1},[`& > ${i}-select > ${i}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${i}-select:first-child > ${i}-select-selector,
      & > ${i}-select-auto-complete:first-child ${t},
      & > ${i}-cascader-picker:first-child ${t}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${i}-select:last-child > ${i}-select-selector,
      & > ${i}-cascader-picker:last-child ${t},
      & > ${i}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${i}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:-e.lineWidth,[`${t}-affix-wrapper`]:{borderRadius:0}},[`${t}-group-wrapper:not(:last-child)`]:{[`&${t}-search > ${t}-group`]:{[`& > ${t}-group-addon > ${t}-search-button`]:{borderRadius:0},[`& > ${t}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}}),[`&&-sm ${i}-btn`]:{fontSize:e.fontSizeSM,height:e.controlHeightSM,lineHeight:"normal"},[`&&-lg ${i}-btn`]:{fontSize:e.fontSizeLG,height:e.controlHeightLG,lineHeight:"normal"},[`&&-lg ${i}-select-single ${i}-select-selector`]:{height:`${e.controlHeightLG}px`,[`${i}-select-selection-item, ${i}-select-selection-placeholder`]:{lineHeight:`${e.controlHeightLG-2}px`},[`${i}-select-selection-search-input`]:{height:`${e.controlHeightLG}px`}},[`&&-sm ${i}-select-single ${i}-select-selector`]:{height:`${e.controlHeightSM}px`,[`${i}-select-selection-item, ${i}-select-selection-placeholder`]:{lineHeight:`${e.controlHeightSM-2}px`},[`${i}-select-selection-search-input`]:{height:`${e.controlHeightSM}px`}}}},Li=e=>{const{componentCls:t,controlHeightSM:i,lineWidth:n}=e,o=(i-n*2-16)/2;return{[t]:b(b(b(b({},pt(e)),jt(e)),Ot(e,t)),{'&[type="color"]':{height:e.controlHeight,[`&${t}-lg`]:{height:e.controlHeightLG},[`&${t}-sm`]:{height:i,paddingTop:o,paddingBottom:o}}})}},Hi=e=>{const{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextTertiary},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${e.inputAffixPadding}px`}},"&-textarea-with-clear-btn":{padding:"0 !important",border:"0 !important",[`${t}-clear-icon`]:{position:"absolute",insetBlockStart:e.paddingXS,insetInlineEnd:e.paddingXS,zIndex:1}}}},Wi=e=>{const{componentCls:t,inputAffixPadding:i,colorTextDescription:n,motionDurationSlow:a,colorIcon:o,colorIconHover:l,iconCls:r}=e;return{[`${t}-affix-wrapper`]:b(b(b(b(b({},jt(e)),{display:"inline-flex",[`&:not(${t}-affix-wrapper-disabled):hover`]:b(b({},Ve(e)),{zIndex:1,[`${t}-search-with-button &`]:{zIndex:0}}),"&-focused, &:focus":{zIndex:1},"&-disabled":{[`${t}[disabled]`]:{background:"transparent"}},[`> input${t}`]:{padding:0,fontSize:"inherit",border:"none",borderRadius:0,outline:"none","&:focus":{boxShadow:"none !important"}},"&::before":{width:0,visibility:"hidden",content:'"\\a0"'},[`${t}`]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:n},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:i},"&-suffix":{marginInlineStart:i}}}),Hi(e)),{[`${r}${t}-password-icon`]:{color:o,cursor:"pointer",transition:`all ${a}`,"&:hover":{color:l}}}),Ot(e,`${t}-affix-wrapper`))}},Yi=e=>{const{componentCls:t,colorError:i,colorSuccess:n,borderRadiusLG:a,borderRadiusSM:o}=e;return{[`${t}-group`]:b(b(b({},pt(e)),zi(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":{display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:a}},"&-sm":{[`${t}-group-addon`]:{borderRadius:o}},"&-status-error":{[`${t}-group-addon`]:{color:i,borderColor:i}},"&-status-warning":{[`${t}-group-addon:last-child`]:{color:n,borderColor:n}}}})}},Gi=e=>{const{componentCls:t,antCls:i}=e,n=`${t}-search`;return{[n]:{[`${t}`]:{"&:hover, &:focus":{borderColor:e.colorPrimaryHover,[`+ ${t}-group-addon ${n}-button:not(${i}-btn-primary)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${t}-affix-wrapper`]:{borderRadius:0},[`${t}-lg`]:{lineHeight:e.lineHeightLG-2e-4},[`> ${t}-group`]:{[`> ${t}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${n}-button`]:{paddingTop:0,paddingBottom:0,borderStartStartRadius:0,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius,borderEndStartRadius:0},[`${n}-button:not(${i}-btn-primary)`]:{color:e.colorTextDescription,"&:hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${i}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${n}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},[`&-large ${n}-button`]:{height:e.controlHeightLG},[`&-small ${n}-button`]:{height:e.controlHeightSM},"&-rtl":{direction:"rtl"},[`&${t}-compact-item`]:{[`&:not(${t}-compact-last-item)`]:{[`${t}-group-addon`]:{[`${t}-search-button`]:{marginInlineEnd:-e.lineWidth,borderRadius:0}}},[`&:not(${t}-compact-first-item)`]:{[`${t},${t}-affix-wrapper`]:{borderRadius:0}},[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]:{"&:hover,&:focus,&:active":{zIndex:2}},[`> ${t}-affix-wrapper-focused`]:{zIndex:2}}}}};function ki(e){return xe(e,{inputAffixPadding:e.paddingXXS,inputPaddingVertical:Math.max(Math.round((e.controlHeight-e.fontSize*e.lineHeight)/2*10)/10-e.lineWidth,3),inputPaddingVerticalLG:Math.ceil((e.controlHeightLG-e.fontSizeLG*e.lineHeightLG)/2*10)/10-e.lineWidth,inputPaddingVerticalSM:Math.max(Math.round((e.controlHeightSM-e.fontSize*e.lineHeight)/2*10)/10-e.lineWidth,0),inputPaddingHorizontal:e.paddingSM-e.lineWidth,inputPaddingHorizontalSM:e.paddingXS-e.lineWidth,inputPaddingHorizontalLG:e.controlPaddingHorizontal-e.lineWidth,inputBorderHoverColor:e.colorPrimaryHover,inputBorderActiveColor:e.colorPrimaryHover})}const Vi=e=>{const{componentCls:t,inputPaddingHorizontal:i,paddingLG:n}=e,a=`${t}-textarea`;return{[a]:{position:"relative",[`${a}-suffix`]:{position:"absolute",top:0,insetInlineEnd:i,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto"},"&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating":{[`&${a}-has-feedback`]:{[`${t}`]:{paddingInlineEnd:n}}},"&-show-count":{[`> ${t}`]:{height:"100%"},"&::after":{color:e.colorTextDescription,whiteSpace:"nowrap",content:"attr(data-count)",pointerEvents:"none",float:"right"}},"&-rtl":{"&::after":{float:"left"}}}}},Xe=qt("Input",e=>{const t=ki(e);return[Li(t),Vi(t),Wi(t),Yi(t),Gi(t),Kt(t)]}),he=e=>e!=null&&(Array.isArray(e)?ft(e).length:!0);function Ue(e){return he(e.prefix)||he(e.suffix)||he(e.allowClear)}function Ce(e){return he(e.addonBefore)||he(e.addonAfter)}function Ne(e){return typeof e>"u"||e===null?"":String(e)}function me(e,t,i,n){if(!i)return;const a=t;if(t.type==="click"){Object.defineProperty(a,"target",{writable:!0}),Object.defineProperty(a,"currentTarget",{writable:!0});const o=e.cloneNode(!0);a.target=o,a.currentTarget=o,o.value="",i(a);return}if(n!==void 0){Object.defineProperty(a,"target",{writable:!0}),Object.defineProperty(a,"currentTarget",{writable:!0}),a.target=e,a.currentTarget=e,e.value=n,i(a);return}i(a)}function Ft(e,t){if(!e)return;e.focus(t);const{cursor:i}=t||{};if(i){const n=e.value.length;switch(i){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(n,n);break;default:e.setSelectionRange(0,n)}}}const Xi=()=>({addonBefore:W.any,addonAfter:W.any,prefix:W.any,suffix:W.any,clearIcon:W.any,affixWrapperClassName:String,groupClassName:String,wrapperClassName:String,inputClassName:String,allowClear:{type:Boolean,default:void 0}}),Mt=()=>b(b({},Xi()),{value:{type:[String,Number,Symbol],default:void 0},defaultValue:{type:[String,Number,Symbol],default:void 0},inputElement:W.any,prefixCls:String,disabled:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},triggerFocus:Function,readonly:{type:Boolean,default:void 0},handleReset:Function,hidden:{type:Boolean,default:void 0}}),Et=()=>b(b({},Mt()),{id:String,placeholder:{type:[String,Number]},autocomplete:String,type:Qt("text"),name:String,size:{type:String},autofocus:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object,hidden:{type:Boolean,default:void 0},status:String}),Ui=J({name:"BaseInput",inheritAttrs:!1,props:Mt(),setup(e,t){let{slots:i,attrs:n}=t;const a=H(),o=r=>{var c;if(!((c=a.value)===null||c===void 0)&&c.contains(r.target)){const{triggerFocus:d}=e;d==null||d()}},l=()=>{var r;const{allowClear:c,value:d,disabled:p,readonly:f,handleReset:s,suffix:v=i.suffix,prefixCls:C}=e;if(!c)return null;const D=!p&&!f&&d,h=`${C}-clear-icon`,m=((r=i.clearIcon)===null||r===void 0?void 0:r.call(i))||"*";return T("span",{onClick:s,onMousedown:g=>g.preventDefault(),class:k({[`${h}-hidden`]:!D,[`${h}-has-suffix`]:!!v},h),role:"button",tabindex:-1},[m])};return()=>{var r,c;const{focused:d,value:p,disabled:f,allowClear:s,readonly:v,hidden:C,prefixCls:D,prefix:h=(r=i.prefix)===null||r===void 0?void 0:r.call(i),suffix:m=(c=i.suffix)===null||c===void 0?void 0:c.call(i),addonAfter:g=i.addonAfter,addonBefore:S=i.addonBefore,inputElement:$,affixWrapperClassName:w,wrapperClassName:x,groupClassName:u}=e;let j=ae($,{value:p,hidden:C});if(Ue({prefix:h,suffix:m,allowClear:s})){const I=`${D}-affix-wrapper`,M=k(I,{[`${I}-disabled`]:f,[`${I}-focused`]:d,[`${I}-readonly`]:v,[`${I}-input-with-clear-btn`]:m&&s&&p},!Ce({addonAfter:g,addonBefore:S})&&n.class,w),R=(m||s)&&T("span",{class:`${D}-suffix`},[l(),m]);j=T("span",{class:M,style:n.style,hidden:!Ce({addonAfter:g,addonBefore:S})&&C,onMousedown:o,ref:a},[h&&T("span",{class:`${D}-prefix`},[h]),ae($,{style:null,value:p,hidden:null}),R])}if(Ce({addonAfter:g,addonBefore:S})){const I=`${D}-group`,M=`${I}-addon`,R=k(`${D}-wrapper`,I,x),B=k(`${D}-group-wrapper`,n.class,u);return T("span",{class:B,style:n.style,hidden:C},[T("span",{class:R},[S&&T("span",{class:M},[S]),ae(j,{style:null,hidden:null}),g&&T("span",{class:M},[g])])])}return j}}});var qi=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const Ki=J({name:"VCInput",inheritAttrs:!1,props:Et(),setup(e,t){let{slots:i,attrs:n,expose:a,emit:o}=t;const l=U(e.value===void 0?e.defaultValue:e.value),r=U(!1),c=U(),d=U();re(()=>e.value,()=>{l.value=e.value}),re(()=>e.disabled,()=>{e.disabled&&(r.value=!1)});const p=u=>{c.value&&Ft(c.value.input,u)},f=()=>{var u;(u=c.value.input)===null||u===void 0||u.blur()},s=(u,j,I)=>{var M;(M=c.value.input)===null||M===void 0||M.setSelectionRange(u,j,I)},v=()=>{var u;(u=c.value.input)===null||u===void 0||u.select()};a({focus:p,blur:f,input:K(()=>{var u;return(u=c.value.input)===null||u===void 0?void 0:u.input}),stateValue:l,setSelectionRange:s,select:v});const C=u=>{o("change",u)},D=(u,j)=>{l.value!==u&&(e.value===void 0?l.value=u:Se(()=>{var I;c.value.input.value!==l.value&&((I=d.value)===null||I===void 0||I.$forceUpdate())}),Se(()=>{j&&j()}))},h=u=>{const{value:j}=u.target;if(l.value===j)return;const I=u.target.value;me(c.value.input,u,C),D(I)},m=u=>{u.keyCode===13&&o("pressEnter",u),o("keydown",u)},g=u=>{r.value=!0,o("focus",u)},S=u=>{r.value=!1,o("blur",u)},$=u=>{me(c.value.input,u,C),D("",()=>{p()})},w=()=>{var u,j;const{addonBefore:I=i.addonBefore,addonAfter:M=i.addonAfter,disabled:R,valueModifiers:B={},htmlSize:O,autocomplete:E,prefixCls:L,inputClassName:Y,prefix:q=(u=i.prefix)===null||u===void 0?void 0:u.call(i),suffix:Z=(j=i.suffix)===null||j===void 0?void 0:j.call(i),allowClear:y,type:F="text"}=e,_=ie(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName"]),G=b(b(b({},_),n),{autocomplete:E,onChange:h,onInput:h,onFocus:g,onBlur:S,onKeydown:m,class:k(L,{[`${L}-disabled`]:R},Y,!Ce({addonAfter:M,addonBefore:I})&&!Ue({prefix:q,suffix:Z,allowClear:y})&&n.class),ref:c,key:"ant-input",size:O,type:F,lazy:e.lazy});return B.lazy&&delete G.onInput,G.autofocus||delete G.autofocus,T(Ct,ie(G,["size"]),null)},x=()=>{var u;const{maxlength:j,suffix:I=(u=i.suffix)===null||u===void 0?void 0:u.call(i),showCount:M,prefixCls:R}=e,B=Number(j)>0;if(I||M){const O=[...Ne(l.value)].length,E=typeof M=="object"?M.formatter({count:O,maxlength:j}):`${O}${B?` / ${j}`:""}`;return T(He,null,[!!M&&T("span",{class:k(`${R}-show-count-suffix`,{[`${R}-show-count-has-suffix`]:!!I})},[E]),I])}return null};return ze(()=>{}),()=>{const{prefixCls:u,disabled:j}=e,I=qi(e,["prefixCls","disabled"]);return T(Ui,z(z(z({},I),n),{},{ref:d,prefixCls:u,inputElement:w(),handleReset:$,value:Ne(l.value),focused:r.value,triggerFocus:p,suffix:x(),disabled:j}),i)}}}),Fe=()=>ie(Et(),["wrapperClassName","groupClassName","inputClassName","affixWrapperClassName"]),$t=()=>b(b({},ie(Fe(),["prefix","addonBefore","addonAfter","suffix"])),{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Qe(),onCompositionend:Qe(),valueModifiers:Object});var Zi=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const N=J({compatConfig:{MODE:3},name:"AInput",inheritAttrs:!1,props:Fe(),setup(e,t){let{slots:i,attrs:n,expose:a,emit:o}=t;const l=H(),r=ht(),c=ge.useInject(),d=K(()=>ke(c.status,e.status)),{direction:p,prefixCls:f,size:s,autocomplete:v}=Te("input",e),{compactSize:C,compactItemClassnames:D}=Jt(f,p),h=K(()=>C.value||s.value),[m,g]=Xe(f),S=mt();a({focus:O=>{var E;(E=l.value)===null||E===void 0||E.focus(O)},blur:()=>{var O;(O=l.value)===null||O===void 0||O.blur()},input:l,setSelectionRange:(O,E,L)=>{var Y;(Y=l.value)===null||Y===void 0||Y.setSelectionRange(O,E,L)},select:()=>{var O;(O=l.value)===null||O===void 0||O.select()}});const j=H([]),I=()=>{j.value.push(setTimeout(()=>{var O,E,L,Y;!((O=l.value)===null||O===void 0)&&O.input&&((E=l.value)===null||E===void 0?void 0:E.input.getAttribute("type"))==="password"&&(!((L=l.value)===null||L===void 0)&&L.input.hasAttribute("value"))&&((Y=l.value)===null||Y===void 0||Y.input.removeAttribute("value"))}))};ze(()=>{I()}),Ht(()=>{j.value.forEach(O=>clearTimeout(O))}),_e(()=>{j.value.forEach(O=>clearTimeout(O))});const M=O=>{I(),o("blur",O),r.onFieldBlur()},R=O=>{I(),o("focus",O)},B=O=>{o("update:value",O.target.value),o("change",O),o("input",O),r.onFieldChange()};return()=>{var O,E,L,Y,q,Z;const{hasFeedback:y,feedbackIcon:F}=c,{allowClear:_,bordered:G=!0,prefix:V=(O=i.prefix)===null||O===void 0?void 0:O.call(i),suffix:ce=(E=i.suffix)===null||E===void 0?void 0:E.call(i),addonAfter:ye=(L=i.addonAfter)===null||L===void 0?void 0:L.call(i),addonBefore:oe=(Y=i.addonBefore)===null||Y===void 0?void 0:Y.call(i),id:be=(q=r.id)===null||q===void 0?void 0:q.value}=e,le=Zi(e,["allowClear","bordered","prefix","suffix","addonAfter","addonBefore","id"]),Pt=(y||ce)&&T(He,null,[ce,y&&F]),X=f.value,_t=Ue({prefix:V,suffix:ce})||!!y,Bt=i.clearIcon||(()=>T(gt,null,null));return m(T(Ki,z(z(z({},n),ie(le,["onUpdate:value","onChange","onInput"])),{},{onChange:B,id:be,disabled:(Z=e.disabled)!==null&&Z!==void 0?Z:S.value,ref:l,prefixCls:X,autocomplete:v.value,onBlur:M,onFocus:R,prefix:V,suffix:Pt,allowClear:_,addonAfter:ye&&T(Je,null,{default:()=>[T(et,null,{default:()=>[ye]})]}),addonBefore:oe&&T(Je,null,{default:()=>[T(et,null,{default:()=>[oe]})]}),class:[n.class,D.value],inputClassName:k({[`${X}-sm`]:h.value==="small",[`${X}-lg`]:h.value==="large",[`${X}-rtl`]:p.value==="rtl",[`${X}-borderless`]:!G},!_t&&fe(X,d.value),g.value),affixWrapperClassName:k({[`${X}-affix-wrapper-sm`]:h.value==="small",[`${X}-affix-wrapper-lg`]:h.value==="large",[`${X}-affix-wrapper-rtl`]:p.value==="rtl",[`${X}-affix-wrapper-borderless`]:!G},fe(`${X}-affix-wrapper`,d.value,y),g.value),wrapperClassName:k({[`${X}-group-rtl`]:p.value==="rtl"},g.value),groupClassName:k({[`${X}-group-wrapper-sm`]:h.value==="small",[`${X}-group-wrapper-lg`]:h.value==="large",[`${X}-group-wrapper-rtl`]:p.value==="rtl"},fe(`${X}-group-wrapper`,d.value,y),g.value)}),b(b({},i),{clearIcon:Bt})))}}}),Qi=J({compatConfig:{MODE:3},name:"AInputGroup",inheritAttrs:!1,props:{prefixCls:String,size:{type:String},compact:{type:Boolean,default:void 0}},setup(e,t){let{slots:i,attrs:n}=t;const{prefixCls:a,direction:o,getPrefixCls:l}=Te("input-group",e),r=ge.useInject();ge.useProvide(r,{isFormItemInput:!1});const c=K(()=>l("input")),[d,p]=Xe(c),f=K(()=>{const s=a.value;return{[`${s}`]:!0,[p.value]:!0,[`${s}-lg`]:e.size==="large",[`${s}-sm`]:e.size==="small",[`${s}-compact`]:e.compact,[`${s}-rtl`]:o.value==="rtl"}});return()=>{var s;return d(T("span",z(z({},n),{},{class:k(f.value,n.class)}),[(s=i.default)===null||s===void 0?void 0:s.call(i)]))}}});var Ji=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const en=J({compatConfig:{MODE:3},name:"AInputSearch",inheritAttrs:!1,props:b(b({},Fe()),{inputPrefixCls:String,enterButton:W.any,onSearch:{type:Function}}),setup(e,t){let{slots:i,attrs:n,expose:a,emit:o}=t;const l=U(),r=U(!1);a({focus:()=>{var w;(w=l.value)===null||w===void 0||w.focus()},blur:()=>{var w;(w=l.value)===null||w===void 0||w.blur()}});const p=w=>{o("update:value",w.target.value),w&&w.target&&w.type==="click"&&o("search",w.target.value,w),o("change",w)},f=w=>{var x;document.activeElement===((x=l.value)===null||x===void 0?void 0:x.input)&&w.preventDefault()},s=w=>{var x,u;o("search",(u=(x=l.value)===null||x===void 0?void 0:x.input)===null||u===void 0?void 0:u.stateValue,w)},v=w=>{r.value||e.loading||s(w)},C=w=>{r.value=!0,o("compositionstart",w)},D=w=>{r.value=!1,o("compositionend",w)},{prefixCls:h,getPrefixCls:m,direction:g,size:S}=Te("input-search",e),$=K(()=>m("input",e.inputPrefixCls));return()=>{var w,x,u,j;const{disabled:I,loading:M,addonAfter:R=(w=i.addonAfter)===null||w===void 0?void 0:w.call(i),suffix:B=(x=i.suffix)===null||x===void 0?void 0:x.call(i)}=e,O=Ji(e,["disabled","loading","addonAfter","suffix"]);let{enterButton:E=(j=(u=i.enterButton)===null||u===void 0?void 0:u.call(i))!==null&&j!==void 0?j:!1}=e;E=E||E==="";const L=typeof E=="boolean"?T(Ge,null,null):null,Y=`${h.value}-button`,q=Array.isArray(E)?E[0]:E;let Z;const y=q.type&&Bi(q.type)&&q.type.__ANT_BUTTON;if(y||q.tagName==="button")Z=ae(q,b({onMousedown:f,onClick:s,key:"enterButton"},y?{class:Y,size:S.value}:{}),!1);else{const _=L&&!E;Z=T(Tt,{class:Y,type:E?"primary":void 0,size:S.value,disabled:I,key:"enterButton",onMousedown:f,onClick:s,loading:M,icon:_?L:null},{default:()=>[_?null:L||E]})}R&&(Z=[Z,R]);const F=k(h.value,{[`${h.value}-rtl`]:g.value==="rtl",[`${h.value}-${S.value}`]:!!S.value,[`${h.value}-with-button`]:!!E},n.class);return T(N,z(z(z({ref:l},ie(O,["onUpdate:value","onSearch","enterButton"])),n),{},{onPressEnter:v,onCompositionstart:C,onCompositionend:D,size:S.value,prefixCls:$.value,addonAfter:Z,suffix:B,onChange:p,class:F,disabled:I}),i)}}}),at=e=>e!=null&&(Array.isArray(e)?ft(e).length:!0);function tn(e){return at(e.addonBefore)||at(e.addonAfter)}const nn=["text","input"],an=J({compatConfig:{MODE:3},name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:W.oneOf(ei("text","input")),value:ne(),defaultValue:ne(),allowClear:{type:Boolean,default:void 0},element:ne(),handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:ne(),prefix:ne(),addonBefore:ne(),addonAfter:ne(),readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean,status:String,hashId:String},setup(e,t){let{slots:i,attrs:n}=t;const a=ge.useInject(),o=r=>{const{value:c,disabled:d,readonly:p,handleReset:f,suffix:s=i.suffix}=e,v=!d&&!p&&c,C=`${r}-clear-icon`;return T(gt,{onClick:f,onMousedown:D=>D.preventDefault(),class:k({[`${C}-hidden`]:!v,[`${C}-has-suffix`]:!!s},C),role:"button"},null)},l=(r,c)=>{const{value:d,allowClear:p,direction:f,bordered:s,hidden:v,status:C,addonAfter:D=i.addonAfter,addonBefore:h=i.addonBefore,hashId:m}=e,{status:g,hasFeedback:S}=a;if(!p)return ae(c,{value:d,disabled:e.disabled});const $=k(`${r}-affix-wrapper`,`${r}-affix-wrapper-textarea-with-clear-btn`,fe(`${r}-affix-wrapper`,ke(g,C),S),{[`${r}-affix-wrapper-rtl`]:f==="rtl",[`${r}-affix-wrapper-borderless`]:!s,[`${n.class}`]:!tn({addonAfter:D,addonBefore:h})&&n.class},m);return T("span",{class:$,style:n.style,hidden:v},[ae(c,{style:null,value:d,disabled:e.disabled}),o(r)])};return()=>{var r;const{prefixCls:c,inputType:d,element:p=(r=i.element)===null||r===void 0?void 0:r.call(i)}=e;return d===nn[0]?l(c,p):null}}}),rn=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,on=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Me={};let ee;function ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const i=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&Me[i])return Me[i];const n=window.getComputedStyle(e),a=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),o=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),l=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),c={sizingStyle:on.map(d=>`${d}:${n.getPropertyValue(d)}`).join(";"),paddingSize:o,borderSize:l,boxSizing:a};return t&&i&&(Me[i]=c),c}function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;ee||(ee=document.createElement("textarea"),ee.setAttribute("tab-index","-1"),ee.setAttribute("aria-hidden","true"),document.body.appendChild(ee)),e.getAttribute("wrap")?ee.setAttribute("wrap",e.getAttribute("wrap")):ee.removeAttribute("wrap");const{paddingSize:a,borderSize:o,boxSizing:l,sizingStyle:r}=ln(e,t);ee.setAttribute("style",`${r};${rn}`),ee.value=e.value||e.placeholder||"";let c,d,p,f=ee.scrollHeight;if(l==="border-box"?f+=o:l==="content-box"&&(f-=a),i!==null||n!==null){ee.value=" ";const v=ee.scrollHeight-a;i!==null&&(c=v*i,l==="border-box"&&(c=c+a+o),f=Math.max(c,f)),n!==null&&(d=v*n,l==="border-box"&&(d=d+a+o),p=f>d?"":"hidden",f=Math.min(d,f))}const s={height:`${f}px`,overflowY:p,resize:"none"};return c&&(s.minHeight=`${c}px`),d&&(s.maxHeight=`${d}px`),s}const Ee=0,$e=1,Ae=2,un=J({compatConfig:{MODE:3},name:"ResizableTextArea",inheritAttrs:!1,props:$t(),setup(e,t){let{attrs:i,emit:n,expose:a}=t,o,l;const r=H(),c=H({}),d=H(Ae);_e(()=>{we.cancel(o),we.cancel(l)});const p=()=>{try{if(r.value&&document.activeElement===r.value.input){const x=r.value.getSelectionStart(),u=r.value.getSelectionEnd(),j=r.value.getScrollTop();r.value.setSelectionRange(x,u),r.value.setScrollTop(j)}}catch{}},f=H(),s=H();We(()=>{const x=e.autoSize||e.autosize;x?(f.value=x.minRows,s.value=x.maxRows):(f.value=void 0,s.value=void 0)});const v=K(()=>!!(e.autoSize||e.autosize)),C=()=>{d.value=Ee};re([()=>e.value,f,s,v],()=>{v.value&&C()},{immediate:!0});const D=H();re([d,r],()=>{if(r.value)if(d.value===Ee)d.value=$e;else if(d.value===$e){const x=sn(r.value.input,!1,f.value,s.value);d.value=Ae,D.value=x}else p()},{immediate:!0,flush:"post"});const h=Le(),m=H(),g=()=>{we.cancel(m.value)},S=x=>{d.value===Ae&&(n("resize",x),v.value&&(g(),m.value=we(()=>{C()})))};_e(()=>{g()}),a({resizeTextarea:()=>{C()},textArea:K(()=>{var x;return(x=r.value)===null||x===void 0?void 0:x.input}),instance:h}),ti(e.autosize===void 0);const w=()=>{const{prefixCls:x,disabled:u}=e,j=ie(e,["prefixCls","onPressEnter","autoSize","autosize","defaultValue","allowClear","type","maxlength","valueModifiers"]),I=k(x,i.class,{[`${x}-disabled`]:u}),M=v.value?D.value:null,R=[i.style,c.value,M],B=b(b(b({},j),i),{style:R,class:I});return(d.value===Ee||d.value===$e)&&R.push({overflowX:"hidden",overflowY:"hidden"}),B.autofocus||delete B.autofocus,B.rows===0&&delete B.rows,T(Ci,{onResize:S,disabled:!v.value},{default:()=>[T(Ct,z(z({},B),{},{ref:r,tag:"textarea"}),null)]})};return()=>w()}});function At(e,t){return[...e||""].slice(0,t).join("")}function rt(e,t,i,n){let a=i;return e?a=At(i,n):[...t||""].length<i.length&&[...i||""].length>n&&(a=t),a}const cn=J({compatConfig:{MODE:3},name:"ATextarea",inheritAttrs:!1,props:$t(),setup(e,t){let{attrs:i,expose:n,emit:a}=t;var o;const l=ht(),r=ge.useInject(),c=K(()=>ke(r.status,e.status)),d=U((o=e.value)!==null&&o!==void 0?o:e.defaultValue),p=U(),f=U(""),{prefixCls:s,size:v,direction:C}=Te("input",e),[D,h]=Xe(s),m=mt(),g=K(()=>e.showCount===""||e.showCount||!1),S=K(()=>Number(e.maxlength)>0),$=U(!1),w=U(),x=U(0),u=y=>{$.value=!0,w.value=f.value,x.value=y.currentTarget.selectionStart,a("compositionstart",y)},j=y=>{var F;$.value=!1;let _=y.currentTarget.value;if(S.value){const G=x.value>=e.maxlength+1||x.value===((F=w.value)===null||F===void 0?void 0:F.length);_=rt(G,w.value,_,e.maxlength)}_!==f.value&&(B(_),me(y.currentTarget,y,L,_)),a("compositionend",y)},I=Le();re(()=>e.value,()=>{var y;"value"in I.vnode.props,d.value=(y=e.value)!==null&&y!==void 0?y:""});const M=y=>{var F;Ft((F=p.value)===null||F===void 0?void 0:F.textArea,y)},R=()=>{var y,F;(F=(y=p.value)===null||y===void 0?void 0:y.textArea)===null||F===void 0||F.blur()},B=(y,F)=>{d.value!==y&&(e.value===void 0?d.value=y:Se(()=>{var _,G,V;p.value.textArea.value!==f.value&&((V=(_=p.value)===null||_===void 0?void 0:(G=_.instance).update)===null||V===void 0||V.call(G))}),Se(()=>{F&&F()}))},O=y=>{y.keyCode===13&&a("pressEnter",y),a("keydown",y)},E=y=>{const{onBlur:F}=e;F==null||F(y),l.onFieldBlur()},L=y=>{a("update:value",y.target.value),a("change",y),a("input",y),l.onFieldChange()},Y=y=>{me(p.value.textArea,y,L),B("",()=>{M()})},q=y=>{let F=y.target.value;if(d.value!==F){if(S.value){const _=y.target,G=_.selectionStart>=e.maxlength+1||_.selectionStart===F.length||!_.selectionStart;F=rt(G,f.value,F,e.maxlength)}me(y.currentTarget,y,L,F),B(F)}},Z=()=>{var y,F;const{class:_}=i,{bordered:G=!0}=e,V=b(b(b({},ie(e,["allowClear"])),i),{class:[{[`${s.value}-borderless`]:!G,[`${_}`]:_&&!g.value,[`${s.value}-sm`]:v.value==="small",[`${s.value}-lg`]:v.value==="large"},fe(s.value,c.value),h.value],disabled:m.value,showCount:null,prefixCls:s.value,onInput:q,onChange:q,onBlur:E,onKeydown:O,onCompositionstart:u,onCompositionend:j});return!((y=e.valueModifiers)===null||y===void 0)&&y.lazy&&delete V.onInput,T(un,z(z({},V),{},{id:(F=V==null?void 0:V.id)!==null&&F!==void 0?F:l.id.value,ref:p,maxlength:e.maxlength,lazy:e.lazy}),null)};return n({focus:M,blur:R,resizableTextArea:p}),We(()=>{let y=Ne(d.value);!$.value&&S.value&&(e.value===null||e.value===void 0)&&(y=At(y,e.maxlength)),f.value=y}),()=>{var y;const{maxlength:F,bordered:_=!0,hidden:G}=e,{style:V,class:ce}=i,ye=b(b(b({},e),i),{prefixCls:s.value,inputType:"text",handleReset:Y,direction:C.value,bordered:_,style:g.value?void 0:V,hashId:h.value,disabled:(y=e.disabled)!==null&&y!==void 0?y:m.value});let oe=T(an,z(z({},ye),{},{value:f.value,status:e.status}),{element:Z});if(g.value||r.hasFeedback){const be=[...f.value].length;let le="";typeof g.value=="object"?le=g.value.formatter({value:f.value,count:be,maxlength:F}):le=`${be}${S.value?` / ${F}`:""}`,oe=T("div",{hidden:G,class:k(`${s.value}-textarea`,{[`${s.value}-textarea-rtl`]:C.value==="rtl",[`${s.value}-textarea-show-count`]:g.value,[`${s.value}-textarea-in-form-item`]:r.isFormItemInput},`${s.value}-textarea-show-count`,ce,h.value),style:V,"data-count":typeof le!="object"?le:void 0},[oe,r.hasFeedback&&T("span",{class:`${s.value}-textarea-suffix`},[r.feedbackIcon])])}return D(oe)}}});var dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};function ot(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable}))),n.forEach(function(a){pn(e,a,i[a])})}return e}function pn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var qe=function(t,i){var n=ot({},t,i.attrs);return T(Ye,ot({},n,{icon:dn}),null)};qe.displayName="EyeOutlined";qe.inheritAttrs=!1;var fn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};function lt(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable}))),n.forEach(function(a){hn(e,a,i[a])})}return e}function hn(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var Ke=function(t,i){var n=lt({},t,i.attrs);return T(Ye,lt({},n,{icon:fn}),null)};Ke.displayName="EyeInvisibleOutlined";Ke.inheritAttrs=!1;var mn=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]]);return i};const gn={click:"onClick",hover:"onMouseover"},Tn=e=>e?T(qe,null,null):T(Ke,null,null),yn=J({compatConfig:{MODE:3},name:"AInputPassword",inheritAttrs:!1,props:b(b({},Fe()),{prefixCls:String,inputPrefixCls:String,action:{type:String,default:"click"},visibilityToggle:{type:Boolean,default:!0},visible:{type:Boolean,default:void 0},"onUpdate:visible":Function,iconRender:Function}),setup(e,t){let{slots:i,attrs:n,expose:a,emit:o}=t;const l=U(!1),r=()=>{const{disabled:h}=e;h||(l.value=!l.value,o("update:visible",l.value))};We(()=>{e.visible!==void 0&&(l.value=!!e.visible)});const c=U();a({focus:()=>{var h;(h=c.value)===null||h===void 0||h.focus()},blur:()=>{var h;(h=c.value)===null||h===void 0||h.blur()}});const f=h=>{const{action:m,iconRender:g=i.iconRender||Tn}=e,S=gn[m]||"",$=g(l.value),w={[S]:r,class:`${h}-icon`,key:"passwordIcon",onMousedown:x=>{x.preventDefault()},onMouseup:x=>{x.preventDefault()}};return ae(ii($)?$:T("span",null,[$]),w)},{prefixCls:s,getPrefixCls:v}=Te("input-password",e),C=K(()=>v("input",e.inputPrefixCls)),D=()=>{const{size:h,visibilityToggle:m}=e,g=mn(e,["size","visibilityToggle"]),S=m&&f(s.value),$=k(s.value,n.class,{[`${s.value}-${h}`]:!!h}),w=b(b(b({},ie(g,["suffix","iconRender","action"])),n),{type:l.value?"text":"password",class:$,prefixCls:C.value,suffix:S});return h&&(w.size=h),T(N,z({ref:c},w),i)};return()=>D()}});N.Group=Qi;N.Search=en;N.TextArea=cn;N.Password=yn;N.install=function(e){return e.component(N.name,N),e.component(N.Group.name,N.Group),e.component(N.Search.name,N.Search),e.component(N.TextArea.name,N.TextArea),e.component(N.Password.name,N.Password),e};function st(e,t){var a;const i=e.split(".");if(i.length===1||i.length===0)return!1;const n="."+i.at(-1);return t.includes(n)&&!((a=i.at(-2))!=null&&a.endsWith("_Highlight"))}function se(e){return new Promise(t=>{e.toBlob(i=>{t(i)})})}const ut={Bed:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public const int NextStyleHeight = 38; // Calculated by adding all CoordinateHeights + CoordinatePaddingFix.Y applied to all of them + 2

	public override void SetStaticDefaults() {
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.CanBeSleptIn[Type] = true; // Facilitates calling ModifySleepingTargetInfo
		TileID.Sets.InteractibleByNPCs[Type] = true; // Town NPCs will palm their hand at this tile
		TileID.Sets.IsValidSpawnPoint[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsChair); // Beds count as chairs for the purpose of suitable room creation

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Beds };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style4x2); // this style already takes care of direction for us
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, -2);
		TileObjectData.addTile(Type);

		// Etc
		AddMapEntry(new Color(191, 142, 111), Language.GetText("ItemName.Bed"));
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return true;
	}

	public override void ModifySmartInteractCoords(ref int width, ref int height, ref int frameWidth, ref int frameHeight, ref int extraY) {
		// Because beds have special smart interaction, this splits up the left and right side into the necessary 2x2 sections
		width = 2; // Default to the Width defined for TileObjectData.newTile
		height = 2; // Default to the Height defined for TileObjectData.newTile
		//extraY = 0; // Depends on how you set up frameHeight and CoordinateHeights and CoordinatePaddingFix.Y
	}

	public override void ModifySleepingTargetInfo(int i, int j, ref TileRestingInfo info) {
		// Default values match the regular vanilla bed
		// You might need to mess with the info here if your bed is not a typical 4x2 tile
		info.VisualOffset.Y += 4f; // Move player down a notch because the bed is not as high as a regular bed
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = 1;
	}

	public override bool RightClick(int i, int j) {
		return FurnitureUtils.BedRightClick(i, j);
	}

	public override void MouseOver(int i, int j) {
		FurnitureUtils.BedMouseOver<${i}.${e}>(i, j);
	}
}`,Chair:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public const int NextStyleHeight = 40; // Calculated by adding all CoordinateHeights + CoordinatePaddingFix.Y applied to all of them + 2

	public override void SetStaticDefaults() {
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.CanBeSatOnForNPCs[Type] = true; // Facilitates calling ModifySittingTargetInfo for NPCs
		TileID.Sets.CanBeSatOnForPlayers[Type] = true; // Facilitates calling ModifySittingTargetInfo for Players
		TileID.Sets.DisableSmartCursor[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsChair);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Chairs };

		// Names
		AddMapEntry(new Color(200, 200, 200), Language.GetText("MapObject.Chair"));

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style1x2);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, 2);
		TileObjectData.newTile.Direction = TileObjectDirection.PlaceLeft;
		// The following 3 lines are needed if you decide to add more styles and stack them vertically
		TileObjectData.newTile.StyleWrapLimit = 2;
		TileObjectData.newTile.StyleMultiplier = 2;
		TileObjectData.newTile.StyleHorizontal = true;

		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Direction = TileObjectDirection.PlaceRight;
		TileObjectData.addAlternate(1); // Facing right will use the second texture style
		TileObjectData.addTile(Type);
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = fail ? 1 : 3;
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return settings.player.IsWithinSnappngRangeToTile(i, j, PlayerSittingHelper.ChairSittingMaxDistance); // Avoid being able to trigger it from long range
	}

	public override void ModifySittingTargetInfo(int i, int j, ref TileRestingInfo info) {
		// It is very important to know that this is called on both players and NPCs, so do not use Main.LocalPlayer for example, use info.restingEntity
		Tile tile = Framing.GetTileSafely(i, j);

		//info.directionOffset = info.restingEntity is Player ? 6 : 2; // Default to 6 for players, 2 for NPCs
		//info.visualOffset = Vector2.Zero; // Defaults to (0,0)

		info.TargetDirection = -1;
		if (tile.TileFrameX != 0) {
			info.TargetDirection = 1; // Facing right if sat down on the right alternate (added through addAlternate in SetStaticDefaults earlier)
		}

		// The anchor represents the bottom-most tile of the chair. This is used to align the entity hitbox
		// Since i and j may be from any coordinate of the chair, we need to adjust the anchor based on that
		info.AnchorTilePosition.X = i; // Our chair is only 1 wide, so nothing special required
		info.AnchorTilePosition.Y = j;

		if (tile.TileFrameY % NextStyleHeight == 0) {
			info.AnchorTilePosition.Y++; // Here, since our chair is only 2 tiles high, we can just check if the tile is the top-most one, then move it 1 down
		}
	}

	public override bool RightClick(int i, int j) {
		return FurnitureUtils.ChairRightClick(i, j);
	}

	public override void MouseOver(int i, int j) {
		FurnitureUtils.ChairMouseOver<${i}.${e}>(i, j);
	}
}`,Chest:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileSpelunker[Type] = true;
		Main.tileContainer[Type] = true;
		Main.tileShine2[Type] = true;
		Main.tileShine[Type] = 1200;
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileOreFinderPriority[Type] = 500;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.BasicChest[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.AvoidedByNPCs[Type] = true;
		TileID.Sets.InteractibleByNPCs[Type] = true;
		TileID.Sets.IsAContainer[Type] = true;
		TileID.Sets.FriendlyFairyCanLureTo[Type] = true;
		TileID.Sets.GeneralPlacementTiles[Type] = false;

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Containers };

		// Other tiles with just one map entry use CreateMapEntryName() to use the default translationkey, "MapEntry"
		// Since ExampleChest needs multiple, we register our own MapEntry keys
		AddMapEntry(new Color(200, 200, 200), this.GetLocalization("MapEntry0"), MapChestName);
		AddMapEntry(new Color(0, 141, 63), this.GetLocalization("MapEntry1"), MapChestName);

		// Style 1 is ExampleChest when locked. We want that tile style to drop the ExampleChest item as well. Use the Chest Lock item to lock this chest.
		// No item places ExampleChest in the locked style, so the automatically determined item drop is unknown, this is why RegisterItemDrop is necessary in this situation. 
		RegisterItemDrop(ModContent.ItemType<${i}.${e}>(), 1);
		// Sometimes mods remove content, such as tile styles, or tiles accidentally get corrupted. We can, if desired, register a fallback item for any tile style that doesn't have an automatically determined item drop. This is done by omitting the tileStyles parameter.
		RegisterItemDrop(ItemID.Chest);

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style2x2);
		TileObjectData.newTile.Origin = new Point16(0, 1);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.HookCheckIfCanPlace = new PlacementHook(Chest.FindEmptyChest, -1, 0, true);
		TileObjectData.newTile.HookPostPlaceMyPlayer = new PlacementHook(Chest.AfterPlacement_Hook, -1, 0, false);
		TileObjectData.newTile.AnchorInvalidTiles = new int[] {
			TileID.MagicalIceBlock,
			TileID.Boulder,
			TileID.BouncyBoulder,
			TileID.LifeCrystalBoulder,
			TileID.RollingCactus
		};
		TileObjectData.newTile.StyleHorizontal = true;
		TileObjectData.newTile.LavaDeath = false;
		TileObjectData.newTile.AnchorBottom = new AnchorData(AnchorType.SolidTile | AnchorType.SolidWithTop | AnchorType.SolidSide, TileObjectData.newTile.Width, 0);
		TileObjectData.addTile(Type);
	}

	public override ushort GetMapOption(int i, int j) {
		return (ushort)(Main.tile[i, j].TileFrameX / 36);
	}

	public override LocalizedText DefaultContainerName(int frameX, int frameY) {
		int option = frameX / 36;
		return this.GetLocalization("MapEntry" + option);
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return true;
	}

	public static string MapChestName(string name, int i, int j) {
		int left = i;
		int top = j;
		Tile tile = Main.tile[i, j];
		if (tile.TileFrameX % 36 != 0) {
			left--;
		}

		if (tile.TileFrameY != 0) {
			top--;
		}

		int chest = Chest.FindChest(left, top);
		if (chest < 0) {
			return Language.GetTextValue("LegacyChestType.0");
		}

		if (Main.chest[chest].name == "") {
			return name;
		}

		return name + ": " + Main.chest[chest].name;
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = 1;
	}

	public override void KillMultiTile(int i, int j, int frameX, int frameY) {
		// We override KillMultiTile to handle additional logic other than the item drop. In this case, unregistering the Chest from the world
		Chest.DestroyChest(i, j);
	}

	public override bool RightClick(int i, int j) {
		return FurnitureUtils.ChestRightClick(i, j);
	}

	public override void MouseOver(int i, int j) {
		Player player = Main.LocalPlayer;
		Tile tile = Main.tile[i, j];
		int left = i;
		int top = j;
		if (tile.TileFrameX % 36 != 0) {
			left--;
		}

		if (tile.TileFrameY != 0) {
			top--;
		}

		int chest = Chest.FindChest(left, top);
		player.cursorItemIconID = -1;
		if (chest < 0) {
			player.cursorItemIconText = Language.GetTextValue("LegacyChestType.0");
		}
		else {
			string defaultName = TileLoader.DefaultContainerName(tile.TileType, tile.TileFrameX, tile.TileFrameY); // This gets the ContainerName text for the currently selected language
			player.cursorItemIconText = Main.chest[chest].name.Length > 0 ? Main.chest[chest].name : defaultName;
			if (player.cursorItemIconText == defaultName) {
				player.cursorItemIconID = ModContent.ItemType<${i}.${e}>();
				if (Main.tile[left, top].TileFrameX / 36 == 1) {
					// player.cursorItemIconID = ModContent.ItemType<>();
				}

				player.cursorItemIconText = "";
			}
		}

		player.noThrow = 2;
		player.cursorItemIconEnabled = true;
	}

	public override void MouseOverFar(int i, int j) {
		MouseOver(i, j);
		Player player = Main.LocalPlayer;
		if (player.cursorItemIconText == "") {
			player.cursorItemIconEnabled = false;
			player.cursorItemIconID = 0;
		}
	}
}`,Clock:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.Clock[Type] = true;

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.GrandfatherClocks };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style2xX);
		TileObjectData.newTile.Height = 5;
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.addTile(Type);

		// Etc
		AddMapEntry(new Color(200, 200, 200), Language.GetText("ItemName.GrandfatherClock"));
	}

	public override bool RightClick(int x, int y) {
		return FurnitureUtils.ClockRightClick();
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = fail ? 1 : 3;
	}
}`,DoorClosed:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e}Closed : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileBlockLight[Type] = true;
		Main.tileSolid[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.NotReallySolid[Type] = true;
		TileID.Sets.DrawsWalls[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.OpenDoorID[Type] = ModContent.TileType<${e}>();

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsDoor);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.ClosedDoor };

		// Names
		AddMapEntry(new Color(200, 200, 200), Language.GetText("MapObject.Door"));

		TileObjectData.newTile.CopyFrom(TileObjectData.GetTileData(TileID.ClosedDoor, 0));
		TileObjectData.addTile(Type);
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return true;
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = 1;
	}

	public override void MouseOver(int i, int j) {
		Player player = Main.LocalPlayer;
		player.noThrow = 2;
		player.cursorItemIconEnabled = true;
		player.cursorItemIconID = ModContent.ItemType<${i}.${e}>();
	}
}`,DoorOpen:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileSolid[Type] = false;
		Main.tileLavaDeath[Type] = true;
		Main.tileNoSunLight[Type] = true;
		TileID.Sets.HousingWalls[Type] = true; // needed for non-solid blocks to count as walls
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.CloseDoorID[Type] = ModContent.TileType<${e}Closed>();

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsDoor);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.OpenDoor };
		// Tiles usually drop their corresponding item automatically, but RegisterItemDrop is needed here since the ExampleDoor item places ExampleDoorClosed, not this tile.
		RegisterItemDrop(ModContent.ItemType<${i}.${e}>(), 0);
		TileID.Sets.CloseDoorID[Type] = ModContent.TileType<${e}Closed>();

		// Names
		AddMapEntry(new Color(200, 200, 200), Language.GetText("MapObject.Door"));

		// Placement
		// The TileID.OpenDoor TileObjectData has incorrect anchor and StyleMultiplier values, so we will not be copying from it in this case
		// TileObjectData.newTile.CopyFrom(TileObjectData.GetTileData(TileID.OpenDoor, 0));
		TileObjectData.newTile.Width = 2;
		TileObjectData.newTile.Height = 3;
		TileObjectData.newTile.Origin = new Point16(0, 0);
		TileObjectData.newTile.AnchorTop = new AnchorData(AnchorType.SolidTile, 1, 0);
		TileObjectData.newTile.AnchorBottom = new AnchorData(AnchorType.SolidTile, 1, 0);
		TileObjectData.newTile.UsesCustomCanPlace = true;
		TileObjectData.newTile.LavaDeath = true;
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinateWidth = 16;
		TileObjectData.newTile.CoordinatePadding = 2;
		TileObjectData.newTile.StyleHorizontal = true;
		TileObjectData.newTile.StyleMultiplier = 2;
		TileObjectData.newTile.StyleWrapLimit = 2; // Since the wrap limit is 2, a 2nd style will be below the first on the spritesheet even though this is StyleHorizontal = true
		TileObjectData.newTile.Direction = TileObjectDirection.PlaceRight;
		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Origin = new Point16(0, 1);
		TileObjectData.addAlternate(0);
		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Origin = new Point16(0, 2);
		TileObjectData.addAlternate(0);
		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Origin = new Point16(1, 0);
		TileObjectData.newAlternate.AnchorTop = new AnchorData(AnchorType.SolidTile, 1, 1);
		TileObjectData.newAlternate.AnchorBottom = new AnchorData(AnchorType.SolidTile, 1, 1);
		TileObjectData.newAlternate.Direction = TileObjectDirection.PlaceLeft;
		TileObjectData.addAlternate(1);
		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Origin = new Point16(1, 1);
		TileObjectData.newAlternate.AnchorTop = new AnchorData(AnchorType.SolidTile, 1, 1);
		TileObjectData.newAlternate.AnchorBottom = new AnchorData(AnchorType.SolidTile, 1, 1);
		TileObjectData.newAlternate.Direction = TileObjectDirection.PlaceLeft;
		TileObjectData.addAlternate(1);
		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Origin = new Point16(1, 2);
		TileObjectData.newAlternate.AnchorTop = new AnchorData(AnchorType.SolidTile, 1, 1);
		TileObjectData.newAlternate.AnchorBottom = new AnchorData(AnchorType.SolidTile, 1, 1);
		TileObjectData.newAlternate.Direction = TileObjectDirection.PlaceLeft;
		TileObjectData.addAlternate(1);
		TileObjectData.addTile(Type);
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return true;
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = 1;
	}

	public override void MouseOver(int i, int j) {
		Player player = Main.LocalPlayer;
		player.noThrow = 2;
		player.cursorItemIconEnabled = true;
		player.cursorItemIconID = ModContent.ItemType<${i}.${e}>();
	}
}`,Dresser:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileSolidTop[Type] = true;
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileTable[Type] = true;
		Main.tileContainer[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.BasicDresser[Type] = true;
		TileID.Sets.AvoidedByNPCs[Type] = true;
		TileID.Sets.InteractibleByNPCs[Type] = true;
		TileID.Sets.IsAContainer[Type] = true;
		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTable);

		AdjTiles = new int[] { TileID.Dressers };
		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.

		// Names
		AddMapEntry(new Color(200, 200, 200), CreateMapEntryName(), MapChestName);

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style3x2);
		TileObjectData.newTile.HookCheckIfCanPlace = new PlacementHook(Chest.FindEmptyChest, -1, 0, true);
		TileObjectData.newTile.HookPostPlaceMyPlayer = new PlacementHook(Chest.AfterPlacement_Hook, -1, 0, false);
		TileObjectData.newTile.AnchorInvalidTiles = new int[] {
			TileID.MagicalIceBlock,
			TileID.Boulder,
			TileID.BouncyBoulder,
			TileID.LifeCrystalBoulder,
			TileID.RollingCactus
		};
		TileObjectData.newTile.LavaDeath = false;
		TileObjectData.addTile(Type);
	}

	public override LocalizedText DefaultContainerName(int frameX, int frameY) {
		return CreateMapEntryName();
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return true;
	}

	public override void ModifySmartInteractCoords(ref int width, ref int height, ref int frameWidth, ref int frameHeight, ref int extraY) {
		width = 3;
		height = 1;
		extraY = 0;
	}

	public override bool RightClick(int i, int j) {
		return FurnitureUtils.DresserRightClick();
	}

	// This is not a hook, this is just a normal method used by the MouseOver and MouseOverFar hooks to avoid repeating code.
	public void MouseOverNearAndFarSharedLogic(Player player, int i, int j) {
		Tile tile = Main.tile[i, j];
		int left = i;
		int top = j;
		left -= tile.TileFrameX % 54 / 18;
		if (tile.TileFrameY % 36 != 0) {
			top--;
		}
		int chestIndex = Chest.FindChest(left, top);
		player.cursorItemIconID = -1;
		if (chestIndex < 0) {
			player.cursorItemIconText = Language.GetTextValue("LegacyDresserType.0");
		}
		else {
			string defaultName = TileLoader.DefaultContainerName(tile.TileType, tile.TileFrameX, tile.TileFrameY); // This gets the ContainerName text for the currently selected language

			if (Main.chest[chestIndex].name != "") {
				player.cursorItemIconText = Main.chest[chestIndex].name;
			}
			else {
				player.cursorItemIconText = defaultName;
			}
			if (player.cursorItemIconText == defaultName) {
				player.cursorItemIconID = ModContent.ItemType<${i}.${e}>();
				player.cursorItemIconText = "";
			}
		}
		player.noThrow = 2;
		player.cursorItemIconEnabled = true;
	}

	public override void MouseOverFar(int i, int j) {
		Player player = Main.LocalPlayer;
		MouseOverNearAndFarSharedLogic(player, i, j);
		if (player.cursorItemIconText == "") {
			player.cursorItemIconEnabled = false;
			player.cursorItemIconID = 0;
		}
	}

	public override void MouseOver(int i, int j) {
		Player player = Main.LocalPlayer;
		MouseOverNearAndFarSharedLogic(player, i, j);
		if (Main.tile[i, j].TileFrameY > 0) {
			player.cursorItemIconID = ItemID.FamiliarShirt;
			player.cursorItemIconText = "";
		}
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = fail ? 1 : 3;
	}

	public override void KillMultiTile(int i, int j, int frameX, int frameY) {
		Chest.DestroyChest(i, j);
	}

	public static string MapChestName(string name, int i, int j) {
		int left = i;
		int top = j;
		Tile tile = Main.tile[i, j];
		if (tile.TileFrameX % 36 != 0) {
			left--;
		}

		if (tile.TileFrameY != 0) {
			top--;
		}

		int chest = Chest.FindChest(left, top);
		if (chest < 0) {
			return Language.GetTextValue("LegacyDresserType.0");
		}

		if (Main.chest[chest].name == "") {
			return name;
		}

		return name + ": " + Main.chest[chest].name;
	}
}`,Platform:(e,t,i,n,a,o,l,r)=>`using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileLighted[Type] = true;
		Main.tileFrameImportant[Type] = true;
		Main.tileSolidTop[Type] = true;
		Main.tileSolid[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileTable[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.Platforms[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsDoor);
		AddMapEntry(new Color(200, 200, 200));

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Platforms };

		// Placement
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinateWidth = 16;
		TileObjectData.newTile.CoordinatePadding = 2;
		TileObjectData.newTile.StyleHorizontal = true;
		TileObjectData.newTile.StyleMultiplier = 27;
		TileObjectData.newTile.StyleWrapLimit = 27;
		TileObjectData.newTile.UsesCustomCanPlace = false;
		TileObjectData.newTile.LavaDeath = true;
		TileObjectData.addTile(Type);
	}

	public override void PostSetDefaults() => Main.tileNoSunLight[Type] = false;

	public override void NumDust(int i, int j, bool fail, ref int num) => num = fail ? 1 : 3;
}`,Table:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileTable[Type] = true;
		Main.tileSolidTop[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		Main.tileFrameImportant[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.IgnoredByNpcStepUp[Type] = true; // This line makes NPCs not try to step up this tile during their movement. Only use this for furniture with solid tops.

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Tables };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style3x2);
		TileObjectData.newTile.StyleHorizontal = true;
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.addTile(Type);

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTable);

		// Etc
		AddMapEntry(new Color(200, 200, 200), Language.GetText("MapObject.Table"));
	}

	public override void NumDust(int x, int y, bool fail, ref int num) {
		num = fail ? 1 : 3;
	}
}`,Toilet:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public const int NextStyleHeight = 40; // Calculated by adding all CoordinateHeights + CoordinatePaddingFix.Y applied to all of them + 2

	public override void SetStaticDefaults() {
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.CanBeSatOnForNPCs[Type] = true; // Facilitates calling ModifySittingTargetInfo for NPCs
		TileID.Sets.CanBeSatOnForPlayers[Type] = true; // Facilitates calling ModifySittingTargetInfo for Players
		TileID.Sets.DisableSmartCursor[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsChair);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Toilets }; // Consider adding TileID.Chairs to AdjTiles to mirror "(regular) Toilet" and "Golden Toilet" behavior for crafting stations

		// Names
		AddMapEntry(new Color(200, 200, 200), Language.GetText("MapObject.Toilet"));

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style1x2);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, 2);
		TileObjectData.newTile.Direction = TileObjectDirection.PlaceLeft;
		// The following 3 lines are needed if you decide to add more styles and stack them vertically
		TileObjectData.newTile.StyleWrapLimit = 2;
		TileObjectData.newTile.StyleMultiplier = 2;
		TileObjectData.newTile.StyleHorizontal = true;

		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Direction = TileObjectDirection.PlaceRight;
		TileObjectData.addAlternate(1); // Facing right will use the second texture style
		TileObjectData.addTile(Type);
	}

	public override void NumDust(int i, int j, bool fail, ref int num) {
		num = fail ? 1 : 3;
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings) {
		return settings.player.IsWithinSnappngRangeToTile(i, j, PlayerSittingHelper.ChairSittingMaxDistance); // Avoid being able to trigger it from long range
	}

	public override void ModifySittingTargetInfo(int i, int j, ref TileRestingInfo info) {
		// It is very important to know that this is called on both players and NPCs, so do not use Main.LocalPlayer for example, use info.restingEntity
		Tile tile = Framing.GetTileSafely(i, j);

		//info.directionOffset = info.restingEntity is Player ? 6 : 2; // Default to 6 for players, 2 for NPCs
		//info.visualOffset = Vector2.Zero; // Defaults to (0,0)

		info.TargetDirection = -1;

		if (tile.TileFrameX != 0) {
			info.TargetDirection = 1; // Facing right if sat down on the right alternate (added through addAlternate in SetStaticDefaults earlier)
		}

		// The anchor represents the bottom-most tile of the chair. This is used to align the entity hitbox
		// Since i and j may be from any coordinate of the chair, we need to adjust the anchor based on that
		info.AnchorTilePosition.X = i; // Our chair is only 1 wide, so nothing special required
		info.AnchorTilePosition.Y = j;

		if (tile.TileFrameY % NextStyleHeight == 0) {
			info.AnchorTilePosition.Y++; // Here, since our chair is only 2 tiles high, we can just check if the tile is the top-most one, then move it 1 down
		}

		// Finally, since this is a toilet, it should generate Poo while any tier of Well Fed is active
		info.ExtraInfo.IsAToilet = true;

		// Here we add a custom fun effect to this tile that vanilla toilets do not have. This shows how you can type cast the restingEntity to Player and use visualOffset as well.
		if (info.RestingEntity is Player player && player.HasBuff(BuffID.Stinky)) {
			info.VisualOffset = Main.rand.NextVector2Circular(2, 2);
		}
	}

	public override bool RightClick(int i, int j) {
		Player player = Main.LocalPlayer;

		if (player.IsWithinSnappngRangeToTile(i, j, PlayerSittingHelper.ChairSittingMaxDistance)) { // Avoid being able to trigger it from long range
			player.GamepadEnableGrappleCooldown();
			player.sitting.SitDown(player, i, j);
		}

		return true;
	}

	public override void MouseOver(int i, int j) {
		Player player = Main.LocalPlayer;

		if (!player.IsWithinSnappngRangeToTile(i, j, PlayerSittingHelper.ChairSittingMaxDistance)) { // Match condition in RightClick. Interaction should only show if clicking it does something
			return;
		}

		player.noThrow = 2;
		player.cursorItemIconEnabled = true;
		player.cursorItemIconID = ModContent.ItemType<${i}.${e}>();

		if (Main.tile[i, j].TileFrameX / 18 < 1) {
			player.cursorItemIconReversed = true;
		}
	}

	public override void HitWire(int i, int j) {
		// Spawn the toilet effect here when triggered by a signal
		Tile tile = Main.tile[i, j];

		int spawnX = i;
		int spawnY = j - (tile.TileFrameY % NextStyleHeight) / 18;

		Wiring.SkipWire(spawnX, spawnY);
		Wiring.SkipWire(spawnX, spawnY + 1);

		if (Wiring.CheckMech(spawnX, spawnY, 60)) {
			Projectile.NewProjectile(Wiring.GetProjectileSource(spawnX, spawnY), spawnX * 16 + 8, spawnY * 16 + 12, 0f, 0f, ProjectileID.ToiletEffect, 0, 0f, Main.myPlayer);
		}
	}
}`,WorkBench:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults() {
		// Properties
		Main.tileTable[Type] = true;
		Main.tileSolidTop[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		Main.tileFrameImportant[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.IgnoredByNpcStepUp[Type] = true; // This line makes NPCs not try to step up this tile during their movement. Only use this for furniture with solid tops.

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.WorkBenches };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style2x1);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.addTile(Type);

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTable);

		// Etc
		AddMapEntry(new Color(200, 200, 200), Language.GetText("ItemName.WorkBench"));
	}

	public override void NumDust(int x, int y, bool fail, ref int num) {
		num = fail ? 1 : 3;
	}
}`,Sink:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults()
	{
		TileID.Sets.CountsAsWaterSource[Type] = true;

		Main.tileSolid[Type] = false;
		Main.tileLavaDeath[Type] = false;
		Main.tileFrameImportant[Type] = true;

		TileObjectData.newTile.CopyFrom(TileObjectData.Style2x2);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.addTile(Type);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { Type };

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}
}`,Chandelier:(e,t,i,n,a,o,l,r)=>`using System;
using Everglow.Commons.TileHelper;
using ReLogic.Content;
using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent.Drawing;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile, ITileFluentlyDrawn${o.length>0?", ITileFlameData":""}
{
	${o.length>0?"private Asset<Texture2D> flameTexture;":""}

	public override void SetStaticDefaults()
	{
		Main.tileFlame[Type] = true;
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		Main.tileLighted[Type] = true;
		Main.tileSolid[Type] = false;
		Main.tileNoFail[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTorch);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Chandeliers };

		// Placement - Standard Chandelier Setup Below
		TileObjectData.newTile.CopyFrom(TileObjectData.Style3x3);
		TileObjectData.newTile.Origin = new Point16(1, 0);
		TileObjectData.newTile.AnchorTop = new AnchorData(AnchorType.SolidTile | AnchorType.SolidSide, 1, 1);
		TileObjectData.newTile.AnchorBottom = AnchorData.Empty;
		TileObjectData.newTile.LavaDeath = true;
		TileObjectData.newTile.StyleWrapLimit = 37;
		TileObjectData.newTile.StyleHorizontal = false;
		TileObjectData.newTile.StyleLineSkip = 2;
		TileObjectData.newTile.DrawYOffset = -2;
		TileObjectData.addTile(Type);

		${o.length>0?`if (!Main.dedServ)
		{
			flameTexture = ModAssets.${o};
		}
`:""}

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}

	public override void HitWire(int i, int j)
	{
		FurnitureUtils.LightHitwire(i, j, Type, 3, 3);
	}

	public override void ModifyLight(int i, int j, ref float r, ref float g, ref float b)
	{
		var tile = Main.tile[i, j];
		if (tile.TileFrameX < 54)
		{
			r = ${l[0].toFixed(3)}f;
			g = ${l[1].toFixed(3)}f;
			b = ${l[2].toFixed(3)}f;
		}
		else
		{
			r = 0f;
			g = 0f;
			b = 0f;
		}
	}

	public override bool PreDraw(int i, int j, SpriteBatch spriteBatch)
	{
		TileFluentDrawManager.AddFluentPoint(this, i, j);
		return false;
	}

	public void FluentDraw(Vector2 screenPosition, Point pos, SpriteBatch spriteBatch, TileDrawing tileDrawing)
	{
		FurnitureUtils.Chandelier3x3FluentDraw(screenPosition, pos, spriteBatch, tileDrawing);
	}

	${o.length>0?`public TileDrawing.TileFlameData GetTileFlameData(int tileX, int tileY, int type, int tileFrameY) =>
		new TileDrawing.TileFlameData() {
			flameCount = 7,
			flameTexture = flameTexture.Value,
			flameRangeXMin = -10,
			flameRangeXMax = 11,
			flameRangeMultX = 0.15f,
			flameRangeYMin = -10,
			flameRangeYMax = 1,
			flameRangeMultY = 0.35f,
			flameColor = new Color(30, 30, 30, 0)
		};
`:""}
}`,Lantern:(e,t,i,n,a,o,l,r)=>`using Everglow.Commons.TileHelper;
using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.Localization;
using Terraria.ObjectData;
using static Terraria.ModLoader.Default.LegacyUnloadedTilesSystem;
using Terraria.GameContent.Drawing;
using Everglow.Commons.DataStructures;
using Terraria;
using ${r};

namespace ${t};

public class ${e} : ModTile, ITileFluentlyDrawn
{
	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		Main.tileLighted[Type] = true;
		Main.tileSolid[Type] = false;
		Main.tileNoFail[Type] = true;
		
		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTorch);
		
		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.HangingLanterns };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style1x2Top);
		TileObjectData.newTile.DrawYOffset = -2;
		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.DrawYOffset = -10;
		TileObjectData.newAlternate.AnchorTop = new AnchorData(AnchorType.Platform, TileObjectData.newTile.Width, 0);
		TileObjectData.addAlternate(0);
		TileObjectData.addTile(Type); // addTile一定要放在addAlternate后面

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(251, 235, 127), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}

	public override void HitWire(int i, int j)
	{
		FurnitureUtils.LightHitwire(i, j, Type, 1, 2);
	}

	public override void ModifyLight(int i, int j, ref float r, ref float g, ref float b)
	{
		Tile tile = Main.tile[i, j];
		if (tile.TileFrameX < 18)
		{
			r = ${l[0].toFixed(3)}f;
			g = ${l[1].toFixed(3)}f;
			b = ${l[2].toFixed(3)}f;
		}
		else
		{
			r = 0f;
			g = 0f;
			b = 0f;
		}
	}

	public override bool PreDraw(int i, int j, SpriteBatch spriteBatch)
	{
		TileFluentDrawManager.AddFluentPoint(this, i, j);
		return false;
	}

	public void FluentDraw(Vector2 screenPosition, Point pos, SpriteBatch spriteBatch, TileDrawing tileDrawing) 
	{
		FurnitureUtils.LanternFluentDraw(screenPosition, pos, spriteBatch, tileDrawing);
	}
}`,Candle:(e,t,i,n,a,o,l,r)=>`using ReLogic.Content;
using Terraria.DataStructures;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	${o.length>0?`private Asset<Texture2D> flameTexture;
`:""}

	public override void SetStaticDefaults()
	{
		Main.tileTable[Type] = true;
		Main.tileFrameImportant[Type] = true;
		Main.tileLighted[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.InteractibleByNPCs[Type] = true;
		TileID.Sets.IsValidSpawnPoint[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTorch);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Candles };
		TileObjectData.newTile.CopyFrom(TileObjectData.StyleOnTable1x1);
		TileObjectData.addTile(Type);

		${o.length>0?`if (!Main.dedServ)
		{
			flameTexture = ModAssets.${o};
		}
`:""}

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}

	public override void ModifyLight(int i, int j, ref float r, ref float g, ref float b)
	{
		r = ${l[0].toFixed(3)}f;
		g = ${l[1].toFixed(3)}f;
		b = ${l[2].toFixed(3)}f;
	}

	public override void HitWire(int i, int j)
	{
		FurnitureUtils.LightHitwire(i, j, Type, 1, 1);
	}

	public override void NearbyEffects(int i, int j, bool closer)
	{
		Tile tile = Main.tile[i, j];
		if (tile.TileFrameX < 54)
		{
			int frequency = 20;
			if (!Main.gamePaused && Main.instance.IsActive && (!Lighting.UpdateEveryFrame || Main.rand.NextBool(4)) && Main.rand.NextBool(frequency))
			{
				Rectangle dustBox = Utils.CenteredRectangle(new Vector2(i * 16 + 8, j * 16 + 4), new Vector2(16, 16));
				int numForDust = Dust.NewDust(dustBox.TopLeft(), dustBox.Width, dustBox.Height, ModContent.DustType<${n}>(), 0f, 0f, 254, default, Main.rand.NextFloat(0.95f, 1.75f));
				Dust obj = Main.dust[numForDust];
				obj.velocity *= 0.4f;
				Main.dust[numForDust].velocity.Y -= 0.4f;
			}
		}
	}

	${o.length>0?`public override void PostDraw(int i, int j, SpriteBatch spriteBatch)
	{
		var zero = new Vector2(Main.offScreenRange, Main.offScreenRange);

		if (Main.drawToScreen)
			zero = Vector2.Zero;

		ulong randSeed = Main.TileFrameSeed ^ (ulong)((long)j << 32 | (uint)i); // Don't remove any casts.
		var color = new Color(55, 5, 255, 0);
		int width = 20;
		int height = 20;
		var tile = Main.tile[i, j];
		int frameX = tile.TileFrameX;
		int frameY = tile.TileFrameY;
		color.A = 40;
		for (int k = 0; k < 7; k++)
		{
			float xx = Utils.RandomInt(ref randSeed, -10, 11) * 0.15f;
			float yy = Utils.RandomInt(ref randSeed, -10, 1) * 0.35f;

			spriteBatch.Draw(flameTexture.Value, new Vector2(i * 16 - (int)Main.screenPosition.X - (width - 16f) / 2f + xx, j * 16 - (int)Main.screenPosition.Y + yy + k * 0.2f) + zero, new Rectangle(frameX, frameY, width, height), color, 0f, default, 1f, SpriteEffects.None, 0f);
		}
		color = new Color(22, 22, 22, 0);
		for (int k = 0; k < 7; k++)
		{
			float xx = Utils.RandomInt(ref randSeed, -10, 11) * 0.15f;
			float yy = Utils.RandomInt(ref randSeed, -10, 1) * 0.35f;

			spriteBatch.Draw(flameTexture.Value, new Vector2(i * 16 - (int)Main.screenPosition.X - (width - 16f) / 2f + xx, j * 16 - (int)Main.screenPosition.Y + yy + 3 - k * 0.3f) + zero, new Rectangle(frameX, frameY, width, height), color, 0f, default, 1f, SpriteEffects.None, 0f);
		}
	}
`:""}

	public override void SetDrawPositions(int i, int j, ref int width, ref int offsetY, ref int height, ref short tileFrameX, ref short tileFrameY)
	{
		offsetY = 2;
	}
}`,Candelabra:(e,t,i,n,a,o,l,r)=>`using ReLogic.Content;
using Terraria.DataStructures;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	${o.length>0?`private Asset<Texture2D> flameTexture;
`:""}

	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileTable[Type] = true;
		Main.tileFrameImportant[Type] = true;
		Main.tileLighted[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.CanBeSleptIn[Type] = true; // Facilitates calling ModifySleepingTargetInfo
		TileID.Sets.InteractibleByNPCs[Type] = true; // Town NPCs will palm their hand at this tile
		TileID.Sets.IsValidSpawnPoint[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTorch);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Candelabras };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style2x2); // this style already takes care of direction for us
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.addTile(Type);

		${o.length>0?`if (!Main.dedServ)
		{
			flameTexture = ModAssets.${o};
		}
`:""}

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}

	public override void ModifyLight(int i, int j, ref float r, ref float g, ref float b)
	{
		r = ${l[0].toFixed(3)}f;
		g = ${l[1].toFixed(3)}f;
		b = ${l[2].toFixed(3)}f;
	}

	public override void HitWire(int i, int j)
	{
		FurnitureUtils.LightHitwire(i, j, Type, 2, 2);
	}

	public override void NearbyEffects(int i, int j, bool closer)
	{
		Tile tile = Main.tile[i, j];
		if (tile.TileFrameX < 54)
		{
			int frequency = 20;
			if (!Main.gamePaused && Main.instance.IsActive && (!Lighting.UpdateEveryFrame || Main.rand.NextBool(4)) && Main.rand.NextBool(frequency))
			{
				Rectangle dustBox = Utils.CenteredRectangle(new Vector2(i * 16 + 8, j * 16 + 4), new Vector2(16, 16));
				int numForDust = Dust.NewDust(dustBox.TopLeft(), dustBox.Width, dustBox.Height, ModContent.DustType<${n}>(), 0f, 0f, 254, default, Main.rand.NextFloat(0.95f, 1.75f));
				Dust obj = Main.dust[numForDust];
				obj.velocity *= 0.4f;
				Main.dust[numForDust].velocity.Y -= 0.4f;
			}
		}
	}

	${o.length>0?`public override void PostDraw(int i, int j, SpriteBatch spriteBatch)
	{
		var zero = new Vector2(Main.offScreenRange, Main.offScreenRange);

		if (Main.drawToScreen)
			zero = Vector2.Zero;

		ulong randSeed = Main.TileFrameSeed ^ (ulong)((long)j << 32 | (uint)i); // Don't remove any casts.
		var color = new Color(55, 5, 255, 0);
		int width = 20;
		int height = 20;
		var tile = Main.tile[i, j];
		int frameX = tile.TileFrameX;
		int frameY = tile.TileFrameY;
		color.A = 40;
		for (int k = 0; k < 7; k++)
		{
			float xx = Utils.RandomInt(ref randSeed, -10, 11) * 0.15f;
			float yy = Utils.RandomInt(ref randSeed, -10, 1) * 0.35f;

			spriteBatch.Draw(flameTexture.Value, new Vector2(i * 16 - (int)Main.screenPosition.X - (width - 16f) / 2f + xx, j * 16 - (int)Main.screenPosition.Y + yy + k * 0.2f) + zero, new Rectangle(frameX, frameY, width, height), color, 0f, default, 1f, SpriteEffects.None, 0f);
		}
		color = new Color(22, 22, 22, 0);
		for (int k = 0; k < 7; k++)
		{
			float xx = Utils.RandomInt(ref randSeed, -10, 11) * 0.15f;
			float yy = Utils.RandomInt(ref randSeed, -10, 1) * 0.35f;

			spriteBatch.Draw(flameTexture.Value, new Vector2(i * 16 - (int)Main.screenPosition.X - (width - 16f) / 2f + xx, j * 16 - (int)Main.screenPosition.Y + yy + 3 - k * 0.3f) + zero, new Rectangle(frameX, frameY, width, height), color, 0f, default, 1f, SpriteEffects.None, 0f);
		}
	}
`:""}

	public override void SetDrawPositions(int i, int j, ref int width, ref int offsetY, ref int height, ref short tileFrameX, ref short tileFrameY)
	{
		offsetY = 2;
	}
}`,Bathtub:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsChair); // Beds count as chairs for the purpose of suitable room creation

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Bathtubs };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style4x2); // this style already takes care of direction for us
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, -2);
		TileObjectData.addTile(Type);

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}
}`,Bookcase:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileTable[Type] = true;
		Main.tileSolidTop[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		Main.tileFrameImportant[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.IgnoredByNpcStepUp[Type] = true; // This line makes NPCs not try to step up this tile during their movement. Only use this for furniture with solid tops.

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Bookcases };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style3x4);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, -2);
		TileObjectData.addTile(Type);

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTable);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}
}`,Lamp:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileTable[Type] = true;
		Main.tileFrameImportant[Type] = true;
		Main.tileLighted[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.CanBeSleptIn[Type] = true; // Facilitates calling ModifySleepingTargetInfo
		TileID.Sets.InteractibleByNPCs[Type] = true; // Town NPCs will palm their hand at this tile
		TileID.Sets.IsValidSpawnPoint[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTorch);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Lamps };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style1xX); // this style already takes care of direction for us
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, -2);
		TileObjectData.addTile(Type);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}

	public override void ModifyLight(int i, int j, ref float r, ref float g, ref float b)
	{
		Tile tile = Main.tile[i, j];
		if (tile.TileFrameX < 18)
		{
			r = ${l[0].toFixed(3)}f;
			g = ${l[1].toFixed(3)}f;
			b = ${l[2].toFixed(3)}f;
		}
		else
		{
			r = 0f;
			g = 0f;
			b = 0f;
		}
	}

	public override void HitWire(int i, int j)
	{
		FurnitureUtils.LightHitwire(i, j, Type, 1, 3);
	}
}`,Piano:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileTable[Type] = true;
		Main.tileSolidTop[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		Main.tileFrameImportant[Type] = true;
		TileID.Sets.DisableSmartCursor[Type] = true;
		TileID.Sets.IgnoredByNpcStepUp[Type] = true; // This line makes NPCs not try to step up this tile during their movement. Only use this for furniture with solid tops.

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Pianos };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style3x2);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.CoordinatePaddingFix = new Point16(0, -2);
		TileObjectData.addTile(Type);

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsTable);

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}
}`,Sofa:(e,t,i,n,a,o,l,r)=>`using Terraria.DataStructures;
using Terraria.Enums;
using Terraria.GameContent;
using Terraria.GameContent.ObjectInteractions;
using Terraria.Localization;
using Terraria.ObjectData;
using ${r};

namespace ${t};

public class ${e} : ModTile
{
	public override void SetStaticDefaults()
	{
		// Properties
		Main.tileFrameImportant[Type] = true;
		Main.tileNoAttach[Type] = true;
		Main.tileLavaDeath[Type] = true;
		TileID.Sets.HasOutlines[Type] = true;
		TileID.Sets.CanBeSatOnForNPCs[Type] = true; // Facilitates calling ModifySittingTargetInfo for NPCs
		TileID.Sets.CanBeSatOnForPlayers[Type] = true; // Facilitates calling ModifySittingTargetInfo for Players
		TileID.Sets.DisableSmartCursor[Type] = true;

		AddToArray(ref TileID.Sets.RoomNeeds.CountsAsChair);

		DustType = ModContent.DustType<${n}>(); // You should set a kind of dust manually.
		AdjTiles = new int[] { TileID.Benches };

		// Placement
		TileObjectData.newTile.CopyFrom(TileObjectData.Style3x2);
		TileObjectData.newTile.CoordinateHeights = new[] { ${a.join(", ")} };
		TileObjectData.newTile.Direction = TileObjectDirection.PlaceLeft;
		// The following 3 lines are needed if you decide to add more styles and stack them vertically
		TileObjectData.newTile.StyleWrapLimit = 2;
		TileObjectData.newTile.StyleMultiplier = 2;
		TileObjectData.newTile.StyleHorizontal = true;

		TileObjectData.newAlternate.CopyFrom(TileObjectData.newTile);
		TileObjectData.newAlternate.Direction = TileObjectDirection.PlaceRight;
		TileObjectData.addAlternate(1); // Facing right will use the second texture style
		TileObjectData.addTile(Type);

		LocalizedText name = CreateMapEntryName();
		AddMapEntry(new Color(69, 36, 78), name);
	}

	public override void NumDust(int i, int j, bool fail, ref int num)
	{
		num = 0;
	}

	public override bool HasSmartInteract(int i, int j, SmartInteractScanSettings settings)
	{
		return settings.player.IsWithinSnappngRangeToTile(i, j, PlayerSittingHelper.ChairSittingMaxDistance); // Avoid being able to trigger it from long range
	}

	public override bool RightClick(int i, int j)
	{
		return FurnitureUtils.SofaRightClick(i, j);
	}

	public override void MouseOver(int i, int j)
	{
		FurnitureUtils.SofaMouseOver<${i}.${e}>(i, j);
	}
}`},bn=(e,t,i,n)=>`using Terraria.GameContent.Creative;
using Everglow.Commons.Utilities;

namespace ${t};

public class ${e} : ${i==="Workbench"?"WorkBench":i}Item
{
	public override void SetDefaults()
	{
		Item.DefaultToPlaceableTile(ModContent.TileType<${n}.${i==="Door"?e+"Closed":e}>());
		base.SetDefaults();
	}

	public override void AddRecipes()
	{
		Recipe recipe = CreateRecipe();
		// Add recipe.
		recipe.Register();
	}
}`,vn=new Set(["Bed","Chair","Chest","Clock","Door","Dresser","Platform","Table","Toilet","WorkBench","Sink","Chandelier","Lantern","Candle","Candelabra","Bathtub","Bookcase","Lamp","Piano","Sofa"]),wn=new Map([["candle",.6],["lamp",1],["lantern",1],["torch",1],["candelabra",1.2],["chandelier",1.5]]),Dn=new Map([["bathtub",[2,1]],["bed",[2,1]],["candelabra",[2,1]],["candle",[2,1]],["chair",[2,1]],["chandelier",[2,1]],["door",[2,1]],["doorclosed",[3,1]],["lamp",[2,1]],["lantern",[2,1]],["toilet",[2,1]],["clock",[1,1]],["platform",[27,1]]]),Pe=new Map([["bed","Bed"],["chair","Chair"],["chest","Chest"],["clock","Clock"],["door","Door"],["dresser","Dresser"],["platform","Platform"],["table","Table"],["toilet","Toilet"],["workbench","WorkBench"],["sink","Sink"],["chandelier","Chandelier"],["lantern","Lantern"],["candle","Candle"],["candelabra","Candelabra"],["bathtub","Bathtub"],["bookcase","Bookcase"],["lamp","Lamp"],["piano","Piano"],["sofa","Sofa"]]),ct=[".png",".jpg",".jpeg"];class Cn{constructor(t,i){te(this,"list",dt([]));te(this,"name","");te(this,"dust","Dust");te(this,"itemNamespace","");te(this,"tileNamespace","");te(this,"lightColor","");te(this,"dustNamespace","");te(this,"processing",!1);this.item=t,this.tile=i,t.on("update",()=>this.update()),i.on("update",()=>this.update())}setName(t){this.name=t.trim()}setNamespace(t,i){this.itemNamespace=t.trim(),this.tileNamespace=i.trim()}setDust(t,i){this.dust=t.trim(),this.dustNamespace=i}setLightColor(t){this.lightColor=t.trim()}async update(){if(!this.item.folder||!this.tile.folder)return;this.list.splice(0);const t=await Array.fromAsync(this.item.folder.values()),i=await Array.fromAsync(this.tile.folder.values());t.forEach(n=>{if(n instanceof FileSystemDirectoryHandle)return;const a=n.name;if(!st(a,ct))return;const[o,l,r]=a.replace(/\.\w+$/,"").split("_");if(r!=null&&r.toLowerCase().startsWith("flame"))return;const c=this.getType(o),d=this.parseCount(l);if(!c)return;let p=null,f=null,s=null;i.forEach(v=>{if(v instanceof FileSystemDirectoryHandle)return;const C=v.name,[D,h,m]=C.replace(/\.\w+$/,"").split("_");if(!st(C,ct))return;const g=this.getType(D),S=this.parseCount(h);if(D.toLowerCase().endsWith("doorclosed")&&c==="Door"){s=v;return}if(c===g&&(h!=null&&h.toLowerCase().startsWith("flame"))){f=v;return}if(c===g&&(m!=null&&m.toLowerCase().startsWith("flame"))){f=v;return}if(c===g&&d===S){p=v;return}}),p&&this.list.push({name:this.name,checked:!0,type:c.toLowerCase(),item:n,tile:p,cnt:d,flame:f,doorClosed:s})})}getType(t){const i=t.toLowerCase();if(i.endsWith("dooropen")||i.endsWith("dooropened"))return"Door";for(const n of vn)if(t.toLowerCase().endsWith(n.toLowerCase()))return n}getStandardizedType(t){return(Pe.get(t.type)??"")+(t.cnt!==-1?`_Type${t.cnt}`:"")}parseCount(t){return/^Type\d+$/.test(t)?parseInt(t.slice(4)):-1}async generate(){if(!this.item.folder||!this.tile.folder){De.warn({content:"请选择贴图文件夹"});return}this.processing||(this.processing=!0,De.info("处理中，请稍后..."),await Promise.all(this.list.map(async t=>{var S,$,w;const{checked:i,type:n,item:a,tile:o,flame:l}=t;if(!i)return;const r=this.tile.folder,c=this.item.folder;if(!r||!c)return;const p=await(await o.getFile()).arrayBuffer(),s=await(await a.getFile()).arrayBuffer(),v=await(l==null?void 0:l.getFile()),C=await(v==null?void 0:v.arrayBuffer()),[D,h,m]=await Promise.all([this.loadImage(p),this.loadImage(s),this.loadImage(C)]),g={...t,...this.parseImageInfo(n,D,m)};await((S=this.item.folder)==null?void 0:S.removeEntry(a.name)),await(($=this.tile.folder)==null?void 0:$.removeEntry(o.name)),l&&await((w=this.tile.folder)==null?void 0:w.removeEntry(l.name)),await Promise.all([this.handleTile(this.padImage(D,g),g,this.padImage(m,g)),this.handleItem(h,g)])})),De.success("处理完毕！"),this.processing=!1)}parseImageInfo(t,i,n){n&&(i.width!==n.width||i.height!==n.height)&&De.warn({content:`${t} 的 Tile 与 Flame 贴图长宽不符，将以 Tile 为基准生成`});const{width:a,height:o}=i,l=a%8,c=o%8===1;if(t==="chest")return{frameX:l+1,frameY:3,has18:c};{const d=Dn.get(t);return d?{frameX:d[0],frameY:d[1],has18:c}:{frameX:1,frameY:1,has18:c}}}padImage(t,i){if(!t)return null;const n=t.width-i.frameX+1;if(n%8===0)return t;const a=Math.ceil(n/8),o=Math.round((a*8-n)/2),l=document.createElement("canvas"),r=l.getContext("2d");return l.width=a*8+i.frameX-1,l.height=t.height,r.imageSmoothingEnabled=!1,r.drawImage(t,o,0),l}enlargeTexture(t){const i=document.createElement("canvas"),n=i.getContext("2d");return i.width=t.width*2,i.height=t.height*2,n.imageSmoothingEnabled=!1,n.drawImage(t,0,0,i.width,i.height),i}splitTexture(t,i,n=i.frameX,a=i.frameY){const o=document.createElement("canvas"),l=o.getContext("2d"),r=8,c=t.width-n+1,d=t.height-a+1,p=n,f=a,s=Math.round(c/p),v=Math.round(d/f),C=Math.ceil(s/r),D=i.has18?Math.floor(v/r):Math.ceil(v/r),h=i.has18||i.type==="chest"?1:0,m=p*(r+1)*C,g=f*(r+1)*D+h*f;o.width=m,o.height=g,l.imageSmoothingEnabled=!1;for(let S=0;S<p;S++)for(let $=0;$<f;$++){const w=s*S+S,x=t.height-v*($+1)-$,u=C*S*(r+1),j=g-D*($+1)*(r+1)-h*($+1);for(let I=0;I<C;I++)for(let M=0;M<D;M++){const R=w+I*r,B=x+M*r,O=u+I*r+I,E=j+M*r+M;(i.has18||i.type==="chest")&&M===D-1?l.drawImage(t,R,B,8,9,O,E,8,9):l.drawImage(t,R,B,8,8,O,E,8,8)}}return o}async loadImage(t){if(!t)return null;const i=new Blob([t],{type:"image/png"}),n=URL.createObjectURL(i),a=new Image;return a.src=n,await new Promise(o=>{a.addEventListener("load",()=>o(),{once:!0})}),a}getFileName(t,i=this.name,n=t.tile){const a=t.type.length,[o]=n.name.replace(/\.\w+$/,"").split("_");if(!o.toLowerCase().endsWith(t.type))return"";const l=o.slice(-a);let r="";return r+=i,r+=l,t.cnt!==-1&&(r+=`_Type${t.cnt}`),r}parseLightColor(t){const i=this.lightColor,[n,a,o]=i.split(",").map(r=>parseFloat(r.trim())),l=wn.get(t.type)??1;return[n,a,o].map(r=>r>1?r/255*l:r*l)}splitFrameAndHightlight(t,i,n){const a=document.createElement("canvas"),o=a.getContext("2d");a.width=t.width,a.height=t.height;const l=t.width-i+1,r=t.height-n+1,c=i,d=n,p=Math.round(l/c),f=Math.round(r/d);o.imageSmoothingEnabled=!1;for(let s=0;s<i;s++)for(let v=0;v<n;v++){const C=document.createElement("canvas"),D=C.getContext("2d");D.imageSmoothingEnabled=!1,C.width=p,C.height=f;const h=s*p+s,m=v*f+v;D.drawImage(t,h,m,p,f,0,0,p,f);const g=this.checkEdges(C,D);o.drawImage(g,h,m,p,f)}return a}async handleTile(t,i,n){const a=Pe.get(i.type);if(!a)return;const o=t.height-i.frameY+1,l=Math.round(o/i.frameY),r=this.splitFrameAndHightlight(t,i.frameX,i.frameY),c=this.enlargeTexture(this.splitTexture(r,i)),d=this.enlargeTexture(this.splitTexture(t,i)),p=i.has18?Math.floor(l/8):Math.ceil(l/8),f=i.has18||i.type==="chest"?[...Array(p-1).fill(16),18]:Array(p).fill(16),s=this.getFileName(i),v=ut[a==="Door"?"DoorOpen":a](s,this.tileNamespace,this.itemNamespace,this.dust,f,i.flame?s+"_Flame":"",this.parseLightColor(i),this.dustNamespace);if(n){const $=this.getFileName(i,this.name,i.flame),w=await this.handleFlame(n,i),x=$+"_Flame.png",u=await se(w);await this.write(this.tile.folder,x,u)}const C=s+".cs",D=s+".png",h=s+"_Highlight.png",[m,g]=await Promise.all([se(d),se(c)]),S=[this.write(this.tile.folder,C,v),this.write(this.tile.folder,D,m),this.write(this.tile.folder,h,g)];if(i.doorClosed){const w=await(await i.doorClosed.getFile()).arrayBuffer(),x=await this.loadImage(w);if(x){const u=this.splitFrameAndHightlight(x,3,1),j=s+"Closed.cs",I=s+"Closed.png",M=s+"Closed_Highlight.png",R=ut.DoorClosed(s,this.tileNamespace,this.itemNamespace,this.dust,f,i.flame?s+"_Flame":"",this.parseLightColor(i),this.dustNamespace),B=this.enlargeTexture(this.splitTexture(x,i,3,1)),O=this.enlargeTexture(this.splitTexture(u,i,3,1)),[E,L]=await Promise.all([se(B),se(O)]);S.push(this.write(this.tile.folder,j,R),this.write(this.tile.folder,I,E),this.write(this.tile.folder,M,L))}}await Promise.all(S)}async handleItem(t,i){const n=this.enlargeTexture(t),a=Pe.get(i.type);if(!a)return;const o=this.getFileName(i,this.name,i.item),l=bn(o,this.itemNamespace,a,this.tileNamespace),r=`${o}.cs`,c=`${o}.png`,d=await se(n);await Promise.all([this.write(this.item.folder,r,l),this.write(this.item.folder,c,d)])}async handleFlame(t,i){return this.enlargeTexture(this.splitTexture(t,i))}checkEdges(t,i){const n=document.createElement("canvas"),a=n.getContext("2d");n.width=t.width,n.height=t.height;const l=i.getImageData(0,0,t.width,t.height).data,r=new Uint8ClampedArray(l.length),c=s=>{r[s*4]=255,r[s*4+1]=255,r[s*4+2]=255,r[s*4+3]=255},d=[];for(let s=0;s<t.width;s++)d.push(s,t.width*(t.height-1)+s);for(let s=1;s<t.height-1;s++)d.push(s*t.width,s*t.width+t.width-1);const p=new Set;for(;d.length>0;){const s=d.shift();if(s===void 0||p.has(s))continue;if(l[s*4+3]<25){const C=s%t.width,D=Math.floor(s/t.width),h=(D-1)*t.width+C,m=(D+1)*t.width+C,g=s-1,S=s+1;p.has(h)||d.push(h),p.has(m)||d.push(m),p.has(g)||d.push(g),p.has(S)||d.push(S)}else c(s);p.add(s)}p.clear();const f=new ImageData(r,t.width,t.height);return a.clearRect(0,0,t.width,t.height),a.putImageData(f,0,0),n}async write(t,i,n){if(!n||!t)return;const o=await(await t.getFileHandle(i,{create:!0})).createWritable();await o.write(n),await o.close()}}const Sn={class:"tool-main"},xn={class:"introduction"},In={key:0,class:"tool-split"},On={class:"tool-left"},jn={class:"left-input"},Fn={class:"input"},Mn={class:"input"},En={class:"input"},$n={class:"input"},An={class:"input"},Pn={class:"input"},_n={class:"folder"},Bn={class:"folder"},Rn={class:"tool-right"},Nn={class:"item-right"},zn={class:"right-text"},Ln={class:"text-from"},Hn={class:"text-to"},Wn={key:1,class:"not-support"},Yn=J({__name:"App",setup(e){const t="showDirectoryPicker"in window,i=H(""),n=H(""),a=H(""),o=H(""),l=H(""),r=H(""),c=H(""),d=H(""),p=new tt,f=new tt,s=new Cn(p,f);p.on("update",()=>{var h;c.value=((h=p.folder)==null?void 0:h.name)??""}),f.on("update",()=>{var h;d.value=((h=f.folder)==null?void 0:h.name)??""});function v(h){h.choose()}function C(){ni.info({title:"使用说明",content:()=>T("div",{style:"font-size: 16px"},[T("p",null,[A("该工具可以通过 Tile, Item 的贴图来自动生成家具代码，需要提供未分割的家具贴图，会一并生成家具描边图片。")]),T("p",null,[A("使用该工具时，贴图需要满足如下要求：")]),T("ol",null,[T("li",null,[A("贴图每格8像素，而非16像素。本工具会自动生成2x2放大后的正常贴图。")]),T("li",null,[A("贴图需要未经分割，即贴图不应该有透明分割线。本工具会自动生成切割后的贴图。")]),T("li",null,[A("贴图命名时，要遵循 "),T("b",null,[A("xxxBed_yyy.png")])," ",A("的形式。如果同类家具包含多个家具， 那么需要遵循")," ",T("b",null,[A("xxxBed_Type2_yyy.png")]),A(" 的形式。 贴图命名需要保证第一个下划线之前的内容完全一致，"),T("b",null,[A("_yyy")]),A("为可选，一般不影响最终结果，且")," ",T("b",null,[A("不应当用于区分不同贴图，即去掉家具名称的 _yyy 部分后，不会出现名称重复现象")]),A("。")]),T("li",null,[A("如果 tile 贴图有多帧，那么不同帧之间应该由 1px 宽度或 1px 高度的透明行分割。 例如对于箱子，那么上下两帧之间必须有 1px 高度的透明行分割，再如对于床，左右两个朝向的床之间也必须有一个 1px 宽度的透明列分割。")]),T("li",null,[A("对于烛台等可能拥有火焰贴图的家具，火焰贴图需要以")," ",T("b",null,[A("xxxCandle_Type1_Flame_yyy.png")]),A(" 的形式命名。 如果没有找到对应的贴图，那么会不包含火焰渲染代码。 其中")," ",T("b",null,[A("_Type1")]),A(" 也是可选的，Flame 前的内容需要与家具保持一致。")])]),T("p",null,[A("输出格式：")]),T("ol",null,[T("li",null,[A("代码为 "),T("b",null,[A("家具名称_Type1.cs")]),A(" 的形式，其中")," ",T("b",null,[A("_Type1")]),A(" 部分遵循原贴图命名。")]),T("li",null,[A("贴图命名与代码相同，会去掉 "),T("b",null,[A("_yyy")]),A(" 部分。")])]),T("p",null,[A("部分使用说明")]),T("ol",null,[T("li",null,[A("LightColor: 填写一个字符串，格式为 r,g,b 的格式，例如 0.75,0.8,0.9， 也可以填写大于 1 的数值，会自动除以 255。")])])]),width:window.innerWidth*.8})}function D(){s.setName(i.value),s.setNamespace(a.value,n.value),s.setDust(o.value,l.value),s.setLightColor(r.value),s.generate()}return(h,m)=>(pe(),de("div",Sn,[P("div",xn,[T(Q(Tt),{type:"primary",onClick:C},{default:Ze(()=>m[8]||(m[8]=[A("使用说明")])),_:1})]),t?(pe(),de("div",In,[P("div",On,[P("div",jn,[P("div",Fn,[m[9]||(m[9]=P("span",{class:"input-hint"},"家具名称",-1)),T(Q(N),{class:"input-input",value:i.value,"onUpdate:value":m[0]||(m[0]=g=>i.value=g)},null,8,["value"])]),P("div",Mn,[m[10]||(m[10]=P("span",{class:"input-hint"},"家具 Tile 命名空间",-1)),T(Q(N),{class:"input-input",value:n.value,"onUpdate:value":m[1]||(m[1]=g=>n.value=g)},null,8,["value"])]),P("div",En,[m[11]||(m[11]=P("span",{class:"input-hint"},"家具 Item 命名空间",-1)),T(Q(N),{class:"input-input",value:a.value,"onUpdate:value":m[2]||(m[2]=g=>a.value=g)},null,8,["value"])]),P("div",$n,[m[12]||(m[12]=P("span",{class:"input-hint"},"Dust 类型",-1)),T(Q(N),{class:"input-input",value:o.value,"onUpdate:value":m[3]||(m[3]=g=>o.value=g)},null,8,["value"])]),P("div",An,[m[13]||(m[13]=P("span",{class:"input-hint"},"Dust 所在命名空间",-1)),T(Q(N),{class:"input-input",value:l.value,"onUpdate:value":m[4]||(m[4]=g=>l.value=g)},null,8,["value"])]),P("div",Pn,[m[14]||(m[14]=P("span",{class:"input-hint"},"LightColor",-1)),T(Q(N),{class:"input-input",value:r.value,"onUpdate:value":m[5]||(m[5]=g=>r.value=g)},null,8,["value"])]),P("div",_n,[P("div",{class:"button",onClick:m[6]||(m[6]=g=>v(Q(p)))}," 选择 Item 文件夹 "),P("div",null,ve(c.value),1)]),P("div",Bn,[P("div",{class:"button",onClick:m[7]||(m[7]=g=>v(Q(f)))}," 选择 Tile 文件夹 "),P("div",null,ve(d.value),1)])]),P("div",{class:"button generate",onClick:D},"生成")]),P("div",Rn,[(pe(!0),de(He,null,Wt(Q(s).list,g=>(pe(),de("div",Nn,[T(Q(ai),{checked:g.checked,"onUpdate:checked":S=>g.checked=S},{default:Ze(()=>[P("div",zn,[P("span",Ln,ve(Q(s).getStandardizedType(g)),1),m[15]||(m[15]=P("span",{class:"text-convert"}," ----> ",-1)),P("span",Hn,ve(Q(s).getFileName(g,i.value)),1)])]),_:2},1032,["checked","onUpdate:checked"])]))),256))])])):(pe(),de("div",Wn," 你的浏览器不支持本工具，请更新浏览器。 "))]))}}),Gn=Yt(Yn,[["__scopeId","data-v-f92718b9"]]);Gt(Gn).mount("#app");
