(this.webpackJsonpCatGenerator=this.webpackJsonpCatGenerator||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),s=n.n(o),i=n(4),r=(n(9),n(0)),u=function(){var e=a.a.useState([]),t=Object(i.a)(e,2),n=t[0],c=t[1];a.a.useEffect((function(){o()}),[]);var o=function(){console.log("miau"),fetch("https://api.thecatapi.com/v1/images/search",{headers:{"x-api-key":"2fbabe58-0577-430f-a11b-80592e5a988b"}}).then((function(e){return e.json()})).then((function(e){console.log("Cats: ",e);var t=e[0].url;c(t)})).catch((function(e){console.log(e)}))};return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:"\ud83d\udc08 A random cat image \ud83d\udc08"}),Object(r.jsx)("div",{class:"text-center",children:Object(r.jsx)("img",{src:n,class:"rounded",alt:"catImage"})}),Object(r.jsx)("button",{onClick:o,children:"Get a new random Cat"})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.068ead96.chunk.js.map