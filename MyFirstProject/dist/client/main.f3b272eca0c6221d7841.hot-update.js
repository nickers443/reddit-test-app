webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.tsx":
/*!********************************!*\
  !*** ./src/hooks/useToken.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\nfunction useToken() {\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        if (window.__token__) {\n            dispatch((0, store_1.setToken)(window.__token__));\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.tsx?");

/***/ })

})