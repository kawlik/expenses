import{r as d,j as e,F as a,a as t,d as S,b as g,c as v,e as b,f as L,g as j,h as I,i as $,k as P,R as _,l as E}from"./vendor.50f769fa.js";const C=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}};C();var c={API:{},views:{list:["saved","active","profile"],name:{saved:"saved",active:"active",profile:"profile"}}};const y=d.exports.createContext(null),W=({children:i})=>{const[n,r]=d.exports.useState(null),o={user:n,setUser:r};return d.exports.useEffect(()=>()=>{},[]),e(y.Provider,{value:o,children:i})},F=()=>(d.exports.useContext(y),e(a,{children:e("div",{className:"modal modal-signin position-static d-block bg-light py-5",children:e("div",{className:"modal-dialog",children:e("div",{className:"modal-content shadow",style:{borderRadius:"15px"},children:t("div",{className:"modal-body p-4",children:[e("h2",{className:"fw-bold p-2 mb-4",children:"Logowanie"}),t("div",{className:"form-floating my-2",children:[e("input",{id:"login-token",className:"form-control",type:"password",placeholder:"Token logowania",style:{borderRadius:"10px"}}),e("label",{htmlFor:"login-token",children:"Token logowania"})]}),e("button",{className:"w-100 btn btn-lg btn-success my-2",type:"button",style:{borderRadius:"10px"},children:"Zaloguj"}),e("small",{className:"text-muted",children:"Do zalogowania si\u0119 konieczne jest uzyskanie z serwisu Facebook indywidualnego tokenu logowania."}),e("hr",{className:"my-4"}),e("h2",{className:"fw-bold fs-5",children:"Pobierz token logowania"}),t("button",{className:"w-100 btn btn-lg btn-outline-primary my-2",type:"button",style:{borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(S,{style:{fontSize:"36px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Zaloguj z Facebook"})]})]})})})})})),T=()=>{const[i,n]=d.exports.useState("");return e(a,{children:t("section",{className:"p-2 border",style:{borderRadius:"10px"},children:[e("h2",{className:"fw-bold fs-5",children:"Dodaj nowe rozliczenie"}),t("select",{value:i,onChange:o=>{n(o.target.value)},className:"form-select my-2",style:{height:"42px",borderRadius:"10px"},children:[e("option",{value:"Imi\u0119 Nazwisko",children:"Imi\u0119 Nazwisko"}),e("option",{value:"Imi\u0119 Nazwisko",children:"Imi\u0119 Nazwisko"}),e("option",{value:"Imi\u0119 Nazwisko",children:"Imi\u0119 Nazwisko"})]}),t("button",{disabled:i==="",className:"w-100 btn btn-outline-success mt-2",type:"button",style:{height:"42px",borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(g,{style:{fontSize:"24px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Dodaj"})]})]})})},q=()=>{const[i,n]=d.exports.useState(""),[r,o]=d.exports.useState("");return e(a,{children:t("div",{className:"row my-1 py-1",children:[e("div",{className:"col-12 mb-3",children:e("input",{value:i,onChange:m=>{n(m.target.value)},type:"text",className:"form-control",placeholder:"Wydatek",style:{height:"42px",borderRadius:"10px"}})}),t("div",{className:"col-12 mb-3 input-group",children:[e("input",{value:r,onChange:m=>{o(m.target.value)},min:1,max:1e4,step:1,type:"number",className:"form-control",placeholder:"Cena",style:{height:"42px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}),e("span",{className:"input-group-text",style:{height:"42px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},children:".00"})]}),e("div",{className:"col-12",children:t("button",{disabled:i===""||r==="",type:"button",className:"btn btn-outline-success w-100",style:{height:"42px",borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(g,{style:{fontSize:"24px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Dodaj"})]})})]})})},f=()=>t(a,{children:[e("h4",{className:"lead",children:"10-10-2021"}),t("div",{className:"py-1 w-100",children:[t("span",{className:"badge bg-info",style:{verticalAlign:"middle",marginRight:"10px",minWidth:"84px",height:" 32px",textAlign:"left"},children:[e("span",{style:{verticalAlign:"middle",marginRight:"5px"},children:e(v,{})}),e("span",{style:{verticalAlign:"middle"},children:"0"})]}),e("span",{style:{verticalAlign:"middle",marginRight:"10px"},children:e("img",{src:"https://picsum.photos/200",alt:"tmp-alt-text",style:{width:"32px",height:" 32px",borderRadius:"32px"}})}),e("span",{style:{verticalAlign:"middle",fontSize:"20px",fontWeight:"300"},children:"Imi\u0119 Nazwisko"})]}),t("div",{className:"py-1 w-100",children:[t("span",{className:"badge bg-info",style:{verticalAlign:"middle",marginRight:"10px",minWidth:"84px",height:" 32px",textAlign:"left"},children:[e("span",{style:{verticalAlign:"middle",marginRight:"5px"},children:e(v,{})}),e("span",{style:{verticalAlign:"middle"},children:"0"})]}),e("span",{style:{verticalAlign:"middle",marginRight:"10px"},children:e("img",{src:"https://picsum.photos/200",alt:"tmp-alt-text",style:{width:"32px",height:" 32px",borderRadius:"32px"}})}),e("span",{style:{verticalAlign:"middle",fontSize:"20px",fontWeight:"300"},children:"Imi\u0119 Nazwisko"})]})]}),w=()=>e(a,{children:t("figure",{className:"m-1 p-1",children:[t("blockquote",{className:"blockquote",children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:"0"}),e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:"Wydatek"})]}),e("figcaption",{className:"blockquote-footer",children:"Imi\u0119 Nazwisko"})]})}),D=()=>e(a,{children:t("div",{className:"mb-3 border p-2",style:{borderRadius:"10px"},children:[e(f,{}),t("details",{className:"py-1 w-100 my-2",children:[t("summary",{className:"btn btn-outline-secondary w-100",style:{height:"42px",borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(b,{style:{fontSize:"24px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Wi\u0119cej"})]}),t("div",{className:"py-1 w-100 my-4",children:[e("h5",{className:"lead",children:"Dodaj nowy wydatek"}),e(q,{})]}),t("div",{className:"py-1 w-100",children:[e("h5",{className:"lead",children:"Zapisane wydatki"}),e(w,{})]})]}),t("button",{className:"w-100 btn btn-outline-danger mt-2",type:"button",style:{height:"42px",borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(L,{style:{fontSize:"24px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Zako\u0144cz"})]})]})}),M=()=>t(a,{children:[e(D,{}),e(T,{})]}),Z=()=>e(a,{children:t("li",{className:"w-100 mb-2",style:{listStyle:"none"},children:[e("span",{style:{verticalAlign:"middle",marginRight:"10px"},children:e("img",{src:"https://picsum.photos/200",alt:"tmp-alt-text",style:{width:"42px",height:"42px",borderRadius:"42px"}})}),e("span",{style:{verticalAlign:"middle",fontSize:"28px",fontWeight:"300"},children:"Imi\u0119 Nazwisko"})]})}),O=()=>e(a,{children:t("li",{className:"w-100 mb-4",style:{listStyle:"none"},children:[e("span",{style:{verticalAlign:"middle",marginRight:"10px"},children:e("img",{src:"https://picsum.photos/200",alt:"tmp-alt-text",style:{width:"32px",height:" 32px",borderRadius:"32px"}})}),e("span",{style:{verticalAlign:"middle",fontSize:"20px",fontWeight:"300"},children:"Imi\u0119 Nazwisko"}),t("button",{className:"w-100 btn btn-outline-success mt-2",type:"button",style:{height:"42px",borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(g,{style:{fontSize:"24px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Dodaj"})]})]})}),B=()=>{const[i,n]=d.exports.useState("");return t(a,{children:[t("section",{className:"mb-3 w-100 p-2",children:[e("span",{style:{verticalAlign:"middle",marginRight:"10px"},children:e("img",{src:"https://picsum.photos/200",alt:"tmp-alt-text",style:{width:"50px",height:" 50px",borderRadius:"50px"}})}),e("span",{style:{verticalAlign:"middle",fontSize:"32px",fontWeight:"300"},children:"Imi\u0119 Nazwisko"}),e("hr",{}),t("div",{className:"input-group",children:[e("input",{value:i,onChange:o=>{n(o.target.value)},type:"text",className:"form-control",placeholder:"Wyszukaj znajomego",style:{height:"42px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}),e("span",{className:"input-group-text",style:{height:"42px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"},children:e(j,{})})]}),e("div",{className:"my-2",children:e(O,{})})]}),t("section",{className:"w-100 p-2",children:[e("h2",{className:"display-6",children:"Znajomi"}),e(Z,{})]})]})},X=()=>e(a,{children:t("div",{className:"mb-3 border p-2",style:{borderRadius:"10px"},children:[e(f,{}),t("details",{className:"py-1 w-100 mt-2",children:[t("summary",{className:"btn btn-outline-secondary w-100",style:{height:"42px",borderRadius:"10px"},children:[e("span",{style:{marginRight:"10px",verticalAlign:"middle"},children:e(b,{style:{fontSize:"24px"}})}),e("span",{style:{verticalAlign:"middle"},children:"Wi\u0119cej"})]}),t("div",{className:"py-1 w-100 mt-4",children:[e("h5",{className:"lead",children:"Zapisane wydatki"}),e(w,{})]})]})]})}),Y=()=>e(a,{children:e(X,{})}),H=({view:i,setView:n,setSwipe:r})=>e(a,{children:t("nav",{className:"nav navbar-dark bg-light row p-2 pb-3 w-100",id:"view-selector",children:[e("li",{className:`col-3 row mx-auto ${i===c.views.name.saved&&"active"}`,children:t("button",{className:"mx-auto btn",onClick:()=>{n(c.views.name.saved),r(null)},children:[e(I,{style:{fontSize:"28px"}}),e("small",{children:"Zapisane"})]})}),e("li",{className:`col-3 row mx-auto ${i===c.views.name.active&&"active"}`,children:t("button",{className:"mx-auto btn",onClick:()=>{n(c.views.name.active),r(null)},children:[e($,{style:{fontSize:"28px"}}),e("small",{children:"Aktywne"})]})}),e("li",{className:`col-3 row mx-auto ${i===c.views.name.profile&&"active"}`,children:t("button",{className:"mx-auto btn",onClick:()=>{n(c.views.name.profile),r(null)},children:[e(P,{style:{fontSize:"28px"}}),e("small",{children:"Profil"})]})})]})}),K=()=>{const[i,n]=d.exports.useState(c.views.name.profile),[r,o]=d.exports.useState(null),l={x:null,y:null},s=h=>{l.x=h.touches[0].clientX,l.y=h.touches[0].clientY},m=h=>{if(!l.x||!l.y)return;const N=h.touches[0].clientX,R=h.touches[0].clientY,p=l.x-N,A=l.y-R;if(document.querySelector("#view-content").style.transition=null,document.querySelector("#view-content").style.transform=`translateX( ${-.8*p}px )`,Math.abs(p)>Math.abs(A)&&Math.abs(p)>150){const k=0,z=c.views.list.length-1,u=c.views.list.indexOf(i);p<0&&u-1>=k&&(n(c.views.list[u-1]),o("left")),p>0&&u+1<=z&&(n(c.views.list[u+1]),o("right"))}},x=h=>{document.querySelector("#view-content").style.transition="all ease-in-out 0.5s",document.querySelector("#view-content").style.transform=null};return d.exports.useEffect(()=>(document.addEventListener("touchstart",s),document.addEventListener("touchmove",m),document.addEventListener("touchend",x),()=>{document.removeEventListener("touchstart",s),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",x)}),[i]),e(a,{children:t("main",{id:"view-container",children:[t("section",{id:"view-content",className:`p-2 w-100 ${r}`,children:[i===c.views.name.saved&&e(Y,{}),i===c.views.name.active&&e(M,{}),i===c.views.name.profile&&e(B,{})]},i),e(H,{view:i,setView:n,setSwipe:o})]})})},U=()=>{const{user:i}=d.exports.useContext(y);return e(a,{children:i?e(F,{}):e(K,{})})};const V=()=>e(W,{children:e(U,{})});_.render(e(E.StrictMode,{children:e(V,{})}),document.getElementById("root"));
