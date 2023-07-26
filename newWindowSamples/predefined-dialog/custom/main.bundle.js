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
/******/ 		"predefined-dialog/custom/main": 0
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
/******/ 	deferredModules.push(["./Samples/predefined-dialog/custom/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/predefined-dialog/custom/App.vue":
/*!**************************************************!*\
  !*** ./Samples/predefined-dialog/custom/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_9602a412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9602a412& */ \"./Samples/predefined-dialog/custom/App.vue?vue&type=template&id=9602a412&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/predefined-dialog/custom/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_9602a412_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=9602a412&lang=css& */ \"./Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_9602a412___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_9602a412___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/predefined-dialog/custom/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/custom/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/predefined-dialog/custom/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/custom/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9602a412_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=9602a412&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9602a412_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9602a412_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9602a412_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9602a412_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/custom/App.vue?vue&type=template&id=9602a412&":
/*!*********************************************************************************!*\
  !*** ./Samples/predefined-dialog/custom/App.vue?vue&type=template&id=9602a412& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9602a412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9602a412& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/custom/App.vue?vue&type=template&id=9602a412&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9602a412___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9602a412___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/custom/main.js":
/*!**************************************************!*\
  !*** ./Samples/predefined-dialog/custom/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/predefined-dialog/custom/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-btn-hide {\\n\\t\\tdisplay: none;\\n}\\n    /* custom code start */\\n.dlgbtn {\\n\\t    margin-right: 2%;\\n}\\n.control-section {\\n        height: 100%;\\n        min-height: 350px;\\n}\\n.control-section .e-btn {\\n        margin-right: 5px;\\n}\\n.e-circle-check{\\n      color:green;\\n}\\n.contentInsideDialog {\\n        display: flex;\\n        justify-content: center;\\n}\\n.e-changes-reject {\\n        display: inline;\\n        float: left;\\n        font-size: 40px;\\n        padding-right: 10px;\\n}\\n.e-changes-track {\\n        float: left;\\n        padding-right: 10px;\\n        width: 35px;\\n        height: 100px;\\n        font-size: 30px;\\n        display: inline;\\n}\\n    /* custom code end */ \\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ups-vue-samples_development-X5FQGTAEE77BIOG4VJEY7D6J7R7DIQAUFAFTI2UG4SVDPYRGNC7A/Samples/predefined-dialog/custom/App.vue?vue&type=style&index=0&id=9602a412&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;CACf;IACG,uBAAuB;AAC3B;KACK,iBAAiB;CACrB;AACD;QACQ,aAAa;QACb,kBAAkB;CACzB;AACD;QACQ,kBAAkB;CACzB;AACD;MACM,YAAY;CACjB;AACD;QACQ,cAAc;QACd,wBAAwB;CAC/B;AACD;QACQ,gBAAgB;QAChB,YAAY;QACZ,gBAAgB;QAChB,oBAAoB;CAC3B;AACD;QACQ,YAAY;QACZ,oBAAoB;QACpB,YAAY;QACZ,cAAc;QACd,gBAAgB;QAChB,gBAAgB;CACvB;IACG,qBAAqB\",\"file\":\"App.vue?vue&type=style&index=0&id=9602a412&lang=css&\",\"sourcesContent\":[\"\\n.e-btn-hide {\\n\\t\\tdisplay: none;\\n}\\n    /* custom code start */\\n.dlgbtn {\\n\\t    margin-right: 2%;\\n}\\n.control-section {\\n        height: 100%;\\n        min-height: 350px;\\n}\\n.control-section .e-btn {\\n        margin-right: 5px;\\n}\\n.e-circle-check{\\n      color:green;\\n}\\n.contentInsideDialog {\\n        display: flex;\\n        justify-content: center;\\n}\\n.e-changes-reject {\\n        display: inline;\\n        float: left;\\n        font-size: 40px;\\n        padding-right: 10px;\\n}\\n.e-changes-track {\\n        float: left;\\n        padding-right: 10px;\\n        width: 35px;\\n        height: 100px;\\n        font-size: 30px;\\n        display: inline;\\n}\\n    /* custom code end */ \\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/custom/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialog/custom/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return { }\n    },\n    methods: {\n    alertBtnClick: function () {\n      _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].alert({\n      title: '',\n      content:\n        '<span class=\"e-icons e-circle-check contentInsideDialog\" style=\"font-size: 60px;\"></span><p class=\"contentInsideDialog\" style=\"font-size:20px\">Good job!</p><p class=\"contentInsideDialog\">You clicked the button!</p>',\n      okButton: { text: 'Ok' },\n      showCloseIcon: false,\n      closeOnEscape: true,\n      animationSettings: { effect: 'Zoom',delay:0,duration: 250},\n      position: { X: 'center', Y: 'center' },\n      width:'240px'\n    });\n    },\n     confirmBtnClick: function () {\n      _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].confirm({\n      title: ' Delete file',\n      content:\n        '<p><span class=\" e-icons e-changes-reject \"></span>Are you sure you want to permanently delete this file?</p><p style=\"margin: 20px 0 0 50px;\"><span class=\" e-icons e-changes-track \"></span>failed personas.png <br/>Item type:PNG File<br/>Dimenstion: 1384 * 782<br/>Size:374 KB</br>Original Location: C:/Users/jakob/Documents</p>',\n      okButton: { text: 'Yes ' },\n      cancelButton: { text: 'No ' },\n      showCloseIcon: true,\n      closeOnEscape: true,\n      animationSettings: { effect: 'Zoom',delay:0,duration: 250},\n      position: { X: 'center', Y: 'center' },\n      width:'420px'\n    });\n    },\n     promptBtnClick  : function () {\n     _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].confirm({\n      title: 'Join Wi-Fi network',\n      content:\n        '<table class=\"Table\"><tbody><tr><td>SSID:</td></tr><tr><td><b>AndroidAP</b></td> </tr> <tr> <td>Password:</td> </tr> <tr> <td> <span class=\"e-input-group\"> <input type=\"password\" id=\"password\" name=\"Required\" class=\"e-input\"> </span> </td> </tr> </tbody> </table> ',\n      okButton: { text: 'Okay ' },\n      cancelButton: { text: 'Cancel ' },\n      showCloseIcon: false,\n      closeOnEscape: true,\n      animationSettings: { effect: 'Zoom',delay:0,duration: 250},\n      position: { X: 'center', Y: 'center' },\n      width: '240px'\n    });\n    },\n\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/custom/App.vue?vue&type=template&id=9602a412&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialog/custom/App.vue?vue&type=template&id=9602a412& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section\",staticStyle:{\"padding\":\"10px\",\"position\":\"relative\"}},[_c('ejs-button',{attrs:{\"id\":\"alertDlgBtn\"},nativeOn:{\"click\":function($event){return _vm.alertBtnClick.apply(null, arguments)}}},[_vm._v(\"alert\")]),_vm._v(\" \"),_c('ejs-button',{attrs:{\"id\":\"ConfirmDlgBtn\"},nativeOn:{\"click\":function($event){return _vm.confirmBtnClick.apply(null, arguments)}}},[_vm._v(\"confirm\")]),_vm._v(\" \"),_c('ejs-button',{attrs:{\"id\":\"PromptDlgBtn\"},nativeOn:{\"click\":function($event){return _vm.promptBtnClick.apply(null, arguments)}}},[_vm._v(\"prompt\")])],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n          This example demonstrates the different types of content used in the alert, confirm, and prompt Dialog. These buttons are used to open the corresponding Dialogs. \\n      \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_vm._v(\"\\n         The Dialog component is used to display messages such as supplementary content like images, text, and interactive content like form components within a web page. \\n         The content property accepts both string and HTML elements as content. \\n         More information on the Dialog instantiation can be found in the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/dialog/dialog-utility/\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n      \\n  \")])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/custom/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });