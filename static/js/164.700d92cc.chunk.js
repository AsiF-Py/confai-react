"use strict";(self.webpackChunkconfai_react=self.webpackChunkconfai_react||[]).push([[164],{44164:function(e,a,c){c.r(a);var n=c(29439),r=c(24118),s=c(47313),t=c(63849),o=c(31616),i=c(65832),l=c(44030),d=c(465),h=c(2135),f=c(46417);a.default=function(){var e=(0,s.useState)([]),a=(0,n.Z)(e,2),c=a[0],u=a[1],x=(0,s.useState)(!0),v=(0,n.Z)(x,2),p=v[0],j=v[1];return(0,s.useEffect)((function(){r.Z.get("https://confai-web-app.azurewebsites.net/api/all_calls/?format=json").then((function(e){u(e.data),j(!1)})).catch((function(e){console.error("There was an error fetching the data!",e),j(!1)}))}),[]),(0,f.jsx)(s.Fragment,{children:(0,f.jsx)(t.Z,{children:(0,f.jsx)(o.Z,{children:(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(i.Z.Header,{children:(0,f.jsx)(i.Z.Title,{as:"h5",children:"All Calls"})}),p?(0,f.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,f.jsx)(l.Z,{animation:"border",role:"status",children:(0,f.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(0,f.jsx)(i.Z.Body,{children:(0,f.jsxs)(d.Z,{responsive:!0,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"#"}),(0,f.jsx)("th",{children:"Symbol"}),(0,f.jsx)("th",{children:"Year"}),(0,f.jsx)("th",{children:"Quarter"}),(0,f.jsx)("th",{children:"Date"}),(0,f.jsx)("th",{children:"Sentiment"}),(0,f.jsx)("th",{children:"Summary"})]})}),(0,f.jsx)("tbody",{children:c.map((function(e,a){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{scope:"row",children:a+1}),(0,f.jsx)("td",{children:(0,f.jsx)(h.rU,{to:"/call-detail/".concat(e.symbol,"/").concat(e.year,"/").concat(e.quarter,"/"),children:e.symbol})}),(0,f.jsx)("td",{children:e.year}),(0,f.jsx)("td",{children:e.quarter}),(0,f.jsx)("td",{children:e.date}),(0,f.jsx)("td",{children:e.weighted_average_sentiment.toFixed(2)}),(0,f.jsx)("td",{children:e.summary})]},a)}))})]})})]})})})})}},31616:function(e,a,c){var n=c(29439),r=c(1413),s=c(45987),t=c(46123),o=c.n(t),i=c(47313),l=c(68524),d=c(46417),h=["as","bsPrefix","className"],f=["className"];var u=i.forwardRef((function(e,a){var c=function(e){var a=e.as,c=e.bsPrefix,n=e.className,t=(0,s.Z)(e,h);c=(0,l.vE)(c,"col");var i=(0,l.pi)(),d=(0,l.zG)(),f=[],u=[];return i.forEach((function(e){var a,n,r,s=t[e];delete t[e],"object"===typeof s&&null!=s?(a=s.span,n=s.offset,r=s.order):a=s;var o=e!==d?"-".concat(e):"";a&&f.push(!0===a?"".concat(c).concat(o):"".concat(c).concat(o,"-").concat(a)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=n&&u.push("offset".concat(o,"-").concat(n))})),[(0,r.Z)((0,r.Z)({},t),{},{className:o().apply(void 0,[n].concat(f,u))}),{as:a,bsPrefix:c,spans:f}]}(e),t=(0,n.Z)(c,2),i=t[0],u=i.className,x=(0,s.Z)(i,f),v=t[1],p=v.as,j=void 0===p?"div":p,m=v.bsPrefix,Z=v.spans;return(0,d.jsx)(j,(0,r.Z)((0,r.Z)({},x),{},{ref:a,className:o()(u,!Z.length&&m)}))}));u.displayName="Col",a.Z=u},63849:function(e,a,c){var n=c(1413),r=c(45987),s=c(46123),t=c.n(s),o=c(47313),i=c(68524),l=c(46417),d=["bsPrefix","className","as"],h=o.forwardRef((function(e,a){var c=e.bsPrefix,s=e.className,o=e.as,h=void 0===o?"div":o,f=(0,r.Z)(e,d),u=(0,i.vE)(c,"row"),x=(0,i.pi)(),v=(0,i.zG)(),p="".concat(u,"-cols"),j=[];return x.forEach((function(e){var a,c=f[e];delete f[e],a=null!=c&&"object"===typeof c?c.cols:c;var n=e!==v?"-".concat(e):"";null!=a&&j.push("".concat(p).concat(n,"-").concat(a))})),(0,l.jsx)(h,(0,n.Z)((0,n.Z)({ref:a},f),{},{className:t().apply(void 0,[s,u].concat(j))}))}));h.displayName="Row",a.Z=h},44030:function(e,a,c){var n=c(1413),r=c(45987),s=c(46123),t=c.n(s),o=c(47313),i=c(68524),l=c(46417),d=["bsPrefix","variant","animation","size","as","className"],h=o.forwardRef((function(e,a){var c=e.bsPrefix,s=e.variant,o=e.animation,h=void 0===o?"border":o,f=e.size,u=e.as,x=void 0===u?"div":u,v=e.className,p=(0,r.Z)(e,d);c=(0,i.vE)(c,"spinner");var j="".concat(c,"-").concat(h);return(0,l.jsx)(x,(0,n.Z)((0,n.Z)({ref:a},p),{},{className:t()(v,j,f&&"".concat(j,"-").concat(f),s&&"text-".concat(s))}))}));h.displayName="Spinner",a.Z=h},465:function(e,a,c){var n=c(1413),r=c(45987),s=c(46123),t=c.n(s),o=c(47313),i=c(68524),l=c(46417),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=o.forwardRef((function(e,a){var c=e.bsPrefix,s=e.className,o=e.striped,h=e.bordered,f=e.borderless,u=e.hover,x=e.size,v=e.variant,p=e.responsive,j=(0,r.Z)(e,d),m=(0,i.vE)(c,"table"),Z=t()(s,m,v&&"".concat(m,"-").concat(v),x&&"".concat(m,"-").concat(x),o&&"".concat(m,"-").concat("string"===typeof o?"striped-".concat(o):"striped"),h&&"".concat(m,"-bordered"),f&&"".concat(m,"-borderless"),u&&"".concat(m,"-hover")),b=(0,l.jsx)("table",(0,n.Z)((0,n.Z)({},j),{},{className:Z,ref:a}));if(p){var y="".concat(m,"-responsive");return"string"===typeof p&&(y="".concat(y,"-").concat(p)),(0,l.jsx)("div",{className:y,children:b})}return b}));a.Z=h}}]);