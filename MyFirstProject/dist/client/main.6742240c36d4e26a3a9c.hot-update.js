webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Button/button.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/CommentSection/AnswerForm/answerForm.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/CommentSection/Comment/comment.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/CommentSection/CommentForm/commentform.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/CommentSection/CommentList/commentlist.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/CommentSection/commentSection.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/Card/Post/post.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Sort/sort.css":
false,

/***/ "./node_modules/react-hook-form/dist/index.esm.mjs":
false,

/***/ "./src/hooks/useCommentsData.ts":
false,

/***/ "./src/shared/Button/Button.tsx":
false,

/***/ "./src/shared/Button/button.css":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/AnswerForm/AnswerForm.tsx":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/AnswerForm/answerForm.css":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/AnswerForm/index.ts":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/Comment/Comment.tsx":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/Comment/comment.css":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/CommentForm/CommentForm.tsx":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/CommentForm/commentform.css":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/CommentForm/index.ts":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/CommentList/CommentList.tsx":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/CommentList/commentlist.css":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/CommentSection.tsx":
false,

/***/ "./src/shared/CardsList/Card/CommentSection/commentSection.css":
false,

/***/ "./src/shared/CardsList/Card/Post/Post.tsx":
false,

/***/ "./src/shared/CardsList/Card/Post/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Post/post.css":
false,

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n'react';\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar useTimeStamp_1 = __webpack_require__(/*! ../../../../hooks/useTimeStamp */ \"./src/hooks/useTimeStamp.ts\");\nvar UserLink_1 = __webpack_require__(/*! ../UserLink */ \"./src/shared/CardsList/Card/UserLink/index.ts\");\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\nfunction TextContent(_a) {\n    var authorName = _a.authorName, avatar = _a.avatar, date = _a.date, title = _a.title, view = _a.view, postId = _a.postId;\n    var publicationTime = (0, useTimeStamp_1.useTimeStamp)(date)[0];\n    return (React.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        React.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            React.createElement(UserLink_1.UserLink, { avatar: avatar, authorName: authorName }),\n            React.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\n                React.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                publicationTime)),\n        React.createElement(\"h2\", { className: textcontent_css_1.default.title },\n            React.createElement(\"a\", { href: \"#post-url\", className: textcontent_css_1.default.postLink, onClick: function () { return setIsModalOpen(true); } }, title))));\n}\nexports.TextContent = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
false,

/***/ "./src/shared/CommentFormContainer/index.ts":
false,

/***/ "./src/shared/Sort/Sort.tsx":
false,

/***/ "./src/shared/Sort/sort.css":
false

})