(this["webpackJsonptest-npm"]=this["webpackJsonptest-npm"]||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},17:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(11),c=a.n(r);a(17);var i=function(e){return o.a.createElement("div",{className:"Dice"},"Test")},l=a(7);var s=function(e){var t=new l.auth.GoogleAuthProvider;l.apps.length||l.initializeApp({databaseURL:"https://starr-meal-planner.firebaseio.com",type:"service_account",project_id:"starr-meal-planner",private_key_id:"e09578f4e5834e72002ac4572626cfd3f69a323c",private_key:"${{firebase_private_key}}",client_email:"firebase-adminsdk-riq4z@starr-meal-planner.iam.gserviceaccount.com",client_id:"106764212743250830411",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_x509_cert_url:"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-riq4z%40starr-meal-planner.iam.gserviceaccount.com"}),l.auth().signInWithPopup(t).then((function(e){e.credential.accessToken;var t=e.user;console.log(t)})).catch((function(e){e.code,e.message,e.email,e.credential})),l.database().ref().child("todos").set(Math.random())};a(29);var u=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"horizontal"},o.a.createElement(i,null)," ",o.a.createElement(i,null)," ",o.a.createElement(i,null)," ",o.a.createElement(i,null)," ",o.a.createElement(i,null)),o.a.createElement("button",{onClick:function(){s({test:"test"})}},"Button")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.6fe27922.chunk.js.map