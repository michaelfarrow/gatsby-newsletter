(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return p}),a.d(e,"pageQuery",function(){return f});a(29),a(21),a(12),a(44),a(22);var n=a(0),r=a.n(n),s=a(187),i=a(185),c=a(217),l=a.n(c),o=a(189),u=a(194),d=a(238),g=a.n(d);function p(t){var e=t.data.markdownRemark,a=e.fileAbsolutePath,n=e.frontmatter,c=e.headings,d=e.htmlAst,p=e.timeToRead,f=c.filter(function(t){return 1===t.depth}),m=new l.a({createElement:r.a.createElement,components:{a:o.a,img:function(t){var e=t.src,n=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["src"]),s=g.a.resolve(g.a.dirname(a),e);return r.a.createElement(u.a,Object.assign({src:s},n))},h1:function(t){return null}}}).Compiler;return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:n.title}),r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",null,f.length?f[0].value:"Creative Technology Roundup"),r.a.createElement("h2",null,n.date),r.a.createElement("p",null,p," min read"),r.a.createElement("div",{className:"blog-post-content"},m(d)))))}var f="856819450"},181:function(t,e,a){var n;t.exports=(n=a(184))&&n.default||n},182:function(t,e,a){"use strict";var n=a(0),r=a.n(n),s=a(11),i=a.n(s),c=a(58),l=a.n(c);a.d(e,"a",function(){return l.a});a(181),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},183:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},184:function(t,e,a){"use strict";a.r(e);a(22);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),c=a(84),l=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},185:function(t,e,a){"use strict";var n=a(186),r=a(0),s=a.n(r),i=a(11),c=a.n(i),l=a(192),o=a.n(l);function u(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,c=n.data.site,l=e||c.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=u},186:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},187:function(t,e,a){"use strict";var n=a(183),r=a(0),s=a.n(r),i=a(11),c=a.n(i),l=a(182),o=function(t){var e=t.siteTitle;return s.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};o.propTypes={siteTitle:c.a.string},o.defaultProps={siteTitle:""};var u=o,d=(a(191),function(t){var e=t.children,a=n.data;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,e),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});d.propTypes={children:c.a.node.isRequired};e.a=d},189:function(t,e,a){"use strict";a(29),a(21),a(12),a(44),a(22),a(119);var n=a(0),r=a.n(n),s=a(182),i=a(190);e.a=function(t){var e=t.href,a=t.children,n=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["href","children"]),c=e.match(/^https?:/),l=e.match(/^#/);if(c)return r.a.createElement(i.OutboundLink,Object.assign({},n,{href:e,target:"_blank",rel:"noreferrer"}),a);if(l)return r.a.createElement("a",Object.assign({},n,{href:e}),a);var o=e&&"/"!==e[0]&&"/"+e||e;return r.a.createElement(s.a,Object.assign({},n,{to:o}),a)}},194:function(t,e,a){"use strict";a(29),a(21),a(12),a(44),a(22),a(85);var n=a(195),r=a(0),s=a.n(r),i=a(196),c=a.n(i);e.a=function(t){var e=t.src,a=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["src"]),r=n.data.images.edges.find(function(t){return t.node.relativePath===e||t.node.absolutePath===e});return r?s.a.createElement(c.a,Object.assign({Tag:"span",alt:""},a,{fluid:r.node.childImageSharp.fluid})):s.a.createElement("img",Object.assign({alt:""},a,{src:""}))}},195:function(t){t.exports={data:{images:{edges:[{node:{absolutePath:"/Users/mike/repos/gatsby-newsletter/src/images/gatsby-icon.png",relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/gatsby-newsletter/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/gatsby-newsletter/static/4a9773549091c227cd2eb82ccd9c5e3a/16256/gatsby-icon.png 175w,\n/gatsby-newsletter/static/4a9773549091c227cd2eb82ccd9c5e3a/73897/gatsby-icon.png 350w,\n/gatsby-newsletter/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{absolutePath:"/Users/mike/repos/gatsby-newsletter/src/images/gatsby-astronaut.png",relativePath:"gatsby-astronaut.png",name:"gatsby-astronaut",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/gatsby-newsletter/static/6d91c86c0fde632ba4cd01062fd9ccfa/54c56/gatsby-astronaut.png",srcSet:"/gatsby-newsletter/static/6d91c86c0fde632ba4cd01062fd9ccfa/16256/gatsby-astronaut.png 175w,\n/gatsby-newsletter/static/6d91c86c0fde632ba4cd01062fd9ccfa/73897/gatsby-astronaut.png 350w,\n/gatsby-newsletter/static/6d91c86c0fde632ba4cd01062fd9ccfa/54c56/gatsby-astronaut.png 700w,\n/gatsby-newsletter/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 700px) 100vw, 700px"}}}},{node:{absolutePath:"/Users/mike/repos/gatsby-newsletter/src/issues/05-07-2019.md",relativePath:"05-07-2019.md",name:"05-07-2019",childImageSharp:null}}]}}}}}]);
//# sourceMappingURL=component---src-templates-issue-template-js-1783430d2ac948730990.js.map