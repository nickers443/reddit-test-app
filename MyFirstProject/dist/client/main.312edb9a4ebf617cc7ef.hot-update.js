webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_window_1 = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\nvar react_window_infinite_loader_1 = __importDefault(__webpack_require__(/*! react-window-infinite-loader */ \"./node_modules/react-window-infinite-loader/dist/index.esm.js\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\nfunction CardsList() {\n    var LIMIT = 25;\n    var infiniteLoaderRef = (0, react_1.useRef)(null);\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\n    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];\n    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];\n    var _d = (0, react_1.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];\n    var _e = (0, react_1.useState)(0), loadCount = _e[0], setLoadCount = _e[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    var isItemLoaded = function (index) { return index < posts.length && posts[index] !== null; };\n    function load() {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, after, children, postData_1, error_1;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        if (loadCount >= 3) {\n                            return [2 /*return*/];\n                        }\n                        setErrorLoading('');\n                        setIsLoading(true);\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 3, , 4]);\n                        setLoadCount(function (prev) { return prev + 1; });\n                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/rising', {\n                                headers: {\n                                    Authorization: \"bearer \".concat(token),\n                                },\n                                params: {\n                                    after: nextAfter,\n                                    limit: LIMIT,\n                                },\n                            })];\n                    case 2:\n                        _a = (_b.sent()).data.data, after = _a.after, children = _a.children;\n                        postData_1 = children.map(function (post) {\n                            var avatar = null;\n                            if (post.data.all_awardings.length)\n                                avatar = post.data.all_awardings[0].icon_url;\n                            return {\n                                title: post.data.title,\n                                author: post.data.author,\n                                avatar: avatar,\n                                img: post.data.thumbnail,\n                                date: post.data.created,\n                                rating: post.data.score,\n                                postId: post.data.id,\n                                postView: post.data.view_count,\n                            };\n                        });\n                        setPosts(function (prev) { return prev.concat.apply(prev, postData_1); });\n                        setNextAfter(after);\n                        return [3 /*break*/, 4];\n                    case 3:\n                        error_1 = _b.sent();\n                        setErrorLoading(String(error_1));\n                        return [3 /*break*/, 4];\n                    case 4:\n                        setIsLoading(false);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    }\n    var Row = function (_a) {\n        var index = _a.index, style = _a.style, data = _a.data;\n        var post = data[index];\n        return (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(\"div\", { className: \"Row\", style: style },\n                react_1.default.createElement(Card_1.Card, { key: post.postId + post.author, props: {\n                        authorName: post.author,\n                        avatar: post.avatar,\n                        img: post.img,\n                        date: post.date,\n                        view: post.postView,\n                        rating: post.rating,\n                        title: post.title,\n                        postId: post.postId,\n                    } }))));\n    };\n    (0, react_1.useEffect)(function () {\n        if (!token)\n            return;\n        if (token && posts.length === 0) {\n            load();\n        }\n    }, [token]);\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardList },\n        posts.length === 0 && !errorLoading && !isLoading && (react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043F\\u0443\\u0441\\u0442\")),\n        posts.length !== 0 && (react_1.default.createElement(react_window_infinite_loader_1.default, { isItemLoaded: isItemLoaded, itemCount: Infinity, loadMoreItems: load, ref: infiniteLoaderRef }, function (_a) {\n            var onItemsRendered = _a.onItemsRendered, ref = _a.ref;\n            return (react_1.default.createElement(react_1.default.Fragment, null,\n                react_1.default.createElement(react_window_1.FixedSizeList, { height: 450, width: 'auto', ref: ref, itemData: posts, itemCount: posts.length, itemSize: 148, onItemsRendered: onItemsRendered }, Row),\n                isLoading && react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430....\"),\n                errorLoading && (react_1.default.createElement(\"p\", { style: { textAlign: 'center', fontSize: '20px' } }, errorLoading)),\n                loadCount === 3 && (react_1.default.createElement(\"div\", { \"\\u0441lassList\": cardslist_css_1.default.button },\n                    react_1.default.createElement(Button_1.Button, { text: \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435...\", onClick: function () { return setLoadCount(0); } })))));\n        }))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ })

})