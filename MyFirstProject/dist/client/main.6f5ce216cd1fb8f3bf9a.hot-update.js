webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.tsx\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\nfunction AppComponent() {\n    (0, useToken_1.useToken)();\n    return (react_1.default.createElement(postsContext_1.PostsContextProvider, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(CardsList_1.CardsList, null)))));\n}\nexports.App = (0, root_1.hot)(function () { return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n    react_1.default.createElement(AppComponent, null))); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useCommentsData = void 0;\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useCommentsData(postId) {\n    var _a = (0, react_1.useState)([{}]), comments = _a[0], setComments = _a[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get(\"https://oauth.reddit.com/comments/\".concat(postId), {\n            params: { limit: 5 },\n            headers: { Authorization: \"bearer \".concat(token) },\n        })\n            .then(function (resp) {\n            setComments(resp.data[1].data.children);\n        })\n            .catch(function (error) {\n            console.log(error);\n        });\n    }, []);\n    return [comments];\n}\nexports.useCommentsData = useCommentsData;\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction usePostsData() {\n    var _a = (0, react_1.useState)([\n        {\n            title: '',\n            author: '',\n            date: 0,\n            rating: 0,\n            postId: '',\n            postView: null,\n        },\n    ]), posts = _a[0], setPosts = _a[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        axios_1.default\n            .get('https://oauth.reddit.com/best', {\n            headers: {\n                Authorization: \"bearer \".concat(token),\n            },\n        })\n            .then(function (resp) {\n            var postData = resp.data.data.children.map(function (post) {\n                var avatar = null;\n                if (post.data.all_awardings.length)\n                    avatar = post.data.all_awardings[0].icon_url;\n                return {\n                    title: post.data.title,\n                    author: post.data.author,\n                    avatar: avatar,\n                    img: post.data.thumbnail,\n                    date: post.data.created,\n                    rating: post.data.score,\n                    postId: post.data.id,\n                    postView: post.data.view_count,\n                };\n            });\n            setPosts(postData);\n        })\n            .catch(console.log);\n    }, [token]);\n    return [posts];\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/hooks/useToken.tsx":
/*!********************************!*\
  !*** ./src/hooks/useToken.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\nfunction useToken() {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        if (window.__token__ && window.__token__ !== 'undefined') {\n            dispatch((0, store_1.setToken)(window.__token__));\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.tsx?");

/***/ }),

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\nfunction useUserData() {\n    var _a = (0, react_redux_1.useSelector)(function (state) { return state.me; }), data = _a.data, loading = _a.loading;\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        if (!token)\n            return;\n        dispatch((0, actions_1.meRequestAsync)());\n    }, [token]);\n    return { data: data, loading: loading };\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar store_1 = __webpack_require__(/*! ../../store/store */ \"./src/store/store.ts\");\nvar CommentForm_1 = __webpack_require__(/*! ../CardsList/Card/CommentSection/CommentForm */ \"./src/shared/CardsList/Card/CommentSection/CommentForm/index.ts\");\nfunction CommentFormContainer() {\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    function handleSubmit(event) {\n        event.preventDefault();\n    }\n    function handleChange(event) {\n        dispatch((0, store_1.updateComment)(event.target.value));\n    }\n    return react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit });\n}\nexports.CommentFormContainer = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestAsync = exports.meRequestError = exports.meRequestSucces = exports.meRequest = exports.ME_REQUEST_ERROR = exports.ME_REQUEST_SUCCES = exports.ME_REQUEST = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nexports.ME_REQUEST = 'ME_REQUEST';\nexports.ME_REQUEST_SUCCES = 'ME_REQUEST_SUCCES';\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\nvar meRequest = function () { return ({\n    type: exports.ME_REQUEST,\n}); };\nexports.meRequest = meRequest;\nvar meRequestSucces = function (data) { return ({\n    type: exports.ME_REQUEST_SUCCES,\n    data: data,\n}); };\nexports.meRequestSucces = meRequestSucces;\nvar meRequestError = function (error) { return ({\n    type: exports.ME_REQUEST_ERROR,\n    error: error,\n}); };\nexports.meRequestError = meRequestError;\nvar meRequestAsync = function () { return function (dispatch, getState) {\n    dispatch((0, exports.meRequest)());\n    axios_1.default\n        .get('https://oauth.reddit.com/api/v1/me', {\n        headers: {\n            Authorization: \"bearer \".concat(getState().token),\n        },\n    })\n        .then(function (resp) {\n        var userData = resp.data;\n        var myUserData = { name: userData.name, iconImg: userData.icon_img };\n        dispatch((0, exports.meRequestSucces)(myUserData));\n    })\n        .catch(function (error) {\n        dispatch((0, exports.meRequestError)(String(error)));\n    });\n}; };\nexports.meRequestAsync = meRequestAsync;\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.setToken = exports.updateComment = exports.SET_TOKEN = exports.UPDATE_COMMENT = void 0;\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\nexports.SET_TOKEN = 'SET_TOKEN';\nvar initialState = {\n    commentText: 'Уважаемый, ',\n    token: '',\n    me: {\n        loading: false,\n        error: '',\n        data: {},\n    },\n};\nvar updateComment = function (text) { return ({\n    type: 'UPDATE_COMMENT',\n    text: text,\n}); };\nexports.updateComment = updateComment;\nvar setToken = function (token) { return ({\n    type: 'SET_TOKEN',\n    token: token,\n}); };\nexports.setToken = setToken;\nvar saveToken = function () { return function (dispatch, getState) {\n    var dispatch = useDispatch();\n    var token = useSelector(function (state) { return state.token; });\n    useEffect(function () {\n        if (window.__token__ && window.__token__ !== 'undefined') {\n            dispatch((0, exports.setToken)(window.__token__));\n        }\n    }, []);\n}; };\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case exports.UPDATE_COMMENT:\n            return __assign(__assign({}, state), { commentText: action.text });\n        case exports.SET_TOKEN:\n            return __assign(__assign({}, state), { token: action.token });\n        case actions_1.ME_REQUEST:\n        case actions_1.ME_REQUEST_ERROR:\n        case actions_1.ME_REQUEST_SUCCES:\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})