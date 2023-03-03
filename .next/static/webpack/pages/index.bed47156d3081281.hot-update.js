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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Network; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Network() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Base\");\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hasQueried, setHasQueried] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tokenDataObjects, setTokenDataObjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameid, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function changeNetwork(network) {\n        if (network == \"Base\") {\n            let chainId = \"\";\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const provider1 = await new BrowserProvider({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const walletNetwork = await provider1.getNetwork();\n                    if (walletNetwork.chainId !== 84531 && network == \"Base\") {\n                        await ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.send(\"wallet_switchEthereumChain\", [\n                            {\n                                chainId: \"0x84351\"\n                            }\n                        ]);\n                    }\n                    setWalletAddress(accounts[0]);\n                    setUserAddress(accounts[0]);\n                    console.log(accounts[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n        if (network == \"Polygon\") {\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const accounts1 = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const network = await provider.getNetwork();\n                    if (network.chainId !== 80001 && network == \"Polygon\") {\n                        await provider.send(\"wallet_switchEthereumChain\", [\n                            {\n                                chainId: \"0x80001\"\n                            }\n                        ]);\n                    }\n                    setWalletAddress(accounts1[0]);\n                    setUserAddress(accounts1[0]);\n                    console.log(accounts1[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n    }\n    function expandNetworks() {\n        setExpanded(!expanded);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-[150px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>expandNetworks(),\n                    className: \" w-full px-2 py-2  border rounded-lg border-[#DDDBE6] flex flex-wrap gap-2 font-bold justify-between items-center hover:scale-[1.1] transition\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: network == \"Base\" ? \"./coinbase-logo.svg\" : network == \"Polygon\" ? \"./polygon-logo.png\" : \"\",\n                                    className: \"w-5 h-5 mt-0.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: network\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./carrot.svg\",\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this),\n                expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"animate-fade-in-up absolute flex w-full flex-column  border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full gap-2 font-bold rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: (e)=>changeNetwork(\"Base\"),\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"transition flex gap-2 px-2 py-2 cursor-pointer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"./coinbase-logo.svg\",\n                                                    className: \"w-5 h-5 mt-0.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Base\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (e)=>changeNetwork(\"Polygon\"),\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex gap-2 px-2 py-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./polygon-logo.png\",\n                                                className: \"w-5 h-5 mt-0.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Polygon\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 30\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n            lineNumber: 81,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Network, \"8LK6208NEqY65mpLYQd0NAgbCuY=\");\n_c = Network;\nvar _c;\n$RefreshReg$(_c, \"Network\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnBDLFlBQVksQ0FBQ0Q7SUFDakI7SUFDQSxxQkFFQztrQkFDRyw0RUFBQ3NDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBT0MsU0FBUyxJQUFJSjtvQkFBa0JFLFdBQVU7O3NDQUU3Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRztvQ0FBSUMsS0FBS3pDLFdBQVcsU0FBUyx3QkFBd0JBLFdBQVcsWUFBWSx1QkFBdUIsRUFBRTtvQ0FBRXFDLFdBQVU7Ozs7Ozs4Q0FDbEgsOERBQUNLOzhDQUFNMUM7Ozs7Ozs7Ozs7OztzQ0FFWCw4REFBQ3dDOzRCQUFJQyxLQUFJOzRCQUFlSixXQUFVOzs7Ozs7Ozs7Ozs7Z0JBRXJDdkMsMEJBQ0QsOERBQUNzQztvQkFBSUMsV0FBVTs4QkFFWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNNOzRCQUFHTixXQUFVOzs4Q0FFViw4REFBQ087b0NBQUdQLFdBQVU7OENBQ1YsNEVBQUNDO3dDQUFPQyxTQUFTLENBQUNNLElBQUkzQixjQUFjO3dDQUFTbUIsV0FBVTtrREFDbkQsNEVBQUNLOzRDQUFLTCxXQUFVOzs4REFDWiw4REFBQ0c7b0RBQUlDLEtBQUk7b0RBQXNCSixXQUFVOzs7Ozs7OERBQ3pDLDhEQUFDSzs4REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLbEIsOERBQUNFO29DQUFHTCxTQUFTLENBQUNNLElBQUkzQixjQUFjO29DQUFZbUIsV0FBVTs4Q0FDakQsNEVBQUNLO3dDQUFLTCxXQUFVOzswREFDYiw4REFBQ0c7Z0RBQUlDLEtBQUk7Z0RBQXFCSixXQUFVOzs7Ozs7MERBQ3hDLDhEQUFDSzswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN0QyxDQUFDO0dBcEh1QjdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUvTmV0d29yay5qc3g/MWQ5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycywgYnJvd3NlclByb3ZpZGVyIH0gZnJvbSAnZXRoZXJzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV0d29yaygpIHtcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuZXR3b3JrLCBzZXROZXR3b3JrXSA9IHVzZVN0YXRlKCdCYXNlJylcblxuICAgIGNvbnN0IFt1c2VyQWRkcmVzcywgc2V0VXNlckFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtoYXNRdWVyaWVkLCBzZXRIYXNRdWVyaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b2tlbkRhdGFPYmplY3RzLCBzZXRUb2tlbkRhdGFPYmplY3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmFtZWlkLHNldE5hbWVdID0gdXNlU3RhdGUoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZU5ldHdvcmsobmV0d29yaykge1xuICAgICAgICBpZiAobmV0d29yayA9PSAnQmFzZScpIHtcbiAgICAgICAgICAgIGxldCBjaGFpbklkID0gJydcbiAgICAgICAgICAgIHNldE5ldHdvcmsobmV0d29yaylcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvKiBNZXRhTWFzayBpcyBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgbmV3IEJyb3dzZXJQcm92aWRlcih7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHdhbGxldE5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKClcbiAgICAgICAgICAgICAgICAgIGlmICh3YWxsZXROZXR3b3JrLmNoYWluSWQgIT09IDg0NTMxICYmIG5ldHdvcmsgPT0gJ0Jhc2UnKSB7IC8vIGlmIG5ldHdvcmsgQmFzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBldGhlcnMuc2VuZCgnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLCBbeyBjaGFpbklkOiAnMHg4NDM1MScgfV0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiBNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkICovXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9IGlmIChuZXR3b3JrID09ICdQb2x5Z29uJykge1xuICAgICAgICAgICAgc2V0TmV0d29yayhuZXR3b3JrKVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIGluc3RhbGxlZCAqL1xuICAgICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKClcbiAgICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDgwMDAxICYmIG5ldHdvcmsgPT0gJ1BvbHlnb24nKSB7IC8vIGlmIG5ldHdvcmsgQmFzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKCd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsIFt7IGNoYWluSWQ6ICcweDgwMDAxJyB9XSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgc2V0VXNlckFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZXhwYW5kTmV0d29ya3MoKSB7XG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZClcbiAgICB9XG4gICAgcmV0dXJuIChcblxuICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLXctWzE1MHB4XSByZWxhdGl2ZSc+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5leHBhbmROZXR3b3JrcygpfSBjbGFzc05hbWU9JyB3LWZ1bGwgcHgtMiBweS0yIFxuICAgICAgICAgICAgYm9yZGVyIHJvdW5kZWQtbGcgYm9yZGVyLVsjREREQkU2XSBmbGV4IGZsZXgtd3JhcCBnYXAtMiBmb250LWJvbGQganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBob3ZlcjpzY2FsZS1bMS4xXSB0cmFuc2l0aW9uJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXR3b3JrID09ICdCYXNlJyA/ICcuL2NvaW5iYXNlLWxvZ28uc3ZnJyA6IG5ldHdvcmsgPT0gJ1BvbHlnb24nID8gJy4vcG9seWdvbi1sb2dvLnBuZycgOiAnJ30gY2xhc3NOYW1lPSd3LTUgaC01IG10LTAuNSc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXR3b3JrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9jYXJyb3Quc3ZnJyBjbGFzc05hbWU9J3ctMyBoLTMnPjwvaW1nPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hdGUtZmFkZS1pbi11cCBhYnNvbHV0ZSBmbGV4IHctZnVsbCBmbGV4LWNvbHVtbiBcbiAgICAgICAgICAgIGJvcmRlciBib3JkZXItWyNkZGRCZTZdIHJvdW5kZWQtbGcgZmxleC13cmFwIGJnLVsjRjVGNUY1XSBkYXJrOmJnLVsjMTYxNjFkXSBtdC0yJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgZ2FwLTIgZm9udC1ib2xkIHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItWyNkZGRCZTZdIHctZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+Y2hhbmdlTmV0d29yaygnQmFzZScpfSBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZmxleCBnYXAtMiBweC0yIHB5LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2NvaW5iYXNlLWxvZ28uc3ZnJyBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZSk9PmNoYW5nZU5ldHdvcmsoJ1BvbHlnb24nKX0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjZGRkQmU2XSB3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgcHgtMiBweS0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3BvbHlnb24tbG9nby5wbmcnIGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qb2x5Z29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIG9uQ2xpY2s9eyhlKT0+ZXhwYW5kTmV0d29ya3N9IGNsYXNzTmFtZT1cInctZnVsbCBob3ZlcjpjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHB4LTIgcHktMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9ibmItbG9nby5wbmcnIGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CTkI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz4pXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiYnJvd3NlclByb3ZpZGVyIiwiTmV0d29yayIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsInVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3MiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFzUXVlcmllZCIsInNldEhhc1F1ZXJpZWQiLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJ0b2tlbkRhdGFPYmplY3RzIiwic2V0VG9rZW5EYXRhT2JqZWN0cyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwibmFtZWlkIiwic2V0TmFtZSIsImNoYW5nZU5ldHdvcmsiLCJjaGFpbklkIiwid2luZG93IiwiZXRoZXJldW0iLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsIm1ldGhvZCIsIndhbGxldE5ldHdvcmsiLCJnZXROZXR3b3JrIiwic2VuZCIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwibWVzc2FnZSIsInJlcXVlc3QiLCJleHBhbmROZXR3b3JrcyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJzcGFuIiwidWwiLCJsaSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/Network.jsx\n"));

/***/ })

});