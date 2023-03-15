webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.tsx\");\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.tsx\");\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, extension_1.composeWithDevTools)());\nfunction AppComponent() {\n    var token = (0, useToken_1.useToken)()[0];\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\n                react_1.default.createElement(postsContext_1.PostsContextProvider, null,\n                    react_1.default.createElement(Layout_1.Layout, null,\n                        react_1.default.createElement(Header_1.Header, null),\n                        react_1.default.createElement(Content_1.Content, null,\n                            react_1.default.createElement(CardsList_1.CardsList, null))))))));\n}\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\nvar CommentForm_1 = __webpack_require__(/*! ../CardsList/Card/CommentSection/CommentForm */ \"./src/shared/CardsList/Card/CommentSection/CommentForm/index.ts\");\nfunction CommentFormContainer() {\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function handleChange(event) {\n        dispatch((0, store_1.updateComment)(event.target.value));\n    }\n    return react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit });\n}\nexports.CommentFormContainer = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.setToken = exports.updateComment = exports.SET_TOKEN = exports.UPDATE_COMMENT = void 0;\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\nexports.SET_TOKEN = 'SET_TOKEN';\nvar initialState = {\n    commentText: 'Уважаемый, ',\n};\nvar updateComment = function (text) { return ({\n    type: 'UPDATE_COMMENT',\n    text: text,\n}); };\nexports.updateComment = updateComment;\nvar setToken = function (token) { return ({\n    type: 'SET_TOKEN',\n    token: token,\n}); };\nexports.setToken = setToken;\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case 'UPDATE_COMMENT':\n            return __assign(__assign({}, state), { commentText: action.text });\n        case 'SET_TOKEN':\n            return __assign(__assign({}, state), { token: action.token });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ })

})