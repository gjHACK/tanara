webpackJsonp([10],{

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_188a68e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardLayout_vue__ = __webpack_require__(909);
var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_188a68e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardLayout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\DashboardLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-188a68e2", Component.options)
  } else {
    hotAPI.reload("data-v-188a68e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("dashboard-navbar"),
      _vm._v(" "),
      _c("div", { staticClass: "row no-gutters" }, [
        _c(
          "div",
          { staticClass: "col-md-4 col-lg-3 dashboard-sidebar" },
          [_c("dashboard-sidebar")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8 col-lg-9 dashboard-main" },
          [_c("router-view")],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-188a68e2", esExports)
  }
}

/***/ })

});