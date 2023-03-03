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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_img_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/img/Logo.svg */ \"./public/img/Logo.svg\");\n/* harmony import */ var _public_img_lang_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../../public/img/lang.svg */ \"./public/img/lang.svg\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/Button */ \"./src/components/ui/Button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Network */ \"./src/components/Home/Network.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [lan, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const [hasQueried, setHasQueried] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [tokenDataObjects, setTokenDataObjects] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [nameid, setName] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        checkWallet();\n    }, []);\n    const checkWallet = ()=>{\n    // setWalletAddress(accounts[0])\n    };\n    const connectMetamask = async ()=>{\n        const baseChainID = 84531;\n        if ( true && typeof window.ethereum != \"undefined\") {\n            try {\n                /* MetaMask is installed */ const provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.BrowserProvider(window.ethereum, \"\");\n                const network = await provider.getNetwork();\n                // if (network.chainId !== 84531) { // if network Base\n                //   await provider.send('wallet_switchEthereumChain', [{ chainId: `0x${baseChainID.toString(16)}` }])\n                // }\n                // setWalletAddress(provider[0]);\n                // setUserAddress(provider[0]);\n                console.log(provider[0]);\n            } catch (err) {\n                console.error(err.message);\n            }\n        } else {\n            /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-skin-lightDark hidden md:block max-w-[1764px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex  mx-auto items-center justify-between px-6 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"brand\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_img_Logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"decsolar energy\",\n                        width: 120,\n                        height: 60\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"links flex items-center gap-x-7\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex  gap-x-6 items-center\",\n                            children: _data_data__WEBPACK_IMPORTED_MODULE_6__.navLinks.map((link, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \" \".concat(router.pathname === link.slug ? \"text-skin-green\" : \"\", \" font-poppins hover:text-skin-green transition duration-300 ease-in-out text-slate-50 text-sm\"),\n                                        href: link.slug,\n                                        children: link.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, i, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mx-4 items-center gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _public_img_lang_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    width: 25,\n                                    height: 25,\n                                    alt: \"english\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: (e)=>setLang(e.target.value),\n                                    value: lan,\n                                    className: \"border-0 text-slate-50 focus:outline-none font-poppins text-[18px] bg-transparent\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            className: \"text-white  border-0 focus:border-0 bg-skin-lightDark\",\n                                            value: \"ES\",\n                                            children: \"ES\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            className: \"text-white  border-0 focus:border-0 bg-skin-lightDark\",\n                                            value: \"CS\",\n                                            children: \"CS\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"btn-group flex items-center gap-x-2\",\n                            children: [\n                                !walletAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: connectMetamask,\n                                    className: \"px-2.5 py-2.5 rounded-lg bg-[#0052fe] hover:scale-[1.05] transition\",\n                                    name: \"Create Account\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Connect Metamask\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 31\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: connectMetamask,\n                                    className: \"px-2.5 py-2.5 rounded-lg bg-[#0052fe] hover:scale-[1.05] transition\",\n                                    name: \"Create Account\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: walletAddress\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Network__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    children: \" \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Navbar.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"8CViId+qwaiTMgYJ3EgreEo332Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDckIsV0FBVTs0Q0FDVm9CLE9BQU87c0RBQ1I7Ozs7OztzREFHRCw4REFBQ0M7NENBQ0NyQixXQUFVOzRDQUNWb0IsT0FBTztzREFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtMLDhEQUFDbEI7NEJBQUlGLFdBQVU7O2dDQUNaLENBQUNsQiw4QkFBZ0IsOERBQUN3QztvQ0FBT0MsU0FBU3BDO29DQUFpQmEsV0FBVTtvQ0FBc0VlLE1BQUs7OENBQ3ZJLDRFQUFDUztrREFBSzs7Ozs7Ozs7Ozs4REFHUiw4REFBQ0Y7b0NBQU9DLFNBQVNwQztvQ0FBaUJhLFdBQVU7b0NBQXNFZSxNQUFLOzhDQUN2SCw0RUFBQ1M7a0RBQU0xQzs7Ozs7Ozs7Ozs2Q0FDRTs4Q0FFVCw4REFBQ2pCLGdEQUFPQTs4Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0F0R01DOztRQUNXUixrREFBU0E7OztLQURwQlE7QUF3R04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9OYXZiYXIuanN4PzZiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGV0aGVycywgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExvZ28gZnJvbSAnQC8uLi8uLi9wdWJsaWMvaW1nL0xvZ28uc3ZnJztcbmltcG9ydCBMYW5ndWFnckljb24gZnJvbSAnQC8uLi8uLi9wdWJsaWMvaW1nL2xhbmcuc3ZnJztcbmltcG9ydCB7IG5hdkxpbmtzIH0gZnJvbSAnQC9kYXRhL2RhdGEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91aS9CdXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4vTmV0d29yayc7XG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbGFuLCBzZXRMYW5nXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJBZGRyZXNzLCBzZXRVc2VyQWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hhc1F1ZXJpZWQsIHNldEhhc1F1ZXJpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW5EYXRhT2JqZWN0cywgc2V0VG9rZW5EYXRhT2JqZWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZWlkLHNldE5hbWVdID0gdXNlU3RhdGUoKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tXYWxsZXQoKVxuICB9LCBbXSlcbiAgY29uc3QgY2hlY2tXYWxsZXQgPSAoKSA9PiB7XG4gICAgLy8gc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSlcbiAgfSBcbiAgY29uc3QgY29ubmVjdE1ldGFtYXNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJhc2VDaGFpbklEID0gODQ1MzFcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICB0cnkge1xuICAgICAgICAvKiBNZXRhTWFzayBpcyBpbnN0YWxsZWQgKi9cbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSwgXCJcIilcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgICAgIC8vIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDg0NTMxKSB7IC8vIGlmIG5ldHdvcmsgQmFzZVxuICAgICAgICAvLyAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJywgW3sgY2hhaW5JZDogYDB4JHtiYXNlQ2hhaW5JRC50b1N0cmluZygxNil9YCB9XSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBzZXRXYWxsZXRBZGRyZXNzKHByb3ZpZGVyWzBdKTtcblxuICAgICAgICAvLyBzZXRVc2VyQWRkcmVzcyhwcm92aWRlclswXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3ZpZGVyWzBdKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQgKi9cbiAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctc2tpbi1saWdodERhcmsgaGlkZGVuIG1kOmJsb2NrIG1heC13LVsxNzY0cHhdIG14LWF1dG9cIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCAgbXgtYXV0byBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTYgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9XCJkZWNzb2xhciBlbmVyZ3lcIiB3aWR0aD17MTIwfSBoZWlnaHQ9ezYwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rcyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC03XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggIGdhcC14LTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBsaW5rLnNsdWcgPyAndGV4dC1za2luLWdyZWVuJyA6ICcnXG4gICAgICAgICAgICAgICAgICB9IGZvbnQtcG9wcGlucyBob3Zlcjp0ZXh0LXNraW4tZ3JlZW4gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdGV4dC1zbGF0ZS01MCB0ZXh0LXNtYH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuc2x1Z31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtNCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xhbmd1YWdySWNvbn0gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSBhbHQ9XCJlbmdsaXNoXCIgLz5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TGFuZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtsYW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIHRleHQtc2xhdGUtNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvbnQtcG9wcGlucyB0ZXh0LVsxOHB4XSBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlICBib3JkZXItMCBmb2N1czpib3JkZXItMCBiZy1za2luLWxpZ2h0RGFya1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9eydFUyd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFU1xuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgIGJvcmRlci0wIGZvY3VzOmJvcmRlci0wIGJnLXNraW4tbGlnaHREYXJrXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17J0NTJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENTXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgeyF3YWxsZXRBZGRyZXNzID8gPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0TWV0YW1hc2t9IGNsYXNzTmFtZT0ncHgtMi41IHB5LTIuNSByb3VuZGVkLWxnIGJnLVsjMDA1MmZlXSBob3ZlcjpzY2FsZS1bMS4wNV0gdHJhbnNpdGlvbicgbmFtZT1cIkNyZWF0ZSBBY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxzcGFuPkNvbm5lY3QgTWV0YW1hc2s8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj4gXG4gICAgICAgICAgICA6ICBcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdE1ldGFtYXNrfSBjbGFzc05hbWU9J3B4LTIuNSBweS0yLjUgcm91bmRlZC1sZyBiZy1bIzAwNTJmZV0gaG92ZXI6c2NhbGUtWzEuMDVdIHRyYW5zaXRpb24nIG5hbWU9XCJDcmVhdGUgQWNjb3VudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3dhbGxldEFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+IH1cblxuICAgICAgICAgICAgPE5ldHdvcms+IDwvTmV0d29yaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJldGhlcnMiLCJCcm93c2VyUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJMb2dvIiwiTGFuZ3VhZ3JJY29uIiwibmF2TGlua3MiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5ldHdvcmsiLCJOYXZiYXIiLCJyb3V0ZXIiLCJsYW4iLCJzZXRMYW5nIiwidXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzcyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYXNRdWVyaWVkIiwic2V0SGFzUXVlcmllZCIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInRva2VuRGF0YU9iamVjdHMiLCJzZXRUb2tlbkRhdGFPYmplY3RzIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJuYW1laWQiLCJzZXROYW1lIiwiY2hlY2tXYWxsZXQiLCJjb25uZWN0TWV0YW1hc2siLCJiYXNlQ2hhaW5JRCIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJuZXR3b3JrIiwiZ2V0TmV0d29yayIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibWFwIiwibGluayIsImkiLCJsaSIsInBhdGhuYW1lIiwic2x1ZyIsImhyZWYiLCJuYW1lIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/Navbar.jsx\n"));

/***/ })

});