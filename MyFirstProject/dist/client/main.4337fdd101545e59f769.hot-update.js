webpackHotUpdate("main",{

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.setToken = exports.updateComment = exports.SET_TOKEN = exports.UPDATE_COMMENT = void 0;\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\nexports.SET_TOKEN = 'SET_TOKEN';\nvar initialState = {\n    commentText: 'Уважаемый, ',\n    token: '',\n    me: {\n        loading: false,\n        error: '',\n        data: {},\n    },\n};\nvar updateComment = function (text) { return ({\n    type: 'UPDATE_COMMENT',\n    text: text,\n}); };\nexports.updateComment = updateComment;\nvar setToken = function (token) { return ({\n    type: 'SET_TOKEN',\n    token: token,\n}); };\nexports.setToken = setToken;\nvar saveToken = function () { return function (dispatch, getState) {\n    var token = useSelector(function (state) { return state.token; });\n    useEffect(function () {\n        if (window.__token__ && window.__token__ !== 'undefined') {\n            dispatch((0, exports.setToken)(window.__token__));\n        }\n    }, []);\n}; };\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case exports.UPDATE_COMMENT:\n            return __assign(__assign({}, state), { commentText: action.text });\n        case exports.SET_TOKEN:\n            return __assign(__assign({}, state), { token: action.token });\n        case actions_1.ME_REQUEST:\n        case actions_1.ME_REQUEST_ERROR:\n        case actions_1.ME_REQUEST_SUCCES:\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})