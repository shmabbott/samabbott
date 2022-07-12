(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4129:function(e,t,n){"use strict";var r,i=n(7294),l=(r=i)&&"object"===typeof r&&"default"in r?r.default:r,a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var s=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));o(s);s.BLOCKS;var E=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));o(E);E.INLINES;var L=u((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));o(L);var d=u((function(e,t){var n,r=c&&c.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[s.BLOCKS.PARAGRAPH,s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6,s.BLOCKS.OL_LIST,s.BLOCKS.UL_LIST,s.BLOCKS.HR,s.BLOCKS.QUOTE,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET,s.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[s.BLOCKS.PARAGRAPH,s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6,s.BLOCKS.OL_LIST,s.BLOCKS.UL_LIST,s.BLOCKS.HR,s.BLOCKS.QUOTE,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[s.BLOCKS.TABLE,s.BLOCKS.TABLE_ROW,s.BLOCKS.TABLE_CELL,s.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[s.BLOCKS.HR,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[s.BLOCKS.OL_LIST]=[s.BLOCKS.LIST_ITEM],n[s.BLOCKS.UL_LIST]=[s.BLOCKS.LIST_ITEM],n[s.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[s.BLOCKS.QUOTE]=[s.BLOCKS.PARAGRAPH],n[s.BLOCKS.TABLE]=[s.BLOCKS.TABLE_ROW],n[s.BLOCKS.TABLE_ROW]=[s.BLOCKS.TABLE_CELL,s.BLOCKS.TABLE_HEADER_CELL],n[s.BLOCKS.TABLE_CELL]=[s.BLOCKS.PARAGRAPH],n[s.BLOCKS.TABLE_HEADER_CELL]=[s.BLOCKS.PARAGRAPH],n),t.HEADINGS=[s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([s.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[s.BLOCKS.DOCUMENT,s.BLOCKS.PARAGRAPH,s.BLOCKS.HEADING_1,s.BLOCKS.HEADING_2,s.BLOCKS.HEADING_3,s.BLOCKS.HEADING_4,s.BLOCKS.HEADING_5,s.BLOCKS.HEADING_6,s.BLOCKS.OL_LIST,s.BLOCKS.UL_LIST,s.BLOCKS.LIST_ITEM,s.BLOCKS.HR,s.BLOCKS.QUOTE,s.BLOCKS.EMBEDDED_ENTRY,s.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"]}));o(d);d.V1_NODE_TYPES,d.TEXT_CONTAINERS,d.HEADINGS,d.CONTAINERS,d.VOID_BLOCKS,d.TABLE_BLOCKS,d.LIST_ITEM_BLOCKS,d.TOP_LEVEL_BLOCKS;var S=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));o(S);var _=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));o(_);var O=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:s.BLOCKS.DOCUMENT,data:{},content:[{nodeType:s.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));o(O);var N=u((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(E.INLINES,e.nodeType)},t.isBlock=function(e){return n(s.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));o(N);N.isText,N.isBlock,N.isInline;var f=u((function(e,t){var n=c&&c.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=c&&c.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=c&&c.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},l=c&&c.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return r(t,e),t},a=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return s.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return a(L).default}}),i(d,t),i(S,t),i(_,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return a(O).default}});var o=l(N);t.helpers=o}));o(f);var I,B,C=f.helpers,A=(f.EMPTY_DOCUMENT,f.MARKS),T=f.INLINES,D=f.BLOCKS;function m(e,t){return e.map((function(e,n){return r=x(e,t),l=n,i.isValidElement(r)&&null===r.key?i.cloneElement(r,{key:l}):r;var r,l}))}function x(e,t){var n=t.renderNode,r=t.renderMark,i=t.renderText;if(C.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),i?i(e.value):e.value);var a=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,a):l.createElement(l.Fragment,null,a)}var h=((I={})[D.DOCUMENT]=function(e,t){return t},I[D.PARAGRAPH]=function(e,t){return l.createElement("p",null,t)},I[D.HEADING_1]=function(e,t){return l.createElement("h1",null,t)},I[D.HEADING_2]=function(e,t){return l.createElement("h2",null,t)},I[D.HEADING_3]=function(e,t){return l.createElement("h3",null,t)},I[D.HEADING_4]=function(e,t){return l.createElement("h4",null,t)},I[D.HEADING_5]=function(e,t){return l.createElement("h5",null,t)},I[D.HEADING_6]=function(e,t){return l.createElement("h6",null,t)},I[D.EMBEDDED_ENTRY]=function(e,t){return l.createElement("div",null,t)},I[D.UL_LIST]=function(e,t){return l.createElement("ul",null,t)},I[D.OL_LIST]=function(e,t){return l.createElement("ol",null,t)},I[D.LIST_ITEM]=function(e,t){return l.createElement("li",null,t)},I[D.QUOTE]=function(e,t){return l.createElement("blockquote",null,t)},I[D.HR]=function(){return l.createElement("hr",null)},I[D.TABLE]=function(e,t){return l.createElement("table",null,l.createElement("tbody",null,t))},I[D.TABLE_ROW]=function(e,t){return l.createElement("tr",null,t)},I[D.TABLE_HEADER_CELL]=function(e,t){return l.createElement("th",null,t)},I[D.TABLE_CELL]=function(e,t){return l.createElement("td",null,t)},I[T.ASSET_HYPERLINK]=function(e){return p(T.ASSET_HYPERLINK,e)},I[T.ENTRY_HYPERLINK]=function(e){return p(T.ENTRY_HYPERLINK,e)},I[T.EMBEDDED_ENTRY]=function(e){return p(T.EMBEDDED_ENTRY,e)},I[T.HYPERLINK]=function(e,t){return l.createElement("a",{href:e.data.uri},t)},I),K=((B={})[A.BOLD]=function(e){return l.createElement("b",null,e)},B[A.ITALIC]=function(e){return l.createElement("i",null,e)},B[A.UNDERLINE]=function(e){return l.createElement("u",null,e)},B[A.CODE]=function(e){return l.createElement("code",null,e)},B);function p(e,t){return l.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?x(e,{renderNode:a(a({},h),t.renderNode),renderMark:a(a({},K),t.renderMark),renderText:t.renderText}):null}},549:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(549),i={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=i},6061:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(549),i=n(7845);function l(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return l(i.INLINES,e.nodeType)},t.isBlock=function(e){return l(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var o=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return o.BLOCKS}});var u=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return u.INLINES}});var s=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return c(s).default}}),l(n(7951),t),l(n(167),t),l(n(1911),t);var E=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return c(E).default}});var L=a(n(6061));t.helpers=L},7845:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n},1911:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){"use strict";var r,i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var l=n(549),a=n(7845);t.TOP_LEVEL_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[l.BLOCKS.TABLE,l.BLOCKS.TABLE_ROW,l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[l.BLOCKS.HR,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[l.BLOCKS.OL_LIST]=[l.BLOCKS.LIST_ITEM],r[l.BLOCKS.UL_LIST]=[l.BLOCKS.LIST_ITEM],r[l.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[l.BLOCKS.QUOTE]=[l.BLOCKS.PARAGRAPH],r[l.BLOCKS.TABLE]=[l.BLOCKS.TABLE_ROW],r[l.BLOCKS.TABLE_ROW]=[l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],r[l.BLOCKS.TABLE_CELL]=[l.BLOCKS.PARAGRAPH],r[l.BLOCKS.TABLE_HEADER_CELL]=[l.BLOCKS.PARAGRAPH],r),t.HEADINGS=[l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=i([l.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[l.BLOCKS.DOCUMENT,l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.LIST_ITEM,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,a.INLINES.HYPERLINK,a.INLINES.ENTRY_HYPERLINK,a.INLINES.ASSET_HYPERLINK,a.INLINES.EMBEDDED_ENTRY,"text"]},167:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(7860)}])},5927:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(2998);function l(e){var t=e.name,n=e.picture;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"relative w-12 h-12 mr-4",children:(0,r.jsx)(i.Z,{src:n.url,layout:"fill",className:"rounded-full",alt:t})}),(0,r.jsx)("div",{className:"text-xl font-bold",children:t})]})}},5691:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},2998:function(e,t,n){"use strict";var r=n(6042),i=n(5893),l=n(5675),a=n.n(l),c=function(e){var t=e.src,n=e.width,r=e.quality;return"".concat(t,"?w=").concat(n,"&q=").concat(r||75)};t.Z=function(e){return(0,i.jsx)(a(),(0,r.Z)({loader:c},e))}},960:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),i=n(2998),l=n(1664),a=n.n(l),c=n(4184),o=n.n(c);function u(e){var t=e.title,n=e.url,l=e.slug,c=(0,r.jsx)(i.Z,{width:2e3,height:1e3,alt:"Cover Image for ".concat(t),className:o()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":l}),src:n});return(0,r.jsx)("div",{className:"sm:mx-0",children:l?(0,r.jsx)(a(),{href:"/posts/".concat(l),children:(0,r.jsx)("a",{"aria-label":t,children:c})}):c})}},3858:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(8582);function l(e){var t=e.dateString;return(0,r.jsx)("time",{dateTime:t,children:(0,i.Z)(new Date(t),"LLLL\td, yyyy")})}},2449:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(5691),l=n(4184),a=n.n(l),c=n(2979);function o(e){var t=e.preview;return(0,r.jsx)("div",{className:a()("border-b",{"bg-accent-7 border-accent-7 text-white":t,"bg-accent-1 border-accent-2":!t}),children:(0,r.jsx)(i.Z,{children:(0,r.jsx)("div",{className:"py-2 text-center text-sm",children:t?(0,r.jsxs)(r.Fragment,{children:["This is page is a preview."," ",(0,r.jsx)("a",{href:"/api/exit-preview",className:"underline hover:text-cyan duration-200 transition-colors",children:"Click here"})," ","to exit preview mode."]}):(0,r.jsxs)(r.Fragment,{children:["The source code for this blog is"," ",(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/".concat(c.Ys),className:"underline hover:text-success duration-200 transition-colors",children:"available on GitHub"}),"."]})})})})}function u(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Statically Generated with Next.js."}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[(0,r.jsx)("a",{href:"https://nextjs.org/docs/basic-features/pages",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),(0,r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/".concat(c.Ys),className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})})}var s=n(9008),E=n.n(s);function L(){return(0,r.jsxs)(E(),{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(c.yf,".")}),(0,r.jsx)("meta",{property:"og:image",content:c.vC})]})}function d(e){var t=e.preview,n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{}),(0,r.jsxs)("div",{className:"min-h-screen",children:[(0,r.jsx)(o,{preview:t}),(0,r.jsx)("main",{children:n})]}),(0,r.jsx)(u,{})]})}},716:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(1664),l=n.n(i),a=n(5927),c=n(3858),o=n(960);function u(e){var t=e.title,n=e.coverImage,i=e.date,u=e.excerpt,s=e.author,E=e.slug;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(o.Z,{title:t,slug:E,url:n.url})}),(0,r.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,r.jsx)(l(),{href:"/posts/".concat(E),children:(0,r.jsx)("a",{className:"hover:underline",children:t})})}),(0,r.jsx)("div",{className:"text-lg mb-4",children:(0,r.jsx)(c.Z,{dateString:i})}),(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:u}),s&&(0,r.jsx)(a.Z,{name:s.name,picture:s.picture})]})}function s(e){var t=e.posts;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More Stories"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:t.map((function(e){return(0,r.jsx)(u,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},2979:function(e,t,n){"use strict";n.d(t,{Ys:function(){return r},oc:function(){return l},vC:function(){return a},yf:function(){return i}});var r="cms-contentful",i="Contentful",l="https://www.contentful.com",a="https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B"},7860:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return v}});var r=n(5893),i=n(1163),l=n(9008),a=n.n(l),c=n(2918),o=n(5691),u=n(4924),s=n(4129),E=n(6437),L=n(6834),d=n.n(L),S=n(5675),_=n.n(S);function O(e){var t=e.id,n=e.assets,i=null===n||void 0===n?void 0:n.find((function(e){return e.sys.id===t}));return(null===i||void 0===i?void 0:i.url)?(0,r.jsx)(_(),{src:i.url,layout:"fill",alt:i.description}):null}var N=function(e){return{renderNode:(0,u.Z)({},E.BLOCKS.EMBEDDED_ASSET,(function(t){return(0,r.jsx)(O,{id:t.data.target.sys.id,assets:e.links.assets.block})}))}};function f(e){var t=e.content;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:d().markdown,children:(0,s.h)(t.json,N(t))})})}var I=n(716),B=n(1664),C=n.n(B);function A(){return(0,r.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[(0,r.jsx)(C(),{href:"/",children:(0,r.jsx)("a",{className:"hover:underline",children:"Blog"})}),"."]})}var T=n(5927),D=n(3858),m=n(960);function x(e){var t=e.children;return(0,r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})}function h(e){var t=e.title,n=e.coverImage,i=e.date,l=e.author;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{children:t}),(0,r.jsx)("div",{className:"hidden md:block md:mb-12",children:l&&(0,r.jsx)(T.Z,{name:l.name,picture:l.picture})}),(0,r.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,r.jsx)(m.Z,{title:t,url:n.url})}),(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsx)("div",{className:"block md:hidden mb-6",children:l&&(0,r.jsx)(T.Z,{name:l.name,picture:l.picture})}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(D.Z,{dateString:i})})]})]})}function K(){return(0,r.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}var p=n(2449),g=n(2979),j=!0;function v(e){var t=e.post,n=e.morePosts,l=e.preview,u=(0,i.useRouter)();return u.isFallback||t?(0,r.jsx)(p.Z,{preview:l,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(A,{}),u.isFallback?(0,r.jsx)(x,{children:"Loading\u2026"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("article",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsxs)("title",{children:[t.title," | Next.js Blog Example with ",g.yf]}),(0,r.jsx)("meta",{property:"og:image",content:t.coverImage.url})]}),(0,r.jsx)(h,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),(0,r.jsx)(f,{content:t.content})]}),(0,r.jsx)(K,{}),n&&n.length>0&&(0,r.jsx)(I.Z,{posts:n})]})]})}):(0,r.jsx)(c.default,{statusCode:404})}},6834:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},2918:function(e,t,n){e.exports=n(9185)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[82,774,888,179],(function(){return t=843,e(e.s=t);var t}));var t=e.O();_N_E=t}]);