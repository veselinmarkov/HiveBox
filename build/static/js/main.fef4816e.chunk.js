(this.webpackJsonphivebox=this.webpackJsonphivebox||[]).push([[0],{71:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),s=t.n(o),i=(t(71),t(134)),c=t(135),l=t(136),u=t(16),d=t(29),p=t(13),h=t(128),j=t(129),b=t(130),g=t(132),m=t(140),x=t(141),f=t(138),O=t(127),v=t(142),w=t(124),C=t(131),y=t(133),N=(t(33),t(17)),k=t.n(N);var S=t(137),T=t(3),U=Object(w.a)((function(e){return{container:{display:"flex",gap:"10px",flexDirection:"column",padding:"15px",border:"2px solid #e34d7d",borderRadius:"5px",backgroundColor:"#3f51b5",color:"#fff"},inputText:{backgroundColor:e.palette.background.default}}}));function R(e){var a=r.a.useState(""),t=Object(u.a)(a,2),n=t[0],o=t[1],s=r.a.useState(""),i=Object(u.a)(s,2),c=i[0],l=i[1],d=r.a.useState(""),p=Object(u.a)(d,2),h=p[0],j=p[1],b=r.a.useState(""),g=Object(u.a)(b,2),m=g[0],x=g[1],v=U();return Object(T.jsx)(S.a,{id:"popper",open:e.open,anchorEl:e.anchor,onClose:function(){e.handleClose&&e.handleClose()},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(T.jsxs)("div",{className:v.container,children:[Object(T.jsx)(f.a,{className:v.inputText,placeholder:"FirstName",onChange:function(e){return o(e.target.value)},value:n}),Object(T.jsx)(f.a,{className:v.inputText,placeholder:"LastName",onChange:function(e){return l(e.target.value)},value:c}),Object(T.jsx)(f.a,{className:v.inputText,placeholder:"User",onChange:function(e){return j(e.target.value)},value:h}),Object(T.jsx)(f.a,{type:"password",className:v.inputText,placeholder:"password",onChange:function(e){return x(e.target.value)},value:m}),Object(T.jsx)(O.a,{onClick:function(){e.handleSignup&&e.handleSignup(n,c,h,m,(function(){o(""),l(""),j(""),x("")}))},variant:"contained",color:"primary",children:"Sign Up"})]})})}var B=Object(w.a)((function(e){return{container:{maxWidth:"450px",padding:"15px",border:"2px solid #e34d7d",borderRadius:"5px",backgroundColor:"#3f51b5",color:"#fff"},topics:{fontSize:"large",marginBottom:"0"},paragraph:{marginTop:"0"}}}));function z(e){var a=B(),t=function(){e.handleClose&&e.handleClose()};return Object(T.jsx)(S.a,{id:"popper",open:e.open,anchorEl:e.anchor,onClose:t,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(T.jsxs)("div",{className:a.container,children:[Object(T.jsx)("p",{className:a.topics,children:"How it works"}),Object(T.jsx)("p",{className:a.paragraph,children:"QCard is an application designed for helping you learn German words. It ask you to translate random German word to English and compares the result with an internal dictionary. Than displays the result in a table and show a graphical statistics of your success. It is expected you to improve with time :)"}),Object(T.jsx)("p",{className:a.topics,children:"Sign up"}),Object(T.jsx)("p",{className:a.paragraph,children:"Signing up is very easy, no private information is required. User names are optional and are displayed on the status bar. The login is used to show your own success rate. In case you are not logged in, the results are registered to the deafult Guset account and the success rate is mixed with all other Guests."}),Object(T.jsx)("p",{className:a.topics,children:"Random words"}),Object(T.jsx)("p",{className:a.paragraph,children:'The application offers a random word and it is 50% chance to display an "easy" or "hard" word.'}),Object(T.jsx)("p",{className:a.topics,children:"Periodic Q Cards"}),Object(T.jsx)("p",{className:a.paragraph,children:"You can also activate Q cards to show up in random time intervals. The application can notify you when a new card is avalable. This feature is usefull if you work on something else and you can get questions from time to time to help you learn German words effortless."}),Object(T.jsx)(O.a,{onClick:t,variant:"contained",color:"primary",children:"OK"})]})})}var G=Object(w.a)((function(e){return{appBar:{borderRadius:"5px"},userText:{flexGrow:1},signupText:{color:"inherit",background:"inherit"},toolbar:{minHeight:"48px",paddingLeft:"10px",paddingRight:"10px"},search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.d)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,1),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function I(e){var a,t=r.a.useState(""),n=Object(u.a)(t,2),o=n[0],s=n[1],i=r.a.useState(""),c=Object(u.a)(i,2),l=c[0],d=c[1],p=r.a.useState(null),w=Object(u.a)(p,2),N=w[0],S=w[1],U=r.a.useState(!0),B=Object(u.a)(U,2),I=B[0],L=B[1],E=r.a.useState(null),F=Object(u.a)(E,2),P=F[0],W=F[1],D=G(),H="Guest"!==(a=e.user.firstName||e.user.lastName?(e.user.firstName||"")+" "+(e.user.lastName||""):e.user.id),Q=function(e){L(!0),S(e.currentTarget)},q=function(e){L(!1),S(e.currentTarget)},J=function(){S(null)};return Object(T.jsxs)(h.a,{className:D.appBar,position:"static",color:"primary",children:[H?Object(T.jsxs)(j.a,{className:D.toolbar,children:[Object(T.jsx)(b.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:Q,children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(g.a,{className:D.userText,variant:"h6",noWrap:!0,children:a}),Object(T.jsx)(m.a,{id:"menu-appbar",anchorEl:N,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(N),onClose:J,children:Object(T.jsx)(x.a,{onClick:function(){S(null),k.a.get("logout/").then((function(a){e.updateUser&&e.updateUser({id:"Guest"})})).catch((function(e){e.message&&W(e.message)}))},children:"Logout"})}),Object(T.jsx)(b.a,{color:"inherit",onClick:q,children:Object(T.jsx)(y.a,{})})]}):Object(T.jsxs)(j.a,{className:D.toolbar,children:[Object(T.jsx)(g.a,{className:D.userText,variant:"h6",noWrap:!0,children:a}),Object(T.jsx)("div",{className:D.search,children:Object(T.jsx)(f.a,{placeholder:"Username",classes:{root:D.inputRoot,input:D.inputInput},onChange:function(e){return s(e.target.value)},value:o})}),Object(T.jsx)("div",{className:D.search,children:Object(T.jsx)(f.a,{placeholder:"Password",type:"password",classes:{root:D.inputRoot,input:D.inputInput},onChange:function(e){return d(e.target.value)},value:l})}),Object(T.jsx)(O.a,{onClick:function(){(function(e,a){var t={user:e,password:a};return k.a.post("login/",t)})(o,l).then((function(a){e.updateUser&&e.updateUser(a.data)})).catch((function(e){e.message&&(String(e.message).indexOf("code 401")>-1?W("User name or the password are not correct"):String(e.message).indexOf("code 400")>-1?W("Please specify user name and password"):W(e.message))}))},variant:"contained",color:"primary",children:"Login"}),Object(T.jsx)(O.a,{className:D.signupText,onClick:Q,variant:"text",color:"primary","aria-describedby":"popper",children:Object(T.jsx)(g.a,{variant:"caption",noWrap:!0,children:"Signup"})}),Object(T.jsx)(b.a,{color:"inherit",onClick:q,children:Object(T.jsx)(y.a,{})}),Object(T.jsx)(R,{open:Boolean(N)&&I,anchor:N,handleSignup:function(a,t,n,r,o){S(null),n&&r&&function(e,a,t,n){var r={firstName:e,lastName:a,user:t,password:n};return k.a.post("signup/",r)}(a,t,n,r).then((function(a){e.updateUser&&(e.updateUser(a.data),o())})).catch((function(e){e.message&&(String(e.message).indexOf("code 401")>0?W("User name already taken"):W(e.message))}))},handleClose:J})]}),Object(T.jsx)(z,{open:Boolean(N)&&!I,anchor:N,handleClose:J}),Object(T.jsx)(v.a,{open:Boolean(P),autoHideDuration:6e3,onClose:function(){return W(null)},message:P,anchorOrigin:{vertical:"top",horizontal:"center"}})]})}function L(){return Object(T.jsxs)(i.a,{component:"main",maxWidth:"sm",style:{paddingTop:"0px",border:"2px solid #e34d7d",borderRadius:"7px"},children:[Object(T.jsx)(c.a,{}),Object(T.jsx)(I,{user:this.state.user,updateUser:this.handleUser}),Object(T.jsx)(l.a,{container:!0,spacing:3,style:{margin:"20px -10px 5px"}})]})}var E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,143)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,o=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),o(e),s(e)}))};s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(L,{})}),document.getElementById("root")),E()}},[[96,1,2]]]);
//# sourceMappingURL=main.fef4816e.chunk.js.map