(this["webpackJsonpcostumer-register"]=this["webpackJsonpcostumer-register"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(19),i=n.n(s),a=(n(36),n(4)),r=n(6),o=n(7),d=n(9),j=n(8),l=n(3),h=(n(37),n(0)),u=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"C\xe3es e Gatos"})}),Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{id:"home-links",children:[Object(h.jsx)(l.b,{to:"/register",children:"Cadastre-se"}),Object(h.jsx)(l.b,{to:"/login",children:"Login"}),Object(h.jsx)(l.b,{to:"/customers",children:"Cadastros"})]})})]})})}}]),n}(c.Component),b=n(21),O=n(5),m=n(14),x=(n(29),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={email:"",password:"",shouldRedirect:!1,redirectTo:"/fail"},c.handleChange=c.handleChange.bind(Object(O.a)(c)),c.validateLogin=c.validateLogin.bind(Object(O.a)(c)),c.returnRedirect=c.returnRedirect.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.id,e.target.value))}},{key:"validateLogin",value:function(e,t,n){this.setState({shouldRedirect:!1});var c=n.find((function(t){return t.email===e}));c&&c.password===t?("cat"===c.animal&&window.alert("Cachorros s\xe3o melhores!"),this.setState({redirectTo:"/".concat(c.animal)})):this.setState({redirectTo:"/fail"}),this.setState({shouldRedirect:!0})}},{key:"returnRedirect",value:function(){return!0===this.state.shouldRedirect?Object(h.jsx)(a.a,{to:this.state.redirectTo}):null}},{key:"render",value:function(){var e=this,t=this.state,n=t.email,c=t.password,s=this.props.customersList;return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"Login"})})}),Object(h.jsx)("main",{children:Object(h.jsxs)("form",{id:"inputs",onChange:this.handleChange,children:[Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Informa\xe7\xf5es para login"}),Object(h.jsxs)("label",{htmlFor:"email",children:["Usu\xe1rio:",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",placeholder:"Digite seu email",id:"email",value:n})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"password",children:["Senha:",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",placeholder:"Digite sua senha",id:"password",value:c})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){e.validateLogin(n,c,s)},children:"Login"})]})}),Object(h.jsxs)("footer",{children:[Object(h.jsx)(l.b,{to:"/",children:"Home"}),Object(h.jsx)(l.b,{to:"/register",children:"Cadastre-se"})]}),this.returnRedirect()]})}}]),n}(c.Component)),g=Object(m.b)((function(e){return{customersList:e.registerReducer.customersList}}))(x),p="ADD_CUSTOMER",f=function(e){return{type:p,customerData:e}},v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={email:"",password:"",animal:"none"},c.handleChange=c.handleChange.bind(Object(O.a)(c)),c.validateUser=c.validateUser.bind(Object(O.a)(c)),c.validateChosenAnimal=c.validateChosenAnimal.bind(Object(O.a)(c)),c.handleClick=c.handleClick.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.id,e.target.value))}},{key:"validateUser",value:function(e,t){return!t.find((function(t){return t.email===e}))||(window.alert("Falha ao cadastrar: email j\xe1 est\xe1 sendo utilezado por outro usu\xe1rio"),!1)}},{key:"validateChosenAnimal",value:function(){var e=this.props.registerCustomer;if("none"!==this.state.animal){if("cat"===this.state.animal)return!0===window.confirm("Tem certeza que gosta de gatos?")?(e(this.state),void this.setState({email:"",password:""})):void 0;e(this.state),this.setState({email:"",password:""})}else window.alert("Favor escolher um animal")}},{key:"handleClick",value:function(){var e=this.state.email,t=this.props.customersList;!0===this.validateUser(e,t)&&this.validateChosenAnimal()}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"Cadastro"})})}),Object(h.jsx)("main",{children:Object(h.jsxs)("form",{className:"inputs",onChange:this.handleChange,children:[Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Informa\xe7\xf5es para cadastro"}),Object(h.jsxs)("label",{htmlFor:"email",children:["Usu\xe1rio:",Object(h.jsx)("input",{type:"email",placeholder:"Digite seu email",id:"email",value:t})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"password",children:["Senha:",Object(h.jsx)("input",{type:"password",placeholder:"Digite sua senha",id:"password",value:n})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"animail",children:["Voc\xea prefere:",Object(h.jsx)("br",{}),Object(h.jsxs)("select",{name:"aminal-select",id:"animal",children:[Object(h.jsx)("option",{value:"none",children:"Op\xe7\xf5es"}),Object(h.jsx)("option",{value:"dog",children:"Cachorro"}),Object(h.jsx)("option",{value:"cat",children:"Gato"})]})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:this.handleClick,children:"Cadastrar"})]})}),Object(h.jsxs)("footer",{children:[Object(h.jsx)(l.b,{to:"/",children:"Home"}),Object(h.jsx)(l.b,{to:"/login",children:"Login"})]})]})}}]),n}(c.Component),C=Object(m.b)((function(e){return{customersList:e.registerReducer.customersList}}),(function(e){return{registerCustomer:function(t){return e(f(t))}}}))(v),L=(n(44),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.customersList;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"customers-list",children:0===e.length?Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"Nenhum cadastro encontrado"})})}):Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"Usu\xe1rios encontrados:"})})}),Object(h.jsx)("main",{children:Object(h.jsx)("div",{id:"customers-container",children:e.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"customer",children:[Object(h.jsxs)("span",{children:["Usu\xe1rio: ",Object(h.jsx)("em",{children:e.email})]}),Object(h.jsxs)("span",{children:["Senha: ",Object(h.jsx)("em",{children:e.password})]})]},t)})}))})})]})}),Object(h.jsx)("footer",{children:Object(h.jsx)(l.b,{to:"/",children:"Home"})})]})}}]),n}(c.Component)),w=Object(m.b)((function(e){return{customersList:e.registerReducer.customersList}}),null)(L),y=n(16),k=n.n(y),R=n(22),D=(n(46),n(47),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={dogPictureURL:"",isLoading:!1},c.fetchRandomDogPicture=c.fetchRandomDogPicture.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchRandomDogPicture()}},{key:"fetchRandomDogPicture",value:function(){var e=Object(R.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),"https://dog.ceo/api/breeds/image/random",e.next=4,fetch("https://dog.ceo/api/breeds/image/random");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c=n.message,this.setState({dogPictureURL:c,isLoading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"Login feito com Sucesso!!!"})})}),Object(h.jsxs)("main",{children:[!0===this.state.isLoading?Object(h.jsx)("img",{src:"https://img.cloudygif.com/small/754f4958462ec465.gif",alt:"dog"}):Object(h.jsx)("img",{height:"500px",src:this.state.dogPictureURL,alt:"dog"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"result-page-btn",onClick:this.fetchRandomDogPicture,children:"Buscar outra foto"})]}),Object(h.jsxs)("footer",{children:[Object(h.jsx)(l.b,{to:"/",children:"Home"}),Object(h.jsx)(l.b,{to:"/login",children:"Entrar com outra conta"})]})]})}}]),n}(c.Component)),S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={catPictureURL:"",isLoading:!1},c.fetchRandomDogPicture=c.fetchRandomDogPicture.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchRandomDogPicture()}},{key:"fetchRandomDogPicture",value:function(){var e=Object(R.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),"https://aws.random.cat/meow",e.next=4,fetch("https://aws.random.cat/meow");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c=n.file,this.setState({catPictureURL:c,isLoading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)("h1",{children:"Login feito com Sucesso!!!"})})}),Object(h.jsxs)("main",{children:[!0===this.state.isLoading?Object(h.jsx)("img",{src:"https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif",alt:"cat"}):Object(h.jsx)("img",{src:this.state.catPictureURL,alt:"cat"}),Object(h.jsx)("button",{className:"result-page-btn",onClick:this.fetchRandomDogPicture,children:"Buscar outra foto"})]}),Object(h.jsxs)("footer",{children:[Object(h.jsx)(l.b,{to:"/",children:"Home"}),Object(h.jsx)(l.b,{to:"/login",children:"Entrar com outra conta"})]})]})}}]),n}(c.Component),P=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Falha ao fazer o login"}),Object(h.jsx)(l.b,{to:"/",children:"Home"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/login",children:"Tentar novamente"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.b,{to:"/register",children:"Cadastre-se"})]})}}]),n}(c.Component);var U=function(){return Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{path:"/fail",component:P}),Object(h.jsx)(a.b,{path:"/dog",component:D}),Object(h.jsx)(a.b,{path:"/cat",component:S}),Object(h.jsx)(a.b,{path:"/customers",component:w}),Object(h.jsx)(a.b,{path:"/register",component:C}),Object(h.jsx)(a.b,{path:"/login",component:g}),Object(h.jsx)(a.b,{exact:!0,path:"/",component:u})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},T=n(18),_=n(31),E={customersList:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{customersList:[].concat(Object(_.a)(e.customersList),[t.customerData])};default:return e}},H=Object(T.b)({registerReducer:F}),I=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),A=Object(T.c)(H,I);i.a.render(Object(h.jsx)(m.a,{store:A,children:Object(h.jsx)(l.a,{children:Object(h.jsx)(U,{})})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.9fb23db2.chunk.js.map