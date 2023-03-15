webpackHotUpdate("main",{

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
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unterminated string constant (17:0)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| exports.UPDATE_COMMENT = 'UPDATE_COMMENT';\\n| exports.SET_TOKEN = 'SET_TOKEN';\\n> ';\\n| var initialState = {\\n|     commentText: 'Privet',\");\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ })

})