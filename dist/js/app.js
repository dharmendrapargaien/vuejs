/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("(function (window, appVariable) {\n\t\n\t// window.Vue.component('counter', {\n\t// \t\t\t\ttemplate: '#counter-template',\n\t// \t\t\t\tprops: ['subject'],\n\t// \t\t\t\tdata () {\n\t// \t\t\t\t\treturn { count: 0, testNum: 12};\n\t// \t\t\t\t}\n\t// \t\t\t});\n\t// \t\t\tnew Vue({\n\t// \t\t\t\tel:'#app',\n\t// \t\t\t\tdata:{\n\t// \t\t\t\t\tmessage: \"Dharmendra\",\n\t// \t\t\t\t\ttextMessage: \"\",\n\t// \t\t\t\t\tpoints: 100,\n\t// \t\t\t\t\tfirst: \"Dharmendra\",\n\t// \t\t\t\t\tlast: \"Pargaien\",\n\t// \t\t\t\t\tfullName: \"Dharmendra Pargaien\",\n\t// \t\t\t\t\tplans:[\n\t// \t\t\t\t\t\t{name: 'Enterprise', price: 100},\n\t// \t\t\t\t\t\t{name: 'Pro', price: 50},\n\t// \t\t\t\t\t\t{name: 'Personal', price: 10},\n\t// \t\t\t\t\t\t{name: 'Free', price: 0}\n\t// \t\t\t\t\t],\n\t// \t\t\t\t\tactive: {}\n\t// \t\t\t\t},\n\n\t// \t\t\t\tmethods: {\n\t// \t\t\t\t\ttestSubmit (e){\n\t// \t\t\t\t\t\tconsole.log(e);\n\t// \t\t\t\t\t}\n\t// \t\t\t\t},\n\t// \t\t\t\tcomputed: {\n\n\t// \t\t\t\t\tskill () {\n\n\t// \t\t\t\t\t\tif (this.points <= 100) \n\t// \t\t\t\t\t\t\treturn 'Beginner';\t\n\t// \t\t\t\t\t\treturn \"Advance\";\n\t// \t\t\t\t\t}\n\t// \t\t\t\t},\n\t// \t\t\t\twatch: {\n\t// \t\t\t\t\tfirst (first) {\n\t// \t\t\t\t\t\tthis.fullName = first + ' ' + this.last; \n\t// \t\t\t\t\t},\n\n\t// \t\t\t\t\tlast (last) {\n\t// \t\t\t\t\t\tthis.fullName = this.first + ' ' + last; \n\t// \t\t\t\t\t}\n\t// \t\t\t\t},\n\t// \t\t\t\tcomponents:{\n\n\t// \t\t\t\t}\n\t// \t\t\t});\n})(window, appVariable)//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3aW5kb3csIGFwcFZhcmlhYmxlKSB7XG5cdFxuXHQvLyB3aW5kb3cuVnVlLmNvbXBvbmVudCgnY291bnRlcicsIHtcblx0Ly8gXHRcdFx0XHR0ZW1wbGF0ZTogJyNjb3VudGVyLXRlbXBsYXRlJyxcblx0Ly8gXHRcdFx0XHRwcm9wczogWydzdWJqZWN0J10sXG5cdC8vIFx0XHRcdFx0ZGF0YSAoKSB7XG5cdC8vIFx0XHRcdFx0XHRyZXR1cm4geyBjb3VudDogMCwgdGVzdE51bTogMTJ9O1xuXHQvLyBcdFx0XHRcdH1cblx0Ly8gXHRcdFx0fSk7XG5cdC8vIFx0XHRcdG5ldyBWdWUoe1xuXHQvLyBcdFx0XHRcdGVsOicjYXBwJyxcblx0Ly8gXHRcdFx0XHRkYXRhOntcblx0Ly8gXHRcdFx0XHRcdG1lc3NhZ2U6IFwiRGhhcm1lbmRyYVwiLFxuXHQvLyBcdFx0XHRcdFx0dGV4dE1lc3NhZ2U6IFwiXCIsXG5cdC8vIFx0XHRcdFx0XHRwb2ludHM6IDEwMCxcblx0Ly8gXHRcdFx0XHRcdGZpcnN0OiBcIkRoYXJtZW5kcmFcIixcblx0Ly8gXHRcdFx0XHRcdGxhc3Q6IFwiUGFyZ2FpZW5cIixcblx0Ly8gXHRcdFx0XHRcdGZ1bGxOYW1lOiBcIkRoYXJtZW5kcmEgUGFyZ2FpZW5cIixcblx0Ly8gXHRcdFx0XHRcdHBsYW5zOltcblx0Ly8gXHRcdFx0XHRcdFx0e25hbWU6ICdFbnRlcnByaXNlJywgcHJpY2U6IDEwMH0sXG5cdC8vIFx0XHRcdFx0XHRcdHtuYW1lOiAnUHJvJywgcHJpY2U6IDUwfSxcblx0Ly8gXHRcdFx0XHRcdFx0e25hbWU6ICdQZXJzb25hbCcsIHByaWNlOiAxMH0sXG5cdC8vIFx0XHRcdFx0XHRcdHtuYW1lOiAnRnJlZScsIHByaWNlOiAwfVxuXHQvLyBcdFx0XHRcdFx0XSxcblx0Ly8gXHRcdFx0XHRcdGFjdGl2ZToge31cblx0Ly8gXHRcdFx0XHR9LFxuXG5cdC8vIFx0XHRcdFx0bWV0aG9kczoge1xuXHQvLyBcdFx0XHRcdFx0dGVzdFN1Ym1pdCAoZSl7XG5cdC8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHQvLyBcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdH0sXG5cdC8vIFx0XHRcdFx0Y29tcHV0ZWQ6IHtcblxuXHQvLyBcdFx0XHRcdFx0c2tpbGwgKCkge1xuXG5cdC8vIFx0XHRcdFx0XHRcdGlmICh0aGlzLnBvaW50cyA8PSAxMDApIFxuXHQvLyBcdFx0XHRcdFx0XHRcdHJldHVybiAnQmVnaW5uZXInO1x0XG5cdC8vIFx0XHRcdFx0XHRcdHJldHVybiBcIkFkdmFuY2VcIjtcblx0Ly8gXHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHR9LFxuXHQvLyBcdFx0XHRcdHdhdGNoOiB7XG5cdC8vIFx0XHRcdFx0XHRmaXJzdCAoZmlyc3QpIHtcblx0Ly8gXHRcdFx0XHRcdFx0dGhpcy5mdWxsTmFtZSA9IGZpcnN0ICsgJyAnICsgdGhpcy5sYXN0OyBcblx0Ly8gXHRcdFx0XHRcdH0sXG5cblx0Ly8gXHRcdFx0XHRcdGxhc3QgKGxhc3QpIHtcblx0Ly8gXHRcdFx0XHRcdFx0dGhpcy5mdWxsTmFtZSA9IHRoaXMuZmlyc3QgKyAnICcgKyBsYXN0OyBcblx0Ly8gXHRcdFx0XHRcdH1cblx0Ly8gXHRcdFx0XHR9LFxuXHQvLyBcdFx0XHRcdGNvbXBvbmVudHM6e1xuXG5cdC8vIFx0XHRcdFx0fVxuXHQvLyBcdFx0XHR9KTtcbn0pKHdpbmRvdywgYXBwVmFyaWFibGUpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

eval("// (function(window, Vue, appVariable, VueRouter){\n\tvar App = Vue.extend({\n\t\tdata:{\n\t\t\tmessage: \"Dharmendra\",\n\t\t\ttextMessage: \"\",\n\t\t\tpoints: 100,\n\t\t\tfirst: \"Dharmendra\",\n\t\t\tlast: \"Pargaien\",\n\t\t\tfullName: \"Dharmendra Pargaien\",\n\t\t\tplans:[\n\t\t\t\t{name: 'Enterprise', price: 100},\n\t\t\t\t{name: 'Pro', price: 50},\n\t\t\t\t{name: 'Personal', price: 10},\n\t\t\t\t{name: 'Free', price: 0}\n\t\t\t],\n\t\t\tactive: {}\n\t\t},\n\n\t\tmethods: {\n\t\t\ttestSubmit: function testSubmit (e){\n\t\t\t\tconsole.log(e);\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\n\t\t\tskill: function skill () {\n\n\t\t\t\tif (this.points <= 100) \n\t\t\t\t\treturn 'Beginner';\t\n\t\t\t\treturn \"Advance\";\n\t\t\t}\n\t\t},\n\t\twatch: {\n\t\t\tfirst: function first (first) {\n\t\t\t\tthis.fullName = first + ' ' + this.last; \n\t\t\t},\n\n\t\t\tlast: function last (last) {\n\t\t\t\tthis.fullName = this.first + ' ' + last; \n\t\t\t}\n\t\t},\n\t\tcomponents:{\n\n\t\t}\n\t});\n\n\tconsole.log(App);\n\n\tvar Home = Vue.extend({\n\t\tdata : {\n\t\t\thome : 'In Home'\n\t\t},\n\t\ttemplate : '<p>HOMEING{{home}}</p>'\n\t});\n\n\tvar Router = new VueRouter();\n\t\n\tRouter.map({\n\t\t'/home' : {\n\t\t\tcomponent : Home\n\t\t}\n\t});\n\n\tRouter.start(App, '#app');\n// })(window, Vue, appVariable, VueRouter)//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwMi5qcz81MWIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbih3aW5kb3csIFZ1ZSwgYXBwVmFyaWFibGUsIFZ1ZVJvdXRlcil7XG5cdHZhciBBcHAgPSBWdWUuZXh0ZW5kKHtcblx0XHRkYXRhOntcblx0XHRcdG1lc3NhZ2U6IFwiRGhhcm1lbmRyYVwiLFxuXHRcdFx0dGV4dE1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRwb2ludHM6IDEwMCxcblx0XHRcdGZpcnN0OiBcIkRoYXJtZW5kcmFcIixcblx0XHRcdGxhc3Q6IFwiUGFyZ2FpZW5cIixcblx0XHRcdGZ1bGxOYW1lOiBcIkRoYXJtZW5kcmEgUGFyZ2FpZW5cIixcblx0XHRcdHBsYW5zOltcblx0XHRcdFx0e25hbWU6ICdFbnRlcnByaXNlJywgcHJpY2U6IDEwMH0sXG5cdFx0XHRcdHtuYW1lOiAnUHJvJywgcHJpY2U6IDUwfSxcblx0XHRcdFx0e25hbWU6ICdQZXJzb25hbCcsIHByaWNlOiAxMH0sXG5cdFx0XHRcdHtuYW1lOiAnRnJlZScsIHByaWNlOiAwfVxuXHRcdFx0XSxcblx0XHRcdGFjdGl2ZToge31cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0dGVzdFN1Ym1pdCAoZSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblxuXHRcdFx0c2tpbGwgKCkge1xuXG5cdFx0XHRcdGlmICh0aGlzLnBvaW50cyA8PSAxMDApIFxuXHRcdFx0XHRcdHJldHVybiAnQmVnaW5uZXInO1x0XG5cdFx0XHRcdHJldHVybiBcIkFkdmFuY2VcIjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRmaXJzdCAoZmlyc3QpIHtcblx0XHRcdFx0dGhpcy5mdWxsTmFtZSA9IGZpcnN0ICsgJyAnICsgdGhpcy5sYXN0OyBcblx0XHRcdH0sXG5cblx0XHRcdGxhc3QgKGxhc3QpIHtcblx0XHRcdFx0dGhpcy5mdWxsTmFtZSA9IHRoaXMuZmlyc3QgKyAnICcgKyBsYXN0OyBcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudHM6e1xuXG5cdFx0fVxuXHR9KTtcblxuXHRjb25zb2xlLmxvZyhBcHApO1xuXG5cdHZhciBIb21lID0gVnVlLmV4dGVuZCh7XG5cdFx0ZGF0YSA6IHtcblx0XHRcdGhvbWUgOiAnSW4gSG9tZSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlIDogJzxwPkhPTUVJTkd7e2hvbWV9fTwvcD4nXG5cdH0pO1xuXG5cdHZhciBSb3V0ZXIgPSBuZXcgVnVlUm91dGVyKCk7XG5cdFxuXHRSb3V0ZXIubWFwKHtcblx0XHQnL2hvbWUnIDoge1xuXHRcdFx0Y29tcG9uZW50IDogSG9tZVxuXHRcdH1cblx0fSk7XG5cblx0Um91dGVyLnN0YXJ0KEFwcCwgJyNhcHAnKTtcbi8vIH0pKHdpbmRvdywgVnVlLCBhcHBWYXJpYWJsZSwgVnVlUm91dGVyKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwMi5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }
/******/ ]);