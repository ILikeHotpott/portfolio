(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(7174)}])},3980:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(5893),l=a(7294);a(5575),a(559);var i=()=>(0,s.jsxs)("div",{className:"star-layer",children:[(0,s.jsx)("div",{className:"layer1 star-layer"}),(0,s.jsx)("div",{className:"layer2 star-layer"}),(0,s.jsx)("div",{className:"layer3 star-layer"}),(0,s.jsx)("div",{className:"layer4 star-layer"}),(0,s.jsx)("div",{className:"layer5 star-layer"})]}),r=a(1664),n=a.n(r),o=()=>{let[e,t]=(0,l.useState)(!1);return(0,s.jsxs)("div",{className:"relative z-20 w-screen",children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between px-4 py-2 bg-gray-800",children:[(0,s.jsx)("div",{className:"brand-container",children:(0,s.jsx)("a",{href:"/",className:"text-white text-2xl font-bold",children:"Yitong Liu"})}),(0,s.jsxs)("div",{className:"hidden md:flex space-x-6 text-lg",children:[(0,s.jsx)("a",{href:"/",className:"text-white hover:text-gray-300",children:"HOME"}),(0,s.jsx)("a",{href:"/about/",className:"text-white hover:text-gray-300",children:"ABOUT"}),(0,s.jsx)("a",{href:"/projects/",className:"text-white hover:text-gray-300",children:"PROJECTS"}),(0,s.jsx)("a",{href:"/contact/",className:"text-white hover:text-gray-300",children:"CONTACT"})]}),(0,s.jsx)("div",{className:"md:hidden",children:(0,s.jsx)("button",{onClick:()=>t(!e),className:"text-white focus:outline-none",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e?(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]}),e&&(0,s.jsxs)("div",{className:"absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-2 py-4 md:hidden",children:[(0,s.jsx)(n(),{href:"/",className:"text-white hover:text-gray-300",children:"HOME"}),(0,s.jsx)(n(),{href:"/about",className:"text-white hover:text-gray-300",children:"ABOUT"}),(0,s.jsx)(n(),{href:"/projects",className:"text-white hover:text-gray-300",children:"PROJECTS"}),(0,s.jsx)(n(),{href:"/contact",className:"text-white hover:text-gray-300",children:"CONTACT"})]}),(0,s.jsx)(i,{className:"absolute inset-0 z-0"})]})}},7174:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(5893),l=a(3980),i=a(7294),r=a(1027),n=a(1790),o=a(9854),d=a(4559),c=a(1487),m=a(7787),u=a(7740),x=a(6597),h=a(6476),f=a(7227),g=a(2567);function v(){let e=(0,i.useRef)(),{isOpen:t,onOpen:a,onOpenChange:l}=(0,r.q)(),[v,j]=(0,i.useState)(""),[p,b]=(0,i.useState)(""),[N,y]=(0,i.useState)(""),[w,S]=(0,i.useState)(""),[k,_]=(0,i.useState)(""),[C,E]=(0,i.useState)({});(0,i.useEffect)(()=>{f.ZP.init("aiTYekjYZIGPDJ2UI")},[]);let M=()=>{let e=!0,t={};return v.trim()||(t.firstName="First name is required",e=!1),p.trim()||(t.lastName="Last name is required",e=!1),N.trim()?/\S+@\S+\.\S+/.test(N)||(t.email="Email is invalid",e=!1):(t.email="Email is required",e=!1),w.trim()||(t.subject="Subject is required",e=!1),k.trim()||(t.message="Message is required",e=!1),E(t),e},O=()=>{let e=JSON.parse(localStorage.getItem("submissions")||"[]"),t=Date.now(),a=e.filter(e=>t-e<36e5);return a.length>=3?(alert("You have reached the maximum number of submissions per hour. Please try again later."),!1):(a.push(t),localStorage.setItem("submissions",JSON.stringify(a)),!0)};return(0,s.jsxs)("div",{className:"flex h-[90vh] w-screen justify-end overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8",style:{backgroundImage:"url(https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/danielhaha.jpg)",backgroundSize:"cover",backgroundPosition:"center"},children:[(0,s.jsxs)("div",{className:"absolute left-10 hidden md:block",children:[(0,s.jsx)("span",{className:"text-3xl leading-loose text-white",children:"Drop a line..."}),(0,s.jsxs)("p",{className:"max-w-xl text-white text-2xl leading-relaxed",children:["if you have questions, want to work together, wish to know more about me or just feel like chatting! Fill out the form or write to yitong1210@gmail.com ",(0,s.jsx)("br",{})]})]}),(0,s.jsxs)("div",{className:"flex w-full max-w-lg flex-col gap-6 rounded-large bg-content1 px-8 pb-6 pt-8 shadow-small text-md",children:[(0,s.jsx)("p",{className:"pb-4 text-3xl text-default-600 font-semibold",children:"Send Message"}),(0,s.jsxs)("form",{ref:e,className:"flex flex-col gap-5",onSubmit:e=>{e.preventDefault(),console.log("SendMessage component rendered"),M()&&O()&&f.ZP.send("service_7hkeayp","template_a3y3cze",{first_name:v,last_name:p,email:N,subject:w,message:k}).then(e=>{console.log("EmailJS Result:",e.text),j(""),b(""),y(""),S(""),_(""),E({}),a()},e=>{console.error("EmailJS Error:",e.text),alert("Failed to send message, please try again.")})},children:[(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(n.Y,{label:"First Name",name:"first_name",type:"text",variant:"bordered",isRequired:!0,value:v,onChange:e=>j(e.target.value),validationState:C.firstName?"invalid":void 0,errorMessage:C.firstName,classNames:{input:"w-2/5 text-md text-default-600",label:"text-md text-default-600"}}),(0,s.jsx)(n.Y,{label:"Last Name",name:"last_name",type:"text",variant:"bordered",isRequired:!0,value:p,onChange:e=>b(e.target.value),validationState:C.lastName?"invalid":void 0,errorMessage:C.lastName,classNames:{input:"w-2/5 text-md text-default-600",label:"text-md text-default-600"}})]}),(0,s.jsx)(n.Y,{label:"Email",name:"email",type:"email",variant:"bordered",isRequired:!0,value:N,onChange:e=>y(e.target.value),validationState:C.email?"invalid":void 0,errorMessage:C.email,classNames:{input:"w-full text-md text-default-600",label:"text-md text-default-600"}}),(0,s.jsx)(n.Y,{label:"Subject",name:"subject",type:"text",variant:"bordered",isRequired:!0,value:w,onChange:e=>S(e.target.value),validationState:C.subject?"invalid":void 0,errorMessage:C.subject,classNames:{input:"w-full text-md text-default-600",label:"text-md text-default-600"}}),(0,s.jsx)(o.Y,{label:"Message",name:"message",variant:"bordered",isRequired:!0,value:k,onChange:e=>_(e.target.value),validationState:C.message?"invalid":void 0,errorMessage:C.message,className:"w-full text-md",minRows:5,classNames:{input:"w-full text-md text-default-600",label:"text-md text-default-600"}}),(0,s.jsx)(d.A,{color:"primary",type:"submit",className:"mt-2 text-md px-6 py-3",children:"Submit"}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/yitong-liu-0239552b4/",children:(0,s.jsx)(g.JO,{className:"text-default-400",icon:"skill-icons:linkedin",width:56})})]})]}),(0,s.jsx)(c.R,{backdrop:"opaque",size:"lg",isOpen:t,onOpenChange:l,motionProps:{variants:{enter:{y:0,opacity:1,transition:{duration:.3,ease:"easeOut"}},exit:{y:-20,opacity:0,transition:{duration:.2,ease:"easeIn"}}}},children:(0,s.jsx)(m.A,{children:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.k,{className:"flex flex-col gap-1 text-default-700",children:"Your message has been sent successfully!"}),(0,s.jsx)(x.I,{children:(0,s.jsx)("p",{className:"text-default-700",children:"Thank you for your message. I'll get back to you as soon as possible."})}),(0,s.jsx)(h.R,{children:(0,s.jsx)(d.A,{color:"primary",onPress:e,children:"Close"})})]})})})]})}a(7232);var j=()=>(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(v,{})]})},5575:function(){},7232:function(){},559:function(){}},function(e){e.O(0,[736,152,869,15,893,888,774,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);