exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 3964:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "enterdetails_main__RFu_x",
	"logo_cont": "enterdetails_logo_cont__0g70Q",
	"upload_cont": "enterdetails_upload_cont__htOK3",
	"dot_rap": "enterdetails_dot_rap__156R6",
	"bar": "enterdetails_bar__ycp_H"
};


/***/ }),

/***/ 1317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Frame 2655 1.4fbe3294.png","height":36,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvUlEQVR42j2POwrCUBBFxw+KYGPhB8FSKyvBXehWRISIicSXoEk2IdgG3YKpRBdgY1ZgYWFh/XLHeQRy4DJw58NcMpRdVGoKUcdDSi7Sno+IFqhQwQ4XEdMGXPWl2uCmEs9QUph3PTEt6FOC7PpENgygGwrc8jCn0R622Yjv0J8fmBn8SKFpCZ4G0hsfMDMDxwT69kL2/iJzY2iywJNQeoa6wpm2+Q+0FjnmvHgFDsptD2FXUgxEfZNilaf4A4gEd9KUbF29AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 8797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5545);
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_enterdetails_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3964);
/* harmony import */ var _styles_enterdetails_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_enterdetails_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Statusbar = ({ updatevalue, prieveasevalue })=>{
    const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_1__.useState(prieveasevalue);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("jjj");
            setProgress((oldProgress)=>{
                if (oldProgress === Math.max(progress, updatevalue)) {
                    clearInterval(timer);
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, updatevalue);
            });
        }, 500);
    }, [
        updatevalue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_enterdetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        width: "100%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_2___default()), {
                        variant: "determinate",
                        value: progress
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_enterdetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().dot_rap),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 12 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 25 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 38 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 49 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 62 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 74 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 87 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: progress >= 100 ? {
                                background: " #1FB906"
                            } : {
                                background: "#7B8794"
                            }
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statusbar);


/***/ })

};
;