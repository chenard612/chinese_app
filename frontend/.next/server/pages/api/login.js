"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction handler(req, res) {\n    const access = req[\"body\"][\"access\"];\n    const refresh = req[\"body\"][\"refresh\"];\n    const dict = {\n        \"access\": access,\n        \"refresh\": refresh\n    };\n    res.setHeader(\"Set-Cookie\", [\n        cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"access-token\", access, {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            maxAge: 60 * 60,\n            sameSite: \"strict\",\n            path: \"/\"\n        }),\n        cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"refresh-token\", refresh, {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            maxAge: 60 * 60 * 60,\n            sameSite: \"strict\",\n            path: \"/\"\n        })\n    ]);\n    res.status(200).json({\n        text: \"Success!\"\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNGO0FBR1gsU0FBU0UsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsTUFBTUMsU0FBU0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTO0lBQ3BDLE1BQU1HLFVBQVVILEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVTtJQUV0QyxNQUFNSSxPQUFPO1FBQUMsVUFBU0Y7UUFBUSxXQUFVQztJQUFPO0lBQ2hERixJQUFJSSxTQUFTLENBQUMsY0FBYztRQUFDUix1REFBZ0IsQ0FBQyxnQkFBZ0JLLFFBQVE7WUFDdENLLFVBQVUsSUFBSTtZQUNkQyxRQUFRQyxrQkFBeUI7WUFDakNDLFFBQVEsS0FBSztZQUNiQyxVQUFVO1lBQ1ZDLE1BQU07UUFDTjtRQUNKZix1REFBZ0IsQ0FBQyxpQkFBaUJNLFNBQVM7WUFDdkNJLFVBQVUsSUFBSTtZQUNkQyxRQUFRQyxrQkFBeUI7WUFDakNDLFFBQVEsS0FBSyxLQUFLO1lBQ2xCQyxVQUFVO1lBQ1ZDLE1BQU07UUFDTjtLQUFHO0lBRW5DWCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU07SUFBVTtBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hpbmVzZWFwcC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IGFjY2VzcyA9IHJlcVsnYm9keSddWydhY2Nlc3MnXTtcbiAgICBjb25zdCByZWZyZXNoID0gcmVxWydib2R5J11bJ3JlZnJlc2gnXTtcblxuICAgIGNvbnN0IGRpY3QgPSB7J2FjY2Vzcyc6YWNjZXNzLCAncmVmcmVzaCc6cmVmcmVzaH07XG4gICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIFtjb29raWUuc2VyaWFsaXplKCdhY2Nlc3MtdG9rZW4nLCBhY2Nlc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWUuc2VyaWFsaXplKCdyZWZyZXNoLXRva2VuJywgcmVmcmVzaCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV1cbiAgICApO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdGV4dDogJ1N1Y2Nlc3MhJ30pO1xuICB9Il0sIm5hbWVzIjpbImNvb2tpZSIsImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFjY2VzcyIsInJlZnJlc2giLCJkaWN0Iiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwianNvbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();