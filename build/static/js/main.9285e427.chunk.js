(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{198:function(e,t,a){},199:function(e,t,a){},277:function(e,t,a){},361:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),s=a.n(r),i=(a(198),a(169)),l=a(170),o=a(190),u=a(187),d=a(382),j=(a(199),a(51)),b=a(8),h=[{name:"Lab 1",title:"Check out the details of your lab here."},{name:"Lab 2",title:"Check out the details of your lab here."},{name:"Lab 3",title:"Check out the details of your lab here."},{name:"Lab 4",title:"Check out the details of your lab here."},{name:"Lab 5",title:"Check out the details of your lab here."}],f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:h},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"demo-infinite-container",children:Object(b.jsx)(d.b,{className:"demo-infinite",dataSource:this.state.data,renderItem:function(e,t){return Object(b.jsx)(j.b,{to:"/dashboard/".concat(t+1),children:Object(b.jsx)(d.b.Item,{children:Object(b.jsx)(d.b.Item.Meta,{title:Object(b.jsx)("a",{href:"https://ant.design",children:e.name}),description:e.title})},e.id)})}})})}}]),a}(c.a.Component);a(277);function x(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("p",{className:"home_heading",children:"Welcome to your dashboard!"}),Object(b.jsx)("p",{className:"home_texts",children:"Here are the different labs."}),Object(b.jsx)(f,{})]})}var p=a(191),O=a(188),m=a(56),v=a(179),g=a.n(v),y=a(23),M=a(180),k=a.n(M),N=a(383),w=a(379),I=(a(148),a(81)),S=a.n(I),C=a(130),D=a(131),A=a.n(D),L="https://iot-dashboard-backend.herokuapp.com",F=function(){var e=Object(C.a)(S.a.mark((function e(t,a){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post(L+t,a);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(C.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get(L+t);case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),_=1,H=10,R=[{title:"Id",dataIndex:"_id",key:"_id",render:function(e){return Object(b.jsxs)("span",{children:[e.slice(0,7),"..."]})}},{title:"Date",dataIndex:"date",key:"date",sorter:!0,render:function(e){return Object(b.jsx)("span",{children:g()(e).format("YYYY-MM-DD HH:mm:ss")})}},{title:"Value",dataIndex:"value",key:"value"},{title:"Type",key:"type",dataIndex:"type",filters:[{text:"flow",value:"flow"},{text:"pressure",value:"pressure"}],render:function(e){return Object(b.jsx)("span",{children:Object(b.jsx)(N.a,{color:e.length>5?"geekblue":"green",children:e.toUpperCase()},e)})}},{title:"Sensor",dataIndex:"sensor",key:"sensor",filters:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4},{text:5,value:5},{text:6,value:6}],render:function(e){return Object(b.jsx)("span",{children:Object(b.jsx)(N.a,{color:k()({seed:"".concat(e,"-1235")}),style:{borderRadius:"50%",width:"25px",height:"25px",display:"flex",justifyContent:"center",alignItems:"center"},children:e},e)})}}];function T(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(m.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(0),u=Object(m.a)(o,2),d=u[0],j=u[1],h=Object(y.f)().labid;return Object(n.useEffect)((function(){l(!0),F("/filter",{page:_,limit:H,filter:{lab:parseInt(h)}}).then((function(e){var t=e.data;console.log({res:t}),c(t.docs),j(t.totalDocs)})).catch((function(e){console.log(e)})).finally((function(){l(!1)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(w.a,{columns:R,pagination:{defaultCurrent:1,total:d},onChange:function(e,t,a){for(var n={},r="",s=0,i=Object.entries(t);s<i.length;s++){var o=Object(m.a)(i[s],2),u=o[0],d=o[1];d&&d.length&&(n[u]={$in:Object(O.a)(d)})}var b=a.columnKey,f=a.order;b&&f&&(r="ascend"===f?"".concat(b):"-".concat(b));var x=e.current,v=e.pageSize;l(!0),F("/filter",{page:x,limit:v,filter:Object(p.a)({lab:parseInt(h)},n),sorter:r}).then((function(e){var t=e.data;c(t.docs),j(t.totalDocs)})).catch((function(e){console.log(e)})).finally((function(){l(!1)}))},dataSource:a,loading:i})})}var Y=a(71),B=a(41),E=a(380),J=a(381);a(361);function z(){var e=Object(n.useState)({pMax:0,fMax:0,pMeam:0,fMeam:0}),t=Object(m.a)(e,2),a=t[0],c=t[1];Object(y.f)().labid;return Object(n.useEffect)((function(){P("/stats/1").then((function(e){var t=e.data,a=t.pMax,n=t.fMax,r=t.pMeam,s=t.fMeam;c({pMax:a,fMax:n,pMeam:r,fMeam:s})}))}),[]),Object(b.jsx)("div",{className:"site-statistic-demo-card",children:Object(b.jsxs)(Y.a,{className:"rows",gutter:16,children:[Object(b.jsx)(B.a,{span:5,children:Object(b.jsx)(E.a,{className:"statistic-demo-card",children:Object(b.jsx)(J.a,{title:"Average Flow Rate",value:a.fMeam,precision:2,valueStyle:{color:"#3f8600"},suffix:"m3/s"})})}),Object(b.jsx)(B.a,{span:5,children:Object(b.jsx)(E.a,{className:"statistic-demo-card",children:Object(b.jsx)(J.a,{title:"Average Pressure",value:a.pMeam,precision:2,valueStyle:{color:"#3f8600"},suffix:"Pa"})})}),Object(b.jsx)(B.a,{span:5,children:Object(b.jsx)(E.a,{className:"statistic-demo-card",children:Object(b.jsx)(J.a,{title:"Maximum Flow Rate",value:a.fMax,precision:2,valueStyle:{color:"#3f8600"},suffix:"m3/s"})})}),Object(b.jsx)(B.a,{span:5,children:Object(b.jsx)(E.a,{className:"statistic-demo-card",children:Object(b.jsx)(J.a,{title:"Maximum Pressure",value:a.pMax,precision:2,valueStyle:{color:"#3f8600"},suffix:"Pa"})})})]})})}function K(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(z,{}),Object(b.jsx)(T,{})]})}var U=a(384);a(373);function V(){return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{children:[Object(b.jsx)("div",{className:"left_navbar",children:Object(b.jsx)("div",{className:"menu",children:Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("p",{children:"IOT DASHBOARD"})})})}),Object(b.jsx)("div",{className:"right_icons",children:Object(b.jsx)(U.a,{})})]})})}a(374);var W=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(V,{}),Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{path:"/",component:x,exact:!0}),Object(b.jsx)(y.a,{path:"/dashboard/:labid",component:K,exact:!0})]})})]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,385)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),$()}},[[375,1,2]]]);
//# sourceMappingURL=main.9285e427.chunk.js.map