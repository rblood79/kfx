(this.webpackJsonpkf21=this.webpackJsonpkf21||[]).push([[0],{428:function(e,t,n){},430:function(e,t,n){},432:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){},438:function(e,t,n){},439:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){},445:function(e,t,n){},446:function(e,t,n){},452:function(e,t,n){"use strict";n.r(t);var c=n(48),s=(n(228),n(240),n(2)),a=n.n(s),i=n(117),r=n.n(i),l=n(225),o=n(21),u=(n(428),n(31)),d=n.n(u),j=n(51),b=n(7),f=n(6),m=n.n(f),h=n(19),O=n.n(h),x=(n(430),n(148)),v=(n(432),n(18)),p=n(26),g=n(27),N=n(28),T=n(1),w=a.a.createContext(),y=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(v.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={engine:!1,topNum:0,type:"list",focused:0,base:!1,count:0,width:0,height:0,filter:null,temp:[0,0,0,0,0]},e.setTheme=function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({theme:n?"dark":"light"});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setEngine=function(t){e.setState((function(e){return{engine:t}}))},e.setTopNum=function(t){e.setState((function(e){return{topNum:t}}))},e.setType=function(t){e.setState((function(e){return{type:t}}))},e.setFocused=function(t){e.setState((function(e){return{focused:t}}))},e.setBase=function(t){e.setState((function(e){return{base:t}}))},e.setCount=function(t){e.setState((function(e){return{count:t}}))},e.setWidth=function(t){e.setState((function(e){return{width:t}}))},e.setHeight=function(t){e.setState((function(e){return{height:t}}))},e.setFilter=function(t){e.setState((function(e){return{filter:t}}))},e.setTemp=function(t){e.setState((function(e){return{temp:t}}))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.url,c=t.theme,s=t.engine,a=t.topNum,i=t.type,r=t.focused,l=t.count,o=t.base,u=t.width,d=t.height,j=t.filter,b=t.temp,f=this.setTheme,m=this.setEngine,h=this.setTopNum,O=this.setType,x=this.setFocused,v=this.setCount,p=this.setBase,g=this.setWidth,N=this.setHeight,y=this.setFilter,k=this.setTemp;return Object(T.jsx)(w.Provider,{value:{theme:c,url:n,engine:s,topNum:a,type:i,focused:r,count:l,base:o,width:u,height:d,filter:j,temp:b,setTheme:f,setEngine:m,setTopNum:h,setType:O,setFocused:x,setCount:v,setBase:p,setWidth:g,setHeight:N,setFilter:y,setTemp:k},children:e})}}]),n}(s.Component),k=w,S=(n(92),function(e){var t=Object(s.useContext)(k),n=t.topNum,c=t.setTopNum,a=t.setFocused,i=t.setCount,r=t.base,l=t.engine,o=t.setEngine,u=e.data;return Object(s.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:"head",children:[Object(T.jsx)("div",{className:m()("topLogo",l&&"active"),onClick:function(){return o(!l)},children:Object(T.jsx)("div",{className:"logo",children:Object(T.jsx)("img",{src:"./assets/other/logo.png",alt:"logo"})})}),Object(T.jsxs)("div",{className:m()("topNav",r&&"active"),children:[u&&u.length>0&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("img",{className:"flag",src:u[n].MARK,alt:u[n].\uae30\uc9c0}),Object(T.jsx)("span",{className:"viewText",children:u[n].\uae30\uc9c0})]}),u&&u.map((function(e,t){return Object(T.jsx)("button",{className:m()("topButton",t===n?"active":null),onClick:function(){return!r&&(e=t,a(0),i(0),void c(e));var e},children:e.\ub300\ub300},t)}))]})]})});S.defaultProps={topNum:null,type:"list"};var C=S,B=(n(434),function(e){var t=Object(s.useContext)(k),n=t.base,c=t.type,a=Object(s.useState)([{title:"STEP 1",comment:"Search"},{title:"STEP 2",comment:"Aircraft"},{title:"STEP 3",comment:"Condition"},{title:"STEP 4",comment:"Finish"}]),i=Object(b.a)(a,1)[0],r=function(){var t=e.stepNum;return"grid"===c&&(t=2),t};return Object(s.useEffect)((function(){}),[]),Object(T.jsx)("div",{className:"step",children:Object(T.jsx)("ul",{className:m()("stepGroup",n&&"active"),children:i.map((function(e,t){return Object(T.jsxs)("li",{className:m()("stepItem",t===r()?"active":null),children:[Object(T.jsx)("span",{className:"stepItemTitle",children:e.title}),Object(T.jsx)("span",{className:"stepItemComment",children:e.comment})]},t)}))})})});B.defaultProps={stepNum:1};var E=B,A=n(116),F=(n(435),n(76));function I(e,t,n,c){return"hsla("+((n-t)*(e/100)+t)+", 80%, 40%, "+(c||1)+")"}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return t.forEach((function(t){e.hasOwnProperty(t)&&(n[t]=e[t])})),n}function L(){var e=Object(s.useState)({width:void 0,height:void 0,flag:!1}),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(e,t){var n;return function(c){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(void 0)}),t)}}((function(){c({width:window.innerWidth-32,height:window.innerHeight})}),100);return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}n(438);var M=n(25),R=(n(439),function(e){var t=e.active,n=function(){for(var e=[],t=0;t<4;t++)e.push(Object(T.jsx)("span",{className:m()("boxLine")},t));return e};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{className:m()("boxLineContainer",t&&"active"),children:Object(T.jsx)(n,{})})})}),G=(n(440),function(e){var t=e.value,n=e.color,c=Object(M.useSpring)({from:{number:0},to:{number:t},reset:!0,delay:300}).number,a=function(){for(var e=[],t=0;t<10;t++)e.push(Object(T.jsx)("span",{className:m()("boxGueage")},t));return e};return Object(s.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:m()("boxGueageContainer"),children:[Object(T.jsx)(M.animated.div,{className:"boxGueageBase",style:{width:e.active?c.to((function(e){return e.toFixed(2)+"%"})):t+"%",backgroundColor:n}}),Object(T.jsx)(a,{})]})}),D=(n(441),function(e){var t=Object(s.useContext)(k).engine,n=Object(M.useSpring)({config:{duration:420},x:e.active});return Object(s.useEffect)((function(){}),[]),Object(T.jsx)("div",{className:"imageContainer",children:t?Object(T.jsx)(M.animated.img,{className:"image",alt:"KF21",src:n.x.to({range:[0,1],output:[60,40]}).to((function(e){return"./assets/aircraft/TH50/FA_00"+Math.round(e)})),style:{transform:n.x.to({range:[0,.5,1],output:[1,1,2.8]}).to((function(e){return"scale(".concat(e,")")})),marginTop:n.x.to({range:[0,.5,1],output:[0,0,-42]}).to((function(e){return e}))}}):Object(T.jsx)(M.animated.img,{className:"image",alt:"KF21",src:"./assets/aircraft/TH50/FA_0060",style:{transform:n.x.to({range:[0,.5,1],output:[1,1,1.4]}).to((function(e){return"scale(".concat(e,")")}))}})})});D.defaultProps={test:1};var H=D,K=function(e){var t=Object(s.useContext)(k),n=t.focused,c=t.setFocused,a=t.type,i=t.setBase,r=t.setCount,l=t.setTemp,o=t.temp,u=e.index,d=e.item,j=n===u&&"grid"!==a,b=e.selectItem,f=d.\ud638\uae30ID,h=I(d.TOTAL,0,240),O=Object(M.useSpring)({from:{number:o[4]||0},to:{number:d.TOTAL},reset:!0,delay:200}).number,x=function(){l([0,0,0,0]),b(d),c(u),i(!0),"list"===a&&r(u)};return Object(s.useEffect)((function(){}),[]),Object(T.jsx)(F.a,{flipId:f,translate:!0,children:Object(T.jsxs)("div",{className:m()("listItem",j&&"active"),children:[Object(T.jsx)(R,{active:j}),Object(T.jsx)("div",{className:"aircraftGroup",children:Object(T.jsx)("div",{className:"aircraft",children:Object(T.jsx)(H,{active:j?1:0})})}),n===u&&"list"===a?Object(T.jsx)("div",{className:m()("item"),children:Object(T.jsx)("button",{className:"detailButton",onClick:function(){x()}})}):Object(T.jsxs)("div",{className:m()("item"),children:[Object(T.jsxs)("div",{className:"itemTitle",children:[d.\ud638\uae30,"\ud638\uae30"]}),Object(T.jsx)(G,{value:d.TOTAL,color:h}),Object(T.jsx)(M.animated.div,{className:m()("itemPercent"),style:{color:h},children:"grid"===a?O.to((function(e){return e.toFixed(2)+"%"})):d.TOTAL+"%"}),Object(T.jsx)("div",{className:"itemIndex",children:u<9?"0"+(u+1):u+1}),Object(T.jsx)("button",{className:"detailButtonGrid",onClick:function(){x()}})]})]},d.\ud638\uae30ID)})};K.defaultProps={focused:0};var V=K,W=(n(442),function(e){var t=Object(s.useRef)(null),n=Object(s.useRef)(null),c=Object(s.useState)(null),a=Object(b.a)(c,2),i=a[0],r=a[1],l=Object(s.useState)(null),o=Object(b.a)(l,2),u=o[0],d=o[1],j=e.item,f=e.aver||[0,0,0,0],m=e.total,h=Object.keys(f).map((function(e){return{key:e,value:f[e]}})),x=Object.keys(j).map((function(e){return{key:e,value:j[e]}})),v=I(m,0,240,.48),p=I(m,0,240,1),g=240,N=180;return Object(s.useEffect)((function(){r(t.current),i&&d(i.getContext("2d"));var c,s=[e.cur],a=[e.cur],l=[Object.keys(j).map((function(e){return j[e]}))],o=[h,x],b=!0,f=function(t){u.clearRect(0,0,480,360);var n=1.6,c=[{stroke:"rgba(0,0,0,0.16)",fill:"rgba(0,0,0,0.16)",width:1,shadow:0},{stroke:"rgba(0,0,0,0.24)",fill:"rgba(0,0,0,0.24)",width:.5,shadow:0}];!function(){u.strokeStyle="#ccc",u.lineJoin="round",u.lineWidth=1,u.shadowBlur=0,u.beginPath(),u.moveTo(240.5,20),u.lineTo(240.5,340),u.moveTo(80,180.5),u.lineTo(400,180.5),u.closePath(),u.stroke();var e=[g,20,400,N,g,340,80,N];u.fillPolygon(e,"rgba(0,0,0,0.0)","#a4a4a4"),u.stroke();for(var t=0;t<5;t++){var n=32*t,c=[g,N-n,g+n,N,g,N+n,g-n,N];u.fillPolygon(c,"rgba(0,0,0,0)","#dedede")}u.font="500 14px Noto Sans KR",u.textAlign="center",u.textBaseline="bottom",u.fillStyle="#898989",u.shadowBlur=0,u.fillText(x[0].key,g,17),u.textAlign="left",u.textBaseline="middle",u.fillText(x[1].key,403,N),u.textAlign="center",u.textBaseline="top",u.fillText(x[2].key,g,343),u.textAlign="right",u.textBaseline="middle",u.fillText(x[3].key,77,N)}(),O.a.map(o,(function(s,a){var i=[];0===a?(i=[g,N-n*s[0].value,g+n*s[1].value,N,g,N+n*s[2].value,g-n*s[3].value,N],u.fillPolygon(i,c[a].fill,c[a].stroke,c[a].width,c[a].shadow)):(i=[g,N,g+n*t[1],N,g,N-n*t[0]],u.fillPolygon(i,I(m,0,240,.5),c[a].stroke,c[a].width,c[a].shadow),i=[g,N,g+n*t[1],N,g,N+n*t[2]],u.fillPolygon(i,I(m,0,240,.6),c[a].stroke,c[a].width,c[a].shadow),i=[g,N,g,N+n*t[2],g-n*t[3],N],u.fillPolygon(i,I(m,0,240,.8),c[a].stroke,c[a].width,c[a].shadow),i=[g,N,g,N-n*t[0],g-n*t[3],N],u.fillPolygon(i,I(m,0,240,.6),c[a].stroke,c[a].width,c[a].shadow)),a>0&&e.numView&&(u.font="600 14px GmarketSans",u.textAlign="center",u.textBaseline="bottom",u.fillStyle="#4c4c4c",u.fillText(t[0].toFixed(0),g,188-n*t[0]),u.textBaseline="middle",u.textAlign="left",u.fillText(t[1].toFixed(0),232+n*t[1],N),u.textBaseline="top",u.textAlign="center",u.fillText(t[2].toFixed(0),g,172+n*t[2]),u.textBaseline="middle",u.textAlign="right",u.fillText(t[3].toFixed(0),248-n*t[3],N))}))};u&&(clearTimeout(n.current),function e(){for(var t=0;t<l.length;t+=1)for(var i=0;i<l[t].length;i+=1)c=(l[t][i]-a[t][i])/20,s[t][i]+=c,c&&(b=!1);var r=l.length-1,o=l[r].length-1;Math.round(10*l[r][o])/10===Math.round(10*a[r][o])/10&&(b=!0),b?(f(l[0]),clearTimeout(n.current)):(f(s[0]),n.current=setTimeout((function(){e()}),3))}())}),[i,u,j,v,N,x,p,g,h,m,e.cur,e.numView]),Object(T.jsx)("canvas",{ref:t,className:"canvas",width:480,height:360})});CanvasRenderingContext2D.prototype.fillPolygon=function(e,t,n,c,s){if(!(e.length<=0)){this.strokeStyle=n,this.lineJoin="round",this.lineWidth=c||.5,this.fillStyle=t,this.beginPath(),this.moveTo(e[0],e[1]);for(var a=2;a<e.length-1;a+=2)this.lineTo(e[a],e[a+1]);this.shadowColor=t,this.shadowBlur=s||0,this.closePath(),this.stroke(),this.fill()}};var J=function(e){var t=Object(s.useContext)(k),n=t.type,a=t.setBase,i=t.temp,r=t.base,l=e.item,o=e.select,u=e.checkList,d=e.ess,j=e.aver,f=P(l,O.a.keys(u)),h=P(j,O.a.keys(u)),x=l&&I(l.TOTAL,0,240),v=Object(M.useSpring)({from:{number:i[4]||0},to:{number:l.TOTAL,color:x},reset:!0}),p=v.number,g=v.color,N=Object(s.useState)([{name:"\uc8fc\uae30\uac80\uc0ac",icon:"ri-tools-fill"},{name:"\uc57c\uac04\ube44\ud589\uc5ec\ubd80",icon:"ri-contrast-2-fill"},{name:"\uc678\uc7a5\ubcc0\uacbd",icon:"ri-timer-line"},{name:"\uc2e4\ubb34\uc7a5\uc5ec\ubd80",icon:"ri-flight-takeoff-fill"},{name:"\ud56d\uacf5\uae30\ub4f1\uae09",icon:"ri-todo-line"},{name:"\uac00\ub3d9\uc0c1\ud0dc",icon:"ri-user-heart-line"},{name:"\ucd5c\uadfc\ube44\ud589",icon:"ri-calendar-line"},{name:"\uc8fc\uc694\uacb0\ud568",icon:"ri-pulse-line"}]),w=Object(b.a)(N,1)[0],y=function(e){var t=[];return O.a.map(f,(function(e,n){t.push(Object(T.jsxs)("li",{className:m()("sideItem","N"===u[n]&&"disabled"),children:[Object(T.jsx)("span",{className:"sideItemBase"}),Object(T.jsx)("span",{className:"sideItemIcon",children:Object(T.jsx)("i",{className:O.a.find(w,["name",n]).icon})}),Object(T.jsx)("span",{className:"sideItemTitle",children:n}),Object(T.jsx)("span",{className:"sideItemValue",children:"N"===u[n]?Object(T.jsx)("i",{className:"ri-eye-off-line"}):Object(T.jsxs)("span",{className:"sideItemUd",children:[e,Object(T.jsx)("i",{className:e>h[n]?"ri-arrow-up-s-fill":"ri-arrow-down-s-fill"})]})})]},n))})),t};return Object(s.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:"detailContainer",style:{width:360,height:360},children:[Object(T.jsx)("ul",{className:"detailContents",children:Object(s.createElement)(y,Object(c.a)(Object(c.a)({},l),{},{type:n,key:"sideItem"}))}),Object(T.jsxs)("div",{className:m()("listItem","listItemExpend"),children:[Object(T.jsx)("div",{className:"graph",children:r&&Object(T.jsx)(W,{item:P(l,O.a.keys(d)),aver:P(j,O.a.keys(d)),total:l.TOTAL,cur:i,numView:!0})}),Object(T.jsx)("div",{className:"itemRank"}),Object(T.jsxs)("div",{className:"itemTitle",children:[l&&l.\ud638\uae30,"\ud638\uae30 ",Object(T.jsx)("span",{className:"itemTitleGray",children:"BORAMAE"})]}),Object(T.jsx)("span",{className:"itemPoint",children:"RAITING POINT"}),Object(T.jsx)(M.animated.div,{className:m()("itemPercent"),style:{color:g},children:p.to((function(e){return e.toFixed(2)+"%"}))}),Object(T.jsx)("button",{className:"detailButton",onClick:function(){o(null),a(!1)}})]})]})};J.defaultProps={focused:0};var _=J,z=(n(443),function(e){var t=Object(s.useContext)(k).temp,n=e.item,c=I(n.TOTAL,0,240),a=Object(M.useSpring)({from:{number:t[4]||0},to:{number:n.TOTAL},reset:!0,delay:200}).number;return Object(s.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:m()("focuseItem"),children:[Object(T.jsxs)("div",{className:"itemPercentGroup",children:[Object(T.jsx)(G,{value:n.TOTAL,color:c}),Object(T.jsx)("span",{className:"itemRating",children:"RATING POINT"}),Object(T.jsx)(M.animated.div,{className:m()("itemPercent"),style:{color:c},children:a.to((function(e){return e.toFixed(2)+"%"}))})]}),Object(T.jsxs)("div",{className:"itemTitleGroup",children:[Object(T.jsxs)("div",{className:"itemTitle",children:[n.\ud638\uae30,"\ud638\uae30"]}),Object(T.jsx)("span",{className:"itemSubText",children:"Boramae"})]})]})});z.defaultProps={focused:0};var X=z,Y=function(e){var t=e.data,n=Object(s.useContext)(k),a=n.topNum,i=n.type,r=n.setType,l=n.focused,o=n.setFocused,u=n.count,d=n.setCount,j=n.base,f=n.setBase,h=n.setTemp,x=n.temp,v=Object(s.useState)(null),p=Object(b.a)(v,2),g=p[0],N=p[1],w=Object(s.useState)(null),y=Object(b.a)(w,2),S=y[0],C=y[1],B=Object(s.useState)(null),E=Object(b.a)(B,2),I=E[0],M=E[1],R=Object(s.useState)(null),G=Object(b.a)(R,2),D=(G[0],G[1]),H=Object(s.useRef)(null),K=function(e,t,n){var c=Object(s.useState)({data:void 0}),a=Object(b.a)(c,2),i=a[0],r=a[1];return Object(s.useEffect)((function(){var c=0,s=O.a.keys(e[t].\uae30\uc900\uc815\ubcf4),a=e[t].\uac00\uc911\uce58,i=O.a.cloneDeep(n),l=O.a.mergeWith(i,a,(function(e,t){if("N"===e)return 0;c+=t})),o=O.a.cloneDeep(e[t].\ud638\uc218\ucd94\ucc9c);O.a.each(o,(function(e){var t=0;O.a.map(e,(function(e,n){s.find((function(e){return e===n}))&&i&&(t+=e*l[n])})),e.TOTAL=Number((t/c).toFixed(2))}));var u=O.a.sortBy(o,"TOTAL").reverse();r({data:u})}),[e,t,n]),i}(t,a,I),W=function(e,t){var n=Object(s.useState)({col:void 0,row:void 0,end:void 0,gap:void 0,width:void 0,height:void 0}),c=Object(b.a)(n,2),a=c[0],i=c[1],r=L();return Object(s.useEffect)((function(){if(!e)return{col:0,row:0,end:0,gap:0,width:0,height:0};var n=r.width,c=Math.floor(r.width/360),s=1,a=e,l=e-1,o=96,u="list"===t?360:Math.round((n-16*(c-1))/c),d=Math.round(n/u),j=Math.ceil(e/d),b=Math.min(j,3);"grid"===t&&(j>3?(s=b,a=Math.ceil(e/s)):(s=b,a=d),o=16,l=a-Math.round(n/u)),i({col:a,row:s,end:l,gap:o,width:u,height:160})}),[e,t,r]),a}(K.data&&K.data.length,i),J=function(e,t,n){var c=Object(s.useState)({x:0}),a=Object(b.a)(c,2),i=a[0],r=a[1],l=L();return Object(s.useEffect)((function(){var c=0,s="list"===e?.5*l.width:0;c="list"===e?Math.round(s-(n.width+n.gap)*t-.5*n.width):Math.round(s-(n.width+n.gap)*t),r({x:c})}),[e,t,n,l]),i}(i,u,W),z=t[a].\ud544\uc218\ud56d\ubaa9,Y=t[a].\ud3c9\uade0,U=t[a].\ubc30\uc815\uc870\uac74,q=function(e){if(j){var t=P(K.data[l],O.a.keys(z)),n=Object.keys(t).map((function(e){return t[e]}));n[4]=K.data[l].TOTAL,h(n)}else{for(var c=[],s=0;s<5;s++)c[s]=4!==s?x[s]:K.data[l].TOTAL;h(c)}"prev"===e?("list"===i&&l>0&&o(l-1),u>0&&d(u-1)):"next"===e&&("list"===i&&l<W.end&&o(l+1),u<W.end&&d(u+1))},Q=function(){null===g?(N("active"),r("grid")):(N(null),r("list")),C(null),f(!1),o(0),d(0)},Z=function(){var e=[];return O.a.map(I,(function(t,n){var s="check"+n;e.push(Object(T.jsxs)("div",{className:"checkbox",children:[Object(T.jsx)("div",{className:"checkboxInput",children:Object(T.jsx)("input",{id:s,className:"check",value:n,type:"checkbox",checked:"Y"===t&&!0,disabled:z[n],onChange:function(e){return function(e){var t=e.target.value;M(Object(c.a)(Object(c.a)({},I),{},Object(A.a)({},t,e.target.checked?"Y":"N")))}(e)}})}),Object(T.jsxs)("div",{className:"checkboxText",children:[Object(T.jsx)("label",{htmlFor:s,className:"label",children:n}),Object(T.jsx)("span",{className:"comment",children:U[n]})]})]},"check"+n))})),e};return Object(s.useEffect)((function(){M(t[a].\uae30\uc900\uc815\ubcf4),function(){for(var e=[],t=40;t<=60;t++){var n=new Image;n.src="./assets/aircraft/TH50/FA_00"+t,e.push(n)}D(e)}()}),[t,a]),Object(T.jsxs)(F.b,{className:"slider",flipKey:[K.data],children:[K.data?null===S?Object(T.jsx)(F.a,{flipId:"FlippedContainer",translate:!0,children:Object(T.jsxs)("div",{className:m()("slide"),ref:H,children:[Object(T.jsx)("div",{className:m()("list","grid"===i&&"active"),style:{transform:"translateX("+J.x+"px)",gridTemplateColumns:"repeat("+W.col+", "+W.width+"px)",gridTemplateRows:"repeat("+W.row+", "+W.height+"px)",gap:W.gap},children:K.data.map((function(e,t){return Object(T.jsx)(V,{item:e,index:t,focused:l,selectItem:C},"slideItem"+t)}))}),"grid"!==i&&Object(T.jsx)(X,{item:K.data[l]}),"grid"!==i&&Object(T.jsxs)("button",{className:m()("callButton",j&&"active"),onClick:function(){window.returnFn(K.data[l])},children:[Object(T.jsx)("i",{className:"ri-check-fill"}),Object(T.jsx)("span",{className:"callButtonText",children:"\ud638\uae30\uc120\ud0dd"})]})]})},"swiperContainer"):Object(T.jsx)(F.a,{flipId:"FlippedContainer",translate:!0,children:Object(T.jsx)("div",{className:"detail",children:Object(T.jsx)(_,{item:K.data[l],ess:z,aver:Y,checkList:I,active:!1,select:C},"sideItem")})},"swiperContainer"):Object(T.jsx)("div",{children:"NO DATA"}),K.data&&Object(T.jsxs)("div",{className:m()("controller","grid"===i&&"active"),children:[Object(T.jsxs)("button",{className:"controllerButton prevButton",onClick:function(){return 0!==u&&q("prev")},children:[Object(T.jsx)("i",{className:"ri-arrow-left-s-line"}),Object(T.jsx)("span",{className:"controllText",children:"PREV"})]}),Object(T.jsxs)("button",{className:"controllerButton filterButton",onClick:function(){return Q()},children:[Object(T.jsx)("i",{className:"list"===i?"ri-arrow-up-s-line":"ri-close-fill"}),Object(T.jsx)("span",{className:"controllText",children:"\ubc30\uc815\uc870\uac74"})]}),Object(T.jsxs)("button",{className:"controllerButton nextButton",onClick:function(){return u<W.end&&q("next")},children:[Object(T.jsx)("span",{className:"controllText",children:"NEXT"}),Object(T.jsx)("i",{className:"ri-arrow-right-s-line"})]}),Object(T.jsxs)("div",{className:m()("filter",g),children:[Object(T.jsx)("div",{className:"filterClose",onClick:function(){return Q()}}),Object(T.jsx)(Z,{}),Object(T.jsxs)("ul",{className:"filterInfo",children:[Object(T.jsx)("li",{className:"infobox boxdisable",children:"\ud544\uc218"}),Object(T.jsx)("li",{className:"infobox boxchecked",children:"\uc120\ud0dd"}),Object(T.jsx)("li",{className:"infobox boxnormal",children:"\uc120\ud0dd\uac00\ub2a5"})]})]})]})]})};Y.defaultProps={focused:0};var U=Y,q=(n(444),function(e){var t=Object(s.useContext)(k),n=t.type,c=t.base,a=e.loading,i=function(){for(var e=[],t=0;t<9;t++)e.push(Object(T.jsx)("span",{className:m()("sliceLine")},t));return e};return Object(s.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:m()("base","grid"!==n?null:"active",a&&"loading"),children:[Object(T.jsxs)("div",{className:"baseContents",style:{width:360,height:360},children:[Object(T.jsx)("div",{className:m()("baseBox")}),Object(T.jsx)("div",{className:m()("inBox")}),!a&&Object(T.jsx)("div",{className:"detailButton",children:Object(T.jsxs)("div",{className:m()("detailButtonContainer",c&&"active"),children:[Object(T.jsxs)("span",{className:"detailText",children:["\uc0c1\uc138\uc815\ubcf4",Object(T.jsx)("i",{className:"ri-search-line"})]}),Object(T.jsxs)("span",{className:"detailText",children:["\ub2eb\uae30",Object(T.jsx)("i",{className:"ri-close-line"})]})]})})]}),Object(T.jsx)("div",{className:"slice",children:Object(T.jsx)(i,{})})]})}),Q=(n(445),function(e){var t=0,n=e.meassage.length||0,c=e.callBack,a=Object(s.useState)([0,0,0,0]),i=Object(b.a)(a,2),r=i[0],l=i[1],o=Object(s.useState)([0,0,0,0]),u=Object(b.a)(o,1)[0],d=Object(s.useState)(0),j=Object(b.a)(d,2),f=j[0],h=j[1],O=Object(s.useState)(function(e){for(var t,n,c=e.slice(),s=c.length;0!==s;)n=Math.floor(Math.random()*s),t=c[s-=1],c[s]=c[n],c[n]=t;return c}(e.meassage)),x=Object(b.a)(O,1)[0],v=Object(s.useState)(e.startMsg),p=Object(b.a)(v,2),g=p[0],N=p[1],w=Object(s.useRef)(null),y=Object(s.useState)(!1),k=Object(b.a)(y,2),S=k[0],C=k[1];return Object(s.useEffect)((function(){var s=function(t,n){for(var c={},s=0,a=0;a<e.title.length;a++){var i=Math.floor(Math.random()*(n-t)+t);c[e.title[a]]=i,s+=i}return{array:c,total:s/e.title.length}};return function a(){if(e.title){clearTimeout(w.current);var i=null;t>n-1?(i=s(100,100),N(e.endMsg)):(i=s(50,100),N(x[t])),t<n?(t++,w.current=setTimeout((function(){a()}),1e3)):(C(!0),w.current=setTimeout((function(){c(!1),clearTimeout(w.current)}),1200)),l(i.array),h(i.total)}}(),function(){return l(null)}}),[t,n,x,e.endMsg,e.title,c]),Object(T.jsx)("div",{className:"load",children:Object(T.jsxs)("div",{className:m()("graph",S&&"active"),children:[Object(T.jsx)(W,{item:r,total:f,cur:u}),Object(T.jsx)("div",{className:"loadingComment",onClick:function(){c(!1)},children:Object(T.jsx)("span",{className:"loadingText",children:g})})]})})}),Z=(n(446),function(e){return Object(s.useEffect)((function(){}),[]),Object(T.jsxs)("div",{className:m()("mobile"),children:[Object(T.jsx)("div",{className:"mobileBox"}),Object(T.jsx)("img",{className:"mobileLogo",src:"./assets/other/logo.png",alt:"logo"}),Object(T.jsx)("span",{className:"mobileMent",children:"\uc544\uc27d\uac8c\ub3c4 \ud604\uc7ac \ubaa8\ubc14\uc77c\uc740 \uc9c0\uc6d0 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})]})}),$=function(e){var t=e.match.params.uid,n=Object(s.useState)(window.getProps()),a=Object(b.a)(n,1)[0],i=Object(s.useState)(null),r=Object(b.a)(i,2),l=r[0],o=r[1],u=Object(s.useState)(null),f=Object(b.a)(u,2),h=f[0],v=f[1],p=Object(s.useState)(!0),g=Object(b.a)(p,2),N=g[0],w=g[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.url,fetch(t,{headers:{Accept:"application / json"}}).then((function(e){return e.json()})).then((function(e){return v(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();h?function(){var e=[];O.a.forEach(h,(function(t){e.push(t.\ubd80\ub300)})),o(e)}():e()}),[h,a.url,t]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("header",{className:"header"}),Object(T.jsx)("main",{className:"main",children:Object(T.jsx)("div",{className:m()("contents",N&&"loading"),children:x.isMobile?Object(T.jsx)(Z,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{loading:N}),Object(T.jsx)(C,{data:l}),N?Object(T.jsx)(Q,Object(c.a)({callBack:w},a)):h?Object(T.jsx)(U,{data:h}):Object(T.jsx)("div",{children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),Object(T.jsx)(E,{stepNum:N?0:1})]})})}),Object(T.jsx)("footer",{className:"footer",children:x.isMobile?"\xa9 ROK KF-21 lis, ALL RIGHTS RESERVED":"\xa9 ROK Government KF-21 lis program data, ALL RIGHTS RESERVED"})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,453)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(y,{children:Object(T.jsx)(l.a,{children:Object(T.jsx)(o.a,{path:"/:uid?",render:function(e){return Object(T.jsx)($,Object(c.a)({},e))}})})})}),document.getElementById("root")),ee()}},[[452,1,2]]]);
//# sourceMappingURL=main.a00b33d7.chunk.js.map