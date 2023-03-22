webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CardsList/Card/CommentSection/CommentForm/commentform.css\"));\nfunction CommentForm() {\n    var _a = (0, react_hook_form_1.useForm)({\n        // defaultValues: {\n        //   comment: '',\n        // },\n        mode: 'onChange',\n    }), register = _a.register, handleSubmit = _a.handleSubmit, setValue = _a.setValue, watch = _a.watch, reset = _a.reset, errors = _a.formState.errors;\n    var onSubmit = function (data) {\n        console.log(data, 'submit');\n        reset();\n    };\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, name: \"comment\", ref: register({ required: true, maxLength: 1000 }), \"aria-invalid\": errors.comment ? 'true' : 'false' }),\n        errors.comment && react_1.default.createElement(\"div\", null, errors.comment),\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentSection/CommentForm/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentSection/CommentForm/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentSection/CommentForm/index.ts?");

/***/ })

})