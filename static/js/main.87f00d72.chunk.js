(this["webpackJsonptest-npm"]=this["webpackJsonptest-npm"]||[]).push([[0],{14:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(9),i=a.n(r),s=(a(19),a(10)),c=a(11),l=a(13),u=a(12);var m=a(2),h=a.n(m);a(20),a(22),a(25);h.a.initializeApp({apiKey:"AIzaSyC7KOTYQcMgdECQNIVpmEpJewN1oerw__8",authDomain:"starr-meal-planner.firebaseapp.com",databaseURL:"https://starr-meal-planner.firebaseio.com",projectId:"starr-meal-planner",storageBucket:"starr-meal-planner.appspot.com",messagingSenderId:"601980798403",appId:"1:601980798403:web:9f1f28e2094c4b60f82976",measurementId:"G-HDPNXJY6SD"});var p=h.a.auth(),d=(h.a.firestore(),h.a.database().ref()),f=new h.a.auth.GoogleAuthProvider;a(28);var g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.setState({test:"testing"}),p.onAuthStateChanged((function(e){n.setState({user:e}),d.child("todos").on("value",(function(e){n.setState({firebaseValue:e.val()})}))}))},n.state={firebaseValue:null},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},this.state.user?"Hello, ".concat(this.state.user.displayName):"",this.state.user?o.a.createElement("img",{height:"250",alt:"User image",src:this.state.user.photoURL}):"",o.a.createElement("div",null,o.a.createElement("div",null,this.state.firebaseValue),o.a.createElement("button",{onClick:function(){!function(){try{d.child("todos").set(Math.random())}catch(e){console.log(e)}}()}},"Send to Firebase")),this.state.user?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){h.a.auth().signOut()}},"Sign out of Google"))):o.a.createElement("button",{onClick:function(){h.a.auth().signInWithPopup(f)}},"Sign in with Google")))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.87f00d72.chunk.js.map