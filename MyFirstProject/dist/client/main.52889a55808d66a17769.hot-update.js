webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction usePostsData() {\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\n    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];\n    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];\n    var _d = (0, react_1.useState)(true), empty = _d[0], setEmpty = _d[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        if (!token)\n            return;\n        setErrorLoading('');\n        setIsLoading(true);\n        setEmpty(false);\n        axios_1.default\n            .get('https://oauth.reddit.com/best', {\n            headers: {\n                Authorization: \"bearer \".concat(token),\n            },\n        })\n            .then(function (resp) {\n            var after = resp.data.data.after;\n            var postData = resp.data.data.children.map(function (post) {\n                var avatar = null;\n                if (post.data.all_awardings.length)\n                    avatar = post.data.all_awardings[0].icon_url;\n                return {\n                    title: post.data.title,\n                    author: post.data.author,\n                    avatar: avatar,\n                    img: post.data.thumbnail,\n                    date: post.data.created,\n                    rating: post.data.score,\n                    postId: post.data.id,\n                    postView: post.data.view_count,\n                };\n            });\n            setPosts(postData);\n            setAfter(after);\n        })\n            .catch(function (error) {\n            setErrorLoading(String(error));\n        })\n            .finally(function () {\n            setIsLoading(false);\n        });\n    }, [token]);\n    return [posts, isLoading, errorLoading, empty];\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.tsx\");\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nfunction CardsList() {\n    var _a = (0, usePostsData_1.usePostsData)(), posts = _a[0], isLoading = _a[1], errorLoading = _a[2], empty = _a[3];\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardList },\n        empty && react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043F\\u0443\\u0441\\u0442\"),\n        errorLoading && react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, errorLoading),\n        !isLoading && Array.isArray(posts) ? (posts.map(function (card) {\n            return (react_1.default.createElement(Card_1.Card, { key: card.postId + card.author, props: {\n                    authorName: card.author,\n                    avatar: card.avatar,\n                    img: card.img,\n                    date: card.date,\n                    view: card.postView,\n                    rating: card.rating,\n                    title: card.title,\n                    postId: card.postId,\n                } }));\n        })) : (react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430....\"))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ })

})