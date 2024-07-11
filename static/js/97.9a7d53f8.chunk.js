"use strict";(self.webpackChunkconfai_react=self.webpackChunkconfai_react||[]).push([[97],{62097:(e,s,l)=>{l.r(s),l.d(s,{default:()=>_});var r=l(47313),a=l(63849),i=l(31616),n=l(65832),d=l(46123),o=l.n(d),t=l(75192),c=l.n(t),x=l(70339),h=l(56084),m=l(5978),j=l(68524),p=l(46417);const u=r.forwardRef(((e,s)=>{let{bsPrefix:l,className:a,htmlFor:i,...n}=e;const{controlId:d}=(0,r.useContext)(m.Z);return l=(0,j.vE)(l,"form-check-label"),(0,p.jsx)("label",{...n,ref:s,htmlFor:i||d,className:o()(a,l)})}));u.displayName="FormCheckLabel";const b=u;var Z=l(46682);const f=r.forwardRef(((e,s)=>{let{id:l,bsPrefix:a,bsSwitchPrefix:i,inline:n=!1,reverse:d=!1,disabled:t=!1,isValid:c=!1,isInvalid:u=!1,feedbackTooltip:f=!1,feedback:y,feedbackType:N,className:C,style:v,title:g="",type:I="checkbox",label:k,children:G,as:R="input",...w}=e;a=(0,j.vE)(a,"form-check"),i=(0,j.vE)(i,"form-switch");const{controlId:T}=(0,r.useContext)(m.Z),L=(0,r.useMemo)((()=>({controlId:l||T})),[T,l]),P=!G&&null!=k&&!1!==k||(0,Z.XW)(G,b),F=(0,p.jsx)(h.Z,{...w,type:"switch"===I?"checkbox":I,ref:s,isValid:c,isInvalid:u,disabled:t,as:R});return(0,p.jsx)(m.Z.Provider,{value:L,children:(0,p.jsx)("div",{style:v,className:o()(C,P&&a,n&&"".concat(a,"-inline"),d&&"".concat(a,"-reverse"),"switch"===I&&i),children:G||(0,p.jsxs)(p.Fragment,{children:[F,P&&(0,p.jsx)(b,{title:g,children:k}),y&&(0,p.jsx)(x.Z,{type:N,tooltip:f,children:y})]})})})}));f.displayName="FormCheck";const y=Object.assign(f,{Input:h.Z,Label:b});var N=l(53411);const C=(0,l(28864).Z)("form-floating"),v=r.forwardRef(((e,s)=>{let{controlId:l,as:a="div",...i}=e;const n=(0,r.useMemo)((()=>({controlId:l})),[l]);return(0,p.jsx)(m.Z.Provider,{value:n,children:(0,p.jsx)(a,{...i,ref:s})})}));v.displayName="FormGroup";const g=v;l(21024);const I=r.forwardRef(((e,s)=>{let{as:l="label",bsPrefix:a,column:n=!1,visuallyHidden:d=!1,className:t,htmlFor:c,...x}=e;const{controlId:h}=(0,r.useContext)(m.Z);a=(0,j.vE)(a,"form-label");let u="col-form-label";"string"===typeof n&&(u="".concat(u," ").concat(u,"-").concat(n));const b=o()(t,a,d&&"visually-hidden",n&&u);return c=c||h,n?(0,p.jsx)(i.Z,{ref:s,as:"label",className:b,htmlFor:c,...x}):(0,p.jsx)(l,{ref:s,className:b,htmlFor:c,...x})}));I.displayName="FormLabel";const k=I,G=r.forwardRef(((e,s)=>{let{bsPrefix:l,className:a,id:i,...n}=e;const{controlId:d}=(0,r.useContext)(m.Z);return l=(0,j.vE)(l,"form-range"),(0,p.jsx)("input",{...n,type:"range",ref:s,className:o()(a,l),id:i||d})}));G.displayName="FormRange";const R=G,w=r.forwardRef(((e,s)=>{let{bsPrefix:l,size:a,htmlSize:i,className:n,isValid:d=!1,isInvalid:t=!1,id:c,...x}=e;const{controlId:h}=(0,r.useContext)(m.Z);return l=(0,j.vE)(l,"form-select"),(0,p.jsx)("select",{...x,size:i,ref:s,className:o()(n,l,a&&"".concat(l,"-").concat(a),d&&"is-valid",t&&"is-invalid"),id:c||h})}));w.displayName="FormSelect";const T=w,L=r.forwardRef(((e,s)=>{let{bsPrefix:l,className:r,as:a="small",muted:i,...n}=e;return l=(0,j.vE)(l,"form-text"),(0,p.jsx)(a,{...n,ref:s,className:o()(r,l,i&&"text-muted")})}));L.displayName="FormText";const P=L,F=r.forwardRef(((e,s)=>(0,p.jsx)(y,{...e,ref:s,type:"switch"})));F.displayName="Switch";const E=Object.assign(F,{Input:y.Input,Label:y.Label}),B=r.forwardRef(((e,s)=>{let{bsPrefix:l,className:r,children:a,controlId:i,label:n,...d}=e;return l=(0,j.vE)(l,"form-floating"),(0,p.jsxs)(g,{ref:s,className:o()(r,l),controlId:i,...d,children:[a,(0,p.jsx)("label",{htmlFor:i,children:n})]})}));B.displayName="FloatingLabel";const S=B,z={_ref:c().any,validated:c().bool,as:c().elementType},H=r.forwardRef(((e,s)=>{let{className:l,validated:r,as:a="form",...i}=e;return(0,p.jsx)(a,{...i,ref:s,className:o()(l,r&&"was-validated")})}));H.displayName="Form",H.propTypes=z;const A=Object.assign(H,{Group:g,Control:N.Z,Floating:C,Check:y,Switch:E,Label:k,Text:P,Range:R,Select:T,FloatingLabel:S});var V=l(93298),q=l(98698),O=l(93198),M=l(1683),D=l(38388);const U=c().oneOf(["start","end"]),W=c().oneOfType([U,c().shape({sm:U}),c().shape({md:U}),c().shape({lg:U}),c().shape({xl:U}),c().shape({xxl:U}),c().object]),Y={id:c().string,href:c().string,onClick:c().func,title:c().node.isRequired,disabled:c().bool,align:W,menuRole:c().string,renderMenuOnMount:c().bool,rootCloseEvent:c().string,menuVariant:c().oneOf(["dark"]),flip:c().bool,bsPrefix:c().string,variant:c().string,size:c().string},X=r.forwardRef(((e,s)=>{let{title:l,children:r,bsPrefix:a,rootCloseEvent:i,variant:n,size:d,menuRole:o,renderMenuOnMount:t,disabled:c,href:x,id:h,menuVariant:m,flip:j,...u}=e;return(0,p.jsxs)(O.Z,{ref:s,...u,children:[(0,p.jsx)(M.Z,{id:h,href:x,size:d,variant:n,disabled:c,childBsPrefix:a,children:l}),(0,p.jsx)(D.Z,{role:o,renderOnMount:t,rootCloseEvent:i,variant:m,flip:j,children:r})]})}));X.displayName="DropdownButton",X.propTypes=Y;const $=X,_=()=>{const[e,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(!1),[o,t]=(0,r.useState)(!1),[c,x]=(0,r.useState)(!1),[h,m]=(0,r.useState)(0),[j,u]=(0,r.useState)(0);return(0,p.jsx)(r.Fragment,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Form controls"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{md:6,children:(0,p.jsxs)(A,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,p.jsx)(A.Label,{children:"Email address"}),(0,p.jsx)(A.Control,{type:"email",placeholder:"Enter email"}),(0,p.jsx)(A.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,p.jsx)(A.Label,{children:"Password"}),(0,p.jsx)(A.Control,{type:"password",placeholder:"Password"})]}),(0,p.jsx)(A.Group,{className:"mb-3",controlId:"formBasicChecbox",children:(0,p.jsx)(A.Check,{type:"checkbox",label:"Check me out"})}),(0,p.jsx)(V.Z,{variant:"primary",children:"Submit"})]})}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,p.jsx)(A.Label,{children:"Text"}),(0,p.jsx)(A.Control,{type:"email",placeholder:"Text"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"exampleForm.ControlSelect1",children:[(0,p.jsx)(A.Label,{children:"Example select"}),(0,p.jsxs)(A.Control,{as:"select",children:[(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]})]}),(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[(0,p.jsx)(A.Label,{children:"Example textarea"}),(0,p.jsx)(A.Control,{as:"textarea",rows:"3"})]})]})]})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Sizing"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsx)(A.Control,{size:"lg",type:"text",placeholder:"Large text",className:"mb-3"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"Normal text",className:"mb-3"}),(0,p.jsx)(A.Control,{size:"sm",type:"text",placeholder:"Small text",className:"mb-3"})]}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsxs)(A.Control,{size:"lg",as:"select",className:"mb-3",children:[(0,p.jsx)("option",{children:"Large select"}),(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]}),(0,p.jsxs)(A.Control,{as:"select",className:"mb-3",children:[(0,p.jsx)("option",{children:"Default select"}),(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]})]})]})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Range Inputs"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsx)(a.Z,{children:(0,p.jsx)(i.Z,{children:(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"exampleForm.RangeInput",children:[(0,p.jsx)(A.Label,{children:"Example Range input"}),(0,p.jsx)(A.Range,{className:"form-control-range"})]})})})})]})}),(0,p.jsx)(i.Z,{sm:12,lg:6,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Readonly"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"formPlaintextEmail",children:[(0,p.jsx)(A.Label,{children:"Read only input"}),(0,p.jsx)(A.Control,{readOnly:!0,defaultValue:"email@example.com"})]})})]})}),(0,p.jsx)(i.Z,{sm:12,lg:6,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Readonly Plaintext"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formPlaintextEmail1",children:[(0,p.jsx)(A.Label,{column:!0,sm:"3",children:"Email"}),(0,p.jsx)(i.Z,{sm:"9",children:(0,p.jsx)(A.Control,{plaintext:!0,readOnly:!0,defaultValue:"email@example.com"})})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formPlaintextPassword",children:[(0,p.jsx)(A.Label,{column:!0,sm:"3",children:"Password"}),(0,p.jsx)(i.Z,{sm:"9",children:(0,p.jsx)(A.Control,{type:"password",placeholder:"Password"})})]})]})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Inline"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsx)(a.Z,{children:(0,p.jsx)(i.Z,{sm:12,style:{overflowX:"auto"},children:(0,p.jsxs)(A,{className:"d-inline-flex",children:[(0,p.jsxs)(A.Group,{className:"d-inline-flex mx-3 align-items-center",children:[(0,p.jsx)(A.Label,{className:"mb-0",children:"Email:"}),(0,p.jsx)(A.Control,{className:"mx-2",plaintext:!0,readOnly:!0,defaultValue:"email@example.com"})]}),(0,p.jsxs)(A.Group,{className:"d-inline-flex mr-5 mx-3 align-items-center",children:[(0,p.jsx)(A.Label,{className:"mb-0",children:"Password:"}),(0,p.jsx)(A.Control,{className:"mx-2",type:"password",placeholder:"Password"})]}),(0,p.jsx)(A.Group,{className:"d-inline-flex mx-3",style:{overflow:"unset"},children:(0,p.jsx)(V.Z,{className:"mb-0",children:"Confirm Identity"})})]})})})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Form Grid"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(A,{children:[(0,p.jsxs)(a.Z,{gy:3,children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,controlId:"formGridEmail",children:[(0,p.jsx)(A.Label,{children:"Email"}),(0,p.jsx)(A.Control,{type:"email",placeholder:"Enter email"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,controlId:"formGridPassword",children:[(0,p.jsx)(A.Label,{children:"Password"}),(0,p.jsx)(A.Control,{type:"password",placeholder:"Password"})]})]}),(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"formGridAddress1",children:[(0,p.jsx)(A.Label,{children:"Address"}),(0,p.jsx)(A.Control,{placeholder:"1234 Main St"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"formGridAddress2",children:[(0,p.jsx)(A.Label,{children:"Address 2"}),(0,p.jsx)(A.Control,{placeholder:"Apartment, studio, or floor"})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,controlId:"formGridCity",children:[(0,p.jsx)(A.Label,{children:"City"}),(0,p.jsx)(A.Control,{})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,controlId:"formGridState",children:[(0,p.jsx)(A.Label,{children:"State"}),(0,p.jsxs)(A.Control,{as:"select",children:[(0,p.jsx)("option",{children:"Choose..."}),(0,p.jsx)("option",{children:"..."})]})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,controlId:"formGridZip",children:[(0,p.jsx)(A.Label,{children:"Zip"}),(0,p.jsx)(A.Control,{})]})]}),(0,p.jsx)(A.Group,{className:"mb-3",id:"formGridCheckbox",children:(0,p.jsx)(A.Check,{type:"checkbox",label:"Check me out"})}),(0,p.jsx)(V.Z,{variant:"primary",children:"Sign In"})]})})]})}),(0,p.jsx)(i.Z,{sm:12,lg:6,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Horizontal Form"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(A,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formHorizontalEmail",children:[(0,p.jsx)(A.Label,{column:!0,sm:3,children:"Email"}),(0,p.jsx)(i.Z,{sm:9,children:(0,p.jsx)(A.Control,{type:"email",placeholder:"Email"})})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formHorizontalPassword",children:[(0,p.jsx)(A.Label,{column:!0,sm:3,children:"Password"}),(0,p.jsx)(i.Z,{sm:9,children:(0,p.jsx)(A.Control,{type:"password",placeholder:"Password"})})]}),(0,p.jsx)("fieldset",{children:(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,children:[(0,p.jsx)(A.Label,{as:"legend",column:!0,sm:3,children:"Radios"}),(0,p.jsxs)(i.Z,{sm:9,children:[(0,p.jsx)(A.Check,{type:"radio",label:"first radio",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),(0,p.jsx)(A.Check,{type:"radio",label:"second radio",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),(0,p.jsx)(A.Check,{type:"radio",label:"third radio",name:"formHorizontalRadios",id:"formHorizontalRadios3"})]})]})}),(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formHorizontalCheck",children:[(0,p.jsx)(A.Label,{as:"legend",column:!0,sm:3,children:"Checkbox"}),(0,p.jsx)(i.Z,{sm:9,children:(0,p.jsx)(A.Check,{label:"Remember me"})})]}),(0,p.jsx)(A.Group,{className:"mb-3",as:a.Z,children:(0,p.jsx)(i.Z,{sm:{span:10,offset:2},children:(0,p.jsx)(V.Z,{children:"Sign In"})})})]})})]})}),(0,p.jsx)(i.Z,{sm:12,lg:6,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Horizontal Form Label Sizing"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formHorizontalEmail1",children:[(0,p.jsx)(A.Label,{column:!0,sm:3,children:"Default"}),(0,p.jsx)(i.Z,{sm:9,children:(0,p.jsx)(A.Control,{type:"email",placeholder:"Email"})})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:a.Z,controlId:"formHorizontalEmail2",children:[(0,p.jsx)(A.Label,{className:"col-form-label-lg",column:!0,sm:3,children:"Large"}),(0,p.jsx)(i.Z,{sm:9,children:(0,p.jsx)(A.Control,{type:"email",placeholder:"Email"})})]})]})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Help Text"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",controlId:"formBasicEmail1",children:[(0,p.jsx)(A.Label,{children:"Password"}),(0,p.jsx)(A.Control,{type:"password",placeholder:"Password"}),(0,p.jsx)(A.Text,{className:"text-muted",children:"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),(0,p.jsx)(A,{children:(0,p.jsxs)(A.Group,{className:"mt-3 d-inline-flex align-items-center",as:i.Z,md:6,children:[(0,p.jsx)(A.Label,{children:"Password"}),(0,p.jsx)(A.Control,{type:"password",placeholder:"Password",className:"mx-3"})," ",(0,p.jsx)(A.Text,{className:"text-muted",children:(0,p.jsx)("small",{children:"Must be 8-20 characters long."})})]})})]})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Validation"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(A,{noValidate:!0,validated:e,children:[(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"4",controlId:"validationCustom01",children:[(0,p.jsx)(A.Label,{children:"First name"}),(0,p.jsx)(A.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,p.jsx)(A.Control.Feedback,{children:"Looks good!"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"4",controlId:"validationCustom02",children:[(0,p.jsx)(A.Label,{children:"Last name"}),(0,p.jsx)(A.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,p.jsx)(A.Control.Feedback,{children:"Looks good!"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"4",controlId:"validationCustomUsername",children:[(0,p.jsx)(A.Label,{children:"Username"}),(0,p.jsxs)(q.Z,{children:[(0,p.jsx)(q.Z.Text,{id:"inputGroupPrepend",children:"@"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),(0,p.jsx)(A.Control.Feedback,{type:"invalid",children:"Please choose a username."})]})]})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"6",controlId:"validationCustom03",children:[(0,p.jsx)(A.Label,{children:"City"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"City",required:!0}),(0,p.jsx)(A.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"3",controlId:"validationCustom04",children:[(0,p.jsx)(A.Label,{children:"State"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"State",required:!0}),(0,p.jsx)(A.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"3",controlId:"validationCustom05",children:[(0,p.jsx)(A.Label,{children:"Zip"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"Zip",required:!0}),(0,p.jsx)(A.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]})]}),(0,p.jsx)(A.Group,{className:"mb-3",children:(0,p.jsx)(A.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})}),(0,p.jsx)(V.Z,{onClick:e=>{return!1===(l=e).currentTarget.checkValidity()&&(l.preventDefault(),l.stopPropagation()),void s(!0);var l},children:"Submit form"})]})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Supported Elements"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsx)(A.Group,{className:"mb-3",children:(0,p.jsx)(A.Check,{required:!0,isInvalid:!o,isValid:o,type:"checkbox",id:"supported-checkbox",label:"Check this custom checkbox",feedback:!o&&"Example invalid feedback text.",onChange:()=>t((e=>!e))})}),(0,p.jsxs)(A.Group,{className:"mb-3",children:[(0,p.jsx)(A.Check,{required:!0,isInvalid:!c,isValid:c,type:"radio",label:"Toggle this custom radio",name:"supportedRadio",id:"supportedRadio1",onChange:()=>x(!0)}),(0,p.jsx)(A.Check,{required:!0,isInvalid:!c,isValid:c,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadio",id:"supportedRadio2",feedback:!c&&"More example invalid feedback text.",onChange:()=>x(!0)})]}),(0,p.jsxs)(A.Group,{className:"mt-3",children:[(0,p.jsxs)(A.Control,{as:"select",required:!0,value:h,isInvalid:0===h,isValid:0!==h,onChange:e=>(e=>{m(parseInt(e.target.value))})(e),children:[(0,p.jsx)("option",{value:0,children:"Open this select menu"}),(0,p.jsx)("option",{value:1,children:"1"}),(0,p.jsx)("option",{value:2,children:"2"}),(0,p.jsx)("option",{value:3,children:"3"})]}),h?"":(0,p.jsx)("div",{className:"invalid-feedback",children:"Example invalid custom select feedback"})]}),(0,p.jsxs)("div",{className:"custom-file mt-3",children:[(0,p.jsx)(A.Control,{type:"file",className:"custom-file-input",id:"validatedCustomFile",required:!0,isInvalid:!j,isValid:j,onChange:e=>(e=>{u(!!e.target.value)})(e)}),j?"":(0,p.jsx)("div",{className:"invalid-feedback",children:"Example invalid custom file feedback"})]})]})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Tooltip"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(A,{noValidate:!0,validated:l,children:[(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"4",controlId:"validationCustom011",children:[(0,p.jsx)(A.Label,{children:"First name"}),(0,p.jsx)(A.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,p.jsx)("div",{className:"valid-tooltip",children:"Looks good!"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"4",controlId:"validationCustom021",children:[(0,p.jsx)(A.Label,{children:"Last name"}),(0,p.jsx)(A.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,p.jsx)("div",{className:"valid-tooltip",children:"Looks good!"})]}),(0,p.jsxs)(A.Group,{className:"mb-3",as:i.Z,md:"4",controlId:"validationCustomUsername1",children:[(0,p.jsx)(A.Label,{children:"Username"}),(0,p.jsxs)(q.Z,{children:[(0,p.jsx)(q.Z.Text,{id:"inputGroupPrepend1",children:"@"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),(0,p.jsx)("div",{className:"invalid-tooltip",children:"Please choose a username."})]})]})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(A.Group,{className:"mb-3 position-relative",as:i.Z,md:"6",controlId:"validationCustom031",children:[(0,p.jsx)(A.Label,{children:"City"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"City",required:!0}),(0,p.jsx)("div",{className:"invalid-tooltip",children:"Please provide a valid city."})]}),(0,p.jsxs)(A.Group,{className:"mb-3 position-relative",as:i.Z,md:"3",controlId:"validationCustom041",children:[(0,p.jsx)(A.Label,{children:"State"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"State",required:!0}),(0,p.jsx)("div",{className:"invalid-tooltip",children:"Please provide a valid state."})]}),(0,p.jsxs)(A.Group,{className:"mb-3 position-relative",as:i.Z,md:"3",controlId:"validationCustom051",children:[(0,p.jsx)(A.Label,{children:"Zip"}),(0,p.jsx)(A.Control,{type:"text",placeholder:"Zip",required:!0}),(0,p.jsx)("div",{className:"invalid-tooltip",children:"Please provide a valid zip."})]})]}),(0,p.jsx)(A.Group,{className:"mb-3",children:(0,p.jsx)(A.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting.",id:"tooltip-agree"})}),(0,p.jsx)(V.Z,{onClick:e=>{return!1===(s=e).currentTarget.checkValidity()&&(s.preventDefault(),s.stopPropagation()),void d(!0);var s},children:"Submit form"})]})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Checkboxes and Radios"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(i.Z,{md:12,children:[(0,p.jsx)("h6",{className:"text-muted",children:"Checkboxes"}),(0,p.jsx)("hr",{}),(0,p.jsx)(A.Group,{className:"mb-3",children:(0,p.jsx)(A.Check,{type:"checkbox",id:"checkbox1",label:"Check this custom checkbox"})})]}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsx)("h6",{className:"mt-4 text-muted",children:"Radios"}),(0,p.jsx)("hr",{}),(0,p.jsxs)(A.Group,{className:"mb-3",children:[(0,p.jsx)(A.Check,{type:"radio",label:"Toggle this custom radio",name:"supportedRadios",id:"supportedRadio3"}),(0,p.jsx)(A.Check,{type:"radio",label:"Or toggle this other custom radio",name:"supportedRadios",id:"supportedRadio4"})]}),(0,p.jsx)("h6",{className:"mt-3 text-muted",children:"Inline"}),(0,p.jsx)("hr",{}),(0,p.jsxs)(A.Group,{className:"mb-3",children:[(0,p.jsx)(A.Check,{inline:!0,type:"radio",label:"Toggle this custom radio",name:"supportedRadio",id:"supportedRadio21"}),(0,p.jsx)(A.Check,{inline:!0,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadio",id:"supportedRadio22"})]})]}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsx)("h6",{className:"mt-4 text-muted",children:"Range"}),(0,p.jsx)("hr",{}),(0,p.jsx)(A.Label,{htmlFor:"customRange1",children:"Example range"}),(0,p.jsx)(A.Range,{className:"form-control-range"}),(0,p.jsx)(A.Label,{htmlFor:"customRange2",children:"Example range"}),(0,p.jsx)(A.Range,{className:"form-control-range"}),(0,p.jsx)(A.Label,{htmlFor:"customRange3",children:"Example range"}),(0,p.jsx)(A.Range,{className:"form-control-range"})]})]})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Input Group"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{id:"basic-addon1",children:"@"}),(0,p.jsx)(N.Z,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(N.Z,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),(0,p.jsx)(q.Z.Text,{id:"basic-addon2",children:"@example.com"})]}),(0,p.jsx)("label",{htmlFor:"basic-url",children:"Your vanity URL"}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{id:"basic-addon3",children:"https://example.com/users/"}),(0,p.jsx)(N.Z,{id:"basic-url","aria-describedby":"basic-addon3"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{children:"$"}),(0,p.jsx)(N.Z,{"aria-label":"Amount (to the nearest dollar)"}),(0,p.jsx)(q.Z.Text,{children:".00"})]}),(0,p.jsxs)(q.Z,{children:[(0,p.jsx)(q.Z.Text,{children:"With textarea"}),(0,p.jsx)(N.Z,{as:"textarea","aria-label":"With textarea"})]})]})]})}),(0,p.jsxs)(i.Z,{sm:12,md:6,children:[(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Sizing"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(q.Z,{size:"sm",className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{id:"inputGroup-sizing-sm",children:"Small"}),(0,p.jsx)(N.Z,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})]}),(0,p.jsx)("br",{}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{id:"inputGroup-sizing-default",children:"Default"}),(0,p.jsx)(N.Z,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),(0,p.jsx)("br",{}),(0,p.jsxs)(q.Z,{size:"lg",children:[(0,p.jsx)(q.Z.Text,{id:"inputGroup-sizing-lg",children:"Large"}),(0,p.jsx)(N.Z,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"})]})]})]}),(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Multiple inputs"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{children:"First and last name"}),(0,p.jsx)(N.Z,{}),(0,p.jsx)(N.Z,{})]})})]})]}),(0,p.jsxs)(i.Z,{sm:12,md:6,children:[(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Checkboxes and radios"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Checkbox,{"aria-label":"Checkbox for following text input"}),(0,p.jsx)(N.Z,{"aria-label":"Text input with checkbox"})]}),(0,p.jsxs)(q.Z,{children:[(0,p.jsx)(q.Z.Radio,{"aria-label":"Radio button for following text input"}),(0,p.jsx)(N.Z,{"aria-label":"Text input with radio button"})]})]})]}),(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Multiple Addons"})}),(0,p.jsxs)(n.Z.Body,{children:[(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{children:"$"}),(0,p.jsx)(q.Z.Text,{children:"0.00"}),(0,p.jsx)(N.Z,{"aria-label":"Amount (to the nearest dollar)"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(N.Z,{"aria-label":"Amount (to the nearest dollar)"}),(0,p.jsx)(q.Z.Text,{children:"$"}),(0,p.jsx)(q.Z.Text,{children:"0.00"})]})]})]})]}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Button Addons"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(V.Z,{children:"Button"}),(0,p.jsx)(N.Z,{"aria-describedby":"basic-addon1"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(N.Z,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),(0,p.jsx)(V.Z,{children:"Button"})]})]}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(V.Z,{children:"Button"}),(0,p.jsx)(V.Z,{variant:"secondary",children:"Button"}),(0,p.jsx)(N.Z,{"aria-describedby":"basic-addon1"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(N.Z,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),(0,p.jsx)(V.Z,{variant:"secondary",children:"Button"}),(0,p.jsx)(V.Z,{children:"Button"})]})]}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsx)("h6",{className:"mt-5 text-muted",children:"Buttons With Dropdown"}),(0,p.jsx)("hr",{}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsxs)($,{as:q.Z.Prepend,title:"Dropdown",id:"input-group-dropdown-1",children:[(0,p.jsx)(O.Z.Item,{href:"#",children:"Action"}),(0,p.jsx)(O.Z.Item,{href:"#",children:"Another action"}),(0,p.jsx)(O.Z.Item,{href:"#",children:"Something else here"}),(0,p.jsx)(O.Z.Divider,{}),(0,p.jsx)(O.Z.Item,{href:"#",children:"Separated link"})]}),(0,p.jsx)(N.Z,{"aria-describedby":"basic-addon1"})]}),(0,p.jsxs)(q.Z,{children:[(0,p.jsx)(N.Z,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),(0,p.jsxs)($,{as:q.Z.Append,title:"Dropdown",id:"input-group-dropdown-2",children:[(0,p.jsx)(O.Z.Item,{href:"#",children:"Action"}),(0,p.jsx)(O.Z.Item,{href:"#",children:"Another action"}),(0,p.jsx)(O.Z.Item,{href:"#",children:"Something else here"}),(0,p.jsx)(O.Z.Divider,{}),(0,p.jsx)(O.Z.Item,{href:"#",children:"Separated link"})]})]})]}),(0,p.jsxs)(i.Z,{md:6,children:[(0,p.jsx)("h6",{className:"mt-5 text-muted",children:"Segmented Buttons"}),(0,p.jsx)("hr",{}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsxs)(O.Z,{as:q.Z.Prepend,children:[(0,p.jsx)(V.Z,{variant:"secondary",children:"Action"}),(0,p.jsx)(O.Z.Toggle,{split:!0,variant:"secondary",id:"dropdown-split-basic-1"}),(0,p.jsxs)(O.Z.Menu,{children:[(0,p.jsx)(O.Z.Item,{hred:"#/action-1",children:"Action"}),(0,p.jsx)(O.Z.Item,{hred:"#/action-2",children:"Another action"}),(0,p.jsx)(O.Z.Item,{hred:"#/action-3",children:"Something else"})]})]}),(0,p.jsx)(N.Z,{"aria-describedby":"basic-addon1"})]}),(0,p.jsxs)(q.Z,{children:[(0,p.jsx)(N.Z,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),(0,p.jsxs)(O.Z,{as:q.Z.Append,children:[(0,p.jsx)(V.Z,{variant:"secondary",children:"Action"}),(0,p.jsx)(O.Z.Toggle,{split:!0,variant:"secondary",id:"dropdown-split-basic-2"}),(0,p.jsxs)(O.Z.Menu,{children:[(0,p.jsx)(O.Z.Item,{hred:"#/action-1",children:"Action"}),(0,p.jsx)(O.Z.Item,{hred:"#/action-2",children:"Another action"}),(0,p.jsx)(O.Z.Item,{hred:"#/action-3",children:"Something else"})]})]})]})]})]})})]})}),(0,p.jsx)(i.Z,{sm:12,children:(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(n.Z.Header,{children:(0,p.jsx)(n.Z.Title,{as:"h5",children:"Custom Forms"})}),(0,p.jsx)(n.Z.Body,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(i.Z,{lg:6,children:[(0,p.jsx)("h6",{className:"mt-3 text-muted",children:"Custom Select"}),(0,p.jsx)("hr",{}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{id:"custom-addons1",children:"Option"}),(0,p.jsxs)(N.Z,{as:"select","aria-describedby":"custom-addons1",className:"custom-select",children:[(0,p.jsx)("option",{children:"Choose..."}),(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsxs)(N.Z,{as:"select","aria-describedby":"custom-addons2",className:"custom-select",children:[(0,p.jsx)("option",{children:"Choose..."}),(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]}),(0,p.jsx)(q.Z.Text,{id:"custom-addons2",children:"Option"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(V.Z,{id:"custom-addons3",children:"Button"}),(0,p.jsxs)(N.Z,{as:"select","aria-describedby":"custom-addons3",className:"custom-select",children:[(0,p.jsx)("option",{children:"Choose..."}),(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsxs)(N.Z,{as:"select","aria-describedby":"custom-addons4",className:"custom-select",children:[(0,p.jsx)("option",{children:"Choose..."}),(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]}),(0,p.jsx)(V.Z,{id:"custom-addons4",children:"Button"})]})]}),(0,p.jsxs)(i.Z,{lg:6,children:[(0,p.jsx)("h6",{className:"mt-3 text-muted",children:"Custom File Input"}),(0,p.jsx)("hr",{}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(q.Z.Text,{id:"custom-addons5",children:"Upload"}),(0,p.jsx)(A.Control,{"aria-describedby":"custom-addons5",placeholder:"Choose file",type:"file",className:"custom-file-input",id:"validatedCustomFile1"})]}),(0,p.jsxs)(q.Z,{className:"mb-3",children:[(0,p.jsx)(A.Control,{"aria-describedby":"custom-addons6",type:"file",className:"custom-file-input",id:"validatedCustomFile2"}),(0,p.jsx)(q.Z.Text,{id:"custom-addons6",children:"Upload"})]}),(0,p.jsxs)(q.Z,{className:"mb-3 cust-file-button",children:[(0,p.jsx)(V.Z,{id:"custom-addons7",children:"Button"}),(0,p.jsx)(A.Control,{"aria-describedby":"custom-addons7",type:"file",className:"custom-file-input",id:"validatedCustomFile3"})]}),(0,p.jsxs)(q.Z,{className:"mb-3 cust-file-button",children:[(0,p.jsx)(A.Control,{"aria-describedby":"custom-addons8",type:"file",className:"custom-file-input",id:"validatedCustomFile4"}),(0,p.jsx)(V.Z,{id:"custom-addons8",children:"Button"})]})]})]})})]})})]})})}},31616:(e,s,l)=>{l.d(s,{Z:()=>t});var r=l(46123),a=l.n(r),i=l(47313),n=l(68524),d=l(46417);const o=i.forwardRef(((e,s)=>{const[{className:l,...r},{as:i="div",bsPrefix:o,spans:t}]=function(e){let{as:s,bsPrefix:l,className:r,...i}=e;l=(0,n.vE)(l,"col");const d=(0,n.pi)(),o=(0,n.zG)(),t=[],c=[];return d.forEach((e=>{const s=i[e];let r,a,n;delete i[e],"object"===typeof s&&null!=s?({span:r,offset:a,order:n}=s):r=s;const d=e!==o?"-".concat(e):"";r&&t.push(!0===r?"".concat(l).concat(d):"".concat(l).concat(d,"-").concat(r)),null!=n&&c.push("order".concat(d,"-").concat(n)),null!=a&&c.push("offset".concat(d,"-").concat(a))})),[{...i,className:a()(r,...t,...c)},{as:s,bsPrefix:l,spans:t}]}(e);return(0,d.jsx)(i,{...r,ref:s,className:a()(l,!t.length&&o)})}));o.displayName="Col";const t=o},46682:(e,s,l)=>{l.d(s,{Ed:()=>i,UI:()=>a,XW:()=>n});var r=l(47313);function a(e,s){let l=0;return r.Children.map(e,(e=>r.isValidElement(e)?s(e,l++):e))}function i(e,s){let l=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&s(e,l++)}))}function n(e,s){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===s))}},63849:(e,s,l)=>{l.d(s,{Z:()=>t});var r=l(46123),a=l.n(r),i=l(47313),n=l(68524),d=l(46417);const o=i.forwardRef(((e,s)=>{let{bsPrefix:l,className:r,as:i="div",...o}=e;const t=(0,n.vE)(l,"row"),c=(0,n.pi)(),x=(0,n.zG)(),h="".concat(t,"-cols"),m=[];return c.forEach((e=>{const s=o[e];let l;delete o[e],null!=s&&"object"===typeof s?({cols:l}=s):l=s;const r=e!==x?"-".concat(e):"";null!=l&&m.push("".concat(h).concat(r,"-").concat(l))})),(0,d.jsx)(i,{ref:s,...o,className:a()(r,t,...m)})}));o.displayName="Row";const t=o}}]);