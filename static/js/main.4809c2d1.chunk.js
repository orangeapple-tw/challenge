(this["webpackJsonpoa-cssgolf"]=this["webpackJsonpoa-cssgolf"]||[]).push([[0],{110:function(e,n,t){"use strict";t.r(n);var s,a,i,c,r,o,l,d,h,b,j,u,m,f,O,g=t(0),p=t(25),x=t.n(p),v=(t(91),t(92),t(9)),y=t(10),w=t(23),N=t.n(w),S=t(33),C=t(4),k=t(11),B=t(115),z=t(114),L=t(82),T=t.n(L),q=t(84),P=t(66),A=t.n(P),M=t(67),F=t.n(M),I=t(68),H=t.n(I),E=t(1),D=Object(y.a)((function(e){var n=e.className,t=e.difficulty;t=Number(t);var s=[1,2,3,4,5].map((function(e){return e<t||e===t?Object(E.jsx)("i",{className:"bi bi-star-fill"},e.toString()):Object(E.jsx)("i",{className:"bi bi-star"},e.toString())}));return Object(E.jsx)("div",{className:n,children:Object(E.jsxs)("h5",{children:["\u984c\u76ee\u63cf\u8ff0",s]})})}))(s||(s=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n"]))),R=Object(y.a)((function(e){var n=e.className,t=e.play;return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)("div",{className:"h-15 d-flex align-items-end justify-content-between",children:Object(E.jsx)(D,{difficulty:t.difficulty})}),Object(E.jsx)("div",{className:"h-85",children:Object(E.jsx)("div",{className:"h-100 pt-2 position-relative",children:Object(E.jsx)("div",{id:"questText",className:"bg-white border h-100 border-5 rounded position-relative p-2 overflow-auto",children:Object(E.jsx)("p",{className:"m-0",children:t.qTxt})})})})]})}))(a||(a=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  .h-15 {\n    height: 15%;\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n      margin: 0;\n      i {\n        margin-left: 5px;\n        font-size: 0.5rem;\n        color: yellow;\n      }\n      i:first-child {\n        margin-left: 10px;\n      }\n    }\n  }\n  .h-85 {\n    height: 85%;\n\n    #questText {\n      overflow-y: scroll;\n    }\n\n    #questText::-webkit-scrollbar {\n      display: none;\n    }\n\n    #questText {\n      -ms-overflow-style: none;\n      scrollbar-width: none;\n    }\n\n    \n  }\n"]))),W=Object(y.a)((function(e){var n=e.className,t=e.play.hint;return Object(E.jsx)("div",{className:n,children:void 0!==t&&JSON.parse(t).map((function(e,n){var t=Object(C.a)(e,2),s=t[0],a=t[1];return Object(E.jsx)("p",{style:{background:s},children:a},n)}))})}))(i||(i=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  p {\n    cursor: auto;\n    box-shadow:inset 0px 0px 2px 1px rgba(0, 0, 0, 0.2);\n    font-size: .5rem;\n    width: 200%;\n    margin: 0;\n    padding: .5rem;\n    border-top: 1px #dee2e6 solid;\n    border-bottom: 1px #dee2e6 solid;\n  }\n  p:first-child {\n    border-top: 2px #dee2e6 solid;\n  }\n  p:last-child {\n    border-bottom: 2px #dee2e6 solid;\n  }\n"]))),_=Object(y.a)((function(e){var n=e.className,t=e.play;return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)("div",{className:"h-15 d-flex align-items-end",children:Object(E.jsx)("h5",{className:"c-white-o70 m-0",children:"\u63d0\u793a"})}),Object(E.jsx)("div",{className:"h-85",children:Object(E.jsx)("div",{className:"h-100 pt-2",children:Object(E.jsx)("div",{className:"bg-white border h-100 border-5 rounded",children:Object(E.jsx)(W,{play:t})})})})]})}))(c||(c=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  font-family: 'Fira Code', monospace;\n  .h-15 {\n    height: 15%;\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n    }\n  }\n\n  .h-85 {\n    height: 85%;\n  }\n"]))),U=Object(y.a)((function(e){var n=e.className,t=e.play,s=e.qCSSParsed;return Object(E.jsx)("div",{className:n,children:void 0!==t&&Object(E.jsxs)("div",{id:"questionBundle",children:[Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:t.qHtml}}),Object(E.jsx)("style",{dangerouslySetInnerHTML:{__html:s}})]})})}))(r||(r=Object(v.a)(["\n\n  width: 100%;\n  height: 100%;\n  #questionBundle, #questionBundle > div:first-Child {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n"]))),G=Object(y.a)((function(e){var n=e.className,t=e.play,s=e.qCSSParsed;return Object(E.jsx)("div",{id:"beCompared",className:n,children:Object(E.jsx)(U,{play:t,qCSSParsed:s})})}))(o||(o=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n"]))),J=Object(y.a)((function(e){var n=e.className,t=e.play,s=e.qCSSParsed;return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)("div",{className:"h-5",children:Object(E.jsx)("h5",{className:"m-0",children:"\u984c\u76ee\u5716\u5f62\u8981\u6c42"})}),Object(E.jsx)("div",{className:"h-95",children:Object(E.jsx)("div",{className:"h-100 pt-2",children:Object(E.jsx)("div",{className:"bg-white border h-100 border border-5 rounded",children:Object(E.jsx)(G,{play:t,qCSSParsed:s})})})})]})}))(l||(l=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  .h-5 {\n    height: 5%;\n\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n    }\n  }\n\n  .h-95 {\n    height: 95%;\n  }\n"]))),X=Object(y.a)((function(e){var n=e.className,t=e.answerHTML,s=e.answerCSS,a=e.play,i=Object(g.useState)({active:!1}),c=Object(C.a)(i,2),r=c[0],o=c[1];return Object(E.jsxs)("div",{className:n,children:[Object(E.jsxs)("div",{id:"flexSwitch",className:"d-flex p-0 align-items-end form-check form-switch position-absolute",children:[Object(E.jsx)("input",{className:"form-check-input m-0 me-1",type:"checkbox",id:"flexSwitchCheckChecked",defaultChecked:r.active,onChange:function(){return o({active:!r.active})}}),Object(E.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"\u984c\u76ee\u8207\u4f5c\u7b54\u5716\u5f62\u5206\u5272\u756b\u9762"})]}),Object(E.jsx)("div",{id:"myCSS",dangerouslySetInnerHTML:{__html:t}}),Object(E.jsx)("style",{dangerouslySetInnerHTML:{__html:s}}),Object(E.jsxs)("div",{id:"opDisplay",style:{visibility:r.active?"visible":"hidden"},children:[Object(E.jsx)("div",{id:"line",className:"position-absolute w-100 h-100 border border-1 border-top-0 border-start-0 border-bottom-0"}),Object(E.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100 w-200",children:Object(E.jsx)(U,{play:a})})]})]})}))(d||(d=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  .w-200 {\n    width: 200%;\n  }\n  #flexSwitch {\n    color: #aaa;\n    left: 10px;\n    bottom: 8px;\n    line-height: 1;\n    z-index: 12;\n\n    label {\n      font-size: 0.75rem;\n    }\n  }\n\n  #myCSS {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 10;\n    overflow: hidden;\n  }\n\n  #opDisplay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 11;\n    visibility: hidden;\n    overflow: hidden;\n  }\n"]))),Y=Object(y.a)((function(e){var n=e.className,t=e.answerHTML,s=e.answerCSS,a=e.play;return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)("div",{className:"h-5",children:Object(E.jsx)("h5",{className:"m-0",children:"\u4f5c\u7b54\u72c0\u6cc1"})}),Object(E.jsx)("div",{className:"h-95",children:Object(E.jsx)("div",{className:"h-100 pt-2",children:Object(E.jsx)("div",{className:"bg-white border h-100 border border-5 rounded",children:Object(E.jsx)(X,{play:a,answerHTML:t,answerCSS:s})})})})]})}))(h||(h=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  .h-5 {\n    height: 5%;\n\n    h5 {\n      font-size: 1.25rem;\n      color: #fff;\n    }\n  }\n\n  .h-95 {\n    height: 95%;\n  }\n"]))),K=t(59),V=Object(y.a)((function(e){var n=e.className,t=e.language,s=e.handleEditorChange,a=e.code,i=Object(g.useState)("".concat("HTML"===t?"index.html":"styles.css")),c=Object(C.a)(i,2),r=c[0];c[1];return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)("p",{children:t}),Object(E.jsx)(K.a,{path:r,defaultLanguage:r.split(".")[1],height:"90%",theme:"vs-light",options:{acceptSuggestionOnCommitCharacter:!0,acceptSuggestionOnEnter:"on",accessibilitySupport:"auto",autoIndent:!1,automaticLayout:!0,codeLens:!0,colorDecorators:!0,contextmenu:!0,cursorBlinking:"blink",cursorSmoothCaretAnimation:!1,cursorStyle:"line",disableLayerHinting:!1,disableMonospaceOptimizations:!1,dragAndDrop:!1,fixedOverflowWidgets:!1,folding:!0,foldingStrategy:"auto",fontLigatures:!1,formatOnPaste:!1,formatOnType:!1,hideCursorInOverviewRuler:!1,highlightActiveIndentGuide:!0,links:!0,mouseWheelZoom:!1,multiCursorMergeOverlapping:!0,multiCursorModifier:"alt",overviewRulerBorder:!0,overviewRulerLanes:2,quickSuggestions:!0,quickSuggestionsDelay:100,readOnly:!1,renderControlCharacters:!1,renderFinalNewline:!0,renderIndentGuides:!0,renderLineHighlight:"all",renderWhitespace:"none",revealHorizontalRightPadding:30,roundedSelection:!0,rulers:[],scrollBeyondLastColumn:5,scrollBeyondLastLine:!0,selectOnLineNumbers:!0,selectionClipboard:!0,selectionHighlight:!0,showFoldingControls:"mouseover",smoothScrolling:!1,suggestOnTriggerCharacters:!0,wordBasedSuggestions:!0,wordSeparators:"~!@#$%^&*()-=+[{]}|;:'\",.<>/?",wordWrap:"off",wordWrapBreakAfterCharacters:"\t})]?|&,;",wordWrapBreakBeforeCharacters:"{([+",wordWrapBreakObtrusiveCharacters:".",wordWrapColumn:80,wordWrapMinified:!0,wrappingIndent:"none"},value:a,onChange:function(e){s(e)}})]})}))(b||(b=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.25rem;\n  border: 5px solid #dee2e6;\n  background: #fff;\n  overflow: hidden;\n  position: relative;\n  p {\n    font-family: 'Fira Code', monospace;\n    monospace;\n    height: 10%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 5px 7px;\n    background: #dee3e6;\n    color: #222;\n    font-size: 1rem;\n    font-weight: 500;\n    border-bottom: 5px solid #dee2e6;\n  }\n"]))),Z=t(113),$=t(118),Q=t(77),ee=t(117),ne=t(116),te=t(83),se=Object(y.a)((function(e){var n=e.className,t=e.code,s=e.language;return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)("p",{children:s.toUpperCase()}),Object(E.jsx)(K.a,{height:"80%",theme:"vs-light",defaultLanguage:s,value:t,options:{readOnly:!0}})]})}))(j||(j=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.25rem;\n  border: 5px solid #dee2e6;\n  background: #fff;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 0.5rem;\n  p {\n    font-family: 'Fira Code', monospace;\n    monospace;\n    height: 15%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 5px 7px;\n    background: #dee3e6;\n    color: #222;\n    font-size: 1rem;\n    font-weight: 500;\n    border-bottom: 5px solid #dee2e6;\n  }\n"]))),ae=Object(y.a)((function(e){var n=e.className,t=e.pinRequired,s=e.pin,a=e.point,i=e.showAnswer,c=e.handleHTMLEditorChange,r=e.handleCSSEditorChange,o=e.handleShowAnswer,l=e.resembleNum,d=e.handleClose,h=e.qHTML,b=e.qCSS,j=e.btnClick,u=Object(g.useState)(""),m=Object(C.a)(u,2),f=m[0],O=m[1],p=Object(g.useState)(""),x=Object(C.a)(p,2),v=x[0],y=x[1],w=Object(g.useState)(""),k=Object(C.a)(w,2),B=k[0],z=k[1];return Object(E.jsx)("div",{className:n,children:Object(E.jsxs)("div",{className:"d-grid gap-2 h-100 w-100",children:[(a<99||99===a)&&l<3&&"sendAnsBtn"===j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"\u771f\u53ef\u60dc\uff01\u9019\u6b21\u6c92\u6709\u901a\u904e\u95dc\u5361\u5537\uff01"}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:d,children:"\u7e7c\u7e8c\u6311\u6230"})]}),(a<99||99===a)&&(3===l||l>3)&&!i&&"sendAnsBtn"===j&&"False"===t&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"\u771f\u53ef\u60dc\uff01\u9019\u6b21\u6c92\u6709\u901a\u904e\u6311\u6230\u984c\u5537\uff01"}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:d,children:"\u8fd4\u56de\u6311\u6230\u984c"}),Object(E.jsx)(Z.a,{variant:"success",size:"lg",onClick:function(){o(!0)},children:"\u67e5\u770b\u8001\u5e2b\u7684\u4f5c\u6cd5"})]}),(a<99||99===a)&&(3===l||l>3)&&!i&&"sendAnsBtn"===j&&"True"===t&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"\u771f\u53ef\u60dc\uff01\u9019\u6b21\u6c92\u6709\u901a\u904e\u6311\u6230\u984c\u5537\uff01"}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:d,children:"\u8fd4\u56de\u6311\u6230\u984c"}),Object(E.jsxs)($.a,{className:"mb-3",children:[Object(E.jsx)(Q.a,{placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc\u4f86\u67e5\u770b\u8001\u5e2b\u7684\u4f5c\u6cd5","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(e){var n=e.target.value;z(n)}}),Object(E.jsx)(Z.a,{size:"lg",variant:"outline-success",id:"button-addon2",onClick:function(){B===s&&o(!0)},children:"\u9001\u51fa"})]})]}),(a<99||99===a)&&i&&"sendAnsBtn"===j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"\u771f\u53ef\u60dc\uff01\u9019\u6b21\u6c92\u6709\u901a\u904e\u6311\u6230\u984c\u5537\uff01"}),Object(E.jsx)(se,{language:"html",code:h}),Object(E.jsx)(se,{language:"css",code:b}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:function(){d()},children:"\u8fd4\u56de\u6311\u6230\u984c"})]}),a>99&&!i&&"sendAnsBtn"===j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"\u606d\u559c\u4f60\uff01\u901a\u904e\u6311\u6230\u984c\u56c9\uff01"}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:d,children:"\u8fd4\u56de\u6311\u6230\u984c"}),Object(E.jsx)(Z.a,{variant:"success",size:"lg",onClick:function(){o(!0)},children:"\u67e5\u770b\u8001\u5e2b\u7684\u4f5c\u6cd5"})]}),a>99&&i&&"sendAnsBtn"===j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h5",{children:"\u606d\u559c\u4f60\uff01\u901a\u904e\u6311\u6230\u984c\u56c9\uff01"}),Object(E.jsx)(se,{language:"html",code:h}),Object(E.jsx)(se,{language:"css",code:b}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:d,children:"\u8fd4\u56de\u6311\u6230\u984c"})]}),"sendPINBtn"===j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between align-content-end",children:[Object(E.jsx)("h5",{children:"\u8acb\u8f38\u5165\u7a0b\u5f0f\u78bc\u5e8f\u865f"}),Object(E.jsxs)("h5",{style:{fontSize:".2rem",color:32!==f.length?"#aaa":"green"},children:[f.length," / 32"]})]}),Object(E.jsxs)(ee.a,{children:[Object(E.jsx)(ne.a,{bsPrefix:"alert alert-success myalert ".concat("true"===v&&"op-1"," ").concat("false"===v&&"op-0"),children:"\u6388\u6b0a\u78bc\u8f09\u5165\u6210\u529f"}),Object(E.jsx)(ne.a,{bsPrefix:"alert alert-danger myalert ".concat("false"===v&&"op-1"," ").concat("true"===v&&"op-0"),children:"\u6388\u6b0a\u78bc\u8f09\u5165\u5931\u6557"}),Object(E.jsxs)($.a,{children:[Object(E.jsx)(ee.a.Control,{placeholder:"","aria-label":"Recipient's username","aria-describedby":"basic-addon2",bsPrefix:"form-control my-1 bdr0",onChange:function(e){return O(e.target.value)}}),Object(E.jsx)(Z.a,{disabled:32!==f.length,bsPrefix:"my-1 btn btn-outline-secondary btn-lg",id:"basic-addon2",onClick:function(){(function(){var e=Object(S.a)(N.a.mark((function e(n){var t,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementsByTagName("FORM")[0],s=t.getElementsByTagName("INPUT")[0],e.next=4,Object(te.a)("GET /gists/{gist_id}",{gist_id:n}).catch((function(e){return y("false"),s.value="",O(""),setTimeout((function(){y("")}),1e3),e})).then((function(e){if(200===e.status){var n=e.data.files,t=n["index.html"].content,a=n["styles.css"].content;c(t),r(a),y("true"),O(""),s.value="",setTimeout((function(){y("")}),1e3),d()}}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}})()(f)},children:"\u9001\u51fa"})]})]}),Object(E.jsx)(Z.a,{variant:"secondary",size:"lg",onClick:function(){d()},children:"\u8fd4\u56de\u6311\u6230\u984c"})]})]})})}))(u||(u=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  .bdr0 {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .myalert {\n    z-index: 2000;\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    transition: all 0.5s ease-out;\n    opacity: 0\n  }\n  .op-0 {\n    opacity: 0\n  }\n  .op-1 {\n    opacity: 1\n  }\n  \n"]))),ie=Object(q.a)(m||(m=Object(v.a)(["\n  display: block;\n  margin: 0 auto;\n"]))),ce=Object(y.a)((function(e){var n=e.className,t=Object(k.f)().topicId,s=Object(g.useState)({status:!0}),a=Object(C.a)(s,2),i=a[0],c=a[1],r=Object(g.useState)({}),o=Object(C.a)(r,2),l=o[0],d=o[1],h=Object(g.useState)(""),b=Object(C.a)(h,2),j=b[0],u=b[1],m=Object(g.useState)(""),f=Object(C.a)(m,2),O=f[0],p=f[1],x=Object(g.useState)(""),v=Object(C.a)(x,2),y=v[0],w=v[1],L=Object(g.useState)(""),q=Object(C.a)(L,2),P=q[0],M=q[1],I=Object(g.useState)(""),D=Object(C.a)(I,2),W=D[0],U=D[1],G=Object(g.useState)(""),X=Object(C.a)(G,2),K=X[0],Z=X[1],$=function(e){M(e)},Q=function(e){U(e)},ee=Object(g.useMemo)((function(){return(new A.a.cssjs).parseCSS(W).map((function(e){return 0===e.selector.split(",").length?"#myCSS "+e.selector+" {\n"+e.rules.map((function(e){return e.directive+": "+e.value+";"})).join("\n")+"}":e.selector.split(",").map((function(e){return"#myCSS "+e})).join(",")+" {\n"+e.rules.map((function(e){return e.directive+": "+e.value+";"})).join("\n")+"}"})).map((function(e){return e+"\n"})).join("\n")}),[W]);Object(g.useEffect)((function(){if(void 0!==t){var e="".concat("https://script.google.com/macros/s/AKfycbxwgFFR9XwjCwempFDWaMnwmY9T19k0F36aLSMYnSvAUIdeRYCLeL2cN4PKVE-2JIUXAw/exec","?playId=").concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){"false"===e.status?console.log("\u6c92\u6709\u6b64\u9801\u9762"):1===e.length?d(e[0]):console.log("\u5217\u8868\u9801\u9762")}))}}),[t]),Object(g.useEffect)((function(){var e,n;void 0!==l.aDefaultHtml&&void 0!==l.aDefaultCss&&(M(l.aDefaultHtml),U(l.aDefaultCss),u(l.qHtml),p(l.qCss),c({status:!1}),w((e=l.qCss,n="#questionBundle",(new A.a.cssjs).parseCSS(e).map((function(e){return 0===e.selector.split(",").length?"".concat(n," ").concat(e.selector," {\n")+e.rules.map((function(e){return e.directive+": "+e.value+";"})).join("\n")+"}":e.selector.split(",").map((function(e){return"".concat(n," ").concat(e)})).join(",")+" {\n"+e.rules.map((function(e){return e.directive+": "+e.value+";"})).join("\n")+"}"})).map((function(e){return e+"\n"})).join("\n"))),ce(l.pinRequired),de(l.pin))}),[l]);var ne=Object(g.useState)(!1),te=Object(C.a)(ne,2),se=te[0],ce=te[1],re=Object(g.useState)(""),oe=Object(C.a)(re,2),le=oe[0],de=oe[1],he=Object(g.useState)(!1),be=Object(C.a)(he,2),je=be[0],ue=be[1],me=Object(g.useState)(0),fe=Object(C.a)(me,2),Oe=fe[0],ge=fe[1],pe=Object(g.useState)({status:!1}),xe=Object(C.a)(pe,2),ve=xe[0],ye=xe[1],we=Object(g.useState)(0),Ne=Object(C.a)(we,2),Se=Ne[0],Ce=Ne[1],ke=Object(g.useState)(!1),Be=Object(C.a)(ke,2),ze=Be[0],Le=Be[1],Te=function(){ue(!1)},qe=function(){var e=Object(S.a)(N.a.mark((function e(){var n,t,s,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("#myCSS"),t=document.querySelector("#beCompared"),e.next=4,F()(n,{backgroundColor:null}).then((function(e){return e.toDataURL("image/png",1)}));case 4:return s=e.sent,e.next=7,F()(t,{backgroundColor:null}).then((function(e){return e.toDataURL("image/png",1)}));case 7:return a=e.sent,H.a.outputSettings({useCrossOrigin:!1}),H()(s).compareTo(a).onComplete((function(e){var n,t,s=100-e.misMatchPercentage,a=isNaN(s)?0:(n=s,t=2,Math.round(Math.round(n*Math.pow(10,(t||0)+1))/10)/Math.pow(10,t||0));ye({status:!1}),ge(a),ue(!0)})),e.abrupt("return","done");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)(B.a,{bsPrefix:"modal",centered:!0,"aria-labelledby":"contained-modal-title-vcenter",onExited:function(){ge(0),ye({status:!1}),Le(!1)},show:je,onHide:Te,backdrop:"static",children:Object(E.jsx)(B.a.Body,{bsPrefix:"modal-body \n                    ".concat((Oe<99||99===Oe)&&"sendAnsBtn"===K&&!ze&&Se<3?"modal-body-fail1":"","\n                    ").concat((Oe<99||99===Oe)&&"sendAnsBtn"===K&&!ze&&(3===Se||Se>3)?"modal-body-fail2":"","\n                    ").concat(Oe>99&&"sendAnsBtn"===K&&!ze?"modal-body-success":"","\n                    ").concat("sendPINBtn"===K?"modal-body-answer":""),children:Object(E.jsx)(ae,{pin:le,pinRequired:se,handleHTMLEditorChange:$,handleCSSEditorChange:Q,btnClick:K,point:Oe,showAnswer:ze,handleShowAnswer:function(e){Le(e)},resembleNum:Se,handleClose:Te,qHTML:j,qCSS:O})})}),Object(E.jsx)("div",{className:"loadingPage",style:{visibility:i.status?"visible":"hidden",opacity:i.status?1:0,zIndex:i.status?999:-999},children:Object(E.jsx)("div",{className:"sweet-loading",style:{visibility:i.status?"visible":"hidden",opacity:i.status?1:0,zIndex:i.status?999:-999},children:Object(E.jsx)(T.a,{color:"#ffffff",css:ie,size:10})})}),Object(E.jsxs)("div",{className:"mainPage px-3 pb-3",children:[Object(E.jsxs)("div",{className:"col-8 d-flex flex-column justify-content-end",children:[Object(E.jsxs)("div",{className:"h-36 p-0 pb-2 pe-1",children:[Object(E.jsx)("div",{className:"h-25 pb-2",children:Object(E.jsxs)("div",{className:"h-100 d-flex align-items-end",children:[Object(E.jsx)("img",{className:"me-3",src:"https://cdn1.koding.school/assets/logo/oa-logo-mini-730fe59f98d967929255f884abf83ff8f3934387d50b67403be1c4cd1eac6561.png",alt:"",height:"100%"}),Object(E.jsxs)("h1",{id:"titleName",children:["/ Challenge #",l.gamesID," - ",l.gamesName," / #",l.playId," - ",l.title]})]})}),Object(E.jsx)("div",{className:"h-75 pt-2",children:Object(E.jsxs)("div",{className:"d-flex h-100",children:[Object(E.jsx)("div",{className:"col-9 pe-2",children:Object(E.jsx)(R,{play:l})}),Object(E.jsx)("div",{className:"col-3",children:Object(E.jsx)(_,{play:l})})]})})]}),Object(E.jsxs)("div",{className:"h-60 p-0 pt-2 pe-1 d-flex",children:[Object(E.jsx)("div",{className:"col pe-2",children:Object(E.jsx)(J,{qCSSParsed:y,play:l})}),Object(E.jsx)("div",{className:"col",children:Object(E.jsx)(Y,{play:l,qCSSParsed:y,answerHTML:P,answerCSS:ee})})]})]}),Object(E.jsxs)("div",{className:"col-4 d-flex flex-column justify-content-end ps-1",children:[Object(E.jsx)("div",{className:"h-40 pb-2 position-relative",children:Object(E.jsx)(V,{language:"HTML",handleEditorChange:$,code:P})}),Object(E.jsx)("div",{className:"h-40 pb-2 position-relative",children:Object(E.jsx)(V,{language:"CSS",handleEditorChange:Q,code:W})}),Object(E.jsxs)("div",{className:"h-6 position-relative d-flex",children:[Object(E.jsx)("div",{className:"col d-flex pe-1",children:Object(E.jsxs)("button",{id:"sendPINBtn",className:"btn btn-light w-100",type:"button",onClick:function(){Z("sendPINBtn"),ue(!0)},children:[Object(E.jsx)("i",{className:"bi bi-cloud-arrow-up-fill me-2"}),"\u532f\u5165\u7a0b\u5f0f\u78bc"]})}),Object(E.jsx)("div",{className:"col d-flex ps-1",children:Object(E.jsxs)("button",{id:"sendAnsBtn",className:"btn btn-light w-100",type:"button",disabled:!1,onClick:function(){Z("sendAnsBtn"),Ce(Se+1),ye({status:!0}),qe()},children:[ve.status&&Object(E.jsx)(z.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-2"}),!ve.status&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("i",{className:"bi bi-cursor-fill me-2"}),Object(E.jsx)("span",{children:"\u9001\u51fa\u7b54\u6848"})]})]})})]})]})]})]})}))(f||(f=Object(v.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: relative; \n\n  .mainPage {\n    width: 100%;\n    height: 100%;\n    background-color: #363732;\n    position: absolute; \n    display: flex; \n    z-index: 0;\n  }\n\n  .loadingPage{\n    width: 100%;\n    height: 100%;\n    position: absolute; \n    background-color: #363732;\n    opacity: 1;\n    visibility: visible;\n    transition: All 0.2s ease-out;\n  }\n\n  .sweet-loading {\n    width: 100%;\n    height: 100%;\n    display: flex; \n    align-items: center;\n    position: absolute; \n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #222;\n    opacity: 1;\n    visibility: visible;\n    transition: All 0.2s ease-out;\n  }  \n\n  #titleName {\n    font-size: 1.2rem;\n    font-family: 'Fira Code',monospace;\n    line-height: 1;\n    color: #fff;\n    margin: 0;\n    padding-bottom: 10px;\n  }\n  .h-36 {\n    height: 36%;\n  }\n  .h-40 {\n    height: 44.5%;\n  }\n  .h-6 {\n    height: 6%;\n  }\n  .h-60 {\n    height: 60%;\n  }\n  #sendPINBtn, #sendAnsBtn {\n    background: white;\n    color: #222;\n    border: 5px solid #dee2e6;\n\n  }\n  \n  #sendPINBtn:hover {\n    background: #11BCAB;\n    color: #fff;\n    border: 5px solid #11BCAB;\n  }\n  #sendAnsBtn:hover {\n    background: #FE5958;\n    color: #fff;\n    border: 5px solid #FE5958;\n\n  }\n"]))),re=t(45),oe=Object(y.a)((function(e){e.CssGolf;var n=Object(k.g)();return Object(E.jsx)("div",{className:"h-100 w-100",children:Object(E.jsx)(re.a,{children:Object(E.jsx)(k.a,{path:"".concat(n.path,"/:topicId"),children:Object(E.jsx)(ce,{})})})})}))(O||(O=Object(v.a)([""])));var le=function(){return Object(E.jsx)(re.a,{children:Object(E.jsx)(k.c,{children:Object(E.jsx)(k.a,{path:"/cssgolf",children:Object(E.jsx)(oe,{})})})})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,119)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),s(e),a(e),i(e),c(e)}))},he=document.getElementById("root");x.a.render(Object(E.jsx)(g.StrictMode,{children:Object(E.jsx)(le,{})}),he),de()},91:function(e,n,t){},92:function(e,n,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.4809c2d1.chunk.js.map