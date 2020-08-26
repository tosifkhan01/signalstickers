(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/about/About.tsx":function(e,a,t){"use strict";t.r(a),function(e){var s,l=t("./node_modules/react/index.js"),r=t.n(l),n=t("./node_modules/react-icons/bs/index.esm.js"),c=t("./src/components/general/ExternalLink.tsx");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const i=({children:e})=>r.a.createElement("div",{className:"card mb-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("pre",{className:"mb-0"},r.a.createElement("code",null,e)))),o=({children:e})=>r.a.createElement("code",{className:"text-primary font-weight-bolder"},e),m=({children:e})=>r.a.createElement("code",{className:"text-dark font-weight-bolder"},e),u=()=>r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{id:"searching",className:"mb-4"},"Advanced Searching"),r.a.createElement("p",{className:"mb-4"},"Generally, a search query will search across all indexed attributes of a sticker pack. These attributes are ",r.a.createElement(o,null,"title"),", ",r.a.createElement(o,null,"author"),", and ",r.a.createElement(o,null,"tags"),". It is also possible to perform a more targeted query that only searches on a specific attribute of a sticker pack. For instance, to search on just the ",r.a.createElement(o,null,"author")," attribute with the query ",r.a.createElement(m,null,"Sindre"),":"),r.a.createElement(i,null,"author:Sindre"),r.a.createElement("p",{className:"mb-4"},"A search may be further refined by providing additional attribute clauses, each separated by a space. For example, to search for all packs whose ",r.a.createElement(o,null,"author")," contains the term ",r.a.createElement(m,null,"Sindre")," and that have a ",r.a.createElement(o,null,"tag")," containing the term ",r.a.createElement(m,null,"awesome"),":"),r.a.createElement(i,null,"author:Sindre tag:awesome"),r.a.createElement("p",{className:"mb-4"},"If a search term contains spaces, it should be bracketed by double quotes:"),r.a.createElement(i,null,'author:"Sindre is a horse" tag:awesome'),r.a.createElement("p",{className:"mb-4"},"It is also possible to mix general search terms and attribute clauses. The following query will search for all packs whose ",r.a.createElement(o,null,"author")," contains the term ",r.a.createElement(m,null,"Sindre"),", and which have a tag containing the term ",r.a.createElement(m,null,"awesome"),", and which contain the term ",r.a.createElement(m,null,"unicorn")," in ",r.a.createElement("em",null,"any")," attribute:"),r.a.createElement(i,null,"author:Sindre tag:awesome unicorn"),r.a.createElement("p",{className:"mb-4"},"Finally, you can filter by metadata. Supported metadata are ",r.a.createElement(o,null,"nsfw"),", ",r.a.createElement(o,null,"original")," and ",r.a.createElement(o,null,"animated"),". For example, to search for all animated pack not-NSFW:"),r.a.createElement(i,null,"nsfw:false animated:true"))),d=()=>r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{id:"terms-of-service",className:"mb-4"},"Terms of Service"),r.a.createElement("p",null,r.a.createElement("code",null,"signalstickers.com"),' is provided "as is". We try the best we can to keep it up and running, but we are volunteers, and we rely on third-parties, so we can\'t guarantee that ',r.a.createElement("code",null,"signalstickers.com")," will be accessible at any time."))),h=()=>r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{id:"privacy-policy",className:"mb-4"},"Privacy Policy"),r.a.createElement("h5",{className:"my-4"},"What do we collect?"),r.a.createElement("p",null,"We count the number of visitors on ",r.a.createElement("code",null,"signalstickers.com")," ",r.a.createElement(c.a,{href:"https://gist.github.com/romainricard/3e15e1b7a983722f9e35be9bc4a3e199"},"in a way that does ",r.a.createElement("b",null,"not")," log your IP address"),", so our visitors count is anonymous."),r.a.createElement("p",null,r.a.createElement("code",null,"signalstickers.com")," is hosted on ",r.a.createElement(c.a,{href:"https://pages.github.com/"},"GitHub Pages"),", and we use third-party scripts, which might collect your IP address."),r.a.createElement("h5",{className:"my-4"},"What don't we collect?"),r.a.createElement("p",null,"All the rest. We don't use cookies, and don't track you as you visit ",r.a.createElement("code",null,"signalstickers.com"),", or any other site."),r.a.createElement("h5",{className:"my-4"},"What data do we sell?"),r.a.createElement("p",null,r.a.createElement("b",null,"None"),", as 1. we are an open-source project that values privacy, and 2. we don't collect any personal data about you in the first place."))),b=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mb-4"},"Links"),r.a.createElement("ul",{className:"list-unstyled"},[{name:"Learn more about Signal",href:"https://signal.org"},{name:"Sticker pack creation guide",href:"https://support.signal.org/hc/articles/360031836512-Stickers#h_c2a0a45b-862f-4d12-9ab1-d9a6844062ca"},{name:"Report an Issue",href:"https://github.com/signalstickers/signalstickers/issues/new"}].map(({name:e,href:a})=>r.a.createElement("li",{key:a},r.a.createElement(c.a,{href:a,title:e},r.a.createElement(n.c,{className:"mr-1"}),e))))),p=()=>r.a.createElement("div",{className:"my-4 p-lg-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{id:"about",className:"mb-4"},"About"),r.a.createElement("p",null,"Signal Stickers is a community-organized, unofficial directory of sticker packs for Signal, the secure messenger. All content on this website is copyrighted by their respective owners. This website is not affiliated with Signal or Open Whisper Systems."),r.a.createElement("p",null,r.a.createElement(c.a,{href:"https://twitter.com/search?q=%23makeprivacystick&src=typed_query"},r.a.createElement("strong",null,"#makeprivacystick"))))),r.a.createElement("hr",{className:"my-5"}),r.a.createElement(b,null),r.a.createElement("hr",{className:"my-5"}),r.a.createElement(u,null),r.a.createElement("hr",{className:"my-5"}),r.a.createElement(d,null),r.a.createElement("hr",{className:"my-5"}),r.a.createElement(h,null)),E=p;var g,y;a.default=E,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(i,"Example","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(o,"Attr","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(m,"Term","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(u,"SearchHelp","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(d,"TermsOfService","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(h,"PrivacyPolicy","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(b,"Links","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(p,"AboutComponent","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx"),g.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/about/About.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,t("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=8-f0e21c37bc445922636b.js.map