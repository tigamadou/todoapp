/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_undraw_accept_request_vdsd_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/undraw_accept_request_vdsd.svg */ "./src/assets/images/undraw_accept_request_vdsd.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Pangolin&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_undraw_accept_request_vdsd_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\nhtml,\nbody {\n  padding: 0;\n  background: #eaeaea;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-family: \"Pangolin\", cursive;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.header {\n  text-align: center;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.app {\n  width: 100%;\n  width: 1200px;\n  height: 90vh;\n  display: flex;\n  background: #fff;\n  border-radius: 30px;\n  overflow: hidden;\n  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3);\n}\n.app .container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.app .container .header {\n  background: #ff2e63;\n  padding: 1.45rem 2rem;\n  margin: 0;\n  color: #fff;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.app .container .header .todoGobackButton {\n  margin-right: 1rem;\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.app .container .header .todoGobackButton:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.app .container .header .addNewTodo {\n  background: #ff2e63;\n  border: 1px solid #c70032;\n  color: #fff;\n  height: 50px;\n  line-height: 50px;\n  font-weight: bold;\n  border-radius: 30px;\n  padding: 0 2rem;\n  box-shadow: 0 5px 5px -5px #fa003f;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n}\n.app .container .header .addNewTodo:hover {\n  box-shadow: 0 10px 5px -5px #fa003f;\n  background: #fff;\n  color: #ff2e63;\n}\n.app .container .body {\n  padding: 2rem;\n  overflow: auto;\n  flex: 1;\n}\n.app .container .body .defaultView {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  height: 50vh;\n}\n.app .container .body .form {\n  width: 300px;\n  background: #f9f9f9;\n  padding: 1rem;\n}\n.app .container .body .form .field {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.app .container .body .form .field label {\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n.app .container .body .form .field .input {\n  border-radius: 10px;\n  border: 1px solid #f1f1f1;\n  padding: 10px;\n}\n.app .container .body .projectForm {\n  max-width: 500px;\n  margin: auto;\n  padding: 1rem;\n}\n.app .container .body .projectForm .field {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n}\n.app .container .body .projectForm .field .input {\n  border-radius: 10px;\n  padding: 1rem;\n  flex: 1;\n  border: 1px solid #f1f1f1;\n  font-size: 1.3rem;\n}\n.app .container .body .projectForm .field .btn {\n  margin-top: 16px;\n  padding: 10px 15px;\n  border: 1px solid #f1f1f1;\n  background: #08d9d6;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n.app .container .body .projectForm .field .btn span {\n  margin-right: 1rem;\n}\n.app .container .body .TodoForm .field,\n.app .container .body .TodoEditForm .field {\n  display: flex;\n  position: relative;\n  border-radius: 30px;\n  margin-bottom: 16px;\n}\n.app .container .body .TodoForm .field .textarea,\n.app .container .body .TodoEditForm .field .textarea {\n  border-radius: 30px;\n  padding: 1rem;\n  flex: 1;\n  border: 1px solid #f1f1f1;\n  font-size: 1.3rem;\n  background: #f9f9f9;\n}\n.app .container .body .TodoForm .field .input,\n.app .container .body .TodoEditForm .field .input {\n  background: #f9f9f9;\n  border-radius: 30px;\n  padding: 0 50px 0 1rem;\n  height: 50px;\n  flex: 1;\n  border: 1px solid #f1f1f1;\n  font-size: 1.3rem;\n}\n.app .container .body .TodoForm .field .btn,\n.app .container .body .TodoEditForm .field .btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 50px;\n  width: 50px;\n  font-size: 1.3rem;\n  border: 1px solid #f1f1f1;\n  background: #08d9d6;\n  color: #fff;\n  cursor: pointer;\n}\n.app .container .body .TodoForm .field .btn.is-block,\n.app .container .body .TodoEditForm .field .btn.is-block {\n  display: inline-block;\n  border-radius: 50%;\n  position: relative;\n}\n.app .container .body .TodoForm .field .btn.is-block.is-danger,\n.app .container .body .TodoEditForm .field .btn.is-block.is-danger {\n  background: #e74c3c;\n}\n.app .container .body .TodoForm .field .btn span,\n.app .container .body .TodoEditForm .field .btn span {\n  margin-right: 1rem;\n}\n.app .container .body .TodoForm .fields,\n.app .container .body .TodoEditForm .fields {\n  display: flex;\n}\n.app .container .body .TodoForm .fields .field,\n.app .container .body .TodoEditForm .fields .field {\n  flex: 1;\n}\n.app .container .body .button {\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n}\n.app .container .body .button:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.app .container .body .todoList {\n  padding: 2rem 0;\n}\n.app .container .body .todoList .todo {\n  margin: auto;\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  padding: 1rem;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  border-bottom: 1px solid #f1f1f1;\n}\n.app .container .body .todoList .todo:hover {\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 20px 5px -10px rgba(200, 200, 200, 0.1);\n  background: #fff;\n  transform: scale(1.01);\n  z-index: 3;\n}\n.app .container .body .todoList .todo.is-checked {\n  background: #fefefe;\n  color: #ccc;\n}\n.app .container .body .todoList .todo.is-checked .title {\n  text-decoration: line-through;\n}\n.app .container .body .todoList .todo.is-checked:hover {\n  transform: none;\n  box-shadow: none;\n}\n.app .container .body .todoList .todo input[type=checkbox] {\n  position: absolute;\n  left: -9999px;\n}\n.app .container .body .todoList .todo input[type=checkbox] + label {\n  position: relative;\n  min-height: 30px;\n  min-width: 30px;\n  margin-right: 2rem;\n}\n.app .container .body .todoList .todo input[type=checkbox] + label::before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  min-height: 30px;\n  min-width: 30px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  z-index: 1;\n  cursor: pointer;\n  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);\n}\n.app .container .body .todoList .todo input[type=checkbox] + label::after {\n  z-index: 2;\n  cursor: pointer;\n  content: \"✓ \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px solid transparent;\n  min-height: 30px;\n  min-width: 30px;\n  font-size: 1rem;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  background: #08d9d6;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.app .container .body .todoList .todo input[type=checkbox]:checked + label::after {\n  transform: scale(1);\n}\n.app .container .body .todoList .todo .details {\n  font-size: 16px;\n  flex: 1;\n  display: flex;\n}\n.app .container .body .todoList .todo .preview {\n  flex: 1;\n  font-size: 1.2rem;\n  line-height: 30px;\n}\n.app .container .body .todoList .todo .preview .title {\n  flex: 1;\n  text-transform: capitalize;\n}\n.app .container .body .todoList .todo .preview .tag {\n  font-size: 1rem;\n}\n.app .container .body .todoList .todo .preview .tag .icon {\n  margin-right: 16px;\n  font-size: 1.2rem;\n  color: #ccc;\n}\n.app .container .body .todoList .todo::after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n}\n.app .container .body .todoList .todo.is-default::after {\n  background: #ccc;\n}\n.app .container .body .todoList .todo.is-low::after {\n  background: #08d9d6;\n}\n.app .container .body .todoList .todo.is-medium::after {\n  background: #f39c12;\n}\n.app .container .body .todoList .todo.is-high::after {\n  background: #e74c3c;\n}\n.app .sidebar {\n  margin: 0;\n  background: #fff;\n  width: 20vw;\n  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n.app .sidebar .projects {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  flex-direction: column;\n}\n.app .sidebar .projects .header {\n  background: #ff2e63;\n  color: #fff;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 1rem;\n}\n.app .sidebar .projects .header h2 {\n  font-size: 3rem;\n  margin: 0 0 16px 0;\n}\n.app .sidebar .projects .content {\n  padding: 1rem;\n  flex: 1;\n  flex-grow: 1;\n  overflow: auto;\n}\n.app .sidebar .projects .content .newProjectButton {\n  padding: 10px;\n  color: #ff2e63;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  font-weight: 900;\n}\n.app .sidebar .projects .content .newProjectButton:hover {\n  background: #ff2e63;\n  color: #fff;\n}\n.app .sidebar .projects .content .projectList .project {\n  padding: 1rem;\n  transition: all 0.25s ease-in-out;\n  font-weight: 400;\n  font-size: 1.3rem;\n  border-radius: 30px;\n}\n.app .sidebar .projects .content .projectList .project:hover {\n  background: #ff2e63;\n  cursor: pointer;\n  color: #fff;\n}\n.app .sidebar .projects .content .projectList .project.active {\n  background: #ff2e63;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://src/assets/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\n@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');\n$primaryColor: #ff2e63;\n$default: #ccc;\n$success: #08d9d6;\n$warning: #f39c12;\n$danger:  #e74c3c;\n\nhtml,\nbody {\n  padding: 0;\n  background: #eaeaea;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-family: 'Pangolin', cursive;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.header {\n  text-align: center;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.app {\n  width: 100%;\n  width: 1200px;\n  height: 90vh;\n  display: flex;\n  background: #fff;\n  border-radius: 30px;\n  overflow: hidden;\n  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3);\n\n  .container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    .header {\n      background: $primaryColor;\n      padding: 1.45rem 2rem;\n      margin: 0;\n      color: #fff;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n\n      .todoGobackButton {\n        margin-right: 1rem;\n        cursor: pointer;\n        height: 50px;\n        width: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n\n        &:hover {\n          background: rgba(0, 0, 0, 0.1);\n        }\n      }\n\n      .addNewTodo {\n        background: $primaryColor;\n        border: 1px solid darken($primaryColor, 20%);\n        color: #fff;\n        height: 50px;\n        line-height: 50px;\n        font-weight: bold;\n        border-radius: 30px;\n        padding: 0 2rem;\n        box-shadow: 0 5px 5px -5px darken($primaryColor, 10%);\n        cursor: pointer;\n        transition: all 0.25s ease-in-out;\n\n        &:hover {\n          box-shadow: 0 10px 5px -5px darken($primaryColor, 10%);\n          background: #fff;\n          color: $primaryColor;\n        }\n      }\n    }\n\n    .body {\n      padding: 2rem;\n      overflow: auto;\n      flex: 1;\n\n      .defaultView {\n        background-image: url('../images/undraw_accept_request_vdsd.svg');\n        background-size: 100% 100%;\n        height: 50vh;\n      }\n\n      .form {\n        width: 300px;\n        background: #f9f9f9;\n        padding: 1rem;\n\n        .field {\n          display: flex;\n          flex-direction: column;\n          margin-bottom: 16px;\n\n          label {\n            font-size: 1.2rem;\n            margin-bottom: 10px;\n          }\n\n          .input {\n            border-radius: 10px;\n            border: 1px solid #f1f1f1;\n            padding: 10px;\n          }\n        }\n      }\n\n      .projectForm {\n        max-width: 500px;\n        margin: auto;\n        padding: 1rem;\n\n        .field {\n          display: flex;\n          flex-direction: column;\n          border-radius: 10px;\n\n          .input {\n            border-radius: 10px;\n            padding: 1rem;\n            flex: 1;\n            border: 1px solid #f1f1f1;\n            font-size: 1.3rem;\n          }\n\n          .btn {\n            margin-top: 16px;\n            padding: 10px 15px;\n            border: 1px solid #f1f1f1;\n            background: $success;\n            color: #fff;\n            border-radius: 5px;\n            cursor: pointer;\n            font-size: 1.3rem;\n\n            span {\n              margin-right: 1rem;\n            }\n          }\n        }\n      }\n\n      .TodoForm,\n      .TodoEditForm {\n        .field {\n          display: flex;\n          //   border: 1px solid #f1f1f1;\n          position: relative;\n          border-radius: 30px;\n          margin-bottom: 16px;\n\n          .textarea {\n            border-radius: 30px;\n            padding: 1rem;\n            flex: 1;\n            border: 1px solid #f1f1f1;\n            font-size: 1.3rem;\n            background: #f9f9f9;\n          }\n\n          .input {\n            background: #f9f9f9;\n            border-radius: 30px;\n            padding: 0 50px 0 1rem;\n            height: 50px;\n            flex: 1;\n            border: 1px solid #f1f1f1;\n            font-size: 1.3rem;\n          }\n\n          .btn {\n            position: absolute;\n            right: 0;\n            top: 0;\n            height: 50px;\n            width: 50px;\n            font-size: 1.3rem;\n            border: 1px solid #f1f1f1;\n            background: $success;\n            color: #fff;\n            cursor: pointer;\n\n            &.is-block {\n              display: inline-block;\n              border-radius: 50%;\n              position: relative;\n\n              &.is-danger {\n                background: $danger;\n              }\n            }\n\n            span {\n              margin-right: 1rem;\n            }\n          }\n        }\n\n        .fields {\n          display: flex;\n\n          .field {\n            flex: 1;\n          }\n        }\n      }\n\n      .button {\n        cursor: pointer;\n        padding: 10px;\n        border-radius: 50%;\n        height: 30px;\n        width: 30px;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 1rem;\n\n        &:hover {\n          background: rgba(0, 0, 0, 0.1);\n        }\n      }\n\n      .todoList {\n        padding: 2rem 0;\n\n        .todo {\n          margin: auto;\n          border-radius: 20px;\n          overflow: hidden;\n          display: flex;\n          padding: 1rem;\n          position: relative;\n          transition: all 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n          border-bottom: 1px solid #f1f1f1;\n\n          &:hover {\n            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 20px 5px -10px rgba(200, 200, 200, 0.1);\n            background: #fff;\n            transform: scale(1.01);\n            z-index: 3;\n          }\n\n          &.is-checked {\n            background: rgb(254, 254, 254);\n            color: #ccc;\n\n            .title {\n              text-decoration: line-through;\n            }\n\n            &:hover {\n              transform: none;\n              box-shadow: none;\n            }\n          }\n\n          input[type=checkbox] {\n            position: absolute;\n            left: -9999px;\n          }\n\n          input[type=checkbox] + label {\n            position: relative;\n            min-height: 30px;\n            min-width: 30px;\n            margin-right: 2rem;\n          }\n\n          input[type=checkbox] + label::before {\n            position: absolute;\n            content: '';\n            left: 0;\n            top: 0;\n            min-height: 30px;\n            min-width: 30px;\n            border: 2px solid #ccc;\n            border-radius: 50%;\n            z-index: 1;\n            cursor: pointer;\n            box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);\n          }\n\n          input[type=checkbox] + label::after {\n            z-index: 2;\n            cursor: pointer;\n            content: '\\2713\\0020';\n            position: absolute;\n            left: 0;\n            top: 0;\n            border: 2px solid transparent;\n            min-height: 30px;\n            min-width: 30px;\n            font-size: 1rem;\n            line-height: 30px;\n            text-align: center;\n            color: #fff;\n            background: $success;\n            border-radius: 50%;\n            transform: scale(0);\n            transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          }\n\n          input[type=checkbox]:checked + label::after {\n            transform: scale(1);\n          }\n\n          .details {\n            font-size: 16px;\n            flex: 1;\n            display: flex;\n          }\n\n          .preview {\n            flex: 1;\n            font-size: 1.2rem;\n            line-height: 30px;\n\n            .title {\n              flex: 1;\n              text-transform: capitalize;\n            }\n\n            .tag {\n              font-size: 1rem;\n\n              .icon {\n                margin-right: 16px;\n                font-size: 1.2rem;\n                color: #ccc;\n              }\n            }\n          }\n\n          &::after {\n            position: absolute;\n            content: '';\n            left: 0;\n            top: 0;\n            bottom: 0;\n            width: 2px;\n          }\n\n          &.is-default {\n            &::after {\n              background: $default;\n            }\n          }\n\n          &.is-low {\n            &::after {\n              background: $success;\n            }\n          }\n\n          &.is-medium {\n            &::after {\n              background: $warning;\n            }\n          }\n\n          &.is-high {\n            &::after {\n              background: $danger;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .sidebar {\n    margin: 0;\n    background: #fff;\n    width: 20vw;\n    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);\n    z-index: 1;\n\n    .projects {\n      display: flex;\n      flex: 1;\n      height: 100%;\n      flex-direction: column;\n\n      .header {\n        background: $primaryColor;\n        color: #fff;\n        border-bottom: 1px solid  #f1f1f1;\n        padding: 1rem;\n\n        h2 {\n          font-size: 3rem;\n          margin: 0 0 16px 0;\n        }\n      }\n\n      .content {\n        padding: 1rem;\n\n        .newProjectButton {\n          padding: 10px;\n          color: $primaryColor;\n          border-radius: 10px;\n          cursor: pointer;\n          font-size: 1.3rem;\n          font-weight: 900;\n\n          &:hover {\n            background: $primaryColor;\n            color: #fff;\n          }\n        }\n\n        flex: 1;\n        flex-grow: 1;\n        overflow: auto;\n\n        .projectList {\n          .project {\n            padding: 1rem;\n            transition: all 0.25s ease-in-out;\n            font-weight: 400;\n            font-size: 1.3rem;\n            border-radius: 30px;\n\n            &:hover {\n              background: $primaryColor;\n              cursor: pointer;\n              color: #fff;\n            }\n\n            &.active {\n              background: $primaryColor;\n              color: #fff;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/images/undraw_accept_request_vdsd.svg":
/*!**********************************************************!*\
  !*** ./src/assets/images/undraw_accept_request_vdsd.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "66a1da840e0c89e034303bc2ee53c42a.svg");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function App() {
  const projects = [];
  let selectedProject = null;
  let selectedTodo = null;

  this.storeToLocal = () => {
    const datas = [];
    projects.forEach((project) => {
      datas.push({ name: project.getName(), id: project.getId(), todos: project.getDatas() });
    });
    localStorage.setItem('projects', JSON.stringify(datas));
  };
  this.addProject = (project) => {
    const exists = projects.filter((element) => project.getName() === element.getName())[0];
    if (!exists) {
      projects.push(project);
      return true;
    }

    return false;
  };

  this.addTodo = todo => {
    if (selectedProject) {
      const project = projects.filter((element) => selectedProject.getId() === element.getId())[0];
      const exists = project.getTodos().filter((element) => todo.getId() === element.getId())[0];
      if (exists) { return false; }

      project.addTodo(todo);
      this.setSelectedProject(project);
      return true;
    }

    return false;
  };

  this.editTodo = data => {
    const projectIndex = projects.findIndex(element => element.getId() === selectedProject.getId());
    const project = { ...projects[projectIndex] };
    const todoIndex = project.getTodos()
      .findIndex(element => element.getId() === selectedTodo.getId());
    const todo = { ...selectedTodo };
    todo.edit('', data.description, data.date, data.priority, todo.isChecked());
    todo.setName(data.name);
    todo.setId(data.name);
    project.updateTodo(todoIndex, todo);
    projects[projectIndex] = project;
  };

  this.deleteTodo = () => {
    const projectIndex = projects.findIndex(element => element.getId() === selectedProject.getId());
    const project = { ...projects[projectIndex] };
    const todoIndex = project.getTodos()
      .findIndex(element => element.getId() === selectedTodo.getId());
    project.deleteTodo(todoIndex);
    projects[projectIndex] = project;
    this.setSelectedProject(project);
  };

  this.getAll = () => projects;

  this.getProject = (id) => {
    const answ = projects.filter((element) => id === element.getId());
    if (answ.length === 0) {
      return false;
    }
    return answ[0];
  };

  this.getTodo = (id) => {
    if (selectedProject) {
      const project = projects.filter((element) => selectedProject.getId() === element.getId())[0];
      const todo = project.getTodos().filter((element) => id === element.getId())[0];
      if (!todo) { return false; }
      return todo;
    }
    return false;
  };
  this.upDateTodoChecked = (todo) => {
    const projectIndex = projects.findIndex(element => element.getId() === selectedProject.getId());
    const project = { ...projects[projectIndex] };
    const todoIndex = project.getTodos().findIndex(element => element.getId() === todo.getId());
    todo.toggleChecked();
    project.updateTodo(todoIndex, todo);
    projects[projectIndex] = project;
  };
  this.setSelectedProject = (project) => {
    selectedProject = project;
  };

  this.setSelectedTodo = (todo) => {
    selectedTodo = todo;
  };

  this.getSelectedProject = () => {
    if (selectedProject) {
      return selectedProject;
    }
    return false;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Project(vname) {
  let name = vname;
  const id = `${vname.toLowerCase().replace(/\W/g, '')}`;
  const todos = [];

  this.setName = (vname) => {
    name = vname;
  };

  this.getName = () => name;

  this.getId = () => id;

  this.addTodo = (todo) => {
    todos.push(todo);
  };

  this.deleteTodo = (index) => {
    todos.splice(index, 1);
  };

  this.getTodos = () => todos;

  this.getDatas = () => {
    const datas = [];
    todos.forEach((element) => {
      datas.push(element.getDatas());
    });

    return datas;
  };

  this.updateTodo = (index, todo) => {
    todos[index] = todo;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/components/Todo.js":
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Todo(vname) {
  let name = vname;
  let description = null;
  let date = null;
  let priority = 'default';
  let checked = false;
  // const timeStamp = ;
  let id = `${vname.toLowerCase().replace(/\W/g, '')}${new Date().getTime()}`;
  this.setId = (name) => {
    id = `${name.toLowerCase().replace(/\W/g, '')}${new Date().getTime()}`;
  };
  this.setName = (vname) => {
    name = vname;
  };
  this.getId = () => id;
  this.getName = () => name;
  this.getDescription = () => description;
  this.getDate = () => date;
  this.getPriority = () => priority;
  this.isChecked = () => checked;
  this.toggleChecked = () => { checked = !checked; };

  this.getDatas = () => ({
    id: this.getId(),
    name: this.getName(),
    description: this.getDescription(),
    date: this.getDate(),
    priority: this.getPriority(),
    checked: this.isChecked(),
  });
  this.edit = (newId, newDescription, newDate, newPriority, newChecked) => {
    id = newId;
    description = newDescription;
    date = newDate;
    priority = newPriority;
    checked = newChecked;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Todo);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/UI */ "./src/ui/UI.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Todo */ "./src/components/Todo.js");






const Layout = new _ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"]();
const APP = new _components_App__WEBPACK_IMPORTED_MODULE_2__["default"]();

document.body.appendChild(Layout.render());

if (!localStorage.getItem('projects')) {
  const defaultProject = new _components_Project__WEBPACK_IMPORTED_MODULE_3__["default"]('Today');
  defaultProject.addTodo(new _components_Todo__WEBPACK_IMPORTED_MODULE_4__["default"]('Default Task'));
  APP.addProject(defaultProject);
  Layout.addProject(defaultProject);
} else {
  const LocalDatas = JSON.parse(localStorage.getItem('projects'));
  LocalDatas.forEach((element) => {
    const project = new _components_Project__WEBPACK_IMPORTED_MODULE_3__["default"](element.name);
    element.todos.forEach((todo) => {
      const theTodo = new _components_Todo__WEBPACK_IMPORTED_MODULE_4__["default"](todo.name);
      theTodo.edit(todo.id, todo.description, todo.date, todo.priority, todo.checked);
      project.addTodo(theTodo);
    });
    APP.addProject(project);
    Layout.addProject(project);
  });
}

Layout.renderView('default');

Layout.newProjectButton.addEventListener('click', () => {
  Layout.constructor.unselectAllProject();
  Layout.renderView('newProject');
});
Layout.projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  const name = Layout.projectFormFieldInput.value;
  if (name.trim() !== '' && name != null) {
    const project = new _components_Project__WEBPACK_IMPORTED_MODULE_3__["default"](name);
    const done = APP.addProject(project);
    if (!done) {
      // alert('Project already existed');
      return false;
    }
    Layout.projectFormFieldInput.value = '';
    Layout.addProject(project);
    APP.storeToLocal();
    return true;
  }
  return false;
});

Layout.app.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.target.classList.contains('TodoForm')) {
    const name = Layout.todoFormFieldInput.value;
    if (name.trim() !== '' && name != null) {
      const todo = new _components_Todo__WEBPACK_IMPORTED_MODULE_4__["default"](name);
      const added = APP.addTodo(todo);
      if (!added) {
        // alert('Todo already existed in this project');
        return false;
      }
      Layout.addTodo(todo);
      Layout.todoFormFieldInput.value = '';
      APP.storeToLocal();
      return true;
    }
  }

  if (event.target.classList.contains('TodoEditForm')) {
    const name = Layout.editTodoFormFieldInput.value;
    const description = Layout.DescriptionTextArea.value;
    const date = Layout.DateInput.value;
    const priority = Layout.PriorityInput.value.toLowerCase();
    APP.editTodo({
      name, description, date, priority,
    });
    const project = APP.getSelectedProject();
    Layout.selectProject(project);
    Layout.renderView('default');
    Layout.renderView('showProject');
    APP.storeToLocal();
  }
  return false;
});

Layout.projectList.addEventListener('click', (event) => {
  if (event.target.classList.contains('project')) {
    const project = APP.getProject(event.target.id);
    if (project) {
      APP.setSelectedProject(project);
      Layout.selectProject(project);
      Layout.renderView('default');
      Layout.renderView('showProject');
    }
  }
  return true;
});

Layout.app.addEventListener('click', (event) => {
  if (event.target.classList.contains('todoChecklistLabel')) {
    const id = event.target.getAttribute('data-id');

    const todo = APP.getTodo(id);
    if (!todo) {
      // alert('Todo Not found!');
      return false;
    }
    const todoLi = document.getElementById(id);
    todoLi.classList.toggle('is-checked');
    APP.upDateTodoChecked(todo);
    APP.storeToLocal();
  }

  if (event.target.classList.contains('todoEditButton') || event.target.classList.contains('fa-pencil')) {
    const id = event.target.getAttribute('data-id');
    const todo = APP.getTodo(id);
    if (!todo) {
      // alert('Todo Not found!');
      return false;
    }
    APP.setSelectedTodo(todo);
    Layout.selectTodo(todo);
  }

  if (event.target.classList.contains('todoGobackButton') || event.target.classList.contains('todoGobackButtonIcon')) {
    Layout.renderView('default');
    Layout.renderView('showProject');
  }

  if (event.target.classList.contains('DeleteTodoButon') || event.target.classList.contains('DeleteTodoButonIcon')) {
    APP.deleteTodo();

    const project = APP.getSelectedProject();
    Layout.selectProject(project);
    Layout.renderView('default');
    Layout.renderView('showProject');
    APP.storeToLocal();
  }

  return true;
});

/***/ }),

/***/ "./src/ui/UI.js":
/*!**********************!*\
  !*** ./src/ui/UI.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createDomElement(name, text = null, attributes = null) {
  const element = document.createElement(name);
  if (text != null) {
    element.innerHTML = text;
  }
  if (attributes != null && typeof attributes === 'object') {
    attributes.forEach((attribute) => {
      element.setAttribute(attribute.name, attribute.value);
    });
  }
  return element;
}

class UI {
  constructor() {
    this.title = 'Todo App';
    this.layout = {};
    this.views = {};
    this.activeView = null;
    this.PriorityOptions = ['Default', 'Low', 'Medium', 'High'];

    this.app = createDomElement('div', null, [{ name: 'class', value: 'app' }]);
    this.sidebar = createDomElement('div', null, [{ name: 'class', value: 'sidebar' }]);
    this.projects = createDomElement('div', null, [{ name: 'class', value: 'projects' }]);
    this.projects_header = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    this.projects_h1 = createDomElement('h1', this.title);
    this.newProjectButton = createDomElement('div', 'Create New Project', [{ name: 'class', value: 'newProjectButton' }]);

    this.projects_header.appendChild(this.projects_h1);

    this.sidebar_content = createDomElement('div', null, [{ name: 'class', value: 'content' }]);

    this.projectList = createDomElement('ul', null, [{ name: 'class', value: 'projectList' }]);

    this.sidebar_content.append(this.newProjectButton, this.projectList);

    this.projects.append(this.projects_header, this.sidebar_content);
    this.sidebar.appendChild(this.projects);

    this.container = createDomElement('div', null, [{ name: 'class', value: 'container' }]);

    this.app.append(this.sidebar, this.container);
    this.createViews();
  }

  createViews() {
    this.views = [
      {
        name: 'default',
        value: UI.defaultView(),
      },
      {
        name: 'newProject',
        value: this.newProjectView(),
      },
      {
        name: 'showProject',
        value: null,
      },
    ];
  }

  static defaultView() {
    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    const defaultView = createDomElement('div', null, [{ name: 'class', value: 'defaultView' }]);
    const viewtitle = createDomElement('h2', 'WelCome on ToDo App', [{ name: 'class', value: 'title' }]);

    viewBody.append(viewtitle, defaultView);
    return viewBody;
  }

  newProjectView() {
    const viewHeader = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    const viewtitle = createDomElement('h2', 'Create new Project', [{ name: 'class', value: 'title' }]);
    viewHeader.appendChild(viewtitle);
    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    this.projectForm = createDomElement('form', null, [{ name: 'class', value: 'projectForm' }]);
    const projectFormField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    this.projectFormFieldInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'project-name' },
        { name: 'id', value: 'newProjectInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Project Name' },
      ]);
    this.projectFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn' }]);
    const projectFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    const projectFormFieldText = createDomElement('span', 'Add');
    this.projectFormFieldButton.append(projectFormFieldText, projectFormFieldIcon);
    projectFormField.appendChild(this.projectFormFieldInput);
    projectFormField.appendChild(this.projectFormFieldButton);
    this.projectForm.appendChild(projectFormField);
    viewBody.appendChild(this.projectForm);
    return [viewHeader, viewBody];
  }

  showProjectView() {
    const containerHeader = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    this.containerHeadertitle = createDomElement('h2', this.selectedProject.getName(), [{ name: 'class', value: 'title' }]);
    containerHeader.append(this.containerHeadertitle);
    // this.renderView([containerHeader]);
    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    this.todoForm = createDomElement('form', null, [{ name: 'class', value: 'TodoForm' }]);
    const todoFormField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    this.todoFormFieldInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'todo-name' },
        { name: 'id', value: 'newTodoInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Add a Task' },
      ]);
    this.todoFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn' }]);
    const todoFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    this.todoFormFieldButton.appendChild(todoFormFieldIcon);
    todoFormField.appendChild(this.todoFormFieldInput);
    todoFormField.appendChild(this.todoFormFieldButton);
    this.todoForm.appendChild(todoFormField);

    this.todoList = createDomElement('ul', null, [{ name: 'class', value: 'todoList' }]);

    const todos = this.selectedProject.getTodos();
    todos.forEach((todo) => this.addTodo(todo));
    viewBody.append(this.todoForm, this.todoList);

    return [containerHeader, viewBody];
  }

  addProject(project) {
    const element = createDomElement('li', project.getName(), [{ name: 'class', value: 'project' }, { name: 'id', value: project.getId() }]);
    this.projectList.appendChild(element);
  }

  addTodo(todo) {
    const TodoElement = createDomElement('li', null, [{ name: 'class', value: 'todo' }, { name: 'id', value: todo.getId() }]);
    const todoCheckInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'checkbox' },
        { name: 'name', value: 'todoChecklist' },
        { name: 'id', value: `${todo.getId()}TodoInput` },
      ]);

    const todoLabel = createDomElement('label', null, [{ name: 'for', value: `${todo.getId()}TodoInput` }, { name: 'class', value: 'todoChecklistLabel' }, { name: 'data-id', value: todo.getId() }]);
    const todoDetails = createDomElement('div', null, [{ name: 'class', value: 'details' }]);
    const todoPreview = createDomElement('div', null, [{ name: 'class', value: 'preview' }]);
    const todoPreviewTitle = createDomElement('div', todo.getName(), [{ name: 'class', value: 'title' }]);
    const todoPreviewTagContainer = createDomElement('div', null, [{ name: 'class', value: 'tags' }]);
    if (todo.getDate()) {
      const todoPreviewDateTag = createDomElement('span', null, [{ name: 'class', value: 'tag' }]);
      const todoPreviewDateTagIcon = createDomElement('span', null, [{ name: 'class', value: 'icon' }]);
      const todoPreviewDateTagIconElement = createDomElement('i', null, [{ name: 'class', value: 'fa fa-calendar' }]);
      todoPreviewDateTagIcon.appendChild(todoPreviewDateTagIconElement);
      const todoPreviewDateTagContent = createDomElement('span', todo.getDate());
      todoPreviewDateTag.append(todoPreviewDateTagIcon, todoPreviewDateTagContent);
      todoPreviewTagContainer.appendChild(todoPreviewDateTag);
    }
    todoPreview.append(todoPreviewTitle, todoPreviewTagContainer);

    const todoMoreButtonIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-pencil' }, { name: 'data-id', value: todo.getId() }]);
    const todoMoreButton = createDomElement('div', null, [{ name: 'class', value: 'button todoEditButton' }, { name: 'data-id', value: todo.getId() }]);
    todoMoreButton.appendChild(todoMoreButtonIcon);
    const todoMore = createDomElement('div', null, [{ name: 'class', value: 'more' }]);
    todoMore.appendChild(todoMoreButton);
    todoDetails.append(todoPreview, todoMore);

    if (todo.isChecked()) {
      todoCheckInput.setAttribute('checked', true);
      TodoElement.classList.add('is-checked');
    }
    TodoElement.classList.add(`is-${todo.getPriority()}`);
    TodoElement.append(todoCheckInput, todoLabel, todoDetails);

    this.todoList.prepend(TodoElement);
    return TodoElement;
  }

  editTodoView() {
    const containerHeader = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    this.containerHeadertitle = createDomElement('h2', this.selectedTodo.getName(), [{ name: 'class', value: 'title' }]);
    const backButtonIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-chevron-left todoGobackButtonIcon' }]);
    const backButton = createDomElement('div', null, [{ name: 'class', value: 'todoGobackButton' }]);
    backButton.append(backButtonIcon);
    containerHeader.append(backButton, this.containerHeadertitle);
    this.editTodoForm = createDomElement('form', null, [{ name: 'class', value: 'TodoEditForm' }]);
    const editTodoFormField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    this.editTodoFormFieldInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'todo-name' },
        { name: 'id', value: 'newTodoInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Taxt Name' },
        { name: 'value', value: this.selectedTodo.getName() },
      ]);

    editTodoFormField.appendChild(this.editTodoFormFieldInput);

    const DescriptionField = createDomElement('div', null,
      [
        { name: 'class', value: 'field' },
      ]);
    this.DescriptionTextArea = createDomElement('textarea', null,
      [
        { name: 'class', value: 'textarea' },
        { name: 'rows', value: '6' },
        { name: 'placeholder', value: 'Add a description here' },
      ]);
    if (this.selectedTodo.getDescription) {
      this.DescriptionTextArea.textContent = this.selectedTodo.getDescription();
    }
    DescriptionField.append(this.DescriptionTextArea);
    this.DateInput = createDomElement('input', null, [
      { name: 'class', value: 'input' },
      { name: 'type', value: 'date' },
      { name: 'name', value: 'todo-date' },
    ]);
    if (this.selectedTodo.getDate()) {
      this.DateInput.setAttribute('value', this.selectedTodo.getDate());
    }
    const DateField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    DateField.append(this.DateInput);
    this.PriorityInput = createDomElement('select', null, [
      { name: 'class', value: 'input' },
      { name: 'name', value: 'todo-select' },
    ]);

    this.PriorityOptions.forEach((priority) => {
      const PriorityOption = createDomElement('option', priority, [{ name: 'value', value: priority }]);
      if (priority.toLocaleLowerCase() === this.selectedTodo.getPriority()) {
        PriorityOption.setAttribute('selected', true);
      }
      this.PriorityInput.append(PriorityOption);
    });
    const PriorityField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    PriorityField.append(this.PriorityInput);

    const editTodoFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-pencil editTodoButonIcon' }]);
    this.editTodoFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn is-block editTodoButon' }]);
    this.editTodoFormFieldButton.append(editTodoFormFieldIcon);

    const deleteTodoFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-times DeleteTodoButonIcon' }]);
    this.deleteTodoFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn is-block is-danger DeleteTodoButon' }, { name: 'type', value: 'reset' }]);
    this.deleteTodoFormFieldButton.append(deleteTodoFormFieldIcon);
    const deleteButtonField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    deleteButtonField.append(this.editTodoFormFieldButton, this.deleteTodoFormFieldButton);

    const DatePriorityContainer = createDomElement('div', null, [{ name: 'class', value: 'fields' }]);
    DatePriorityContainer.append(DateField, PriorityField);

    this.editTodoForm.append(
      editTodoFormField,
      DescriptionField,
      DatePriorityContainer,
      deleteButtonField,
    );

    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    viewBody.append(this.editTodoForm);
    return [containerHeader, viewBody];
  }

  selectTodo(todo) {
    this.selectedTodo = todo;

    this.container.innerHTML = '';
    const views = this.editTodoView();

    views.forEach((view) => {
      this.container.appendChild(view);
    });
  }

  selectProject(project) {
    UI.unselectAllProject();
    const selected = document.querySelector(`#${project.getId()}`);
    selected.classList.add('active');
    this.selectedProject = project;
    this.views[2].value = '';
    this.views[2].value = this.showProjectView();
    return true;
  }

  static unselectAllProject() {
    const elements = document.querySelectorAll('.projectList .project');
    elements.forEach((e) => {
      e.classList.remove('active');
    });
  }

  renderView(viewName) {
    if (this.activeView === viewName) { return false; }
    this.activeView = viewName;
    const views = this.views.find(element => element.name === viewName);
    this.container.innerHTML = '';
    if (!views) {
      return false;
    }

    if (Array.isArray(views.value)) {
      views.value.forEach((view) => {
        this.container.appendChild(view);
      });
    } else {
      this.container.appendChild(views.value);
    }
    return true;
  }

  render() {
    return this.app;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UI);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3VuZHJhd19hY2NlcHRfcmVxdWVzdF92ZHNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzP2Q4MjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9kby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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VyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvdW5kcmF3X2FjY2VwdF9yZXF1ZXN0X3Zkc2Quc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhbmdvbGluJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlBhbmdvbGluXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hcHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLmFwcCAuY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmMmU2MztcXG4gIHBhZGRpbmc6IDEuNDVyZW0gMnJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuaGVhZGVyIC50b2RvR29iYWNrQnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5oZWFkZXIgLnRvZG9Hb2JhY2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmhlYWRlciAuYWRkTmV3VG9kbyB7XFxuICBiYWNrZ3JvdW5kOiAjZmYyZTYzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3MDAzMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTVweCAjZmEwMDNmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmhlYWRlciAuYWRkTmV3VG9kbzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggNXB4IC01cHggI2ZhMDAzZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogI2ZmMmU2MztcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZsZXg6IDE7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuZGVmYXVsdFZpZXcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLmZvcm0ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuZm9ybSAuZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLmZvcm0gLmZpZWxkIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5mb3JtIC5maWVsZCAuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIC5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIC5idG4ge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICBiYWNrZ3JvdW5kOiAjMDhkOWQ2O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQgLmJ0biBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGQsXFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRWRpdEZvcm0gLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGQgLnRleHRhcmVhLFxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0VkaXRGb3JtIC5maWVsZCAudGV4dGFyZWEge1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGQgLmlucHV0LFxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0VkaXRGb3JtIC5maWVsZCAuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDUwcHggMCAxcmVtO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGQgLmJ0bixcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGQgLmJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgYmFja2dyb3VuZDogIzA4ZDlkNjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9Gb3JtIC5maWVsZCAuYnRuLmlzLWJsb2NrLFxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0VkaXRGb3JtIC5maWVsZCAuYnRuLmlzLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGQgLmJ0bi5pcy1ibG9jay5pcy1kYW5nZXIsXFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRWRpdEZvcm0gLmZpZWxkIC5idG4uaXMtYmxvY2suaXMtZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkIC5idG4gc3BhbixcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGQgLmJ0biBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGRzLFxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0VkaXRGb3JtIC5maWVsZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGRzIC5maWVsZCxcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGRzIC5maWVsZCB7XFxuICBmbGV4OiAxO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3Qge1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAyMHB4IDVweCAtMTBweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8uaXMtY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8uaXMtY2hlY2tlZCAudGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8uaXMtY2hlY2tlZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5cHg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOjphZnRlciB7XFxuICB6LWluZGV4OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29udGVudDogXFxcIuKckyBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMDhkOWQ2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gLmRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gLnByZXZpZXcge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gLnByZXZpZXcgLnRpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyAucHJldmlldyAudGFnIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyAucHJldmlldyAudGFnIC5pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6ICNjY2M7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG86OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAycHg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8uaXMtZGVmYXVsdDo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kby5pcy1sb3c6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICMwOGQ5ZDY7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8uaXMtbWVkaXVtOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjM5YzEyO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvLmlzLWhpZ2g6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxufVxcbi5hcHAgLnNpZGViYXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgYm94LXNoYWRvdzogNXB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hcHAgLnNpZGViYXIgLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFwcCAuc2lkZWJhciAucHJvamVjdHMgLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmYyZTYzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5hcHAgLnNpZGViYXIgLnByb2plY3RzIC5oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xcbn1cXG4uYXBwIC5zaWRlYmFyIC5wcm9qZWN0cyAuY29udGVudCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uYXBwIC5zaWRlYmFyIC5wcm9qZWN0cyAuY29udGVudCAubmV3UHJvamVjdEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICNmZjJlNjM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uYXBwIC5zaWRlYmFyIC5wcm9qZWN0cyAuY29udGVudCAubmV3UHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmYyZTYzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5hcHAgLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAucHJvamVjdCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLmFwcCAuc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnByb2plY3RMaXN0IC5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZjJlNjM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmFwcCAuc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLnByb2plY3RMaXN0IC5wcm9qZWN0LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmYyZTYzO1xcbiAgY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQVFoQjs7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7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RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF2Q1o7QUEyQ1k7RUFDRSxnQkEzV0o7QUFrVVY7QUE4Q1k7RUFDRSxtQkFoWEo7QUFvVVY7QUFpRFk7RUFDRSxtQkFyWEo7QUFzVVY7QUFvRFk7RUFDRSxtQkExWEo7QUF3VVY7QUEwREU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0FBeERKO0FBMERJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUF4RE47QUEwRE07RUFDRSxtQkFwWk87RUFxWlAsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQXhEUjtBQTBEUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXhEVjtBQTRETTtFQUNFLGFBQUE7RUFnQkEsT0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBekVSO0FBeURRO0VBQ0UsYUFBQTtFQUNBLGNBcGFLO0VBcWFMLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF2RFY7QUF5RFU7RUFDRSxtQkEzYUc7RUE0YUgsV0FBQTtBQXZEWjtBQWdFVTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTlEWjtBQWdFWTtFQUNFLG1CQTdiQztFQThiRCxlQUFBO0VBQ0EsV0FBQTtBQTlEZDtBQWlFWTtFQUNFLG1CQW5jQztFQW9jRCxXQUFBO0FBL0RkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFuZ29saW4mZGlzcGxheT1zd2FwJyk7XFxuJHByaW1hcnlDb2xvcjogI2ZmMmU2MztcXG4kZGVmYXVsdDogI2NjYztcXG4kc3VjY2VzczogIzA4ZDlkNjtcXG4kd2FybmluZzogI2YzOWMxMjtcXG4kZGFuZ2VyOiAgI2U3NGMzYztcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsIGN1cnNpdmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDIwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXG4gICAgICBwYWRkaW5nOiAxLjQ1cmVtIDJyZW07XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgLnRvZG9Hb2JhY2tCdXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmFkZE5ld1RvZG8ge1xcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkcHJpbWFyeUNvbG9yLCAyMCUpO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtNXB4IGRhcmtlbigkcHJpbWFyeUNvbG9yLCAxMCUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA1cHggLTVweCBkYXJrZW4oJHByaW1hcnlDb2xvciwgMTAlKTtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5ib2R5IHtcXG4gICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgLmRlZmF1bHRWaWV3IHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3VuZHJhd19hY2NlcHRfcmVxdWVzdF92ZHNkLnN2ZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDUwdmg7XFxuICAgICAgfVxcblxcbiAgICAgIC5mb3JtIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICAgICAgLmZpZWxkIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG5cXG4gICAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmlucHV0IHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAucHJvamVjdEZvcm0ge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgICAgICAuZmllbGQge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICAgICAgICAuaW5wdXQge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmJ0biB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3VjY2VzcztcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbiAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuVG9kb0Zvcm0sXFxuICAgICAgLlRvZG9FZGl0Rm9ybSB7XFxuICAgICAgICAuZmllbGQge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG5cXG4gICAgICAgICAgLnRleHRhcmVhIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmlucHV0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4IDAgMXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5idG4ge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1Y2Nlc3M7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAgICYuaXMtYmxvY2sge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgICAgJi5pcy1kYW5nZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFuZ2VyO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5maWVsZHMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgICAuZmllbGQge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmJ1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLnRvZG9MaXN0IHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXG5cXG4gICAgICAgIC50b2RvIHtcXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDIwcHggNXB4IC0xMHB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmLmlzLWNoZWNrZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gICAgICAgICAgICBjb2xvcjogI2NjYztcXG5cXG4gICAgICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBsZWZ0OiAtOTk5OXB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDo6YmVmb3JlIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDo6YWZ0ZXIge1xcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXFxcMjcxM1xcXFwwMDIwJztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3VjY2VzcztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAucHJldmlldyB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXG5cXG4gICAgICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAudGFnIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgICAgICAgICAgIC5pY29uIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJi5pcy1kZWZhdWx0IHtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGVmYXVsdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJi5pcy1sb3cge1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzdWNjZXNzO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmLmlzLW1lZGl1bSB7XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdhcm5pbmc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYuaXMtaGlnaCB7XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhbmdlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgYm94LXNoYWRvdzogNXB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgLnByb2plY3RzIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgLmhlYWRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICNmMWYxZjE7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgICAgIC5uZXdQcm9qZWN0QnV0dG9uIHtcXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgICAgIC5wcm9qZWN0TGlzdCB7XFxuICAgICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY2YTFkYTg0MGUwYzg5ZTAzNDMwM2JjMmVlNTNjNDJhLnN2Z1wiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcbiAgbGV0IHNlbGVjdGVkVG9kbyA9IG51bGw7XG5cbiAgdGhpcy5zdG9yZVRvTG9jYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YXMgPSBbXTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBkYXRhcy5wdXNoKHsgbmFtZTogcHJvamVjdC5nZXROYW1lKCksIGlkOiBwcm9qZWN0LmdldElkKCksIHRvZG9zOiBwcm9qZWN0LmdldERhdGFzKCkgfSk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoZGF0YXMpKTtcbiAgfTtcbiAgdGhpcy5hZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBleGlzdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGVsZW1lbnQpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBlbGVtZW50LmdldE5hbWUoKSlbMF07XG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5hZGRUb2RvID0gdG9kbyA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbHRlcigoZWxlbWVudCkgPT4gc2VsZWN0ZWRQcm9qZWN0LmdldElkKCkgPT09IGVsZW1lbnQuZ2V0SWQoKSlbMF07XG4gICAgICBjb25zdCBleGlzdHMgPSBwcm9qZWN0LmdldFRvZG9zKCkuZmlsdGVyKChlbGVtZW50KSA9PiB0b2RvLmdldElkKCkgPT09IGVsZW1lbnQuZ2V0SWQoKSlbMF07XG4gICAgICBpZiAoZXhpc3RzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB0aGlzLmVkaXRUb2RvID0gZGF0YSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5nZXRJZCgpID09PSBzZWxlY3RlZFByb2plY3QuZ2V0SWQoKSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHsgLi4ucHJvamVjdHNbcHJvamVjdEluZGV4XSB9O1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IHByb2plY3QuZ2V0VG9kb3MoKVxuICAgICAgLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0SWQoKSA9PT0gc2VsZWN0ZWRUb2RvLmdldElkKCkpO1xuICAgIGNvbnN0IHRvZG8gPSB7IC4uLnNlbGVjdGVkVG9kbyB9O1xuICAgIHRvZG8uZWRpdCgnJywgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5kYXRlLCBkYXRhLnByaW9yaXR5LCB0b2RvLmlzQ2hlY2tlZCgpKTtcbiAgICB0b2RvLnNldE5hbWUoZGF0YS5uYW1lKTtcbiAgICB0b2RvLnNldElkKGRhdGEubmFtZSk7XG4gICAgcHJvamVjdC51cGRhdGVUb2RvKHRvZG9JbmRleCwgdG9kbyk7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XSA9IHByb2plY3Q7XG4gIH07XG5cbiAgdGhpcy5kZWxldGVUb2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0LmdldElkKCkpO1xuICAgIGNvbnN0IHByb2plY3QgPSB7IC4uLnByb2plY3RzW3Byb2plY3RJbmRleF0gfTtcbiAgICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0LmdldFRvZG9zKClcbiAgICAgIC5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LmdldElkKCkgPT09IHNlbGVjdGVkVG9kby5nZXRJZCgpKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVRvZG8odG9kb0luZGV4KTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbiAgICB0aGlzLnNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcbiAgfTtcblxuICB0aGlzLmdldEFsbCA9ICgpID0+IHByb2plY3RzO1xuXG4gIHRoaXMuZ2V0UHJvamVjdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGFuc3cgPSBwcm9qZWN0cy5maWx0ZXIoKGVsZW1lbnQpID0+IGlkID09PSBlbGVtZW50LmdldElkKCkpO1xuICAgIGlmIChhbnN3Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYW5zd1swXTtcbiAgfTtcblxuICB0aGlzLmdldFRvZG8gPSAoaWQpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKChlbGVtZW50KSA9PiBzZWxlY3RlZFByb2plY3QuZ2V0SWQoKSA9PT0gZWxlbWVudC5nZXRJZCgpKVswXTtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG9zKCkuZmlsdGVyKChlbGVtZW50KSA9PiBpZCA9PT0gZWxlbWVudC5nZXRJZCgpKVswXTtcbiAgICAgIGlmICghdG9kbykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIHRoaXMudXBEYXRlVG9kb0NoZWNrZWQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0LmdldElkKCkpO1xuICAgIGNvbnN0IHByb2plY3QgPSB7IC4uLnByb2plY3RzW3Byb2plY3RJbmRleF0gfTtcbiAgICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0LmdldFRvZG9zKCkuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5nZXRJZCgpID09PSB0b2RvLmdldElkKCkpO1xuICAgIHRvZG8udG9nZ2xlQ2hlY2tlZCgpO1xuICAgIHByb2plY3QudXBkYXRlVG9kbyh0b2RvSW5kZXgsIHRvZG8pO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0gPSBwcm9qZWN0O1xuICB9O1xuICB0aGlzLnNldFNlbGVjdGVkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgfTtcblxuICB0aGlzLnNldFNlbGVjdGVkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgc2VsZWN0ZWRUb2RvID0gdG9kbztcbiAgfTtcblxuICB0aGlzLmdldFNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJmdW5jdGlvbiBQcm9qZWN0KHZuYW1lKSB7XG4gIGxldCBuYW1lID0gdm5hbWU7XG4gIGNvbnN0IGlkID0gYCR7dm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXFcvZywgJycpfWA7XG4gIGNvbnN0IHRvZG9zID0gW107XG5cbiAgdGhpcy5zZXROYW1lID0gKHZuYW1lKSA9PiB7XG4gICAgbmFtZSA9IHZuYW1lO1xuICB9O1xuXG4gIHRoaXMuZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgdGhpcy5nZXRJZCA9ICgpID0+IGlkO1xuXG4gIHRoaXMuYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgfTtcblxuICB0aGlzLmRlbGV0ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHRoaXMuZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcblxuICB0aGlzLmdldERhdGFzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFzID0gW107XG4gICAgdG9kb3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZGF0YXMucHVzaChlbGVtZW50LmdldERhdGFzKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGFzO1xuICB9O1xuXG4gIHRoaXMudXBkYXRlVG9kbyA9IChpbmRleCwgdG9kbykgPT4ge1xuICAgIHRvZG9zW2luZGV4XSA9IHRvZG87XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiZnVuY3Rpb24gVG9kbyh2bmFtZSkge1xuICBsZXQgbmFtZSA9IHZuYW1lO1xuICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICBsZXQgZGF0ZSA9IG51bGw7XG4gIGxldCBwcmlvcml0eSA9ICdkZWZhdWx0JztcbiAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcbiAgLy8gY29uc3QgdGltZVN0YW1wID0gO1xuICBsZXQgaWQgPSBgJHt2bmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcVy9nLCAnJyl9JHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICB0aGlzLnNldElkID0gKG5hbWUpID0+IHtcbiAgICBpZCA9IGAke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXFcvZywgJycpfSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgfTtcbiAgdGhpcy5zZXROYW1lID0gKHZuYW1lKSA9PiB7XG4gICAgbmFtZSA9IHZuYW1lO1xuICB9O1xuICB0aGlzLmdldElkID0gKCkgPT4gaWQ7XG4gIHRoaXMuZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIHRoaXMuZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgdGhpcy5nZXREYXRlID0gKCkgPT4gZGF0ZTtcbiAgdGhpcy5nZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICB0aGlzLmlzQ2hlY2tlZCA9ICgpID0+IGNoZWNrZWQ7XG4gIHRoaXMudG9nZ2xlQ2hlY2tlZCA9ICgpID0+IHsgY2hlY2tlZCA9ICFjaGVja2VkOyB9O1xuXG4gIHRoaXMuZ2V0RGF0YXMgPSAoKSA9PiAoe1xuICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgbmFtZTogdGhpcy5nZXROYW1lKCksXG4gICAgZGVzY3JpcHRpb246IHRoaXMuZ2V0RGVzY3JpcHRpb24oKSxcbiAgICBkYXRlOiB0aGlzLmdldERhdGUoKSxcbiAgICBwcmlvcml0eTogdGhpcy5nZXRQcmlvcml0eSgpLFxuICAgIGNoZWNrZWQ6IHRoaXMuaXNDaGVja2VkKCksXG4gIH0pO1xuICB0aGlzLmVkaXQgPSAobmV3SWQsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBuZXdQcmlvcml0eSwgbmV3Q2hlY2tlZCkgPT4ge1xuICAgIGlkID0gbmV3SWQ7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBkYXRlID0gbmV3RGF0ZTtcbiAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIGNoZWNrZWQgPSBuZXdDaGVja2VkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi91aS9VSSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9jb21wb25lbnRzL1RvZG8nO1xuXG5jb25zdCBMYXlvdXQgPSBuZXcgVUkoKTtcbmNvbnN0IEFQUCA9IG5ldyBBcHAoKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChMYXlvdXQucmVuZGVyKCkpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XG4gIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ0RlZmF1bHQgVGFzaycpKTtcbiAgQVBQLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICBMYXlvdXQuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG59IGVsc2Uge1xuICBjb25zdCBMb2NhbERhdGFzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIExvY2FsRGF0YXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChlbGVtZW50Lm5hbWUpO1xuICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdGhlVG9kbyA9IG5ldyBUb2RvKHRvZG8ubmFtZSk7XG4gICAgICB0aGVUb2RvLmVkaXQodG9kby5pZCwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmNoZWNrZWQpO1xuICAgICAgcHJvamVjdC5hZGRUb2RvKHRoZVRvZG8pO1xuICAgIH0pO1xuICAgIEFQUC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIExheW91dC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICB9KTtcbn1cblxuTGF5b3V0LnJlbmRlclZpZXcoJ2RlZmF1bHQnKTtcblxuTGF5b3V0Lm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIExheW91dC5jb25zdHJ1Y3Rvci51bnNlbGVjdEFsbFByb2plY3QoKTtcbiAgTGF5b3V0LnJlbmRlclZpZXcoJ25ld1Byb2plY3QnKTtcbn0pO1xuTGF5b3V0LnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgbmFtZSA9IExheW91dC5wcm9qZWN0Rm9ybUZpZWxkSW5wdXQudmFsdWU7XG4gIGlmIChuYW1lLnRyaW0oKSAhPT0gJycgJiYgbmFtZSAhPSBudWxsKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIGNvbnN0IGRvbmUgPSBBUFAuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIC8vIGFsZXJ0KCdQcm9qZWN0IGFscmVhZHkgZXhpc3RlZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBMYXlvdXQucHJvamVjdEZvcm1GaWVsZElucHV0LnZhbHVlID0gJyc7XG4gICAgTGF5b3V0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgQVBQLnN0b3JlVG9Mb2NhbCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuXG5MYXlvdXQuYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1RvZG9Gb3JtJykpIHtcbiAgICBjb25zdCBuYW1lID0gTGF5b3V0LnRvZG9Gb3JtRmllbGRJbnB1dC52YWx1ZTtcbiAgICBpZiAobmFtZS50cmltKCkgIT09ICcnICYmIG5hbWUgIT0gbnVsbCkge1xuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKG5hbWUpO1xuICAgICAgY29uc3QgYWRkZWQgPSBBUFAuYWRkVG9kbyh0b2RvKTtcbiAgICAgIGlmICghYWRkZWQpIHtcbiAgICAgICAgLy8gYWxlcnQoJ1RvZG8gYWxyZWFkeSBleGlzdGVkIGluIHRoaXMgcHJvamVjdCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBMYXlvdXQuYWRkVG9kbyh0b2RvKTtcbiAgICAgIExheW91dC50b2RvRm9ybUZpZWxkSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIEFQUC5zdG9yZVRvTG9jYWwoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUb2RvRWRpdEZvcm0nKSkge1xuICAgIGNvbnN0IG5hbWUgPSBMYXlvdXQuZWRpdFRvZG9Gb3JtRmllbGRJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IExheW91dC5EZXNjcmlwdGlvblRleHRBcmVhLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBMYXlvdXQuRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gTGF5b3V0LlByaW9yaXR5SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBBUFAuZWRpdFRvZG8oe1xuICAgICAgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LFxuICAgIH0pO1xuICAgIGNvbnN0IHByb2plY3QgPSBBUFAuZ2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgTGF5b3V0LnNlbGVjdFByb2plY3QocHJvamVjdCk7XG4gICAgTGF5b3V0LnJlbmRlclZpZXcoJ2RlZmF1bHQnKTtcbiAgICBMYXlvdXQucmVuZGVyVmlldygnc2hvd1Byb2plY3QnKTtcbiAgICBBUFAuc3RvcmVUb0xvY2FsKCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5cbkxheW91dC5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IEFQUC5nZXRQcm9qZWN0KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIEFQUC5zZXRTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG4gICAgICBMYXlvdXQuc2VsZWN0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgIExheW91dC5yZW5kZXJWaWV3KCdkZWZhdWx0Jyk7XG4gICAgICBMYXlvdXQucmVuZGVyVmlldygnc2hvd1Byb2plY3QnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcblxuTGF5b3V0LmFwcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kb0NoZWNrbGlzdExhYmVsJykpIHtcbiAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgIGNvbnN0IHRvZG8gPSBBUFAuZ2V0VG9kbyhpZCk7XG4gICAgaWYgKCF0b2RvKSB7XG4gICAgICAvLyBhbGVydCgnVG9kbyBOb3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB0b2RvTGkuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY2hlY2tlZCcpO1xuICAgIEFQUC51cERhdGVUb2RvQ2hlY2tlZCh0b2RvKTtcbiAgICBBUFAuc3RvcmVUb0xvY2FsKCk7XG4gIH1cblxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kb0VkaXRCdXR0b24nKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1wZW5jaWwnKSkge1xuICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IHRvZG8gPSBBUFAuZ2V0VG9kbyhpZCk7XG4gICAgaWYgKCF0b2RvKSB7XG4gICAgICAvLyBhbGVydCgnVG9kbyBOb3QgZm91bmQhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIEFQUC5zZXRTZWxlY3RlZFRvZG8odG9kbyk7XG4gICAgTGF5b3V0LnNlbGVjdFRvZG8odG9kbyk7XG4gIH1cblxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kb0dvYmFja0J1dHRvbicpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG9Hb2JhY2tCdXR0b25JY29uJykpIHtcbiAgICBMYXlvdXQucmVuZGVyVmlldygnZGVmYXVsdCcpO1xuICAgIExheW91dC5yZW5kZXJWaWV3KCdzaG93UHJvamVjdCcpO1xuICB9XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ0RlbGV0ZVRvZG9CdXRvbicpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ0RlbGV0ZVRvZG9CdXRvbkljb24nKSkge1xuICAgIEFQUC5kZWxldGVUb2RvKCk7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gQVBQLmdldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIExheW91dC5zZWxlY3RQcm9qZWN0KHByb2plY3QpO1xuICAgIExheW91dC5yZW5kZXJWaWV3KCdkZWZhdWx0Jyk7XG4gICAgTGF5b3V0LnJlbmRlclZpZXcoJ3Nob3dQcm9qZWN0Jyk7XG4gICAgQVBQLnN0b3JlVG9Mb2NhbCgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59KTsiLCJmdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KG5hbWUsIHRleHQgPSBudWxsLCBhdHRyaWJ1dGVzID0gbnVsbCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgfVxuICBpZiAoYXR0cmlidXRlcyAhPSBudWxsICYmIHR5cGVvZiBhdHRyaWJ1dGVzID09PSAnb2JqZWN0Jykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ1RvZG8gQXBwJztcbiAgICB0aGlzLmxheW91dCA9IHt9O1xuICAgIHRoaXMudmlld3MgPSB7fTtcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSBudWxsO1xuICAgIHRoaXMuUHJpb3JpdHlPcHRpb25zID0gWydEZWZhdWx0JywgJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgdGhpcy5hcHAgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2FwcCcgfV0pO1xuICAgIHRoaXMuc2lkZWJhciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnc2lkZWJhcicgfV0pO1xuICAgIHRoaXMucHJvamVjdHMgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3Byb2plY3RzJyB9XSk7XG4gICAgdGhpcy5wcm9qZWN0c19oZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2hlYWRlcicgfV0pO1xuICAgIHRoaXMucHJvamVjdHNfaDEgPSBjcmVhdGVEb21FbGVtZW50KCdoMScsIHRoaXMudGl0bGUpO1xuICAgIHRoaXMubmV3UHJvamVjdEJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICdDcmVhdGUgTmV3IFByb2plY3QnLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ25ld1Byb2plY3RCdXR0b24nIH1dKTtcblxuICAgIHRoaXMucHJvamVjdHNfaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMucHJvamVjdHNfaDEpO1xuXG4gICAgdGhpcy5zaWRlYmFyX2NvbnRlbnQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2NvbnRlbnQnIH1dKTtcblxuICAgIHRoaXMucHJvamVjdExpc3QgPSBjcmVhdGVEb21FbGVtZW50KCd1bCcsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAncHJvamVjdExpc3QnIH1dKTtcblxuICAgIHRoaXMuc2lkZWJhcl9jb250ZW50LmFwcGVuZCh0aGlzLm5ld1Byb2plY3RCdXR0b24sIHRoaXMucHJvamVjdExpc3QpO1xuXG4gICAgdGhpcy5wcm9qZWN0cy5hcHBlbmQodGhpcy5wcm9qZWN0c19oZWFkZXIsIHRoaXMuc2lkZWJhcl9jb250ZW50KTtcbiAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0cyk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnY29udGFpbmVyJyB9XSk7XG5cbiAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy5zaWRlYmFyLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jcmVhdGVWaWV3cygpO1xuICB9XG5cbiAgY3JlYXRlVmlld3MoKSB7XG4gICAgdGhpcy52aWV3cyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICB2YWx1ZTogVUkuZGVmYXVsdFZpZXcoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICduZXdQcm9qZWN0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMubmV3UHJvamVjdFZpZXcoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaG93UHJvamVjdCcsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRWaWV3KCkge1xuICAgIGNvbnN0IHZpZXdCb2R5ID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdib2R5JyB9XSk7XG4gICAgY29uc3QgZGVmYXVsdFZpZXcgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2RlZmF1bHRWaWV3JyB9XSk7XG4gICAgY29uc3Qgdmlld3RpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnaDInLCAnV2VsQ29tZSBvbiBUb0RvIEFwcCcsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndGl0bGUnIH1dKTtcblxuICAgIHZpZXdCb2R5LmFwcGVuZCh2aWV3dGl0bGUsIGRlZmF1bHRWaWV3KTtcbiAgICByZXR1cm4gdmlld0JvZHk7XG4gIH1cblxuICBuZXdQcm9qZWN0VmlldygpIHtcbiAgICBjb25zdCB2aWV3SGVhZGVyID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdoZWFkZXInIH1dKTtcbiAgICBjb25zdCB2aWV3dGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdoMicsICdDcmVhdGUgbmV3IFByb2plY3QnLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3RpdGxlJyB9XSk7XG4gICAgdmlld0hlYWRlci5hcHBlbmRDaGlsZCh2aWV3dGl0bGUpO1xuICAgIGNvbnN0IHZpZXdCb2R5ID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdib2R5JyB9XSk7XG4gICAgdGhpcy5wcm9qZWN0Rm9ybSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2Zvcm0nLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3Byb2plY3RGb3JtJyB9XSk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1GaWVsZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGQnIH1dKTtcbiAgICB0aGlzLnByb2plY3RGb3JtRmllbGRJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0JywgbnVsbCxcbiAgICAgIFtcbiAgICAgICAgeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2lucHV0JyB9LFxuICAgICAgICB7IG5hbWU6ICd0eXBlJywgdmFsdWU6ICd0ZXh0JyB9LFxuICAgICAgICB7IG5hbWU6ICduYW1lJywgdmFsdWU6ICdwcm9qZWN0LW5hbWUnIH0sXG4gICAgICAgIHsgbmFtZTogJ2lkJywgdmFsdWU6ICduZXdQcm9qZWN0SW5wdXQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3JlcXVpcmVkJywgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lOiAncGxhY2Vob2xkZXInLCB2YWx1ZTogJ1Byb2plY3QgTmFtZScgfSxcbiAgICAgIF0pO1xuICAgIHRoaXMucHJvamVjdEZvcm1GaWVsZEJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2J1dHRvbicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYnRuJyB9XSk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1GaWVsZEljb24gPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS1wbHVzJyB9XSk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1GaWVsZFRleHQgPSBjcmVhdGVEb21FbGVtZW50KCdzcGFuJywgJ0FkZCcpO1xuICAgIHRoaXMucHJvamVjdEZvcm1GaWVsZEJ1dHRvbi5hcHBlbmQocHJvamVjdEZvcm1GaWVsZFRleHQsIHByb2plY3RGb3JtRmllbGRJY29uKTtcbiAgICBwcm9qZWN0Rm9ybUZpZWxkLmFwcGVuZENoaWxkKHRoaXMucHJvamVjdEZvcm1GaWVsZElucHV0KTtcbiAgICBwcm9qZWN0Rm9ybUZpZWxkLmFwcGVuZENoaWxkKHRoaXMucHJvamVjdEZvcm1GaWVsZEJ1dHRvbik7XG4gICAgdGhpcy5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybUZpZWxkKTtcbiAgICB2aWV3Qm9keS5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RGb3JtKTtcbiAgICByZXR1cm4gW3ZpZXdIZWFkZXIsIHZpZXdCb2R5XTtcbiAgfVxuXG4gIHNob3dQcm9qZWN0VmlldygpIHtcbiAgICBjb25zdCBjb250YWluZXJIZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2hlYWRlcicgfV0pO1xuICAgIHRoaXMuY29udGFpbmVySGVhZGVydGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdoMicsIHRoaXMuc2VsZWN0ZWRQcm9qZWN0LmdldE5hbWUoKSwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0aXRsZScgfV0pO1xuICAgIGNvbnRhaW5lckhlYWRlci5hcHBlbmQodGhpcy5jb250YWluZXJIZWFkZXJ0aXRsZSk7XG4gICAgLy8gdGhpcy5yZW5kZXJWaWV3KFtjb250YWluZXJIZWFkZXJdKTtcbiAgICBjb25zdCB2aWV3Qm9keSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYm9keScgfV0pO1xuICAgIHRoaXMudG9kb0Zvcm0gPSBjcmVhdGVEb21FbGVtZW50KCdmb3JtJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdUb2RvRm9ybScgfV0pO1xuICAgIGNvbnN0IHRvZG9Gb3JtRmllbGQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2ZpZWxkJyB9XSk7XG4gICAgdGhpcy50b2RvRm9ybUZpZWxkSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsIG51bGwsXG4gICAgICBbXG4gICAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpbnB1dCcgfSxcbiAgICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAndGV4dCcgfSxcbiAgICAgICAgeyBuYW1lOiAnbmFtZScsIHZhbHVlOiAndG9kby1uYW1lJyB9LFxuICAgICAgICB7IG5hbWU6ICdpZCcsIHZhbHVlOiAnbmV3VG9kb0lucHV0JyB9LFxuICAgICAgICB7IG5hbWU6ICdyZXF1aXJlZCcsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ3BsYWNlaG9sZGVyJywgdmFsdWU6ICdBZGQgYSBUYXNrJyB9LFxuICAgICAgXSk7XG4gICAgdGhpcy50b2RvRm9ybUZpZWxkQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdidG4nIH1dKTtcbiAgICBjb25zdCB0b2RvRm9ybUZpZWxkSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2knLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2ZhIGZhLXBsdXMnIH1dKTtcbiAgICB0aGlzLnRvZG9Gb3JtRmllbGRCdXR0b24uYXBwZW5kQ2hpbGQodG9kb0Zvcm1GaWVsZEljb24pO1xuICAgIHRvZG9Gb3JtRmllbGQuYXBwZW5kQ2hpbGQodGhpcy50b2RvRm9ybUZpZWxkSW5wdXQpO1xuICAgIHRvZG9Gb3JtRmllbGQuYXBwZW5kQ2hpbGQodGhpcy50b2RvRm9ybUZpZWxkQnV0dG9uKTtcbiAgICB0aGlzLnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtRmllbGQpO1xuXG4gICAgdGhpcy50b2RvTGlzdCA9IGNyZWF0ZURvbUVsZW1lbnQoJ3VsJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0b2RvTGlzdCcgfV0pO1xuXG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLnNlbGVjdGVkUHJvamVjdC5nZXRUb2RvcygpO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHRoaXMuYWRkVG9kbyh0b2RvKSk7XG4gICAgdmlld0JvZHkuYXBwZW5kKHRoaXMudG9kb0Zvcm0sIHRoaXMudG9kb0xpc3QpO1xuXG4gICAgcmV0dXJuIFtjb250YWluZXJIZWFkZXIsIHZpZXdCb2R5XTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEb21FbGVtZW50KCdsaScsIHByb2plY3QuZ2V0TmFtZSgpLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3Byb2plY3QnIH0sIHsgbmFtZTogJ2lkJywgdmFsdWU6IHByb2plY3QuZ2V0SWQoKSB9XSk7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIGNvbnN0IFRvZG9FbGVtZW50ID0gY3JlYXRlRG9tRWxlbWVudCgnbGknLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3RvZG8nIH0sIHsgbmFtZTogJ2lkJywgdmFsdWU6IHRvZG8uZ2V0SWQoKSB9XSk7XG4gICAgY29uc3QgdG9kb0NoZWNrSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsIG51bGwsXG4gICAgICBbXG4gICAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpbnB1dCcgfSxcbiAgICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAnY2hlY2tib3gnIH0sXG4gICAgICAgIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3RvZG9DaGVja2xpc3QnIH0sXG4gICAgICAgIHsgbmFtZTogJ2lkJywgdmFsdWU6IGAke3RvZG8uZ2V0SWQoKX1Ub2RvSW5wdXRgIH0sXG4gICAgICBdKTtcblxuICAgIGNvbnN0IHRvZG9MYWJlbCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2xhYmVsJywgbnVsbCwgW3sgbmFtZTogJ2ZvcicsIHZhbHVlOiBgJHt0b2RvLmdldElkKCl9VG9kb0lucHV0YCB9LCB7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndG9kb0NoZWNrbGlzdExhYmVsJyB9LCB7IG5hbWU6ICdkYXRhLWlkJywgdmFsdWU6IHRvZG8uZ2V0SWQoKSB9XSk7XG4gICAgY29uc3QgdG9kb0RldGFpbHMgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2RldGFpbHMnIH1dKTtcbiAgICBjb25zdCB0b2RvUHJldmlldyA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAncHJldmlldycgfV0pO1xuICAgIGNvbnN0IHRvZG9QcmV2aWV3VGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCB0b2RvLmdldE5hbWUoKSwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0aXRsZScgfV0pO1xuICAgIGNvbnN0IHRvZG9QcmV2aWV3VGFnQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0YWdzJyB9XSk7XG4gICAgaWYgKHRvZG8uZ2V0RGF0ZSgpKSB7XG4gICAgICBjb25zdCB0b2RvUHJldmlld0RhdGVUYWcgPSBjcmVhdGVEb21FbGVtZW50KCdzcGFuJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0YWcnIH1dKTtcbiAgICAgIGNvbnN0IHRvZG9QcmV2aWV3RGF0ZVRhZ0ljb24gPSBjcmVhdGVEb21FbGVtZW50KCdzcGFuJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpY29uJyB9XSk7XG4gICAgICBjb25zdCB0b2RvUHJldmlld0RhdGVUYWdJY29uRWxlbWVudCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2knLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2ZhIGZhLWNhbGVuZGFyJyB9XSk7XG4gICAgICB0b2RvUHJldmlld0RhdGVUYWdJY29uLmFwcGVuZENoaWxkKHRvZG9QcmV2aWV3RGF0ZVRhZ0ljb25FbGVtZW50KTtcbiAgICAgIGNvbnN0IHRvZG9QcmV2aWV3RGF0ZVRhZ0NvbnRlbnQgPSBjcmVhdGVEb21FbGVtZW50KCdzcGFuJywgdG9kby5nZXREYXRlKCkpO1xuICAgICAgdG9kb1ByZXZpZXdEYXRlVGFnLmFwcGVuZCh0b2RvUHJldmlld0RhdGVUYWdJY29uLCB0b2RvUHJldmlld0RhdGVUYWdDb250ZW50KTtcbiAgICAgIHRvZG9QcmV2aWV3VGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9QcmV2aWV3RGF0ZVRhZyk7XG4gICAgfVxuICAgIHRvZG9QcmV2aWV3LmFwcGVuZCh0b2RvUHJldmlld1RpdGxlLCB0b2RvUHJldmlld1RhZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RvTW9yZUJ1dHRvbkljb24gPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS1wZW5jaWwnIH0sIHsgbmFtZTogJ2RhdGEtaWQnLCB2YWx1ZTogdG9kby5nZXRJZCgpIH1dKTtcbiAgICBjb25zdCB0b2RvTW9yZUJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYnV0dG9uIHRvZG9FZGl0QnV0dG9uJyB9LCB7IG5hbWU6ICdkYXRhLWlkJywgdmFsdWU6IHRvZG8uZ2V0SWQoKSB9XSk7XG4gICAgdG9kb01vcmVCdXR0b24uYXBwZW5kQ2hpbGQodG9kb01vcmVCdXR0b25JY29uKTtcbiAgICBjb25zdCB0b2RvTW9yZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnbW9yZScgfV0pO1xuICAgIHRvZG9Nb3JlLmFwcGVuZENoaWxkKHRvZG9Nb3JlQnV0dG9uKTtcbiAgICB0b2RvRGV0YWlscy5hcHBlbmQodG9kb1ByZXZpZXcsIHRvZG9Nb3JlKTtcblxuICAgIGlmICh0b2RvLmlzQ2hlY2tlZCgpKSB7XG4gICAgICB0b2RvQ2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgIFRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWNoZWNrZWQnKTtcbiAgICB9XG4gICAgVG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgaXMtJHt0b2RvLmdldFByaW9yaXR5KCl9YCk7XG4gICAgVG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9DaGVja0lucHV0LCB0b2RvTGFiZWwsIHRvZG9EZXRhaWxzKTtcblxuICAgIHRoaXMudG9kb0xpc3QucHJlcGVuZChUb2RvRWxlbWVudCk7XG4gICAgcmV0dXJuIFRvZG9FbGVtZW50O1xuICB9XG5cbiAgZWRpdFRvZG9WaWV3KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckhlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaGVhZGVyJyB9XSk7XG4gICAgdGhpcy5jb250YWluZXJIZWFkZXJ0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2gyJywgdGhpcy5zZWxlY3RlZFRvZG8uZ2V0TmFtZSgpLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3RpdGxlJyB9XSk7XG4gICAgY29uc3QgYmFja0J1dHRvbkljb24gPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS1jaGV2cm9uLWxlZnQgdG9kb0dvYmFja0J1dHRvbkljb24nIH1dKTtcbiAgICBjb25zdCBiYWNrQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0b2RvR29iYWNrQnV0dG9uJyB9XSk7XG4gICAgYmFja0J1dHRvbi5hcHBlbmQoYmFja0J1dHRvbkljb24pO1xuICAgIGNvbnRhaW5lckhlYWRlci5hcHBlbmQoYmFja0J1dHRvbiwgdGhpcy5jb250YWluZXJIZWFkZXJ0aXRsZSk7XG4gICAgdGhpcy5lZGl0VG9kb0Zvcm0gPSBjcmVhdGVEb21FbGVtZW50KCdmb3JtJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdUb2RvRWRpdEZvcm0nIH1dKTtcbiAgICBjb25zdCBlZGl0VG9kb0Zvcm1GaWVsZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGQnIH1dKTtcbiAgICB0aGlzLmVkaXRUb2RvRm9ybUZpZWxkSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsIG51bGwsXG4gICAgICBbXG4gICAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpbnB1dCcgfSxcbiAgICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAndGV4dCcgfSxcbiAgICAgICAgeyBuYW1lOiAnbmFtZScsIHZhbHVlOiAndG9kby1uYW1lJyB9LFxuICAgICAgICB7IG5hbWU6ICdpZCcsIHZhbHVlOiAnbmV3VG9kb0lucHV0JyB9LFxuICAgICAgICB7IG5hbWU6ICdyZXF1aXJlZCcsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ3BsYWNlaG9sZGVyJywgdmFsdWU6ICdUYXh0IE5hbWUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3ZhbHVlJywgdmFsdWU6IHRoaXMuc2VsZWN0ZWRUb2RvLmdldE5hbWUoKSB9LFxuICAgICAgXSk7XG5cbiAgICBlZGl0VG9kb0Zvcm1GaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmVkaXRUb2RvRm9ybUZpZWxkSW5wdXQpO1xuXG4gICAgY29uc3QgRGVzY3JpcHRpb25GaWVsZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsXG4gICAgICBbXG4gICAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmaWVsZCcgfSxcbiAgICAgIF0pO1xuICAgIHRoaXMuRGVzY3JpcHRpb25UZXh0QXJlYSA9IGNyZWF0ZURvbUVsZW1lbnQoJ3RleHRhcmVhJywgbnVsbCxcbiAgICAgIFtcbiAgICAgICAgeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3RleHRhcmVhJyB9LFxuICAgICAgICB7IG5hbWU6ICdyb3dzJywgdmFsdWU6ICc2JyB9LFxuICAgICAgICB7IG5hbWU6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnQWRkIGEgZGVzY3JpcHRpb24gaGVyZScgfSxcbiAgICAgIF0pO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVG9kby5nZXREZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy5EZXNjcmlwdGlvblRleHRBcmVhLnRleHRDb250ZW50ID0gdGhpcy5zZWxlY3RlZFRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICB9XG4gICAgRGVzY3JpcHRpb25GaWVsZC5hcHBlbmQodGhpcy5EZXNjcmlwdGlvblRleHRBcmVhKTtcbiAgICB0aGlzLkRhdGVJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0JywgbnVsbCwgW1xuICAgICAgeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2lucHV0JyB9LFxuICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAnZGF0ZScgfSxcbiAgICAgIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3RvZG8tZGF0ZScgfSxcbiAgICBdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRvZG8uZ2V0RGF0ZSgpKSB7XG4gICAgICB0aGlzLkRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5zZWxlY3RlZFRvZG8uZ2V0RGF0ZSgpKTtcbiAgICB9XG4gICAgY29uc3QgRGF0ZUZpZWxkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmaWVsZCcgfV0pO1xuICAgIERhdGVGaWVsZC5hcHBlbmQodGhpcy5EYXRlSW5wdXQpO1xuICAgIHRoaXMuUHJpb3JpdHlJbnB1dCA9IGNyZWF0ZURvbUVsZW1lbnQoJ3NlbGVjdCcsIG51bGwsIFtcbiAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpbnB1dCcgfSxcbiAgICAgIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3RvZG8tc2VsZWN0JyB9LFxuICAgIF0pO1xuXG4gICAgdGhpcy5Qcmlvcml0eU9wdGlvbnMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IFByaW9yaXR5T3B0aW9uID0gY3JlYXRlRG9tRWxlbWVudCgnb3B0aW9uJywgcHJpb3JpdHksIFt7IG5hbWU6ICd2YWx1ZScsIHZhbHVlOiBwcmlvcml0eSB9XSk7XG4gICAgICBpZiAocHJpb3JpdHkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gdGhpcy5zZWxlY3RlZFRvZG8uZ2V0UHJpb3JpdHkoKSkge1xuICAgICAgICBQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLlByaW9yaXR5SW5wdXQuYXBwZW5kKFByaW9yaXR5T3B0aW9uKTtcbiAgICB9KTtcbiAgICBjb25zdCBQcmlvcml0eUZpZWxkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmaWVsZCcgfV0pO1xuICAgIFByaW9yaXR5RmllbGQuYXBwZW5kKHRoaXMuUHJpb3JpdHlJbnB1dCk7XG5cbiAgICBjb25zdCBlZGl0VG9kb0Zvcm1GaWVsZEljb24gPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS1wZW5jaWwgZWRpdFRvZG9CdXRvbkljb24nIH1dKTtcbiAgICB0aGlzLmVkaXRUb2RvRm9ybUZpZWxkQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdidG4gaXMtYmxvY2sgZWRpdFRvZG9CdXRvbicgfV0pO1xuICAgIHRoaXMuZWRpdFRvZG9Gb3JtRmllbGRCdXR0b24uYXBwZW5kKGVkaXRUb2RvRm9ybUZpZWxkSWNvbik7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvRm9ybUZpZWxkSWNvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2knLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2ZhIGZhLXRpbWVzIERlbGV0ZVRvZG9CdXRvbkljb24nIH1dKTtcbiAgICB0aGlzLmRlbGV0ZVRvZG9Gb3JtRmllbGRCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KCdidXR0b24nLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2J0biBpcy1ibG9jayBpcy1kYW5nZXIgRGVsZXRlVG9kb0J1dG9uJyB9LCB7IG5hbWU6ICd0eXBlJywgdmFsdWU6ICdyZXNldCcgfV0pO1xuICAgIHRoaXMuZGVsZXRlVG9kb0Zvcm1GaWVsZEJ1dHRvbi5hcHBlbmQoZGVsZXRlVG9kb0Zvcm1GaWVsZEljb24pO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkZpZWxkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmaWVsZCcgfV0pO1xuICAgIGRlbGV0ZUJ1dHRvbkZpZWxkLmFwcGVuZCh0aGlzLmVkaXRUb2RvRm9ybUZpZWxkQnV0dG9uLCB0aGlzLmRlbGV0ZVRvZG9Gb3JtRmllbGRCdXR0b24pO1xuXG4gICAgY29uc3QgRGF0ZVByaW9yaXR5Q29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmaWVsZHMnIH1dKTtcbiAgICBEYXRlUHJpb3JpdHlDb250YWluZXIuYXBwZW5kKERhdGVGaWVsZCwgUHJpb3JpdHlGaWVsZCk7XG5cbiAgICB0aGlzLmVkaXRUb2RvRm9ybS5hcHBlbmQoXG4gICAgICBlZGl0VG9kb0Zvcm1GaWVsZCxcbiAgICAgIERlc2NyaXB0aW9uRmllbGQsXG4gICAgICBEYXRlUHJpb3JpdHlDb250YWluZXIsXG4gICAgICBkZWxldGVCdXR0b25GaWVsZCxcbiAgICApO1xuXG4gICAgY29uc3Qgdmlld0JvZHkgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2JvZHknIH1dKTtcbiAgICB2aWV3Qm9keS5hcHBlbmQodGhpcy5lZGl0VG9kb0Zvcm0pO1xuICAgIHJldHVybiBbY29udGFpbmVySGVhZGVyLCB2aWV3Qm9keV07XG4gIH1cblxuICBzZWxlY3RUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnNlbGVjdGVkVG9kbyA9IHRvZG87XG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZWRpdFRvZG9WaWV3KCk7XG5cbiAgICB2aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdFByb2plY3QocHJvamVjdCkge1xuICAgIFVJLnVuc2VsZWN0QWxsUHJvamVjdCgpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdC5nZXRJZCgpfWApO1xuICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnZpZXdzWzJdLnZhbHVlID0gJyc7XG4gICAgdGhpcy52aWV3c1syXS52YWx1ZSA9IHRoaXMuc2hvd1Byb2plY3RWaWV3KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgdW5zZWxlY3RBbGxQcm9qZWN0KCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0IC5wcm9qZWN0Jyk7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclZpZXcodmlld05hbWUpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVWaWV3ID09PSB2aWV3TmFtZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB2aWV3TmFtZTtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMudmlld3MuZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gdmlld05hbWUpO1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmICghdmlld3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2aWV3cy52YWx1ZSkpIHtcbiAgICAgIHZpZXdzLnZhbHVlLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodmlldyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodmlld3MudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7Il0sInNvdXJjZVJvb3QiOiIifQ==