(this.webpackJsonpaviabit=this.webpackJsonpaviabit||[]).push([[0],{412:function(t,e,n){"use strict";n.r(e);var i,a=n(0),c=n.n(a),l=n(18),r=n(62),o=n(39),s=n(226),d=n(227),h=n(257),j=n(24),u="/",g="/details",m="/flights",b="YEARS",p="MONTHS",f=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],x=n(22),O=n(446),y=n(472),N=n(447),T=n(444),v=n(474),F=n(448),k=n(2),w=Object(T.a)({root:{marginBottom:"13px"},userName:{color:"#000000",fontWeight:700},userMail:{color:"#676565",fontWeight:400}}),B=function(){var t=w(),e=Object(O.a)("(min-width: 600px)");return Object(k.jsxs)(N.a,{container:!0,spacing:5,wrap:"nowrap",alignContent:"space-between",item:!0,className:t.root,style:e?{margin:"29px 0"}:null,children:[Object(k.jsx)(N.a,{item:!0,children:Object(k.jsx)(v.a,{alt:"Sheldon Cooper",style:{width:"60px",height:"60px"},src:"./img/avatar.jpg"})}),Object(k.jsx)(N.a,{container:!0,alignItems:"center",item:!0,children:Object(k.jsxs)(N.a,{item:!0,children:[Object(k.jsx)(F.a,{className:t.userName,variant:"body1",children:"\u0428\u0435\u043b\u0434\u043e\u043d \u041a\u0443\u043f\u0435\u0440"}),Object(k.jsx)(F.a,{className:t.userMail,variant:"body2",children:"sheldon.cooper@gmail.com"})]})})]})},S=n(449),W=n(450),I=n(451),E=n(452),C=n(453),A=n(454),L=n(455),H=n(75),_=n(28),D="LOAD_FLIGHTS",M="CHANGE_STATISTIC_TYPE",R="CHANGE_FILTER",G="SEARCH_NEXT_FLIGHT",z="CHANGE_STATS",Y="RESET_STATS",P=function(t){return{type:"LOAD_FLIGHTS",payload:t}},J=function(t){return{type:"CHANGE_STATISTIC_TYPE",payload:t}},K=function(t){return{type:"CHANGE_FILTER",payload:t}},U=function(){return{type:"SEARCH_NEXT_FLIGHT"}},V=function(t){return{type:"CHANGE_STATS",payload:t}},X=function(){return{type:"RESET_STATS"}},q=function(t,e){return t.dateFlight-e.dateFlight>0?1:t.dateFlight-e.dateFlight<0?-1:0},Q=n(255),Z={MONTH:function(t){return t.getMonth()},YEAR:function(t){return t.getFullYear()}},$=function(t,e){return t.reduce((function(t,n){var i=Z[e](n.dateFlight);return t[i]=t[i]||[],t[i].push(n),t}),{})},tt=function(t,e,n){var i=f.reduce((function(t,e){return t[e]=[],t}),{});return t[n]?t[n].reduce((function(t,n){return t[f[Z[e](n.dateFlight)]].push(n),t}),i):i},et=function(t){return t.filter((function(t){return!!t.type}))},nt=function(t,e,n){var i=Object.keys(t);switch(e){case b:return i.reduce((function(e,n){var i=t[n].reduce((function(t,e){return t.timeFlight+=e.timeFlight||0,t.timeWork+=e.timeWork||0,t.timeBlock+=e.timeBlock||0,t.timeNight+=e.timeNight||0,t.timeBiologicalNight+=e.timeBiologicalNight||0,t}),{timeFlight:0,timeWork:0,timeBlock:0,timeNight:0,timeBiologicalNight:0,name:n,interval:n});return e.push(i),e}),[]);case p:return f.reduce((function(e,i){var a=t[i].reduce((function(t,e){return t.timeFlight+=e.timeFlight||0,t.timeWork+=e.timeWork||0,t.timeBlock+=e.timeBlock||0,t.timeNight+=e.timeNight||0,t.timeBiologicalNight+=e.timeBiologicalNight||0,t}),{timeFlight:0,timeWork:0,timeBlock:0,timeNight:0,timeBiologicalNight:0,name:i,interval:"".concat(i," ").concat(n)});return e.push(a),e}),[]);default:return t}},it=function(t,e,n){var i=$(t,"YEAR");return e===b?i:tt(i,"MONTH",n)},at=function(t){return Math.floor(t/3600)},ct=function(t,e,n){var i=function(t){return t.filter((function(t){return!t.type}))}(t),a=et(t),c=it(i,e,n),l=it(a,e,n);return function(t,e){var n=new Set;return t.forEach((function(t){n.add(t.name)})),e.forEach((function(t){n.add(t.name)})),Object(Q.a)(n).reduce((function(n,i){var a={},c=t.filter((function(t){return t.name===i})),l=e.filter((function(t){return t.name===i}));return c.length&&(a.actualTimeFlight=at(c[0].timeFlight),a.actualTimeWork=at(c[0].timeWork),a.actualTimeBlock=at(c[0].timeBlock),a.actualTimeNight=at(c[0].timeNight),a.actualTimeBiologicalNight=at(c[0].timeBiologicalNight),a.interval=c[0].interval),l.length&&(a.plannedTimeFlight=at(l[0].timeFlight),a.plannedTimeWork=at(l[0].timeWork),a.plannedTimeBlock=at(l[0].timeBlock),a.plannedTimeNight=at(l[0].timeNight),a.plannedTimeBiologicalNight=at(l[0].timeBiologicalNight),a.interval=l[0].interval),a.name=i,n.push(a),n}),[])}(nt(c,e,n),nt(l,e,n))||[]},lt=function(t){var e=et(t);return e.length?function(t){for(var e=new Date,n=[e.getFullYear(),f[e.getMonth()]],i=n[0],a=n[1],c=$(t,"YEAR"),l=tt(c,"MONTH",i),r=l[a].filter((function(t){return t.dateFlight>e})).sort(q).slice(-1)[0];!r;){if(12===(a=e.getMonth()+1)){r="not found";break}r=l[f[a]].filter((function(t){return t.dateFlight>e})).sort(q).slice(-1)[0]}return r}(e):"not found"},rt=function(t){return Object(_.a)(Object(_.a)({},t),{},{dateFlight:new Date(t.dateFlight)})},ot={flights:[],isFlightsLoaded:!1,nextFlight:{date:"",flightNumber:"",plnType:"",pln:""},isNextFlightFinded:!1,noNextFlight:!1},st={statisticType:b,filter:(new Date).getFullYear(),statsByInterval:{actualTimeBiologicalNight:0,actualTimeBlock:0,actualTimeFlight:0,actualTimeNight:0,actualTimeWork:0,name:"",interval:"",plannedTimeBiologicalNight:0,plannedTimeBlock:0,plannedTimeFlight:0,plannedTimeNight:0,plannedTimeWork:0}},dt="FLIGHTS",ht="STATISTIC",jt=Object(r.combineReducers)((i={},Object(H.a)(i,dt,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:var n=e.payload.map((function(t){return rt(t)}));return Object(_.a)(Object(_.a)({},t),{},{flights:n,isFlightsLoaded:!0});case G:var i=lt(t.flights);return"not found"===i?Object(_.a)(Object(_.a)({},t),{},{nextFlight:{date:"",flightNumber:"",plnType:"",pln:""},isNextFlightFinded:!1,noNextFlight:!0}):Object(_.a)(Object(_.a)({},t),{},{nextFlight:i,isNextFlightFinded:!0,noNextFlight:!1});default:return t}})),Object(H.a)(i,ht,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case M:return Object(_.a)(Object(_.a)({},t),{},{statisticType:e.payload});case R:return Object(_.a)(Object(_.a)({},t),{},{filter:e.payload});case z:return Object(_.a)(Object(_.a)({},t),{},{statsByInterval:e.payload});case Y:return Object(_.a)(Object(_.a)({},t),{},{statsByInterval:{actualTimeBiologicalNight:0,actualTimeBlock:0,actualTimeFlight:0,actualTimeNight:0,actualTimeWork:0,name:"",interval:"",plannedTimeBiologicalNight:0,plannedTimeBlock:0,plannedTimeFlight:0,plannedTimeNight:0,plannedTimeWork:0}});default:return t}})),i)),ut=Object(T.a)({grid:{width:"100%",borderBottom:"1px solid rgba(16, 66, 195, 0.15)",paddingBottom:"24px"},card:{boxShadow:"none"},media:{maxWidth:"257px",marginBottom:"15px",backgroundSize:"contain"},row:{display:"flex",justifyContent:"space-between",marginBottom:"9px"},th:{border:"none",paddingLeft:0,paddingTop:"5px",paddingBottom:"5px",color:"#000000",fontWeight:700},td:{border:"none",paddingRight:0,paddingTop:"5px",paddingBottom:"5px",color:"#676565",fontWeight:400}}),gt=function(t,e){return{name:t,data:e}},mt=Object(o.b)((function(t){return{nextFlight:t[dt].nextFlight,isFlightsLoaded:t[dt].isFlightsLoaded,isNextFlightFinded:t[dt].isNextFlightFinded}}),(function(t){return{searchNextFlight:function(){t(U())}}}))((function(t){var e=t.nextFlight,n=t.isNextFlightFinded,i=t.searchNextFlight,c=t.isFlightsLoaded,l=ut(),r=Object(O.a)("(min-width: 600px)"),o=Object(a.useState)({date:"",flightNumber:"",plnType:"",pln:""}),s=Object(x.a)(o,2),d=s[0],h=s[1],j=d.date,u=d.flightNumber,g=d.plnType,m=d.pln;Object(a.useEffect)((function(){!n&&c&&i()}),[n,i,c]),Object(a.useEffect)((function(){n&&h({date:"".concat(e.dateFlight.toLocaleTimeString().slice(0,5)," ").concat(e.dateFlight.getDate()," ").concat(f[e.dateFlight.getMonth()]," ").concat(e.dateFlight.getFullYear()),flightNumber:e.flight,plnType:e.plnType,pln:e.pln})}),[n,e,h]);var b=[gt("\u0414\u0430\u0442\u0430 \u0440\u0435\u0439\u0441\u0430",j),gt("\u041d\u043e\u043c\u0435\u0440 \u0440\u0435\u0439\u0441\u0430",u),gt("\u0422\u0438\u043f \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u043e\u0433\u043e \u0441\u0443\u0434\u043d\u0430",g),gt("\u0411\u043e\u0440\u0442\u043e\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0443\u0434\u043d\u0430",m)];return n?Object(k.jsxs)(N.a,{item:!0,className:l.grid,style:r?{borderBottom:"none"}:null,children:[Object(k.jsx)(S.a,{className:l.card,align:"center",children:Object(k.jsx)(W.a,{component:"img",alt:"Plane type",width:r?372:257,height:r?104:89,image:"./img/plane.png",title:"Plane type",className:l.media,style:r?{maxWidth:"372px"}:null})}),Object(k.jsx)(I.a,{style:{padding:0},children:Object(k.jsx)(E.a,{children:Object(k.jsx)(C.a,{children:b.map((function(t){return Object(k.jsxs)(A.a,{className:l.row,children:[Object(k.jsx)(L.a,{component:"th",variant:"head",className:l.th,children:t.name}),Object(k.jsx)(L.a,{variant:"body",className:l.td,align:"right",children:t.data})]},t.name)}))})})})]}):Object(k.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})),bt=n(475),pt=n(457),ft=n(458),xt=n(229),Ot=n.n(xt),yt=Object(T.a)({root:{boxSizing:"content-box",boxShadow:"none",maxWidth:"100%"},accordionItem:{padding:"0"},label:{fontWeight:700},userMail:{color:"#676565",fontWeight:400},expandIcon:{position:"relative",color:"#4e85f5"}}),Nt=function(t){var e=t.children,n=t.renderDetails,i=yt();return Object(k.jsx)(N.a,{item:!0,children:Object(k.jsxs)(bt.a,{className:i.root,children:[Object(k.jsx)(pt.a,{expandIcon:Object(k.jsx)(Ot.a,{className:i.expandIcon}),"aria-controls":"panel1a-content",id:"panel1a-header",className:i.accordionItem,children:Object(k.jsx)(F.a,{className:i.label,children:e})}),Object(k.jsx)(ft.a,{className:i.accordionItem,children:n()})]})})},Tt=n(478),vt=n(461),Ft=n(465),kt=n(114),wt=n(247),Bt=n(248),St=n(256),Wt=n(170),It=Object(Wt.a)((function(t){return t[dt].flights}),(function(t){return t[ht].statisticType}),(function(t){return t[ht].filter}),(function(t,e,n){return ct(t,e,n)})),Et=Object(Wt.a)((function(t){return t[dt].flights}),(function(t){return function(t){var e=$(t,"YEAR");return Object.keys(e)}(t)})),Ct=n(476),At=n(459),Lt=n(7),Ht=Object(T.a)({labelFont:{padding:"5px",fontSize:"12px",fontWeight:700,borderRadius:"5px"},gridItem:{flexBasis:"33%",width:"33%",flexGrow:"1"}}),_t=Object(Lt.a)({switchBase:{color:"#4e85f5",margin:"0 auto"},checked:{},track:{backgroundColor:"#4e85f5"}})(Ct.a),Dt=function(t){var e=t.changeHandler,n=t.labels,i=Ht(),c=Object(x.a)(n,2),l=c[0],r=c[1],o=Object(a.useState)({checkedA:!1}),s=Object(x.a)(o,2),d=s[0],h=s[1];return Object(k.jsx)(At.a,{style:{padding:"0"},children:Object(k.jsxs)(N.a,{component:"label",container:!0,justify:"space-between",alignItems:"center",children:[Object(k.jsx)(N.a,{item:!0,className:i.gridItem,style:{textAlign:"right"},children:Object(k.jsx)(F.a,{className:i.labelFont,component:"p",children:l})}),Object(k.jsx)(N.a,{item:!0,children:Object(k.jsx)(_t,{checked:d.checkedA,onChange:function(t){h(Object(_.a)(Object(_.a)({},d),{},Object(H.a)({},t.target.name,t.target.checked))),e()},name:"checkedA",inputProps:{"aria-label":"statistic type toggle"},className:i.switchBase})}),Object(k.jsx)(N.a,{item:!0,className:i.gridItem,children:Object(k.jsx)(F.a,{className:i.labelFont,component:"p",children:r})})]})})},Mt=n(460),Rt=n(471),Gt=n(477),zt=Object(T.a)((function(t){return{grid:{justifyContent:"space-between"},formControl:{margin:t.spacing(1),minWidth:120,background:"#ffffff"},select:{color:"black",height:"20px"},selectEmpty:{marginTop:t.spacing(2)}}})),Yt=Object(o.b)((function(t){return{filter:t[ht].filter,years:Et(t)}}),(function(t){return{setFilter:function(e){t(K(e))}}}))((function(t){var e=t.filter,n=t.setFilter,i=t.years,a=zt();return Object(k.jsx)(At.a,{style:{padding:"0"},children:Object(k.jsxs)(N.a,{container:!0,className:a.grid,children:[Object(k.jsx)(F.a,{component:"p",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434"}),Object(k.jsx)(Mt.a,{variant:"outlined",className:a.formControl,children:Object(k.jsx)(Rt.a,{className:a.select,labelId:"select-label",id:"select-outlined",value:e,defaultValue:e,onChange:function(t){n(+t.target.value)},label:"Year",children:i.map((function(t,e){return Object(k.jsx)(Gt.a,{value:t,children:t},"".concat(t,"-").concat(e))}))})})]})})})),Pt=["\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b","\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u043b\u0451\u0442\u0430"],Jt=["\u0413\u043e\u0434\u044b","\u041c\u0435\u0441\u044f\u0446\u044b"],Kt=Object(o.b)((function(t){return{chartData:It(t)}}),(function(t){return{toggleStatisticType:function(e){t(J(e))}}}))((function(t){var e=t.chartData,n=t.toggleStatisticType,i=Object(j.f)(),c=Object(a.useState)(!1),l=Object(x.a)(c,2),r=l[0],o=l[1],s=Object(a.useState)(!1),d=Object(x.a)(s,2),h=d[0],u=d[1],m=h?{marginBottom:"0"}:{marginBottom:"30px"},f=Object(a.useCallback)((function(){o(!r)}),[r]),O=Object(a.useCallback)((function(){u(!h)}),[h]);Object(a.useEffect)((function(){n(h?p:b)}),[h,n]);var y=Object(a.useCallback)((function(t){i.push("".concat(g,"/").concat(t.payload.interval)),window.scrollTo(0,0)}),[i]);return Object(k.jsxs)(N.a,{container:!0,children:[Object(k.jsx)(Dt,{changeHandler:O,labels:Jt}),Object(k.jsx)(Dt,{style:m,changeHandler:f,labels:Pt}),Object(k.jsx)(N.a,{item:!0,style:{padding:"10px 0",minHeight:"50px",minWidth:"100%"},children:h&&Object(k.jsx)(Yt,{})}),Object(k.jsx)(N.a,{item:!0,style:{padding:"10px 0",minHeight:"300px",minWidth:"100%"},children:Object(k.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(k.jsx)(Tt.a,{children:Object(k.jsxs)(vt.a,{width:280,height:320,data:e,margin:{left:-25,right:10},children:[Object(k.jsx)(Ft.a,{strokeDasharray:"3 3"}),Object(k.jsx)(kt.a,{wrapperStyle:{position:"relative"},layout:"horizontal",verticalAlign:"bottom",align:"right"}),Object(k.jsx)(wt.a,{dataKey:"name"}),Object(k.jsx)(Bt.a,{}),r&&Object(k.jsx)(St.a,{onClick:y,barSize:10,dataKey:"actualTimeFlight",name:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u043b\u0435\u0442\u0430",stackId:"a",fill:"rgb(78, 133, 245)"}),r&&Object(k.jsx)(St.a,{onClick:y,barSize:10,dataKey:"plannedTimeFlight",name:"\u041f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u043b\u0435\u0442\u0430",stackId:"a",fill:"rgba(78, 133, 245, 0.6)"}),!r&&Object(k.jsx)(St.a,{onClick:y,barSize:10,dataKey:"actualTimeWork",name:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",stackId:"a",fill:"rgb(78, 133, 245)"}),!r&&Object(k.jsx)(St.a,{onClick:y,barSize:10,dataKey:"plannedTimeWork",name:"\u041f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",stackId:"a",fill:"rgba(78, 133, 245, 0.6)"})]})})})})]})})),Ut=Object(T.a)({label:{color:"#676565",fontWeight:400,fontSize:"12px"},userMail:{color:"#676565",fontWeight:400},expandIcon:{position:"relative",color:"#4e85f5"}}),Vt=function(){var t=Ut();return Object(k.jsxs)(N.a,{container:!0,children:[Object(k.jsx)(F.a,{className:t.label,children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043d\u0430\u043b\u0435\u0442\u0430 \u0438 \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(k.jsx)(Kt,{})]})},Xt=n(466),qt=Object(T.a)({button:{backgroundColor:"#f1f1f1",border:"1px solid #c4c4c4",boxShadow:"none",textTransform:"unset",fontWeight:700}}),Qt=function(t){var e=t.clickHandler,n=t.children,i=qt();return Object(k.jsx)(Xt.a,{onClick:e,variant:"contained",className:i.button,children:n})},Zt=function(){return Object(k.jsx)(F.a,{children:"\u041d\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0451\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"})},$t=Object(T.a)({header:{backgroundColor:"#4e85f5",padding:"28px 0 8px 20px"}}),te=function(t){var e=t.children,n=Object(O.a)("(min-width: 600px)"),i=$t();return Object(k.jsx)(y.a,{className:i.header,style:n?{background:"url(/img/wing.png)",padding:"50px 0 30px 0"}:null,children:Object(k.jsx)(At.a,{maxWidth:n?"xl":"xs",style:n?{padding:"0 17%"}:null,children:Object(k.jsx)(F.a,{className:i.title,color:n?"textSecondary":"textPrimary",variant:n?"h4":"h5",component:"h1",gutterBottom:!0,children:e})})})},ee=Object(T.a)({main:{padding:"15px 20px 13px 20px"},title:{fontWeight:700,margin:0},grid:{flexDirection:"column",wrap:"wrap"},gridItem:{width:"100%"}}),ne=Object(o.b)((function(t){return{noNextFlight:t[dt].noNextFlight}}))((function(t){var e=t.noNextFlight,n=ee(),i=Object(O.a)("(min-width: 600px)"),c=Object(a.useState)(!1),l=Object(x.a)(c,2),r=l[0],o=l[1],s=Object(a.useCallback)((function(){o(!r)}),[r]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(te,{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(k.jsx)(y.a,{className:n.main,style:i?{padding:"0 17%"}:null,children:Object(k.jsxs)(N.a,{container:!0,className:n.grid,style:i?{height:"593px"}:null,children:[Object(k.jsxs)(N.a,{item:!0,container:!0,className:n.gridItem,style:i?{flexDirection:"row",borderBottom:"1px solid rgba(16, 66, 195, 0.15)"}:null,children:[Object(k.jsx)(N.a,{item:!0,style:{width:"50%"},children:Object(k.jsx)(B,{})}),Object(k.jsx)(N.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",justify:"center",style:{width:"50%"},children:i&&Object(k.jsx)(Qt,{clickHandler:s,children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043d\u0430\u043b\u0451\u0442\u0430"})})]}),Object(k.jsxs)(N.a,{container:!0,justify:"space-between",style:{paddingTop:"20px"},children:[Object(k.jsx)(N.a,{item:!0,className:n.gridItem,style:i?{width:"45%",padding:"29px 0 33px 0"}:null,children:e?Object(k.jsx)(Zt,{}):Object(k.jsx)(mt,{})}),i?null:Object(k.jsx)(Nt,{style:{width:"350px"},renderDetails:function(){return Object(k.jsx)(Vt,{})},children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043d\u0430\u043b\u0451\u0442\u0430"}),r?Object(k.jsx)(N.a,{item:!0,style:i?{width:"45%"}:null,children:Object(k.jsx)(Kt,{})}):null]})]})})]})})),ie=n(467),ae=n(415),ce=Object(T.a)({row:{display:"flex",width:"100%",justifyContent:"space-between"},th:{border:"none",padding:"10px",color:"#000000",fontWeight:700},td:{border:"none",padding:"10px",color:"#676565",fontWeight:400},title:{marginBottom:"5px"}}),le=function(t){var e=t.rows,n=t.title,i=ce();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(F.a,{className:i.title,variant:"h6",color:"textSecondary",id:"tableTitle",component:"h3",children:n}),Object(k.jsx)(ie.a,{component:ae.a,style:{width:"100%"},children:Object(k.jsx)(E.a,{children:Object(k.jsx)(C.a,{children:e.map((function(t){return Object(k.jsxs)(A.a,{className:i.row,children:[Object(k.jsx)(L.a,{component:"th",variant:"head",className:i.th,children:t.name}),Object(k.jsx)(L.a,{variant:"body",className:i.td,align:"right",children:t.data})]},t.name)}))})})})]})},re=n(456),oe=n(416),se=n(250),de=n.n(se),he=n(249),je=n.n(he),ue={dateFlight:"\u0414\u0430\u0442\u0430",flight:"\u041d\u043e\u043c\u0435\u0440 \u0440\u0435\u0439\u0441\u0430",pln:"\u0411\u043e\u0440\u0442\u043e\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0412\u0421",plnType:"\u0422\u0438\u043f \u0412\u0421",from:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c \u0432\u0437\u043b\u0435\u0442\u0430",fromLat:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c \u0432\u0437\u043b\u0451\u0442\u0430 - \u0434\u043e\u043b\u0433\u043e\u0442\u0430",fromLong:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c \u0432\u0437\u043b\u0451\u0442\u0430 - \u0448\u0438\u0440\u043e\u0442\u0430",to:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c \u043f\u043e\u0441\u0430\u0434\u043a\u0438",toLat:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c \u043f\u043e\u0441\u0430\u0434\u043a\u0438 - \u0434\u043e\u043b\u0433\u043e\u0442\u0430",toLong:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c \u043f\u043e\u0441\u0430\u0434\u043a\u0438 - \u0448\u0438\u0440\u043e\u0442\u0430",timeFlight:"\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u043b\u0451\u0442\u0430",timeBlock:"\u041f\u043e\u043b\u0451\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",timeNight:"\u041d\u043e\u0447\u043d\u043e\u0435 \u043b\u0451\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",timeBiologicalNight:"\u0411\u0438\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043d\u043e\u0447\u044c",timeWork:"\u0420\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",type:"\u0422\u0438\u043f \u043d\u0430\u043b\u0451\u0442\u0430"},ge=Object(T.a)({root:{"& > *":{borderBottom:"unset"}},th:{minWidth:"80px",fontSize:"0.7rem",color:"#000000",fontWeight:700},td:{color:"#676565",fontWeight:400}}),me=function(t){var e=t.row,n=c.a.useState(!1),i=Object(x.a)(n,2),a=i[0],l=i[1],r=ge(),o=Object.keys(e);return Object(k.jsxs)(c.a.Fragment,{children:[Object(k.jsxs)(A.a,{className:r.root,children:[Object(k.jsx)(L.a,{children:Object(k.jsx)(oe.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!a)},children:a?Object(k.jsx)(je.a,{}):Object(k.jsx)(de.a,{})})}),Object(k.jsx)(L.a,{component:"th",scope:"row",className:r.th,children:e.flight}),Object(k.jsx)(L.a,{className:r.td,align:"right",children:e.dateFlight}),Object(k.jsx)(L.a,{className:r.td,align:"right",children:e.from}),Object(k.jsx)(L.a,{className:r.td,align:"right",children:e.to})]}),Object(k.jsx)(A.a,{children:Object(k.jsx)(L.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(k.jsx)(re.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(y.a,{margin:1,children:Object(k.jsx)(E.a,{size:"small","aria-label":"purchases",children:Object(k.jsx)(C.a,{children:o.map((function(t){return Object(k.jsxs)(A.a,{className:r.row,children:[Object(k.jsx)(L.a,{component:"th",variant:"head",className:r.th,children:ue[t]}),Object(k.jsx)(L.a,{variant:"body",className:r.td,align:"right",children:e[t]})]},t)}))})})})})})})]})},be=n(468),pe=Object(T.a)({root:{"& > *":{borderBottom:"unset"}},th:{minWidth:"80px",fontSize:"0.7rem",color:"#000000",fontWeight:700},td:{color:"#676565",fontWeight:400},title:{marginBottom:"5px"}}),fe=function(t){var e=t.flights,n=pe(),i=function(t){return t.map((function(t){return function(t){var e=t.dateFlight,n=t.flight,i=t.takeoff,a=t.landing,c=t.pln,l=t.plnType,r=t.timeFlight,o=t.timeBlock,s=t.timeNight,d=t.timeBiologicalNight,h=t.timeWork,j=t.type;return{dateFlight:e.toLocaleString(),flight:n,pln:c,plnType:l,from:i.name,fromLat:i.lat,fromLong:i.long,to:a.name,toLat:a.lat,toLong:a.long,timeFlight:r,timeBlock:o,timeNight:s,timeBiologicalNight:d,timeWork:h,type:j?"\u041f\u043b\u0430\u043d\u043e\u0432\u044b\u0439":"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"}}(t)}))}(e);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(F.a,{className:n.title,variant:"h6",color:"textSecondary",id:"tableTitle",component:"h3",children:"\u041f\u043e\u043b\u0451\u0442\u044b"}),Object(k.jsx)(ie.a,{component:ae.a,children:Object(k.jsxs)(E.a,{"aria-label":"collapsible table",children:[Object(k.jsx)(be.a,{children:Object(k.jsxs)(A.a,{children:[Object(k.jsx)(L.a,{}),Object(k.jsx)(L.a,{className:n.th,children:"\u2116 \u0440\u0435\u0439\u0441\u0430"}),Object(k.jsx)(L.a,{className:n.th,align:"right",children:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0439\u0441\u0430"}),Object(k.jsx)(L.a,{className:n.th,align:"right",children:"\u041e\u0442\u043a\u0443\u0434\u0430"}),Object(k.jsx)(L.a,{className:n.th,align:"right",children:"\u041a\u0443\u0434\u0430"})]})}),Object(k.jsx)(C.a,{children:i.map((function(t,e){return Object(k.jsx)(me,{row:t},"".concat(t.name,"-").concat(e))}))})]})})]})},xe=Object(o.b)(null,(function(t){return{resetStats:function(){t(X())}}}))((function(t){var e=t.resetStats,n=Object(j.f)(),i=Object(O.a)("(min-width: 600px)");return Object(k.jsx)(Qt,{color:"initial",clickHandler:function(t){t.preventDefault(),e(),n.push(u),window.scrollTo(0,0)},style:i?null:{width:"100%"},children:"\u041d\u0430\u0437\u0430\u0434"})})),Oe=function(t,e){return{name:t,data:e}},ye=Object(T.a)({header:{backgroundColor:"#4e85f5",padding:"28px 0 8px 20px"},main:{padding:"0 20px 13px 20px"},title:{fontWeight:700,margin:0},grid:{flexDirection:"column",wrap:"wrap"},gridItem:{marginBottom:"15px"}}),Ne=Object(o.b)((function(t){return{statsByInterval:t[ht].statsByInterval,flights:t[dt].flights,isFlightsLoaded:t[dt].isFlightsLoaded}}),(function(t){return{updateStatsInterval:function(e){t(V(e))}}}))((function(t){var e=t.isFlightsLoaded,n=t.statsByInterval,i=t.flights,c=t.updateStatsInterval,l=t.match.params.id,r=ye(),o=Object(O.a)("(min-width: 600px)"),s=n.actualTimeFlight,d=n.actualTimeBlock,h=n.actualTimeNight,j=n.actualTimeBiologicalNight,u=n.actualTimeWork,g=n.plannedTimeFlight,m=n.plannedTimeBlock,T=n.plannedTimeNight,v=n.plannedTimeBiologicalNight,F=n.plannedTimeWork,w=n.interval,B=Object(a.useState)({}),S=Object(x.a)(B,2),W=S[0],I=S[1],E=Object(a.useState)(""),C=Object(x.a)(E,2),A=C[0],L=C[1];Object(a.useEffect)((function(){var t=4===l.length?b:p;L(t)}),[l]);var H=[Oe("\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u043b\u0451\u0442\u0430",s),Oe("\u041e\u0431\u0449\u0435\u0435 \u043f\u043e\u043b\u0451\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",d),Oe("\u041e\u0431\u0449\u0435\u0435 \u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",h),Oe("\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043d\u043e\u0447\u0438",j),Oe("\u041e\u0431\u0449\u0435\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",u)],_=[Oe("\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u043b\u0451\u0442\u0430",g),Oe("\u041e\u0431\u0449\u0435\u0435 \u043f\u043e\u043b\u0451\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",m),Oe("\u041e\u0431\u0449\u0435\u0435 \u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",T),Oe("\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043d\u043e\u0447\u0438",v),Oe("\u041e\u0431\u0449\u0435\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",F)];return Object(a.useEffect)((function(){if(!Object.keys(W).length&&A&&e){var t=A===b?l:l.slice(-4),n=it(i,A,t);I(n)}}),[e,W,i,A,l]),Object(a.useEffect)((function(){if(Object.keys(W).length){var t=A===b?l:l.slice(0,3),e=A===p?f.findIndex((function(e){return e===t})):0,n=ct(W[t],A,l.slice(-4))[e];c(n)}}),[W,c,A,l]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(te,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 ".concat(w)}),Object(k.jsxs)(y.a,{className:r.main,style:o?{padding:"0 17%"}:null,children:[Object(k.jsx)(At.a,{maxWidth:o?"xl":"xs",style:{padding:"15px 0",width:"100%"},children:Object(k.jsx)(xe,{})}),Object(k.jsxs)(N.a,{container:!0,justify:"center",style:{width:"100%"},children:[Object(k.jsx)(N.a,{item:!0,style:{marginBottom:"15px",width:"inherit"},children:Object(k.jsx)(At.a,{maxWidth:o?"xl":"xs",style:{padding:"0",width:"100%"},children:Object(k.jsxs)(N.a,{container:!0,direction:o?"row":"column",justify:"space-between",wrap:"wrap",style:{padding:"0",width:"100%"},children:[Object(k.jsx)(N.a,{className:r.gridItem,container:!0,item:!0,direction:"column",style:o?{padding:"0",width:"45%"}:null,children:Object(k.jsx)(le,{title:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",rows:H,style:{minWidth:"100%"}})}),Object(k.jsx)(N.a,{container:!0,item:!0,direction:"column",style:o?{padding:"0",width:"45%"}:null,children:Object(k.jsx)(le,{title:"\u041f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",rows:_,style:{minWidth:"100%"}})})]})})}),Object(k.jsx)(At.a,{maxWidth:o?"xl":"xs",style:{padding:"0",width:"100%"},children:!!Object.keys(W).length&&n.name&&Object(k.jsx)(fe,{flights:W[n.name]})})]})]})]})})),Te=n(253),ve=n(469),Fe=n(470),ke=function(){var t=Object(Te.a)({overrides:{MuiCssBaseline:{"@global":{body:{backgroundColor:"#ffffff"}}}},palette:{primary:{main:"#e5e5e5"},secondary:{main:"#4e85f5"},text:{primary:"#ffffff",secondary:"#4e85f5"}},background:{default:"#e5e5e5"},typography:{body1:{fontWeight:400,color:"#000000"},body2:{fontWeight:700,color:"#676565"},h5:{fontWeight:700}},spacing:2});return Object(k.jsxs)(ve.a,{theme:t,children:[Object(k.jsx)(Fe.a,{}),Object(k.jsx)(h.a,{children:Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:u,render:function(t){return Object(k.jsx)(ne,{history:t.history})}}),Object(k.jsx)(j.a,{exact:!0,path:"".concat(g,"/:id"),render:function(t){return Object(k.jsx)(Ne,{match:t.match})}})]})})]})},we=n(251),Be=n(252),Se="GET",We=200,Ie=299,Ee=new(function(){function t(e){Object(we.a)(this,t),this._endPoint=e}return Object(Be.a)(t,[{key:"getFlights",value:function(e){return this._load({url:e}).then(t.toJSON).catch((function(t){throw console.log(t)}))}},{key:"_load",value:function(e){var n=e.url,i=e.method,a=void 0===i?Se:i,c=e.body,l=void 0===c?null:c,r=e.headers,o=void 0===r?new Headers({Accept:"application/json"}):r,s=e.mode,d=void 0===s?"cors":s;return fetch("".concat(this._endPoint).concat(n),{method:a,body:l,headers:o,mode:d}).then(t.checkStatus).catch((function(t){throw console.log(t)}))}}],[{key:"checkStatus",value:function(t){if(t.status<We&&t.status>Ie)throw new Error("".concat(t.status,": ").concat(t.statusText));return t}},{key:"toJSON",value:function(t){return t.json()}},{key:"catchError",value:function(t){throw t}}]),t}())("http://192.168.1.68:8080"),Ce=Object(r.createStore)(jt,Object(s.composeWithDevTools)(Object(r.applyMiddleware)(d.a.withExtraArgument(Ee))));Promise.all([Ce.dispatch((function(t,e,n){return n.getFlights(m).then((function(e){return t(P(e))}))}))]).then((function(){Object(l.render)(Object(k.jsx)(o.a,{store:Ce,children:Object(k.jsx)(ke,{})}),document.getElementById("root"))})).catch((function(t){console.log(t)}))}},[[412,1,2]]]);
//# sourceMappingURL=main.79cd0229.chunk.js.map