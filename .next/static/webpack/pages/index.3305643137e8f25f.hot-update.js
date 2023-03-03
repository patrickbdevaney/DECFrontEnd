"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Home/Navbar.jsx":
/*!****************************************!*\
  !*** ./src/components/Home/Navbar.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_img_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/img/Logo.svg */ \"./public/img/Logo.svg\");\n/* harmony import */ var _public_img_lang_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../../public/img/lang.svg */ \"./public/img/lang.svg\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/Button */ \"./src/components/ui/Button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Network */ \"./src/components/Home/Network.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [lan, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const connectMetamask = async ()=>{\n        if ( true && typeof window.ethereum != \"undefined\") {\n            try {\n                /* MetaMask is installed */ const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                const network = await provider.getNetwork();\n                if (network.chainId !== 84531 && jsNetwork == \"Base\") {\n                    await provider.send(\"wallet_switchEthereumChain\", [\n                        {\n                            chainId: \"0x84351\"\n                        }\n                    ]);\n                }\n                setWalletAddress(accounts[0]);\n                setUserAddress(accounts[0]);\n                console.log(accounts[0]);\n            } catch (err) {\n                console.error(err.message);\n            }\n        } else {\n            /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-skin-lightDark hidden md:block max-w-[1764px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex  mx-auto items-center justify-between px-6 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"brand\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_img_Logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"decsolar energy\",\n                        width: 120,\n                        height: 60\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"links flex items-center gap-x-7\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex  gap-x-6 items-center\",\n                            children: _data_data__WEBPACK_IMPORTED_MODULE_6__.navLinks.map((link, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \" \".concat(router.pathname === link.slug ? \"text-skin-green\" : \"\", \" font-poppins hover:text-skin-green transition duration-300 ease-in-out text-slate-50 text-sm\"),\n                                        href: link.slug,\n                                        children: link.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, i, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mx-4 items-center gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _public_img_lang_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    width: 25,\n                                    height: 25,\n                                    alt: \"english\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: (e)=>setLang(e.target.value),\n                                    defaultValue: lan,\n                                    className: \"border-0 text-slate-50 focus:outline-none font-poppins text-[18px] bg-transparent\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            className: \"text-white  border-0 focus:border-0 bg-skin-lightDark\",\n                                            selected: true,\n                                            value: \"ES\",\n                                            children: \"ES\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            className: \"text-white  border-0 focus:border-0 bg-skin-lightDark\",\n                                            value: \"CS\",\n                                            children: \"CS\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"btn-group flex items-center gap-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: connectMetamask,\n                                    className: \"px-2.5 py-2.5 rounded-lg bg-[#0052fe] \",\n                                    name: \"Create Account\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Connect Metamask\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Network__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    children: \" \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"+Lcao/HaQV7HLKBJiScZSAb6E+8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL0hvbWUvTmF2YmFyLmpzeD82YjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTG9nbyBmcm9tICdALy4uLy4uL3B1YmxpYy9pbWcvTG9nby5zdmcnO1xuaW1wb3J0IExhbmd1YWdySWNvbiBmcm9tICdALy4uLy4uL3B1YmxpYy9pbWcvbGFuZy5zdmcnO1xuaW1wb3J0IHsgbmF2TGlua3MgfSBmcm9tICdAL2RhdGEvZGF0YSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yaydcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsYW4sIHNldExhbmddID0gdXNlU3RhdGUoJycpO1xuXG5cblxuICBcbiAgY29uc3QgY29ubmVjdE1ldGFtYXNrID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLyogTWV0YU1hc2sgaXMgaW5zdGFsbGVkICovXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDg0NTMxICYmIGpzTmV0d29yayA9PSAnQmFzZScpIHsgLy8gaWYgbmV0d29yayBCYXNlXG4gICAgICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZCgnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLCBbeyBjaGFpbklkOiAnMHg4NDM1MScgfV0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgIHNldFVzZXJBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgLyogTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCAqL1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1za2luLWxpZ2h0RGFyayBoaWRkZW4gbWQ6YmxvY2sgbWF4LXctWzE3NjRweF0gbXgtYXV0b1wiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4ICBteC1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD1cImRlY3NvbGFyIGVuZXJneVwiIHdpZHRoPXsxMjB9IGhlaWdodD17NjB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTdcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCAgZ2FwLXgtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmssIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsuc2x1ZyA/ICd0ZXh0LXNraW4tZ3JlZW4nIDogJydcbiAgICAgICAgICAgICAgICAgIH0gZm9udC1wb3BwaW5zIGhvdmVyOnRleHQtc2tpbi1ncmVlbiB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0ZXh0LXNsYXRlLTUwIHRleHQtc21gfVxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5zbHVnfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC00IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17TGFuZ3VhZ3JJY29ufSB3aWR0aD17MjV9IGhlaWdodD17MjV9IGFsdD1cImVuZ2xpc2hcIiAvPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMYW5nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsYW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIHRleHQtc2xhdGUtNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvbnQtcG9wcGlucyB0ZXh0LVsxOHB4XSBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlICBib3JkZXItMCBmb2N1czpib3JkZXItMCBiZy1za2luLWxpZ2h0RGFya1wiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB2YWx1ZT17J0VTJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVTXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSAgYm9yZGVyLTAgZm9jdXM6Ym9yZGVyLTAgYmctc2tpbi1saWdodERhcmtcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsnQ1MnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ1NcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RNZXRhbWFza30gY2xhc3NOYW1lPSdweC0yLjUgcHktMi41IHJvdW5kZWQtbGcgYmctWyMwMDUyZmVdICcgbmFtZT1cIkNyZWF0ZSBBY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxzcGFuPkNvbm5lY3QgTWV0YW1hc2s8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPE5ldHdvcms+IDwvTmV0d29yaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJMb2dvIiwiTGFuZ3VhZ3JJY29uIiwibmF2TGlua3MiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIk5ldHdvcmsiLCJOYXZiYXIiLCJyb3V0ZXIiLCJsYW4iLCJzZXRMYW5nIiwiY29ubmVjdE1ldGFtYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJuZXR3b3JrIiwicHJvdmlkZXIiLCJnZXROZXR3b3JrIiwiY2hhaW5JZCIsImpzTmV0d29yayIsInNlbmQiLCJzZXRXYWxsZXRBZGRyZXNzIiwic2V0VXNlckFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsIm1hcCIsImxpbmsiLCJpIiwibGkiLCJwYXRobmFtZSIsInNsdWciLCJocmVmIiwibmFtZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/Navbar.jsx\n"));

/***/ })

});