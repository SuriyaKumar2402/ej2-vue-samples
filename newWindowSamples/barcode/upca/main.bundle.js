/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"barcode/upca/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/barcode/upca/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/barcode/upca/App.vue":
/*!**************************************!*\
  !*** ./Samples/barcode/upca/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1f186264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1f186264& */ \"./Samples/barcode/upca/App.vue?vue&type=template&id=1f186264&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/barcode/upca/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1f186264___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1f186264___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/barcode/upca/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/barcode/upca/App.vue?");

/***/ }),

/***/ "./Samples/barcode/upca/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/barcode/upca/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/barcode/upca/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/barcode/upca/App.vue?");

/***/ }),

/***/ "./Samples/barcode/upca/App.vue?vue&type=template&id=1f186264&":
/*!*********************************************************************!*\
  !*** ./Samples/barcode/upca/App.vue?vue&type=template&id=1f186264& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1f186264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1f186264& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/barcode/upca/App.vue?vue&type=template&id=1f186264&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1f186264___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1f186264___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/barcode/upca/App.vue?");

/***/ }),

/***/ "./Samples/barcode/upca/main.js":
/*!**************************************!*\
  !*** ./Samples/barcode/upca/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/barcode/upca/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/barcode/upca/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/barcode/upca/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/barcode/upca/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_barcode_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-barcode-generator */ \"./node_modules/@syncfusion/ej2-vue-barcode-generator/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_barcode_generator__WEBPACK_IMPORTED_MODULE_3__[\"BarcodeGeneratorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"ColorPickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"TextBoxPlugin\"]);\nlet barCodeInstance;\nlet canShowError = false;\n\nvar customFn = args => {\n  if (canShowError) {\n    return false;\n  }\n  return true;\n};\nlet options = {\n  rules: {\n    password: { minLength: [customFn, \"Invalid input\"] }\n  },\n  keyup() {\n    if (canShowError) {\n      canShowError = false;\n    }\n  },\n  focusout(args) {\n    displayText.value = barcode.value = document.getElementById(\n      \"barcodevaluediv\"\n    ).value;\n    //barcode.dataBind();\n  }\n};\nlet formObject;\nlet textPositiondataSourceValue = [\n  { type: \"Bottom\", text: \"Bottom\" },\n  { type: \"Top\", text: \"Top\" }\n];\n\nlet textAlignmentdataSourceValue = [\n  { type: \"Center\", text: \"Center\" },\n  { type: \"Left\", text: \"Left\" },\n  { type: \"Right\", text: \"Right\" }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"200px\",\n      height: \"150px\",\n      mode: \"SVG\",\n      type: \"UpcA\",\n      value: \"72527273070\",\n      fontcolorvalue: \"#000\",\n      textPositionwidth: \"100%\",\n      ftextPositionfields: { value: \"type\", text: \"text\" },\n      textPositiondataSource: textPositiondataSourceValue,\n      textAlignmentdataSource: textAlignmentdataSourceValue,\n       invalidInput: arg => {\n        canShowError = true;\n        formObject.validate();\n      },\n      textboxchange: arg => {\n        barCodeInstance.value = arg.value;\n      },\n      widthchange: arg => {\n        barCodeInstance.width = arg.value;\n      },\n      heightchange: arg => {\n        barCodeInstance.height = arg.value;\n      },\n      textVisibilitychange: arg => {\n        barCodeInstance.displayText.visibility = arg.checked;\n      },\n      svgModechange: arg => {\n        barCodeInstance.mode = arg.checked ? \"SVG\" : \"Canvas\";\n      },\n      bgColorchange: arg => {\n        barCodeInstance.backgroundColor = arg.currentValue.hex;\n      },\n      foreColorchange: arg => {\n        barCodeInstance.foreColor = arg.currentValue.hex;\n      },\n      MarginLeftchange: arg => {\n        barCodeInstance.margin.left = arg.value;\n      },\n      MarginRightchange: arg => {\n        barCodeInstance.margin.right = arg.value;\n      },\n      MarginTopchange: arg => {\n        barCodeInstance.margin.top = arg.value;\n      },\n      MarginBottomchange: arg => {\n        barCodeInstance.margin.bottom = arg.value;\n      },\n      TextMarginTopchange: arg => {\n        barCodeInstance.displayText.margin.top = arg.value;\n      },\n      TextMarginBottomchange: arg => {\n        barCodeInstance.displayText.margin.bottom = arg.value;\n      },\n      textPositionchange: arg => {\n        barCodeInstance.displayText.position = arg.value;\n      },\n      textAlignmentchange: arg => {\n        barCodeInstance.displayText.alignment = arg.value;\n      },\n      displayTextchange: arg => {\n        barCodeInstance.displayText.text = arg.value.toString();\n      },\n      created: args => {\n        addEvents();\n      }\n    };\n  },\n  mounted: function() {\n    barCodeInstance = this.$refs.barcodeControl.ej2Instances;\n    formObject = new _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"FormValidator\"](\"#form-element\", options);\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/barcode/upca/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/barcode/upca/App.vue?vue&type=template&id=1f186264&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/barcode/upca/App.vue?vue&type=template&id=1f186264& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-8 control-section\",\n        staticStyle: { width: \"64%\" }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"content-wrapper\",\n            staticStyle: { width: \"100%\", height: \"590px\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"barcodecenter\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"centercontrol\" },\n                [\n                  _c(\"ejs-barcodegenerator\", {\n                    ref: \"barcodeControl\",\n                    attrs: {\n                      id: \"barcode\",\n                      invalid: _vm.invalidInput,\n                      width: _vm.width,\n                      height: _vm.height,\n                      type: _vm.type,\n                      value: _vm.value,\n                      mode: _vm.mode\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _vm._m(0)\n          ]\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section\",\n        staticStyle: { \"padding-right\": \"0px\", \"padding-left\": \"18px\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"Appearance\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"e-remove-selection\",\n          attrs: { id: \"propertypanel\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"property-section-content\" }, [\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\", \"margin-top\": \"10px\" }\n              },\n              [_vm._v(\"Value\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-10\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\n                  \"form\",\n                  {\n                    staticClass: \"form-horizontal\",\n                    attrs: { id: \"form-element\" }\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      { attrs: { id: \"barcodevaluediv\" } },\n                      [\n                        _c(\"ejs-textbox\", {\n                          attrs: {\n                            id: \"textbox\",\n                            name: \"password\",\n                            value: \"123456789\",\n                            change: _vm.textboxchange\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ]\n                )\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\"div\", [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-2 top\",\n                  staticStyle: {\n                    \"padding-left\": \"0px\",\n                    \"padding-right\": \"20px\"\n                  }\n                },\n                [_vm._v(\"Width\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-3\",\n                  staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\"ejs-numerictextbox\", {\n                    ref: \"widthObj\",\n                    attrs: {\n                      id: \"width\",\n                      format: \"###.##\",\n                      value: 200,\n                      step: 2,\n                      min: 150,\n                      max: 250,\n                      change: _vm.widthchange\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", [\n              _c(\"div\", { staticClass: \"rightProperty\" }, [_vm._v(\"Height\")]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-3\",\n                  staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\"ejs-numerictextbox\", {\n                    ref: \"heightObj\",\n                    attrs: {\n                      id: \"height\",\n                      format: \"###.##\",\n                      value: \"150\",\n                      step: 2,\n                      min: 100,\n                      max: 200,\n                      change: _vm.heightchange\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row sb-child-row\",\n              staticStyle: { \"margin-top\": \"20px\" }\n            },\n            [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-6\",\n                  staticStyle: { \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-1\",\n                      staticStyle: { \"padding-left\": \"0px\" }\n                    },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"textVisibility\",\n                          checked: true,\n                          change: _vm.textVisibilitychange\n                        }\n                      })\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"col-xs-10\" }, [\n                    _vm._v(\"Text Visibility\")\n                  ])\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-4\",\n                  staticStyle: { \"padding-left\": \"0\", \"margin-left\": \"13px\" }\n                },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-1\",\n                      staticStyle: { \"padding-left\": \"0px\" }\n                    },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"svgMode\",\n                          checked: true,\n                          change: _vm.svgModechange\n                        }\n                      })\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"svgTextClass\" }, [\n                    _vm._v(\"SVG Mode\")\n                  ])\n                ]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\"div\", { staticStyle: { \"margin-top\": \"15px\" } }, [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-2\",\n                  staticStyle: { \"margin-top\": \"5px\", \"padding-left\": \"0px\" }\n                },\n                [_vm._v(\"BG Color\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-4\",\n                  staticStyle: { \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\"ejs-colorpicker\", {\n                    ref: \"bgColor\",\n                    attrs: {\n                      id: \"bgColor\",\n                      value: _vm.fontcolorvalue,\n                      change: _vm.bgColorchange\n                    }\n                  })\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-2\",\n                  staticStyle: {\n                    width: \"18%\",\n                    \"padding-left\": \"12px\",\n                    \"margin-top\": \"5px\"\n                  }\n                },\n                [_vm._v(\"Fore Color\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-3\",\n                  staticStyle: { \"padding-left\": \"2px\" }\n                },\n                [\n                  _c(\"ejs-colorpicker\", {\n                    ref: \"foreColor\",\n                    attrs: {\n                      id: \"foreColor\",\n                      value: _vm.fontcolorvalue,\n                      change: _vm.foreColorchange\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"property-panel-header\" }, [\n            _vm._v(\"Margin\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Left\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"marginLeft\",\n                    format: \"###.##\",\n                    value: \"10\",\n                    step: 1,\n                    min: -10,\n                    max: 30,\n                    change: _vm.MarginLeftchange\n                  }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"rightProperty\" }, [_vm._v(\"Right\")]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"MarginRight\",\n                    format: \"###.##\",\n                    value: \"10\",\n                    step: 1,\n                    min: -10,\n                    max: 30,\n                    change: _vm.MarginRightchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Top\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"padding-bottom\": \"8px\" } },\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        id: \"marginTop\",\n                        format: \"###.##\",\n                        value: \"10\",\n                        step: 1,\n                        min: -10,\n                        max: 30,\n                        change: _vm.MarginTopchange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"rightProperty\" }, [_vm._v(\"Bottom\")]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"MarginBottom\",\n                    format: \"###.##\",\n                    value: \"10\",\n                    step: 1,\n                    min: -10,\n                    max: 30,\n                    change: _vm.MarginBottomchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"property-panel-header\" }, [\n            _vm._v(\"Text Properties\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Top\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"TextmarginTop\",\n                    format: \"###.##\",\n                    value: \"0\",\n                    step: 1,\n                    min: -10,\n                    max: 20,\n                    change: _vm.TextMarginTopchange\n                  }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"rightProperty\" }, [_vm._v(\"Bottom\")]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"TextMarginBottom\",\n                    format: \"###.##\",\n                    value: \"0\",\n                    step: 1,\n                    min: -10,\n                    max: 20,\n                    change: _vm.TextMarginBottomchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Position\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"textPropertyClass\" },\n              [\n                _c(\"ejs-dropdownlist\", {\n                  ref: \"textPosition\",\n                  attrs: {\n                    id: \"textPosition\",\n                    dataSource: _vm.textPositiondataSource,\n                    fields: _vm.ftextPositionfields,\n                    popupWidth: 150,\n                    width: _vm.textPositionwidth,\n                    value: \"Bottom\",\n                    index: 0,\n                    change: _vm.textPositionchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Alignment\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"textPropertyClass\" },\n              [\n                _c(\"ejs-dropdownlist\", {\n                  ref: \"textAlignment\",\n                  attrs: {\n                    id: \"textAlignment\",\n                    dataSource: _vm.textAlignmentdataSource,\n                    fields: _vm.ftextPositionfields,\n                    popupWidth: 150,\n                    width: _vm.textPositionwidth,\n                    value: \"Center\",\n                    index: 0,\n                    change: _vm.textAlignmentchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3 top\",\n                staticStyle: { width: \"17%\", \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Display Text\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"textProperty\" },\n              [\n                _c(\"ejs-textbox\", {\n                  attrs: {\n                    id: \"displayText\",\n                    value: \"123456789\",\n                    change: _vm.displayTextchange\n                  }\n                })\n              ],\n              1\n            )\n          ])\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass: \"allowedText\",\n        staticStyle: {\n          \"margin-left\": \"14px\",\n          \"margin-right\": \"17px\",\n          \"margin-top\": \"14px\",\n          width: \"auto\",\n          height: \"auto\"\n        }\n      },\n      [\n        _c(\"span\", { staticStyle: { \"font-weight\": \"600\" } }, [\n          _vm._v(\" Allowed Input characters :\")\n        ]),\n        _vm._v(\" This barocode supports 11 numbers as input.\\n        \")\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample visualizes a consumer good identification number. A UPC-A barcode consists of four areas: number system, manufacturer code, product code, and check digit.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample shows how to create the UPC-A barcode. The `type` property can be used to set the barcode type as `UpcA`. By default, `enableCheckSum` is set as true, but the checksum can be disabled by assigning false to it.\\n        \\n      \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/barcode/upca/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });