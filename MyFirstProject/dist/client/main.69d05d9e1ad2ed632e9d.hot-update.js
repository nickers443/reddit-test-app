webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (104:11)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     }\\n|     try { }\\n>     catch () { }\\n|     (function (error) {\\n|         setErrorLoading(String(error));\");\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.tsx\");\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nfunction CardsList() {\n    var bottomObserver = (0, react_1.useRef)(null);\n    var _a = (0, usePostsData_1.usePostsData)(bottomObserver), posts = _a[0], isLoading = _a[1], errorLoading = _a[2], empty = _a[3];\n    (0, react_1.useEffect)(function () { }, [bottomObserver.current]);\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardList },\n        empty && react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043F\\u0443\\u0441\\u0442\"),\n        errorLoading && react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, errorLoading),\n        !isLoading && Array.isArray(posts) ? (posts.map(function (card) {\n            return (react_1.default.createElement(Card_1.Card, { key: card.postId + card.author, props: {\n                    authorName: card.author,\n                    avatar: card.avatar,\n                    img: card.img,\n                    date: card.date,\n                    view: card.postView,\n                    rating: card.rating,\n                    title: card.title,\n                    postId: card.postId,\n                } }));\n        })) : (react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430....\")),\n        react_1.default.createElement(\"div\", { ref: bottomObserver })));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ })

})