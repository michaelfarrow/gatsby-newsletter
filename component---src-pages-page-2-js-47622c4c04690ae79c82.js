(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(185),o=a(183),c=a(187);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(c.a,{href:"/"},"Go back to the homepage"))}},179:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(58),s=a.n(c);a.d(t,"a",function(){return s.a});a(179),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},182:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(84),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},183:function(e,t,a){"use strict";var n=a(184),r=a(0),i=a.n(r),o=a(11),c=a.n(o),s=a(190),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},185:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(11),c=a.n(o),s=a(180),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(189),function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});d.propTypes={children:c.a.node.isRequired};t.a=d},187:function(e,t,a){"use strict";a(29),a(21),a(12),a(44),a(22),a(119);var n=a(0),r=a.n(n),i=a(180),o=a(188);t.a=function(e){var t=e.href,a=e.children,n=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["href","children"]),c=t.match(/^https?:/),s=t.match(/^#/);if(c)return r.a.createElement(o.OutboundLink,Object.assign({},n,{href:t,target:"_blank",rel:"noreferrer"}),a);if(s)return r.a.createElement("a",Object.assign({},n,{href:t}),a);var l=t&&"/"!==t[0]&&"/"+t||t;return r.a.createElement(i.a,Object.assign({},n,{to:l}),a)}},188:function(e,t,a){"use strict";var n=a(16);t.__esModule=!0,t.OutboundLink=c;var r=n(a(120)),i=n(a(0)),o=n(a(11));function c(e){return i.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick(t);var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}c.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-47622c4c04690ae79c82.js.map