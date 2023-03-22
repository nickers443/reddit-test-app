webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CardsList/Card/CommentSection/CommentForm/commentform.css\"));\nfunction CommentForm() {\n    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, handleSubmit = _a.handleSubmit, setValue = _a.setValue, watch = _a.watch, control = _a.control, reset = _a.reset, errors = _a.formState.errors;\n    var onSubmit = function (data) {\n        console.log(data, 'submit');\n        reset();\n    };\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\n        react_1.default.createElement(react_hook_form_1.Controller, { name: \"comment\", control: control, rules: { minLength: 3 }, render: function (_a) {\n                var _b = _a.field, value = _b.value, ref = _b.ref, onChange = _b.onChange;\n                return (react_1.default.createElement(\"textarea\", { value: value, ref: ref, onChange: onChange, className: commentform_css_1.default.input, \"aria-invalid\": errors.comment ? 'true' : 'false' }));\n            } }),\n        errors.comment && react_1.default.createElement(Text_1.Text, null, \"\\u041C\\u0438\\u043D\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u043D\\u0430 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u044F \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u0435\\u0442 3 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430\"),\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx?");

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