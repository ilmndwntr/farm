(this["webpackJsonpBabyMushroom-frontend"]=this["webpackJsonpBabyMushroom-frontend"]||[]).push([[8],{753:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return f}));var r=n(4),c=n.n(r),a=n(15),i=n(22),s=n(0),o=n(12),l=n.n(o),u=n(74),j=n(195),b=n(84),d=n(754),O=n(42),x=n(134),h=function(){var e=Object(x.a)().slowRefresh,t=Object(s.useState)(),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(j,Object(O.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new l.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},f=function(e){var t=Object(s.useState)(new l.a(0)),n=Object(i.a)(t,2),r=n[0],o=n[1],u=Object(x.a)().slowRefresh;return Object(s.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(j,Object(O.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:return n=e.sent,e.next=6,t.methods.totalBurn().call();case 6:r=e.sent,o(new l.a(n).plus(new l.a(r)));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,u]),r};t.a=function(e){var t=Object(s.useState)(new l.a(0)),n=Object(i.a)(t,2),r=n[0],o=n[1],j=Object(u.m)(),b=j.account,O=j.ethereum,h=Object(x.a)().fastRefresh;return Object(s.useEffect)((function(){b&&O&&function(){var t=Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(O,e,b);case 2:n=t.sent,o(new l.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b,O,e,h]),r}},759:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r=n(758);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3),a=3},761:function(e,t,n){"use strict";var r=3600,c=86400,a=2629800,i=31557600;t.a=function(e){var t=e,n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=i&&(n.years=Math.floor(t/i),t-=n.years*i),t>=a&&(n.months=Math.floor(t/a),t-=n.months*a),t>=c&&(n.days=Math.floor(t/c),t-=n.days*c),t>=r&&(n.hours=Math.floor(t/r),t-=n.hours*r),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n}},767:function(e,t,n){"use strict";var r=n(0),c=n(202);t.a=function(){return Object(r.useContext)(c.a)}},797:function(e,t,n){var r=n(798),c=n(133);e.exports=function(e,t,n,a){return null==e?[]:(c(t)||(t=null==t?[]:[t]),c(n=a?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},798:function(e,t,n){var r=n(362),c=n(352),a=n(777),i=n(846),s=n(851),o=n(783),l=n(852),u=n(786),j=n(133);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return j(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[u];var b=-1;t=r(t,o(a));var d=i(e,(function(e,n,c){return{criteria:r(t,(function(t){return t(e)})),index:++b,value:e}}));return s(d,(function(e,t){return l(e,t,n)}))}},846:function(e,t,n){var r=n(787),c=n(351);e.exports=function(e,t){var n=-1,a=c(e)?Array(e.length):[];return r(e,(function(e,r,c){a[++n]=t(e,r,c)})),a}},851:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},852:function(e,t,n){var r=n(853);e.exports=function(e,t,n){for(var c=-1,a=e.criteria,i=t.criteria,s=a.length,o=n.length;++c<s;){var l=r(a[c],i[c]);if(l)return c>=o?l:l*("desc"==n[c]?-1:1)}return e.index-t.index}},853:function(e,t,n){var r=n(116);e.exports=function(e,t){if(e!==t){var n=void 0!==e,c=null===e,a=e===e,i=r(e),s=void 0!==t,o=null===t,l=t===t,u=r(t);if(!o&&!u&&!i&&e>t||i&&s&&l&&!o&&!u||c&&s&&l||!n&&l||!a)return 1;if(!c&&!i&&!u&&e<t||u&&n&&a&&!c&&!i||o&&n&&a||!s&&a||!l)return-1}return 0}},876:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,l,u,j,b,d,O,x,h,f,p,m,v,g,y,k,w,C,N,T,S,F,I,B,J,A,D,E,z=n(56),W=n(0),M=n(3),L=n(40),R=n(188),K=n(192),P=n(196),U=n(11),_=M.e.div(r||(r=Object(z.a)(["\n  border-top: 1px solid ",";\n  padding: 24px 0;\n"])),(function(e){return e.theme.colors.textSubtle})),Y=M.e.div(c||(c=Object(z.a)(["\n  margin-bottom: 24px;\n"]))),G=M.e.div(a||(a=Object(z.a)(["\n  text-align: center;\n"]))),H=Object(M.e)(L.J)(i||(i=Object(z.a)(["\n  flex: 1;\n  padding: 0 8px;\n"]))),Q=M.e.div(s||(s=Object(z.a)(["\n  align-items: start;\n  display: flex;\n  margin-bottom: 16px;\n"]))),q=function(){var e=Object(R.a)();return Object(U.jsx)(P.a,{children:Object(U.jsxs)(_,{children:[Object(U.jsxs)(Y,{children:[Object(U.jsx)(L.r,{id:"how-it-works",color:"secondary",size:"lg",mb:"16px",children:e(632,"How it works")}),Object(U.jsxs)(Q,{children:[Object(U.jsx)(G,{children:Object(U.jsx)(L.b,{})}),Object(U.jsx)(H,{children:e(634,"Winners will be able to claim an NFT on this page once the claiming period starts.")})]}),Object(U.jsxs)(Q,{children:[Object(U.jsx)(G,{children:Object(U.jsx)(L.b,{})}),Object(U.jsx)(H,{children:e(636,"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!")})]}),Object(U.jsxs)(Q,{children:[Object(U.jsx)(G,{children:Object(U.jsx)(L.b,{})}),Object(U.jsx)(H,{children:e(638,"Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don't trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!")})]})]}),Object(U.jsxs)(Y,{children:[Object(U.jsx)(L.r,{color:"secondary",size:"lg",mb:"16px",children:e(640,"How are winners selected?")}),Object(U.jsxs)(Q,{children:[Object(U.jsx)(G,{children:Object(U.jsx)(L.b,{})}),Object(U.jsx)(H,{children:e(642,"Winners are selected at random! Good luck!")})]})]}),Object(U.jsx)("div",{children:Object(U.jsx)(L.e,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLSfToBNlovtMvTZFSwOhk0TBiDPMGasLxqG0RB-kJN85HR_avA/viewform",target:"_blank",rel:"noopener noreferrer",children:e(644,"Register for a chance to win")})})]})})},V=n(797),X=n.n(V),Z=n(101),$=n(4),ee=n.n($),te=n(17),ne=n(15),re=n(22),ce=M.e.div(o||(o=Object(z.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),ae=M.e.div(l||(l=Object(z.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),ie=M.e.img(u||(u=Object(z.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),se=function(e){var t=e.src,n=e.alt,r=e.originalLink,c=Object(U.jsx)(ie,{src:t,alt:n});return Object(U.jsx)(ae,{children:r?Object(U.jsx)("a",{href:r,target:"_blank",rel:"noreferrer noopener",children:c}):c})},oe=n(45),le=n(57),ue=n(74),je=n(767),be=n(197),de=n(33),Oe=n(84),xe=n(774),he=function(e){var t=xe;return Object(Oe.a)(t,Z.a,e)},fe=Object(W.createContext)(null),pe=function(e){var t=e.children,n=Object(W.useRef)(!0),r=Object(W.useState)({isInitialized:!1,canClaim:!1,hasClaimed:!1,countBunniesBurnt:0,startBlockNumber:0,endBlockNumber:0,totalSupplyDistributed:0,currentDistributedSupply:0,balanceOf:0,bunnyMap:{}}),c=Object(re.a)(r,2),a=c[0],i=c[1],s=Object(ue.m)().account,o=Object(je.a)(),l=a.isInitialized;Object(W.useEffect)((function(){(function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,n,r,c,a,s,o,l,u,j,b,d,O,x,h,f,p;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(de.a)(be,[{address:Z.b,name:"startBlockNumber"},{address:Z.b,name:"endBlockNumber"},{address:Z.b,name:"countBunniesBurnt"},{address:Z.b,name:"totalSupplyDistributed"},{address:Z.b,name:"currentDistributedSupply"}]);case 3:t=e.sent,n=Object(re.a)(t,5),r=n[0],c=n[1],a=n[2],s=n[3],o=n[4],l=Object(re.a)(r,1),u=l[0],j=Object(re.a)(c,1),b=j[0],d=Object(re.a)(a,1),O=d[0],x=Object(re.a)(s,1),h=x[0],f=Object(re.a)(o,1),p=f[0],i((function(e){return Object(te.a)(Object(te.a)({},e),{},{isInitialized:!0,countBunniesBurnt:O.toNumber(),startBlockNumber:u.toNumber(),endBlockNumber:b.toNumber(),currentDistributedSupply:p.toNumber(),totalSupplyDistributed:h.toNumber()})})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("an error occured",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}})()()}),[l,i]),Object(W.useEffect)((function(){s&&function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,n,r,c,a,o,l,u,j,b,d,O,x,h,f;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=he(),e.next=4,Object(de.a)(be,[{address:Z.b,name:"canClaim",params:[s]},{address:Z.b,name:"hasClaimed",params:[s]}]);case 4:return n=e.sent,r=Object(re.a)(n,2),c=r[0],a=r[1],e.next=10,t.methods.balanceOf(s).call();case 10:if(o=e.sent,l=Object(re.a)(c,1),u=l[0],j=Object(re.a)(a,1),b=j[0],d={},!(o>0)){e.next=22;break}for(O=function(){var e=Object(ne.a)(ee.a.mark((function e(n){var r,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.tokenOfOwnerByIndex(s,n).call();case 3:return r=e.sent,e.next=6,t.methods.getBunnyId(r).call();case 6:return c=e.sent,e.abrupt("return",[parseInt(c,10),parseInt(r,10)]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),x=[],h=0;h<o;h++)x.push(O(h));return e.next=20,Promise.all(x);case 20:f=e.sent,d=f.reduce((function(e,t){if(!t)return e;var n=Object(re.a)(t,2),r=n[0],c=n[1];return Object(te.a)(Object(te.a)({},e),{},Object(oe.a)({},r,e[r]?[].concat(Object(le.a)(e[r]),[c]):[c]))}),{});case 22:i((function(e){return Object(te.a)(Object(te.a)({},e),{},{isInitialized:!0,canClaim:u,hasClaimed:b,balanceOf:o,bunnyMap:d})})),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),console.error("an error occured",e.t0);case 28:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(){return e.apply(this,arguments)}}()()}),[l,s,i]),Object(W.useEffect)((function(){return function(){n.current=!1}}),[n]);var u=o<=a.endBlockNumber;return Object(U.jsx)(fe.Provider,{value:Object(te.a)(Object(te.a)({},a),{},{canBurnNft:u,getTokenIds:function(e){return a.bunnyMap[e]},reInitialize:function(){n.current&&i((function(e){return Object(te.a)(Object(te.a)({},e),{},{isInitialized:!1})}))}}),children:t})},me=n(750),ve=n(42),ge=n(753),ye=n(749),ke=Object(M.e)(L.J)(j||(j=Object(z.a)(["\n  font-weight: 600;\n"]))),we=M.e.div(b||(b=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),Ce=M.e.div(d||(d=Object(z.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Ne=function(e){var t=e.nft,n=e.onSuccess,r=e.onDismiss,c=Object(W.useState)(!1),a=Object(re.a)(c,2),i=a[0],s=a[1],o=Object(W.useState)(null),l=Object(re.a)(o,2),u=l[0],j=l[1],b=Object(R.a)(),d=Object(ue.m)().account,O=Object(ye.h)(Z.b),x=Object(ge.a)(Object(ve.a)()),h=Object(me.a)(x),f=function(){var e=Object(ne.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.methods.mintNFT(t.bunnyId).send({from:d}).on("sending",(function(){s(!0)})).on("receipt",(function(){r(),n()})).on("error",(function(){console.error(u),j("Unable to claim NFT"),s(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Unable to mint NFT:",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(W.useEffect)((function(){0===h&&j("You must have a CAKE balance greater than zero to claim NFT")}),[h,j]),Object(U.jsxs)(L.A,{title:b(999,"Claim NFT"),onDismiss:r,children:[Object(U.jsxs)(we,{children:[u&&Object(U.jsx)(L.J,{color:"failure",mb:"8px",children:u}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[b(999,"You will receive"),":"]}),Object(U.jsx)(ke,{children:'1x "'.concat(t.name,'" NFT')})]})]}),Object(U.jsxs)(Ce,{children:[Object(U.jsx)(L.e,{fullWidth:!0,variant:"secondary",onClick:r,children:b(462,"Cancel")}),Object(U.jsx)(L.e,{fullWidth:!0,onClick:f,disabled:!d||i||h<=0,children:b(464,"Confirm")})]})]})},Te=Object(M.e)(L.J)(O||(O=Object(z.a)(["\n  font-weight: 600;\n"]))),Se=M.e.div(x||(x=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),Fe=M.e.div(h||(h=Object(z.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Ie=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(W.useState)(!1),i=Object(re.a)(a,2),s=i[0],o=i[1],l=Object(W.useState)(null),u=Object(re.a)(l,2),j=u[0],b=u[1],d=Object(W.useState)(!1),O=Object(re.a)(d,2),x=O[0],h=O[1],f=Object(R.a)(),p=Object(ue.m)().account,m=Object(ye.h)(Z.b),v=function(){var e=Object(ne.a)(ee.a.mark((function e(){var t,a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(re.a)(n,1),a=t[0],e.next=4,m.methods.burnNFT(a).send({from:p}).on("sending",(function(){o(!0)})).on("receipt",(function(){c(),r()})).on("error",(function(){console.error(j),b("Unable to burn NFT"),o(!1)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Unable to burn NFT:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)(L.A,{title:f(999,"Trade in NFT"),onDismiss:c,children:[Object(U.jsxs)(Se,{children:[j&&Object(U.jsx)(L.J,{color:"failure",mb:"8px",children:j}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[f(999,"Trade in"),":"]}),Object(U.jsx)(Te,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[f(999,"You will receive"),":"]}),Object(U.jsx)(Te,{children:"10 CAKE"})]})]}),Object(U.jsxs)(Se,{children:[Object(U.jsx)(L.J,{color:"failure",children:f(999,"When you trade in this NFT to receive CAKE, you will lose access to it forever!")}),Object(U.jsx)(L.J,{color:"failure",children:f(999,"It will be burned and removed from circulation")})]}),Object(U.jsxs)(Se,{style:{alignItems:"center",display:"inline-flex"},children:[Object(U.jsx)(L.m,{checked:x,scale:"sm",onChange:function(){return h(!x)}}),Object(U.jsx)(L.J,{ml:"8px",onClick:function(){return h(!x)},style:{cursor:"pointer"},children:f(999,"I understand")})]}),Object(U.jsxs)(Fe,{children:[Object(U.jsx)(L.e,{fullWidth:!0,variant:"secondary",onClick:c,children:f(462,"Cancel")}),Object(U.jsx)(L.e,{fullWidth:!0,onClick:v,disabled:!p||s||!x,children:f(464,"Confirm")})]})]})},Be=n(139),Je=n.n(Be),Ae=Object(M.e)(L.J)(f||(f=Object(z.a)(["\n  font-weight: 600;\n"]))),De=M.e.div(p||(p=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),Ee=M.e.div(m||(m=Object(z.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),ze=M.e.label(v||(v=Object(z.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),We=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(W.useState)(!1),i=Object(re.a)(a,2),s=i[0],o=i[1],l=Object(W.useState)(""),u=Object(re.a)(l,2),j=u[0],b=u[1],d=Object(W.useState)(null),O=Object(re.a)(d,2),x=O[0],h=O[1],f=Object(R.a)(),p=Object(ue.m)().account,m=Object(ye.g)(Z.a),v=function(){var e=Object(ne.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Je.a.utils.isAddress(j)){e.next=6;break}h(f(999,"Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,m.methods.transferFrom(p,j,n[0]).send({from:p}).on("sending",(function(){o(!0)})).on("receipt",(function(){c(),r()})).on("error",(function(){console.error(x),h("Unable to transfer NFT"),o(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)(L.A,{title:f(999,"Transfer NFT"),onDismiss:c,children:[Object(U.jsxs)(De,{children:[x&&Object(U.jsx)(L.J,{color:"failure",mb:"8px",children:x}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[f(999,"Transferring"),":"]}),Object(U.jsx)(Ae,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(U.jsxs)(ze,{htmlFor:"transferAddress",children:[f(999,"Receiving address"),":"]}),Object(U.jsx)(L.u,{id:"transferAddress",name:"address",type:"text",placeholder:f(999,"Paste address"),value:j,onChange:function(e){var t=e.target.value;b(t)},isWarning:x,disabled:s})]}),Object(U.jsxs)(Ee,{children:[Object(U.jsx)(L.e,{fullWidth:!0,variant:"secondary",onClick:c,children:f(462,"Cancel")}),Object(U.jsx)(L.e,{fullWidth:!0,onClick:v,disabled:!p||s||!j,children:f(464,"Confirm")})]})]})},Me=Object(M.e)(ce)(g||(g=Object(z.a)(["\n  min-height: 28px;\n"]))),Le=Object(M.e)(L.e).attrs({variant:"text",fullWidth:!0})(y||(y=Object(z.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),Re=M.e.div(k||(k=Object(z.a)(["\n  padding: 0 24px 24px;\n"]))),Ke=Object(M.e)(L.J)(w||(w=Object(z.a)(["\n  font-weight: 600;\n"]))),Pe=function(e){var t=e.nft,n=Object(W.useState)({isLoading:!1,isOpen:!1,bunnyCount:0,bunnyBurnCount:0}),r=Object(re.a)(n,2),c=r[0],a=r[1],i=Object(R.a)(),s=Object(W.useContext)(fe),o=s.isInitialized,l=s.canClaim,u=s.hasClaimed,j=s.canBurnNft,b=s.totalSupplyDistributed,d=s.currentDistributedSupply,O=s.getTokenIds,x=s.reInitialize,h=l&&!u,f=t.bunnyId,p=t.name,m=t.previewImage,v=t.originalImage,g=t.description,y=O(f),k=d<b,w=y&&y.length>0,C=c.isOpen?L.o:L.n,N=Object(W.useCallback)(Object(ne.a)(ee.a.mark((function e(){var t,n,r,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0})})),e.prev=1,t=he(),n=t.methods,e.next=5,n.bunnyCount(f).call();case 5:return r=e.sent,e.next=8,n.bunnyBurnCount(f).call();case 8:c=e.sent,a((function(e){return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1,isDataFetched:!0,bunnyCount:parseInt(r,10),bunnyBurnCount:parseInt(c,10)})})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])}))),[f]),T=function(){var e=Object(ne.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isOpen){e.next=4;break}a((function(e){return Object(te.a)(Object(te.a)({},e),{},{isOpen:!e.isOpen})})),e.next=15;break;case 4:return e.prev=4,e.next=7,N();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.error(e.t0);case 12:return e.prev=12,a((function(e){return Object(te.a)(Object(te.a)({},e),{},{isOpen:!e.isOpen})})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[4,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),S=function(){N(),x()},F=Object(L.R)(Object(U.jsx)(Ne,{nft:t,onSuccess:S})),I=Object(re.a)(F,1)[0],B=Object(L.R)(Object(U.jsx)(Ie,{nft:t,tokenIds:y,onSuccess:S})),J=Object(re.a)(B,1)[0],A=Object(L.R)(Object(U.jsx)(We,{nft:t,tokenIds:y,onSuccess:S})),D=Object(re.a)(A,1)[0];return Object(U.jsxs)(L.i,{isActive:w,children:[Object(U.jsx)(se,{src:"/images/nfts/".concat(m),alt:p,originalLink:w?v:null}),Object(U.jsxs)(L.j,{children:[Object(U.jsxs)(Me,{children:[Object(U.jsx)(L.r,{children:p}),o&&h&&Object(U.jsx)(L.I,{outline:!0,variant:"success",children:i(526,"Available")}),o&&y&&Object(U.jsx)(L.I,{outline:!0,variant:"secondary",children:i(999,"In Wallet")})]}),o&&w&&Object(U.jsx)(L.e,{fullWidth:!0,variant:"secondary",mt:"24px",onClick:D,children:i(999,"Transfer")}),o&&h&&k&&Object(U.jsx)(L.e,{fullWidth:!0,onClick:I,mt:"24px",children:i(999,"Claim this NFT")}),o&&j&&w&&Object(U.jsx)(L.e,{variant:"danger",fullWidth:!0,onClick:J,mt:"24px",children:i(999,"Trade in for CAKE")})]}),Object(U.jsxs)(L.k,{p:"0",children:[Object(U.jsx)(Le,{endIcon:Object(U.jsx)(C,{width:"24px",color:"primary"}),onClick:T,children:c.isLoading?i(999,"Loading..."):i(999,"Details")}),c.isOpen&&Object(U.jsxs)(Re,{children:[Object(U.jsx)(L.J,{as:"p",color:"textSubtle",mb:"16px",style:{textAlign:"center"},children:g}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[i(999,"Value if traded in"),":"]}),Object(U.jsx)(Ke,{children:"10 CAKE"})]}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[i(999,"Number minted"),":"]}),Object(U.jsx)(Ke,{children:c.bunnyCount+c.bunnyBurnCount})]}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[i(999,"Number burned"),":"]}),Object(U.jsx)(Ke,{children:c.bunnyBurnCount})]})]})]})]})},Ue=Object(M.e)(L.c)(C||(C=Object(z.a)(["\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  & > div {\n    grid-column: 2 / 6;\n\n    "," {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),_e=function(){return Object(U.jsx)(Ue,{children:X()(Z.c,"sortOrder").map((function(e){return Object(U.jsx)("div",{children:Object(U.jsx)(Pe,{nft:e})},e.name)}))})},Ye=n(759),Ge=n(761),He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return Object.keys(e).forEach((function(r){e[r]>0&&!t.includes(r)&&n.push("".concat(e[r]).concat(r.substr(0,1)))})),0===n.length?null:n.join(" ")},Qe=Object(M.e)(L.r)(N||(N=Object(z.a)(["\n  margin-bottom: 16px;\n  text-align: center;\n"]))),qe=Object(M.e)(L.v)(T||(T=Object(z.a)(["\n  text-decoration: underline;\n"]))),Ve=M.e.p(S||(S=Object(z.a)(["\n  color: ",";\n  font-size: 14px;\n  padding-top: 16px;\n  text-align: center;\n"])),(function(e){return e.theme.colors.textSubtle})),Xe=M.e.div(F||(F=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),Ze=function(){var e=Object(W.useContext)(fe),t=e.isInitialized,n=e.currentDistributedSupply,r=e.totalSupplyDistributed,c=e.countBunniesBurnt,a=e.startBlockNumber,i=e.endBlockNumber,s=Object(R.a)(),o=Object(je.a)(),l=(i-o)*Ye.b,u=He(Object(Ge.a)(l),["seconds"]),j=o>a?(o-a)/(i-a)*100:5;return Object(U.jsx)(L.i,{children:Object(U.jsxs)(L.j,{children:[Object(U.jsx)(Xe,{children:Object(U.jsx)(L.E,{primaryStep:j})}),Object(U.jsx)(Qe,{children:s(999,u?"".concat(u," left to trade in NFTs"):"Finished!")}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[s(999,"Total NFT's claimed"),":"]}),Object(U.jsx)(L.J,{children:Object(U.jsx)("strong",{children:t?"".concat(n,"/").concat(r):"..."})})]}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[s(999,"Total NFT's burned"),":"]}),Object(U.jsx)(L.J,{children:Object(U.jsx)("strong",{children:t?"".concat(c,"/").concat(r):"..."})})]}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[s(999,"Can be traded until"),":"]}),Object(U.jsxs)("div",{children:[t?Object(U.jsxs)(qe,{href:"https://bscscan.com/block/".concat(i),target:"_blank",rel:"noreferrer noopener",children:["Block ".concat(i),Object(U.jsx)(L.C,{color:"primary",ml:"2px"})]}):"..."," "]})]}),Object(U.jsx)(Ve,{children:s(999,"NFTs can be traded in for CAKE until the above block height")})]})})},$e=function(){var e=Object(R.a)(),t=Object(W.useContext)(fe),n=t.isInitialized,r=t.currentDistributedSupply,c=t.totalSupplyDistributed,a=t.countBunniesBurnt;return Object(U.jsx)(L.i,{children:Object(U.jsxs)(L.j,{children:[Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[e(999,"Total NFT's claimed"),":"]}),Object(U.jsx)(L.J,{children:Object(U.jsx)("strong",{children:n?"".concat(r,"/").concat(c):"..."})})]}),Object(U.jsxs)(ce,{children:[Object(U.jsxs)(L.J,{children:[e(999,"Total NFT's burned"),":"]}),Object(U.jsx)(L.J,{children:Object(U.jsx)("strong",{children:n?"".concat(a,"/").concat(c):"..."})})]})]})})},et=n(756),tt=M.e.div(I||(I=Object(z.a)(["\n  align-items: start;\n  background-color: transparent;\n  border: 2px solid ",";\n  border-radius: 32px;\n  display: flex;\n  padding: 24px;\n"])),(function(e){return e.theme.colors.textDisabled})),nt=M.e.img(B||(B=Object(z.a)(["\n  margin-right: 16px;\n  width: 56px;\n"]))),rt=M.e.div(J||(J=Object(z.a)(["\n  flex: 1;\n"]))),ct=M.e.div(A||(A=Object(z.a)(["\n  align-items: start;\n  display: flex;\n"]))),at=function(e){var t=e.imgSrc,n=e.children;return Object(U.jsxs)(ct,{children:[Object(U.jsx)(nt,{src:t,alt:"card icon"}),Object(U.jsx)(rt,{children:n})]})},it=function(){var e=Object(R.a)();return Object(U.jsx)(tt,{children:Object(U.jsxs)(at,{imgSrc:"/images/present-disabled.svg",children:[Object(U.jsx)(L.r,{mb:"8px",children:e(999,"No NFTs to claim")}),Object(U.jsx)(L.J,{children:e(999,"You have no NFTs to claim at this time, but you can still see the NFTs in this series below.")})]})})},st=function(){var e=Object(R.a)();return Object(U.jsx)(L.i,{isActive:!0,children:Object(U.jsx)(L.j,{children:Object(U.jsxs)(at,{imgSrc:"/images/present.svg",children:[Object(U.jsx)(L.r,{mb:"8px",children:e(999,"You won!")}),Object(U.jsx)(L.J,{children:e(999,"Claim an NFT from the options below!")})]})})})},ot=function(){var e=Object(R.a)();return Object(U.jsx)(L.i,{children:Object(U.jsx)(L.j,{children:Object(U.jsxs)(at,{imgSrc:"/images/present.svg",children:[Object(U.jsx)(L.r,{mb:"8px",children:e(999,"NFT in wallet")}),Object(U.jsx)(L.J,{children:e(999,"Trade in your NFT for CAKE, or just keep it for your collection.")})]})})})},lt=function(){var e=Object(ue.m)().account,t=Object(W.useContext)(fe),n=t.isInitialized,r=t.canClaim,c=t.hasClaimed,a=t.balanceOf,i=Object(R.a)();return e?n?!c&&r?Object(U.jsx)(st,{}):a>0?Object(U.jsx)(ot,{}):Object(U.jsx)(it,{}):Object(U.jsx)(L.J,{children:"..."}):Object(U.jsx)(L.i,{isActive:!0,children:Object(U.jsxs)(L.j,{children:[Object(U.jsx)(L.r,{mb:"8px",children:i(999,"Wallet Disconnected")}),Object(U.jsx)(L.J,{mb:"16px",children:i(999,"Connect to see if you have won an NFT!")}),Object(U.jsx)(et.a,{})]})})},ut=M.e.div(D||(D=Object(z.a)(["\n  align-items: start;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),jt=function(){return Object(W.useContext)(fe).canBurnNft?Object(U.jsxs)(ut,{children:[Object(U.jsx)(Ze,{}),Object(U.jsx)(lt,{})]}):Object(U.jsx)($e,{})},bt=M.e.div(E||(E=Object(z.a)(["\n  border-bottom: 1px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(R.a)();return Object(U.jsx)(pe,{children:Object(U.jsxs)(K.a,{children:[Object(U.jsxs)(bt,{children:[Object(U.jsx)(L.r,{as:"h1",size:"xxl",color:"secondary",mb:"24px",children:"NFTs"}),Object(U.jsx)(L.r,{as:"h2",size:"lg",color:"secondary",children:e(999,"Trade in for CAKE, or keep for your collection!")})]}),Object(U.jsx)(jt,{}),Object(U.jsx)(_e,{}),Object(U.jsx)(q,{})]})})}}}]);
//# sourceMappingURL=8.c6cee948.chunk.js.map