(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,a,t){e.exports=t(85)},70:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=t(44),s=t(32),m=t(35),i=t(8),u=t(114),p=t(55),b=t.n(p),h=t(56),d=t.n(h),E=t(113),v=t(27),y=t.n(v),f=t(112),g=t(46),O=t.n(g),j=t(116),N=t(40),k=(t(70),function(e){var a=e.payments,t=e.className,n=a.filter(function(e,a){return a>0&&(e.balance>0||e.interestYearly>0)}).reduce(function(e,a,t){return{interestTotal:e.interestTotal+a.interestYearly,overpaymentTotal:e.overpaymentTotal+a.overpayment,rows:[].concat(Object(o.a)(e.rows),[[a.partial?a.partial+"m":t+1,Math.round(a.interestYearly||0),Math.round(a.overpayment),Math.round(a.balance)]])}},{interestTotal:0,overpaymentTotal:0,rows:[]});return l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,"Cashflow Graph")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("table",{className:t},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Years"),l.a.createElement("th",null,"Interest"),l.a.createElement("th",null,"Overpayment"),l.a.createElement("th",null,"Balance"))),l.a.createElement("tbody",null,n.rows.map(function(e,a){return l.a.createElement("tr",{key:a},e.map(function(e,a){return l.a.createElement("td",{key:a},e.toLocaleString())}))})),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},Math.round(n.interestTotal).toLocaleString()),l.a.createElement("td",null,Math.round(n.overpaymentTotal).toLocaleString()),l.a.createElement("td",null))))))}),M=t(109),C=t(115),w=t(47),S=t(48),x=(t(82),20),L=80,P=800-L-20,T=300-x-20,F=Object(w.a)().range([0,P]),Y=Object(w.a)().range([0,T]),A=Object(C.a)().x(function(e,a){return F(a+(e.partial/12||1)-1)}).y(function(e){return Y(e.balance)}),I=Object(C.a)().x(function(e,a){return F(a)}).y(function(e){return Y(e.baseline)}),H=function(e){var a=e.payments,t=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=Object(M.a)(t.current);F.domain([0,a.length-1]),Y.domain([a[0].balance,0]),e.select(".x").call(Object(S.a)(F).ticks(Math.min(a.length,30))),e.select(".y").call(Object(S.b)(Y)),e.select(".baseline").transition().attr("d",I(a)),e.select(".actual").transition().attr("d",A(a))},[a]),l.a.createElement("svg",{ref:t,height:"100%",width:"100%",viewBox:"0 0 ".concat(800," ").concat(300)},l.a.createElement("g",{transform:"translate(".concat(L,",").concat(x,")")},l.a.createElement("g",{className:"axis x",transform:"translate(0, ".concat(T,")")}),l.a.createElement("g",{className:"axis y"}),l.a.createElement("path",{className:"line baseline"}),l.a.createElement("path",{className:"line actual"})))};var R={month:"1",year:"0",amount:"0"},B=function(){var e=l.a.useState(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=l.a.useState(!1),p=Object(i.a)(c,2),h=p[0],v=p[1],g=l.a.useState(!1),M=Object(i.a)(g,2),C=M[0],w=M[1],S=l.a.useState(!1),x=Object(i.a)(S,2),L=x[0],P=x[1],T=l.a.useState(!1),F=Object(i.a)(T,2),Y=F[0],A=F[1],I=Object(n.useState)("200000"),B=Object(i.a)(I,2),J=B[0],z=B[1],D=Object(n.useState)("5"),G=Object(i.a)(D,2),V=G[0],q=G[1],K=Object(n.useState)("25"),Q=Object(i.a)(K,2),U=Q[0],W=Q[1],X=Object(n.useState)("0"),Z=Object(i.a)(X,2),$=Z[0],_=Z[1],ee=Object(n.useState)([R]),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],le=function(e){return function(a){var t=a.target;return ne(te.map(function(a,n){return n===e?Object(m.a)({},a,Object(s.a)({},t.name,t.value)):a}))}},re=function(e,a,t,n){for(var l,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=t/1200,o=0===c?e/a/12:e*c/(1-Math.pow(1/(1+c),12*a)),s=e,m=e,i=[{overpayment:0,balance:s,baseline:m}],u=function(e){for(var a=0,t=0,u=function(i){var u=r.filter(function(a){return+a.year===e&&+a.month===i}).reduce(function(e,a){return e+ +a.amount},0),p=s*c;a+=p,t+=u,m-=o-m*c,(s-=o+n+u-p)<=0&&(s=0,void 0===l&&12!==i&&(l=i))},p=1;p<=12;p++)u(p);i.push({baseline:m,interestYearly:a,balance:s,partial:l,overpayment:t+ +n*(l||12)}),l&&(l=0)},p=0;p<a;p++)u(p);return{monthlyPayment:o,payments:i}}(+J,+U,+V,+$,te),ce=re.monthlyPayment,oe=re.payments,se=Object(n.useState)({checked:!1}),me=Object(i.a)(se,2),ie=me[0],ue=me[1],pe=Object(n.useState)("0"),be=Object(i.a)(pe,2),he=be[0],de=be[1],Ee=Object(n.useState)(0),ve=Object(i.a)(Ee,2),ye=ve[0],fe=ve[1],ge=Object(N.useSpeechSynthesis)().speak,Oe=Object(n.useState)(""),je=Object(i.a)(Oe,2),Ne=je[0],ke=je[1],Me=Object(N.useSpeechRecognition)({onResult:function(e){isNaN(e.replace(/,/g,""))||ke(e)},onEnd:function(){setTimeout(function(){fe(ye+1)},1e3)}}),Ce=Me.listen,we=Me.listening,Se=Me.stop;Object(n.useEffect)(function(){ie.checked&&fe(ye+1),ie.checked||(fe(0),de("0"),ke(""))},[ie]),Object(n.useEffect)(function(){1===ye?(ge({text:"Please state your initial amount"}),de("1")):2===ye?(ge({text:"Please state the mortgage term"}),de("2")):3===ye?(ge({text:"Please state the interest rate"}),de("3")):4===ye?(ge({text:"Please state the regular monthly overpayment, if any"}),de("4")):5===ye&&(ge({text:"Your monthly payment is "+(+$+ce).toFixed(2)}),ue(Object(m.a)({},ie,{checked:!1})))},[ye]),Object(n.useEffect)(function(){"0"!==he&&(Ce(),setTimeout(function(){Se()},1e4))},[he]),Object(n.useEffect)(function(){"1"===he?z(parseFloat(Ne.replace(/,/g,""))):"2"===he?W(parseFloat(Ne.replace(/,/g,""))):"3"===he?q(parseFloat(Ne.replace(/,/g,""))):"4"===he&&_(parseFloat(Ne.replace(/,/g,"")))},[Ne]);var xe=Object(n.useState)(!1),Le=Object(i.a)(xe,2),Pe=Le[0],Te=Le[1];return l.a.createElement("div",{onDoubleClick:function(){ue(Object(m.a)({},ie,{checked:!0}))},onClick:function(){Pe||(ge({text:"You may double click anywhere on the screen to activate voice mode"}),Te(!0))}},l.a.createElement("nav",{className:"navbar navbar-default"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("div",{className:"navbar-brand",style:{fontFamily:"Arial",fontSize:25}},"Mortgage Overpayment Calculator")),l.a.createElement("div",{className:"navbar-right"},l.a.createElement(j.a,{checked:ie.checked,onChange:function(e){ue(Object(m.a)({},ie,Object(s.a)({},e.target.name,e.target.checked)))},name:"checked"}),l.a.createElement("label",{style:{color:"white"}},"Voice"),we&&l.a.createElement("div",{style:{color:"white"}},"I'm listening..."))),l.a.createElement("div",{className:"container-fluid component"},l.a.createElement("div",{className:"col-sm-9 col-md-9 col-lg-9"},l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-6 component"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,"Initial")),l.a.createElement("div",{className:"panel-body"},l.a.createElement(E.a,{title:l.a.createElement("h6",null,"Mortgage debt")},l.a.createElement("label",null,l.a.createElement(O.a,{className:"material-icons"}),"Amount")),l.a.createElement("input",{type:"number",maxLength:7,value:J,onChange:function(e){e.target.value=e.target.value&&Math.abs(e.target.value)>=0?Math.abs(e.target.value):null,z(e.target.value)}}),l.a.createElement(f.a,{onClickAway:function(){return r(!1)}},l.a.createElement(E.a,{PopperProps:{disablePortal:!0},onClose:function(){return r(!1)},open:t,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:l.a.createElement("h6",null,"This is the total amount you owe")},l.a.createElement(y.a,{className:"help-icon",onClick:function(){return r(!0)}})))),l.a.createElement("div",{className:"panel-body"},l.a.createElement(E.a,{title:l.a.createElement("h6",null,"Mortgage term")},l.a.createElement("label",null,"\xa0\xa0\xa0\xa0Years")),l.a.createElement("input",{type:"number",maxLength:2,value:U,onChange:function(e){e.target.value=e.target.value&&Math.abs(e.target.value)>=0?Math.abs(e.target.value):null,W(e.target.value)}}),l.a.createElement(f.a,{onClickAway:function(){return v(!1)}},l.a.createElement(E.a,{PopperProps:{disablePortal:!0},onClose:function(){return v(!1)},open:h,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:l.a.createElement("h6",null,"This is the number of years over which you are repaying your mortgage")},l.a.createElement(y.a,{className:"help-icon",onClick:function(){return v(!0)}})))),l.a.createElement("div",{className:"panel-body"},l.a.createElement(E.a,{title:l.a.createElement("h6",null,"Interest rate")},l.a.createElement("label",null," ",l.a.createElement("span",{className:"percentage"},"% "),"Rate")),l.a.createElement("input",{type:"number",step:.1,value:V,onChange:function(e){e.target.value=e.target.value&&Math.abs(e.target.value)>=0?Math.abs(e.target.value):null,q(e.target.value)}}),l.a.createElement(f.a,{onClickAway:function(){return w(!1)}},l.a.createElement(E.a,{PopperProps:{disablePortal:!0},onClose:function(){return w(!1)},open:C,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:l.a.createElement("h6",null,"This is the annual mortgage interest rate")},l.a.createElement(y.a,{className:"help-icon",onClick:function(){return w(!0)}})))))),l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-6 component"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,"Overpayment")),l.a.createElement("div",{className:"panel-body"},l.a.createElement(E.a,{title:l.a.createElement("h6",null,"Regular monthly overpayment")},l.a.createElement("label",null,"Monthly")),l.a.createElement("input",{type:"number",maxLength:5,value:$,onChange:function(e){e.target.value=e.target.value&&Math.abs(e.target.value)>=0?Math.abs(e.target.value):null,_(e.target.value)}}),l.a.createElement(f.a,{onClickAway:function(){return P(!1)}},l.a.createElement(E.a,{PopperProps:{disablePortal:!0},onClose:function(){return P(!1)},open:L,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:l.a.createElement("h6",null,"This is the regular monthly overpayment made on top of your normal monthly payment")},l.a.createElement(y.a,{className:"help-icon",onClick:function(){return P(!0)}})))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("label",null,"Year"),l.a.createElement("label",null,"Month"),l.a.createElement(E.a,{title:l.a.createElement("h6",null,"Lump sum overpayment")},l.a.createElement("label",null,l.a.createElement(O.a,{className:"material-icons"}),"Amount")),l.a.createElement(f.a,{onClickAway:function(){return A(!1)}},l.a.createElement(E.a,{PopperProps:{disablePortal:!0},onClose:function(){return A(!1)},open:Y,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:l.a.createElement("h6",null,"This is the one-off lump sum overpayment (single payment done only once) made during the specified year and month")},l.a.createElement(y.a,{className:"material-icons",onClick:function(){return A(!0)}}))),te.map(function(e,a){var t=e.year,n=e.month,r=e.amount;return l.a.createElement("div",{key:a},l.a.createElement("input",{type:"number",min:"0",max:U,value:t&&Math.abs(t)>=0?Math.abs(parseInt(t)):null,name:"year",onChange:le(a)}),l.a.createElement("input",{type:"number",min:"1",max:"12",value:n&&Math.abs(n)>=0?Math.max(1,Math.min(12,Math.abs(parseInt(n)))):null,name:"month",onChange:le(a)}),l.a.createElement("input",{type:"number",value:r&&Math.abs(r)>=0?Math.abs(r):null,name:"amount",onChange:le(a)}),a===te.length-1?l.a.createElement(u.a,{color:"secondary",variant:"outlined",onClick:function(){return ne([].concat(Object(o.a)(te),[R]))}},l.a.createElement(b.a,null)):l.a.createElement(u.a,{color:"secondary",variant:"outlined",onClick:function(){return ne(te.filter(function(e,t){return t!==a}))}},l.a.createElement(d.a,null)))})))),l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 component"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,"Years vs Mortgage Balance")),l.a.createElement("div",{className:"panel-body"},l.a.createElement(H,{payments:oe})),l.a.createElement("div",{className:"panel-body"},l.a.createElement("h4",null,"Monthly Payment",l.a.createElement("span",{className:"money"},(+$+ce).toFixed(2))))))),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},l.a.createElement(k,{payments:oe}))))};c.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[63,2,1]]]);
//# sourceMappingURL=main.e137657d.chunk.js.map