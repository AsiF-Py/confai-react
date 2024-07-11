"use strict";(self.webpackChunkconfai_react=self.webpackChunkconfai_react||[]).push([[164],{4164:(e,c,t)=>{t.r(c),t.d(c,{default:()=>x});var s=t(8475),n=t(7313),a=t(3849),r=t(1616),o=t(5832),l=t(4030),i=t(465),d=t(2135),h=t(6417);const x=()=>{const[e,c]=(0,n.useState)([]),[t,x]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{s.Z.get("https://confai-web-app.azurewebsites.net/api/all_calls/?format=json").then((e=>{c(e.data),x(!1)})).catch((e=>{console.error("There was an error fetching the data!",e),x(!1)}))}),[]),(0,h.jsx)(n.Fragment,{children:(0,h.jsx)(a.Z,{children:(0,h.jsx)(r.Z,{children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(o.Z.Header,{children:(0,h.jsx)(o.Z.Title,{as:"h5",children:"All Calls"})}),t?(0,h.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,h.jsx)(l.Z,{animation:"border",role:"status",children:(0,h.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(0,h.jsx)(o.Z.Body,{children:(0,h.jsxs)(i.Z,{responsive:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"Symbol"}),(0,h.jsx)("th",{children:"Year"}),(0,h.jsx)("th",{children:"Quarter"}),(0,h.jsx)("th",{children:"Date"}),(0,h.jsx)("th",{children:"Sentiment"}),(0,h.jsx)("th",{children:"Summary"})]})}),(0,h.jsx)("tbody",{children:e.map(((e,c)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:c+1}),(0,h.jsx)("td",{children:(0,h.jsx)(d.rU,{to:"/call-detail/".concat(e.symbol,"/").concat(e.year,"/").concat(e.quarter,"/"),children:e.symbol})}),(0,h.jsx)("td",{children:e.year}),(0,h.jsx)("td",{children:e.quarter}),(0,h.jsx)("td",{children:e.date}),(0,h.jsx)("td",{children:e.weighted_average_sentiment.toFixed(2)}),(0,h.jsx)("td",{children:e.summary})]},c)))})]})})]})})})})}},1616:(e,c,t)=>{t.d(c,{Z:()=>i});var s=t(6123),n=t.n(s),a=t(7313),r=t(8524),o=t(6417);const l=a.forwardRef(((e,c)=>{const[{className:t,...s},{as:a="div",bsPrefix:l,spans:i}]=function(e){let{as:c,bsPrefix:t,className:s,...a}=e;t=(0,r.vE)(t,"col");const o=(0,r.pi)(),l=(0,r.zG)(),i=[],d=[];return o.forEach((e=>{const c=a[e];let s,n,r;delete a[e],"object"===typeof c&&null!=c?({span:s,offset:n,order:r}=c):s=c;const o=e!==l?"-".concat(e):"";s&&i.push(!0===s?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(s)),null!=r&&d.push("order".concat(o,"-").concat(r)),null!=n&&d.push("offset".concat(o,"-").concat(n))})),[{...a,className:n()(s,...i,...d)},{as:c,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(a,{...s,ref:c,className:n()(t,!i.length&&l)})}));l.displayName="Col";const i=l},3849:(e,c,t)=>{t.d(c,{Z:()=>i});var s=t(6123),n=t.n(s),a=t(7313),r=t(8524),o=t(6417);const l=a.forwardRef(((e,c)=>{let{bsPrefix:t,className:s,as:a="div",...l}=e;const i=(0,r.vE)(t,"row"),d=(0,r.pi)(),h=(0,r.zG)(),x="".concat(i,"-cols"),f=[];return d.forEach((e=>{const c=l[e];let t;delete l[e],null!=c&&"object"===typeof c?({cols:t}=c):t=c;const s=e!==h?"-".concat(e):"";null!=t&&f.push("".concat(x).concat(s,"-").concat(t))})),(0,o.jsx)(a,{ref:c,...l,className:n()(s,i,...f)})}));l.displayName="Row";const i=l},4030:(e,c,t)=>{t.d(c,{Z:()=>i});var s=t(6123),n=t.n(s),a=t(7313),r=t(8524),o=t(6417);const l=a.forwardRef(((e,c)=>{let{bsPrefix:t,variant:s,animation:a="border",size:l,as:i="div",className:d,...h}=e;t=(0,r.vE)(t,"spinner");const x="".concat(t,"-").concat(a);return(0,o.jsx)(i,{ref:c,...h,className:n()(d,x,l&&"".concat(x,"-").concat(l),s&&"text-".concat(s))})}));l.displayName="Spinner";const i=l},465:(e,c,t)=>{t.d(c,{Z:()=>l});var s=t(6123),n=t.n(s),a=t(7313),r=t(8524),o=t(6417);const l=a.forwardRef(((e,c)=>{let{bsPrefix:t,className:s,striped:a,bordered:l,borderless:i,hover:d,size:h,variant:x,responsive:f,...j}=e;const p=(0,r.vE)(t,"table"),u=n()(s,p,x&&"".concat(p,"-").concat(x),h&&"".concat(p,"-").concat(h),a&&"".concat(p,"-").concat("string"===typeof a?"striped-".concat(a):"striped"),l&&"".concat(p,"-bordered"),i&&"".concat(p,"-borderless"),d&&"".concat(p,"-hover")),m=(0,o.jsx)("table",{...j,className:u,ref:c});if(f){let e="".concat(p,"-responsive");return"string"===typeof f&&(e="".concat(e,"-").concat(f)),(0,o.jsx)("div",{className:e,children:m})}return m}))}}]);