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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Network; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Network() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Base\");\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hasQueried, setHasQueried] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tokenDataObjects, setTokenDataObjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameid, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function changeNetwork(network) {\n        if (network == \"Base\") {\n            let chainId = \"84531\";\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const provider1 = await new BrowserProvider({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const walletNetwork = await provider1.getNetwork();\n                    if (walletNetwork.chainId !== 84531 && network == \"Base\") {\n                        try {\n                            provider1.send(\"wallet_switchEthereumChain\", [\n                                {\n                                    chainId: \"0x\".concat(chainId.toString(16))\n                                }\n                            ]);\n                        } catch (error) {\n                            if (error.code === 4902) try {\n                                provider1.send(\"wallet_addEthereumChain\", [\n                                    {\n                                        chainId: \"0x\".concat(chainId.toString(16)),\n                                        chainName: \"Base Testnet\",\n                                        nativeCurrency: \"ETH\",\n                                        rpcUrls: [\n                                            \"\"\n                                        ],\n                                        rpcUrls: [\n                                            \"\"\n                                        ],\n                                        blockExplorerUrls: [\n                                            \"https://goerli.basescan.org\"\n                                        ]\n                                    }\n                                ]);\n                            } catch (error) {\n                                console.log(\"Error Setting Network\", error);\n                            }\n                        }\n                    }\n                    setWalletAddress(accounts[0]);\n                    setUserAddress(accounts[0]);\n                    console.log(accounts[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n        if (network == \"Polygon\") {\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const accounts1 = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const network = await provider.getNetwork();\n                    if (network.chainId !== 80001 && network == \"Polygon\") {\n                        await provider.send(\"wallet_switchEthereumChain\", [\n                            {\n                                chainId: \"0x80001\"\n                            }\n                        ]);\n                    }\n                    setWalletAddress(accounts1[0]);\n                    setUserAddress(accounts1[0]);\n                    console.log(accounts1[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n    }\n    function expandNetworks() {\n        setExpanded(!expanded);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-[150px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>expandNetworks(),\n                    className: \" w-full px-2 py-2  border rounded-lg border-[#DDDBE6] flex flex-wrap gap-2 font-bold justify-between items-center hover:scale-[1.1] transition\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: network == \"Base\" ? \"./coinbase-logo.svg\" : network == \"Polygon\" ? \"./polygon-logo.png\" : \"\",\n                                    className: \"w-5 h-5 mt-0.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: network\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./carrot.svg\",\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 108,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 13\n                }, this),\n                expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"animate-fade-in-up absolute flex w-full flex-column  border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full gap-2 font-bold rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: (e)=>changeNetwork(\"Base\"),\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"transition flex gap-2 px-2 py-2 cursor-pointer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"./coinbase-logo.svg\",\n                                                    className: \"w-5 h-5 mt-0.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Base\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (e)=>changeNetwork(\"Polygon\"),\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex gap-2 px-2 py-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./polygon-logo.png\",\n                                                className: \"w-5 h-5 mt-0.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Polygon\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 30\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n            lineNumber: 101,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Network, \"8LK6208NEqY65mpLYQd0NAgbCuY=\");\n_c = Network;\nvar _c;\n$RefreshReg$(_c, \"Network\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhEQUN6Qyw4REFBQ0s7OERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS2xCLDhEQUFDRTtvQ0FBR0wsU0FBUyxDQUFDTSxJQUFJakMsY0FBYztvQ0FBWXlCLFdBQVU7OENBQ2pELDRFQUFDSzt3Q0FBS0wsV0FBVTs7MERBQ2IsOERBQUNHO2dEQUFJQyxLQUFJO2dEQUFxQkosV0FBVTs7Ozs7OzBEQUN4Qyw4REFBQ0s7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjdEMsQ0FBQztHQXhJdUJuRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL05ldHdvcmsuanN4PzFkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldGhlcnMsIGJyb3dzZXJQcm92aWRlciB9IGZyb20gJ2V0aGVycydcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldHdvcmsoKSB7XG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbmV0d29yaywgc2V0TmV0d29ya10gPSB1c2VTdGF0ZSgnQmFzZScpXG5cbiAgICBjb25zdCBbdXNlckFkZHJlc3MsIHNldFVzZXJBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaGFzUXVlcmllZCwgc2V0SGFzUXVlcmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9rZW5EYXRhT2JqZWN0cywgc2V0VG9rZW5EYXRhT2JqZWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW25hbWVpZCxzZXROYW1lXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VOZXR3b3JrKG5ldHdvcmspIHtcbiAgICAgICAgaWYgKG5ldHdvcmsgPT0gJ0Jhc2UnKSB7XG4gICAgICAgICAgICBsZXQgY2hhaW5JZCA9ICc4NDUzMSc7XG4gICAgICAgICAgICBzZXROZXR3b3JrKG5ldHdvcmspXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgLyogTWV0YU1hc2sgaXMgaW5zdGFsbGVkICovXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IG5ldyBCcm93c2VyUHJvdmlkZXIoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXROZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgICAgICAgICAgICAgICBpZiAod2FsbGV0TmV0d29yay5jaGFpbklkICE9PSA4NDUzMSAmJiBuZXR3b3JrID09ICdCYXNlJykgeyAvLyBpZiBuZXR3b3JrIEJhc2VcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnNlbmQoJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoYWluSWQ6IGAweCR7Y2hhaW5JZC50b1N0cmluZygxNil9YCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IDQ5MDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuc2VuZCgnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6IGAweCR7Y2hhaW5JZC50b1N0cmluZygxNil9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiBcIkJhc2UgVGVzdG5ldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeTogXCJFVEhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWycnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWycnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tFeHBsb3JlclVybHM6IFsnaHR0cHM6Ly9nb2VybGkuYmFzZXNjYW4ub3JnJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgU2V0dGluZyBOZXR3b3JrJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgICBzZXRVc2VyQWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCAqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBpZiAobmV0d29yayA9PSAnUG9seWdvbicpIHtcbiAgICAgICAgICAgIHNldE5ldHdvcmsobmV0d29yaylcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvKiBNZXRhTWFzayBpcyBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgICAgICAgICAgICAgICBpZiAobmV0d29yay5jaGFpbklkICE9PSA4MDAwMSAmJiBuZXR3b3JrID09ICdQb2x5Z29uJykgeyAvLyBpZiBuZXR3b3JrIEJhc2VcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZCgnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLCBbeyBjaGFpbklkOiAnMHg4MDAwMScgfV0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiBNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkICovXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGV4cGFuZE5ldHdvcmtzKCkge1xuICAgICAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpXG4gICAgfVxuICAgIHJldHVybiAoXG5cbiAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pbi13LVsxNTBweF0gcmVsYXRpdmUnPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZXhwYW5kTmV0d29ya3MoKX0gY2xhc3NOYW1lPScgdy1mdWxsIHB4LTIgcHktMiBcbiAgICAgICAgICAgIGJvcmRlciByb3VuZGVkLWxnIGJvcmRlci1bI0REREJFNl0gZmxleCBmbGV4LXdyYXAgZ2FwLTIgZm9udC1ib2xkIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaG92ZXI6c2NhbGUtWzEuMV0gdHJhbnNpdGlvbic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV0d29yayA9PSAnQmFzZScgPyAnLi9jb2luYmFzZS1sb2dvLnN2ZycgOiBuZXR3b3JrID09ICdQb2x5Z29uJyA/ICcuL3BvbHlnb24tbG9nby5wbmcnIDogJyd9IGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmV0d29ya308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vY2Fycm90LnN2ZycgY2xhc3NOYW1lPSd3LTMgaC0zJz48L2ltZz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2V4cGFuZGVkICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRlLWZhZGUtaW4tdXAgYWJzb2x1dGUgZmxleCB3LWZ1bGwgZmxleC1jb2x1bW4gXG4gICAgICAgICAgICBib3JkZXIgYm9yZGVyLVsjZGRkQmU2XSByb3VuZGVkLWxnIGZsZXgtd3JhcCBiZy1bI0Y1RjVGNV0gZGFyazpiZy1bIzE2MTYxZF0gbXQtMic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGdhcC0yIGZvbnQtYm9sZCByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjZGRkQmU2XSB3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmNoYW5nZU5ldHdvcmsoJ0Jhc2UnKX0gY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGZsZXggZ2FwLTIgcHgtMiBweS0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9jb2luYmFzZS1sb2dvLnN2ZycgY2xhc3NOYW1lPSd3LTUgaC01IG10LTAuNSc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KGUpPT5jaGFuZ2VOZXR3b3JrKCdQb2x5Z29uJyl9IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1bI2RkZEJlNl0gdy1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHB4LTIgcHktMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9wb2x5Z29uLWxvZ28ucG5nJyBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UG9seWdvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoZSk9PmV4cGFuZE5ldHdvcmtzfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaG92ZXI6Y3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBweC0yIHB5LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vYm5iLWxvZ28ucG5nJyBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qk5CPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+KVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImJyb3dzZXJQcm92aWRlciIsIk5ldHdvcmsiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwibmV0d29yayIsInNldE5ldHdvcmsiLCJ1c2VyQWRkcmVzcyIsInNldFVzZXJBZGRyZXNzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhc1F1ZXJpZWQiLCJzZXRIYXNRdWVyaWVkIiwiaXNMb2FkaW5nIiwic2V0aXNMb2FkaW5nIiwidG9rZW5EYXRhT2JqZWN0cyIsInNldFRva2VuRGF0YU9iamVjdHMiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsIm5hbWVpZCIsInNldE5hbWUiLCJjaGFuZ2VOZXR3b3JrIiwiY2hhaW5JZCIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJCcm93c2VyUHJvdmlkZXIiLCJtZXRob2QiLCJ3YWxsZXROZXR3b3JrIiwiZ2V0TmV0d29yayIsInNlbmQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwicnBjVXJscyIsImJsb2NrRXhwbG9yZXJVcmxzIiwiY29uc29sZSIsImxvZyIsImFjY291bnRzIiwiZXJyIiwibWVzc2FnZSIsInJlcXVlc3QiLCJleHBhbmROZXR3b3JrcyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJzcGFuIiwidWwiLCJsaSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/Network.jsx\n"));

/***/ })

});