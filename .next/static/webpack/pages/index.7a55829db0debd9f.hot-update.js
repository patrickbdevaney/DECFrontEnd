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

/***/ "./src/components/Home/handleClique.jsx":
/*!**********************************************!*\
  !*** ./src/components/Home/handleClique.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nfunction HandleClique() {\n    _s();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers;\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [hasQueried, setHasQueried] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [tokenDataObjects, setTokenDataObjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [nameid, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        getCurrentWalletConnected();\n        addWalletListener();\n    }, [\n        walletAddress\n    ]);\n    const connectWallet = async ()=>{\n        if ( true && typeof window.ethereum != \"undefined\") {\n            try {\n                /* MetaMask is installed */ const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setWalletAddress(accounts[0]);\n                setUserAddress(accounts[0]);\n                console.log(accounts[0]);\n            } catch (err) {\n                console.error(err.message);\n            }\n        } else {\n            /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n        }\n    };\n    const getCurrentWalletConnected = async ()=>{\n        if ( true && typeof window.ethereum != \"undefined\") {\n            try {\n                const accounts = await window.ethereum.request({\n                    method: \"eth_accounts\"\n                });\n                if (accounts.length > 0) {\n                    setWalletAddress(accounts[0]);\n                    setUserAddress(accounts[0]);\n                    console.log(accounts[0]);\n                } else {\n                    console.log(\"Connect to MetaMask using the Connect button\");\n                }\n            } catch (err) {\n                console.error(err.message);\n            }\n        } else {\n            /* MetaMask is not installed */ console.log(\"Please install MetaMask\");\n        }\n    };\n    const addWalletListener = async ()=>{\n        if ( true && typeof window.ethereum != \"undefined\") {\n            window.ethereum.on(\"accountsChanged\", (accounts)=>{\n                setWalletAddress(accounts[0]);\n                setUserAddress(accounts[0]);\n                console.log(accounts[0]);\n            });\n        } else {\n            /* MetaMask is not installed */ setWalletAddress(\"\");\n            console.log(\"Please install MetaMask\");\n        }\n    };\n    async function getinfo(x) {\n        setUserAddress(x);\n        const name = await provider.lookupAddress(userAddress);\n        setName[name];\n    }\n}\n_s(HandleClique, \"4cWa/a0qRWyR4CShbCu5H+USc1w=\");\n_c = HandleClique;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandleClique);\nvar _c;\n$RefreshReg$(_c, \"HandleClique\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxNQUFNbkMsU0FBU29DLGFBQWEsQ0FBQ2xDO1FBQ3hDZSxPQUFPLENBQUNrQixLQUFLO0lBQ2Y7QUFBQztHQTdFTXBDO0tBQUFBOztBQStFVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL2hhbmRsZUNsaXF1ZS5qc3g/YjY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGNoZW15LCBOZXR3b3JrLCBVdGlscyB9IGZyb20gJ2FsY2hlbXktc2RrJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cblxuXG5cblxuZnVuY3Rpb24gSGFuZGxlQ2xpcXVlKCkge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzXG4gIGNvbnN0IFt1c2VyQWRkcmVzcywgc2V0VXNlckFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtoYXNRdWVyaWVkLCBzZXRIYXNRdWVyaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuRGF0YU9iamVjdHMsIHNldFRva2VuRGF0YU9iamVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWVpZCxzZXROYW1lXSA9IHVzZVN0YXRlKCk7XG5cblxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDdXJyZW50V2FsbGV0Q29ubmVjdGVkKCk7XG4gICAgYWRkV2FsbGV0TGlzdGVuZXIoKTtcbiAgfSwgW3dhbGxldEFkZHJlc3NdKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvKiBNZXRhTWFzayBpcyBpbnN0YWxsZWQgKi9cbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFdhbGxldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICBzZXRVc2VyQWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCAqL1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VycmVudFdhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgICBzZXRVc2VyQWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdCB0byBNZXRhTWFzayB1c2luZyB0aGUgQ29ubmVjdCBidXR0b25cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCAqL1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkV2FsbGV0TGlzdGVuZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcImFjY291bnRzQ2hhbmdlZFwiLCAoYWNjb3VudHMpID0+IHtcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgIHNldFVzZXJBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQgKi9cbiAgICAgIHNldFdhbGxldEFkZHJlc3MoXCJcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRpbmZvKHgpIHtcbiAgICBzZXRVc2VyQWRkcmVzcyh4KTtcbiAgICBjb25zdCBuYW1lPWF3YWl0IHByb3ZpZGVyLmxvb2t1cEFkZHJlc3ModXNlckFkZHJlc3MpO1xuICAgIHNldE5hbWVbbmFtZV07XG4gIH19O1xuXG5leHBvcnQgZGVmYXVsdCBIYW5kbGVDbGlxdWU7Il0sIm5hbWVzIjpbIkFsY2hlbXkiLCJOZXR3b3JrIiwiVXRpbHMiLCJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhhbmRsZUNsaXF1ZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwidXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzcyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYXNRdWVyaWVkIiwic2V0SGFzUXVlcmllZCIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInRva2VuRGF0YU9iamVjdHMiLCJzZXRUb2tlbkRhdGFPYmplY3RzIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJuYW1laWQiLCJzZXROYW1lIiwiZ2V0Q3VycmVudFdhbGxldENvbm5lY3RlZCIsImFkZFdhbGxldExpc3RlbmVyIiwiY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwibWVzc2FnZSIsImxlbmd0aCIsIm9uIiwiZ2V0aW5mbyIsIngiLCJuYW1lIiwibG9va3VwQWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/handleClique.jsx\n"));

/***/ })

});