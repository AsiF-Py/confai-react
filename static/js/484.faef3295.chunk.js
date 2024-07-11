"use strict";(self.webpackChunkconfai_react=self.webpackChunkconfai_react||[]).push([[484],{95484:(e,s,l)=>{l.r(s),l.d(s,{default:()=>g});var t=l(38475),a=l(47313),r=l(44030),i=l(63849),n=l(65832),c=l(93298),d=l(62396),h=l(87881),o=l(58467),m=l(36659),x=l.n(m),j=l(46417);const u=e=>{let{symbol:s}=e;const l=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(!l.current)return;const e=document.createElement("script");return e.src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",e.async=!0,e.innerHTML=JSON.stringify({symbol:s,colorTheme:"light",isTransparent:!1,largeChartUrl:"",displayMode:"regular",width:"100%",height:"100%",locale:"en"}),l.current.appendChild(e),()=>{l.current.innerHTML="",e.remove()}}),[s]),(0,j.jsxs)("div",{className:"card mb-4",style:{height:"1000px"},children:[(0,j.jsx)("div",{className:"card-header",children:(0,j.jsx)("h2",{className:"card-title",children:"Financials"})}),(0,j.jsx)("div",{className:"card-body",children:(0,j.jsxs)("div",{className:"tradingview-widget-container",ref:l,children:[(0,j.jsx)("div",{id:"tradingview-widget-container__widget"}),(0,j.jsx)("div",{className:"tradingview-widget-copyright",children:(0,j.jsx)("a",{href:"https://www.tradingview.com/?utm_source=localhost&utm_medium=widget_new&utm_campaign=chart&utm_term=STZ",rel:"noreferrer",target:"_blank",children:(0,j.jsx)("span",{className:"blue-text",children:"Track all markets on TradingView"})})})]})})]})},g=()=>{const[e,s]=(0,a.useState)(!1),[l,g]=(0,a.useState)(null),[p,_]=(0,a.useState)(!0),{ticker_symbol:f}=(0,o.UO)();return(0,a.useEffect)((()=>{t.Z.get("https://confai-web-app.azurewebsites.net/api/symbol/".concat(f,"/?format=json")).then((e=>{console.log(e),g(e.data),_(!1)})).catch((e=>{console.error("There was an error fetching the data!",e),_(!1)}))}),[f]),p||!l?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,j.jsx)(r.Z,{animation:"border",role:"status",children:(0,j.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(console.log(f),(0,j.jsx)(a.Fragment,{children:(0,j.jsxs)(i.Z,{children:[(0,j.jsx)("h5",{children:l.symbol}),(0,j.jsxs)(n.Z,{children:[(0,j.jsx)(n.Z.Header,{children:(0,j.jsx)(n.Z.Title,{as:"h5",children:"Latest Call"})}),(0,j.jsxs)(n.Z.Body,{children:[(0,j.jsxs)("h5",{children:["Year: ",l.latest_call_info.year]}),(0,j.jsxs)("h5",{children:["Quarter: ",l.latest_call_info.quarter]}),(0,j.jsxs)("h5",{children:["Date: ",l.latest_call_info.date]}),(0,j.jsxs)("h5",{children:["Weighted Average Sentiment: ",l.latest_call_info.weighted_average_sentiment.toFixed(2)]}),(0,j.jsx)("hr",{}),(0,j.jsx)("h4",{children:"Negative Sentences"}),l.latest_call_info.negative_sentences.map(((e,s)=>(0,j.jsx)("ul",{className:"mt-3",children:(0,j.jsxs)("li",{children:[parseFloat(e[0]).toFixed(2),": ",e[1]]})},s))),(0,j.jsx)("hr",{}),(0,j.jsx)("h4",{children:"Positive Sentences"}),l.latest_call_info.positive_sentences.map(((e,s)=>(0,j.jsx)("ul",{className:"mt-3",children:(0,j.jsxs)("li",{children:[parseFloat(e[0]).toFixed(2),": ",e[1]]})},s))),(0,j.jsx)("h4",{children:"Summary"}),(0,j.jsx)("p",{children:l.latest_call_info.summary}),(0,j.jsx)("h4",{children:"Full Text"}),(0,j.jsx)("div",{children:(0,j.jsx)(c.Z,{onClick:()=>s(!e),children:"Collapse"})}),(0,j.jsx)(d.Z,{in:e,children:(0,j.jsx)("div",{id:"basic-collapse",children:(0,j.jsx)(n.Z.Body,{children:(0,j.jsxs)(n.Z.Text,{children:["full_text",l.latest_call_info.full_text]})})})})]})]}),(0,j.jsxs)(n.Z,{children:[(0,j.jsxs)("div",{style:{height:"600px"},className:"p-5",children:[(0,j.jsx)("div",{className:"card-header",children:(0,j.jsx)("h2",{className:"card-title",children:"Stock Chart"})}),(0,j.jsx)(x(),{locale:"en",autosize:!0,interval:"D",timezone:"Etc/UTC",theme:m.Themes.LIGHT,style:"3",enable_publishing:"false",range:"5D",backgroundColor:"rgba(242, 242, 242, 1)",allow_symbol_change:"true",calendar:"false",support_host:"https://www.tradingview.com",symbol:f})]}),(0,j.jsx)("div",{className:"p-5",children:(0,j.jsx)(u,{symbol:f})})]}),l.news.map(((e,s)=>(0,j.jsx)(n.Z,{className:"mb-3",children:(0,j.jsxs)(n.Z.Body,{children:[(0,j.jsx)(n.Z.Title,{as:"h3",children:e.title}),(0,j.jsx)(h.Z,{className:"py-3 rounded-sm",src:e.image,fluid:!0}),(0,j.jsxs)(n.Z.Subtitle,{className:"mb-2 text-muted",children:["Published on: ",e.publishedDate]}),(0,j.jsx)(n.Z.Text,{children:e.text}),(0,j.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"Read more"}),(0,j.jsx)("div",{className:"mt-2",children:(0,j.jsxs)("small",{children:["Source: ",e.site]})})]})},s)))]})}))}}}]);