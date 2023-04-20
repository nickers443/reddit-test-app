webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Controls/controls.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Menu/menu.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/MenuButton/menubutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/MenuItemsList/menuitemslist.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Preview/preview.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/TextContent/textcontent.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/card.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/cardslist.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Dropdown/dropdown.css":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.tsx\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Post_1 = __webpack_require__(/*! ./shared/CardsList/Card/Post */ \"./src/shared/CardsList/Card/Post/index.ts\");\nvar store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        setMounted(true);\n    }, []);\n    (0, useToken_1.useToken)();\n    return (react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\" },\n                        react_1.default.createElement(Redirect, { to: \"/posts\" })),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/:id\", element: react_1.default.createElement(Post_1.Post, null) }))))))));\n}\nexports.App = (0, root_1.hot)(function () { return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n    react_1.default.createElement(AppComponent, null))); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nwindow.addEventListener('load', function () {\n    react_dom_1.default.hydrate(react_1.default.createElement(App_1.App, null), document.getElementById('root'));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/SaveButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/ShareButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
false,

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
false,

/***/ "./src/shared/CardsList/Card/MenuButton/MenuButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/MenuButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/MenuButton/menubutton.css":
false,

/***/ "./src/shared/CardsList/Card/MenuItemsList/MenuItemsList.tsx":
false,

/***/ "./src/shared/CardsList/Card/MenuItemsList/index.ts":
false,

/***/ "./src/shared/CardsList/Card/MenuItemsList/menuitemslist.css":
false,

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
false,

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
false,

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
false,

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
false,

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
false,

/***/ "./src/shared/CardsList/Card/card.css":
false,

/***/ "./src/shared/CardsList/CardsList.tsx":
false,

/***/ "./src/shared/CardsList/cardslist.css":
false,

/***/ "./src/shared/CardsList/index.ts":
false,

/***/ "./src/shared/Dropdown/Dropdown.tsx":
false,

/***/ "./src/shared/Dropdown/dropdown.css":
false,

/***/ "./src/shared/Dropdown/index.ts":
false

})