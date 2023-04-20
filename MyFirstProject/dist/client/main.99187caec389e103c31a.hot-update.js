webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Post/Post.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Post/Post.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\nvar CommentSection_1 = __importDefault(__webpack_require__(/*! ../CommentSection/CommentSection */ \"./src/shared/CardsList/Card/CommentSection/CommentSection.tsx\"));\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/CardsList/Card/Post/post.css\"));\nfunction Post(props) {\n    var ref = (0, react_1.useRef)(null);\n    var comments = (0, useCommentsData_1.useCommentsData)(props.postId)[0];\n    var history = useHistory();\n    (0, react_1.useEffect)(function () {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    var root = document.querySelector('#modal_root');\n    if (!root)\n        return null;\n    return (0, react_dom_1.createPortal)(react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\n        react_1.default.createElement(\"h2\", null, '123123'),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem ipsa provident? Illum rerum libero facere doloribus culpa sit, molestias inventore officiis unde maiores dolor, dolorum est corporis? Soluta, molestiae.\")),\n        react_1.default.createElement(CommentSection_1.default, { comments: comments })), root);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Post/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Post/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/CardsList/Card/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Post/index.ts?");

/***/ })

})