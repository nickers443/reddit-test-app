webpackHotUpdate("main",{

/***/ "./src/shared/Button/Button.tsx":
/*!**************************************!*\
  !*** ./src/shared/Button/Button.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Button = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nvar button_css_1 = __importDefault(__webpack_require__(/*! ./button.css */ \"./src/shared/Button/button.css\"));\nvar NOOP = function () { };\nfunction Button(_a) {\n    var text = _a.text, buttonIcon = _a.buttonIcon, _b = _a.onClick, onClick = _b === void 0 ? NOOP : _b, style = _a.style;\n    var _c = (0, react_1.useState)(false), hover = _c[0], setHover = _c[1];\n    return (react_1.default.createElement(\"button\", { className: style !== null && style !== void 0 ? style : button_css_1.default.button, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: function () { return onClick(); } },\n        react_1.default.createElement(Icon_1.Icon, { name: buttonIcon, size: 14, hover: hover }),\n        react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.black, hover: hover }, text)));\n}\nexports.Button = Button;\n\n\n//# sourceURL=webpack:///./src/shared/Button/Button.tsx?");

/***/ }),

/***/ "./src/shared/Button/index.ts":
/*!************************************!*\
  !*** ./src/shared/Button/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Button */ \"./src/shared/Button/Button.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Button/index.ts?");

/***/ })

})