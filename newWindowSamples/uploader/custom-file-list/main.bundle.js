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
/******/ 		"uploader/custom-file-list/main": 0
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
/******/ 	deferredModules.push(["./Samples/uploader/custom-file-list/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/uploader/custom-file-list/App.vue":
/*!***************************************************!*\
  !*** ./Samples/uploader/custom-file-list/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4dd861a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4dd861a2&scoped=true& */ \"./Samples/uploader/custom-file-list/App.vue?vue&type=template&id=4dd861a2&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/uploader/custom-file-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4dd861a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css& */ \"./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css&\");\n/* harmony import */ var _App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=1&lang=css& */ \"./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4dd861a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4dd861a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4dd861a2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/uploader/custom-file-list/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?");

/***/ }),

/***/ "./Samples/uploader/custom-file-list/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/uploader/custom-file-list/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?");

/***/ }),

/***/ "./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4dd861a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4dd861a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4dd861a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4dd861a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4dd861a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?");

/***/ }),

/***/ "./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************!*\
  !*** ./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=1&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?");

/***/ }),

/***/ "./Samples/uploader/custom-file-list/App.vue?vue&type=template&id=4dd861a2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./Samples/uploader/custom-file-list/App.vue?vue&type=template&id=4dd861a2&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4dd861a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4dd861a2&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=template&id=4dd861a2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4dd861a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4dd861a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?");

/***/ }),

/***/ "./Samples/uploader/custom-file-list/main.js":
/*!***************************************************!*\
  !*** ./Samples/uploader/custom-file-list/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/uploader/custom-file-list/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.uploader-custom-file-drop-target[data-v-4dd861a2] {\\n        min-height: 50px;\\n        padding-top: 15px;\\n        position: relative;\\n}\\n.uploader-custom-file-drop-area[data-v-4dd861a2] {\\n    padding: 3% 30% 3%;\\n    display: inherit;\\n    border: 1px dashed #c3c3cc\\n}\\n.uploader-template-view .droparea[data-v-4dd861a2] {\\n   font-size: 13px;\\n}\\n.e-bigger .uploader-template-view .droparea[data-v-4dd861a2] {\\n   font-size: 14px;\\n}\\n.uploader-template-view .control_wrapper[data-v-4dd861a2] {\\n    max-width: 400px;\\n    margin: auto;\\n}\\n.material .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color:#ff4081;\\n}\\n.fabric .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color: #1763ff;\\n}\\n.bootstrap .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color: #1f496e;\\n}\\n.highcontrast .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color: #ffd939;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-AKCBNP47DT3PFGRK7KSU3VWUUB7G6VMVS76UHZZZC2BQNLNYCVQQ/Samples/uploader/custom-file-list/App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,iBAAiB;QACjB,kBAAkB;QAClB,mBAAmB;CAC1B;AACD;IACI,mBAAmB;IACnB,iBAAiB;IACjB,0BAA0B;CAC7B;AACD;GACG,gBAAgB;CAClB;AACD;GACG,gBAAgB;CAClB;AACD;IACI,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,cAAc;CACjB;AACD;IACI,eAAe;CAClB;AACD;IACI,eAAe;CAClB;AACD;IACI,eAAe;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&id=4dd861a2&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.uploader-custom-file-drop-target[data-v-4dd861a2] {\\n        min-height: 50px;\\n        padding-top: 15px;\\n        position: relative;\\n}\\n.uploader-custom-file-drop-area[data-v-4dd861a2] {\\n    padding: 3% 30% 3%;\\n    display: inherit;\\n    border: 1px dashed #c3c3cc\\n}\\n.uploader-template-view .droparea[data-v-4dd861a2] {\\n   font-size: 13px;\\n}\\n.e-bigger .uploader-template-view .droparea[data-v-4dd861a2] {\\n   font-size: 14px;\\n}\\n.uploader-template-view .control_wrapper[data-v-4dd861a2] {\\n    max-width: 400px;\\n    margin: auto;\\n}\\n.material .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color:#ff4081;\\n}\\n.fabric .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color: #1763ff;\\n}\\n.bootstrap .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color: #1f496e;\\n}\\n.highcontrast .uploader-custom-file-drop-target span a[data-v-4dd861a2] {\\n    color: #ffd939;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.uploader-template-view.control_wrapper {\\n    max-width: 400px;\\n    margin: auto;\\n}\\n.uploader-template-view .e-file-select-wrap {\\n    display: none;\\n}\\n.uploader-template-view .e-upload {\\n    float: none;\\n    border: none;\\n}\\n.uploader-template-view .ul-element {\\n    list-style: none;\\n    width: 100%;\\n    padding-left: 0;\\n}\\n.uploader-template-view .file-name {\\n    padding: 8px 6px 8px 0;\\n    font-size: 13px;\\n    width: 46%;\\n    display: inline-block;\\n    position: relative;\\n    top: 4px;\\n}\\n.e-bigger .uploader-template-view .file-name {\\n    font-size: 14px;\\n}\\n.uploader-template-view .file-size {\\n    padding: 4px;\\n    font-size: 13px;\\n    width: 18%;\\n    display: inline-block;\\n    position: relative;\\n}\\n.e-bigger .uploader-template-view .file-size {\\n    font-size: 14px;\\n}\\n.uploader-template-view .file-lists {\\n    border: 1px solid lightgray;\\n    padding: 0 6px 0 14px;\\n    margin-top: 15px;\\n    position: relative;\\n    background: rgba(0, 0, 0, 0.04);\\n}\\n.uploader-template-view .file-size, .uploader-template-view .file-name {\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    text-overflow: ellipsis;\\n    overflow: hidden;\\n    white-space: nowrap;\\n}\\n.uploader-template-view span.progress-bar-container {\\n    display: block;\\n    float: right;\\n    height: 20px;\\n    right: 13%;\\n    top: 14px;\\n    position: relative;\\n    width: 20%;\\n}\\n.uploader-template-view .progress{\\n    width: 100%;\\n    height: 15px;\\n    -webkit-appearance: none;\\n}\\n.uploader-template-view .close-icon-container\\n{\\n    cursor: pointer;\\n    font-size: 11px;\\n    height: 24px;\\n    margin: 0 12px 0 22px;\\n    padding: 0;\\n    position: absolute;\\n    right: 0;\\n    width: 24px;\\n    top: 6px;\\n}\\n.uploader-template-view .close-icon-container.remove-btn {\\n   display: none;\\n}\\n.uploader-template-view .close-icon-container.e-icons::before {\\n    left: 7px;\\n    position: inherit;\\n    top: 7px;\\n    content: '\\\\E932';\\n}\\n.uploader-template-view .close-icon-container.delete-icon::before {\\n    content: '\\\\E94A';\\n}\\n.tailwind .uploader-template-view .close-icon-container.delete-icon::before {\\n    content: '\\\\E78D';\\n}\\n.tailwind .uploader-template-view .close-icon-container.delete-icon {\\n    top: 10px;\\n}\\n.uploader-template-view .close-icon-container:hover {\\n    background-color: rgba(0, 0, 0, 0.12);\\n    border-color: transparent;\\n    border-radius: 50%;\\n    box-shadow: 0 0 0 transparent;\\n}\\n.highcontrast .uploader-template-view .close-icon-container:hover {\\n    background-color: #ffd939;\\n    color: black;\\n}\\n.highcontrast .uploader-template-view .close-icon-container {\\n    color: #ffffff;\\n}\\n.uploader-template-view .upload-success {\\n   color: #2bc700;\\n}\\n.uploader-template-view .upload-fails {\\n    color: #f44336;\\n}\\n.uploader-template-view progress::-webkit-progress-bar {\\n    border: 1px solid lightgrey;\\n    background-color: #ffffff;\\n    border-radius: 2px;\\n}\\n.highcontrast .uploader-template-view progress::-webkit-progress-bar {\\n    background-color: #000000;\\n}\\n.material .uploader-template-view progress::-webkit-progress-value {\\n    border-radius: 2px; \\n    background-color: #ff4081;\\n}\\n.bootstrap .uploader-template-view progress::-webkit-progress-value {\\n    border-radius: 2px; \\n    background-color: #1f496e;\\n}\\n.fabric .uploader-template-view progress::-webkit-progress-value {\\n    background-color: #1763ff;\\n    border-radius: 2px; \\n    top: -66px;\\n}\\n.highcontrast .uploader-template-view progress::-webkit-progress-value {\\n    background-color: #ffd939;\\n    border-radius: 2px;\\n}\\n.material .uploader-template-view progress::-moz-progress-bar {\\n    border-radius: 2px; \\n    background-color: #ff4081;\\n}\\n.bootstrap .uploader-template-view progress::-moz-progress-bar {\\n    border-radius: 2px; \\n    background-color: #1f496e;\\n}\\n.fabric .uploader-template-view progress::-moz-progress-bar {\\n    background-color: #1763ff;\\n    border-radius: 2px; \\n    top: -66px;\\n}\\n.highcontrast .uploader-template-view progress::-moz-progress-bar {\\n    background-color: #ffd939;\\n    border-radius: 2px;\\n}\\n.uploader-custom-file-drop-target progress {\\n    border: 1px solid lightgrey;\\n    background-color: #ffffff;\\n    border-radius: 2px;\\n}\\n.highcontrast .uploader-custom-file-drop-target progress {\\n    background-color: #000000;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-AKCBNP47DT3PFGRK7KSU3VWUUB7G6VMVS76UHZZZC2BQNLNYCVQQ/Samples/uploader/custom-file-list/App.vue?vue&type=style&index=1&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,cAAc;CACjB;AACD;IACI,YAAY;IACZ,aAAa;CAChB;AACD;IACI,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;CACnB;AACD;IACI,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;CACZ;AACD;IACI,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;CACtB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,4BAA4B;IAC5B,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,gCAAgC;CACnC;AACD;IACI,kEAAkE;IAClE,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;CACvB;AACD;IACI,eAAe;IACf,aAAa;IACb,aAAa;IACb,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,WAAW;CACd;AACD;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;CAC5B;AACD;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,SAAS;CACZ;AACD;GACG,cAAc;CAChB;AACD;IACI,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,UAAU;CACb;AACD;IACI,sCAAsC;IACtC,0BAA0B;IAC1B,mBAAmB;IACnB,8BAA8B;CACjC;AACD;IACI,0BAA0B;IAC1B,aAAa;CAChB;AACD;IACI,eAAe;CAClB;AACD;GACG,eAAe;CACjB;AACD;IACI,eAAe;CAClB;AACD;IACI,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,0BAA0B;CAC7B;AACD;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,WAAW;CACd;AACD;IACI,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,0BAA0B;CAC7B;AACD;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,WAAW;CACd;AACD;IACI,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=1&lang=css&\",\"sourcesContent\":[\"\\n.uploader-template-view.control_wrapper {\\n    max-width: 400px;\\n    margin: auto;\\n}\\n.uploader-template-view .e-file-select-wrap {\\n    display: none;\\n}\\n.uploader-template-view .e-upload {\\n    float: none;\\n    border: none;\\n}\\n.uploader-template-view .ul-element {\\n    list-style: none;\\n    width: 100%;\\n    padding-left: 0;\\n}\\n.uploader-template-view .file-name {\\n    padding: 8px 6px 8px 0;\\n    font-size: 13px;\\n    width: 46%;\\n    display: inline-block;\\n    position: relative;\\n    top: 4px;\\n}\\n.e-bigger .uploader-template-view .file-name {\\n    font-size: 14px;\\n}\\n.uploader-template-view .file-size {\\n    padding: 4px;\\n    font-size: 13px;\\n    width: 18%;\\n    display: inline-block;\\n    position: relative;\\n}\\n.e-bigger .uploader-template-view .file-size {\\n    font-size: 14px;\\n}\\n.uploader-template-view .file-lists {\\n    border: 1px solid lightgray;\\n    padding: 0 6px 0 14px;\\n    margin-top: 15px;\\n    position: relative;\\n    background: rgba(0, 0, 0, 0.04);\\n}\\n.uploader-template-view .file-size, .uploader-template-view .file-name {\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    text-overflow: ellipsis;\\n    overflow: hidden;\\n    white-space: nowrap;\\n}\\n.uploader-template-view span.progress-bar-container {\\n    display: block;\\n    float: right;\\n    height: 20px;\\n    right: 13%;\\n    top: 14px;\\n    position: relative;\\n    width: 20%;\\n}\\n.uploader-template-view .progress{\\n    width: 100%;\\n    height: 15px;\\n    -webkit-appearance: none;\\n}\\n.uploader-template-view .close-icon-container\\n{\\n    cursor: pointer;\\n    font-size: 11px;\\n    height: 24px;\\n    margin: 0 12px 0 22px;\\n    padding: 0;\\n    position: absolute;\\n    right: 0;\\n    width: 24px;\\n    top: 6px;\\n}\\n.uploader-template-view .close-icon-container.remove-btn {\\n   display: none;\\n}\\n.uploader-template-view .close-icon-container.e-icons::before {\\n    left: 7px;\\n    position: inherit;\\n    top: 7px;\\n    content: '\\\\e932';\\n}\\n.uploader-template-view .close-icon-container.delete-icon::before {\\n    content: '\\\\e94a';\\n}\\n.tailwind .uploader-template-view .close-icon-container.delete-icon::before {\\n    content: '\\\\e78d';\\n}\\n.tailwind .uploader-template-view .close-icon-container.delete-icon {\\n    top: 10px;\\n}\\n.uploader-template-view .close-icon-container:hover {\\n    background-color: rgba(0, 0, 0, 0.12);\\n    border-color: transparent;\\n    border-radius: 50%;\\n    box-shadow: 0 0 0 transparent;\\n}\\n.highcontrast .uploader-template-view .close-icon-container:hover {\\n    background-color: #ffd939;\\n    color: black;\\n}\\n.highcontrast .uploader-template-view .close-icon-container {\\n    color: #ffffff;\\n}\\n.uploader-template-view .upload-success {\\n   color: #2bc700;\\n}\\n.uploader-template-view .upload-fails {\\n    color: #f44336;\\n}\\n.uploader-template-view progress::-webkit-progress-bar {\\n    border: 1px solid lightgrey;\\n    background-color: #ffffff;\\n    border-radius: 2px;\\n}\\n.highcontrast .uploader-template-view progress::-webkit-progress-bar {\\n    background-color: #000000;\\n}\\n.material .uploader-template-view progress::-webkit-progress-value {\\n    border-radius: 2px; \\n    background-color: #ff4081;\\n}\\n.bootstrap .uploader-template-view progress::-webkit-progress-value {\\n    border-radius: 2px; \\n    background-color: #1f496e;\\n}\\n.fabric .uploader-template-view progress::-webkit-progress-value {\\n    background-color: #1763ff;\\n    border-radius: 2px; \\n    top: -66px;\\n}\\n.highcontrast .uploader-template-view progress::-webkit-progress-value {\\n    background-color: #ffd939;\\n    border-radius: 2px;\\n}\\n.material .uploader-template-view progress::-moz-progress-bar {\\n    border-radius: 2px; \\n    background-color: #ff4081;\\n}\\n.bootstrap .uploader-template-view progress::-moz-progress-bar {\\n    border-radius: 2px; \\n    background-color: #1f496e;\\n}\\n.fabric .uploader-template-view progress::-moz-progress-bar {\\n    background-color: #1763ff;\\n    border-radius: 2px; \\n    top: -66px;\\n}\\n.highcontrast .uploader-template-view progress::-moz-progress-bar {\\n    background-color: #ffd939;\\n    border-radius: 2px;\\n}\\n.uploader-custom-file-drop-target progress {\\n    border: 1px solid lightgrey;\\n    background-color: #ffffff;\\n    border-radius: 2px;\\n}\\n.highcontrast .uploader-custom-file-drop-target progress {\\n    background-color: #000000;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/custom-file-list/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs/uploader */ \"./node_modules/@syncfusion/ej2-vue-inputs/uploader.js\");\n/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-popups */ \"./node_modules/@syncfusion/ej2-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"UploaderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_5__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n          path:  {\n            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',\n            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'\n          },\n          dropElement: '.control-fluid',\n          filesList: [],\n          filesDetails: [],\n          parentElement: '',\n          progressbarContainer: ''\n        }\n    },\n    mounted: function () {\n        document.getElementById('browse').onclick = function() {\n        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();\n        return false;\n    };\n        document.getElementById('clearbtn').onclick = () => {            \n            if(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(document.getElementById('dropTarget').querySelector('.upload-list-root'))) {\n                this.$refs.uploadObj.$el.value = '';\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(document.getElementById('dropTarget').querySelector('.upload-list-root')); \n                this.$refs.uploadObj.filesDetails=[];\n                this.$refs.uploadObj.filesList=[];\n            }\n        };\n    },\n    methods:{\n\n        onFileSelect: function (args) {\n            if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(document.getElementById('dropTarget').querySelector('.upload-list-root'))) {\n                this.parentElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('div', { className: 'upload-list-root' });\n                this.parentElement.appendChild(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('ul', {className: 'ul-element' }));\n                document.getElementById('dropTarget').appendChild(this.parentElement);\n            }\n            for (let i = 0; i < args.filesData.length; i++) {\n                this.formSelectedData(args.filesData[i]); \n            }\n            this.filesDetails = this.filesDetails.concat(args.filesData);\n            this.$refs.uploadObj.upload(args.filesData, true);\n            args.cancel = true;\n        },\n\n        formSelectedData: function ( selectedFiles) {\n            let liEle = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('li',  { className: 'file-lists', attrs: {'data-file-name' : selectedFiles.name} });\n            liEle.appendChild(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('span', {className: 'file-name ', innerHTML: selectedFiles.name }));\n            liEle.appendChild(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('span', {className: 'file-size ', innerHTML: this.$refs.uploadObj.bytesToSize(selectedFiles.size) }));\n            if (selectedFiles.statusCode === '1') {\n                this.progressbarContainer = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('span', {className: 'progress-bar-container'});\n                this.progressbarContainer.appendChild(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('progress', {className: 'progress', attrs: {value : '0', max : '100'}} ));\n                liEle.appendChild(this.progressbarContainer);\n            } else { liEle.querySelector('.file-name').classList.add('upload-fails'); }\n            let closeIconContainer = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('span', {className: 'e-icons close-icon-container'});\n            let localObj = this;\n            closeIconContainer.addEventListener( 'click', function(e) {\n                localObj.removeFiles(e);\n            });\n            liEle.appendChild(closeIconContainer); document.querySelector('.ul-element').appendChild(liEle);\n            this.filesList.push(liEle);\n        },\n           \n        onFileUpload: function(args) {\n            let li = document.getElementById('dropTarget').querySelector('[data-file-name=\"' + args.file.name + '\"]');\n            let localObj = this;\n            let progressValue = Math.round((args.e.loaded / args.e.total) * 100);\n            if (!isNaN(progressValue)) { \n                li.getElementsByTagName('progress')[0].value = progressValue;\n            }\n        },\n\n        onUploadSuccess: function(args) {\n            let spinnerElement = document.getElementById('dropTarget');\n            let li= document.getElementById('dropTarget').querySelector('[data-file-name=\"' + args.file.name + '\"]');\n            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(li.querySelector('.progress-bar-container'))) { \n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(li.querySelector('.progress-bar-container')); \n            }\n            let localObj = this;\n            if (args.operation === 'upload') {\n                li.querySelector('.file-name').classList.add('upload-success');\n                li.querySelector('.close-icon-container').classList.remove('remove-btn');\n                li.querySelector('.close-icon-container').classList.add('delete-icon');\n                (li.querySelector('.close-icon-container')).onclick = function() {\n                    localObj.generateSpinner(li.querySelector('.close-icon-container')); \n                };\n                (li.querySelector('.close-icon-container')).onkeydown = function(e) {\n                    if (e.keyCode === 13) { \n                        localObj.generateSpinner(e.target.closest('.e-upload')); \n                    }\n                };\n            }\n            if (args.operation === 'remove') {\n                this.filesDetails.splice(this.filesList.indexOf(li), 1);\n                this.filesList.splice(this.filesList.indexOf(li), 1);\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(li);\n                Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__[\"hideSpinner\"])(li.querySelector('.close-icon-container'));\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(li.querySelector('.e-spinner-pane'));\n            }\n        },\n\n        generateSpinner: function(targetElement) {\n            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__[\"createSpinner\"])({ target: targetElement, width: '25px' });\n            Object(_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__[\"showSpinner\"])(targetElement);\n        },\n\n        onUploadFailed: function(args) {\n            let li = document.getElementById('dropTarget').querySelector('[data-file-name=\"' + args.file.name + '\"]');\n            let localObj = this;\n            li.querySelector('.file-name').classList.add('upload-fails');\n            li.querySelector('.close-icon-container').classList.remove('remove-btn');\n            if (args.operation === 'remove') {\n                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(li)) {\n                    this.filesDetails.splice(this.filesList.indexOf(li), 1);\n                    this.filesList.splice(this.filesList.indexOf(li), 1);\n                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(li);\n                }\n            }\n            if (args.operation === 'upload') {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(li.querySelector('.progress-bar-container')); \n            }\n        },\n\n        removeFiles: function(args) {\n            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(args.currentTarget)) {\n                if (this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode === '3') { return;}\n                if (this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode === '2' ) {\n                    this.$refs.uploadObj.remove(this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)]);\n                } else  { \n                    this.onFileRemove(args); \n                }\n            }\n        },\n\n        onFileRemove: function(args) {\n            args.postRawFile = false;\n            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(args.currentTarget)) {\n                if (this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode !== '2') {\n                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"detach\"])(args.currentTarget.parentElement);\n                    this.filesList.splice(this.filesList.indexOf(args.currentTarget.parentElement), 1);\n                }\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/custom-file-list/App.vue?vue&type=template&id=4dd861a2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/custom-file-list/App.vue?vue&type=template&id=4dd861a2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-8 control-section uploader uploader-template-view\"\n      },\n      [\n        _c(\"div\", { staticClass: \"control_wrapper\" }, [\n          _c(\"div\", { staticClass: \"sample_wrapper\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"uploader-custom-file-drop-target\",\n                attrs: { id: \"dropTarget\" }\n              },\n              [\n                _vm._m(0),\n                _vm._v(\" \"),\n                _c(\"ejs-uploader\", {\n                  ref: \"uploadObj\",\n                  attrs: {\n                    id: \"template\",\n                    name: \"UploadFiles\",\n                    asyncSettings: _vm.path,\n                    dropArea: _vm.dropElement,\n                    selected: _vm.onFileSelect,\n                    progress: _vm.onFileUpload,\n                    success: _vm.onUploadSuccess,\n                    failure: _vm.onUploadFailed,\n                    removing: _vm.onFileRemove\n                  }\n                })\n              ],\n              1\n            )\n          ])\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"div\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n        _c(\n          \"div\",\n          { staticStyle: { \"margin-left\": \"50px\", \"padding-top\": \"25px\" } },\n          [\n            _c(\"ejs-button\", { attrs: { id: \"clearbtn\" } }, [\n              _vm._v(\"CLEAR ALL\")\n            ])\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"span\",\n      {\n        staticClass: \"droparea uploader-custom-file-drop-area\",\n        attrs: { id: \"dropElement\" }\n      },\n      [\n        _vm._v(\"Drop files here or \"),\n        _c(\"a\", { attrs: { href: \"\", id: \"browse\" } }, [\n          _c(\"u\", [_vm._v(\"Browse\")])\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This example demonstrates how to customize the file list with template. Browse or select the files to view the file list template.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The Uploader component allows to customize its file list using\\n           \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/api/uploader/#template\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\" template\")]\n        ),\n        _vm._v(\n          \"  property.\\n         The template used for each file in file list.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"For more information, you can refer to the \\n           \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/uploader/template/\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"\\n           Template \")]\n        ),\n        _vm._v(\" section from the documentation.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/uploader/custom-file-list/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });