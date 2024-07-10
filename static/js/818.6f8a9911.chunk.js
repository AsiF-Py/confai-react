"use strict";(self.webpackChunkconfai_react=self.webpackChunkconfai_react||[]).push([[818],{28818:function(e,r,a){a.r(r),a.d(r,{default:function(){return m}});var l=a(47313),o=a(63849),t=a(31616),n=a(65832),c=a(19228),s=a.n(c),i=a(46417);var h=function(){var e=function(){for(var e=[],r=[],a=[],l=0;l<100;l++)e.push({x:l,y:Math.sin(l/10)}),r.push({x:l,y:.25*Math.sin(l/10)+.5}),a.push({x:l,y:.5*Math.cos(l/10)});return[{values:e,key:"Sine Wave",color:"#A389D4"},{values:a,key:"Cosine Wave",color:"#04a9f5"},{values:r,key:"Another sine wave",color:"#1de9b6",area:!0}]}();return(0,i.jsx)(l.Fragment,{children:l.createElement(s(),{xAxis:{tickFormat:function(e){return e},axisLabel:"Time (ms)"},yAxis:{axisLabel:"Voltage (v)",tickFormat:function(e){return parseFloat(e).toFixed(2)}},type:"lineChart",datum:e,x:"x",y:"y",height:300,renderEnd:function(){console.log("renderEnd")}})})},d=[{key:"Cumulative Return",values:[{label:"A",value:-29.765957771107,color:"#3ebfea"},{label:"B",value:10,color:"#04a9f5"},{label:"C",value:32.807804682612,color:"#ff8a65"},{label:"D",value:196.45946739256,color:"#1de9b6"},{label:"E",value:.25434030906893,color:"#4C5667"},{label:"F",value:-98.079782601442,color:"#69CEC6"},{label:"G",value:-13.925743130903,color:"#a389d4"},{label:"H",value:-5.1387322875705,color:"#FE8A7D"}]}],u=function(){return(0,i.jsx)(s(),{tooltip:{enabled:!0},type:"discreteBarChart",datum:d,x:"label",y:"value",height:300,showValues:!0})},y=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],x=function(){return(0,i.jsx)(s(),{id:"chart",height:300,type:"pieChart",datum:y,x:"key",y:"y",donut:!0,labelType:"percent"})},f=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],j=function(){return(0,i.jsx)(s(),{id:"chart",height:300,type:"pieChart",datum:f,x:"key",y:"y"})};function k(e,r){return Math.floor(Math.random()*(r-e+1)+e)}var v=function(){var e=function(){for(var e=[],r=[],a=[],l=35+35*Math.random(),o=0;o<l;o++)e.push({x:o,y:k(0,60)}),r.push({x:o,y:k(0,100)}),a.push({x:o,y:k(0,30)});return[{values:e,key:"Stream #0",color:"#A389D4"},{values:a,key:"Stream #1",color:"#04a9f5"},{values:r,key:"Stream #3",color:"#1de9b6",area:!0}]}();return(0,i.jsx)(s(),{type:"multiBarChart",datum:e,x:"x",y:"y",height:300,showValues:!0,groupSpacing:.2})},m=function(){return(0,i.jsx)(l.Fragment,{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(t.Z,{md:6,children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(n.Z.Header,{children:(0,i.jsx)(n.Z.Title,{as:"h5",children:"Line Chart"})}),(0,i.jsx)(n.Z.Body,{children:(0,i.jsx)(h,{})})]})}),(0,i.jsx)(t.Z,{md:6,children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(n.Z.Header,{children:(0,i.jsx)(n.Z.Title,{as:"h5",children:"Discrete Bar Chart"})}),(0,i.jsx)(n.Z.Body,{children:(0,i.jsx)(u,{})})]})}),(0,i.jsx)(t.Z,{sm:12,children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(n.Z.Header,{children:(0,i.jsx)(n.Z.Title,{as:"h5",children:"Stacked/Grouped Multi-Bar Chart"})}),(0,i.jsx)(n.Z.Body,{children:(0,i.jsx)(v,{})})]})}),(0,i.jsx)(t.Z,{md:6,children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(n.Z.Header,{children:(0,i.jsx)(n.Z.Title,{as:"h5",children:"Pie Basic Chart"})}),(0,i.jsx)(n.Z.Body,{className:"text-center",children:(0,i.jsx)(j,{})})]})}),(0,i.jsx)(t.Z,{md:6,children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(n.Z.Header,{children:(0,i.jsx)(n.Z.Title,{as:"h5",children:"Donut Chart"})}),(0,i.jsx)(n.Z.Body,{className:"text-center",children:(0,i.jsx)(x,{})})]})})]})})}}}]);