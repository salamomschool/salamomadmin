import{r as a,i as m,k as i,o as R,j as e,s as T,m as D,n as _}from"./index-BOW9aXAt.js";import"./firebaseConfig-C2RYo4BK.js";import{S as o}from"./sweetalert2.all-CknvBjmT.js";import{C as f}from"./index.es-BNppl9rn.js";import{C as j}from"./CButton-DTyOUR8Q.js";import{c as z,a as O}from"./cil-trash-BwZseM3u.js";import{c as A}from"./cil-pen-53d2I-C-.js";import{C as H,a as I,b as v,c as d,d as E}from"./CTable-R-4nV3n8.js";const G=()=>{const[y,g]=a.useState([]),r=a.useRef(null),n=a.useRef(null),u=a.useRef(null),[l,p]=a.useState(""),c=a.useRef(""),h=a.useRef(""),b=m(),C=i(b,"/SalaMOM/tools/permitted/");a.useEffect(()=>{R(C,t=>{const s=t.val();g(s?Object.values(s):[])}),c.current.style.display="none"},[]);const w=t=>{t.preventDefault(),r.current.value=t.target.value,p(t.target.value)},k=t=>{const s=t.target.dataset.month,x=t.target.dataset.status;u.current.value=s,r.current.value=s,n.current.value=x,p(s),h.current.style.display="inline-block",c.current.style.display="inline-block"},N=()=>{const t=m();l?(o.fire({text:"ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",icon:"success",showConfirmButton:!1,timer:2200}),T(i(t,"/SalaMOM/tools/permitted/"+l),{id:r.current.value,show_add_month:r.current.value,status:n.current.value})):o.fire({text:"ព័ត៍មានមិនត្រឹមត្រូវ!",icon:"error",showConfirmButton:!1,timer:2200})};function S(t){return t.status==="active"?{color:"white",fontWeight:"bold",backgroundColor:"green",borderRadius:"5px",fontSize:"12px"}:{color:"dark",fontWeight:"bold",backgroundColor:"orange",borderRadius:"5px",fontSize:"12px"}}const B=()=>{h.current.style.display="inline-block",c.current.style.display="none";const t=m();l?(o.fire({text:"ព័ត៍មានបានកែត្រឹមត្រូវ!",icon:"success",showConfirmButton:!1,timer:2200}),D(i(t,"/SalaMOM/tools/permitted/"+l),{id:r.current.value,show_add_month:r.current.value,status:n.current.value}),n.current.value=null,u.current.value=null,r.current.value=null):o.fire({text:"ព័ត៍មានមិនត្រឹមត្រូវ!",icon:"error",showConfirmButton:!1,timer:2200})},M=t=>{const s=t.target.dataset.idde;o.fire({title:"ប្រាកដឬដែរអ្នកចង់លុបវា?",text:"អ្នកមិនអាចយកវាត្រលប់មកវិញបានទេ!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"លុបចេញ",cancelButtonText:"មិនយល់ព្រម"}).then(x=>{x.isConfirmed&&s&&(o.fire({text:"បានលុបត្រឹមត្រូវ",icon:"success",showConfirmButton:!1,timer:2200}),_(i(b,"/SalaMOM/tools/permitted/"+s)))})};return e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12 grid-margin",children:e.jsx("div",{className:"card card-primary card-outline",children:e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{className:"card-title",children:"កំណត់ខែបញ្ចូលពិន្ទុ"}),e.jsx("table",{className:"table table-borderless border-0",children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"form-group text-center",children:e.jsxs("select",{ref:n,className:"form-select text-center",id:"sle_status",style:{color:"black",fontSize:"13px",lineHeight:"2"},children:[e.jsx("option",{children:"ជ្រើសរើសស្ថានភាព"}),e.jsx("option",{value:"active",children:"កំពុងដំណើរការ"}),e.jsx("option",{value:"pending",children:"ផ្អាក"})]})})}),e.jsx("td",{children:e.jsx("div",{className:"form-group text-center",children:e.jsxs("select",{ref:u,className:"form-select text-center",id:"sle_status",onChange:w,style:{color:"black",fontSize:"13px",lineHeight:"2"},children:[e.jsx("option",{children:"ជ្រើសរើសខែ"}),e.jsx("option",{value:"October",children:"តុលា"}),e.jsx("option",{value:"November",children:"វិច្ឆិកា"}),e.jsx("option",{value:"December",children:"ធ្នូ"}),e.jsx("option",{value:"January",children:"មករា"}),e.jsx("option",{value:"February",children:"កុម្ភៈ"}),e.jsx("option",{value:"March",children:"មីនា"}),e.jsx("option",{value:"April-May",children:"មេសា-ឧសភា"}),e.jsx("option",{value:"June",children:"មិថុនា"}),e.jsx("option",{value:"July",children:"កក្កដា"}),e.jsx("option",{value:"1st Semester",children:"ឆមាសទី១"}),e.jsx("option",{value:"2nd Semester",children:"ឆមាសទី២"})]})})})]})}),e.jsxs("div",{children:[e.jsxs(j,{ref:h,onClick:N,style:{color:"white"},type:"button",className:"btn btn-success btn-sm",children:[e.jsx(f,{icon:z}),"   បញ្ចូល"]}),e.jsxs(j,{ref:c,onClick:B,style:{color:"white"},type:"button",className:"btn btn-warning btn-sm",children:[e.jsx(f,{icon:A}),"   កែ"]}),e.jsx("div",{style:{padding:"5px"}}),e.jsx("input",{autocomplete:"off",style:{color:"black",lineHeight:"2"},ref:r,className:"form-control",type:"hidden",id:"show_add_month"})]})]})}),e.jsx("div",{style:{overflowX:"auto",padding:"15px"},children:e.jsxs(H,{className:"table table-bordered table-hover",children:[e.jsx(I,{children:e.jsxs(v,{className:"frezze",children:[e.jsx(d,{style:{backgroundColor:"rgb(23, 116, 153)",color:"white"},className:"border-dark text-center",children:"ល.រ"}),e.jsx(d,{style:{backgroundColor:"rgb(23, 116, 153)",color:"white"},className:"border-dark text-center",children:"ខែអនុញ្ញាត"}),e.jsx(d,{style:{backgroundColor:"rgb(23, 116, 153)",color:"white"},className:"border-dark text-center",children:"បច្ចុប្បន្នភាព"}),e.jsx(d,{style:{backgroundColor:"rgb(23, 116, 153)",color:"white"},className:"border-dark text-center",children:"លុប"})]})}),e.jsx(E,{children:y.map((t,s)=>e.jsxs(v,{children:[e.jsx("td",{className:"text-center",children:s+1}),e.jsx("td",{className:"text-center",onClick:k,"data-status":t.status,"data-month":t.id,children:t.id}),e.jsx("td",{className:"text-center",children:e.jsx("span",{style:S(t),children:t.status})}),e.jsx("td",{"data-idde":t.id,onClick:M,class:"text-center border-dark",style:{color:"red"},children:e.jsx(f,{icon:O})})]}))})]})})]})})})})};export{G as default};
