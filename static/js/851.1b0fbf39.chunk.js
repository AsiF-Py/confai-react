"use strict";(self.webpackChunkconfai_react=self.webpackChunkconfai_react||[]).push([[851],{8010:(e,t,l)=>{l.d(t,{Z:()=>a});var s=l(7313),r=l(6542),o=l(6417);const a=e=>(0,o.jsx)(s.Fragment,{children:(0,o.jsxs)(r.Z,{variant:"warning",children:[e.message,(0,o.jsx)(r.Z.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})},7851:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var s=l(7313),r=l(3849),o=l(1616),a=l(5832),i=l(6319),n=l(2161),c=l(6036);const d=JSON.parse('[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]');var p=l(6417);const h=(0,c.compose)((0,c.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:(0,p.jsx)("div",{style:{height:"100%"}}),containerElement:(0,p.jsx)("div",{style:{height:"400px"}}),mapElement:(0,p.jsx)("div",{style:{height:"100%"}}),center:{lat:28.5274851,lng:77.1389452}}),(0,c.withStateHandlers)((()=>({isOpen:!1})),{onToggleOpen:e=>{let{isOpen:t}=e;return()=>({isOpen:!t})}}),n.withScriptjs,n.withGoogleMap)((e=>(0,p.jsxs)(n.GoogleMap,{defaultZoom:5,defaultCenter:e.center,defaultOptions:{styles:d},children:[(0,p.jsx)(i.ZP,{defaultPosition:new google.maps.LatLng(e.center.lat,e.center.lng),options:{closeBoxURL:"",enableEventPropagation:!0},children:(0,p.jsx)("div",{style:{backgroundColor:"yellow",opacity:.75,padding:"12px"},children:(0,p.jsx)("div",{style:{fontSize:"16px",fontColor:"#08233B"},children:"Hello, India!"})})}),(0,p.jsx)(n.Marker,{position:{lat:23.0204978,lng:72.4396583},onClick:e.onToggleOpen,children:e.isOpen&&(0,p.jsx)(i.ZP,{onCloseClick:e.onToggleOpen,options:{closeBoxURL:"",enableEventPropagation:!0},children:(0,p.jsx)("div",{style:{backgroundColor:"yellow",opacity:.75,padding:"12px"},children:(0,p.jsx)("div",{style:{fontSize:"16px",fontColor:"#08233B"},children:"Hello, Gujarat!"})})})})]}))),{MarkerClusterer:g}=l(3047),m=(0,c.compose)((0,c.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:(0,p.jsx)("div",{style:{height:"100%"}}),containerElement:(0,p.jsx)("div",{style:{height:"400px"}}),mapElement:(0,p.jsx)("div",{style:{height:"100%"}})}),(0,c.withHandlers)({onMarkerClustererClick:()=>e=>{const t=e.getMarkers();console.log("Current clicked markers length: ".concat(t.length)),console.log(t)}}),n.withScriptjs,n.withGoogleMap)((e=>(0,p.jsx)(n.GoogleMap,{defaultZoom:3,defaultCenter:{lat:25.0391667,lng:121.525},children:(0,p.jsx)(g,{onClick:e.onMarkerClustererClick,averageCenter:!0,enableRetinaIcons:!0,gridSize:60,children:e.markers.map((e=>(0,p.jsx)(n.Marker,{position:{lat:e.latitude,lng:e.longitude}},e.photo_id)))})}))),y=(0,c.compose)(n.withScriptjs,n.withGoogleMap)((()=>(0,p.jsx)(n.GoogleMap,{defaultZoom:8,defaultCenter:{lat:28.5274851,lng:77.1389452},children:(0,p.jsx)(n.Marker,{position:{lat:28.5274851,lng:77.1389452}})}))),{compose:x,withProps:j}=l(6036),{withScriptjs:f,withGoogleMap:u,GoogleMap:w,StreetViewPanorama:k,OverlayView:v}=l(2161),T=(e,t)=>({x:-e/2,y:-t/2}),Z=x(j({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:(0,p.jsx)("div",{style:{height:"100%"}}),containerElement:(0,p.jsx)("div",{style:{height:"400px"}}),mapElement:(0,p.jsx)("div",{style:{height:"100%"}}),center:{lat:49.2853171,lng:-123.1119202}}),f,u)((e=>(0,p.jsx)(w,{defaultZoom:8,defaultCenter:e.center,children:(0,p.jsx)(k,{defaultPosition:e.center,visible:!0,children:(0,p.jsx)(v,{position:{lat:49.28590291211115,lng:-123.11248166065218},mapPaneName:v.OVERLAY_LAYER,getPixelPositionOffset:T,children:(0,p.jsx)("div",{style:{background:"red",color:"white",padding:5,borderRadius:"50%"},children:"OverlayView"})})})})));var M=l(8010),b=l(3929),C=l.n(b);const S=()=>{const[e,t]=(0,s.useState)([]);return(0,s.useEffect)((()=>{const e=["https://gist.githubusercontent.com","/farrrr/dfda7dd7fccfec5474d3","/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json"].join("");return C()(e).then((e=>e.json())).then((e=>{t(e.photos)})),()=>{t([])}}),[]),(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(r.Z,{children:(0,p.jsx)(o.Z,{sm:12,children:(0,p.jsx)(M.Z,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-google-maps"})})}),(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(o.Z,{xl:6,children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(a.Z.Header,{children:(0,p.jsx)(a.Z.Title,{as:"h5",children:"Default Marker"})}),(0,p.jsx)(a.Z.Body,{children:(0,p.jsx)(y,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:(0,p.jsx)("div",{style:{height:"100%"}}),containerElement:(0,p.jsx)("div",{style:{height:"400px"}}),mapElement:(0,p.jsx)("div",{style:{height:"100%"}})})})]})}),(0,p.jsx)(o.Z,{xl:6,children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(a.Z.Header,{children:(0,p.jsx)(a.Z.Title,{as:"h5",children:"Infobox"})}),(0,p.jsx)(a.Z.Body,{children:(0,p.jsx)(h,{})})]})}),(0,p.jsx)(o.Z,{xl:6,children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(a.Z.Header,{children:(0,p.jsx)(a.Z.Title,{as:"h5",children:"Marker Clusterer"})}),(0,p.jsx)(a.Z.Body,{children:(0,p.jsx)(m,{markers:e})})]})}),(0,p.jsx)(o.Z,{xl:6,children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(a.Z.Header,{children:(0,p.jsx)(a.Z.Title,{as:"h5",children:"Street View Panorma"})}),(0,p.jsx)(a.Z.Body,{children:(0,p.jsx)(Z,{})})]})})]})]})}}}]);