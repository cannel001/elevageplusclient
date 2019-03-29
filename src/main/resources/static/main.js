(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<app-carrousel></app-carrousel>\n\n<app-main></app-main>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'elevageplus';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrousel/carrousel.component */ "./src/app/carrousel/carrousel.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_6__["CarrouselComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carrousel/carrousel.component.html":
/*!****************************************************!*\
  !*** ./src/app/carrousel/carrousel.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Carousel Wrapper-->\n<div id=\"carousel-example-1z\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\n    <!--Indicators-->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carousel-example-1z\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carousel-example-1z\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carousel-example-1z\" data-slide-to=\"2\"></li>\n    </ol>\n    <!--/.Indicators-->\n\n    <!--Slides-->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\n      <!--First slide-->\n      <div class=\"carousel-item active\">\n        <div class=\"view\" style=\"background-image: url('https://nofanj.org/wp-content/uploads/2017/04/iStock-506342740.jpg'); background-repeat: no-repeat; background-size: cover;\">\n\n          <!-- Mask & flexbox options-->\n          <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\n\n            <!-- Content -->\n            <div class=\"text-center white-text mx-5 wow fadeIn\">\n              <h1 class=\"mb-4\">\n                <strong>Portefeuille client riche avec ELEVAGE+</strong>\n              </h1>\n\n              <p class=\"mb-4 d-none d-md-block\">\n                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and\n                  written versions\n                  available. Create your own, stunning website.</strong>\n              </p>\n\n              <a target=\"_blank\" href=\"https://play.google.com/store/apps?hl=fr\" class=\"btn btn-outline-white btn-lg\">Telecharger l'application\n                <i class=\"fas fa-mobile ml-2\"></i>\n              </a>\n            </div>\n            <!-- Content -->\n\n          </div>\n          <!-- Mask & flexbox options-->\n\n        </div>\n      </div>\n      <!--/First slide-->\n\n      <!--Second slide-->\n      <div class=\"carousel-item\">\n        <div class=\"view\" style=\"background-image: url('http://lh3.ggpht.com/JLqiQU0TRIPTYlq_ooXC78vyJhtxLi57EjpV46_zmiagfujJtMBZUNMNX-Tt_RV-gZgD=h310'); background-repeat: no-repeat; background-size: cover;\">\n\n          <!-- Mask & flexbox options-->\n          <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\n\n            <!-- Content -->\n            <div class=\"text-center white-text mx-5 wow fadeIn\">\n              <h1 class=\"mb-4\">\n                <strong>L'elevage devient facile avec ELEVAGE+</strong>\n              </h1>\n\n              <p class=\"mb-4 d-none d-md-block\">\n                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and\n                  written versions\n                  available. Create your own, stunning website.</strong>\n              </p>\n\n              <a target=\"_blank\" href=\"https://mdbootstrap.com/education/bootstrap/\" class=\"btn btn-outline-white btn-lg\">Telecharger l'application\n                <i class=\"fas fa-graduation-cap ml-2\"></i>\n              </a>\n            </div>\n            <!-- Content -->\n\n          </div>\n          <!-- Mask & flexbox options-->\n\n        </div>\n      </div>\n      <!--/Second slide-->\n\n      <!--Third slide-->\n      <div class=\"carousel-item\">\n        <div class=\"view\" style=\"background-image: url('https://images.alphacoders.com/115/115063.jpg'); background-repeat: no-repeat; background-size: cover;\">\n\n          <!-- Mask & flexbox options-->\n          <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\n\n            <!-- Content -->\n            <div class=\"text-center white-text mx-5 wow fadeIn\">\n              <h1 class=\"mb-4\">\n                <strong>Booster vos ventes avec ELEVAGE+</strong>\n              </h1>\n\n              <p class=\"mb-4 d-none d-md-block\">\n                <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and\n                  written versions\n                  available. Create your own, stunning website.</strong>\n              </p>\n\n              <a target=\"_blank\" href=\"https://mdbootstrap.com/education/bootstrap/\" class=\"btn btn-outline-white btn-lg\">Telecharger l'application\n                <i class=\"fas fa-graduation-cap ml-2\"></i>\n              </a>\n            </div>\n            <!-- Content -->\n\n          </div>\n          <!-- Mask & flexbox options-->\n\n        </div>\n      </div>\n      <!--/Third slide-->\n\n    </div>\n    <!--/.Slides-->\n\n    <!--Controls-->\n    <a class=\"carousel-control-prev\" href=\"#carousel-example-1z\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carousel-example-1z\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    <!--/.Controls-->\n\n  </div>\n  <!--/.Carousel Wrapper-->"

/***/ }),

/***/ "./src/app/carrousel/carrousel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/carrousel/carrousel.component.ts ***!
  \**************************************************/
/*! exports provided: CarrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselComponent", function() { return CarrouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarrouselComponent = /** @class */ (function () {
    function CarrouselComponent() {
    }
    CarrouselComponent.prototype.ngOnInit = function () { };
    CarrouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrousel',
            template: __webpack_require__(/*! ./carrousel.component.html */ "./src/app/carrousel/carrousel.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarrouselComponent);
    return CarrouselComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer text-center font-small mt-4 wow fadeIn\">\n\n    <hr class=\"my-4\">\n\n    <!-- Social icons -->\n    <div class=\"pb-4\">\n      <a href=\"https://www.facebook.com/ElevagePlus-2240752869576173\" target=\"_blank\">\n        <i class=\"fab fa-facebook-f mr-3\"></i>\n      </a>\n\n      <a href=\"#\" target=\"_blank\">\n        <i class=\"fab fa-twitter mr-3\"></i>\n      </a>\n\n    </div>\n    <!-- Social icons -->\n\n    <!--Copyright-->\n    <div class=\"footer-copyright py-3\">\n      © 2019 Copyright:\n      <a href=\"https://mdbootstrap.com/education/bootstrap/\" target=\"_blank\"> MDBootstrap.com </a>\n    </div>\n    <!--/.Copyright-->\n\n  </footer>\n  <!--/.Footer-->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main layout-->\n<main>\n    <div class=\"container\">\n\n        <!--Section: Not enough-->\n        <section>\n\n            <h2 class=\"my-5 h3 text-center\">Fonctionnalités</h2>\n\n            <!--First row-->\n            <div class=\"row features-small mb-5 mt-3 wow fadeIn\">\n\n                <!--First column-->\n                <div class=\"col-md-4\">\n                    <!--First row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Activités</h6>\n                            <p class=\"grey-text\">Our license is user-friendly. Feel free to use MDB for both private as\n                                well as\n                                commercial projects.\n                            </p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/First row-->\n\n                    <!--Second row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Conseils</h6>\n                            <p class=\"grey-text\">An impressive collection of flexible components allows you to develop\n                                any project.\n                            </p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/Second row-->\n\n                    <!--Third row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Clients</h6>\n                            <p class=\"grey-text\">Hundreds of useful, scalable, vector icons at your disposal.</p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/Third row-->\n\n                    <!--Fourth row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Ventes</h6>\n                            <p class=\"grey-text\">It doesn't matter whether your project will be displayed on desktop,\n                                laptop,\n                                tablet or mobile phone. MDB\n                                looks great on each screen.</p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/Fourth row-->\n                </div>\n                <!--/First column-->\n\n                <!--Second column-->\n                <div class=\"col-md-4 flex-center\">\n                    <img src=\"../../assets/img/mockup.png\"\n                        alt=\"Image non chargé\" class=\"z-depth-0 img-fluid\">\n                </div>\n                <!--/Second column-->\n\n                <!--Third column-->\n                <div class=\"col-md-4 mt-2\">\n                    <!--First row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Pertes</h6>\n                            <p class=\"grey-text\">Neat and easy to use animations, which will increase the interactivity\n                                of your\n                                project and delight your visitors.\n                            </p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/First row-->\n\n                    <!--Second row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Medicaments</h6>\n                            <p class=\"grey-text\">Need inspiration? Use one of our predefined templates for free.</p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/Second row-->\n\n                    <!--Third row-->\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <i class=\"fas fa-check-circle fa-2x indigo-text\"></i>\n                        </div>\n                        <div class=\"col-10\">\n                            <h6 class=\"feature-title\">Alimentation</h6>\n                            <p class=\"grey-text\">5 minutes, a few clicks and... done. You will be surprised at how easy\n                                it is.\n                            </p>\n                            <div style=\"height:15px\"></div>\n                        </div>\n                    </div>\n                    <!--/Third row-->\n\n                </div>\n                <!--/Third column-->\n\n            </div>\n            <!--/First row-->\n\n        </section>\n\n    </div>\n</main>\n<!--Main layout-->"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar\">\n    <div class=\"container\">\n\n        <!-- Brand -->\n        <a class=\"navbar-brand\" href=\"https://mdbootstrap.com/docs/jquery/\" target=\"_blank\">\n            <strong>Elevage Plus</strong>\n        </a>\n\n        <!-- Collapse -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Links -->\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n            <!-- Left -->\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">\n                        <span class=\"sr-only\">(current)</span>\n                    </a>\n                </li>\n            </ul>\n\n            <!-- Right -->\n            <ul class=\"navbar-nav nav-flex-icons\">\n                <li class=\"nav-item\">\n                    <a href=\"https://github.com/cannel001\"\n                        class=\"nav-link border border-light rounded\" target=\"_blank\">\n                        <i class=\"fab fa-github mr-2\"></i>GitHub\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n</nav>\n<!-- Navbar -->"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cannel/Documents/WORKSPACE JAVA/PROJETS/Elevage PLus/Web client/elevageplus/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map