webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction usePostsData() {\n    var _a = (0, react_1.useState)([\n        {\n            title: '',\n            author: '',\n            date: 0,\n            rating: 0,\n            postId: '',\n            postView: null,\n        },\n    ]), posts = _a[0], setPosts = _a[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get('https://oauth.reddit.com/best', {\n            headers: {\n                Authorization: \"bearer \".concat(token),\n            },\n        })\n            .then(function (resp) {\n            var postData = resp.data.data.children.map(function (post) {\n                var avatar = null;\n                if (post.data.all_awardings.length)\n                    avatar = post.data.all_awardings[0].icon_url;\n                return {\n                    title: post.data.title,\n                    author: post.data.author,\n                    avatar: avatar,\n                    img: post.data.thumbnail,\n                    date: post.data.created,\n                    rating: post.data.score,\n                    postId: post.data.id,\n                    postView: post.data.view_count,\n                };\n            });\n            setPosts(postData);\n        })\n            .catch(console.log);\n    }, [token]);\n    return [posts];\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostsContextProvider = exports.postsContext = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.tsx\");\nexports.postsContext = (0, react_1.createContext)([\n    {\n        title: '',\n        author: '',\n        date: 0,\n        rating: 0,\n        postId: '',\n        postView: null,\n    },\n]);\nfunction PostsContextProvider(_a) {\n    var children = _a.children;\n    var posts = (0, usePostsData_1.usePostsData)()[0];\n    return react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children);\n}\nexports.PostsContextProvider = PostsContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ })

})