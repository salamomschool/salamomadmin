import{_ as B,a as i,c as I,P as e,g as $,f as z}from"./index.es-BNppl9rn.js";import{r as a,R as o}from"./index-BOW9aXAt.js";import{C as A}from"./CConditionalPortal-BHALRb7C.js";import{u as G,T as J}from"./DocsExample-C0Ia_OoD.js";import{u as K,g as Q}from"./isRTL-CRexJb2W.js";import{g as U}from"./getRTLPlacement-Cm1awgRr.js";var k=a.forwardRef(function(t,w){var C=t.children,d=t.animation,N=d===void 0?!0:d,x=t.className,O=t.container,F=t.content,v=t.delay,c=v===void 0?0:v,g=t.fallbackPlacements,H=g===void 0?["top","right","bottom","left"]:g,b=t.offset,M=b===void 0?[0,6]:b,S=t.onHide;t.onShow;var h=t.placement,q=h===void 0?"top":h,y=t.trigger,r=y===void 0?["hover","focus"]:y,u=t.visible,D=B(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),n=a.useRef(null),l=a.useRef(null),L=G(w,n),E=a.useRef("tooltip".concat(Math.floor(Math.random()*1e6))),P=K(),V=P.initPopper,_=P.destroyPopper,R=a.useState(u),f=R[0],m=R[1],T=typeof c=="number"?{show:c,hide:c}:c,j={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:H}},{name:"offset",options:{offset:M}}],placement:U(q,l.current)};a.useEffect(function(){m(u)},[u]);var s=function(p){if(p){setTimeout(function(){return m(!0)},T.show);return}setTimeout(function(){return m(!1)},T.hide)};return o.createElement(o.Fragment,null,o.cloneElement(C,i(i(i(i(i({},f&&{"aria-describedby":E.current}),{ref:l}),(r==="click"||r.includes("click"))&&{onClick:function(){return s(!f)}}),(r==="focus"||r.includes("focus"))&&{onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}}),(r==="hover"||r.includes("hover"))&&{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}})),o.createElement(A,{container:O,portal:!0},o.createElement(J,{in:f,mountOnEnter:!0,nodeRef:n,onEnter:function(){l.current&&n.current&&V(l.current,n.current,j)},onEntering:function(){l.current&&n.current&&(n.current.style.display="initial")},onExit:S,onExited:function(){_()},timeout:{enter:0,exit:n.current?Q(n.current)+50:200},unmountOnExit:!0},function(p){return o.createElement("div",i({className:I("tooltip","bs-tooltip-auto",{fade:N,show:p==="entered"},x),id:E.current,ref:L,role:"tooltip",style:{display:"none"}},D),o.createElement("div",{className:"tooltip-arrow"}),o.createElement("div",{className:"tooltip-inner"},F))})))});k.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:$,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),trigger:z,visible:e.bool};k.displayName="CTooltip";export{k as C};