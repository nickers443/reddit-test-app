webpackHotUpdate("main",{

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useCommentsData = void 0;\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useCommentsData(postId) {\n    var _a = (0, react_1.useState)([{}]), comments = _a[0], setComments = _a[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get(\"https://oauth.reddit.com/comments/\".concat(postId), {\n            params: { limit: 5 },\n            headers: { Authorization: \"bearer \".concat(token) },\n        })\n            .then(function (resp) {\n            setComments(resp.data[1].data.children);\n        })\n            .catch(function (error) {\n            console.log(error);\n        });\n    }, []);\n    return [comments];\n}\nexports.useCommentsData = useCommentsData;\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ })

})