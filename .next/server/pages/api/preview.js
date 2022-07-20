"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 9098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

;// CONCATENATED MODULE: ./lib/api.js
const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;
async function fetchGraphQL(query, preview = false) {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            query
        })
    }).then((response)=>response.json());
}
function extractPost(fetchResponse) {
    var ref, ref1, ref2;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref1 = ref.postCollection) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.items) === null || ref2 === void 0 ? void 0 : ref2[0];
}
function extractPostEntries(fetchResponse) {
    var ref, ref1;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref1 = ref.postCollection) === null || ref1 === void 0 ? void 0 : ref1.items;
}
async function getPreviewPostBySlug(slug) {
    const entry = await fetchGraphQL(`query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, true);
    return extractPost(entry);
}
async function getAllPostsWithSlug() {
    const entries = await fetchGraphQL(`query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractPostEntries(entries);
}
async function getAllPostsForHome(preview) {
    const entries = await fetchGraphQL(`query {
      postCollection(order: date_DESC, preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    return extractPostEntries(entries);
}
async function getPostAndMorePosts(slug, preview) {
    const entry = await fetchGraphQL(`query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    const entries = await fetchGraphQL(`query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${preview ? "true" : "false"}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    return {
        post: extractPost(entry),
        morePosts: extractPostEntries(entries)
    };
}

;// CONCATENATED MODULE: ./pages/api/preview.js

async function preview(req, res) {
    const { secret , slug  } = req.query;
    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    // Fetch the headless CMS to check if the provided `slug` exists
    const post = await getPreviewPostBySlug(slug);
    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post) {
        return res.status(401).json({
            message: "Invalid slug"
        });
    }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});
    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    // res.writeHead(307, { Location: `/posts/${post.slug}` })
    const url = `/posts/${post.slug}`;
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`);
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9098));
module.exports = __webpack_exports__;

})();