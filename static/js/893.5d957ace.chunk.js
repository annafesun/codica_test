"use strict";(self.webpackChunkcodica=self.webpackChunkcodica||[]).push([[893],{9893:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var n=a(9827),r=a(3831),o=a(4270),i=a(6773),c=a(3366),s=a(7462),l=a(390),d=a(4977),p=a(147),u=a(4115),m=a(9307),v=a(2254),g=a(1293);function h(e){return(0,v.Z)("MuiCardMedia",e)}(0,g.Z)("MuiCardMedia",["root","media","img"]);var f=a(2559),y=["children","className","component","image","src","style"],x=(0,m.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,n=a.isMediaComponent,r=a.isImageComponent;return[t.root,n&&t.media,r&&t.img]}})((function(e){var t=e.ownerState;return(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),Z=["video","audio","picture","iframe","img"],b=["picture","img"],w=l.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiCardMedia"}),n=a.children,r=a.className,o=a.component,i=void 0===o?"div":o,l=a.image,m=a.src,v=a.style,g=(0,c.Z)(a,y),w=-1!==Z.indexOf(i),C=!w&&l?(0,s.Z)({backgroundImage:'url("'.concat(l,'")')},v):v,k=(0,s.Z)({},a,{component:i,isMediaComponent:w,isImageComponent:-1!==b.indexOf(i)}),M=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,p.Z)(a,h,t)}(k);return(0,f.jsx)(x,(0,s.Z)({className:(0,d.Z)(M.root,r),as:i,role:!w&&l?"img":void 0,ref:t,style:C,ownerState:k,src:w?l||m:void 0},g,{children:n}))})),C=(0,a(9482).Z)(),k=a(5545),M=a(1352),j=a(6165),R=a(2380);var z=l.createContext();function H(e){return(0,v.Z)("MuiTable",e)}(0,g.Z)("MuiTable",["root","stickyHeader"]);var S=["className","component","padding","size","stickyHeader"],T=(0,m.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,s.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,s.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),N="table",O=l.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiTable"}),n=a.className,r=a.component,o=void 0===r?N:r,i=a.padding,m=void 0===i?"normal":i,v=a.size,g=void 0===v?"medium":v,h=a.stickyHeader,y=void 0!==h&&h,x=(0,c.Z)(a,S),Z=(0,s.Z)({},a,{component:o,padding:m,size:g,stickyHeader:y}),b=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,p.Z)(a,H,t)}(Z),w=l.useMemo((function(){return{padding:m,size:g,stickyHeader:y}}),[m,g,y]);return(0,f.jsx)(z.Provider,{value:w,children:(0,f.jsx)(T,(0,s.Z)({as:o,role:o===N?null:"table",ref:t,className:(0,d.Z)(b.root,n),ownerState:Z},x))})}));var P=l.createContext();function W(e){return(0,v.Z)("MuiTableBody",e)}(0,g.Z)("MuiTableBody",["root"]);var A=["className","component"],I=(0,m.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),B={variant:"body"},D="tbody",F=l.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiTableBody"}),n=a.className,r=a.component,o=void 0===r?D:r,i=(0,c.Z)(a,A),l=(0,s.Z)({},a,{component:o}),m=function(e){var t=e.classes;return(0,p.Z)({root:["root"]},W,t)}(l);return(0,f.jsx)(P.Provider,{value:B,children:(0,f.jsx)(I,(0,s.Z)({className:(0,d.Z)(m.root,n),as:o,ref:t,role:o===D?null:"rowgroup",ownerState:l},i))})})),q=a(4942),L=a(6128),_=a(5163);function E(e){return(0,v.Z)("MuiTableCell",e)}var G=(0,g.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),J=["align","className","component","padding","scope","size","sortDirection","variant"],U=(0,m.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,_.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,_.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,_.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,s.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,L.$n)((0,L.Fq)(t.palette.divider,1),.88):(0,L._j)((0,L.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&(0,q.Z)({padding:"6px 16px"},"&.".concat(G.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),V=l.forwardRef((function(e,t){var a,n=(0,u.Z)({props:e,name:"MuiTableCell"}),r=n.align,o=void 0===r?"inherit":r,i=n.className,m=n.component,v=n.padding,g=n.scope,h=n.size,y=n.sortDirection,x=n.variant,Z=(0,c.Z)(n,J),b=l.useContext(z),w=l.useContext(P),C=w&&"head"===w.variant;a=m||(C?"th":"td");var k=g;!k&&C&&(k="col");var M=x||w&&w.variant,j=(0,s.Z)({},n,{align:o,component:a,padding:v||(b&&b.padding?b.padding:"normal"),size:h||(b&&b.size?b.size:"medium"),sortDirection:y,stickyHeader:"head"===M&&b&&b.stickyHeader,variant:M}),R=function(e){var t=e.classes,a=e.variant,n=e.align,r=e.padding,o=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat((0,_.Z)(n)),"normal"!==r&&"padding".concat((0,_.Z)(r)),"size".concat((0,_.Z)(o))]};return(0,p.Z)(i,E,t)}(j),H=null;return y&&(H="asc"===y?"ascending":"descending"),(0,f.jsx)(U,(0,s.Z)({as:a,ref:t,className:(0,d.Z)(R.root,i),"aria-sort":H,scope:k,ownerState:j},Z))})),$=V;function K(e){return(0,v.Z)("MuiTableRow",e)}var Q=(0,g.Z)("MuiTableRow",["root","selected","hover","head","footer"]),X=["className","component","hover","selected"],Y=(0,m.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,q.Z)(t,"&.".concat(Q.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),(0,q.Z)(t,"&.".concat(Q.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,L.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,L.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),ee=l.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiTableRow"}),n=a.className,r=a.component,o=void 0===r?"tr":r,i=a.hover,m=void 0!==i&&i,v=a.selected,g=void 0!==v&&v,h=(0,c.Z)(a,X),y=l.useContext(P),x=(0,s.Z)({},a,{component:o,hover:m,selected:g,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),Z=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,p.Z)(a,K,t)}(x);return(0,f.jsx)(Y,(0,s.Z)({as:o,ref:t,className:(0,d.Z)(Z.root,n),role:"tr"===o?null:"row",ownerState:x},h))})),te=ee,ae=function(){var e=(0,M.TL)(),t=(0,k.UO)().cityName,a=(0,M.CG)((0,j.W)(t)),c=(0,k.s0)();if((0,l.useLayoutEffect)((function(){t&&e((0,R.mI)(t))}),[e,t]),null!==a&&void 0!==a&&a.loading)return(0,f.jsx)(C,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,f.jsx)(n.Z,{size:"200px"})});if(!a)return(0,f.jsxs)(C,{sx:{p:10},children:[(0,f.jsx)(r.Z,{size:"small",variant:"contained",color:"secondary",onClick:function(){return c(-1)},children:"Back"}),(0,f.jsx)(o.Z,{variant:"h1",children:"Sorry can not upload detailed city data"})]});function s(e,t){return{name:e,value:t}}var d=[s("Temperature",a.main.temp+" C"),s("Temperature feels like",a.main.feels_like+" C"),s("Clouds",a.clouds.all+"%"),s("Humidity",a.main.humidity+"%"),s("Wind speed",a.wind.speed+" meter/sec"),s("Visibility",a.visibility+" meter"),s("Sunrise & Sunset","Sunrise: ".concat(a.sys.sunrise," Sunset: ").concat(a.sys.sunset))];return(0,f.jsxs)(i.Z,{elevation:3,sx:{m:10,minHeight:"100vh"},children:[(0,f.jsxs)(C,{sx:{display:"flex",p:4,justifyContent:"space-between"},children:[(0,f.jsx)(r.Z,{size:"small",variant:"contained",color:"secondary",onClick:function(){return c(-1)},children:"Back"}),(0,f.jsx)(o.Z,{component:"p",sx:{flex:"0 0 50%",fontSize:"34px",fontWeight:"700"},children:a.name})]}),(0,f.jsxs)(o.Z,{variant:"h2",component:"p",sx:{p:5},children:["Description: ",a.weather[0].description]}),(0,f.jsx)(w,{sx:{width:"120px",height:"140px",margin:"0 auto"},image:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),title:"weather icon"}),(0,f.jsx)(O,{sx:{minWidth:650},"aria-label":"simple table",children:(0,f.jsx)(F,{children:d.map((function(e){return(0,f.jsxs)(te,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,f.jsx)($,{component:"th",scope:"row",sx:{fontWeight:"bold"},children:e.name}),(0,f.jsx)($,{align:"right",children:e.value})]},e.name)}))})})]})}},6165:function(e,t,a){a.d(t,{W:function(){return o},w:function(){return r}});var n=a(6061),r=function(e){return e.weather},o=function(e){return(0,n.P1)((function(e){return e.weather.cityWeathers}),(function(t){return t.find((function(t){return t.name===e}))}))}}}]);
//# sourceMappingURL=893.5d957ace.chunk.js.map