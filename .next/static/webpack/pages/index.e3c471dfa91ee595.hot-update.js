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

/***/ "./src/components/Home/Network.jsx":
/*!*****************************************!*\
  !*** ./src/components/Home/Network.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Network; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Network() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Base\");\n    async function changeNetwork(network) {\n        if (network == \"Base\") {\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const network = await provider.getNetwork();\n                    if (network.chainId !== 84531 && network == \"Base\") {\n                        await provider.send(\"wallet_switchEthereumChain\", [\n                            {\n                                chainId: \"0x84351\"\n                            }\n                        ]);\n                    }\n                    setWalletAddress(accounts[0]);\n                    setUserAddress(accounts[0]);\n                    console.log(accounts[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n        if (network == \"Polygon\") {}\n    }\n    function expandNetworks() {\n        setExpanded(!expanded);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-[150px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>expandNetworks(),\n                    className: \" w-full px-2 py-2  border rounded-lg border-[#DDDBE6] flex flex-wrap gap-2 font-bold justify-between items-center hover:scale-[1.1] transition\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./coinbase-logo.svg\",\n                                    className: \"w-5 h-5 mt-0.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: network\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./carrot.svg\",\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this),\n                expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"animate-fade-in-up absolute flex w-full flex-column  border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full gap-2 font-bold rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: (e)=>changeNetwork(\"Base\"),\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"transition flex gap-2 px-2 py-2 cursor-pointer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"./coinbase-logo.svg\",\n                                                    className: \"w-5 h-5 mt-0.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Base\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (e)=>changeNetwork(\"Polygon\"),\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex gap-2 px-2 py-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./polygon-logo.png\",\n                                                className: \"w-5 h-5 mt-0.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Polygon\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 30\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Network, \"RPCwjnJHreFgvJqGqWBwli2NpFM=\");\n_c = Network;\nvar _c;\n$RefreshReg$(_c, \"Network\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL05ldHdvcmsuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFLM0IsU0FBU0UsVUFBVTs7SUFDOUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVPLGNBQWNGLE9BQU8sRUFBRTtRQUNsQyxJQUFJQSxXQUFXLFFBQVE7WUFDbkJDLFdBQVdEO1lBRVgsSUFBSSxLQUE0QixJQUFJLE9BQU9HLE9BQU9DLFFBQVEsSUFBSSxhQUFhO2dCQUV2RSxJQUFJO29CQUNGLHlCQUF5QixHQUN6QixNQUFNQyxXQUFXLE1BQU1GLE9BQU9DLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO3dCQUM3Q0MsUUFBUTtvQkFDVjtvQkFDQSxNQUFNUCxVQUFVLE1BQU1RLFNBQVNDLFVBQVU7b0JBQ3pDLElBQUlULFFBQVFVLE9BQU8sS0FBSyxTQUFTVixXQUFXLFFBQVE7d0JBQ2xELE1BQU1RLFNBQVNHLElBQUksQ0FBQyw4QkFBOEI7NEJBQUM7Z0NBQUVELFNBQVM7NEJBQVU7eUJBQUU7b0JBQzVFLENBQUM7b0JBQ0RFLGlCQUFpQlAsUUFBUSxDQUFDLEVBQUU7b0JBQzVCUSxlQUFlUixRQUFRLENBQUMsRUFBRTtvQkFDMUJTLFFBQVFDLEdBQUcsQ0FBQ1YsUUFBUSxDQUFDLEVBQUU7Z0JBQ3pCLEVBQUUsT0FBT1csS0FBSztvQkFDWkYsUUFBUUcsS0FBSyxDQUFDRCxJQUFJRSxPQUFPO2dCQUMzQjtZQUdGLE9BQU87Z0JBQ0wsNkJBQTZCLEdBQzdCSixRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUlmLFdBQVcsV0FBVyxDQUU1QixDQUFDO0lBQ0w7SUFDQSxTQUFTbUIsaUJBQWlCO1FBQ3RCcEIsWUFBWSxDQUFDRDtJQUNqQjtJQUNBLHFCQUVDO2tCQUNHLDRFQUFDc0I7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFPQyxTQUFTLElBQUlKO29CQUFrQkUsV0FBVTs7c0NBRTdDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNHO29DQUFJQyxLQUFJO29DQUFzQkosV0FBVTs7Ozs7OzhDQUN6Qyw4REFBQ0s7OENBQU0xQjs7Ozs7Ozs7Ozs7O3NDQUVYLDhEQUFDd0I7NEJBQUlDLEtBQUk7NEJBQWVKLFdBQVU7Ozs7Ozs7Ozs7OztnQkFFckN2QiwwQkFDRCw4REFBQ3NCO29CQUFJQyxXQUFVOzhCQUVYLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ007NEJBQUdOLFdBQVU7OzhDQUVWLDhEQUFDTztvQ0FBR1AsV0FBVTs4Q0FDViw0RUFBQ0M7d0NBQU9DLFNBQVMsQ0FBQ00sSUFBSTNCLGNBQWM7d0NBQVNtQixXQUFVO2tEQUNuRCw0RUFBQ0s7NENBQUtMLFdBQVU7OzhEQUNaLDhEQUFDRztvREFBSUMsS0FBSTtvREFBc0JKLFdBQVU7Ozs7Ozs4REFDekMsOERBQUNLOzhEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtsQiw4REFBQ0U7b0NBQUdMLFNBQVMsQ0FBQ00sSUFBSTNCLGNBQWM7b0NBQVltQixXQUFVOzhDQUNqRCw0RUFBQ0s7d0NBQUtMLFdBQVU7OzBEQUNiLDhEQUFDRztnREFBSUMsS0FBSTtnREFBcUJKLFdBQVU7Ozs7OzswREFDeEMsOERBQUNLOzBEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RDLENBQUM7R0FsRnVCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXR3b3JrLmpzeD8xZDk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXR3b3JrKCkge1xuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25ldHdvcmssIHNldE5ldHdvcmtdID0gdXNlU3RhdGUoJ0Jhc2UnKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlTmV0d29yayhuZXR3b3JrKSB7XG4gICAgICAgIGlmIChuZXR3b3JrID09ICdCYXNlJykge1xuICAgICAgICAgICAgc2V0TmV0d29yayhuZXR3b3JrKVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIGluc3RhbGxlZCAqL1xuICAgICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKClcbiAgICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDg0NTMxICYmIG5ldHdvcmsgPT0gJ0Jhc2UnKSB7IC8vIGlmIG5ldHdvcmsgQmFzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKCd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsIFt7IGNoYWluSWQ6ICcweDg0MzUxJyB9XSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgc2V0VXNlckFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gaWYgKG5ldHdvcmsgPT0gJ1BvbHlnb24nKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBleHBhbmROZXR3b3JrcygpIHtcbiAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKVxuICAgIH1cbiAgICByZXR1cm4gKFxuXG4gICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4tdy1bMTUwcHhdIHJlbGF0aXZlJz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmV4cGFuZE5ldHdvcmtzKCl9IGNsYXNzTmFtZT0nIHctZnVsbCBweC0yIHB5LTIgXG4gICAgICAgICAgICBib3JkZXIgcm91bmRlZC1sZyBib3JkZXItWyNERERCRTZdIGZsZXggZmxleC13cmFwIGdhcC0yIGZvbnQtYm9sZCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGhvdmVyOnNjYWxlLVsxLjFdIHRyYW5zaXRpb24nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vY29pbmJhc2UtbG9nby5zdmcnIGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmV0d29ya308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vY2Fycm90LnN2ZycgY2xhc3NOYW1lPSd3LTMgaC0zJz48L2ltZz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2V4cGFuZGVkICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRlLWZhZGUtaW4tdXAgYWJzb2x1dGUgZmxleCB3LWZ1bGwgZmxleC1jb2x1bW4gXG4gICAgICAgICAgICBib3JkZXIgYm9yZGVyLVsjZGRkQmU2XSByb3VuZGVkLWxnIGZsZXgtd3JhcCBiZy1bI0Y1RjVGNV0gZGFyazpiZy1bIzE2MTYxZF0gbXQtMic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGdhcC0yIGZvbnQtYm9sZCByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjZGRkQmU2XSB3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmNoYW5nZU5ldHdvcmsoJ0Jhc2UnKX0gY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGZsZXggZ2FwLTIgcHgtMiBweS0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9jb2luYmFzZS1sb2dvLnN2ZycgY2xhc3NOYW1lPSd3LTUgaC01IG10LTAuNSc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KGUpPT5jaGFuZ2VOZXR3b3JrKCdQb2x5Z29uJyl9IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1bI2RkZEJlNl0gdy1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHB4LTIgcHktMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9wb2x5Z29uLWxvZ28ucG5nJyBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UG9seWdvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoZSk9PmV4cGFuZE5ldHdvcmtzfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaG92ZXI6Y3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBweC0yIHB5LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vYm5iLWxvZ28ucG5nJyBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qk5CPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+KVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5ldHdvcmsiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwibmV0d29yayIsInNldE5ldHdvcmsiLCJjaGFuZ2VOZXR3b3JrIiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsImdldE5ldHdvcmsiLCJjaGFpbklkIiwic2VuZCIsInNldFdhbGxldEFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJleHBhbmROZXR3b3JrcyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJzcGFuIiwidWwiLCJsaSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/Network.jsx\n"));

/***/ })

});