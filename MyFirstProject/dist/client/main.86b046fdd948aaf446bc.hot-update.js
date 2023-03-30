webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction usePostsData(_a) {\n    var ref = _a.ref;\n    var _b = (0, react_1.useState)([]), posts = _b[0], setPosts = _b[1];\n    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];\n    var _d = (0, react_1.useState)(''), errorLoading = _d[0], setErrorLoading = _d[1];\n    var _e = (0, react_1.useState)(''), after = _e[0], setAfter = _e[1];\n    var _f = (0, react_1.useState)(true), empty = _f[0], setEmpty = _f[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        if (!token)\n            return;\n        setErrorLoading('');\n        setIsLoading(true);\n        setEmpty(false);\n        axios_1.default\n            .get('https://oauth.reddit.com/rising', {\n            headers: {\n                Authorization: \"bearer \".concat(token),\n            },\n            params: {\n                limit: 10,\n            },\n        })\n            .then(function (resp) {\n            var after = resp.data.data.after;\n            var postData = resp.data.data.children.map(function (post) {\n                var avatar = null;\n                if (post.data.all_awardings.length)\n                    avatar = post.data.all_awardings[0].icon_url;\n                return {\n                    title: post.data.title,\n                    author: post.data.author,\n                    avatar: avatar,\n                    img: post.data.thumbnail,\n                    date: post.data.created,\n                    rating: post.data.score,\n                    postId: post.data.id,\n                    postView: post.data.view_count,\n                };\n            });\n            setPosts(function (prev) { return prev.concat.apply(prev, postData); });\n            setAfter(after);\n        })\n            .catch(function (error) {\n            setErrorLoading(String(error));\n        })\n            .finally(function () {\n            setIsLoading(false);\n        });\n        var observer = new IntersectionObserver(function () {\n            console.log('tick');\n        }, {\n            rootMargin: '10px',\n        });\n        if (bottomObserver.current) {\n            observer.observe(bottomObserver.current);\n        }\n        return function () {\n            if (bottomObserver.current) {\n                observer.unobserve(bottomObserver.current);\n            }\n        };\n    }, [token]);\n    return [posts, isLoading, errorLoading, empty];\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ })

})