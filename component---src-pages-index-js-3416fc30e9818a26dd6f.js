(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=(a(167),a(4)),l=a.n(o),s=a(144),c=a(143),m=a(168),d=a.n(m),u=function(e){var t=e.name,a=e.designation;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{padding:0,margin:0},className:d.a.title},t),r.a.createElement("p",null,a))};u.propTypes={name:l.a.string.isRequired,designation:l.a.string.isRequired};var p=function(e){var t=e.children;return r.a.createElement("div",{className:d.a.card},t)};p.propTypes={children:l.a.node.isRequired};var h=[{name:"Kabir Goel",designation:"CEO",description:"Kabir is the CEO & technical director at Katang Labs, and the creator of SkyAI. He’s also\n    responsible for product design. In his free time, he enjoys building\n    things with code.",links:[{title:"Email",href:"mailto:kabirgoel.kg@gmail.com"},{title:"Website",href:"https://kabirgoel.com"}]},{name:"Tanish Goel",designation:"COO",description:"Tanish ensures that the team effectively plans and completes day to day tasks and operations. He likes to create creative solutions to problems around him.",links:[{title:"Email",href:"mailto:goeltanish15@gmail.com"}]},{name:"Gayatri Bhattacharya",designation:"CFO",description:"Gayatri is the CFO and marketing director. In her spare time she plays the piano, blogs and plays tennis. She’s also given TEDx talks in school.",links:[{title:"Email",href:"mailto:gayatribhattacharya014@gmail.com"}]}],g=function(e){var t=e.name,a=e.designation,n=e.description,i=e.links;return r.a.createElement("div",{style:{marginBottom:"8rem"}},r.a.createElement(u,{name:t,designation:a}),r.a.createElement(s.c,null,r.a.createElement(s.a,{size:"ten"},r.a.createElement(p,null,n))),r.a.createElement("div",null,i.map(function(e){return r.a.createElement("a",{style:{marginRight:"2rem"},href:e.href},e.title)})))};g.propTypes={name:l.a.string.isRequired,designation:l.a.string.isRequired,description:l.a.string.isRequired,links:l.a.arrayOf(l.a.object).isRequired};var f=function(){return r.a.createElement(c.a,{colored:!0},r.a.createElement("h1",null,"Team"),h.map(function(e){return r.a.createElement(g,e)}))},y=a(147),E=a(169),v=a.n(E),b=function(){return r.a.createElement(c.a,{colored:!0},r.a.createElement("p",{className:v.a.p},"© ",(new Date).getFullYear()," Katang Labs. Built by Kabir Goel."))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(y.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(c.a,{colored:!0},r.a.createElement("hr",{style:{width:45}})),r.a.createElement(f,null),r.a.createElement(b,null))}},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(144),s=a(153),c=a.n(s),m=function(e){var t=e.children,a=e.colored;return r.a.createElement("section",{className:c.a.section+" "+(a?c.a.colored:"")},r.a.createElement(l.b,null,t))};m.propTypes={children:o.a.node.isRequired,colored:o.a.bool.isRequired},t.a=m},144:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return d}),a.d(t,"c",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(151),s=a(152),c=a.n(s),m=function(e){var t=e.children;return r.a.createElement("div",{className:c.a.container},t)};m.propTypes={children:o.a.node.isRequired};var d=function(e){var t=e.children,a=e.size,n=e.offset;return r.a.createElement("div",{className:c.a[Object(l.camelCase)(a)]+" "+c.a.columns+" "+(n?c.a["offsetBy"+Object(l.capitalize)(Object(l.camelCase)(n))]:"")},t)};d.propTypes={children:o.a.node.isRequired,size:o.a.oneOf(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","one-third","two-thirds","one-half"]).isRequired,offset:o.a.oneOf(["one","two","three","four","five","six","seven","eight","nine","ten","eleven","one-third","two-thirds","one-half"])},d.defaultProps={offset:null};var u=function(e){var t=e.children;return r.a.createElement("div",{className:c.a.row},t)};u.propTypes={children:o.a.node.isRequired}},145:function(e,t,a){e.exports=a.p+"static/katang-bea3c02ba2ad4a34bcc9eb51f10558ae.svg"},146:function(e,t,a){e.exports=a.p+"static/hero-a755cff35ae1cfd6ed0e984c177d74e1.jpg"},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(157),c=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,m=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Katang Labs",description:"Katang Labs is a Conrad Challenge team building tomorrow’s security systems.",author:"@kabirgoel"}}}}},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(150),s=a.n(l),c=a(145),m=a.n(c),d=function(){return r.a.createElement("nav",{className:s.a.navbar},r.a.createElement("div",{className:s.a.flex},r.a.createElement("img",{className:s.a.logo,alt:"Logo",src:m.a})))},u=a(143),p=a(154),h=a.n(p),g=a(146),f=a.n(g),y=function(){return r.a.createElement(u.a,{colored:!0},r.a.createElement(d,null),r.a.createElement("div",{className:h.a.header},r.a.createElement("img",{alt:"Screenshot of SkyAI",src:f.a,className:h.a.hero}),r.a.createElement("div",{className:h.a.pull},r.a.createElement("h1",{style:{margin:"8rem 0 4rem"}},"We’re building the security systems of tomorrow."),r.a.createElement("p",{className:h.a.subtitle},"We’re a ",r.a.createElement("a",{href:"https://www.conradchallenge.org"},"Conrad Challenge")," ","team building SkyAI: a smart, automated security system."),r.a.createElement("a",{href:"mailto:katanglabs@gmail.com",className:"button",style:{marginTop:"5rem"}},"Say hello"))))},E=(a(155),a(156),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("main",null,t))});E.propTypes={children:o.a.node.isRequired};t.a=E},167:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-3416fc30e9818a26dd6f.js.map