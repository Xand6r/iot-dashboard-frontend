(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){},262:function(e,t,n){},282:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(46),s=n.n(r),i=(n(183),n(25)),o=n(26),l=n(28),d=n(27),u=n(294),j=(n(184),n(64)),b=n(8),f=[{name:"Lab 1",title:"Check out the details of your lab here."},{name:"Lab 2",title:"Check out the details of your lab here."},{name:"Lab 3",title:"Check out the details of your lab here."},{name:"Lab 4",title:"Check out the details of your lab here."},{name:"Lab 5",title:"Check out the details of your lab here."}],h=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:f},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"demo-infinite-container",children:Object(b.jsx)(u.b,{className:"demo-infinite",dataSource:this.state.data,renderItem:function(e,t){return Object(b.jsx)(j.b,{to:"/dashboard/".concat(t+1),children:Object(b.jsx)(u.b.Item,{children:Object(b.jsx)(u.b.Item.Meta,{title:Object(b.jsx)("a",{href:"https://ant.design",children:e.name}),description:e.title})},e.id)})}})})}}]),n}(c.a.Component);n(262);function O(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("p",{className:"home_heading",children:"Welcome to your dashboard!"}),Object(b.jsx)("p",{className:"home_texts",children:"Here are the different labs."}),Object(b.jsx)(h,{})]})}var p=n(38),x=n(175),m=n(72),v=n(48),g=n.n(v),y=n(24),k=n(134),N=n.n(k),w=n(176),S=n(292),C=(n(149),n(96)),A=n.n(C),I=n(135),D=n(136),L=n.n(D),E="https://iot-dashboard-backend.herokuapp.com",_=function(){var e=Object(I.a)(A.a.mark((function e(t,n){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post(E+t,n);case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),P=1,T=10,F=[{title:"Id",dataIndex:"_id",key:"_id",render:function(e){return Object(b.jsx)("span",{children:e})}},{title:"Date",dataIndex:"date",key:"date",sorter:!0,render:function(e){return Object(b.jsx)("span",{children:g()(e).format("YYYY-MM-DD HH:mm:ss")})}},{title:"Pressure",key:"pressure",dataIndex:"pressure",render:function(e){return e.map((function(e,t){return Object(b.jsx)("span",{children:Object(b.jsxs)(w.a,{color:N()({seed:"pressure-".concat(t)}),children:[e," Pa"]},"pressure-".concat(t))})}))}},{title:"Flow rate",key:"flow",dataIndex:"flow",render:function(e){return e.map((function(e,t){return Object(b.jsx)("span",{children:Object(b.jsxs)(w.a,{color:N()({seed:"pressure-".concat(t)}),children:[e," N/m",Object(b.jsx)("sup",{children:"2"})]},"pressure-".concat(t))})}))}}];function H(e){var t=e.socket,n=Object(a.useState)([]),c=Object(p.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(p.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(!1),j=Object(p.a)(u,2),f=j[0],h=j[1],O=Object(a.useState)(0),v=Object(p.a)(O,2),g=v[0],k=v[1],N=Object(y.f)().labid;Object(a.useEffect)((function(){t&&(l||(d(!0),t.on("NEW_DATA",(function(e){k((function(e){return e+1})),s((function(t){return[e].concat(Object(m.a)(t))}))}))))}),[t]);return Object(a.useEffect)((function(){h(!0);var e={page:P,limit:T,filter:{lab:parseInt(N)},sorter:"-date"};console.log({params:e}),_("/filter",e).then((function(e){var t=e.data;console.log({res:t}),s(t.docs),k(t.totalDocs)})).catch((function(e){console.log(e)})).finally((function(){h(!1)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{style:{textAlign:"center"},children:"Live Data View"}),Object(b.jsx)(S.a,{columns:F,pagination:{defaultCurrent:1,total:g},onChange:function(e,t,n){for(var a={},c="",r=0,i=Object.entries(t);r<i.length;r++){var o=Object(p.a)(i[r],2),l=o[0],d=o[1];d&&d.length&&(a[l]={$in:Object(m.a)(d)})}var u=n.columnKey,j=n.order;u&&j&&(c="ascend"===j?"".concat(u):"-".concat(u));var b=e.current,f=e.pageSize;h(!0),_("/filter",{page:b,limit:f,filter:Object(x.a)({lab:parseInt(N)},a),sorter:c}).then((function(e){var t=e.data;s(t.docs),k(t.totalDocs)})).catch((function(e){console.log(e)})).finally((function(){h(!1)}))},dataSource:r,loading:f})]})}var K=n(166),M=n.n(K);var Y=function(e){var t=e.data,n=e.dataKey,a={theme:{palette:"palette10"},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},series:Object(m.a)(Array(3).keys()).map((function(e){return{name:"Pressure Sensor ".concat(e+1),data:t.map((function(t){return t[n.toLowerCase()][e]})).flat()}})),options:{chart:{height:700,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2}},dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"A graph of ".concat(n," vs Time"),align:"left"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{title:{text:"Date"},type:"datetime"},labels:t.map((function(e){return e.date})),yaxis:{title:{text:"".concat(n)}}}};return Object(b.jsx)("div",{id:"chart",children:Object(b.jsx)(M.a,{options:a.options,series:a.series,type:"line",height:350})})},B=n(293),W=n(117),$=(n(282),B.a.RangePicker),J=1,R=10;function z(e){var t=e.socket,n=Object(a.useState)([]),c=Object(p.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(p.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(!0),j=Object(p.a)(u,2),f=j[0],h=j[1],O=Object(y.f)().labid;Object(a.useEffect)((function(){t&&(l||(d(!0),t.on("NEW_DATA",(function(e){s((function(t){var n=[e].concat(Object(m.a)(t));return console.log(n),n}))}))))}),[t]),Object(a.useEffect)((function(){_("/filter",{page:J,limit:R,filter:{lab:O},sorter:"-date"}).then((function(e){var t=e.data;s(t.docs),console.log(t)})).catch((function(e){console.log(e)})).finally((function(){h(!1)}))}),[]);return Object(b.jsxs)("div",{className:"site-statistic-demo-card",children:[Object(b.jsx)("div",{className:"range-wrapper",children:Object(b.jsx)($,{onChange:function(e){var t=Object(p.a)(e,2),n={date:{$gte:t[0],$lte:t[1]},lab:O,sorter:"-date"};h(!0),_("/filter",{page:J,limit:R,filter:n}).then((function(e){var t=e.data;s(t.docs),console.log(t)})).catch((function(e){console.log(e)})).finally((function(){h(!1)}))}})}),r.length||f?Object(b.jsxs)(W.a,{spinning:f,tip:"Loading...",children:[Object(b.jsx)("div",{className:"chart-wrapper",children:Object(b.jsx)(Y,{data:r,dataKey:"Pressure"})}),Object(b.jsx)("div",{className:"chart-wrapper",children:Object(b.jsx)(Y,{data:r,dataKey:"flow"})})]}):Object(b.jsx)("h2",{children:"No data to display for this range"})]})}var G=n(170);function V(){var e=c.a.useState(null),t=Object(p.a)(e,2),n=t[0],a=t[1];return c.a.useEffect((function(){if(!n){console.log("setting");var e=Object(G.a)(E);a(e)}}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(z,{socket:n}),Object(b.jsx)(H,{socket:n})]})}var q=n(295);n(287);function Q(){return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{children:[Object(b.jsx)("div",{className:"left_navbar",children:Object(b.jsx)("div",{className:"menu",children:Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("p",{children:"IOT DASHBOARD"})})})}),Object(b.jsx)("div",{className:"right_icons",children:Object(b.jsx)(q.a,{})})]})})}n(288);var U=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Q,{}),Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{path:"/",component:O,exact:!0}),Object(b.jsx)(y.a,{path:"/dashboard/:labid",component:V,exact:!0})]})})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,296)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root")),X()}},[[289,1,2]]]);
//# sourceMappingURL=main.cde720bb.chunk.js.map