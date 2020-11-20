(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,a,t){e.exports=t(62)},37:function(e,a,t){},39:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=t(9),m=(t(37),t(38),t(39),t(1)),s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Mango Delivery"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/sign-in"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/sign-up"},"Sign up"))))))},i=t(4),u=t.n(i),d=t(27),p=t.n(d),g=function(e){var a={email:"",password:""},t=function(e){var t=e.target.name;a[t]=e.target.value};return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",onChange:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter password",onChange:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"text",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),u.a.post("http://localhost:3000/login",{user:a}).then((function(e){if(e.headers.authtoken){var t=e.data.userID;setTimeout((function(){window.location.href="http://localhost:3000/Account/id="+t}),1e3),p.a.set("userInfo",JSON.stringify({user:a}))}}))}},"Log In"),r.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",r.a.createElement("a",{href:"#"},"password?"))))))},E=function(e){var a={name:"",email:"",password:"",userType:""},t=function(e){var t=e.target.name;a[t]=e.target.value};return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"name",className:"form-control",name:"name",placeholder:"First name",onChange:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",onChange:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter password",onChange:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Customer"),r.a.createElement("input",{type:"radio",classname:"form-control",name:"userType",onChange:t,value:1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Delivery Person"),r.a.createElement("input",{type:"radio",classname:"form-control",name:"userType",onChange:t,value:2})),r.a.createElement("button",{type:"text",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),console.log(a),u.a.post("http://localhost:3000/register",{user:a}).then((function(){console.log("Axios Worked"),window.location.href="http://localhost:3000/sign-in"}))}},"Sign Up"),r.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",r.a.createElement("a",{href:"sign-in"},"sign in?"))))))},h=t(8),b=function(e){var a;return 0===e.type.localeCompare("Customer")?a=r.a.createElement("button",{className:"nav-item",onClick:function(){e.changePage(1)}},"Manage Cart"):0===e.type.localeCompare("Delivery Person")?a=r.a.createElement("button",{className:"nav-item",onClick:function(){e.changePage(1)}},"Find Orders"):0===e.type.localeCompare("Admin")&&(a=r.a.createElement("button",{className:"nav-item",onClick:function(){e.changePage(6)}},"Manage Users")),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-left"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"navbar-brand",onClick:function(){e.changePage(4)}},"Mango Delivery Search"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("button",{className:"nav-item",onClick:function(){e.changePage(0)}},"Account Info"),a,r.a.createElement("button",{className:"nav-item",onClick:function(){e.changePage(2)}},"Update Email"),r.a.createElement("button",{className:"nav-item",onClick:function(){e.changePage(3)}},"Update Password"),r.a.createElement("button",{className:"nav-item",onClick:function(){window.location.href="http://localhost:3000/sign-in"}},"Logout")))))},f=function(e){return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Account Info"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Logged in as: ",e.name," ")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address: ",e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"You are signed in as a: ",e.type)))))},v=function(e){return console.log(e.Orders),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Products Added to Cart")),r.a.createElement("p",null,e.Orders.map((function(e){return r.a.createElement("li",null,e.name," $",e.price)})))))},A=function(e){var a="",t=e.id;return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",{id:"updateEmail"},r.a.createElement("h3",null,"Update Email"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"New Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter new email",onChange:function(e){a=e.target.value}})),r.a.createElement("button",{type:"text",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),u.a.put("http://localhost:3000/updateEmail",{email:a,id:t}).then((function(e){console.log("Update worked!"),document.getElementById("updateEmail").reset()}))}},"Submit"))))},y=function(e){var a="",t="",n=e.id;return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",{id:"updatePassword"},r.a.createElement("h3",null,"Update Password"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"New Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter new password",onChange:function(e){a=e.target.value}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Re-Enter new password",onChange:function(e){t=e.target.value}})),r.a.createElement("button",{type:"text",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),0===a.localeCompare(t)?u.a.put("http://localhost:3000/updatePassword",{pass:a,id:n}).then((function(e){console.log("Update worked!"),document.getElementById("updatePassword").reset()})):console.log("Passwords do not match")}},"Submit"))))},N={products:[{_id:"1",name:"Hammer",category:"Tools",description:"Perfect for striking and pulling nails.",image:"https://images.homedepot-static.com/productImages/971329b0-a9b6-4b7b-95f3-cfe28f7ac1b7/svn/dewalt-framing-hammers-dwht51064-64_1000.jpg",price:26.97,brand:"DEWALT",rating:4.7,numReviews:122,countInStock:10},{_id:"2",name:"Pliers",category:"Tools",description:"Durable quality, long lasting",image:"https://images.homedepot-static.com/productImages/e68b77ad-0389-4dab-9c11-941977f488e0/svn/husky-all-trades-slip-joint-pliers-48020-64_1000.jpg",price:8.97,brand:"Husky",rating:4.5,numReviews:125,countInStock:10},{_id:"3",name:"Impact Driver",category:"Tools",description:"3 speed settings to fit any fastening need.",image:"https://images.homedepot-static.com/productImages/64ce049c-d2a9-4821-a014-f8f7277c0db7/svn/ryobi-impact-drivers-p237-64_1000.jpg",price:79,brand:"RYOBI",rating:4.9,numReviews:1045,countInStock:10},{_id:"4",name:"Screw Kit (675-Pack)",category:"Tools",description:"1 in. to 2-1/2 in. Square Drive Round Head Pocket-Hole Screw Kit (675-Pack)",image:"https://images.homedepot-static.com/productImages/f4aaf4f5-f92d-40d8-a1c3-a52da1cd0238/svn/kreg-self-drilling-screws-sk03-64_1000.jpg",price:25.67,brand:"Kreg",rating:4.8,numReviews:91,countInStock:10},{_id:"5",name:"White Interior Paint",category:"Paint",description:"Matte sheen best for living rooms, dining rooms & bedrooms",image:"https://images.homedepot-static.com/productImages/9fccc15c-18da-4ef2-995b-eb317d0a8cfd/svn/ultra-pure-white-behr-ultra-paint-colors-175004-64_1000.jpg",price:14.98,brand:"BEHR ULTRA",rating:4.9,numReviews:943,countInStock:10},{_id:"6",name:"Flat Chip Brush",category:"Paint",description:"2 in. angle design makes painting easier for wall-to-ceiling jobs",image:"https://images.homedepot-static.com/productImages/f7ba8ccd-63fe-48f8-82ed-1416cbd587c1/svn/paint-brushes-1500-2-64_1000.jpg",price:1.28,brand:"Wooster",rating:4.9,numReviews:346,countInStock:10},{_id:"7",name:"Roller Frame",category:"Paint",description:"Threaded handle end is compatible with most extension poles",image:"https://images.homedepot-static.com/productImages/64dd250a-bd17-4de8-940a-80ba5fefc7c1/svn/paint-roller-frames-rf-211-9-64_1000.jpg",price:4.18,brand:"Wooster",rating:4.2,numReviews:120,countInStock:10},{_id:"8",name:"Lawn Mower",category:"Outdoor",description:"Brushless Motor for Increased Run Time and Gas-Like Power",image:"https://images.homedepot-static.com/productImages/164626fe-1517-4ba6-a2b5-0f3356789c59/svn/ryobi-push-lawn-mowers-ry401110-y-64_1000.jpg",price:249.99,brand:"RYOBI",rating:4.3,numReviews:3021,countInStock:4},{_id:"9",name:"Leaf Blower",category:"Outdoor",description:"Turbo button for tough debris, variable trigger for precision",image:"https://images.homedepot-static.com/productImages/22282e9c-8175-431b-b065-0c2034d66de7/svn/ryobi-cordless-leaf-blowers-ry40460-64_1000.jpg",price:124.99,brand:"RYOBI",rating:4.5,numReviews:3157,countInStock:9},{_id:"10",name:"Sanded Pine Plywood",category:"Building Materials",description:"23/32 in. x 4 ft. x 8 ft. ",image:"https://images.homedepot-static.com/productImages/165e6868-4b5f-48e5-8229-10098134311a/svn/sanded-plywood-201428-64_1000.jpg",price:39.99,brand:" ",rating:4,numReviews:514,countInStock:14},{_id:"11",name:"Step Ladder",category:"Building Materials",description:"Robust 300 lb. load capacity step ladder for maximum productivity",image:"https://images.homedepot-static.com/productImages/1857e4b8-fbf2-4f2c-b162-4f24e25d8ee9/svn/werner-step-ladders-nxt1a06-64_1000.jpg",price:79.99,brand:"WERNER",rating:4.9,numReviews:514,countInStock:7}]},w=function(e){console.log(e.item.name);return r.a.createElement("div",{className:"product-wrapper"},r.a.createElement("h1",null,e.item.name),r.a.createElement("h6",null,"Brand: ",e.item.brand),r.a.createElement("img",{className:"product-image",src:e.item.image,alt:""}),r.a.createElement("div",{className:"product-wrapper2"},r.a.createElement("div",{className:"product-description"}," \u2022 ",e.item.description),r.a.createElement("div",{className:"product-price"},"$",e.item.price),r.a.createElement("div",{className:"product-rating"},"Rating: ",e.item.rating," (",e.item.numReviews,")"),r.a.createElement("div",{className:"product-stock"},"Item in stock: ",e.item.countInStock)),r.a.createElement("button",{className:"add-to-cart",onClick:function(){e.addOrder(e.item)}},"Add to Cart"))},S=function(e){console.log(N);var a=Object(n.useState)(""),t=Object(h.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(0),m=Object(h.a)(o,2),s=m[0],i=m[1],u=N.products,d=u.map((function(e){if(e.name.toLowerCase().includes(l.toLowerCase()))return r.a.createElement("tr",{key:e._id,onClick:function(){return i(e._id)}},r.a.createElement("td",null,e.name," "))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"column1"},r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"search-inner"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter Item:"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter item",onChange:function(e){c(e.target.value)}}),d)))),r.a.createElement("div",{className:"column2"},s?r.a.createElement(w,{item:u[s-1],addOrder:e.addOrder}):r.a.createElement("p",{className:"auth-inner"},"Select a product to view")))},k=function(e){var a=Object(n.useState)([]),t=Object(h.a)(a,2),l=t[0],c=t[1];u.a.get("http://localhost:3000/getUnverified").then((function(e){c(e.data)}));var o=function(e){console.log(e.target.value),u.a.put("http://localhost:3000/verify",{email:e.target.value}).then((function(e){e&&console.log("Person has been verified!")}))},m=l.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{className:"extra-padding"},e.name," "),r.a.createElement("td",{className:"extra-padding"},e.email),r.a.createElement("button",{className:"nav-item",type:"text",onClick:o,value:e.email},"Verify"))}));return r.a.createElement("div",{className:"product-wrapper"},r.a.createElement("h1",null,"Still to verify"),m)},T=function(e){var a,t=e.location.pathname.substring(12),l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],m=c[1],s=Object(n.useState)(""),i=Object(h.a)(s,2),d=i[0],p=i[1],g=Object(n.useState)(""),E=Object(h.a)(g,2),N=E[0],w=E[1],T=Object(n.useState)(0),C=Object(h.a)(T,2),O=C[0],x=C[1],j=Object(n.useState)([]),I=Object(h.a)(j,2),J=I[0],L=I[1];u.a.get("http://localhost:3000/user/"+t).then((function(e){m(e.data.userName),p(e.data.userEmail),1===e.data.userType?w("Customer"):2===e.data.userType?w("Delivery Person"):3===e.data.userType&&w("Admin")}));switch(O){case 0:a=r.a.createElement(f,{name:o,email:d,type:N});break;case 1:a=r.a.createElement(v,{Orders:J});break;case 2:a=r.a.createElement(A,{id:t});break;case 3:a=r.a.createElement(y,{id:t});break;case 4:a=r.a.createElement(S,{addOrder:function(e){L(J.concat(e))}});break;case 6:a=r.a.createElement(k,null);break;default:a=null}return r.a.createElement("div",{className:"App"},r.a.createElement(b,{changePage:function(e){x(e)},type:N}),a)},C=t(28),O=t(29),x=t(31),j=t(30),I=[{_id:"1",name:"mango1",category:"mangos",description:"This is a mango.",image:"https://image.shutterstock.com/image-vector/mango-delivery-logo-vector-ready-600w-1571404381.jpg"},{_id:"2",name:"mango2",category:"mangos",description:"This is a mango.",image:"data:image/jpeg;base64,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"},{_id:"3",name:"mango3",category:"mangos",description:"This is a mango.",image:"https://www.overseaspropertyalert.com/wp-content/uploads/2018/11/mangos-on-a-tree-1280x720.jpg"},{_id:"4",name:"mango4",category:"mangos",description:"This is a mango.",image:"https://www.welcometothetable.coop/sites/default/files/styles/article_node/public/Mangos.jpg?itok=IqQCEBZf"},{_id:"5",name:"mango5",category:"mangos",description:"This is a mango.",image:"https://www.medicalmedium.com/blog-photos/mango2.jpg"}],J=function(e){Object(x.a)(t,e);var a=Object(j.a)(t);function t(){return Object(C.a)(this,t),a.apply(this,arguments)}return Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",null,r.a.createElement("img",{className:"mango-wrapper1",src:I[0].image,width:"300px",height:"300px",alt:""})),r.a.createElement("div",null,r.a.createElement("img",{className:"mango-wrapper2",src:I[0].image,width:"300px",height:"300px",alt:""})),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("h3",null,"Mango Delivery Boys"))))}}]),t}(n.Component),L=function(){return r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:J}),r.a.createElement(m.a,{path:"/sign-in",component:g}),r.a.createElement(m.a,{path:"/sign-up",component:E}),r.a.createElement(m.a,{path:"/Account/:id",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a7dd3b60.chunk.js.map