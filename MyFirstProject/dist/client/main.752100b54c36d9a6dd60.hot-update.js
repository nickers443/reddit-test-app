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

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nwindow.addEventListener('load', function () {\n    react_dom_1.default.hydrate(react_1.default.createElement(App_1.App, null), document.getElementById('root'));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})