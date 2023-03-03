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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Network; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Network() {\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Base\");\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hasQueried, setHasQueried] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tokenDataObjects, setTokenDataObjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameid, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function changeNetwork(network) {\n        if (network == \"Base\") {\n            let chainId = \"84531\";\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const provider1 = new ethers__WEBPACK_IMPORTED_MODULE_2__.BrowserProvider(window.ethereum, \"any\");\n                    const walletNetwork = await provider1.getNetwork();\n                    if (walletNetwork.chainId !== 84531 && network == \"Base\") {\n                        try {\n                            provider1.send(\"wallet_switchEthereumChain\", [\n                                {\n                                    chainId: \"0x\".concat(chainId.toString(16))\n                                }\n                            ]);\n                        } catch (error) {\n                            if (error.code === 4902) try {\n                                provider1.send(\"wallet_addEthereumChain\", [\n                                    {\n                                        chainId: \"0x\".concat(chainId.toString(16)),\n                                        chainName: \"Base Goerli\",\n                                        nativeCurrency: \"ETH\",\n                                        rpcUrls: [\n                                            \"https://goerli.base.org\"\n                                        ],\n                                        blockExplorerUrls: [\n                                            \"https://goerli.basescan.org\"\n                                        ]\n                                    }\n                                ]);\n                            } catch (error) {\n                                console.log(\"Error Setting Network\", error);\n                            }\n                        }\n                    }\n                    setWalletAddress(accounts[0]);\n                    setUserAddress(accounts[0]);\n                    console.log(accounts[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n        if (network == \"Polygon\") {\n            setNetwork(network);\n            if ( true && typeof window.ethereum != \"undefined\") {\n                try {\n                    /* MetaMask is installed */ const accounts1 = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    const network = await provider.getNetwork();\n                    if (network.chainId !== 80001 && network == \"Polygon\") {\n                        await provider.send(\"wallet_switchEthereumChain\", [\n                            {\n                                chainId: \"0x80001\"\n                            }\n                        ]);\n                    }\n                    setWalletAddress(accounts1[0]);\n                    setUserAddress(accounts1[0]);\n                    console.log(accounts1[0]);\n                } catch (err) {\n                    console.error(err.message);\n                }\n            } else {\n                /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n            }\n        }\n    }\n    function expandNetworks() {\n        setExpanded(!expanded);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-[150px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>expandNetworks(),\n                    className: \" w-full px-2 py-2  border rounded-lg border-[#DDDBE6] flex flex-wrap gap-2 font-bold justify-between items-center hover:scale-[1.1] transition\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: network == \"Base\" ? \"./coinbase-logo.svg\" : network == \"Polygon\" ? \"./polygon-logo.png\" : \"\",\n                                    className: \"w-5 h-5 mt-0.5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: network\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"./carrot.svg\",\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, this),\n                expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"animate-fade-in-up absolute flex w-full flex-column  border border-[#dddBe6] rounded-lg flex-wrap bg-[#F5F5F5] dark:bg-[#16161d] mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full gap-2 font-bold rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: (e)=>changeNetwork(\"Base\"),\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"transition flex gap-2 px-2 py-2 cursor-pointer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"./coinbase-logo.svg\",\n                                                    className: \"w-5 h-5 mt-0.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Base\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (e)=>changeNetwork(\"Polygon\"),\n                                    className: \"border-b border-[#dddBe6] w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex gap-2 px-2 py-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"./polygon-logo.png\",\n                                                className: \"w-5 h-5 mt-0.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 125,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Polygon\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 30\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickmura/Documents/DECFrontEnd/src/components/Home/Network.jsx\",\n            lineNumber: 99,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Network, \"8LK6208NEqY65mpLYQd0NAgbCuY=\");\n_c = Network;\nvar _c;\n$RefreshReg$(_c, \"Network\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtsQiw4REFBQ0U7b0NBQUdMLFNBQVMsQ0FBQ00sSUFBSWhDLGNBQWM7b0NBQVl3QixXQUFVOzhDQUNqRCw0RUFBQ0s7d0NBQUtMLFdBQVU7OzBEQUNiLDhEQUFDRztnREFBSUMsS0FBSTtnREFBcUJKLFdBQVU7Ozs7OzswREFDeEMsOERBQUNLOzBEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RDLENBQUM7R0F0SXVCbEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXR3b3JrLmpzeD8xZDk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXRoZXJzLCBCcm93c2VyUHJvdmlkZXIgfSBmcm9tICdldGhlcnMnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXR3b3JrKCkge1xuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25ldHdvcmssIHNldE5ldHdvcmtdID0gdXNlU3RhdGUoJ0Jhc2UnKVxuXG4gICAgY29uc3QgW3VzZXJBZGRyZXNzLCBzZXRVc2VyQWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2hhc1F1ZXJpZWQsIHNldEhhc1F1ZXJpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Rva2VuRGF0YU9iamVjdHMsIHNldFRva2VuRGF0YU9iamVjdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuYW1laWQsc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlTmV0d29yayhuZXR3b3JrKSB7XG4gICAgICAgIGlmIChuZXR3b3JrID09ICdCYXNlJykge1xuICAgICAgICAgICAgbGV0IGNoYWluSWQgPSAnODQ1MzEnO1xuICAgICAgICAgICAgc2V0TmV0d29yayhuZXR3b3JrKVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIGluc3RhbGxlZCAqL1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSwgXCJhbnlcIilcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgd2FsbGV0TmV0d29yayA9IGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKVxuICAgICAgICAgICAgICAgICAgaWYgKHdhbGxldE5ldHdvcmsuY2hhaW5JZCAhPT0gODQ1MzEgJiYgbmV0d29yayA9PSAnQmFzZScpIHsgLy8gaWYgbmV0d29yayBCYXNlXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zZW5kKCd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGFpbklkOiBgMHgke2NoYWluSWQudG9TdHJpbmcoMTYpfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSA0OTAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnNlbmQoJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiBgMHgke2NoYWluSWQudG9TdHJpbmcoMTYpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogXCJCYXNlIEdvZXJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeTogXCJFVEhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL2dvZXJsaS5iYXNlLm9yZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0V4cGxvcmVyVXJsczogWydodHRwczovL2dvZXJsaS5iYXNlc2Nhbi5vcmcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBTZXR0aW5nIE5ldHdvcmsnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiBNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkICovXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9IGlmIChuZXR3b3JrID09ICdQb2x5Z29uJykge1xuICAgICAgICAgICAgc2V0TmV0d29yayhuZXR3b3JrKVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIGluc3RhbGxlZCAqL1xuICAgICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKClcbiAgICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDgwMDAxICYmIG5ldHdvcmsgPT0gJ1BvbHlnb24nKSB7IC8vIGlmIG5ldHdvcmsgQmFzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKCd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsIFt7IGNoYWluSWQ6ICcweDgwMDAxJyB9XSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgc2V0VXNlckFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qIE1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZXhwYW5kTmV0d29ya3MoKSB7XG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZClcbiAgICB9XG4gICAgcmV0dXJuIChcblxuICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLXctWzE1MHB4XSByZWxhdGl2ZSc+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5leHBhbmROZXR3b3JrcygpfSBjbGFzc05hbWU9JyB3LWZ1bGwgcHgtMiBweS0yIFxuICAgICAgICAgICAgYm9yZGVyIHJvdW5kZWQtbGcgYm9yZGVyLVsjREREQkU2XSBmbGV4IGZsZXgtd3JhcCBnYXAtMiBmb250LWJvbGQganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBob3ZlcjpzY2FsZS1bMS4xXSB0cmFuc2l0aW9uJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXR3b3JrID09ICdCYXNlJyA/ICcuL2NvaW5iYXNlLWxvZ28uc3ZnJyA6IG5ldHdvcmsgPT0gJ1BvbHlnb24nID8gJy4vcG9seWdvbi1sb2dvLnBuZycgOiAnJ30gY2xhc3NOYW1lPSd3LTUgaC01IG10LTAuNSc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXR3b3JrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9jYXJyb3Quc3ZnJyBjbGFzc05hbWU9J3ctMyBoLTMnPjwvaW1nPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hdGUtZmFkZS1pbi11cCBhYnNvbHV0ZSBmbGV4IHctZnVsbCBmbGV4LWNvbHVtbiBcbiAgICAgICAgICAgIGJvcmRlciBib3JkZXItWyNkZGRCZTZdIHJvdW5kZWQtbGcgZmxleC13cmFwIGJnLVsjRjVGNUY1XSBkYXJrOmJnLVsjMTYxNjFkXSBtdC0yJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgZ2FwLTIgZm9udC1ib2xkIHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItWyNkZGRCZTZdIHctZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+Y2hhbmdlTmV0d29yaygnQmFzZScpfSBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZmxleCBnYXAtMiBweC0yIHB5LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2NvaW5iYXNlLWxvZ28uc3ZnJyBjbGFzc05hbWU9J3ctNSBoLTUgbXQtMC41Jz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZSk9PmNoYW5nZU5ldHdvcmsoJ1BvbHlnb24nKX0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjZGRkQmU2XSB3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgcHgtMiBweS0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3BvbHlnb24tbG9nby5wbmcnIGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qb2x5Z29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIG9uQ2xpY2s9eyhlKT0+ZXhwYW5kTmV0d29ya3N9IGNsYXNzTmFtZT1cInctZnVsbCBob3ZlcjpjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHB4LTIgcHktMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9ibmItbG9nby5wbmcnIGNsYXNzTmFtZT0ndy01IGgtNSBtdC0wLjUnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CTkI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz4pXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiQnJvd3NlclByb3ZpZGVyIiwiTmV0d29yayIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsInVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3MiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFzUXVlcmllZCIsInNldEhhc1F1ZXJpZWQiLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJ0b2tlbkRhdGFPYmplY3RzIiwic2V0VG9rZW5EYXRhT2JqZWN0cyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwibmFtZWlkIiwic2V0TmFtZSIsImNoYW5nZU5ldHdvcmsiLCJjaGFpbklkIiwid2luZG93IiwiZXRoZXJldW0iLCJwcm92aWRlciIsIndhbGxldE5ldHdvcmsiLCJnZXROZXR3b3JrIiwic2VuZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb2RlIiwiY2hhaW5OYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJycGNVcmxzIiwiYmxvY2tFeHBsb3JlclVybHMiLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudHMiLCJlcnIiLCJtZXNzYWdlIiwicmVxdWVzdCIsIm1ldGhvZCIsImV4cGFuZE5ldHdvcmtzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsInNwYW4iLCJ1bCIsImxpIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/Network.jsx\n"));

/***/ })

});