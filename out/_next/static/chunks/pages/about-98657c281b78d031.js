(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(7893)}])},3980:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(5893),i=a(7294);a(5575),a(559);var r=()=>(0,s.jsxs)("div",{className:"star-layer",children:[(0,s.jsx)("div",{className:"layer1 star-layer"}),(0,s.jsx)("div",{className:"layer2 star-layer"}),(0,s.jsx)("div",{className:"layer3 star-layer"}),(0,s.jsx)("div",{className:"layer4 star-layer"}),(0,s.jsx)("div",{className:"layer5 star-layer"})]}),n=()=>{let[e,t]=(0,i.useState)(!1);return(0,s.jsxs)("div",{className:"relative z-20",children:[(0,s.jsxs)("nav",{className:"flex items-center justify-between px-4 py-2 bg-gray-800",children:[(0,s.jsx)("div",{className:"brand-container",children:(0,s.jsx)("a",{href:"/",className:"text-white text-2xl font-bold",children:"Yitong Liu"})}),(0,s.jsxs)("div",{className:"hidden md:flex space-x-6 text-lg",children:[(0,s.jsx)("a",{href:"/",className:"text-white hover:text-gray-300",children:"HOME"}),(0,s.jsx)("a",{href:"/about/",className:"text-white hover:text-gray-300",children:"ABOUT"}),(0,s.jsx)("a",{href:"/projects/",className:"text-white hover:text-gray-300",children:"PROJECTS"}),(0,s.jsx)("a",{href:"/contact/",className:"text-white hover:text-gray-300",children:"CONTACT"})]}),(0,s.jsx)("div",{className:"md:hidden",children:(0,s.jsx)("button",{onClick:()=>t(!e),className:"text-white focus:outline-none",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e?(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]}),e&&(0,s.jsxs)("div",{className:"absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-2 py-4 md:hidden",children:[(0,s.jsx)("a",{href:"/",className:"text-white hover:text-gray-300",children:"HOME"}),(0,s.jsx)("a",{href:"/about/",className:"text-white hover:text-gray-300",children:"ABOUT"}),(0,s.jsx)("a",{href:"/projects/",className:"text-white hover:text-gray-300",children:"PROJECTS"}),(0,s.jsx)("a",{href:"/contact/",className:"text-white hover:text-gray-300",children:"CONTACT"})]}),(0,s.jsx)(r,{className:"absolute inset-0 z-0"})]})}},9432:function(e,t,a){"use strict";var s=a(5893);a(7294);var i=a(2567);t.Z=()=>(0,s.jsx)("footer",{className:"bg-beige text-center py-8",children:(0,s.jsxs)("div",{className:"max-w-screen-lg mx-auto",children:[(0,s.jsx)("hr",{className:"border-t-2 border-gray-500 mb-4"}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center space-x-2 md:space-x-4 my-4",children:[(0,s.jsx)("a",{href:"https://www.linkedin.com/in/yitong-liu-0239552b4/",className:"text-purple-400 hover:text-purple-500",children:(0,s.jsx)(i.JO,{className:"text-default-400",icon:"skill-icons:linkedin",width:40,md:{width:56}})}),(0,s.jsx)("a",{href:"https://github.com/ILikeHotpott/",className:"text-purple-400 hover:text-purple-500",children:(0,s.jsx)(i.JO,{className:"text-default-400",icon:"octicon:mark-github-16",width:40,md:{width:56}})}),(0,s.jsx)("a",{href:"https://www.instagram.com/yitong1210/",className:"text-purple-400 hover:text-purple-500",children:(0,s.jsx)(i.JO,{className:"text-default-400",icon:"skill-icons:instagram",width:40,md:{width:56}})})]}),(0,s.jsx)("div",{className:"text-sm text-black",children:"Designed and Developed by Yitong Liu"})]})})},7893:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(5893);a(7232);var i=a(3980),r=a(7294),n=a(8357);a(782);let c=["https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa","https://i.scdn.co/image/ab67616d0000b273e5a25ed08d1e7e0fbb440cef","https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937","https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7","https://i.scdn.co/image/ab67616d0000b273d441b2e9b63f0b9f9d90be19","https://i.scdn.co/image/ab67616d0000b2737c68face1dc58127f3a7b1cc","https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2","https://i.scdn.co/image/ab67616d0000b2734973a7d9304de53e18583220","https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526","https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9"];var l=e=>{let{images:t=c,speed:a=1.5,direction:i="left",size:n=230,margin:l=10}=e,[o,d]=(0,r.useState)(0),m=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=setInterval(()=>{if(m.current){let e=m.current.scrollWidth/2;d(t=>{let s=t+("right"===i?a:-a);return s<=-e?0:s>=0?-e:s})}},16);return()=>clearInterval(e)},[a,i]),(0,s.jsx)("div",{className:"gallery-wrapper",children:(0,s.jsx)("div",{className:"gallery",ref:m,style:{transform:"translateX(".concat(o,"px)")},children:t.concat(t).map((e,t)=>(0,s.jsx)("img",{src:e,alt:"Gallery image ".concat(t),style:{height:"".concat(n,"px"),width:"".concat(n,"px"),marginLeft:"".concat(l,"px"),borderRadius:"0.75rem"}},t))})})},o=a(4559),d=a(9432),m=()=>{let e;let{ref:t,inView:a}=(0,n.YD)({threshold:0,triggerOnce:!0}),{ref:c,inView:m}=(0,n.YD)({threshold:.5,triggerOnce:!0}),[h,x]=r.useState(window.innerWidth);return r.useEffect(()=>{{let e=()=>{x(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[]),e=h<640?160:h<768?160:h<1024?230:250,console.log(h,e),(0,s.jsxs)("div",{className:"bg-white min-h-screen",children:[(0,s.jsx)("div",{className:"sticky top-0 z-50",children:(0,s.jsx)(i.Z,{})}),(0,s.jsxs)("div",{ref:t,className:"flex flex-col md:flex-row items-stretch justify-between md:h-[100vh] mx-auto w-[90%]",children:[(0,s.jsx)("div",{className:"text-black w-full md:w-[60%] flex items-center justify-center md:h-full px-5 md:px-20 transition duration-700 ease-in-out ".concat(a?"translate-y-0 opacity-100":"-translate-x-20 opacity-0"),children:(0,s.jsxs)("div",{className:"mx-4 w-full",children:[(0,s.jsx)("p",{className:"lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-loose mb-8",children:'"About me"'}),(0,s.jsxs)("p",{className:"text-base sm:text-lg md:text-2xl text-black",children:["I define myself as an open-minded artisan, constantly driven by an endless",(0,s.jsx)("span",{className:"px-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent",children:"curiosity"}),"to explore new possibilities. I am particularly skilled at combining the things I love with my technical expertise. I believe this allows me to create products that are infused with",(0,s.jsx)("span",{className:"px-2 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent",children:"passion"}),"and",(0,s.jsx)("span",{className:"pl-2 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent",children:"warmth"}),"."]})]})}),(0,s.jsx)("div",{className:"w-full md:w-[40%] flex items-center justify-center md:h-full transition-all duration-700 ease-in-out transform ".concat(a?"translate-y-0 opacity-100":"translate-x-20 opacity-0"),children:(0,s.jsx)("img",{src:"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG432.jpg",alt:"About me",className:"w-full h-auto"})})]}),(0,s.jsxs)("div",{ref:c,className:"flex flex-col-reverse md:flex-row items-stretch justify-between md:h-[100vh] mt-10 mx-auto w-[90%]",children:[(0,s.jsx)("div",{className:"w-full md:w-[40%] flex items-center justify-center md:h-full transition-all duration-700 ease-in-out transform ".concat(m?"translate-y-0 opacity-100":"-translate-x-20 opacity-0"),children:(0,s.jsx)("img",{src:"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/WechatIMG433.jpg",alt:"Journey of Programming",className:"w-full h-auto"})}),(0,s.jsx)("div",{className:"text-black w-full md:w-[60%] flex items-center justify-center md:h-full px-5 md:px-20 transition-all duration-700 ease-in-out transform ".concat(m?"translate-y-0 opacity-100":"-translate-y-20 opacity-0"),children:(0,s.jsxs)("div",{className:"mx-4 w-full",children:[(0,s.jsxs)("p",{className:"lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-loose mb-8",children:['"Journey of',(0,s.jsx)("span",{className:"pl-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent",children:"Programming"}),'"']}),(0,s.jsxs)("p",{className:"text-base sm:text-lg md:text-2xl text-black",children:["The journey began in early 2023, when I printed my first line of",(0,s.jsx)("span",{className:"px-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent",children:'"Hello world"'}),"in the computer lab at school, and I knew right away that I loved this feeling. From that moment on, I embarked on a rapid learning journey, starting with foundational knowledge, moving on to solving algorithm problems, and eventually developing complete projects. This path has been full of challenges and growth, but I know how lucky I am to be doing what I love."]}),(0,s.jsx)("div",{className:"flex items-center mt-8 pb-6",children:(0,s.jsx)("a",{href:"/projects/",children:(0,s.jsx)(o.A,{radius:"full",color:"primary",className:"text-lg",children:"Some of my projects"})})})]})})]}),(0,s.jsxs)("div",{className:"min-h-[110vh] ".concat("bg-gradient-to-r from-orange-500 via-purple-400 to-blue-500"," mt-10"),children:[(0,s.jsxs)("div",{className:"mb-10 text-center text-white lg:text-4xl md:text-3xl text-2xl",children:[(0,s.jsx)("div",{className:"pt-20 mb-10",children:"Outside of programming, I also enjoy music,"}),(0,s.jsx)(l,{images:["https://i.scdn.co/image/ab67616d0000b273c94603dcb78ec39322cebb5b","https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856","https://i.scdn.co/image/ab67616d0000b2734a82d19a6315bad34b34be61","https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa","https://i.scdn.co/image/ab67616d0000b273f72f1e38e9bd48f18a17ed9b","https://i.scdn.co/image/ab67616d0000b2738a2ce3f148f57584269c3782","https://i.scdn.co/image/ab67616d0000b273e2d156fdc691f57900134342","https://i.scdn.co/image/ab67616d0000b2735ef4660298ae29ee18799fc2","https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634","https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe"],speed:.4,margin:10,direction:"left",size:e})]}),(0,s.jsx)("div",{className:"mt-28 mb-10 text-center text-white lg:text-4xl md:text-3xl text-2xl",children:"and traveling."}),(0,s.jsx)(l,{images:["https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_0447+(1).jpeg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_0583+(1).jpeg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_0618+(1).jpeg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_2545+(1).jpeg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel2+(1).jpg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel4+(1).jpg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel6+(1).jpg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/IMG_2816+(1).jpeg","https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/travel10+(1).jpg"],speed:.4,margin:10,direction:"right",size:e})]}),(0,s.jsx)(d.Z,{})]})}},5575:function(){},782:function(){},7232:function(){},559:function(){},8357:function(e,t,a){"use strict";a.d(t,{YD:function(){return o}});var s=a(7294),i=Object.defineProperty,r=new Map,n=new WeakMap,c=0,l=void 0;function o({threshold:e,delay:t,trackVisibility:a,rootMargin:i,root:o,triggerOnce:d,skip:m,initialInView:h,fallbackInView:x,onChange:u}={}){var p;let[f,b]=s.useState(null),g=s.useRef(),[w,j]=s.useState({inView:!!h,entry:void 0});g.current=u,s.useEffect(()=>{let s;if(!m&&f)return s=function(e,t,a={},s=l){if(void 0===window.IntersectionObserver&&void 0!==s){let i=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:o,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var a;return`${t}_${"root"===t?(a=e.root)?(n.has(a)||(c+=1,n.set(a,c.toString())),n.get(a)):"0":e[t]}`}).toString(),a=r.get(t);if(!a){let s;let i=new Map,n=new IntersectionObserver(t=>{t.forEach(t=>{var a;let r=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(a=i.get(t.target))||a.forEach(e=>{e(r,t)})})},e);s=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:n,elements:i},r.set(t,a)}return a}(a),m=d.get(e)||[];return d.has(e)||d.set(e,m),m.push(t),o.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(d.delete(e),o.unobserve(e)),0===d.size&&(o.disconnect(),r.delete(i))}}(f,(e,t)=>{j({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&d&&s&&(s(),s=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:a,delay:t},x),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,f,o,i,d,m,a,x,t]);let v=null==(p=w.entry)?void 0:p.target,y=s.useRef();f||!v||d||m||y.current===v||(y.current=v,j({inView:!!h,entry:void 0}));let N=[b,w.inView,w.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}s.Component}},function(e){e.O(0,[567,152,869,893,888,774,179],function(){return e(e.s=512)}),_N_E=e.O()}]);