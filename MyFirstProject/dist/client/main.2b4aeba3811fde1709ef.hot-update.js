webpackHotUpdate("main",{

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useCommentsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.tsx\");\nfunction useCommentsData(postId) {\n    var _a = (0, react_1.useState)([{}]), comments = _a[0], setComments = _a[1];\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get(\"https://oauth.reddit.com/comments/\".concat(postId), {\n            params: { limit: 5 },\n            headers: { Authorization: \"bearer \".concat(token) },\n        })\n            .then(function (resp) {\n            setComments(resp.data[1].data.children);\n        })\n            .catch(function (error) {\n            console.log(error);\n        });\n    }, []);\n    return [comments];\n}\nexports.useCommentsData = useCommentsData;\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.tsx\");\nfunction usePostsData() {\n    var _a = (0, react_1.useState)([\n        {\n            title: '',\n            author: '',\n            date: 0,\n            rating: 0,\n            postId: '',\n            postView: null,\n        },\n    ]), posts = _a[0], setPosts = _a[1];\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get('https://oauth.reddit.com/best', {\n            headers: {\n                Authorization: \"bearer \".concat(token),\n            },\n        })\n            .then(function (resp) {\n            var postData = resp.data.data.children.map(function (post) {\n                var avatar = null;\n                if (post.data.all_awardings.length)\n                    avatar = post.data.all_awardings[0].icon_url;\n                return {\n                    title: post.data.title,\n                    author: post.data.author,\n                    avatar: avatar,\n                    img: post.data.thumbnail,\n                    date: post.data.created,\n                    rating: post.data.score,\n                    postId: post.data.id,\n                    postView: post.data.view_count,\n                };\n            });\n            setPosts(postData);\n        })\n            .catch(console.log);\n    }, [token]);\n    return [posts];\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.tsx\");\nfunction useUserData() {\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get('https://oauth.reddit.com/api/v1/me', {\n            headers: {\n                Authorization: \"bearer \".concat(token),\n            },\n        })\n            .then(function (resp) {\n            var userData = resp.data;\n            setData({ name: userData.name, iconImg: userData.icon_img });\n        })\n            .catch(console.log);\n    }, [token]);\n    return [data];\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/tokenContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: ENOENT: no such file or directory, open '/Users/dmitry/Skillbox/ReactJS/MyFirstProject/src/shared/context/tokenContext.tsx'\");\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.tsx?");

/***/ })

})