import{u as I,r as S,j as N}from"./index-pRQnOoee.js";import{l as K,m as O,n as T,d as x,p as _,r as L,e as D,_ as U,g as A,z as v,A as k,k as Z}from"./useTheme-mRHuKwub.js";const pe=I.div`
	position: relative;
	height: 100%;
	width: 100%;
	box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
	cursor: pointer;
	overflow: hidden;
	border: 3px solid transparent;
	border-radius: 10px;
	transition: all 0.3s ease;

	img {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	&:hover {
		border-color: rgba(249, 249, 249, 0.7);
	}
`,F=S.createContext(),z=F;function q(e){return K("MuiGrid",e)}const H=[0,1,2,3,4,5,6,7,8,9,10],J=["column-reverse","column","row-reverse","row"],Q=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=O("MuiGrid",["root","container","item","zeroMinWidth",...H.map(e=>`spacing-xs-${e}`),...J.map(e=>`direction-xs-${e}`),...Q.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),X=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function Y({theme:e,ownerState:r}){let i;return e.breakpoints.keys.reduce((t,n)=>{let o={};if(r[n]&&(i=r[n]),!i)return t;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=v({values:r.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[n]:a;if(u==null)return t;const p=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const s=e.spacing(r.columnSpacing);if(s!=="0px"){const l=`calc(${p} + ${m(s)})`;c={flexBasis:l,maxWidth:l}}}o=x({flexBasis:p,flexGrow:0,maxWidth:p},c)}return e.breakpoints.values[n]===0?Object.assign(t,o):t[e.breakpoints.up(n)]=o,t},{})}function ee({theme:e,ownerState:r}){const i=v({values:r.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,t=>{const n={flexDirection:t};return t.indexOf("column")===0&&(n[`& > .${h.item}`]={maxWidth:"none"}),n})}function B({breakpoints:e,values:r}){let i="";Object.keys(r).forEach(n=>{i===""&&r[n]!==0&&(i=n)});const t=Object.keys(e).sort((n,o)=>e[n]-e[o]);return t.slice(0,t.indexOf(i))}function re({theme:e,ownerState:r}){const{container:i,rowSpacing:t}=r;let n={};if(i&&t!==0){const o=v({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${m(s)}`,[`& > .${h.item}`]:{paddingTop:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{marginTop:0,[`& > .${h.item}`]:{paddingTop:0}}})}return n}function ne({theme:e,ownerState:r}){const{container:i,columnSpacing:t}=r;let n={};if(i&&t!==0){const o=v({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${m(s)})`,marginLeft:`-${m(s)}`,[`& > .${h.item}`]:{paddingLeft:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{width:"100%",marginLeft:0,[`& > .${h.item}`]:{paddingLeft:0}}})}return n}function te(e,r,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return r.forEach(n=>{const o=e[n];Number(o)>0&&t.push(i[`spacing-${n}-${String(o)}`])}),t}const ie=T("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{container:t,direction:n,item:o,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=i;let s=[];t&&(s=te(a,c,r));const l=[];return c.forEach(d=>{const f=i[d];f&&l.push(r[`grid-${d}-${String(f)}`])}),[r.root,t&&r.container,o&&r.item,p&&r.zeroMinWidth,...s,n!=="row"&&r[`direction-xs-${String(n)}`],u!=="wrap"&&r[`wrap-xs-${String(u)}`],...l]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ee,re,ne,Y);function oe(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return r.forEach(t=>{const n=e[t];if(Number(n)>0){const o=`spacing-${t}-${String(n)}`;i.push(o)}}),i}const se=e=>{const{classes:r,container:i,direction:t,item:n,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:p}=e;let c=[];i&&(c=oe(o,p));const s=[];p.forEach(d=>{const f=e[d];f&&s.push(`grid-${d}-${String(f)}`)});const l={root:["root",i&&"container",n&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return Z(l,q,r)},ae=S.forwardRef(function(r,i){const t=_({props:r,name:"MuiGrid"}),{breakpoints:n}=L(),o=D(t),{className:a,columns:u,columnSpacing:p,component:c="div",container:s=!1,direction:l="row",item:d=!1,rowSpacing:f,spacing:w=0,wrap:M="wrap",zeroMinWidth:V=!1}=o,b=U(o,X),j=f||w,E=p||w,P=S.useContext(z),G=s?u||12:P,y={},W=x({},b);n.keys.forEach($=>{b[$]!=null&&(y[$]=b[$],delete W[$])});const C=x({},o,{columns:G,container:s,direction:l,item:d,rowSpacing:j,columnSpacing:E,wrap:M,zeroMinWidth:V,spacing:w},y,{breakpoints:n.keys}),R=se(C);return N.jsx(z.Provider,{value:G,children:N.jsx(ie,x({ownerState:C,className:A(R.root,a),as:c,ref:i},W))})}),le=ae;export{le as G,pe as I};
