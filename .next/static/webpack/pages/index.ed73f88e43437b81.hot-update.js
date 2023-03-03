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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Network; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Network() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Base\");\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hasQueried, setHasQueried] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tokenDataObjects, setTokenDataObjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameid, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function changeNetwork(network) {\n        if (network == \"Base\") {\n            let chainId = \"84531\";\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const provider1 = await new BrowserProvider({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const walletNetwork = await provider1.getNetwork();\n                    if (walletNetwork.chainId !== 84531 && network == \"Base\") {\n                        try {\n                            provider1.send(\"wallet_switchEthereumChain\", [\n                                {\n                                    chainId: \"0x\".concat(chainId.toString(16))\n                                }\n                            ]);\n                        } catch (error) {\n                            if (error.code === 4902) try {\n                                provider1.send(\"wallet_addEthereumChain\", [\n                                    {\n                                        chainId: \"0x\".concat(chainId.toString(16)),\n                                        chainName: \"Base Testnet\",\n                                        nativeCurrency: \"ETH\",\n                                        rpcUrls: [\n                                            \"https://goerli.base.org\"\n                                        ],\n                                        blockExplorerUrls: [\n                                            \"https://goerli.basescan.org\"\n                                        ]\n                                    }\n                                ]);\n                            } catch (error) {\n                                console.log(\"Error Setting Network\", error);\n                            }\n                        }\n                    }\n                    setWalletAddress(accounts[0]);\n                    setUserAddress(accounts[0]);\n                    console.log(accounts[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n        if (network == \"Polygon\") {\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const accounts1 = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const network = await provider.getNetwork();\n                    if (network.chainId !== 80001 && network == \"Polygon\") {\n                        await provider.send(\"wallet_switchEthereumChain\", [\n                            {\n                                chainId: \"0x80001\"\n                            }\n                        ]);\n                    }\n                    setWalletAddress(accounts1[0]);\n                    setUserAddress(accounts1[0]);\n                    console.log(accounts1[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n    }\n    function expandNetworks() {\n        setExpanded(!expanded);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-[150px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>expandNetworks(),\n                    className: \" w-full px-2 py-2  border rounded-lg border-[#DDDBE6] flex flex-wrap gap-2 font-bold justify-between items-center hover:scale-[1.1] transition\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: network == \"Base\" ? \"./coinbase-logo.svg\" : network == \"Polygon\" ? \"./polygon-logo.png\" : \"\",\n                                    className: \"w-5 h-5 mt-0.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: network\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./carrot.svg\",\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this),\n                expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"animate-fade-in-up absolute flex w-full flex-column  border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full gap-2 font-bold rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: (e)=>changeNetwork(\"Base\"),\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"transition flex gap-2 px-2 py-2 cursor-pointer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"./coinbase-logo.svg\",\n                                                    className: \"w-5 h-5 mt-0.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Base\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (e)=>changeNetwork(\"Polygon\"),\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex gap-2 px-2 py-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./polygon-logo.png\",\n                                                className: \"w-5 h-5 mt-0.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Polygon\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 30\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n            lineNumber: 100,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Network, \"8LK6208NEqY65mpLYQd0NAgbCuY=\");\n_c = Network;\nvar _c;\n$RefreshReg$(_c, \"Network\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLbEIsOERBQUNFO29DQUFHTCxTQUFTLENBQUNNLElBQUlqQyxjQUFjO29DQUFZeUIsV0FBVTs4Q0FDakQsNEVBQUNLO3dDQUFLTCxXQUFVOzswREFDYiw4REFBQ0c7Z0RBQUlDLEtBQUk7Z0RBQXFCSixXQUFVOzs7Ozs7MERBQ3hDLDhEQUFDSzswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN0QyxDQUFDO0dBdkl1Qm5EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUvTmV0d29yay5qc3g/MWQ5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycywgYnJvd3NlclByb3ZpZGVyIH0gZnJvbSAnZXRoZXJzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV0d29yaygpIHtcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuZXR3b3JrLCBzZXROZXR3b3JrXSA9IHVzZVN0YXRlKCdCYXNlJylcblxuICAgIGNvbnN0IFt1c2VyQWRkcmVzcywgc2V0VXNlckFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtoYXNRdWVyaWVkLCBzZXRIYXNRdWVyaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b2tlbkRhdGFPYmplY3RzLCBzZXRUb2tlbkRhdGFPYmplY3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmFtZWlkLHNldE5hbWVdID0gdXNlU3RhdGUoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZU5ldHdvcmsobmV0d29yaykge1xuICAgICAgICBpZiAobmV0d29yayA9PSAnQmFzZScpIHtcbiAgICAgICAgICAgIGxldCBjaGFpbklkID0gJzg0NTMxJztcbiAgICAgICAgICAgIHNldE5ldHdvcmsobmV0d29yaylcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvKiBNZXRhTWFzayBpcyBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgbmV3IEJyb3dzZXJQcm92aWRlcih7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHdhbGxldE5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKClcbiAgICAgICAgICAgICAgICAgIGlmICh3YWxsZXROZXR3b3JrLmNoYWluSWQgIT09IDg0NTMxICYmIG5ldHdvcmsgPT0gJ0Jhc2UnKSB7IC8vIGlmIG5ldHdvcmsgQmFzZVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuc2VuZCgnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhaW5JZDogYDB4JHtjaGFpbklkLnRvU3RyaW5nKDE2KX1gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gNDkwMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zZW5kKCd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogYDB4JHtjaGFpbklkLnRvU3RyaW5nKDE2KX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6IFwiQmFzZSBUZXN0bmV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiBcIkVUSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vZ29lcmxpLmJhc2Uub3JnJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRXhwbG9yZXJVcmxzOiBbJ2h0dHBzOi8vZ29lcmxpLmJhc2VzY2FuLm9yZyddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIFNldHRpbmcgTmV0d29yaycsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgc2V0VXNlckFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gaWYgKG5ldHdvcmsgPT0gJ1BvbHlnb24nKSB7XG4gICAgICAgICAgICBzZXROZXR3b3JrKG5ldHdvcmspXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgLyogTWV0YU1hc2sgaXMgaW5zdGFsbGVkICovXG4gICAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmV0d29yayA9IGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKVxuICAgICAgICAgICAgICAgICAgaWYgKG5ldHdvcmsuY2hhaW5JZCAhPT0gODAwMDEgJiYgbmV0d29yayA9PSAnUG9seWdvbicpIHsgLy8gaWYgbmV0d29yayBCYXNlXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJywgW3sgY2hhaW5JZDogJzB4ODAwMDEnIH1dKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgICBzZXRVc2VyQWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCAqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBleHBhbmROZXR3b3JrcygpIHtcbiAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKVxuICAgIH1cbiAgICByZXR1cm4gKFxuXG4gICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4tdy1bMTUwcHhdIHJlbGF0aXZlJz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmV4cGFuZE5ldHdvcmtzKCl9IGNsYXNzTmFtZT0nIHctZnVsbCBweC0yIHB5LTIgXG4gICAgICAgICAgICBib3JkZXIgcm91bmRlZC1sZyBib3JkZXItWyNERERCRTZdIGZsZXggZmxleC13cmFwIGdhcC0yIGZvbnQtYm9sZCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGhvdmVyOnNjYWxlLVsxLjFdIHRyYW5zaXRpb24nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25ldHdvcmsgPT0gJ0Jhc2UnID8gJy4vY29pbmJhc2UtbG9nby5zdmcnIDogbmV0d29yayA9PSAnUG9seWdvbicgPyAnLi9wb2x5Z29uLWxvZ28ucG5nJyA6ICcnfSBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25ldHdvcmt9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2NhcnJvdC5zdmcnIGNsYXNzTmFtZT0ndy0zIGgtMyc+PC9pbWc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW5pbWF0ZS1mYWRlLWluLXVwIGFic29sdXRlIGZsZXggdy1mdWxsIGZsZXgtY29sdW1uIFxuICAgICAgICAgICAgYm9yZGVyIGJvcmRlci1bI2RkZEJlNl0gcm91bmRlZC1sZyBmbGV4LXdyYXAgYmctWyNGNUY1RjVdIGRhcms6YmctWyMxNjE2MWRdIG10LTInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBnYXAtMiBmb250LWJvbGQgcm91bmRlZC1sZyc+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1bI2RkZEJlNl0gdy1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpPT5jaGFuZ2VOZXR3b3JrKCdCYXNlJyl9IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBmbGV4IGdhcC0yIHB4LTIgcHktMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vY29pbmJhc2UtbG9nby5zdmcnIGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhlKT0+Y2hhbmdlTmV0d29yaygnUG9seWdvbicpfSBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItWyNkZGRCZTZdIHctZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBweC0yIHB5LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vcG9seWdvbi1sb2dvLnBuZycgY2xhc3NOYW1lPSd3LTUgaC01IG10LTAuNSc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBvbHlnb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgb25DbGljaz17KGUpPT5leHBhbmROZXR3b3Jrc30gY2xhc3NOYW1lPVwidy1mdWxsIGhvdmVyOmN1cnNvci1ub3QtYWxsb3dlZCBvcGFjaXR5LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgcHgtMiBweS0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2JuYi1sb2dvLnBuZycgY2xhc3NOYW1lPSd3LTUgaC01IG10LTAuNSc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJOQjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPilcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJicm93c2VyUHJvdmlkZXIiLCJOZXR3b3JrIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIm5ldHdvcmsiLCJzZXROZXR3b3JrIiwidXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzcyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYXNRdWVyaWVkIiwic2V0SGFzUXVlcmllZCIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInRva2VuRGF0YU9iamVjdHMiLCJzZXRUb2tlbkRhdGFPYmplY3RzIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJuYW1laWQiLCJzZXROYW1lIiwiY2hhbmdlTmV0d29yayIsImNoYWluSWQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiQnJvd3NlclByb3ZpZGVyIiwibWV0aG9kIiwid2FsbGV0TmV0d29yayIsImdldE5ldHdvcmsiLCJzZW5kIiwidG9TdHJpbmciLCJlcnJvciIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsInJwY1VybHMiLCJibG9ja0V4cGxvcmVyVXJscyIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50cyIsImVyciIsIm1lc3NhZ2UiLCJyZXF1ZXN0IiwiZXhwYW5kTmV0d29ya3MiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwic3BhbiIsInVsIiwibGkiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home/Network.jsx\n"));

/***/ })

});