(this["webpackJsonpoa-cssgolf"]=this["webpackJsonpoa-cssgolf"]||[]).push([[0],{56:function(e,n,t){},57:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var s,i,c,a,l,r,o,d,h,j,b,u,f,m,x=t(0),O=t(18),p=t.n(O),g=(t(56),t(57),t(5)),v=t(6),y=t(8),N=t(22),w=t(1),S=Object(v.a)((function(e){e.CssGolfs;var n=Object(y.g)();return Object(w.jsx)("div",{children:Object(w.jsx)(N.a,{children:Object(w.jsx)(y.a,{path:"".concat(n.path),children:Object(w.jsx)("h3",{children:"List"})})})})}))(s||(s=Object(g.a)(["\n  width: 100%;\n  height: 40px;\n  box-shadow: 0 0 5px 2px #ccc;\n  .element__img {\n  }\n  .element__info {\n    .element__title {\n    }\n    .element__description {\n    }\n  }\n"]))),C=t(4),k=t(34),M=t.n(k),T=t(43),L=t(35),z=t.n(L),D=t(36),_=t.n(D),H=Object(v.a)((function(e){var n=e.className,t=e.difficulty;t=Number(t);var s=[1,2,3,4,5].map((function(e){return e<t||e===t?Object(w.jsx)("i",{className:"bi bi-star-fill"},e.toString()):Object(w.jsx)("i",{className:"bi bi-star"},e.toString())}));return Object(w.jsx)("div",{className:n,children:Object(w.jsxs)("h5",{children:["\u984c\u76ee\u63cf\u8ff0",s]})})}))(i||(i=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n"]))),I=t(81),F=t(79),q=t(80),E=Object(v.a)((function(e){var n=e.className,t=e.play,s=Object(x.useState)(!1),i=Object(C.a)(s,2),c=i[0],a=i[1],l=Object(x.useState)(0),r=Object(C.a)(l,2),o=r[0],d=r[1],h=Object(x.useState)({status:!1}),j=Object(C.a)(h,2),b=j[0],u=j[1],f=function(){d(0),a(!1)},m=function(){var e=Object(T.a)(M.a.mark((function e(){var n,t,s,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("#myCSS"),t=document.querySelector("#beCompared"),e.next=4,z()(n,{backgroundColor:null}).then((function(e){return e.toDataURL("image/png",1)}));case 4:return s=e.sent,e.next=7,z()(t,{backgroundColor:null}).then((function(e){return e.toDataURL("image/png",1)}));case 7:return i=e.sent,_.a.outputSettings({useCrossOrigin:!1}),_()(s).compareTo(i).onComplete((function(e){var n,t,s=100-e.misMatchPercentage,i=isNaN(s)?0:(n=s,t=2,Math.round(Math.round(n*Math.pow(10,(t||0)+1))/10)/Math.pow(10,t||0));u({status:!1}),d(i),a(!0)})),e.abrupt("return","done");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:n,children:[Object(w.jsx)("div",{className:"h-15 d-flex align-items-end justify-content-between",children:Object(w.jsx)(H,{difficulty:t.difficulty})}),Object(w.jsx)("div",{className:"h-85",children:Object(w.jsxs)("div",{className:"h-100 pt-2 position-relative",children:[Object(w.jsx)("div",{id:"questText",className:"bg-white border h-100 border-5 rounded position-relative p-2 overflow-auto",children:Object(w.jsx)("p",{className:"m-0",children:t.qTxt})}),Object(w.jsxs)(I.a,{id:"diff",className:"btn btn-danger",onClick:function(){u({status:!0}),m()},variant:"primary",disabled:!1,children:[b.status&&Object(w.jsx)(F.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),Object(w.jsx)("span",{className:"visually-visible",children:"\u9001\u51fa\u7b54\u6848"})]}),Object(w.jsxs)(q.a,{show:c,onExit:function(){d(0),u({status:!1})},onHide:f,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(w.jsx)(q.a.Header,{closeButton:!0,children:Object(w.jsx)(q.a.Title,{id:"contained-modal-title-vcenter",children:"Modal heading"})}),Object(w.jsx)(q.a.Body,{children:o}),Object(w.jsx)(q.a.Footer,{children:Object(w.jsx)(I.a,{variant:"secondary",onClick:f,children:"Close"})})]})]})})]})}))(c||(c=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  #diff {\n    bottom: 10px;\n    right: 10px;\n    position: absolute;\n  }\n\n  .h-15 {\n    height: 15%;\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n      margin: 0;\n      i {\n        margin-left: 5px;\n        font-size: 0.5rem;\n        color: yellow;\n      }\n      i:first-child {\n        margin-left: 10px;\n      }\n    }\n  }\n  .h-85 {\n    height: 85%;\n\n    #questText {\n      overflow-y: scroll;\n    }\n\n    #questText::-webkit-scrollbar {\n      display: none;\n    }\n\n    #questText {\n      -ms-overflow-style: none;\n      scrollbar-width: none;\n    }\n\n    \n  }\n"]))),P=Object(v.a)((function(e){var n=e.className,t=e.play.hint;return Object(w.jsx)("div",{className:n,children:void 0!==t&&JSON.parse(t).map((function(e,n){var t=Object(C.a)(e,2),s=t[0],i=t[1];return Object(w.jsx)("p",{style:{background:s},children:i},n)}))})}))(a||(a=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  p {\n    cursor: auto;\n    box-shadow:inset 0px 0px 2px 1px rgba(0, 0, 0, 0.2);\n    font-size: .5rem;\n    width: 200%;\n    margin: 0;\n    padding: .5rem;\n    border-top: 1px #dee2e6 solid;\n    border-bottom: 1px #dee2e6 solid;\n  }\n  p:first-child {\n    border-top: 2px #dee2e6 solid;\n  }\n  p:last-child {\n    border-bottom: 2px #dee2e6 solid;\n  }\n"]))),B=Object(v.a)((function(e){var n=e.className,t=e.play;return Object(w.jsxs)("div",{className:n,children:[Object(w.jsx)("div",{className:"h-15 d-flex align-items-end",children:Object(w.jsx)("h5",{className:"c-white-o70 m-0",children:"\u63d0\u793a"})}),Object(w.jsx)("div",{className:"h-85",children:Object(w.jsx)("div",{className:"h-100 pt-2",children:Object(w.jsx)("div",{className:"bg-white border h-100 border-5 rounded",children:Object(w.jsx)(P,{play:t})})})})]})}))(l||(l=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  font-family: 'Fira Code', monospace;\n  .h-15 {\n    height: 15%;\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n    }\n  }\n\n  .h-85 {\n    height: 85%;\n  }\n"]))),A=Object(v.a)((function(e){var n=e.className,t=e.play;return Object(w.jsx)("div",{className:n,children:void 0!==t&&Object(w.jsxs)("div",{id:"questionBundle",children:[Object(w.jsx)("div",{dangerouslySetInnerHTML:{__html:t.qHtml}}),Object(w.jsx)("style",{dangerouslySetInnerHTML:{__html:t.qCss}})]})})}))(r||(r=Object(g.a)(["\n\n  width: 100%;\n  height: 100%;\n  #questionBundle, #questionBundle > div:first-Child {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n"]))),U=Object(v.a)((function(e){var n=e.className,t=e.play;return Object(w.jsx)("div",{id:"beCompared",className:n,children:Object(w.jsx)(A,{play:t})})}))(o||(o=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n"]))),J=Object(v.a)((function(e){var n=e.className,t=e.play;return Object(w.jsxs)("div",{className:n,children:[Object(w.jsx)("div",{className:"h-5",children:Object(w.jsx)("h5",{className:"m-0",children:"\u984c\u76ee\u5716\u5f62\u8981\u6c42"})}),Object(w.jsx)("div",{className:"h-95",children:Object(w.jsx)("div",{className:"h-100 pt-2",children:Object(w.jsx)("div",{className:"bg-white border h-100 border border-5 rounded",children:Object(w.jsx)(U,{play:t})})})})]})}))(d||(d=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n\n  .h-5 {\n    height: 5%;\n\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n    }\n  }\n\n  .h-95 {\n    height: 95%;\n  }\n"]))),R=Object(v.a)((function(e){var n=e.className,t=e.answerHTML,s=e.answerCSS,i=e.play,c=Object(x.useState)({active:!1}),a=Object(C.a)(c,2),l=a[0],r=a[1];return Object(w.jsxs)("div",{className:n,children:[Object(w.jsxs)("div",{id:"flexSwitch",className:"d-flex p-0 align-items-end form-check form-switch position-absolute",children:[Object(w.jsx)("input",{className:"form-check-input m-0 me-1",type:"checkbox",id:"flexSwitchCheckChecked",defaultChecked:l.active,onChange:function(){return r({active:!l.active})}}),Object(w.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"\u984c\u76ee\u8207\u4f5c\u7b54\u5716\u5f62\u5206\u5272\u756b\u9762"})]}),Object(w.jsx)("div",{id:"myCSS",dangerouslySetInnerHTML:{__html:t}}),Object(w.jsx)("style",{dangerouslySetInnerHTML:{__html:s}}),Object(w.jsxs)("div",{id:"opDisplay",style:{visibility:l.active?"visible":"hidden"},children:[Object(w.jsx)("div",{id:"line",className:"position-absolute w-100 h-100 border border-1 border-top-0 border-start-0 border-bottom-0"}),Object(w.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100 w-200",children:Object(w.jsx)(A,{play:i})})]})]})}))(h||(h=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  .w-200 {\n    width: 200%;\n  }\n  #flexSwitch {\n    color: #aaa;\n    left: 10px;\n    bottom: 8px;\n    line-height: 1;\n    z-index: 12;\n\n    label {\n      font-size: 0.75rem;\n    }\n  }\n\n  #myCSS {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 10;\n  }\n\n  #opDisplay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 11;\n    visibility: hidden;\n    overflow: hidden;\n  }\n"]))),X=Object(v.a)((function(e){var n=e.className,t=e.answerHTML,s=e.answerCSS,i=(e.answerDefaultCSS,e.play);return Object(w.jsxs)("div",{className:n,children:[Object(w.jsx)("div",{className:"h-5",children:Object(w.jsx)("h5",{className:"m-0",children:"\u4f5c\u7b54\u72c0\u6cc1"})}),Object(w.jsx)("div",{className:"h-95",children:Object(w.jsx)("div",{className:"h-100 pt-2",children:Object(w.jsx)("div",{className:"bg-white border h-100 border border-5 rounded",children:Object(w.jsx)(R,{play:i,answerHTML:t,answerCSS:s})})})})]})}))(j||(j=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n\n  .h-5 {\n    height: 5%;\n\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n    }\n  }\n\n  .h-95 {\n    height: 95%;\n  }\n"]))),Y=t(49),G=Object(v.a)((function(e){var n=e.className,t=(e.code,e.filename),s=e.handleEditorChange,i=e.answerDefaultCSS,c=e.answerDefaultHTML,a=Object(x.useState)(t.split(".")[1]),l=Object(C.a)(a,1)[0],r=Object(x.useState)(""),o=Object(C.a)(r,2),d=o[0],h=o[1];return Object(x.useEffect)((function(){void 0===c&&void 0===i||h("html"===l?c:i)}),[c,i,l,s,h]),Object(x.useEffect)((function(){void 0!==d&&s({language:l,code:d})}),[d]),Object(w.jsxs)("div",{className:n,children:[Object(w.jsx)("p",{children:l.toUpperCase()}),Object(w.jsx)(Y.a,{height:"90%",theme:"vs-light",path:t,defaultLanguage:l,value:d,onChange:function(e){s({language:l,code:e})}})]})}))(b||(b=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.25rem;\n  border: 5px solid #dee2e6;\n  background: #fff;\n  overflow: hidden;\n  position: relative;\n  p {\n    font-family: 'Fira Code', monospace;\n    monospace;\n    height: 10%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 5px 7px;\n    background: #dee3e6;\n    color: #222;\n    font-size: 1rem;\n    font-weight: 500;\n    border-bottom: 5px solid #dee2e6;\n  }\n"]))),K=t(47),V=t.n(K),W=t(50),Q=t(48),Z=t.n(Q),$=Object(W.a)(u||(u=Object(g.a)(["\n  display: block;\n  margin: 0 auto;\n"]))),ee=Object(v.a)((function(e){var n=e.className,t=Object(y.f)().topicId,s=Object(x.useState)({status:!0}),i=Object(C.a)(s,2),c=i[0],a=i[1],l=Object(x.useState)({}),r=Object(C.a)(l,2),o=r[0],d=r[1],h=Object(x.useState)(""),j=Object(C.a)(h,2),b=j[0],u=j[1],f=Object(x.useState)(""),m=Object(C.a)(f,2),O=m[0],p=m[1],g=Object(x.useState)(""),v=Object(C.a)(g,2),N=v[0],S=v[1],k=Object(x.useState)(""),M=Object(C.a)(k,2),T=M[0],L=M[1],z=function(e){var n=e.language,t=e.code;"html"===n?u(t):S(t)},D=Object(x.useMemo)((function(){return(new V.a.cssjs).parseCSS(N).map((function(e){return 0===e.selector.split(",").length?"#myCSS "+e.selector+" {\n"+e.rules.map((function(e){return e.directive+": "+e.value+";"})).join("\n")+"}":e.selector.split(",").map((function(e){return"#myCSS "+e})).join(",")+" {\n"+e.rules.map((function(e){return e.directive+": "+e.value+";"})).join("\n")+"}"})).map((function(e){return e+"\n"})).join("\n")}),[N]);return Object(x.useEffect)((function(){if(void 0!==t){var e="".concat("https://script.google.com/macros/s/AKfycbxwgFFR9XwjCwempFDWaMnwmY9T19k0F36aLSMYnSvAUIdeRYCLeL2cN4PKVE-2JIUXAw/exec","?playId=").concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){"false"===e.status?console.log("\u6c92\u6709\u6b64\u9801\u9762"):1===e.length?d(e[0]):console.log("\u5217\u8868\u9801\u9762")}))}}),[t]),Object(x.useEffect)((function(){void 0!==o.aDefaultHtml&&void 0!==o.aDefaultCss&&(p(o.aDefaultHtml),L(o.aDefaultCss),a({status:!1}))}),[o,p,L,a]),Object(w.jsxs)("div",{className:n,children:[Object(w.jsx)("div",{className:"loadingPage",style:{visibility:c.status?"visible":"hidden",opacity:c.status?1:0,zIndex:c.status?999:-999},children:Object(w.jsx)("div",{className:"sweet-loading",style:{visibility:c.status?"visible":"hidden",opacity:c.status?1:0,zIndex:c.status?999:-999},children:Object(w.jsx)(Z.a,{color:"#ffffff",css:$,size:10})})}),Object(w.jsxs)("div",{className:"mainPage",children:[Object(w.jsxs)("div",{className:"col-8 d-flex flex-column justify-content-center",children:[Object(w.jsxs)("div",{className:"h-36 p-1 pb-2",children:[Object(w.jsx)("div",{className:"h-25 pb-2",children:Object(w.jsxs)("div",{className:"h-100 d-flex align-items-end",children:[Object(w.jsx)("img",{className:"me-3",src:"https://cdn1.koding.school/assets/logo/oa-logo-mini-730fe59f98d967929255f884abf83ff8f3934387d50b67403be1c4cd1eac6561.png",alt:"",height:"100%"}),Object(w.jsxs)("h1",{id:"titleName",children:["/ Challenge #",o.gamesID," - ",o.gamesName," / #",o.playId," - ",o.title]})]})}),Object(w.jsx)("div",{className:"h-75 pt-2",children:Object(w.jsxs)("div",{className:"d-flex h-100",children:[Object(w.jsx)("div",{className:"col-9 pe-2",children:Object(w.jsx)(E,{play:o})}),Object(w.jsx)("div",{className:"col-3 ps-2",children:Object(w.jsx)(B,{play:o})})]})})]}),Object(w.jsxs)("div",{className:"h-60 p-1 pt-2 d-flex",children:[Object(w.jsx)("div",{className:"col pe-2",children:Object(w.jsx)(J,{play:o})}),Object(w.jsx)("div",{className:"col ps-2",children:Object(w.jsx)(X,{play:o,answerHTML:b,answerCSS:D})})]})]}),Object(w.jsxs)("div",{className:"col-4 d-flex flex-column justify-content-center ps-2",children:[Object(w.jsx)("div",{className:"h-48 p-2 pt-1 position-relative",children:Object(w.jsx)(G,{handleEditorChange:z,filename:"index.html",code:b,answerDefaultHTML:O})}),Object(w.jsx)("div",{className:"h-48 p-2 pb-1 position-relative",children:Object(w.jsx)(G,{handleEditorChange:z,filename:"style.css",code:N,answerDefaultCSS:T})})]})]})]})}))(f||(f=Object(g.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative; \n\n  .mainPage {\n    width: 100%;\n    height: 100%;\n    background-color: #363732;\n    position: absolute; \n    display: flex; \n    z-index: 0;\n  }\n\n  .loadingPage{\n    width: 100%;\n    height: 100%;\n    position: absolute; \n    background-color: #363732;\n    opacity: 1;\n    visibility: visible;\n    transition: All 0.2s ease-out;\n  }\n\n  .sweet-loading {\n    width: 100%;\n    height: 100%;\n    display: flex; \n    align-items: center;\n    position: absolute; \n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #222;\n    opacity: 1;\n    visibility: visible;\n    transition: All 0.2s ease-out;\n  }  \n\n  #titleName {\n    font-size: 1.2rem;\n    font-family: 'Fira Code',monospace;\n    line-height: 1;\n    color: #fff;\n    margin: 0;\n    padding-bottom: 10px;\n  }\n  .h-36 {\n    height: 36%;\n  }\n  .h-48 {\n    height: 48%;\n  }\n  .h-60 {\n    height: 60%;\n  }\n"]))),ne=Object(v.a)((function(e){e.CssGolf;var n=Object(y.g)();return Object(w.jsx)("div",{className:"h-100 w-100",children:Object(w.jsx)(N.a,{children:Object(w.jsx)(y.a,{path:"".concat(n.path,"/:topicId"),children:Object(w.jsx)(ee,{})})})})}))(m||(m=Object(g.a)([""])));var te=function(){return Object(w.jsx)(N.a,{children:Object(w.jsxs)(y.c,{children:[Object(w.jsx)(y.a,{path:"/cssgolf",children:Object(w.jsx)(ne,{})}),Object(w.jsx)(y.a,{path:"/cssgolfs",children:Object(w.jsx)(S,{})})]})})},se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(n){var t=n.getCLS,s=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),s(e),i(e),c(e),a(e)}))},ie=document.getElementById("root");p.a.render(Object(w.jsx)(x.StrictMode,{children:Object(w.jsx)(te,{})}),ie),se()}},[[75,1,2]]]);
//# sourceMappingURL=main.943eadfb.chunk.js.map