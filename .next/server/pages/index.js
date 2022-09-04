"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/lab"
const lab_namespaceObject = require("@mui/lab");
;// CONCATENATED MODULE: ./pages/index.tsx



const fetchCatImage = async ()=>{
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    // console.log(result[0]);
    return result[0];
};
const Home = ({ initialCatImageUrl  })=>{
    const { 0: catImageUrl , 1: setCatImageUrl  } = (0,external_react_.useState)(initialCatImageUrl);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const handleClick = async ()=>{
        setIsLoading(true);
        const catImage = await fetchCatImage();
        setCatImageUrl(catImage.url);
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "猫画像アプリ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: catImageUrl,
                width: 400,
                height: "auto"
            }),
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(lab_namespaceObject.LoadingButton, {
                loading: true,
                loadingIndicator: "Loading…",
                variant: "outlined",
                size: "large",
                style: {
                    margin: 20
                },
                onClick: handleClick,
                children: "今日の猫さん"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(lab_namespaceObject.LoadingButton, {
                loadingIndicator: "Loading…",
                variant: "outlined",
                size: "large",
                style: {
                    margin: 20
                },
                onClick: handleClick,
                children: "今日の猫さん"
            })
        ]
    });
};
//SSR
const getServerSideProps = async ()=>{
    const catImage = await fetchCatImage();
    return {
        props: {
            initialCatImageUrl: catImage.url
        }
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(673));
module.exports = __webpack_exports__;

})();