import{_ as u,a as o,c as N,P as r,b as P}from"./index.es-BNppl9rn.js";import{r as i,R as t}from"./index-BOW9aXAt.js";var C=i.createContext({}),y=i.forwardRef(function(e,c){var a=e.children,m=e.className,l=u(e,["children","className"]);return t.createElement("div",o({className:N("progress-stacked",m),ref:c},l),t.createElement(C.Provider,{value:{stacked:!0}},a))});y.propTypes={children:r.node,className:r.string};y.displayName="CProgressStacked";var f=i.forwardRef(function(e,c){var a,m=e.children,l=e.animated,p=e.className,h=e.color,s=e.value,v=s===void 0?0:s,d=e.variant,g=u(e,["children","animated","className","color","value","variant"]),n=i.useContext(C).stacked;return t.createElement("div",o({className:N("progress-bar",(a={},a["bg-".concat(h)]=h,a["progress-bar-".concat(d)]=d,a["progress-bar-animated"]=l,a),p)},!n&&{style:{width:"".concat(v,"%")}},g,{ref:c}),m)});f.propTypes={animated:r.bool,children:r.node,className:r.string,color:P,value:r.number,variant:r.oneOf(["striped"])};f.displayName="CProgressBar";var b=i.forwardRef(function(e,c){var a=e.children,m=e.className,l=e.height,p=e.progressBarClassName,h=e.thin,s=e.value,v=e.white,d=u(e,["children","className","height","progressBarClassName","thin","value","white"]),g=i.useContext(C).stacked;return t.createElement("div",o({className:N("progress",{"progress-thin":h,"progress-white":v},m)},s!==void 0&&{role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100},{style:o(o({},l?{height:"".concat(l,"px")}:{}),g?{width:"".concat(s,"%")}:{}),ref:c}),t.Children.toArray(a).some(function(n){return n.type&&n.type.displayName==="CProgressBar"})?t.Children.map(a,function(n){if(t.isValidElement(n)&&n.type.displayName==="CProgressBar")return t.cloneElement(n,o(o({},s&&{value:s}),d))}):t.createElement(f,o({},p&&{className:p},{value:s},d),a))});b.propTypes={children:r.node,className:r.string,height:r.number,progressBarClassName:r.string,thin:r.bool,value:r.number,white:r.bool};b.displayName="CProgress";export{b as C,f as a};
