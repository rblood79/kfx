(this.webpackJsonpkf21=this.webpackJsonpkf21||[]).push([[0],{428:function(e,t,n){},430:function(e,t,n){},432:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){},438:function(e,t,n){},439:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){},445:function(e,t,n){},446:function(e,t,n){},452:function(e,t,n){"use strict";n.r(t);var s=n(50),c=(n(228),n(240),n(2)),a=n.n(c),i=n(117),r=n.n(i),l=n(225),o=n(21),u=(n(428),n(31)),j=n.n(u),d=n(51),b=n(7),m=n(5),f=n.n(m),h=n(19),O=n.n(h),x=(n(430),n(148)),p=(n(432),n(18)),v=n(26),g=n(27),N=n(28),T=n(1),w=a.a.createContext(),y=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={engine:!1,topNum:0,type:"list",focused:0,base:!1,count:0,width:0,height:0,filter:null,temp:[0,0,0,0,0]},e.setTheme=function(){var t=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({theme:n?"dark":"light"});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setEngine=function(t){e.setState((function(e){return{engine:t}}))},e.setTopNum=function(t){e.setState((function(e){return{topNum:t}}))},e.setType=function(t){e.setState((function(e){return{type:t}}))},e.setFocused=function(t){e.setState((function(e){return{focused:t}}))},e.setBase=function(t){e.setState((function(e){return{base:t}}))},e.setCount=function(t){e.setState((function(e){return{count:t}}))},e.setWidth=function(t){e.setState((function(e){return{width:t}}))},e.setHeight=function(t){e.setState((function(e){return{height:t}}))},e.setFilter=function(t){e.setState((function(e){return{filter:t}}))},e.setTemp=function(t){e.setState((function(e){return{temp:t}}))},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.url,s=t.theme,c=t.engine,a=t.topNum,i=t.type,r=t.focused,l=t.count,o=t.base,u=t.width,j=t.height,d=t.filter,b=t.temp,m=this.setTheme,f=this.setEngine,h=this.setTopNum,O=this.setType,x=this.setFocused,p=this.setCount,v=this.setBase,g=this.setWidth,N=this.setHeight,y=this.setFilter,k=this.setTemp;return Object(T.jsx)(w.Provider,{value:{theme:s,url:n,engine:c,topNum:a,type:i,focused:r,count:l,base:o,width:u,height:j,filter:d,temp:b,setTheme:m,setEngine:f,setTopNum:h,setType:O,setFocused:x,setCount:p,setBase:v,setWidth:g,setHeight:N,setFilter:y,setTemp:k},children:e})}}]),n}(c.Component),k=w,S=(n(92),function(e){var t=Object(c.useContext)(k),n=t.topNum,s=t.setTopNum,a=t.setFocused,i=t.setCount,r=t.base,l=t.engine,o=t.setEngine,u=e.data;return Object(c.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:"head",children:[Object(T.jsx)("div",{className:f()("topLogo",l&&"active"),onClick:function(){return o(!l)},children:Object(T.jsx)("div",{className:"logo",children:Object(T.jsx)("img",{src:"./assets/other/logo.png",alt:"logo"})})}),Object(T.jsxs)("div",{className:f()("topNav",r&&"active"),children:[u&&u.length>0&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("img",{className:"flag",src:u[n].MARK,alt:u[n].\uae30\uc9c0}),Object(T.jsx)("span",{className:"viewText",children:u[n].\uae30\uc9c0})]}),u&&u.map((function(e,t){return Object(T.jsx)("button",{className:f()("topButton",t===n?"active":null),onClick:function(){return!r&&(e=t,a(0),i(0),void s(e));var e},children:e.\ub300\ub300},e.\ub300\ub300)}))]})]})});S.defaultProps={topNum:null,type:"list"};var C=S,B=(n(434),function(e){var t=Object(c.useContext)(k),n=t.base,s=t.type,a=Object(c.useState)([{title:"STEP 1",comment:"Search"},{title:"STEP 2",comment:"Aircraft"},{title:"STEP 3",comment:"Condition"},{title:"STEP 4",comment:"Finish"}]),i=Object(b.a)(a,1)[0],r=function(){var t=e.stepNum;return"grid"===s&&(t=2),t};return Object(c.useEffect)((function(){}),[]),Object(T.jsx)("div",{className:"step",children:Object(T.jsx)("ul",{className:f()("stepGroup",n&&"active"),children:i.map((function(e,t){return Object(T.jsxs)("li",{className:f()("stepItem",t===r()?"active":null),children:[Object(T.jsx)("span",{className:"stepItemTitle",children:e.title}),Object(T.jsx)("span",{className:"stepItemComment",children:e.comment})]},t)}))})})});B.defaultProps={stepNum:1};var A=B,E=n(116),F=(n(435),n(76));function P(e,t,n,s){return"hsla("+((n-t)*(e/100)+t)+", 80%, 40%, "+(s||1)+")"}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return t.forEach((function(t){e.hasOwnProperty(t)&&(n[t]=e[t])})),n}function L(){var e=Object(c.useState)({width:void 0,height:void 0,flag:!1}),t=Object(b.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(e,t){var n;return function(s){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(void 0)}),t)}}((function(){s({width:window.innerWidth-32,height:window.innerHeight})}),100);return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}n(438);var G=n(25),M=(n(439),function(e){var t=Object(c.useCallback)((function(){for(var e=[],t=0;t<4;t++)e.push(Object(T.jsx)("span",{className:f()("boxLine")},t));return e}),[]);return Object(T.jsx)("div",{className:f()("boxLineContainer"),children:Object(T.jsx)(t,{})})}),R=(n(440),function(e){var t=e.value,n=e.color,s=Object(G.useSpring)({from:{number:0},to:{number:t},reset:!0,delay:300}).number;return Object(T.jsxs)("div",{className:f()("boxGueageContainer"),children:[Object(T.jsx)(G.animated.div,{className:"boxGueageBase",style:{width:e.active?s.to((function(e){return e.toFixed(2)+"%"})):t+"%",backgroundColor:n}}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")}),Object(T.jsx)("span",{className:f()("boxGueage")})]})}),H=(n(441),function(e){var t=Object(c.useContext)(k).engine,n=Object(G.useSpring)({config:{duration:420},x:e.active});return Object(c.useEffect)((function(){}),[]),Object(T.jsx)("div",{className:"imageContainer",children:t?Object(T.jsx)(G.animated.img,{className:"image",alt:"KF21",src:n.x.to({range:[0,1],output:[60,40]}).to((function(e){return"./assets/aircraft/TH50/FA_00"+Math.round(e)})),style:{transform:n.x.to({range:[0,.5,1],output:[1,1,2.8]}).to((function(e){return"scale(".concat(e,")")})),marginTop:n.x.to({range:[0,.5,1],output:[0,0,-42]}).to((function(e){return e}))}}):Object(T.jsx)(G.animated.img,{className:"image",alt:"KF21",src:"./assets/aircraft/TH50/FA_0060",style:{transform:n.x.to({range:[0,.5,1],output:[1,1,1.4]}).to((function(e){return"scale(".concat(e,")")}))}})})});H.defaultProps={test:1};var K=H,D=function(e){var t=Object(c.useContext)(k),n=t.focused,s=t.setFocused,a=t.type,i=t.setBase,r=t.setCount,l=t.setTemp,o=t.temp,u=e.index,j=e.item,d=n===u&&"grid"!==a,b=e.selectItem,m=j.\ud638\uae30ID,h=P(j.TOTAL,0,240),O=Object(G.useSpring)({from:{number:o[4]||0},to:{number:j.TOTAL},reset:!0,delay:200}).number,x=function(){l([0,0,0,0]),b(j),s(u),i(!0),"list"===a&&r(u)};return Object(c.useEffect)((function(){}),[]),Object(T.jsx)(F.a,{flipId:m,translate:!0,children:Object(T.jsxs)("div",{className:f()("listItem",d&&"active"),children:[!d&&Object(T.jsx)(M,{active:d}),Object(T.jsx)("div",{className:"aircraftGroup",children:Object(T.jsx)("div",{className:"aircraft",children:Object(T.jsx)(K,{active:d?1:0})})}),n===u&&"list"===a?Object(T.jsx)("div",{className:f()("item"),children:Object(T.jsx)("button",{className:"detailButton",onClick:function(){x()}})}):Object(T.jsxs)("div",{className:f()("item"),children:[Object(T.jsxs)("div",{className:"itemTitle",children:[j.\ud638\uae30,"\ud638\uae30"]}),Object(T.jsx)(R,{value:j.TOTAL,color:h}),Object(T.jsx)(G.animated.div,{className:f()("itemPercent"),style:{color:h},children:"grid"===a?O.to((function(e){return e.toFixed(2)+"%"})):j.TOTAL+"%"}),Object(T.jsx)("div",{className:"itemIndex",children:u<9?"0"+(u+1):u+1}),Object(T.jsx)("button",{className:"detailButtonGrid",onClick:function(){x()}})]})]})})};D.defaultProps={focused:0};var V=D,W=(n(442),function(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),s=Object(c.useState)(null),a=Object(b.a)(s,2),i=a[0],r=a[1],l=Object(c.useState)(null),o=Object(b.a)(l,2),u=o[0],j=o[1],d=e.item,m=e.aver||[0,0,0,0],f=e.total,h=Object.keys(m).map((function(e){return{key:e,value:m[e]}})),x=Object.keys(d).map((function(e){return{key:e,value:d[e]}})),p=P(f,0,240,.48),v=P(f,0,240,1),g=240,N=180;return Object(c.useEffect)((function(){r(t.current),i&&j(i.getContext("2d"));var s,c=[e.cur],a=[e.cur],l=[Object.keys(d).map((function(e){return d[e]}))],o=[h,x],b=!0,m=function(t){u.clearRect(0,0,480,360);var n=1.6,s=[{stroke:"rgba(0,0,0,0.16)",fill:"rgba(0,0,0,0.16)",width:1,shadow:0},{stroke:"rgba(0,0,0,0.48)",fill:"rgba(0,0,0,0.24)",width:.5,shadow:0}];!function(){u.strokeStyle="#ccc",u.lineJoin="round",u.lineWidth=1,u.shadowBlur=0,u.beginPath(),u.moveTo(240.5,20),u.lineTo(240.5,340),u.moveTo(80,180.5),u.lineTo(400,180.5),u.closePath(),u.stroke();var e=[g,20,400,N,g,340,80,N];u.fillPolygon(e,"rgba(0,0,0,0.0)","#a4a4a4"),u.stroke();for(var t=0;t<5;t++){var n=32*t,s=[g,N-n,g+n,N,g,N+n,g-n,N];u.fillPolygon(s,"rgba(0,0,0,0)","#dedede")}u.font="500 14px Noto Sans KR",u.textAlign="center",u.textBaseline="bottom",u.fillStyle="#898989",u.shadowBlur=0,u.fillText(x[0].key,g,17),u.textAlign="left",u.textBaseline="middle",u.fillText(x[1].key,403,N),u.textAlign="center",u.textBaseline="top",u.fillText(x[2].key,g,343),u.textAlign="right",u.textBaseline="middle",u.fillText(x[3].key,77,N)}(),O.a.map(o,(function(c,a){var i=[];0===a?(i=[g,N-n*c[0].value,g+n*c[1].value,N,g,N+n*c[2].value,g-n*c[3].value,N],u.fillPolygon(i,s[a].fill,s[a].stroke,s[a].width,s[a].shadow)):(i=[g,N,g+n*t[1],N,g,N-n*t[0]],u.fillPolygon(i,P(f,0,240,.5),s[a].stroke,s[a].width,s[a].shadow),i=[g,N,g+n*t[1],N,g,N+n*t[2]],u.fillPolygon(i,P(f,0,240,.6),s[a].stroke,s[a].width,s[a].shadow),i=[g,N,g,N+n*t[2],g-n*t[3],N],u.fillPolygon(i,P(f,0,240,.8),s[a].stroke,s[a].width,s[a].shadow),i=[g,N,g,N-n*t[0],g-n*t[3],N],u.fillPolygon(i,P(f,0,240,.6),s[a].stroke,s[a].width,s[a].shadow)),a>0&&e.numView&&(u.font="600 14px GmarketSans",u.textAlign="center",u.textBaseline="bottom",u.fillStyle="#4c4c4c",u.fillText(t[0].toFixed(0),g,188-n*t[0]),u.textBaseline="middle",u.textAlign="left",u.fillText(t[1].toFixed(0),232+n*t[1],N),u.textBaseline="top",u.textAlign="center",u.fillText(t[2].toFixed(0),g,172+n*t[2]),u.textBaseline="middle",u.textAlign="right",u.fillText(t[3].toFixed(0),248-n*t[3],N))}))};u&&(clearTimeout(n.current),function e(){for(var t=0;t<l.length;t+=1)for(var i=0;i<l[t].length;i+=1)s=(l[t][i]-a[t][i])/20,c[t][i]+=s,s&&(b=!1);var r=l.length-1,o=l[r].length-1;Math.round(10*l[r][o])/10===Math.round(10*a[r][o])/10&&(b=!0),b?(m(l[0]),clearTimeout(n.current)):(m(c[0]),n.current=setTimeout((function(){e()}),3))}())}),[i,u,d,p,N,x,v,g,h,f,e.cur,e.numView]),Object(T.jsx)("canvas",{ref:t,className:"canvas",width:480,height:360})});CanvasRenderingContext2D.prototype.fillPolygon=function(e,t,n,s,c){if(!(e.length<=0)){this.strokeStyle=n,this.lineJoin="round",this.lineWidth=s||.5,this.fillStyle=t,this.beginPath(),this.moveTo(e[0],e[1]);for(var a=2;a<e.length-1;a+=2)this.lineTo(e[a],e[a+1]);this.shadowColor=t,this.shadowBlur=c||0,this.closePath(),this.stroke(),this.fill()}};var J=function(e){var t=Object(c.useContext)(k),n=t.setBase,a=t.temp,i=t.base,r=e.item,l=e.select,o=e.checkList,u=e.ess,j=e.aver,d=I(r,O.a.keys(o)),m=I(j,O.a.keys(o)),h=r&&P(r.TOTAL,0,240),x=Object(G.useSpring)({from:{number:a[4]||0},to:{number:r.TOTAL,color:h},reset:!0}),p=x.number,v=x.color,g=Object(c.useState)([{name:"\uc8fc\uae30\uac80\uc0ac",icon:"ri-tools-fill"},{name:"\uc57c\uac04\ube44\ud589\uc5ec\ubd80",icon:"ri-contrast-2-fill"},{name:"\uc678\uc7a5\ubcc0\uacbd",icon:"ri-timer-line"},{name:"\uc2e4\ubb34\uc7a5\uc5ec\ubd80",icon:"ri-flight-takeoff-fill"},{name:"\ud56d\uacf5\uae30\ub4f1\uae09",icon:"ri-todo-line"},{name:"\uac00\ub3d9\uc0c1\ud0dc",icon:"ri-user-heart-line"},{name:"\ucd5c\uadfc\ube44\ud589",icon:"ri-calendar-line"},{name:"\uc8fc\uc694\uacb0\ud568",icon:"ri-pulse-line"}]),N=Object(b.a)(g,1)[0],w=Object(c.useCallback)((function(e){var t=[];return O.a.map(d,(function(e,n){t.push(Object(T.jsxs)("li",{className:f()("sideItem","N"===o[n]&&"disabled"),children:[Object(T.jsx)("span",{className:"sideItemBase"}),Object(T.jsx)("span",{className:"sideItemIcon",children:Object(T.jsx)("i",{className:O.a.find(N,["name",n]).icon})}),Object(T.jsx)("span",{className:"sideItemTitle",children:n}),Object(T.jsx)("span",{className:"sideItemValue",children:"N"===o[n]?Object(T.jsx)("i",{className:"ri-eye-off-line"}):Object(T.jsxs)("span",{className:"sideItemUd",children:[e,Object(T.jsx)("i",{className:e>m[n]?"ri-arrow-up-s-fill":"ri-arrow-down-s-fill"})]})})]},n))})),t}),[m,o,N,d]);return Object(c.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:"detailContainer",style:{width:360,height:360},children:[Object(T.jsx)("ul",{className:"detailContents",children:Object(T.jsx)(w,Object(s.a)({},r))}),Object(T.jsxs)("div",{className:f()("listItem","listItemExpend"),children:[Object(T.jsx)("div",{className:"graph",children:i&&Object(T.jsx)(W,{item:I(r,O.a.keys(u)),aver:I(j,O.a.keys(u)),total:r.TOTAL,cur:a,numView:!0})}),Object(T.jsxs)("div",{className:"itemTitle",children:[r&&r.\ud638\uae30,"\ud638\uae30 ",Object(T.jsx)("span",{className:"itemTitleGray",children:"BORAMAE"})]}),Object(T.jsx)("span",{className:"itemPoint",children:"RAITING POINT"}),Object(T.jsx)(G.animated.div,{className:f()("itemPercent"),style:{color:v},children:p.to((function(e){return e.toFixed(2)+"%"}))}),Object(T.jsx)("button",{className:"detailButton",onClick:function(){l(null),n(!1)}})]})]})};J.defaultProps={focused:0};var _=J,z=(n(443),function(e){var t=Object(c.useContext)(k).temp,n=e.item,s=P(n.TOTAL,0,240),a=Object(G.useSpring)({from:{number:t[4]||0},to:{number:n.TOTAL},reset:!0,delay:200}).number;return Object(c.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:f()("focuseItem"),children:[Object(T.jsxs)("div",{className:"itemPercentGroup",children:[Object(T.jsx)(R,{value:n.TOTAL,color:s}),Object(T.jsx)("span",{className:"itemRating",children:"RATING POINT"}),Object(T.jsx)(G.animated.div,{className:f()("itemPercent"),style:{color:s},children:a.to((function(e){return e.toFixed(2)+"%"}))})]}),Object(T.jsxs)("div",{className:"itemTitleGroup",children:[Object(T.jsxs)("div",{className:"itemTitle",children:[n.\ud638\uae30,"\ud638\uae30"]}),Object(T.jsx)("span",{className:"itemSubText",children:"Boramae"})]})]})});z.defaultProps={focused:0};var X=z,Y=function(e){var t=e.data,n=Object(c.useContext)(k),a=n.topNum,i=n.type,r=n.setType,l=n.focused,o=n.setFocused,u=n.count,j=n.setCount,d=n.base,m=n.setBase,h=n.setTemp,x=n.temp,p=Object(c.useState)(null),v=Object(b.a)(p,2),g=v[0],N=v[1],w=Object(c.useState)(null),y=Object(b.a)(w,2),S=y[0],C=y[1],B=Object(c.useState)(null),A=Object(b.a)(B,2),P=A[0],G=A[1],M=Object(c.useState)(null),R=Object(b.a)(M,2),H=(R[0],R[1]),K=Object(c.useRef)(null),D=function(e,t,n){var s=Object(c.useState)({data:void 0}),a=Object(b.a)(s,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){var s=0,c=O.a.keys(e[t].\uae30\uc900\uc815\ubcf4),a=e[t].\uac00\uc911\uce58,i=O.a.cloneDeep(n),l=O.a.mergeWith(i,a,(function(e,t){if("N"===e)return 0;s+=t})),o=O.a.cloneDeep(e[t].\ud638\uc218\ucd94\ucc9c);O.a.each(o,(function(e){var t=0;O.a.map(e,(function(e,n){c.find((function(e){return e===n}))&&i&&(t+=e*l[n])})),e.TOTAL=Number((t/s).toFixed(2))}));var u=O.a.sortBy(o,"TOTAL").reverse();r({data:u})}),[e,t,n]),i}(t,a,P),W=function(e,t){var n=Object(c.useState)({col:void 0,row:void 0,end:void 0,gap:void 0,width:void 0,height:void 0}),s=Object(b.a)(n,2),a=s[0],i=s[1],r=L();return Object(c.useEffect)((function(){if(!e)return{col:0,row:0,end:0,gap:0,width:0,height:0};var n=r.width,s=Math.floor(r.width/360),c=1,a=e,l=e-1,o=96,u="list"===t?360:Math.round((n-16*(s-1))/s),j=Math.round(n/u),d=Math.ceil(e/j),b=Math.min(d,3);"grid"===t&&(d>3?(c=b,a=Math.ceil(e/c)):(c=b,a=j),o=16,l=a-Math.round(n/u)),i({col:a,row:c,end:l,gap:o,width:u,height:160})}),[e,t,r]),a}(D.data&&D.data.length,i),J=function(e,t,n){var s=Object(c.useState)({x:0}),a=Object(b.a)(s,2),i=a[0],r=a[1],l=L();return Object(c.useEffect)((function(){var s=0,c="list"===e?.5*l.width:0;s="list"===e?Math.round(c-(n.width+n.gap)*t-.5*n.width):Math.round(c-(n.width+n.gap)*t),r({x:s})}),[e,t,n,l]),i}(i,u,W),z=t[a].\ud544\uc218\ud56d\ubaa9,Y=t[a].\ud3c9\uade0,U=t[a].\ubc30\uc815\uc870\uac74,q=function(e){if(d){var t=I(D.data[l],O.a.keys(z)),n=Object.keys(t).map((function(e){return t[e]}));n[4]=D.data[l].TOTAL,h(n)}else{for(var s=[],c=0;c<5;c++)s[c]=4!==c?x[c]:D.data[l].TOTAL;h(s)}"prev"===e?("list"===i&&l>0&&o(l-1),u>0&&j(u-1)):"next"===e&&("list"===i&&l<W.end&&o(l+1),u<W.end&&j(u+1))},Q=function(){null===g?(N("active"),r("grid")):(N(null),r("list")),C(null),m(!1),o(0),j(0)},Z=function(){var e=[];return O.a.map(P,(function(t,n){var c="check"+n;e.push(Object(T.jsxs)("div",{className:"checkbox",children:[Object(T.jsx)("div",{className:"checkboxInput",children:Object(T.jsx)("input",{id:c,className:"check",value:n,type:"checkbox",checked:"Y"===t&&!0,disabled:z[n],onChange:function(e){return function(e){var t=e.target.value;G(Object(s.a)(Object(s.a)({},P),{},Object(E.a)({},t,e.target.checked?"Y":"N")))}(e)}})}),Object(T.jsxs)("div",{className:"checkboxText",children:[Object(T.jsx)("label",{htmlFor:c,className:"label",children:n}),Object(T.jsx)("span",{className:"comment",children:U[n]})]})]},"check"+n))})),e};return Object(c.useEffect)((function(){G(t[a].\uae30\uc900\uc815\ubcf4),function(){for(var e=[],t=40;t<=60;t++){var n=new Image;n.src="./assets/aircraft/TH50/FA_00"+t,e.push(n)}H(e)}()}),[t,a]),Object(T.jsxs)(F.b,{className:"slider",flipKey:[D.data],children:[D.data?null===S?Object(T.jsx)(F.a,{flipId:"FlippedContainer",translate:!0,children:Object(T.jsxs)("div",{className:f()("slide"),ref:K,children:[Object(T.jsx)("div",{className:f()("list","grid"===i&&"active"),style:{transform:"translateX("+J.x+"px)",gridTemplateColumns:"repeat("+W.col+", "+W.width+"px)",gridTemplateRows:"repeat("+W.row+", "+W.height+"px)",gap:W.gap},children:D.data.map((function(e,t){return Object(T.jsx)(V,{item:e,index:t,focused:l,selectItem:C},"slideItem"+t)}))}),"grid"!==i&&Object(T.jsx)(X,{item:D.data[l]}),"grid"!==i&&Object(T.jsxs)("button",{className:f()("callButton",d&&"active"),onClick:function(){window.returnFn(D.data[l])},children:[Object(T.jsx)("i",{className:"ri-check-fill"}),Object(T.jsx)("span",{className:"callButtonText",children:"\ud638\uae30\uc120\ud0dd"})]})]})},"swiperContainer"):Object(T.jsx)(F.a,{flipId:"FlippedContainer",translate:!0,children:Object(T.jsx)("div",{className:"detail",children:Object(T.jsx)(_,{item:D.data[l],ess:z,aver:Y,checkList:P,active:!1,select:C},"sideItem")})},"swiperContainer"):Object(T.jsx)("div",{children:"NO DATA"}),D.data&&Object(T.jsxs)("div",{className:f()("controller","grid"===i&&"active"),children:[Object(T.jsxs)("button",{className:"controllerButton prevButton",onClick:function(){return 0!==u&&q("prev")},children:[Object(T.jsx)("i",{className:"ri-arrow-left-s-line"}),Object(T.jsx)("span",{className:"controllText",children:"PREV"})]}),Object(T.jsxs)("button",{className:"controllerButton filterButton",onClick:function(){return Q()},children:[Object(T.jsx)("i",{className:"list"===i?"ri-arrow-up-s-line":"ri-close-fill"}),Object(T.jsx)("span",{className:"controllText",children:"\ubc30\uc815\uc870\uac74"})]}),Object(T.jsxs)("button",{className:"controllerButton nextButton",onClick:function(){return u<W.end&&q("next")},children:[Object(T.jsx)("span",{className:"controllText",children:"NEXT"}),Object(T.jsx)("i",{className:"ri-arrow-right-s-line"})]}),Object(T.jsxs)("div",{className:f()("filter",g),children:[Object(T.jsx)("div",{className:"filterClose",onClick:function(){return Q()}}),Object(T.jsx)(Z,{}),Object(T.jsxs)("ul",{className:"filterInfo",children:[Object(T.jsx)("li",{className:"infobox boxdisable",children:"\ud544\uc218"}),Object(T.jsx)("li",{className:"infobox boxchecked",children:"\uc120\ud0dd"}),Object(T.jsx)("li",{className:"infobox boxnormal",children:"\uc120\ud0dd\uac00\ub2a5"})]})]})]})]})};Y.defaultProps={focused:0};var U=Y,q=(n(444),function(e){var t=Object(c.useContext)(k),n=t.type,s=t.base,a=e.loading,i=Object(c.useCallback)((function(){for(var e=[],t=0;t<9;t++)e.push(Object(T.jsx)("span",{className:f()("sliceLine")},"line"+t));return e}),[]);return Object(T.jsxs)("div",{className:f()("base","grid"!==n?null:"active",a&&"loading"),children:[Object(T.jsxs)("div",{className:"baseContents",style:{width:360,height:360},children:[Object(T.jsx)("div",{className:f()("baseBox")}),Object(T.jsx)("div",{className:f()("inBox")}),!a&&Object(T.jsx)("div",{className:"detailButton",children:Object(T.jsxs)("div",{className:f()("detailButtonContainer",s&&"active"),children:[Object(T.jsxs)("span",{className:"detailText",children:["\uc0c1\uc138\uc815\ubcf4",Object(T.jsx)("i",{className:"ri-search-line"})]}),Object(T.jsxs)("span",{className:"detailText",children:["\ub2eb\uae30",Object(T.jsx)("i",{className:"ri-close-line"})]})]})})]}),Object(T.jsx)("div",{className:"slice",children:Object(T.jsx)(i,{},"lineGroup")})]})}),Q=(n(445),function(e){var t=0,n=e.meassage.length||0,s=e.callBack,a=Object(c.useState)([0,0,0,0]),i=Object(b.a)(a,2),r=i[0],l=i[1],o=Object(c.useState)([0,0,0,0]),u=Object(b.a)(o,1)[0],j=Object(c.useState)(0),d=Object(b.a)(j,2),m=d[0],h=d[1],O=Object(c.useState)(function(e){for(var t,n,s=e.slice(),c=s.length;0!==c;)n=Math.floor(Math.random()*c),t=s[c-=1],s[c]=s[n],s[n]=t;return s}(e.meassage)),x=Object(b.a)(O,1)[0],p=Object(c.useState)(e.startMsg),v=Object(b.a)(p,2),g=v[0],N=v[1],w=Object(c.useRef)(null),y=Object(c.useState)(!1),k=Object(b.a)(y,2),S=k[0],C=k[1];return Object(c.useEffect)((function(){var c=function(t,n){for(var s={},c=0,a=0;a<e.title.length;a++){var i=Math.floor(Math.random()*(n-t)+t);s[e.title[a]]=i,c+=i}return{array:s,total:c/e.title.length}};return function a(){if(e.title){clearTimeout(w.current);var i=null;t>n-1?(i=c(100,100),N(e.endMsg)):(i=c(50,100),N(x[t])),t<n?(t++,w.current=setTimeout((function(){a()}),1e3)):(C(!0),w.current=setTimeout((function(){s(!1),clearTimeout(w.current)}),1200)),l(i.array),h(i.total)}}(),function(){return l(null)}}),[t,n,x,e.endMsg,e.title,s]),Object(T.jsx)("div",{className:"load",children:Object(T.jsxs)("div",{className:f()("graph",S&&"active"),children:[Object(T.jsx)(W,{item:r,total:m,cur:u}),Object(T.jsx)("div",{className:"loadingComment",onClick:function(){s(!1)},children:Object(T.jsx)("span",{className:"loadingText",children:g})})]})})}),Z=(n(446),function(e){return Object(c.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:f()("mobile"),children:[Object(T.jsx)("div",{className:"mobileBox"}),Object(T.jsx)("img",{className:"mobileLogo",src:"./assets/other/logo.png",alt:"logo"}),Object(T.jsx)("span",{className:"mobileMent",children:"\uc544\uc27d\uac8c\ub3c4 \ud604\uc7ac \ubaa8\ubc14\uc77c\uc740 \uc9c0\uc6d0 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})]})}),$=function(e){var t=e.match.params.uid,n=Object(c.useState)(window.getProps()),a=Object(b.a)(n,1)[0],i=Object(c.useState)(null),r=Object(b.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)(null),m=Object(b.a)(u,2),h=m[0],p=m[1],v=Object(c.useState)(!0),g=Object(b.a)(v,2),N=g[0],w=g[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.url,fetch(t,{headers:{Accept:"application / json"}}).then((function(e){return e.json()})).then((function(e){return p(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();h?function(){var e=[];O.a.forEach(h,(function(t){e.push(t.\ubd80\ub300)})),o(e)}():e()}),[h,a.url,t]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("header",{className:"header"}),Object(T.jsx)("main",{className:"main",children:Object(T.jsx)("div",{className:f()("contents",N&&"loading"),children:x.isMobile?Object(T.jsx)(Z,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{loading:N}),Object(T.jsx)(C,{data:l}),N?Object(T.jsx)(Q,Object(s.a)({callBack:w},a)):h?Object(T.jsx)(U,{data:h}):Object(T.jsx)("div",{children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),Object(T.jsx)(A,{stepNum:N?0:1})]})})}),Object(T.jsx)("footer",{className:"footer",children:x.isMobile?"\xa9 ROK KF-21 lis, ALL RIGHTS RESERVED":"\xa9 ROK Government KF-21 lis program data, ALL RIGHTS RESERVED"})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,453)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};r.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(y,{children:Object(T.jsx)(l.a,{children:Object(T.jsx)(o.a,{path:"/:uid?",render:function(e){return Object(T.jsx)($,Object(s.a)({},e))}})})})}),document.getElementById("root")),ee()}},[[452,1,2]]]);
//# sourceMappingURL=main.689040f9.chunk.js.map