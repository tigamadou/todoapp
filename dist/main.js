/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_undraw_accept_request_vdsd_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/undraw_accept_request_vdsd.svg */ "./src/assets/images/undraw_accept_request_vdsd.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pangolin&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_undraw_accept_request_vdsd_svg__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml,\nbody {\n  padding: 0;\n  background: #eaeaea;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-family: \"Pangolin\", cursive;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.header {\n  text-align: center;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.app {\n  width: 100%;\n  width: 1200px;\n  height: 90vh;\n  display: flex;\n  background: #fff;\n  border-radius: 30px;\n  overflow: hidden;\n  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3);\n}\n.app .container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.app .container .header {\n  background: #ff2e63;\n  padding: 1.45rem 2rem;\n  margin: 0;\n  color: #fff;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.app .container .header .todoGobackButton {\n  margin-right: 1rem;\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.app .container .header .todoGobackButton:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.app .container .header .addNewTodo {\n  background: #ff2e63;\n  border: 1px solid #c70032;\n  color: #fff;\n  height: 50px;\n  line-height: 50px;\n  font-weight: bold;\n  border-radius: 30px;\n  padding: 0 2rem;\n  box-shadow: 0 5px 5px -5px #fa003f;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n}\n.app .container .header .addNewTodo:hover {\n  box-shadow: 0 10px 5px -5px #fa003f;\n  background: #fff;\n  color: #ff2e63;\n}\n.app .container .body {\n  padding: 2rem;\n  overflow: auto;\n  flex: 1;\n}\n.app .container .body .defaultView {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  height: 50vh;\n}\n.app .container .body .form {\n  width: 300px;\n  background: #f9f9f9;\n  padding: 1rem;\n}\n.app .container .body .form .field {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.app .container .body .form .field label {\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n.app .container .body .form .field .input {\n  border-radius: 10px;\n  border: 1px solid #f1f1f1;\n  padding: 10px;\n}\n.app .container .body .projectForm {\n  max-width: 500px;\n  margin: auto;\n  padding: 1rem;\n}\n.app .container .body .projectForm .field {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n}\n.app .container .body .projectForm .field .input {\n  border-radius: 10px;\n  padding: 1rem;\n  flex: 1;\n  border: 1px solid #f1f1f1;\n  font-size: 1.3rem;\n}\n.app .container .body .projectForm .field .btn {\n  margin-top: 16px;\n  padding: 10px 15px;\n  border: 1px solid #f1f1f1;\n  background: #08d9d6;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n.app .container .body .projectForm .field .btn span {\n  margin-right: 1rem;\n}\n.app .container .body .TodoForm .field,\n.app .container .body .TodoEditForm .field {\n  display: flex;\n  position: relative;\n  border-radius: 30px;\n  margin-bottom: 16px;\n}\n.app .container .body .TodoForm .field .textarea,\n.app .container .body .TodoEditForm .field .textarea {\n  border-radius: 30px;\n  padding: 1rem;\n  flex: 1;\n  border: 1px solid #f1f1f1;\n  font-size: 1.3rem;\n  background: #f9f9f9;\n}\n.app .container .body .TodoForm .field .input,\n.app .container .body .TodoEditForm .field .input {\n  background: #f9f9f9;\n  border-radius: 30px;\n  padding: 0 50px 0 1rem;\n  height: 50px;\n  flex: 1;\n  border: 1px solid #f1f1f1;\n  font-size: 1.3rem;\n}\n.app .container .body .TodoForm .field .btn,\n.app .container .body .TodoEditForm .field .btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 50px;\n  width: 50px;\n  font-size: 1.3rem;\n  border: 1px solid #f1f1f1;\n  background: #08d9d6;\n  color: #fff;\n  cursor: pointer;\n}\n.app .container .body .TodoForm .field .btn.is-block,\n.app .container .body .TodoEditForm .field .btn.is-block {\n  display: inline-block;\n  border-radius: 50%;\n  position: relative;\n}\n.app .container .body .TodoForm .field .btn.is-block.is-danger,\n.app .container .body .TodoEditForm .field .btn.is-block.is-danger {\n  background: #e74c3c;\n}\n.app .container .body .TodoForm .field .btn span,\n.app .container .body .TodoEditForm .field .btn span {\n  margin-right: 1rem;\n}\n.app .container .body .TodoForm .fields,\n.app .container .body .TodoEditForm .fields {\n  display: flex;\n}\n.app .container .body .TodoForm .fields .field,\n.app .container .body .TodoEditForm .fields .field {\n  flex: 1;\n}\n.app .container .body .button {\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n}\n.app .container .body .button:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.app .container .body .todoList {\n  padding: 2rem 0;\n}\n.app .container .body .todoList .todo {\n  margin: auto;\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  padding: 1rem;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  border-bottom: 1px solid #f1f1f1;\n}\n.app .container .body .todoList .todo:hover {\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 20px 5px -10px rgba(200, 200, 200, 0.1);\n  background: #fff;\n  transform: scale(1.01);\n  z-index: 3;\n}\n.app .container .body .todoList .todo.is-checked {\n  background: #fefefe;\n  color: #ccc;\n}\n.app .container .body .todoList .todo.is-checked .title {\n  text-decoration: line-through;\n}\n.app .container .body .todoList .todo.is-checked:hover {\n  transform: none;\n  box-shadow: none;\n}\n.app .container .body .todoList .todo input[type=checkbox] {\n  position: absolute;\n  left: -9999px;\n}\n.app .container .body .todoList .todo input[type=checkbox] + label {\n  position: relative;\n  min-height: 30px;\n  min-width: 30px;\n  margin-right: 2rem;\n}\n.app .container .body .todoList .todo input[type=checkbox] + label::before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  min-height: 30px;\n  min-width: 30px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  z-index: 1;\n  cursor: pointer;\n  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);\n}\n.app .container .body .todoList .todo input[type=checkbox] + label::after {\n  z-index: 2;\n  cursor: pointer;\n  content: \"✓ \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px solid transparent;\n  min-height: 30px;\n  min-width: 30px;\n  font-size: 1rem;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  background: #08d9d6;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.app .container .body .todoList .todo input[type=checkbox]:checked + label::after {\n  transform: scale(1);\n}\n.app .container .body .todoList .todo .details {\n  font-size: 16px;\n  flex: 1;\n  display: flex;\n}\n.app .container .body .todoList .todo .preview {\n  flex: 1;\n  font-size: 1.2rem;\n  line-height: 30px;\n}\n.app .container .body .todoList .todo .preview .title {\n  flex: 1;\n  text-transform: capitalize;\n}\n.app .container .body .todoList .todo .preview .tag {\n  font-size: 1rem;\n}\n.app .container .body .todoList .todo .preview .tag .icon {\n  margin-right: 16px;\n  font-size: 1.2rem;\n  color: #ccc;\n}\n.app .container .body .todoList .todo::after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n}\n.app .container .body .todoList .todo.is-default::after {\n  background: #ccc;\n}\n.app .container .body .todoList .todo.is-low::after {\n  background: #08d9d6;\n}\n.app .container .body .todoList .todo.is-medium::after {\n  background: #f39c12;\n}\n.app .container .body .todoList .todo.is-high::after {\n  background: #e74c3c;\n}\n.app .sidebar {\n  margin: 0;\n  background: #fff;\n  width: 20vw;\n  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n}\n.app .sidebar .projects {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  flex-direction: column;\n}\n.app .sidebar .projects .header {\n  background: #ff2e63;\n  color: #fff;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 1rem;\n}\n.app .sidebar .projects .header h2 {\n  font-size: 3rem;\n  margin: 0 0 16px 0;\n}\n.app .sidebar .projects .content {\n  padding: 1rem;\n  flex: 1;\n  flex-grow: 1;\n  overflow: auto;\n}\n.app .sidebar .projects .content .newProjectButton {\n  padding: 10px;\n  color: #ff2e63;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 1.3rem;\n  font-weight: 900;\n}\n.app .sidebar .projects .content .newProjectButton:hover {\n  background: #ff2e63;\n  color: #fff;\n}\n.app .sidebar .projects .content .projectList .project {\n  padding: 1rem;\n  transition: all 0.25s ease-in-out;\n  font-weight: 400;\n  font-size: 1.3rem;\n  border-radius: 30px;\n}\n.app .sidebar .projects .content .projectList .project:hover {\n  background: #ff2e63;\n  cursor: pointer;\n  color: #fff;\n}\n.app .sidebar .projects .content .projectList .project.active {\n  background: #ff2e63;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://src/assets/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\r\n@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');\r\n$primaryColor: #ff2e63;\r\n$default: #ccc;\r\n$success: #08d9d6;\r\n$warning: #f39c12;\r\n$danger:  #e74c3c;\r\n\r\nhtml,\r\nbody {\r\n  padding: 0;\r\n  background: #eaeaea;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  font-family: 'Pangolin', cursive;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.app {\r\n  width: 100%;\r\n  width: 1200px;\r\n  height: 90vh;\r\n  display: flex;\r\n  background: #fff;\r\n  border-radius: 30px;\r\n  overflow: hidden;\r\n  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3);\r\n\r\n  .container {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    .header {\r\n      background: $primaryColor;\r\n      padding: 1.45rem 2rem;\r\n      margin: 0;\r\n      color: #fff;\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      align-items: center;\r\n\r\n      .todoGobackButton {\r\n        margin-right: 1rem;\r\n        cursor: pointer;\r\n        height: 50px;\r\n        width: 50px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-radius: 50%;\r\n\r\n        &:hover {\r\n          background: rgba(0, 0, 0, 0.1);\r\n        }\r\n      }\r\n\r\n      .addNewTodo {\r\n        background: $primaryColor;\r\n        border: 1px solid darken($primaryColor, 20%);\r\n        color: #fff;\r\n        height: 50px;\r\n        line-height: 50px;\r\n        font-weight: bold;\r\n        border-radius: 30px;\r\n        padding: 0 2rem;\r\n        box-shadow: 0 5px 5px -5px darken($primaryColor, 10%);\r\n        cursor: pointer;\r\n        transition: all 0.25s ease-in-out;\r\n\r\n        &:hover {\r\n          box-shadow: 0 10px 5px -5px darken($primaryColor, 10%);\r\n          background: #fff;\r\n          color: $primaryColor;\r\n        }\r\n      }\r\n    }\r\n\r\n    .body {\r\n      padding: 2rem;\r\n      overflow: auto;\r\n      flex: 1;\r\n\r\n      .defaultView {\r\n        background-image: url('../images/undraw_accept_request_vdsd.svg');\r\n        background-size: 100% 100%;\r\n        height: 50vh;\r\n      }\r\n\r\n      .form {\r\n        width: 300px;\r\n        background: #f9f9f9;\r\n        padding: 1rem;\r\n\r\n        .field {\r\n          display: flex;\r\n          flex-direction: column;\r\n          margin-bottom: 16px;\r\n\r\n          label {\r\n            font-size: 1.2rem;\r\n            margin-bottom: 10px;\r\n          }\r\n\r\n          .input {\r\n            border-radius: 10px;\r\n            border: 1px solid #f1f1f1;\r\n            padding: 10px;\r\n          }\r\n        }\r\n      }\r\n\r\n      .projectForm {\r\n        max-width: 500px;\r\n        margin: auto;\r\n        padding: 1rem;\r\n\r\n        .field {\r\n          display: flex;\r\n          flex-direction: column;\r\n          border-radius: 10px;\r\n\r\n          .input {\r\n            border-radius: 10px;\r\n            padding: 1rem;\r\n            flex: 1;\r\n            border: 1px solid #f1f1f1;\r\n            font-size: 1.3rem;\r\n          }\r\n\r\n          .btn {\r\n            margin-top: 16px;\r\n            padding: 10px 15px;\r\n            border: 1px solid #f1f1f1;\r\n            background: $success;\r\n            color: #fff;\r\n            border-radius: 5px;\r\n            cursor: pointer;\r\n            font-size: 1.3rem;\r\n\r\n            span {\r\n              margin-right: 1rem;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .TodoForm,\r\n      .TodoEditForm {\r\n        .field {\r\n          display: flex;\r\n          //   border: 1px solid #f1f1f1;\r\n          position: relative;\r\n          border-radius: 30px;\r\n          margin-bottom: 16px;\r\n\r\n          .textarea {\r\n            border-radius: 30px;\r\n            padding: 1rem;\r\n            flex: 1;\r\n            border: 1px solid #f1f1f1;\r\n            font-size: 1.3rem;\r\n            background: #f9f9f9;\r\n          }\r\n\r\n          .input {\r\n            background: #f9f9f9;\r\n            border-radius: 30px;\r\n            padding: 0 50px 0 1rem;\r\n            height: 50px;\r\n            flex: 1;\r\n            border: 1px solid #f1f1f1;\r\n            font-size: 1.3rem;\r\n          }\r\n\r\n          .btn {\r\n            position: absolute;\r\n            right: 0;\r\n            top: 0;\r\n            height: 50px;\r\n            width: 50px;\r\n            font-size: 1.3rem;\r\n            border: 1px solid #f1f1f1;\r\n            background: $success;\r\n            color: #fff;\r\n            cursor: pointer;\r\n\r\n            &.is-block {\r\n              display: inline-block;\r\n              border-radius: 50%;\r\n              position: relative;\r\n\r\n              &.is-danger {\r\n                background: $danger;\r\n              }\r\n            }\r\n\r\n            span {\r\n              margin-right: 1rem;\r\n            }\r\n          }\r\n        }\r\n\r\n        .fields {\r\n          display: flex;\r\n\r\n          .field {\r\n            flex: 1;\r\n          }\r\n        }\r\n      }\r\n\r\n      .button {\r\n        cursor: pointer;\r\n        padding: 10px;\r\n        border-radius: 50%;\r\n        height: 30px;\r\n        width: 30px;\r\n        text-align: center;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        font-size: 1rem;\r\n\r\n        &:hover {\r\n          background: rgba(0, 0, 0, 0.1);\r\n        }\r\n      }\r\n\r\n      .todoList {\r\n        padding: 2rem 0;\r\n\r\n        .todo {\r\n          margin: auto;\r\n          border-radius: 20px;\r\n          overflow: hidden;\r\n          display: flex;\r\n          padding: 1rem;\r\n          position: relative;\r\n          transition: all 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22);\r\n          border-bottom: 1px solid #f1f1f1;\r\n\r\n          &:hover {\r\n            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1), 0 20px 5px -10px rgba(200, 200, 200, 0.1);\r\n            background: #fff;\r\n            transform: scale(1.01);\r\n            z-index: 3;\r\n          }\r\n\r\n          &.is-checked {\r\n            background: rgb(254, 254, 254);\r\n            color: #ccc;\r\n\r\n            .title {\r\n              text-decoration: line-through;\r\n            }\r\n\r\n            &:hover {\r\n              transform: none;\r\n              box-shadow: none;\r\n            }\r\n          }\r\n\r\n          input[type=checkbox] {\r\n            position: absolute;\r\n            left: -9999px;\r\n          }\r\n\r\n          input[type=checkbox] + label {\r\n            position: relative;\r\n            min-height: 30px;\r\n            min-width: 30px;\r\n            margin-right: 2rem;\r\n          }\r\n\r\n          input[type=checkbox] + label::before {\r\n            position: absolute;\r\n            content: '';\r\n            left: 0;\r\n            top: 0;\r\n            min-height: 30px;\r\n            min-width: 30px;\r\n            border: 2px solid #ccc;\r\n            border-radius: 50%;\r\n            z-index: 1;\r\n            cursor: pointer;\r\n            box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);\r\n          }\r\n\r\n          input[type=checkbox] + label::after {\r\n            z-index: 2;\r\n            cursor: pointer;\r\n            content: '\\2713\\0020';\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            border: 2px solid transparent;\r\n            min-height: 30px;\r\n            min-width: 30px;\r\n            font-size: 1rem;\r\n            line-height: 30px;\r\n            text-align: center;\r\n            color: #fff;\r\n            background: $success;\r\n            border-radius: 50%;\r\n            transform: scale(0);\r\n            transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n          }\r\n\r\n          input[type=checkbox]:checked + label::after {\r\n            transform: scale(1);\r\n          }\r\n\r\n          .details {\r\n            font-size: 16px;\r\n            flex: 1;\r\n            display: flex;\r\n          }\r\n\r\n          .preview {\r\n            flex: 1;\r\n            font-size: 1.2rem;\r\n            line-height: 30px;\r\n\r\n            .title {\r\n              flex: 1;\r\n              text-transform: capitalize;\r\n            }\r\n\r\n            .tag {\r\n              font-size: 1rem;\r\n\r\n              .icon {\r\n                margin-right: 16px;\r\n                font-size: 1.2rem;\r\n                color: #ccc;\r\n              }\r\n            }\r\n          }\r\n\r\n          &::after {\r\n            position: absolute;\r\n            content: '';\r\n            left: 0;\r\n            top: 0;\r\n            bottom: 0;\r\n            width: 2px;\r\n          }\r\n\r\n          &.is-default {\r\n            &::after {\r\n              background: $default;\r\n            }\r\n          }\r\n\r\n          &.is-low {\r\n            &::after {\r\n              background: $success;\r\n            }\r\n          }\r\n\r\n          &.is-medium {\r\n            &::after {\r\n              background: $warning;\r\n            }\r\n          }\r\n\r\n          &.is-high {\r\n            &::after {\r\n              background: $danger;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .sidebar {\r\n    margin: 0;\r\n    background: #fff;\r\n    width: 20vw;\r\n    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);\r\n    z-index: 1;\r\n\r\n    .projects {\r\n      display: flex;\r\n      flex: 1;\r\n      height: 100%;\r\n      flex-direction: column;\r\n\r\n      .header {\r\n        background: $primaryColor;\r\n        color: #fff;\r\n        border-bottom: 1px solid  #f1f1f1;\r\n        padding: 1rem;\r\n\r\n        h2 {\r\n          font-size: 3rem;\r\n          margin: 0 0 16px 0;\r\n        }\r\n      }\r\n\r\n      .content {\r\n        padding: 1rem;\r\n\r\n        .newProjectButton {\r\n          padding: 10px;\r\n          color: $primaryColor;\r\n          border-radius: 10px;\r\n          cursor: pointer;\r\n          font-size: 1.3rem;\r\n          font-weight: 900;\r\n\r\n          &:hover {\r\n            background: $primaryColor;\r\n            color: #fff;\r\n          }\r\n        }\r\n\r\n        flex: 1;\r\n        flex-grow: 1;\r\n        overflow: auto;\r\n\r\n        .projectList {\r\n          .project {\r\n            padding: 1rem;\r\n            transition: all 0.25s ease-in-out;\r\n            font-weight: 400;\r\n            font-size: 1.3rem;\r\n            border-radius: 30px;\r\n\r\n            &:hover {\r\n              background: $primaryColor;\r\n              cursor: pointer;\r\n              color: #fff;\r\n            }\r\n\r\n            &.active {\r\n              background: $primaryColor;\r\n              color: #fff;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

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
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

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

/***/ "./src/assets/images/undraw_accept_request_vdsd.svg":
/*!**********************************************************!*\
  !*** ./src/assets/images/undraw_accept_request_vdsd.svg ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "66a1da840e0c89e034303bc2ee53c42a.svg");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/components/Todo.js":
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/UI */ "./src/ui/UI.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Todo */ "./src/components/Todo.js");






const Layout = new _ui_UI__WEBPACK_IMPORTED_MODULE_1__.default();
const APP = new _components_App__WEBPACK_IMPORTED_MODULE_2__.default();

document.body.appendChild(Layout.render());

if (!localStorage.getItem('projects')) {
  const defaultProject = new _components_Project__WEBPACK_IMPORTED_MODULE_3__.default('Today');
  defaultProject.addTodo(new _components_Todo__WEBPACK_IMPORTED_MODULE_4__.default('Default Task'));
  APP.addProject(defaultProject);
  Layout.addProject(defaultProject);
} else {
  const LocalDatas = JSON.parse(localStorage.getItem('projects'));
  LocalDatas.forEach((element) => {
    const project = new _components_Project__WEBPACK_IMPORTED_MODULE_3__.default(element.name);
    element.todos.forEach((todo) => {
      const theTodo = new _components_Todo__WEBPACK_IMPORTED_MODULE_4__.default(todo.name);
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
    const project = new _components_Project__WEBPACK_IMPORTED_MODULE_3__.default(name);
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
      const todo = new _components_Todo__WEBPACK_IMPORTED_MODULE_4__.default(name);
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
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdW5kcmF3X2FjY2VwdF9yZXF1ZXN0X3Zkc2Quc3ZnIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzP2Q4MjIiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy91aS9VSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDK0Y7QUFDTztBQUNqQjtBQUNyRiw4QkFBOEIsbUZBQTJCO0FBQ3pELDBJQUEwSTtBQUMxSSxzSEFBc0g7QUFDdEgseUNBQXlDLHNGQUErQixDQUFDLDJFQUE2QjtBQUN0RztBQUNBLDZEQUE2RCxlQUFlLGVBQWUsd0JBQXdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsdUNBQXVDLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLFFBQVEscUJBQXFCLGVBQWUsR0FBRyxVQUFVLGdCQUFnQixrQkFBa0IsaUJBQWlCLGtCQUFrQixxQkFBcUIsd0JBQXdCLHFCQUFxQixxREFBcUQsR0FBRyxtQkFBbUIsWUFBWSxrQkFBa0IsMkJBQTJCLEdBQUcsMkJBQTJCLHdCQUF3QiwwQkFBMEIsY0FBYyxnQkFBZ0Isa0JBQWtCLGdDQUFnQyx3QkFBd0IsR0FBRyw2Q0FBNkMsdUJBQXVCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLG1EQUFtRCxtQ0FBbUMsR0FBRyx1Q0FBdUMsd0JBQXdCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixzQkFBc0Isd0JBQXdCLG9CQUFvQix1Q0FBdUMsb0JBQW9CLHNDQUFzQyxHQUFHLDZDQUE2Qyx3Q0FBd0MscUJBQXFCLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0IsbUJBQW1CLFlBQVksR0FBRyxzQ0FBc0Msc0VBQXNFLCtCQUErQixpQkFBaUIsR0FBRywrQkFBK0IsaUJBQWlCLHdCQUF3QixrQkFBa0IsR0FBRyxzQ0FBc0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyw0Q0FBNEMsc0JBQXNCLHdCQUF3QixHQUFH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LE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFN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O1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsNkI7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL3VuZHJhd19hY2NlcHRfcmVxdWVzdF92ZHNkLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYW5nb2xpbiZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYW5nb2xpblxcXCIsIGN1cnNpdmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDIwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5hcHAgLmNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZjJlNjM7XFxuICBwYWRkaW5nOiAxLjQ1cmVtIDJyZW07XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmhlYWRlciAudG9kb0dvYmFja0J1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuaGVhZGVyIC50b2RvR29iYWNrQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5oZWFkZXIgLmFkZE5ld1RvZG8ge1xcbiAgYmFja2dyb3VuZDogI2ZmMmU2MztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNzAwMzI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC01cHggI2ZhMDAzZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5oZWFkZXIgLmFkZE5ld1RvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAtNXB4ICNmYTAwM2Y7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICNmZjJlNjM7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmbGV4OiAxO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLmRlZmF1bHRWaWV3IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5mb3JtIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLmZvcm0gLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5mb3JtIC5maWVsZCBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuZm9ybSAuZmllbGQgLmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5wcm9qZWN0Rm9ybSAuZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCAuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnByb2plY3RGb3JtIC5maWVsZCAuYnRuIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgYmFja2dyb3VuZDogIzA4ZDlkNjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAucHJvamVjdEZvcm0gLmZpZWxkIC5idG4gc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkLFxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0VkaXRGb3JtIC5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkIC50ZXh0YXJlYSxcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGQgLnRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkIC5pbnB1dCxcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGQgLmlucHV0IHtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMCA1MHB4IDAgMXJlbTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkIC5idG4sXFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRWRpdEZvcm0gLmZpZWxkIC5idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXG4gIGJhY2tncm91bmQ6ICMwOGQ5ZDY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRm9ybSAuZmllbGQgLmJ0bi5pcy1ibG9jayxcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGQgLmJ0bi5pcy1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkIC5idG4uaXMtYmxvY2suaXMtZGFuZ2VyLFxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0VkaXRGb3JtIC5maWVsZCAuYnRuLmlzLWJsb2NrLmlzLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9Gb3JtIC5maWVsZCAuYnRuIHNwYW4sXFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRWRpdEZvcm0gLmZpZWxkIC5idG4gc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkcyxcXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLlRvZG9FZGl0Rm9ybSAuZmllbGRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAuVG9kb0Zvcm0gLmZpZWxkcyAuZmllbGQsXFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5Ub2RvRWRpdEZvcm0gLmZpZWxkcyAuZmllbGQge1xcbiAgZmxleDogMTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IHtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMjBweCA1cHggLTEwcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjEpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvLmlzLWNoZWNrZWQge1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvLmlzLWNoZWNrZWQgLnRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvLmlzLWNoZWNrZWQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtOTk5OXB4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kbyBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDo6YWZ0ZXIge1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbnRlbnQ6IFxcXCLinJMgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzA4ZDlkNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIC5kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIC5wcmV2aWV3IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvIC5wcmV2aWV3IC50aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gLnByZXZpZXcgLnRhZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8gLnByZXZpZXcgLnRhZyAuaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMnB4O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvLmlzLWRlZmF1bHQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcbi5hcHAgLmNvbnRhaW5lciAuYm9keSAudG9kb0xpc3QgLnRvZG8uaXMtbG93OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDhkOWQ2O1xcbn1cXG4uYXBwIC5jb250YWluZXIgLmJvZHkgLnRvZG9MaXN0IC50b2RvLmlzLW1lZGl1bTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogI2YzOWMxMjtcXG59XFxuLmFwcCAuY29udGFpbmVyIC5ib2R5IC50b2RvTGlzdCAudG9kby5pcy1oaWdoOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xcbn1cXG4uYXBwIC5zaWRlYmFyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMjB2dztcXG4gIGJveC1zaGFkb3c6IDVweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYXBwIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hcHAgLnNpZGViYXIgLnByb2plY3RzIC5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmMmU2MztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYXBwIC5zaWRlYmFyIC5wcm9qZWN0cyAuaGVhZGVyIGgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcXG59XFxuLmFwcCAuc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmFwcCAuc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLm5ld1Byb2plY3RCdXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjZmYyZTYzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmFwcCAuc2lkZWJhciAucHJvamVjdHMgLmNvbnRlbnQgLm5ld1Byb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmMmU2MztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYXBwIC5zaWRlYmFyIC5wcm9qZWN0cyAuY29udGVudCAucHJvamVjdExpc3QgLnByb2plY3Qge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcbi5hcHAgLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmYyZTYzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5hcHAgLnNpZGViYXIgLnByb2plY3RzIC5jb250ZW50IC5wcm9qZWN0TGlzdCAucHJvamVjdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZmMmU2MztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFRaEI7O0VBRUUsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNB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O0FBMkNZO0VBQ0UsZ0JBM1dKO0FBa1VWO0FBOENZO0VBQ0UsbUJBaFhKO0FBb1VWO0FBaURZO0VBQ0UsbUJBclhKO0FBc1VWO0FBb0RZO0VBQ0UsbUJBMVhKO0FBd1VWO0FBMERFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtBQXhESjtBQTBESTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBeEROO0FBMERNO0VBQ0UsbUJBcFpPO0VBcVpQLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUF4RFI7QUEwRFE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUF4RFY7QUE0RE07RUFDRSxhQUFBO0VBZ0JBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXpFUjtBQXlEUTtFQUNFLGFBQUE7RUFDQSxjQXBhSztFQXFhTCxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdkRWO0FBeURVO0VBQ0UsbUJBM2FHO0VBNGFILFdBQUE7QUF2RFo7QUFnRVU7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUE5RFo7QUFnRVk7RUFDRSxtQkE3YkM7RUE4YkQsZUFBQTtFQUNBLFdBQUE7QUE5RGQ7QUFpRVk7RUFDRSxtQkFuY0M7RUFvY0QsV0FBQTtBQS9EZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhbmdvbGluJmRpc3BsYXk9c3dhcCcpO1xcclxcbiRwcmltYXJ5Q29sb3I6ICNmZjJlNjM7XFxyXFxuJGRlZmF1bHQ6ICNjY2M7XFxyXFxuJHN1Y2Nlc3M6ICMwOGQ5ZDY7XFxyXFxuJHdhcm5pbmc6ICNmMzljMTI7XFxyXFxuJGRhbmdlcjogICNlNzRjM2M7XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcblxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIC5oZWFkZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxyXFxuICAgICAgcGFkZGluZzogMS40NXJlbSAycmVtO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIC50b2RvR29iYWNrQnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hZGROZXdUb2RvIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJHByaW1hcnlDb2xvciwgMjAlKTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTVweCBkYXJrZW4oJHByaW1hcnlDb2xvciwgMTAlKTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggNXB4IC01cHggZGFya2VuKCRwcmltYXJ5Q29sb3IsIDEwJSk7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm9keSB7XFxyXFxuICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICBmbGV4OiAxO1xcclxcblxcclxcbiAgICAgIC5kZWZhdWx0VmlldyB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy91bmRyYXdfYWNjZXB0X3JlcXVlc3RfdmRzZC5zdmcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIC5maWVsZCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5pbnB1dCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLnByb2plY3RGb3JtIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgLmZpZWxkIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgLmlucHV0IHtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5idG4ge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1Y2Nlc3M7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLlRvZG9Gb3JtLFxcclxcbiAgICAgIC5Ub2RvRWRpdEZvcm0ge1xcclxcbiAgICAgICAgLmZpZWxkIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuXFxyXFxuICAgICAgICAgIC50ZXh0YXJlYSB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIC5pbnB1dCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweCAwIDFyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAuYnRuIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzdWNjZXNzO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmlzLWJsb2NrIHtcXHJcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICYuaXMtZGFuZ2VyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhbmdlcjtcXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZmllbGRzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgICAgICAgLmZpZWxkIHtcXHJcXG4gICAgICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5idXR0b24ge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC50b2RvTGlzdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuXFxyXFxuICAgICAgICAudG9kbyB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAyMHB4IDVweCAtMTBweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJi5pcy1jaGVja2VkIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNjY2M7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnRpdGxlIHtcXHJcXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnXFxcXDI3MTNcXFxcMDAyMCc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1Y2Nlc3M7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLmRldGFpbHMge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgLnByZXZpZXcge1xcclxcbiAgICAgICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnRpdGxlIHtcXHJcXG4gICAgICAgICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnRhZyB7XFxyXFxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAuaWNvbiB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xcclxcbiAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICYuaXMtZGVmYXVsdCB7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRlZmF1bHQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICYuaXMtbG93IHtcXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3VjY2VzcztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJi5pcy1tZWRpdW0ge1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3YXJuaW5nO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmLmlzLWhpZ2gge1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRkYW5nZXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0cyB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4OiAxO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAgIC5oZWFkZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAjZjFmMWYxO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGgyIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICAubmV3UHJvamVjdEJ1dHRvbiB7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdExpc3Qge1xcclxcbiAgICAgICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXHJcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcclxcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjZhMWRhODQwZTBjODllMDM0MzAzYmMyZWU1M2M0MmEuc3ZnXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG4gIGxldCBzZWxlY3RlZFRvZG8gPSBudWxsO1xuXG4gIHRoaXMuc3RvcmVUb0xvY2FsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFzID0gW107XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgZGF0YXMucHVzaCh7IG5hbWU6IHByb2plY3QuZ2V0TmFtZSgpLCBpZDogcHJvamVjdC5nZXRJZCgpLCB0b2RvczogcHJvamVjdC5nZXREYXRhcygpIH0pO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGRhdGFzKSk7XG4gIH07XG4gIHRoaXMuYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZXhpc3RzID0gcHJvamVjdHMuZmlsdGVyKChlbGVtZW50KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gZWxlbWVudC5nZXROYW1lKCkpWzBdO1xuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHRoaXMuYWRkVG9kbyA9IHRvZG8gPT4ge1xuICAgIGlmIChzZWxlY3RlZFByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIoKGVsZW1lbnQpID0+IHNlbGVjdGVkUHJvamVjdC5nZXRJZCgpID09PSBlbGVtZW50LmdldElkKCkpWzBdO1xuICAgICAgY29uc3QgZXhpc3RzID0gcHJvamVjdC5nZXRUb2RvcygpLmZpbHRlcigoZWxlbWVudCkgPT4gdG9kby5nZXRJZCgpID09PSBlbGVtZW50LmdldElkKCkpWzBdO1xuICAgICAgaWYgKGV4aXN0cykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5lZGl0VG9kbyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0SWQoKSA9PT0gc2VsZWN0ZWRQcm9qZWN0LmdldElkKCkpO1xuICAgIGNvbnN0IHByb2plY3QgPSB7IC4uLnByb2plY3RzW3Byb2plY3RJbmRleF0gfTtcbiAgICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0LmdldFRvZG9zKClcbiAgICAgIC5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LmdldElkKCkgPT09IHNlbGVjdGVkVG9kby5nZXRJZCgpKTtcbiAgICBjb25zdCB0b2RvID0geyAuLi5zZWxlY3RlZFRvZG8gfTtcbiAgICB0b2RvLmVkaXQoJycsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuZGF0ZSwgZGF0YS5wcmlvcml0eSwgdG9kby5pc0NoZWNrZWQoKSk7XG4gICAgdG9kby5zZXROYW1lKGRhdGEubmFtZSk7XG4gICAgdG9kby5zZXRJZChkYXRhLm5hbWUpO1xuICAgIHByb2plY3QudXBkYXRlVG9kbyh0b2RvSW5kZXgsIHRvZG8pO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0gPSBwcm9qZWN0O1xuICB9O1xuXG4gIHRoaXMuZGVsZXRlVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LmdldElkKCkgPT09IHNlbGVjdGVkUHJvamVjdC5nZXRJZCgpKTtcbiAgICBjb25zdCBwcm9qZWN0ID0geyAuLi5wcm9qZWN0c1twcm9qZWN0SW5kZXhdIH07XG4gICAgY29uc3QgdG9kb0luZGV4ID0gcHJvamVjdC5nZXRUb2RvcygpXG4gICAgICAuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5nZXRJZCgpID09PSBzZWxlY3RlZFRvZG8uZ2V0SWQoKSk7XG4gICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9JbmRleCk7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XSA9IHByb2plY3Q7XG4gICAgdGhpcy5zZXRTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG4gIH07XG5cbiAgdGhpcy5nZXRBbGwgPSAoKSA9PiBwcm9qZWN0cztcblxuICB0aGlzLmdldFByb2plY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCBhbnN3ID0gcHJvamVjdHMuZmlsdGVyKChlbGVtZW50KSA9PiBpZCA9PT0gZWxlbWVudC5nZXRJZCgpKTtcbiAgICBpZiAoYW5zdy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGFuc3dbMF07XG4gIH07XG5cbiAgdGhpcy5nZXRUb2RvID0gKGlkKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbHRlcigoZWxlbWVudCkgPT4gc2VsZWN0ZWRQcm9qZWN0LmdldElkKCkgPT09IGVsZW1lbnQuZ2V0SWQoKSlbMF07XG4gICAgICBjb25zdCB0b2RvID0gcHJvamVjdC5nZXRUb2RvcygpLmZpbHRlcigoZWxlbWVudCkgPT4gaWQgPT09IGVsZW1lbnQuZ2V0SWQoKSlbMF07XG4gICAgICBpZiAoIXRvZG8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICByZXR1cm4gdG9kbztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB0aGlzLnVwRGF0ZVRvZG9DaGVja2VkID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LmdldElkKCkgPT09IHNlbGVjdGVkUHJvamVjdC5nZXRJZCgpKTtcbiAgICBjb25zdCBwcm9qZWN0ID0geyAuLi5wcm9qZWN0c1twcm9qZWN0SW5kZXhdIH07XG4gICAgY29uc3QgdG9kb0luZGV4ID0gcHJvamVjdC5nZXRUb2RvcygpLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0SWQoKSA9PT0gdG9kby5nZXRJZCgpKTtcbiAgICB0b2RvLnRvZ2dsZUNoZWNrZWQoKTtcbiAgICBwcm9qZWN0LnVwZGF0ZVRvZG8odG9kb0luZGV4LCB0b2RvKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbiAgfTtcbiAgdGhpcy5zZXRTZWxlY3RlZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG4gIH07XG5cbiAgdGhpcy5zZXRTZWxlY3RlZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHNlbGVjdGVkVG9kbyA9IHRvZG87XG4gIH07XG5cbiAgdGhpcy5nZXRTZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiZnVuY3Rpb24gUHJvamVjdCh2bmFtZSkge1xuICBsZXQgbmFtZSA9IHZuYW1lO1xuICBjb25zdCBpZCA9IGAke3ZuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxXL2csICcnKX1gO1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIHRoaXMuc2V0TmFtZSA9ICh2bmFtZSkgPT4ge1xuICAgIG5hbWUgPSB2bmFtZTtcbiAgfTtcblxuICB0aGlzLmdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIHRoaXMuZ2V0SWQgPSAoKSA9PiBpZDtcblxuICB0aGlzLmFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gIH07XG5cbiAgdGhpcy5kZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICB0aGlzLmdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG5cbiAgdGhpcy5nZXREYXRhcyA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgIHRvZG9zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGRhdGFzLnB1c2goZWxlbWVudC5nZXREYXRhcygpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhcztcbiAgfTtcblxuICB0aGlzLnVwZGF0ZVRvZG8gPSAoaW5kZXgsIHRvZG8pID0+IHtcbiAgICB0b2Rvc1tpbmRleF0gPSB0b2RvO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImZ1bmN0aW9uIFRvZG8odm5hbWUpIHtcbiAgbGV0IG5hbWUgPSB2bmFtZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgbGV0IGRhdGUgPSBudWxsO1xuICBsZXQgcHJpb3JpdHkgPSAnZGVmYXVsdCc7XG4gIGxldCBjaGVja2VkID0gZmFsc2U7XG4gIC8vIGNvbnN0IHRpbWVTdGFtcCA9IDtcbiAgbGV0IGlkID0gYCR7dm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXFcvZywgJycpfSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgdGhpcy5zZXRJZCA9IChuYW1lKSA9PiB7XG4gICAgaWQgPSBgJHtuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxXL2csICcnKX0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gIH07XG4gIHRoaXMuc2V0TmFtZSA9ICh2bmFtZSkgPT4ge1xuICAgIG5hbWUgPSB2bmFtZTtcbiAgfTtcbiAgdGhpcy5nZXRJZCA9ICgpID0+IGlkO1xuICB0aGlzLmdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICB0aGlzLmdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIHRoaXMuZ2V0RGF0ZSA9ICgpID0+IGRhdGU7XG4gIHRoaXMuZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgdGhpcy5pc0NoZWNrZWQgPSAoKSA9PiBjaGVja2VkO1xuICB0aGlzLnRvZ2dsZUNoZWNrZWQgPSAoKSA9PiB7IGNoZWNrZWQgPSAhY2hlY2tlZDsgfTtcblxuICB0aGlzLmdldERhdGFzID0gKCkgPT4gKHtcbiAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgIG5hbWU6IHRoaXMuZ2V0TmFtZSgpLFxuICAgIGRlc2NyaXB0aW9uOiB0aGlzLmdldERlc2NyaXB0aW9uKCksXG4gICAgZGF0ZTogdGhpcy5nZXREYXRlKCksXG4gICAgcHJpb3JpdHk6IHRoaXMuZ2V0UHJpb3JpdHkoKSxcbiAgICBjaGVja2VkOiB0aGlzLmlzQ2hlY2tlZCgpLFxuICB9KTtcbiAgdGhpcy5lZGl0ID0gKG5ld0lkLCBuZXdEZXNjcmlwdGlvbiwgbmV3RGF0ZSwgbmV3UHJpb3JpdHksIG5ld0NoZWNrZWQpID0+IHtcbiAgICBpZCA9IG5ld0lkO1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgZGF0ZSA9IG5ld0RhdGU7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjaGVja2VkID0gbmV3Q2hlY2tlZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFVJIGZyb20gJy4vdWkvVUknO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vY29tcG9uZW50cy9Ub2RvJztcblxuY29uc3QgTGF5b3V0ID0gbmV3IFVJKCk7XG5jb25zdCBBUFAgPSBuZXcgQXBwKCk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTGF5b3V0LnJlbmRlcigpKTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdUb2RheScpO1xuICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdEZWZhdWx0IFRhc2snKSk7XG4gIEFQUC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgTGF5b3V0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xufSBlbHNlIHtcbiAgY29uc3QgTG9jYWxEYXRhcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICBMb2NhbERhdGFzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZWxlbWVudC5uYW1lKTtcbiAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRoZVRvZG8gPSBuZXcgVG9kbyh0b2RvLm5hbWUpO1xuICAgICAgdGhlVG9kby5lZGl0KHRvZG8uaWQsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZGF0ZSwgdG9kby5wcmlvcml0eSwgdG9kby5jaGVja2VkKTtcbiAgICAgIHByb2plY3QuYWRkVG9kbyh0aGVUb2RvKTtcbiAgICB9KTtcbiAgICBBUFAuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBMYXlvdXQuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgfSk7XG59XG5cbkxheW91dC5yZW5kZXJWaWV3KCdkZWZhdWx0Jyk7XG5cbkxheW91dC5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBMYXlvdXQuY29uc3RydWN0b3IudW5zZWxlY3RBbGxQcm9qZWN0KCk7XG4gIExheW91dC5yZW5kZXJWaWV3KCduZXdQcm9qZWN0Jyk7XG59KTtcbkxheW91dC5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IG5hbWUgPSBMYXlvdXQucHJvamVjdEZvcm1GaWVsZElucHV0LnZhbHVlO1xuICBpZiAobmFtZS50cmltKCkgIT09ICcnICYmIG5hbWUgIT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBjb25zdCBkb25lID0gQVBQLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgaWYgKCFkb25lKSB7XG4gICAgICAvLyBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0ZWQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgTGF5b3V0LnByb2plY3RGb3JtRmllbGRJbnB1dC52YWx1ZSA9ICcnO1xuICAgIExheW91dC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIEFQUC5zdG9yZVRvTG9jYWwoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KTtcblxuTGF5b3V0LmFwcC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUb2RvRm9ybScpKSB7XG4gICAgY29uc3QgbmFtZSA9IExheW91dC50b2RvRm9ybUZpZWxkSW5wdXQudmFsdWU7XG4gICAgaWYgKG5hbWUudHJpbSgpICE9PSAnJyAmJiBuYW1lICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhuYW1lKTtcbiAgICAgIGNvbnN0IGFkZGVkID0gQVBQLmFkZFRvZG8odG9kbyk7XG4gICAgICBpZiAoIWFkZGVkKSB7XG4gICAgICAgIC8vIGFsZXJ0KCdUb2RvIGFscmVhZHkgZXhpc3RlZCBpbiB0aGlzIHByb2plY3QnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgTGF5b3V0LmFkZFRvZG8odG9kbyk7XG4gICAgICBMYXlvdXQudG9kb0Zvcm1GaWVsZElucHV0LnZhbHVlID0gJyc7XG4gICAgICBBUFAuc3RvcmVUb0xvY2FsKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVG9kb0VkaXRGb3JtJykpIHtcbiAgICBjb25zdCBuYW1lID0gTGF5b3V0LmVkaXRUb2RvRm9ybUZpZWxkSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBMYXlvdXQuRGVzY3JpcHRpb25UZXh0QXJlYS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gTGF5b3V0LkRhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IExheW91dC5Qcmlvcml0eUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgQVBQLmVkaXRUb2RvKHtcbiAgICAgIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSxcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gQVBQLmdldFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIExheW91dC5zZWxlY3RQcm9qZWN0KHByb2plY3QpO1xuICAgIExheW91dC5yZW5kZXJWaWV3KCdkZWZhdWx0Jyk7XG4gICAgTGF5b3V0LnJlbmRlclZpZXcoJ3Nob3dQcm9qZWN0Jyk7XG4gICAgQVBQLnN0b3JlVG9Mb2NhbCgpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuXG5MYXlvdXQucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBBUFAuZ2V0UHJvamVjdChldmVudC50YXJnZXQuaWQpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBBUFAuc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgTGF5b3V0LnNlbGVjdFByb2plY3QocHJvamVjdCk7XG4gICAgICBMYXlvdXQucmVuZGVyVmlldygnZGVmYXVsdCcpO1xuICAgICAgTGF5b3V0LnJlbmRlclZpZXcoJ3Nob3dQcm9qZWN0Jyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cbkxheW91dC5hcHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG9DaGVja2xpc3RMYWJlbCcpKSB7XG4gICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICBjb25zdCB0b2RvID0gQVBQLmdldFRvZG8oaWQpO1xuICAgIGlmICghdG9kbykge1xuICAgICAgLy8gYWxlcnQoJ1RvZG8gTm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdG9kb0xpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWNoZWNrZWQnKTtcbiAgICBBUFAudXBEYXRlVG9kb0NoZWNrZWQodG9kbyk7XG4gICAgQVBQLnN0b3JlVG9Mb2NhbCgpO1xuICB9XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG9FZGl0QnV0dG9uJykgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtcGVuY2lsJykpIHtcbiAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCB0b2RvID0gQVBQLmdldFRvZG8oaWQpO1xuICAgIGlmICghdG9kbykge1xuICAgICAgLy8gYWxlcnQoJ1RvZG8gTm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBBUFAuc2V0U2VsZWN0ZWRUb2RvKHRvZG8pO1xuICAgIExheW91dC5zZWxlY3RUb2RvKHRvZG8pO1xuICB9XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG9Hb2JhY2tCdXR0b24nKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvR29iYWNrQnV0dG9uSWNvbicpKSB7XG4gICAgTGF5b3V0LnJlbmRlclZpZXcoJ2RlZmF1bHQnKTtcbiAgICBMYXlvdXQucmVuZGVyVmlldygnc2hvd1Byb2plY3QnKTtcbiAgfVxuXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdEZWxldGVUb2RvQnV0b24nKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdEZWxldGVUb2RvQnV0b25JY29uJykpIHtcbiAgICBBUFAuZGVsZXRlVG9kbygpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IEFQUC5nZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICBMYXlvdXQuc2VsZWN0UHJvamVjdChwcm9qZWN0KTtcbiAgICBMYXlvdXQucmVuZGVyVmlldygnZGVmYXVsdCcpO1xuICAgIExheW91dC5yZW5kZXJWaWV3KCdzaG93UHJvamVjdCcpO1xuICAgIEFQUC5zdG9yZVRvTG9jYWwoKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSk7IiwiZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudChuYW1lLCB0ZXh0ID0gbnVsbCwgYXR0cmlidXRlcyA9IG51bGwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMgIT0gbnVsbCAmJiB0eXBlb2YgYXR0cmlidXRlcyA9PT0gJ29iamVjdCcpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdUb2RvIEFwcCc7XG4gICAgdGhpcy5sYXlvdXQgPSB7fTtcbiAgICB0aGlzLnZpZXdzID0ge307XG4gICAgdGhpcy5hY3RpdmVWaWV3ID0gbnVsbDtcbiAgICB0aGlzLlByaW9yaXR5T3B0aW9ucyA9IFsnRGVmYXVsdCcsICdMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICAgIHRoaXMuYXBwID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdhcHAnIH1dKTtcbiAgICB0aGlzLnNpZGViYXIgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3NpZGViYXInIH1dKTtcbiAgICB0aGlzLnByb2plY3RzID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdwcm9qZWN0cycgfV0pO1xuICAgIHRoaXMucHJvamVjdHNfaGVhZGVyID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdoZWFkZXInIH1dKTtcbiAgICB0aGlzLnByb2plY3RzX2gxID0gY3JlYXRlRG9tRWxlbWVudCgnaDEnLCB0aGlzLnRpdGxlKTtcbiAgICB0aGlzLm5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAnQ3JlYXRlIE5ldyBQcm9qZWN0JywgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICduZXdQcm9qZWN0QnV0dG9uJyB9XSk7XG5cbiAgICB0aGlzLnByb2plY3RzX2hlYWRlci5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RzX2gxKTtcblxuICAgIHRoaXMuc2lkZWJhcl9jb250ZW50ID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdjb250ZW50JyB9XSk7XG5cbiAgICB0aGlzLnByb2plY3RMaXN0ID0gY3JlYXRlRG9tRWxlbWVudCgndWwnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3Byb2plY3RMaXN0JyB9XSk7XG5cbiAgICB0aGlzLnNpZGViYXJfY29udGVudC5hcHBlbmQodGhpcy5uZXdQcm9qZWN0QnV0dG9uLCB0aGlzLnByb2plY3RMaXN0KTtcblxuICAgIHRoaXMucHJvamVjdHMuYXBwZW5kKHRoaXMucHJvamVjdHNfaGVhZGVyLCB0aGlzLnNpZGViYXJfY29udGVudCk7XG4gICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKHRoaXMucHJvamVjdHMpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2NvbnRhaW5lcicgfV0pO1xuXG4gICAgdGhpcy5hcHAuYXBwZW5kKHRoaXMuc2lkZWJhciwgdGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuY3JlYXRlVmlld3MoKTtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdzKCkge1xuICAgIHRoaXMudmlld3MgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgdmFsdWU6IFVJLmRlZmF1bHRWaWV3KCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbmV3UHJvamVjdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLm5ld1Byb2plY3RWaWV3KCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2hvd1Byb2plY3QnLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0VmlldygpIHtcbiAgICBjb25zdCB2aWV3Qm9keSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYm9keScgfV0pO1xuICAgIGNvbnN0IGRlZmF1bHRWaWV3ID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdkZWZhdWx0VmlldycgfV0pO1xuICAgIGNvbnN0IHZpZXd0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2gyJywgJ1dlbENvbWUgb24gVG9EbyBBcHAnLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3RpdGxlJyB9XSk7XG5cbiAgICB2aWV3Qm9keS5hcHBlbmQodmlld3RpdGxlLCBkZWZhdWx0Vmlldyk7XG4gICAgcmV0dXJuIHZpZXdCb2R5O1xuICB9XG5cbiAgbmV3UHJvamVjdFZpZXcoKSB7XG4gICAgY29uc3Qgdmlld0hlYWRlciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaGVhZGVyJyB9XSk7XG4gICAgY29uc3Qgdmlld3RpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnaDInLCAnQ3JlYXRlIG5ldyBQcm9qZWN0JywgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0aXRsZScgfV0pO1xuICAgIHZpZXdIZWFkZXIuYXBwZW5kQ2hpbGQodmlld3RpdGxlKTtcbiAgICBjb25zdCB2aWV3Qm9keSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYm9keScgfV0pO1xuICAgIHRoaXMucHJvamVjdEZvcm0gPSBjcmVhdGVEb21FbGVtZW50KCdmb3JtJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdwcm9qZWN0Rm9ybScgfV0pO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRmllbGQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2ZpZWxkJyB9XSk7XG4gICAgdGhpcy5wcm9qZWN0Rm9ybUZpZWxkSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsIG51bGwsXG4gICAgICBbXG4gICAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpbnB1dCcgfSxcbiAgICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAndGV4dCcgfSxcbiAgICAgICAgeyBuYW1lOiAnbmFtZScsIHZhbHVlOiAncHJvamVjdC1uYW1lJyB9LFxuICAgICAgICB7IG5hbWU6ICdpZCcsIHZhbHVlOiAnbmV3UHJvamVjdElucHV0JyB9LFxuICAgICAgICB7IG5hbWU6ICdyZXF1aXJlZCcsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgbmFtZTogJ3BsYWNlaG9sZGVyJywgdmFsdWU6ICdQcm9qZWN0IE5hbWUnIH0sXG4gICAgICBdKTtcbiAgICB0aGlzLnByb2plY3RGb3JtRmllbGRCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KCdidXR0b24nLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2J0bicgfV0pO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRmllbGRJY29uID0gY3JlYXRlRG9tRWxlbWVudCgnaScsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmEgZmEtcGx1cycgfV0pO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRmllbGRUZXh0ID0gY3JlYXRlRG9tRWxlbWVudCgnc3BhbicsICdBZGQnKTtcbiAgICB0aGlzLnByb2plY3RGb3JtRmllbGRCdXR0b24uYXBwZW5kKHByb2plY3RGb3JtRmllbGRUZXh0LCBwcm9qZWN0Rm9ybUZpZWxkSWNvbik7XG4gICAgcHJvamVjdEZvcm1GaWVsZC5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RGb3JtRmllbGRJbnB1dCk7XG4gICAgcHJvamVjdEZvcm1GaWVsZC5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RGb3JtRmllbGRCdXR0b24pO1xuICAgIHRoaXMucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1GaWVsZCk7XG4gICAgdmlld0JvZHkuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0Rm9ybSk7XG4gICAgcmV0dXJuIFt2aWV3SGVhZGVyLCB2aWV3Qm9keV07XG4gIH1cblxuICBzaG93UHJvamVjdFZpZXcoKSB7XG4gICAgY29uc3QgY29udGFpbmVySGVhZGVyID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdoZWFkZXInIH1dKTtcbiAgICB0aGlzLmNvbnRhaW5lckhlYWRlcnRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnaDInLCB0aGlzLnNlbGVjdGVkUHJvamVjdC5nZXROYW1lKCksIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndGl0bGUnIH1dKTtcbiAgICBjb250YWluZXJIZWFkZXIuYXBwZW5kKHRoaXMuY29udGFpbmVySGVhZGVydGl0bGUpO1xuICAgIC8vIHRoaXMucmVuZGVyVmlldyhbY29udGFpbmVySGVhZGVyXSk7XG4gICAgY29uc3Qgdmlld0JvZHkgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2JvZHknIH1dKTtcbiAgICB0aGlzLnRvZG9Gb3JtID0gY3JlYXRlRG9tRWxlbWVudCgnZm9ybScsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnVG9kb0Zvcm0nIH1dKTtcbiAgICBjb25zdCB0b2RvRm9ybUZpZWxkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmaWVsZCcgfV0pO1xuICAgIHRoaXMudG9kb0Zvcm1GaWVsZElucHV0ID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCBudWxsLFxuICAgICAgW1xuICAgICAgICB7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaW5wdXQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3R5cGUnLCB2YWx1ZTogJ3RleHQnIH0sXG4gICAgICAgIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3RvZG8tbmFtZScgfSxcbiAgICAgICAgeyBuYW1lOiAnaWQnLCB2YWx1ZTogJ25ld1RvZG9JbnB1dCcgfSxcbiAgICAgICAgeyBuYW1lOiAncmVxdWlyZWQnLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnQWRkIGEgVGFzaycgfSxcbiAgICAgIF0pO1xuICAgIHRoaXMudG9kb0Zvcm1GaWVsZEJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2J1dHRvbicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYnRuJyB9XSk7XG4gICAgY29uc3QgdG9kb0Zvcm1GaWVsZEljb24gPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS1wbHVzJyB9XSk7XG4gICAgdGhpcy50b2RvRm9ybUZpZWxkQnV0dG9uLmFwcGVuZENoaWxkKHRvZG9Gb3JtRmllbGRJY29uKTtcbiAgICB0b2RvRm9ybUZpZWxkLmFwcGVuZENoaWxkKHRoaXMudG9kb0Zvcm1GaWVsZElucHV0KTtcbiAgICB0b2RvRm9ybUZpZWxkLmFwcGVuZENoaWxkKHRoaXMudG9kb0Zvcm1GaWVsZEJ1dHRvbik7XG4gICAgdGhpcy50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybUZpZWxkKTtcblxuICAgIHRoaXMudG9kb0xpc3QgPSBjcmVhdGVEb21FbGVtZW50KCd1bCcsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndG9kb0xpc3QnIH1dKTtcblxuICAgIGNvbnN0IHRvZG9zID0gdGhpcy5zZWxlY3RlZFByb2plY3QuZ2V0VG9kb3MoKTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB0aGlzLmFkZFRvZG8odG9kbykpO1xuICAgIHZpZXdCb2R5LmFwcGVuZCh0aGlzLnRvZG9Gb3JtLCB0aGlzLnRvZG9MaXN0KTtcblxuICAgIHJldHVybiBbY29udGFpbmVySGVhZGVyLCB2aWV3Qm9keV07XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRG9tRWxlbWVudCgnbGknLCBwcm9qZWN0LmdldE5hbWUoKSwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdwcm9qZWN0JyB9LCB7IG5hbWU6ICdpZCcsIHZhbHVlOiBwcm9qZWN0LmdldElkKCkgfV0pO1xuICAgIHRoaXMucHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICBjb25zdCBUb2RvRWxlbWVudCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2xpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0b2RvJyB9LCB7IG5hbWU6ICdpZCcsIHZhbHVlOiB0b2RvLmdldElkKCkgfV0pO1xuICAgIGNvbnN0IHRvZG9DaGVja0lucHV0ID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCBudWxsLFxuICAgICAgW1xuICAgICAgICB7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaW5wdXQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3R5cGUnLCB2YWx1ZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICB7IG5hbWU6ICduYW1lJywgdmFsdWU6ICd0b2RvQ2hlY2tsaXN0JyB9LFxuICAgICAgICB7IG5hbWU6ICdpZCcsIHZhbHVlOiBgJHt0b2RvLmdldElkKCl9VG9kb0lucHV0YCB9LFxuICAgICAgXSk7XG5cbiAgICBjb25zdCB0b2RvTGFiZWwgPSBjcmVhdGVEb21FbGVtZW50KCdsYWJlbCcsIG51bGwsIFt7IG5hbWU6ICdmb3InLCB2YWx1ZTogYCR7dG9kby5nZXRJZCgpfVRvZG9JbnB1dGAgfSwgeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3RvZG9DaGVja2xpc3RMYWJlbCcgfSwgeyBuYW1lOiAnZGF0YS1pZCcsIHZhbHVlOiB0b2RvLmdldElkKCkgfV0pO1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdkZXRhaWxzJyB9XSk7XG4gICAgY29uc3QgdG9kb1ByZXZpZXcgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ3ByZXZpZXcnIH1dKTtcbiAgICBjb25zdCB0b2RvUHJldmlld1RpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgdG9kby5nZXROYW1lKCksIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndGl0bGUnIH1dKTtcbiAgICBjb25zdCB0b2RvUHJldmlld1RhZ0NvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndGFncycgfV0pO1xuICAgIGlmICh0b2RvLmdldERhdGUoKSkge1xuICAgICAgY29uc3QgdG9kb1ByZXZpZXdEYXRlVGFnID0gY3JlYXRlRG9tRWxlbWVudCgnc3BhbicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndGFnJyB9XSk7XG4gICAgICBjb25zdCB0b2RvUHJldmlld0RhdGVUYWdJY29uID0gY3JlYXRlRG9tRWxlbWVudCgnc3BhbicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaWNvbicgfV0pO1xuICAgICAgY29uc3QgdG9kb1ByZXZpZXdEYXRlVGFnSWNvbkVsZW1lbnQgPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS1jYWxlbmRhcicgfV0pO1xuICAgICAgdG9kb1ByZXZpZXdEYXRlVGFnSWNvbi5hcHBlbmRDaGlsZCh0b2RvUHJldmlld0RhdGVUYWdJY29uRWxlbWVudCk7XG4gICAgICBjb25zdCB0b2RvUHJldmlld0RhdGVUYWdDb250ZW50ID0gY3JlYXRlRG9tRWxlbWVudCgnc3BhbicsIHRvZG8uZ2V0RGF0ZSgpKTtcbiAgICAgIHRvZG9QcmV2aWV3RGF0ZVRhZy5hcHBlbmQodG9kb1ByZXZpZXdEYXRlVGFnSWNvbiwgdG9kb1ByZXZpZXdEYXRlVGFnQ29udGVudCk7XG4gICAgICB0b2RvUHJldmlld1RhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUHJldmlld0RhdGVUYWcpO1xuICAgIH1cbiAgICB0b2RvUHJldmlldy5hcHBlbmQodG9kb1ByZXZpZXdUaXRsZSwgdG9kb1ByZXZpZXdUYWdDb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb01vcmVCdXR0b25JY29uID0gY3JlYXRlRG9tRWxlbWVudCgnaScsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmEgZmEtcGVuY2lsJyB9LCB7IG5hbWU6ICdkYXRhLWlkJywgdmFsdWU6IHRvZG8uZ2V0SWQoKSB9XSk7XG4gICAgY29uc3QgdG9kb01vcmVCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2J1dHRvbiB0b2RvRWRpdEJ1dHRvbicgfSwgeyBuYW1lOiAnZGF0YS1pZCcsIHZhbHVlOiB0b2RvLmdldElkKCkgfV0pO1xuICAgIHRvZG9Nb3JlQnV0dG9uLmFwcGVuZENoaWxkKHRvZG9Nb3JlQnV0dG9uSWNvbik7XG4gICAgY29uc3QgdG9kb01vcmUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ21vcmUnIH1dKTtcbiAgICB0b2RvTW9yZS5hcHBlbmRDaGlsZCh0b2RvTW9yZUJ1dHRvbik7XG4gICAgdG9kb0RldGFpbHMuYXBwZW5kKHRvZG9QcmV2aWV3LCB0b2RvTW9yZSk7XG5cbiAgICBpZiAodG9kby5pc0NoZWNrZWQoKSkge1xuICAgICAgdG9kb0NoZWNrSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICBUb2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1jaGVja2VkJyk7XG4gICAgfVxuICAgIFRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYGlzLSR7dG9kby5nZXRQcmlvcml0eSgpfWApO1xuICAgIFRvZG9FbGVtZW50LmFwcGVuZCh0b2RvQ2hlY2tJbnB1dCwgdG9kb0xhYmVsLCB0b2RvRGV0YWlscyk7XG5cbiAgICB0aGlzLnRvZG9MaXN0LnByZXBlbmQoVG9kb0VsZW1lbnQpO1xuICAgIHJldHVybiBUb2RvRWxlbWVudDtcbiAgfVxuXG4gIGVkaXRUb2RvVmlldygpIHtcbiAgICBjb25zdCBjb250YWluZXJIZWFkZXIgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2hlYWRlcicgfV0pO1xuICAgIHRoaXMuY29udGFpbmVySGVhZGVydGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdoMicsIHRoaXMuc2VsZWN0ZWRUb2RvLmdldE5hbWUoKSwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0aXRsZScgfV0pO1xuICAgIGNvbnN0IGJhY2tCdXR0b25JY29uID0gY3JlYXRlRG9tRWxlbWVudCgnaScsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmEgZmEtY2hldnJvbi1sZWZ0IHRvZG9Hb2JhY2tCdXR0b25JY29uJyB9XSk7XG4gICAgY29uc3QgYmFja0J1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAndG9kb0dvYmFja0J1dHRvbicgfV0pO1xuICAgIGJhY2tCdXR0b24uYXBwZW5kKGJhY2tCdXR0b25JY29uKTtcbiAgICBjb250YWluZXJIZWFkZXIuYXBwZW5kKGJhY2tCdXR0b24sIHRoaXMuY29udGFpbmVySGVhZGVydGl0bGUpO1xuICAgIHRoaXMuZWRpdFRvZG9Gb3JtID0gY3JlYXRlRG9tRWxlbWVudCgnZm9ybScsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnVG9kb0VkaXRGb3JtJyB9XSk7XG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtRmllbGQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLCBbeyBuYW1lOiAnY2xhc3MnLCB2YWx1ZTogJ2ZpZWxkJyB9XSk7XG4gICAgdGhpcy5lZGl0VG9kb0Zvcm1GaWVsZElucHV0ID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCBudWxsLFxuICAgICAgW1xuICAgICAgICB7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaW5wdXQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3R5cGUnLCB2YWx1ZTogJ3RleHQnIH0sXG4gICAgICAgIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3RvZG8tbmFtZScgfSxcbiAgICAgICAgeyBuYW1lOiAnaWQnLCB2YWx1ZTogJ25ld1RvZG9JbnB1dCcgfSxcbiAgICAgICAgeyBuYW1lOiAncmVxdWlyZWQnLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWU6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnVGF4dCBOYW1lJyB9LFxuICAgICAgICB7IG5hbWU6ICd2YWx1ZScsIHZhbHVlOiB0aGlzLnNlbGVjdGVkVG9kby5nZXROYW1lKCkgfSxcbiAgICAgIF0pO1xuXG4gICAgZWRpdFRvZG9Gb3JtRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5lZGl0VG9kb0Zvcm1GaWVsZElucHV0KTtcblxuICAgIGNvbnN0IERlc2NyaXB0aW9uRmllbGQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCBudWxsLFxuICAgICAgW1xuICAgICAgICB7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGQnIH0sXG4gICAgICBdKTtcbiAgICB0aGlzLkRlc2NyaXB0aW9uVGV4dEFyZWEgPSBjcmVhdGVEb21FbGVtZW50KCd0ZXh0YXJlYScsIG51bGwsXG4gICAgICBbXG4gICAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICd0ZXh0YXJlYScgfSxcbiAgICAgICAgeyBuYW1lOiAncm93cycsIHZhbHVlOiAnNicgfSxcbiAgICAgICAgeyBuYW1lOiAncGxhY2Vob2xkZXInLCB2YWx1ZTogJ0FkZCBhIGRlc2NyaXB0aW9uIGhlcmUnIH0sXG4gICAgICBdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRvZG8uZ2V0RGVzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuRGVzY3JpcHRpb25UZXh0QXJlYS50ZXh0Q29udGVudCA9IHRoaXMuc2VsZWN0ZWRUb2RvLmdldERlc2NyaXB0aW9uKCk7XG4gICAgfVxuICAgIERlc2NyaXB0aW9uRmllbGQuYXBwZW5kKHRoaXMuRGVzY3JpcHRpb25UZXh0QXJlYSk7XG4gICAgdGhpcy5EYXRlSW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsIG51bGwsIFtcbiAgICAgIHsgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdpbnB1dCcgfSxcbiAgICAgIHsgbmFtZTogJ3R5cGUnLCB2YWx1ZTogJ2RhdGUnIH0sXG4gICAgICB7IG5hbWU6ICduYW1lJywgdmFsdWU6ICd0b2RvLWRhdGUnIH0sXG4gICAgXSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUb2RvLmdldERhdGUoKSkge1xuICAgICAgdGhpcy5EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuc2VsZWN0ZWRUb2RvLmdldERhdGUoKSk7XG4gICAgfVxuICAgIGNvbnN0IERhdGVGaWVsZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGQnIH1dKTtcbiAgICBEYXRlRmllbGQuYXBwZW5kKHRoaXMuRGF0ZUlucHV0KTtcbiAgICB0aGlzLlByaW9yaXR5SW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KCdzZWxlY3QnLCBudWxsLCBbXG4gICAgICB7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnaW5wdXQnIH0sXG4gICAgICB7IG5hbWU6ICduYW1lJywgdmFsdWU6ICd0b2RvLXNlbGVjdCcgfSxcbiAgICBdKTtcblxuICAgIHRoaXMuUHJpb3JpdHlPcHRpb25zLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBQcmlvcml0eU9wdGlvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ29wdGlvbicsIHByaW9yaXR5LCBbeyBuYW1lOiAndmFsdWUnLCB2YWx1ZTogcHJpb3JpdHkgfV0pO1xuICAgICAgaWYgKHByaW9yaXR5LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHRoaXMuc2VsZWN0ZWRUb2RvLmdldFByaW9yaXR5KCkpIHtcbiAgICAgICAgUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5Qcmlvcml0eUlucHV0LmFwcGVuZChQcmlvcml0eU9wdGlvbik7XG4gICAgfSk7XG4gICAgY29uc3QgUHJpb3JpdHlGaWVsZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGQnIH1dKTtcbiAgICBQcmlvcml0eUZpZWxkLmFwcGVuZCh0aGlzLlByaW9yaXR5SW5wdXQpO1xuXG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtRmllbGRJY29uID0gY3JlYXRlRG9tRWxlbWVudCgnaScsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmEgZmEtcGVuY2lsIGVkaXRUb2RvQnV0b25JY29uJyB9XSk7XG4gICAgdGhpcy5lZGl0VG9kb0Zvcm1GaWVsZEJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoJ2J1dHRvbicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnYnRuIGlzLWJsb2NrIGVkaXRUb2RvQnV0b24nIH1dKTtcbiAgICB0aGlzLmVkaXRUb2RvRm9ybUZpZWxkQnV0dG9uLmFwcGVuZChlZGl0VG9kb0Zvcm1GaWVsZEljb24pO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0Zvcm1GaWVsZEljb24gPSBjcmVhdGVEb21FbGVtZW50KCdpJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdmYSBmYS10aW1lcyBEZWxldGVUb2RvQnV0b25JY29uJyB9XSk7XG4gICAgdGhpcy5kZWxldGVUb2RvRm9ybUZpZWxkQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdidG4gaXMtYmxvY2sgaXMtZGFuZ2VyIERlbGV0ZVRvZG9CdXRvbicgfSwgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAncmVzZXQnIH1dKTtcbiAgICB0aGlzLmRlbGV0ZVRvZG9Gb3JtRmllbGRCdXR0b24uYXBwZW5kKGRlbGV0ZVRvZG9Gb3JtRmllbGRJY29uKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25GaWVsZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGQnIH1dKTtcbiAgICBkZWxldGVCdXR0b25GaWVsZC5hcHBlbmQodGhpcy5lZGl0VG9kb0Zvcm1GaWVsZEJ1dHRvbiwgdGhpcy5kZWxldGVUb2RvRm9ybUZpZWxkQnV0dG9uKTtcblxuICAgIGNvbnN0IERhdGVQcmlvcml0eUNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsIG51bGwsIFt7IG5hbWU6ICdjbGFzcycsIHZhbHVlOiAnZmllbGRzJyB9XSk7XG4gICAgRGF0ZVByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChEYXRlRmllbGQsIFByaW9yaXR5RmllbGQpO1xuXG4gICAgdGhpcy5lZGl0VG9kb0Zvcm0uYXBwZW5kKFxuICAgICAgZWRpdFRvZG9Gb3JtRmllbGQsXG4gICAgICBEZXNjcmlwdGlvbkZpZWxkLFxuICAgICAgRGF0ZVByaW9yaXR5Q29udGFpbmVyLFxuICAgICAgZGVsZXRlQnV0dG9uRmllbGQsXG4gICAgKTtcblxuICAgIGNvbnN0IHZpZXdCb2R5ID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgbnVsbCwgW3sgbmFtZTogJ2NsYXNzJywgdmFsdWU6ICdib2R5JyB9XSk7XG4gICAgdmlld0JvZHkuYXBwZW5kKHRoaXMuZWRpdFRvZG9Gb3JtKTtcbiAgICByZXR1cm4gW2NvbnRhaW5lckhlYWRlciwgdmlld0JvZHldO1xuICB9XG5cbiAgc2VsZWN0VG9kbyh0b2RvKSB7XG4gICAgdGhpcy5zZWxlY3RlZFRvZG8gPSB0b2RvO1xuXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmVkaXRUb2RvVmlldygpO1xuXG4gICAgdmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodmlldyk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RQcm9qZWN0KHByb2plY3QpIHtcbiAgICBVSS51bnNlbGVjdEFsbFByb2plY3QoKTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3QuZ2V0SWQoKX1gKTtcbiAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy52aWV3c1syXS52YWx1ZSA9ICcnO1xuICAgIHRoaXMudmlld3NbMl0udmFsdWUgPSB0aGlzLnNob3dQcm9qZWN0VmlldygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIHVuc2VsZWN0QWxsUHJvamVjdCgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0TGlzdCAucHJvamVjdCcpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJWaWV3KHZpZXdOYW1lKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlVmlldyA9PT0gdmlld05hbWUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5hY3RpdmVWaWV3ID0gdmlld05hbWU7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLnZpZXdzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IHZpZXdOYW1lKTtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoIXZpZXdzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmlld3MudmFsdWUpKSB7XG4gICAgICB2aWV3cy52YWx1ZS5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9