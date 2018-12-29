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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/fixtures/doc.mdx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test/fixtures/doc.mdx":
/*!*******************************!*\
  !*** ./test/fixtures/doc.mdx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/test/fixtures/doc.mdx: Unexpected token (15:11)\\n\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m    \\u001b[36mconst\\u001b[39m { components\\u001b[33m,\\u001b[39m \\u001b[33m...\\u001b[39mprops } \\u001b[33m=\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mprops\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 15 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mMDXTag\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m             name\\u001b[33m=\\u001b[39m\\u001b[32m\\\"wrapper\\\"\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m             \\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m             components\\u001b[33m=\\u001b[39m{components}\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:4051:15)\\n    at Parser.unexpected (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:5382:16)\\n    at Parser.parseExprAtom (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:6541:20)\\n    at Parser.parseExprSubscripts (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:6104:21)\\n    at Parser.parseMaybeUnary (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:6083:21)\\n    at Parser.parseExprOps (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:5968:21)\\n    at Parser.parseMaybeConditional (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:5940:21)\\n    at Parser.parseMaybeAssign (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:5887:21)\\n    at Parser.parseExpression (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:5840:21)\\n    at Parser.parseReturnStatement (/Users/yehangqi/Documents/projects/web/creams-container/mdx-util/packages/mdx-loader/node_modules/@babel/parser/lib/index.js:7863:28)\");\n\n//# sourceURL=webpack:///./test/fixtures/doc.mdx?");

/***/ })

/******/ });