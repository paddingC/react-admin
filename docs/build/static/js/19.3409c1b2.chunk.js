(this["webpackJsonpant-admin"]=this["webpackJsonpant-admin"]||[]).push([[19],{1021:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));t(802);var n=t(803),l=(t(997),t(1002)),c=(t(998),t(1003)),b=t(28),j=(t(999),t(1010)),s=t(109),o=t(0),i=t(790),r=t(1023),d=t(63),O=t(1001),p=t.n(O),u=t(43),x=t(15),h=t(196),y=t(7),m=[{value:!0,label:"\u662f"},{value:!1,label:"\u5426"}],T=[{value:"default",label:"\u4eae"},{value:"dark",label:"\u6697"}];function f(e){var a=Object(o.useState)(""),t=Object(s.a)(a,2),O=t[0],f=t[1];var g={labelCol:{flex:"100px"}};return Object(y.jsxs)(i.a,{fitHeight:!0,style:{display:"flex",flexDirection:"column"},children:[Object(y.jsxs)("div",{style:{flex:0},children:[Object(y.jsx)(j.a,{style:{marginBottom:24},type:"warning",message:Object(y.jsx)("div",{style:{color:"red"},children:"\u4e0d\u63a8\u8350\u5c06\u8bbe\u7f6e\u5f00\u653e\u7ed9\u7528\u6237\uff0c\u9009\u62e9\u597d\u4e86\u4e4b\u540e\uff0c\u590d\u5236\u4ee3\u7801\u5230\u9879\u76ee\u914d\u7f6e\u6587\u4ef6 src/config/index.js \u4e2d"})}),Object(y.jsxs)(n.a,{initialValues:x.e,onValuesChange:function(e,a){var t;u.h.local.setItem(x.f,a),Object.entries(a).forEach((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];return x.e[t]=n})),(null===(t=h.c.current)||void 0===t?void 0:t.refresh)&&h.c.current.refresh();var n=p.a.stringify(a,null,4)||"";n=(n=(n=n.replace("layoutType: 'side-menu'","layoutType: LAYOUT_TYPE.SIDE_MENU")).replace("layoutType: 'top-menu'","layoutType: LAYOUT_TYPE.TOP_MENU")).replace("layoutType: 'top-side-menu'","layoutType: LAYOUT_TYPE.TOP_SIDE_MENU"),f(n)},children:[Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u5e03\u5c40\u65b9\u5f0f",name:"layoutType",options:[{value:d.a.SIDE_MENU,label:"\u5de6\u4fa7\u83dc\u5355"},{value:d.a.TOP_MENU,label:"\u5934\u90e8\u83dc\u5355"},{value:d.a.TOP_SIDE_MENU,label:"\u5934\u90e8 + \u5de6\u4fa7\u83dc\u5355"}]})),Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"Logo\u4e3b\u9898",name:"logoTheme",options:T})),Object(y.jsxs)(l.a,{children:[Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u5de6\u4fa7",name:"side",options:m}))}),Object(y.jsx)(r.a,{shouldUpdate:!0,noStyle:!0,children:function(e){return(0,e.getFieldValue)("side")?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u83dc\u5355\u4fdd\u6301\u6253\u5f00",name:"keepMenuOpen",options:m}))}),Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u5de6\u4fa7\u4e3b\u9898",name:"sideTheme",options:T}))}),Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u83dc\u5355\u641c\u7d22",name:"searchMenu",options:m}))})]}):null}})]}),Object(y.jsxs)(l.a,{children:[Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u5934\u90e8",name:"header",options:m}))}),Object(y.jsx)(r.a,{shouldUpdate:!0,noStyle:!0,children:function(e){return(0,e.getFieldValue)("header")?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u5934\u90e8\u6536\u8d77\u83dc\u5355",name:"headerSideToggle",options:m}))}),Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u5934\u90e8\u4e3b\u9898",name:"headerTheme",options:T}))})]}):null}})]}),Object(y.jsxs)(l.a,{children:[Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"Tab\u9875",name:"tab",options:m}))}),Object(y.jsx)(r.a,{shouldUpdate:!0,noStyle:!0,children:function(e){return(0,e.getFieldValue)("tab")?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"Tab\u6301\u4e45\u5316",name:"persistTab",options:m}))}),Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"Tab\u6536\u8d77\u83dc\u5355",name:"tabSideToggle",options:m}))}),Object(y.jsx)(c.a,{span:6,children:Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"Tab\u989d\u5916\u5934\u90e8",name:"tabHeaderExtra",options:m}))})]}):null}})]}),Object(y.jsx)(r.a,Object(b.a)(Object(b.a)({},g),{},{type:"radio-button",label:"\u9875\u9762\u5934\u90e8",name:"pageHeader",options:m}))]})]}),Object(y.jsx)("code",{style:{flex:1,overflow:"auto",borderTop:"1px solid #e8e8e8",padding:16,background:"#000"},children:Object(y.jsx)("pre",{style:{color:"#fff"},children:O})})]})}}}]);
//# sourceMappingURL=19.3409c1b2.chunk.js.map