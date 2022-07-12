(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 3095:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__h_8de"
};


/***/ }),

/***/ 8470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(5691);
;// CONCATENATED MODULE: external "@contentful/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@contentful/rich-text-react-renderer");
;// CONCATENATED MODULE: external "@contentful/rich-text-types"
const rich_text_types_namespaceObject = require("@contentful/rich-text-types");
// EXTERNAL MODULE: ./components/markdown-styles.module.css
var markdown_styles_module = __webpack_require__(3095);
var markdown_styles_module_default = /*#__PURE__*/__webpack_require__.n(markdown_styles_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/rich-text-asset.js


function RichTextAsset({ id , assets  }) {
    const asset = assets === null || assets === void 0 ? void 0 : assets.find((asset)=>asset.sys.id === id);
    if (asset === null || asset === void 0 ? void 0 : asset.url) {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: asset.url,
            layout: "fill",
            alt: asset.description
        });
    }
    return null;
};

;// CONCATENATED MODULE: ./components/post-body.js





const customMarkdownOptions = (content)=>({
        renderNode: {
            [rich_text_types_namespaceObject.BLOCKS.EMBEDDED_ASSET]: (node)=>/*#__PURE__*/ jsx_runtime_.jsx(RichTextAsset, {
                    id: node.data.target.sys.id,
                    assets: content.links.assets.block
                })
        }
    });
function PostBody({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (markdown_styles_module_default()).markdown,
            children: (0,rich_text_react_renderer_namespaceObject.documentToReactComponents)(content.json, customMarkdownOptions(content))
        })
    });
};

// EXTERNAL MODULE: ./components/more-stories.js + 1 modules
var more_stories = __webpack_require__(716);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header.js


function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
        className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:underline",
                    children: "Blog"
                })
            }),
            "."
        ]
    });
};

// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(5927);
// EXTERNAL MODULE: ./components/date.js
var components_date = __webpack_require__(3858);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(960);
;// CONCATENATED MODULE: ./components/post-title.js

function PostTitle({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
        children: children
    });
};

;// CONCATENATED MODULE: ./components/post-header.js





function PostHeader({ title , coverImage , date , author  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block md:mb-12",
                children: author && /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                    name: author.name,
                    picture: author.picture
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16 sm:mx-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    url: coverImage.url
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block md:hidden mb-6",
                        children: author && /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                            name: author.name,
                            picture: author.picture
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-6 text-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                            dateString: date
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/section-separator.js

function SectionSeparator() {
    return /*#__PURE__*/ jsx_runtime_.jsx("hr", {
        className: "border-accent-2 mt-28 mb-24"
    });
};

// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(2449);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(2979);
;// CONCATENATED MODULE: ./pages/posts/[slug].js














function Post({ post , morePosts , preview  }) {
    const router = (0,router_namespaceObject.useRouter)();
    if (!router.isFallback && !post) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        preview: preview,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                    children: "Loading\u2026"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                                            children: [
                                                post.title,
                                                " | Next.js Blog Example with ",
                                                constants/* CMS_NAME */.yf
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                            property: "og:image",
                                            content: post.coverImage.url
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostHeader, {
                                    title: post.title,
                                    coverImage: post.coverImage,
                                    date: post.date,
                                    author: post.author
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                                    content: post.content
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionSeparator, {}),
                        morePosts && morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
};
async function getStaticProps({ params , preview =false  }) {
    const data = await (0,api/* getPostAndMorePosts */.ds)(params.slug, preview);
    return {
        props: {
            preview,
            post: (data === null || data === void 0 ? void 0 : data.post) ?? null,
            morePosts: (data === null || data === void 0 ? void 0 : data.morePosts) ?? null
        }
    };
}
async function getStaticPaths() {
    const allPosts = await (0,api/* getAllPostsWithSlug */.h9)();
    return {
        paths: (allPosts === null || allPosts === void 0 ? void 0 : allPosts.map(({ slug  })=>`/posts/${slug}`)) ?? [],
        fallback: true
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,750], () => (__webpack_exec__(8470)));
module.exports = __webpack_exports__;

})();