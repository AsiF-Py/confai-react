"use strict";(self.webpackChunkdatta_able_free_react_admin_template=self.webpackChunkdatta_able_free_react_admin_template||[]).push([[320],{6320:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(8475),c=t(7313),n=t(3849),r=t(4030),i=t(8128),l=t(1616),d=t(3298),o=t(32),m=t(6417);const h=()=>{const[e,s]=(0,c.useState)([]),[t,h]=(0,c.useState)([]),[x,f]=(0,c.useState)(!0),[j,p]=(0,c.useState)(0);(0,c.useEffect)((()=>{a.Z.get("https://confai-web-app.azurewebsites.net/api/prior_ticker_list/?format=json").then((e=>{s(e.data.results),h(e.data.results.slice(0,10)),f(!1)})).catch((e=>{console.error("There was an error fetching the data!",e),f(!1)}))}),[]);const[u,N]=(0,c.useState)([]),[v,b]=(0,c.useState)(!0);(0,c.useEffect)((()=>{a.Z.get("https://confai-web-app.azurewebsites.net/api/ticker_list/?format=json").then((e=>{N(e.data.ticker_data_today),b(!1)})).catch((e=>{console.error("There was an error fetching the data!",e),b(!1)}))}),[]);return(0,c.useEffect)((()=>{t.forEach(((e,s)=>{const t=document.createElement("script");t.src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",t.async=!0,t.innerHTML=JSON.stringify({symbol:e.symbol,width:350,isTransparent:!1,colorTheme:"light",locale:"en"}),document.getElementById("tradingview-widget-".concat(s)).appendChild(t)}))}),[t]),(0,m.jsxs)(c.Fragment,{children:[(0,m.jsxs)(n.Z,{children:[(0,m.jsx)("h3",{children:"Today Ticker Data"}),v?(0,m.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,m.jsx)(r.Z,{animation:"border",role:"status",children:(0,m.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(0,m.jsx)(i.Z.Body,{children:u.map(((e,s)=>(0,m.jsx)(l.Z,{xl:6,xxl:4,children:(0,m.jsx)(o.rU,{to:"/symbol-detail/".concat(e.symbol,"/"),children:(0,m.jsxs)(i.Z,{className:"card-social",children:[(0,m.jsx)(i.Z.Body,{className:"border-bottom",children:(0,m.jsxs)("div",{className:"row align-items-center justify-content-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)("h3",{children:e.symbol})}),(0,m.jsx)("div",{className:"col text-end",children:(0,m.jsx)("h5",{className:"text-c-purple mb-0",children:e.sentiment_category})})]})}),(0,m.jsxs)(i.Z.Body,{children:[(0,m.jsxs)("div",{className:"row align-items-center justify-content-center card-active",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("h6",{className:"text-center m-b-5",children:[(0,m.jsx)("span",{className:"text-muted m-r-2",children:"Percentile:"}),e.percentile.toFixed(2),"%"]})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("h6",{className:"text-center  m-b-5",children:[(0,m.jsx)("span",{className:"text-muted m-r-2",children:"Weighted Average Sentiment:"}),e.weighted_average_sentiment.toFixed(2)]})})]}),(0,m.jsx)("div",{id:"tradingview-widget-".concat(s),className:"tradingview-widget-container"})]})]})})},s)))})]}),(0,m.jsx)(n.Z,{children:(0,m.jsx)(l.Z,{children:(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(i.Z.Header,{children:(0,m.jsx)(i.Z.Title,{as:"h5",children:"Prior Ticker List"})}),x?(0,m.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,m.jsx)(r.Z,{animation:"border",role:"status",children:(0,m.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(0,m.jsxs)(i.Z.Body,{children:[(0,m.jsx)(n.Z,{xs:2,md:4,lg:6,children:t.map(((e,s)=>(0,m.jsx)(l.Z,{sm:2,md:2,xl:6,xxl:4,children:(0,m.jsx)(o.rU,{to:"/symbol-detail/".concat(e.symbol,"/"),children:(0,m.jsxs)(i.Z,{className:"card-social",children:[(0,m.jsx)(i.Z.Body,{className:"border-bottom",children:(0,m.jsxs)("div",{className:"row align-items-center justify-content-center",children:[(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)(o.rU,{to:"/symbol-detail/".concat(e.symbol,"/"),children:(0,m.jsx)("h3",{children:e.symbol})})}),(0,m.jsx)("div",{className:"col text-end",children:(0,m.jsx)("h5",{className:"text-c-purple mb-0",children:e.sentiment_category})})]})}),(0,m.jsxs)(i.Z.Body,{children:[(0,m.jsxs)("div",{className:"row align-items-center justify-content-center card-active",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("h6",{className:"text-center m-b-5",children:[(0,m.jsx)("span",{className:"text-muted m-r-2",children:"Percentile:"}),e.percentile.toFixed(2),"%"]})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("h6",{className:"text-center m-b-5",children:[(0,m.jsx)("span",{className:"text-muted m-r-2",children:"Weighted Average Sentiment:"}),e.weighted_average_sentiment.toFixed(2)]})})]}),(0,m.jsx)("div",{id:"tradingview-widget-".concat(s),className:"tradingview-widget-container"})]})]})})},s)))}),t.length<e.length&&(0,m.jsx)(d.Z,{onClick:()=>{const s=j+10,a=e.slice(s,s+10);h([...t,...a]),p(s)},className:"mt-4",children:"Load More"})]})]})})})]})}},3298:(e,s,t)=>{t.d(s,{Z:()=>o});var a=t(6123),c=t.n(a),n=t(7313),r=t(6184),i=t(8524),l=t(6417);const d=n.forwardRef(((e,s)=>{let{as:t,bsPrefix:a,variant:n="primary",size:d,active:o=!1,disabled:m=!1,className:h,...x}=e;const f=(0,i.vE)(a,"btn"),[j,{tagName:p}]=(0,r.FT)({tagName:t,disabled:m,...x}),u=p;return(0,l.jsx)(u,{...j,...x,ref:s,disabled:m,className:c()(h,f,o&&"active",n&&"".concat(f,"-").concat(n),d&&"".concat(f,"-").concat(d),x.href&&m&&"disabled")})}));d.displayName="Button";const o=d},8128:(e,s,t)=>{t.d(s,{Z:()=>C});var a=t(6123),c=t.n(a),n=t(7313),r=t(8524),i=t(8864),l=t(6417);const d=e=>n.forwardRef(((s,t)=>(0,l.jsx)("div",{...s,ref:t,className:c()(s.className,e)}))),o=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,variant:n,as:i="img",...d}=e;const o=(0,r.vE)(t,"card-img");return(0,l.jsx)(i,{ref:s,className:c()(n?"".concat(o,"-").concat(n):o,a),...d})}));o.displayName="CardImg";const m=o,h=n.createContext(null);h.displayName="CardHeaderContext";const x=h,f=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:i="div",...d}=e;const o=(0,r.vE)(t,"card-header"),m=(0,n.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,l.jsx)(x.Provider,{value:m,children:(0,l.jsx)(i,{ref:s,...d,className:c()(a,o)})})}));f.displayName="CardHeader";const j=f,p=d("h5"),u=d("h6"),N=(0,i.Z)("card-body"),v=(0,i.Z)("card-title",{Component:p}),b=(0,i.Z)("card-subtitle",{Component:u}),g=(0,i.Z)("card-link",{Component:"a"}),y=(0,i.Z)("card-text",{Component:"p"}),w=(0,i.Z)("card-footer"),Z=(0,i.Z)("card-img-overlay"),_=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,bg:n,text:i,border:d,body:o=!1,children:m,as:h="div",...x}=e;const f=(0,r.vE)(t,"card");return(0,l.jsx)(h,{ref:s,...x,className:c()(a,f,n&&"bg-".concat(n),i&&"text-".concat(i),d&&"border-".concat(d)),children:o?(0,l.jsx)(N,{children:m}):m})}));_.displayName="Card";const C=Object.assign(_,{Img:m,Title:v,Subtitle:b,Body:N,Link:g,Text:y,Header:j,Footer:w,ImgOverlay:Z})},1616:(e,s,t)=>{t.d(s,{Z:()=>d});var a=t(6123),c=t.n(a),n=t(7313),r=t(8524),i=t(6417);const l=n.forwardRef(((e,s)=>{const[{className:t,...a},{as:n="div",bsPrefix:l,spans:d}]=function(e){let{as:s,bsPrefix:t,className:a,...n}=e;t=(0,r.vE)(t,"col");const i=(0,r.pi)(),l=(0,r.zG)(),d=[],o=[];return i.forEach((e=>{const s=n[e];let a,c,r;delete n[e],"object"===typeof s&&null!=s?({span:a,offset:c,order:r}=s):a=s;const i=e!==l?"-".concat(e):"";a&&d.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=r&&o.push("order".concat(i,"-").concat(r)),null!=c&&o.push("offset".concat(i,"-").concat(c))})),[{...n,className:c()(a,...d,...o)},{as:s,bsPrefix:t,spans:d}]}(e);return(0,i.jsx)(n,{...a,ref:s,className:c()(t,!d.length&&l)})}));l.displayName="Col";const d=l},3849:(e,s,t)=>{t.d(s,{Z:()=>d});var a=t(6123),c=t.n(a),n=t(7313),r=t(8524),i=t(6417);const l=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:n="div",...l}=e;const d=(0,r.vE)(t,"row"),o=(0,r.pi)(),m=(0,r.zG)(),h="".concat(d,"-cols"),x=[];return o.forEach((e=>{const s=l[e];let t;delete l[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const a=e!==m?"-".concat(e):"";null!=t&&x.push("".concat(h).concat(a,"-").concat(t))})),(0,i.jsx)(n,{ref:s,...l,className:c()(a,d,...x)})}));l.displayName="Row";const d=l},4030:(e,s,t)=>{t.d(s,{Z:()=>d});var a=t(6123),c=t.n(a),n=t(7313),r=t(8524),i=t(6417);const l=n.forwardRef(((e,s)=>{let{bsPrefix:t,variant:a,animation:n="border",size:l,as:d="div",className:o,...m}=e;t=(0,r.vE)(t,"spinner");const h="".concat(t,"-").concat(n);return(0,i.jsx)(d,{ref:s,...m,className:c()(o,h,l&&"".concat(h,"-").concat(l),a&&"text-".concat(a))})}));l.displayName="Spinner";const d=l},8864:(e,s,t)=>{t.d(s,{Z:()=>o});var a=t(6123),c=t.n(a),n=/-(.)/g;var r=t(7313),i=t(8524),l=t(6417);const d=e=>{return e[0].toUpperCase()+(s=e,s.replace(n,(function(e,s){return s.toUpperCase()}))).slice(1);var s};function o(e){let{displayName:s=d(e),Component:t,defaultProps:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=r.forwardRef(((s,n)=>{let{className:r,bsPrefix:d,as:o=t||"div",...m}=s;const h={...a,...m},x=(0,i.vE)(d,e);return(0,l.jsx)(o,{ref:n,className:c()(r,x),...h})}));return n.displayName=s,n}}}]);