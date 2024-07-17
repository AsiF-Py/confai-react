"use strict";(self.webpackChunkdatta_able_free_react_admin_template=self.webpackChunkdatta_able_free_react_admin_template||[]).push([[381],{7381:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(7313),r=s(4030),n=s(3849),c=s(1616),l=s(8128),o=s(8475),i=s(8467),d=s(6417);const h=()=>{const[e,a]=(0,t.useState)(null),[s,h]=(0,t.useState)(!0),{ticker_symbol:x,year:m,quarter:f}=(0,i.UO)();return(0,t.useEffect)((()=>{o.Z.get("https://confai-web-app.azurewebsites.net/api/call_detail/".concat(x,"/").concat(m,"/").concat(f,"/?format=json")).then((e=>{console.log(e),a(e.data),h(!1)})).catch((e=>{console.error("There was an error fetching the data!",e),h(!1)}))}),[x,m,f]),console.log(e),s||!e?(0,d.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,d.jsx)(r.Z,{animation:"border",role:"status",children:(0,d.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(console.log(e),(0,d.jsx)(t.Fragment,{children:(0,d.jsx)(n.Z,{children:(0,d.jsx)(c.Z,{children:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(l.Z.Header,{children:(0,d.jsx)(l.Z.Title,{as:"h5",children:"Call Details"})}),(0,d.jsxs)(l.Z.Body,{children:[(0,d.jsx)("h2",{children:"".concat(e.year," - Quarter ").concat(e.quarter)}),(0,d.jsxs)("p",{children:["Date: ",e.date]}),(0,d.jsx)("h3",{children:"Summary:"}),(0,d.jsx)("p",{children:e.summary}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h6",{children:"Overall Sentiment:"})," ",e.overall_sentiment]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h6",{children:"Weighted Average Sentiment:"})," ",e.weighted_average_sentiment.toFixed(2)]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h6",{children:"Percentile:"})," ",e.percentile.toFixed(2),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h6",{children:"Sentiment Category:"})," ",e.sentiment_category]}),(0,d.jsx)("h3",{children:"Extreme Sentences:"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h5",{children:"Negative:"}),e.extreme_sentences.negative.map(((e,a)=>(0,d.jsxs)("p",{children:[parseFloat(e[0]).toFixed(2)," - ",e[1]]},a))),(0,d.jsx)("h5",{children:"Positive:"}),e.extreme_sentences.positive.map(((e,a)=>(0,d.jsxs)("p",{children:[parseFloat(e[0]).toFixed(2)," - ",e[1]]},a)))]}),(0,d.jsx)("div",{children:(0,d.jsx)("h3",{children:"Average Scores:"})}),(0,d.jsx)("ul",{children:e.average_scores.map(((e,a)=>(0,d.jsx)("li",{children:parseFloat(e).toFixed(2)},a)))}),(0,d.jsx)("div",{children:(0,d.jsx)("h3",{children:"Full Text:"})}),(0,d.jsx)("p",{children:e.full_text})]})]})})})}))}},8128:(e,a,s)=>{s.d(a,{Z:()=>w});var t=s(6123),r=s.n(t),n=s(7313),c=s(8524),l=s(8864),o=s(6417);const i=e=>n.forwardRef(((a,s)=>(0,o.jsx)("div",{...a,ref:s,className:r()(a.className,e)}))),d=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,variant:n,as:l="img",...i}=e;const d=(0,c.vE)(s,"card-img");return(0,o.jsx)(l,{ref:a,className:r()(n?"".concat(d,"-").concat(n):d,t),...i})}));d.displayName="CardImg";const h=d,x=n.createContext(null);x.displayName="CardHeaderContext";const m=x,f=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:l="div",...i}=e;const d=(0,c.vE)(s,"card-header"),h=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(m.Provider,{value:h,children:(0,o.jsx)(l,{ref:a,...i,className:r()(t,d)})})}));f.displayName="CardHeader";const p=f,j=i("h5"),u=i("h6"),v=(0,l.Z)("card-body"),g=(0,l.Z)("card-title",{Component:j}),N=(0,l.Z)("card-subtitle",{Component:u}),b=(0,l.Z)("card-link",{Component:"a"}),y=(0,l.Z)("card-text",{Component:"p"}),Z=(0,l.Z)("card-footer"),_=(0,l.Z)("card-img-overlay"),C=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,bg:n,text:l,border:i,body:d=!1,children:h,as:x="div",...m}=e;const f=(0,c.vE)(s,"card");return(0,o.jsx)(x,{ref:a,...m,className:r()(t,f,n&&"bg-".concat(n),l&&"text-".concat(l),i&&"border-".concat(i)),children:d?(0,o.jsx)(v,{children:h}):h})}));C.displayName="Card";const w=Object.assign(C,{Img:h,Title:g,Subtitle:N,Body:v,Link:b,Text:y,Header:p,Footer:Z,ImgOverlay:_})},1616:(e,a,s)=>{s.d(a,{Z:()=>i});var t=s(6123),r=s.n(t),n=s(7313),c=s(8524),l=s(6417);const o=n.forwardRef(((e,a)=>{const[{className:s,...t},{as:n="div",bsPrefix:o,spans:i}]=function(e){let{as:a,bsPrefix:s,className:t,...n}=e;s=(0,c.vE)(s,"col");const l=(0,c.pi)(),o=(0,c.zG)(),i=[],d=[];return l.forEach((e=>{const a=n[e];let t,r,c;delete n[e],"object"===typeof a&&null!=a?({span:t,offset:r,order:c}=a):t=a;const l=e!==o?"-".concat(e):"";t&&i.push(!0===t?"".concat(s).concat(l):"".concat(s).concat(l,"-").concat(t)),null!=c&&d.push("order".concat(l,"-").concat(c)),null!=r&&d.push("offset".concat(l,"-").concat(r))})),[{...n,className:r()(t,...i,...d)},{as:a,bsPrefix:s,spans:i}]}(e);return(0,l.jsx)(n,{...t,ref:a,className:r()(s,!i.length&&o)})}));o.displayName="Col";const i=o},3849:(e,a,s)=>{s.d(a,{Z:()=>i});var t=s(6123),r=s.n(t),n=s(7313),c=s(8524),l=s(6417);const o=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:n="div",...o}=e;const i=(0,c.vE)(s,"row"),d=(0,c.pi)(),h=(0,c.zG)(),x="".concat(i,"-cols"),m=[];return d.forEach((e=>{const a=o[e];let s;delete o[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==h?"-".concat(e):"";null!=s&&m.push("".concat(x).concat(t,"-").concat(s))})),(0,l.jsx)(n,{ref:a,...o,className:r()(t,i,...m)})}));o.displayName="Row";const i=o},4030:(e,a,s)=>{s.d(a,{Z:()=>i});var t=s(6123),r=s.n(t),n=s(7313),c=s(8524),l=s(6417);const o=n.forwardRef(((e,a)=>{let{bsPrefix:s,variant:t,animation:n="border",size:o,as:i="div",className:d,...h}=e;s=(0,c.vE)(s,"spinner");const x="".concat(s,"-").concat(n);return(0,l.jsx)(i,{ref:a,...h,className:r()(d,x,o&&"".concat(x,"-").concat(o),t&&"text-".concat(t))})}));o.displayName="Spinner";const i=o},8864:(e,a,s)=>{s.d(a,{Z:()=>d});var t=s(6123),r=s.n(t),n=/-(.)/g;var c=s(7313),l=s(8524),o=s(6417);const i=e=>{return e[0].toUpperCase()+(a=e,a.replace(n,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function d(e){let{displayName:a=i(e),Component:s,defaultProps:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=c.forwardRef(((a,n)=>{let{className:c,bsPrefix:i,as:d=s||"div",...h}=a;const x={...t,...h},m=(0,l.vE)(i,e);return(0,o.jsx)(d,{ref:n,className:r()(c,m),...x})}));return n.displayName=a,n}}}]);