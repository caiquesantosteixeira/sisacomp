webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the TurmasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TurmasProvider = /** @class */ (function () {
    function TurmasProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello TurmasProvider Provider');
    }
    TurmasProvider.prototype.getTurmas = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "turmas").timeout(8000);
        ;
    };
    TurmasProvider.prototype.getTurmasById = function (id) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "turmas/" + id).timeout(8000);
        ;
    };
    TurmasProvider.prototype.postTurma = function (turma) {
        var link = this.host.ip + this.host.caminhoClasses + "turmas";
        var data = JSON.stringify(turma);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    TurmasProvider.prototype.putTurma = function (turma) {
        var link = this.host.ip + this.host.caminhoClasses + "turmas";
        var data = JSON.stringify(turma);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    TurmasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TurmasProvider);
    return TurmasProvider;
}());

//# sourceMappingURL=turmas.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return host; });
var host = /** @class */ (function () {
    function host() {
        //ip:string = "http://191.7.141.51:8082"; 
        this.ip = "https://localhost:44301";
        this.caminhoClasses = "/api/";
        this.CaminhoImagens = "/Fotos/";
    }
    return host;
}());

//# sourceMappingURL=host.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return turma; });
var turma = /** @class */ (function () {
    function turma() {
    }
    return turma;
}());

//# sourceMappingURL=turma.js.map

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aluno; });
var aluno = /** @class */ (function () {
    function aluno() {
    }
    return aluno;
}());

//# sourceMappingURL=aluno.js.map

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlunoProvider = /** @class */ (function () {
    function AlunoProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello ReponsavelProvider Provider');
    }
    AlunoProvider.prototype.getAlunosByTurma = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Alunos/turma?idTurma=" + idTurma).timeout(8000);
        ;
    };
    AlunoProvider.prototype.getAlunosByPai = function (IdPai) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Alunos/pai?idPai=" + IdPai).timeout(8000);
        ;
    };
    AlunoProvider.prototype.postAluno = function (aluno) {
        var link = this.host.ip + this.host.caminhoClasses + "Alunos";
        var data = JSON.stringify(aluno);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    AlunoProvider.prototype.putAluno = function (aluno) {
        var link = this.host.ip + this.host.caminhoClasses + "Alunos";
        var data = JSON.stringify(aluno);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    AlunoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AlunoProvider);
    return AlunoProvider;
}());

//# sourceMappingURL=aluno.js.map

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the MateriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MateriaProvider = /** @class */ (function () {
    function MateriaProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello MateriaProvider Provider');
    }
    MateriaProvider.prototype.getMateria = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Materias/").timeout(8000);
        ;
    };
    MateriaProvider.prototype.getMateriaPorId = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Materias/" + idTurma).timeout(8000);
        ;
    };
    MateriaProvider.prototype.getMateriaPorTurma = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Materias/turma?id=" + idTurma).timeout(8000);
        ;
    };
    MateriaProvider.prototype.postMateria = function (materia) {
        var link = this.host.ip + this.host.caminhoClasses + "Materias";
        var data = JSON.stringify(materia);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    MateriaProvider.prototype.putMateria = function (materia) {
        var link = this.host.ip + this.host.caminhoClasses + "Materias";
        var data = JSON.stringify(materia);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    MateriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MateriaProvider);
    return MateriaProvider;
}());

//# sourceMappingURL=materia.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ProfessorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfessorProvider = /** @class */ (function () {
    function ProfessorProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello ReponsavelProvider Provider');
    }
    ProfessorProvider.prototype.Login = function (login, senha) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "professor/login?login=" + login + "&senha=" + senha).timeout(8000);
        ;
    };
    ProfessorProvider.prototype.getProfessor = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "professor").timeout(8000);
    };
    ProfessorProvider.prototype.getProfessorByMateria = function (idMateria) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "professor/GetProfessor?idMateria=" + idMateria).timeout(8000);
        ;
    };
    ProfessorProvider.prototype.postProfessor = function (professor) {
        var link = this.host.ip + this.host.caminhoClasses + "professor";
        var data = JSON.stringify(professor);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    ProfessorProvider.prototype.putProfessor = function (professor) {
        var link = this.host.ip + this.host.caminhoClasses + "professor";
        var data = JSON.stringify(professor);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    ProfessorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProfessorProvider);
    return ProfessorProvider;
}());

//# sourceMappingURL=professor.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.filhos = new Array();
    MyApp.professor = new Array();
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AgendaProvider = /** @class */ (function () {
    function AgendaProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello TurmasProvider Provider');
    }
    AgendaProvider.prototype.getAgenda = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "agenda").timeout(8000);
        ;
    };
    AgendaProvider.prototype.getAgendaByTurma = function (id) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "agenda/getbyturma?idAgenda=" + id).timeout(8000);
        ;
    };
    AgendaProvider.prototype.postAgenda = function (agenda) {
        var link = this.host.ip + this.host.caminhoClasses + "agenda";
        var data = JSON.stringify(agenda);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    AgendaProvider.prototype.putAgenda = function (agenda) {
        var link = this.host.ip + this.host.caminhoClasses + "agenda";
        var data = JSON.stringify(agenda);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    AgendaProvider.prototype.DeleteAgenda = function (agenda) {
        return this.http.delete(this.host.ip + this.host.caminhoClasses + "agenda/" + agenda.idAgenda).timeout(8000);
        ;
    };
    AgendaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AgendaProvider);
    return AgendaProvider;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NoticiasProvider = /** @class */ (function () {
    function NoticiasProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello TurmasProvider Provider');
    }
    NoticiasProvider.prototype.getNoticias = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "noticia").timeout(8000);
        ;
    };
    NoticiasProvider.prototype.postNoticia = function (noticia) {
        var link = this.host.ip + this.host.caminhoClasses + "noticia";
        var data = JSON.stringify(noticia);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    NoticiasProvider.prototype.putNoticia = function (noticia) {
        var link = this.host.ip + this.host.caminhoClasses + "noticia";
        var data = JSON.stringify(noticia);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    NoticiasProvider.prototype.DeleteNoticias = function (noticia) {
        return this.http.delete(this.host.ip + this.host.caminhoClasses + "noticia/" + noticia.idNoticia).timeout(8000);
    };
    NoticiasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NoticiasProvider);
    return NoticiasProvider;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the TurmasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaisProvider = /** @class */ (function () {
    function PaisProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello ReponsavelProvider Provider');
    }
    PaisProvider.prototype.Login = function (login, senha) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Responsavel/login?login=" + login + "&senha=" + senha).timeout(8000);
        ;
    };
    PaisProvider.prototype.getPaisTurma = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Responsavel/" + idTurma).timeout(8000);
        ;
    };
    PaisProvider.prototype.getPaisPorNome = function (nome) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Responsavel/nome?nome=" + nome).timeout(8000);
        ;
    };
    PaisProvider.prototype.getPaisPorCpf = function (cpf) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "Responsavel/cpf?cpf=" + cpf).timeout(8000);
        ;
    };
    PaisProvider.prototype.postPai = function (turma) {
        var link = this.host.ip + this.host.caminhoClasses + "Responsavel";
        var data = JSON.stringify(turma);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    PaisProvider.prototype.putPai = function (turma) {
        var link = this.host.ip + this.host.caminhoClasses + "Responsavel";
        var data = JSON.stringify(turma);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    PaisProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PaisProvider);
    return PaisProvider;
}());

//# sourceMappingURL=pais.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ReclamacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReclamacaoProvider = /** @class */ (function () {
    function ReclamacaoProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello TurmasProvider Provider');
    }
    ReclamacaoProvider.prototype.getReclamacao = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "reclamacao").timeout(8000);
        ;
    };
    ReclamacaoProvider.prototype.getReclamacaoByIdAluno = function (id) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "reclamacao/getbyaluno?idAluno=" + id).timeout(8000);
        ;
    };
    ReclamacaoProvider.prototype.postReclamacao = function (reclamacao) {
        var link = this.host.ip + this.host.caminhoClasses + "reclamacao";
        var data = JSON.stringify(reclamacao);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    ReclamacaoProvider.prototype.putReclamacao = function (reclamacao) {
        var link = this.host.ip + this.host.caminhoClasses + "reclamacao";
        var data = JSON.stringify(reclamacao);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    ReclamacaoProvider.prototype.DeleteReclamacao = function (reclamacao) {
        return this.http.delete(this.host.ip + this.host.caminhoClasses + "reclamacao/" + reclamacao.idReclamacao).timeout(8000);
        ;
    };
    ReclamacaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ReclamacaoProvider);
    return ReclamacaoProvider;
}());

//# sourceMappingURL=reclamacao.js.map

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agenda; });
var agenda = /** @class */ (function () {
    function agenda() {
    }
    return agenda;
}());

//# sourceMappingURL=Agenda.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return responsavel; });
var responsavel = /** @class */ (function () {
    function responsavel() {
    }
    return responsavel;
}());

//# sourceMappingURL=responsavel.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noticia; });
var noticia = /** @class */ (function () {
    function noticia() {
    }
    return noticia;
}());

//# sourceMappingURL=noticia.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return professor; });
var professor = /** @class */ (function () {
    function professor() {
    }
    return professor;
}());

//# sourceMappingURL=professor.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarReclamacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reclamacao_reclamacao__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_aluno__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastrarReclamacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarReclamacaoPage = /** @class */ (function () {
    function CadastrarReclamacaoPage(alertController, loadingCtrl, reclamacaoProvider, formBuilder, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.reclamacaoProvider = reclamacaoProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reclamacao = new __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__["a" /* reclamacao */]();
        this.errorTitulo = false;
        this.errorTexto = false;
        this.isReclamacao = new __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__["a" /* reclamacao */]();
        this.aluno = new __WEBPACK_IMPORTED_MODULE_5__Models_aluno__["a" /* aluno */]();
        this.isReclamacao = this.navParams.get("reclamacao");
        this.aluno = this.navParams.get("aluno");
        if (this.isReclamacao == undefined) {
            this.cadastroForm = formBuilder.group({
                titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                texto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(400), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            });
            this.titulo = "Cadastrar reclamação";
        }
        else {
            this.cadastroForm = formBuilder.group({
                titulo: [this.isReclamacao.titulo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                texto: [this.isReclamacao.texto, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(400), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            });
            this.titulo = "Editar reclamação";
        }
    }
    CadastrarReclamacaoPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, titulo = _a.titulo, texto = _a.texto;
        if (!this.cadastroForm.valid) {
            if (!titulo.valid) {
                this.errorTitulo = true;
                this.messageTitulo = "Ops! titulo inválido";
            }
            else {
                this.messageTitulo = "";
            }
            if (!texto.valid) {
                this.errorTexto = true;
                this.messageTexto = "Ops! texto inválido";
            }
            else {
                this.messageTexto = "";
            }
        }
        else {
            this.reclamacao.titulo = titulo.value;
            this.reclamacao.texto = texto.value;
            this.reclamacao.idAluno = this.aluno.idAluno;
            this.Abrecarregamento("carreganddo");
            if (this.isReclamacao == undefined) {
                this.reclamacaoProvider.postReclamacao(this.reclamacao).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.reclamacao.idReclamacao = this.isReclamacao.idReclamacao;
                this.reclamacaoProvider.putReclamacao(this.reclamacao).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastrarReclamacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPaiPage');
    };
    CadastrarReclamacaoPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastrarReclamacaoPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastrarReclamacaoPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarReclamacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-reclamacao',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-reclamacao\cadastrar-reclamacao.html"*/'<!--\n  Generated template for the CadastrarReclamacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cadastrar Reclamacao</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n        <ion-item>\n          <ion-input ([ngModel])="titulo"\n                       formControlName="titulo"\n                       type="text"\n                       placeholder="titulo"\n                       maxlength="70"\n                       clearInput clearOnEdit="false">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorTitulo" class="error"> {{messageTitulo}}</h6>\n\n        <ion-item>\n            <textarea  ([ngModel])="texto"\n                       formControlName="texto"\n                       type="text"\n                       placeholder="digite o texto aqui"\n                       clearInput clearOnEdit="false"\n                       rows="5" \n                       maxLength="400"\n                       id="myInput">\n            </textarea>\n        </ion-item>\n\n       \n        <h6 *ngIf="errorTexto" class="error"> {{messageTexto}}</h6>\n\n        <button ion-button full color="secondary" *ngIf="isReclamacao== undefined" class="login-button">{{titulo}}}</button>\n        <button ion-button full color="secondary" *ngIf="isReclamacao != undefined">{{titulo}}</button>\n    \n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-reclamacao\cadastrar-reclamacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_reclamacao_reclamacao__["a" /* ReclamacaoProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastrarReclamacaoPage);
    return CadastrarReclamacaoPage;
}());

//# sourceMappingURL=cadastrar-reclamacao.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reclamacao; });
var reclamacao = /** @class */ (function () {
    function reclamacao() {
    }
    return reclamacao;
}());

//# sourceMappingURL=reclamacao.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_turmas_cadastrar_turmas__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmasPage = /** @class */ (function () {
    function TurmasPage(alertController, loadingCtrl, turmasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.turmasProvider = turmasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.turmas = new Array();
    }
    TurmasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad TurmasPage');
        this.Abrecarregamento("carreagando");
        this.turmasProvider.getTurmas().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.turmas = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    TurmasPage.prototype.ativar = function (turma) {
        var _this = this;
        if (turma.ativo == 0) {
            turma.ativo = 1;
        }
        else {
            turma.ativo = 0;
        }
        this.Abrecarregamento("carreganddo");
        this.turmasProvider.putTurma(turma).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            //const objeto_retorno = JSON.parse(response._body);
            if (response.status == 204) {
                _this.exibirMensagem("Operação realizado com sucesso!");
                //this.navCtrl.setRoot(TurmasPage);
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            if (turma.ativo == 1) {
                turma.ativo = 0;
            }
            else {
                turma.ativo = 1;
            }
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    TurmasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    TurmasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    TurmasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    TurmasPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_turmas_cadastrar_turmas__["a" /* CadastrarTurmasPage */]);
    };
    TurmasPage.prototype.goEditar = function (turma) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_turmas_cadastrar_turmas__["a" /* CadastrarTurmasPage */], { turma: turma });
    };
    TurmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-turmas',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turmas\turmas.html"*/'<!--\n  Generated template for the TurmasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>turmas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    \n        <ion-item *ngFor="let item of turmas">\n          <ion-card padding>\n          <h2>Série: {{item.serie}}ª - {{item.letra}} </h2>\n        \n          <p  [hidden]="item.tipoSerie != 0">Pré-escolar</p>\n          <p  [hidden]="item.tipoSerie != 1">Ensino Fundamental</p>\n          <p  [hidden]="item.tipoSerie != 2">Ensino Médio</p>\n\n          <p  [hidden]="item.turno != 1">Turno: Matutino</p>\n          <p  [hidden]="item.turno != 2">Turno: Vespertino</p>\n          <p  [hidden]="item.turno != 2">Turno: Noturno</p>\n\n\n\n          <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar</button>\n          \n          <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n          <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>    \n\n          </ion-card>\n        </ion-item>\n     \n  \n    <ion-fab bottom right>\n        \n      <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n    \n      </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turmas\turmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], TurmasPage);
    return TurmasPage;
}());

//# sourceMappingURL=turmas.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alunos_alunos__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastrar_pai_cadastrar_pai__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pais_pais__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_turma__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaisPage = /** @class */ (function () {
    function PaisPage(alertController, loadingCtrl, PaisProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.PaisProvider = PaisProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.turma = new __WEBPACK_IMPORTED_MODULE_5__Models_turma__["a" /* turma */]();
        this.pais = new Array();
    }
    PaisPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.PaisProvider.getPaisTurma(0).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.pais = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    PaisPage.prototype.Pesquisar = function () {
        var _this = this;
        this.PaisProvider.getPaisPorNome(this.NomePesquisa).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.pais = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    PaisPage.prototype.PesquisarPorCpf = function () {
        var _this = this;
        this.PaisProvider.getPaisPorCpf(this.CpfPesquisa).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.pais = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    PaisPage.prototype.ativar = function (pai) {
        var _this = this;
        if (pai.ativo == 0) {
            pai.ativo = 1;
        }
        else {
            pai.ativo = 0;
        }
        this.Abrecarregamento("carreganddo");
        this.PaisProvider.putPai(pai).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            //const objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.exibirMensagem("Operação realizado com sucesso!");
                //this.navCtrl.setRoot(TurmasPage);
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            if (pai.ativo == 1) {
                pai.ativo = 0;
            }
            else {
                pai.ativo = 1;
            }
            _this.FechaCarregamento();
            console.log(error);
        });
    };
    PaisPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastrar_pai_cadastrar_pai__["a" /* CadastrarPaiPage */]);
    };
    PaisPage.prototype.goEditar = function (pai) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastrar_pai_cadastrar_pai__["a" /* CadastrarPaiPage */], { pai: pai });
    };
    PaisPage.prototype.goAlunos = function (pai) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__alunos_alunos__["a" /* AlunosPage */], { pai: pai });
    };
    PaisPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    PaisPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    PaisPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    PaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-pais',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\pais\pais.html"*/'<!--\n  Generated template for the PaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>pais/alunos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button full color="secondary" class="login-button" (click)="ionViewDidLoad()">Últimos 20 listados</button>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input [(ngModel)]="NomePesquisa"\n                    \n                    type="text"\n                    placeholder="Digite o nome a ser pesquisado"\n                    maxlength="70"\n                    clearInput clearOnEdit="false">\n        </ion-input>\n      </ion-item>\n      <br>\n      <button ion-button full color="secondary" class="login-button" (click)="Pesquisar()">Pesquisar por nome</button>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input [(ngModel)]="CpfPesquisa"\n                    type="text"\n                    placeholder="Digite o cpf a ser pesquisado"\n                    maxlength="70"\n                    clearInput clearOnEdit="false"\n                    [brmasker]="{mask:\'000.000.000-00\', len:14}">\n        </ion-input>\n      </ion-item>\n      <br>\n      <button ion-button full color="secondary" class="login-button" (click)="PesquisarPorCpf()">Pesquisar por CPF</button>\n\n \n\n    <ion-item *ngFor="let item of pais">\n        <ion-card padding>\n          <h2>Responsável: {{item.nome}} </h2>\n        \n          <p> CPF: {{item.cpf}} </p>\n          <p> Endereço: {{item.endereco}} </p>\n          <p> Telefone: {{item.telefone}} </p>\n\n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Responsável</button>\n          </ion-row>\n          <ion-row>\n            <button ion-button clear  (click)="goAlunos(item)" color="secondary">Ver filhos</button>\n          </ion-row>\n\n          <ion-row>\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>   \n          </ion-row> \n\n         \n\n        </ion-card>\n      </ion-item>\n   \n\n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\pais\pais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_pais_pais__["a" /* PaisProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], PaisPage);
    return PaisPage;
}());

//# sourceMappingURL=pais.js.map

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabResponsavelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filhos_filhos__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exibicao_noticias_exibicao_noticias__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabResponsavelPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabResponsavelPage = /** @class */ (function () {
    function TabResponsavelPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.notasRoot = __WEBPACK_IMPORTED_MODULE_0__filhos_filhos__["a" /* FilhosPage */];
        this.exibicaoNoticiasRoot = __WEBPACK_IMPORTED_MODULE_3__exibicao_noticias_exibicao_noticias__["a" /* ExibicaoNoticiasPage */];
    }
    TabResponsavelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-tab-responsavel',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tab-responsavel\tab-responsavel.html"*/'<ion-tabs>\n    <ion-tab [root]="notasRoot" tabTitle="Filhos" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="exibicaoNoticiasRoot" tabTitle="Notícias" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tab-responsavel\tab-responsavel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], TabResponsavelPage);
    return TabResponsavelPage;
}());

//# sourceMappingURL=tab-responsavel.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turma_alunos_turma_alunos__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabProfessorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabProfessorPage = /** @class */ (function () {
    function TabProfessorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.notasRoot = __WEBPACK_IMPORTED_MODULE_0__turma_alunos_turma_alunos__["a" /* TurmaAlunosPage */];
    }
    TabProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-tab-professor',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tab-professor\tab-professor.html"*/'<ion-tabs>\n    <ion-tab [root]="notasRoot" tabTitle="Notas" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tab-professor\tab-professor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], TabProfessorPage);
    return TabProfessorPage;
}());

//# sourceMappingURL=tab-professor.js.map

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarNotaPageModule", function() { return CadastrarNotaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_nota__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarNotaPageModule = /** @class */ (function () {
    function CadastrarNotaPageModule() {
    }
    CadastrarNotaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_nota__["a" /* CadastrarNotaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_nota__["a" /* CadastrarNotaPage */]),
            ],
        })
    ], CadastrarNotaPageModule);
    return CadastrarNotaPageModule;
}());

//# sourceMappingURL=cadastrar-nota.module.js.map

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda.module": [
		183
	],
	"../pages/alunos-reclamacao/alunos-reclamacao.module": [
		258
	],
	"../pages/alunos/alunos.module": [
		187
	],
	"../pages/cadastar-aluno/cadastar-aluno.module": [
		190
	],
	"../pages/cadastar-materia/cadastar-materia.module": [
		193
	],
	"../pages/cadastrar-agenda/cadastrar-agenda.module": [
		197
	],
	"../pages/cadastrar-nota/cadastrar-nota.module": [
		141
	],
	"../pages/cadastrar-noticia/cadastrar-noticia.module": [
		198
	],
	"../pages/cadastrar-pai/cadastrar-pai.module": [
		200
	],
	"../pages/cadastrar-professor/cadastrar-professor.module": [
		202
	],
	"../pages/cadastrar-reclamacao/cadastrar-reclamacao.module": [
		204
	],
	"../pages/cadastrar-turmas/cadastrar-turmas.module": [
		205
	],
	"../pages/cadastros/cadastros.module": [
		207
	],
	"../pages/exibicao-agendas/exibicao-agendas.module": [
		214
	],
	"../pages/exibicao-alunos-turma/exibicao-alunos-turma.module": [
		216
	],
	"../pages/exibicao-materias/exibicao-materias.module": [
		220
	],
	"../pages/exibicao-noticias/exibicao-noticias.module": [
		224
	],
	"../pages/exibicao-reclamacoes/exibicao-reclamacoes.module": [
		222
	],
	"../pages/filhos/filhos.module": [
		226
	],
	"../pages/login-admin/login-admin.module": [
		244
	],
	"../pages/login-professor/login-professor.module": [
		245
	],
	"../pages/login-responsavel/login-responsavel.module": [
		246
	],
	"../pages/materias/materias.module": [
		247
	],
	"../pages/notas/notas.module": [
		248
	],
	"../pages/noticias/noticias.module": [
		249
	],
	"../pages/pais/pais.module": [
		250
	],
	"../pages/professores/professores.module": [
		251
	],
	"../pages/provas/provas.module": [
		252
	],
	"../pages/reclamacoes/reclamacoes.module": [
		253
	],
	"../pages/tab-professor/tab-professor.module": [
		400,
		1
	],
	"../pages/tab-responsavel/tab-responsavel.module": [
		401,
		0
	],
	"../pages/turma-agenda/turma-agenda.module": [
		255
	],
	"../pages/turma-alunos/turma-alunos.module": [
		254
	],
	"../pages/turma-materia/turma-materia.module": [
		256
	],
	"../pages/turma-noticia/turma-noticia.module": [
		257
	],
	"../pages/turma-pais/turma-pais.module": [
		259
	],
	"../pages/turma-reclamacao/turma-reclamacao.module": [
		260
	],
	"../pages/turmas/turmas.module": [
		261
	],
	"../pages/vincular-professor/vincular-professor.module": [
		262
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agenda__["a" /* AgendaPage */]),
            ],
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());

//# sourceMappingURL=agenda.module.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_agenda_cadastrar_agenda__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_agenda_agenda__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_Agenda__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_turma__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = /** @class */ (function () {
    function AgendaPage(alertController, loadingCtrl, agendaProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.agendaProvider = agendaProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendas = new Array();
        this.agenda = new __WEBPACK_IMPORTED_MODULE_2__Models_Agenda__["a" /* agenda */]();
        this.turma = new __WEBPACK_IMPORTED_MODULE_5__Models_turma__["a" /* turma */]();
        this.turma = this.navParams.get("turma");
    }
    AgendaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.agendaProvider.getAgendaByTurma(this.turma.idTurma).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.agendas = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    AgendaPage.prototype.remover = function (agendas) {
    };
    AgendaPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_agenda_cadastrar_agenda__["a" /* CadastrarAgendaPage */], { turma: this.turma });
    };
    AgendaPage.prototype.goEditar = function (agenda) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_agenda_cadastrar_agenda__["a" /* CadastrarAgendaPage */], { turma: this.turma, agenda: agenda });
    };
    AgendaPage.prototype.delete = function (agenda) {
        var _this = this;
        this.Abrecarregamento("carreganddo");
        this.agendaProvider.DeleteAgenda(agenda).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.exibirMensagem("Delete realizado com sucesso!");
                _this.agendas = _this.agendas.filter(function (a) { return a.idAgenda != agenda.idAgenda; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
            console.log(error);
        });
    };
    AgendaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    AgendaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    AgendaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\agenda\agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Agendas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of agendas">\n        <ion-card padding>\n          <h2>{{item.titulo}} </h2>\n        \n          <p> {{item.texto}} </p>\n         \n  \n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Agenda</button>\n          </ion-row>\n  \n          <ion-row>\n            <button ion-button clear  (click)="delete(item)" color="secondary" >Remover Agenda</button>  \n          </ion-row> \n  \n         \n  \n        </ion-card>\n      </ion-item>\n   \n  \n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_agenda_agenda__["a" /* AgendaProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarAgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_agenda_agenda__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_Agenda__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_turma__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastrarAgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarAgendaPage = /** @class */ (function () {
    function CadastrarAgendaPage(alertController, loadingCtrl, agendaProvider, formBuilder, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.agendaProvider = agendaProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agenda = new __WEBPACK_IMPORTED_MODULE_4__Models_Agenda__["a" /* agenda */]();
        this.errorTitulo = false;
        this.errorTexto = false;
        this.isAgenda = new __WEBPACK_IMPORTED_MODULE_4__Models_Agenda__["a" /* agenda */]();
        this.turma = new __WEBPACK_IMPORTED_MODULE_5__Models_turma__["a" /* turma */]();
        this.isAgenda = this.navParams.get("agenda");
        this.turma = this.navParams.get("turma");
        if (this.isAgenda == undefined) {
            this.cadastroForm = formBuilder.group({
                titulo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                texto: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(400), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            });
            this.titulo = "Cadastrar Agenda";
        }
        else {
            this.cadastroForm = formBuilder.group({
                titulo: [this.isAgenda.titulo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                texto: [this.isAgenda.texto, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(400), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            });
            this.titulo = "Editar Agenda";
        }
    }
    CadastrarAgendaPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, titulo = _a.titulo, texto = _a.texto;
        if (!this.cadastroForm.valid) {
            if (!titulo.valid) {
                this.errorTitulo = true;
                this.messageTitulo = "Ops! titulo inválido";
            }
            else {
                this.messageTitulo = "";
            }
            if (!texto.valid) {
                this.errorTexto = true;
                this.messageTexto = "Ops! texto inválido";
            }
            else {
                this.messageTexto = "";
            }
        }
        else {
            this.agenda.titulo = titulo.value;
            this.agenda.texto = texto.value;
            this.agenda.idTurma = this.turma.idTurma;
            this.Abrecarregamento("carreganddo");
            if (this.isAgenda == undefined) {
                this.agendaProvider.postAgenda(this.agenda).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.agenda.idAgenda = this.isAgenda.idAgenda;
                this.agendaProvider.putAgenda(this.agenda).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastrarAgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPaiPage');
    };
    CadastrarAgendaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastrarAgendaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastrarAgendaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarAgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-agenda',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-agenda\cadastrar-agenda.html"*/'<!--\n  Generated template for the CadastrarAgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cadastrar agenda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n        <ion-item>\n          <ion-input ([ngModel])="titulo"\n                       formControlName="titulo"\n                       type="text"\n                       placeholder="titulo"\n                       maxlength="70"\n                       clearInput clearOnEdit="false">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorTitulo" class="error"> {{messageTitulo}}</h6>\n\n        <ion-item>\n            <textarea  ([ngModel])="texto"\n                       formControlName="texto"\n                       type="text"\n                       placeholder="digite o texto aqui"\n                       clearInput clearOnEdit="false"\n                       rows="5" \n                       maxLength="400"\n                       id="myInput">\n            </textarea>\n        </ion-item>\n\n       \n        <h6 *ngIf="errorTexto" class="error"> {{messageTexto}}</h6>\n\n        <button ion-button full color="secondary" *ngIf="isReclamacao== undefined" class="login-button">{{titulo}}}</button>\n        <button ion-button full color="secondary" *ngIf="isReclamacao != undefined">{{titulo}}</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-agenda\cadastrar-agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_agenda_agenda__["a" /* AgendaProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CadastrarAgendaPage);
    return CadastrarAgendaPage;
}());

//# sourceMappingURL=cadastrar-agenda.js.map

/***/ }),
/* 186 */,
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosPageModule", function() { return AlunosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlunosPageModule = /** @class */ (function () {
    function AlunosPageModule() {
    }
    AlunosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alunos__["a" /* AlunosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alunos__["a" /* AlunosPage */]),
            ],
        })
    ], AlunosPageModule);
    return AlunosPageModule;
}());

//# sourceMappingURL=alunos.module.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastar_aluno_cadastar_aluno__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_aluno_aluno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_responsavel__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlunosPage = /** @class */ (function () {
    function AlunosPage(turmasProvider, alertController, loadingCtrl, AlunoProvider, navCtrl, navParams) {
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.AlunoProvider = AlunoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pai = new __WEBPACK_IMPORTED_MODULE_5__Models_responsavel__["a" /* responsavel */]();
        this.alunos = new Array();
        this.pai = this.navParams.get("pai");
    }
    AlunosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.AlunoProvider.getAlunosByPai(this.pai.idResponsavel).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.alunos = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    AlunosPage.prototype.ativar = function (aluno) {
        var _this = this;
        if (aluno.ativo == 0) {
            aluno.ativo = 1;
        }
        else {
            aluno.ativo = 0;
        }
        this.Abrecarregamento("carreganddo");
        this.AlunoProvider.putAluno(aluno).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            //const objeto_retorno = JSON.parse(response._body);
            if (response.status == 204) {
                _this.exibirMensagem("Operação realizado com sucesso!");
                //this.navCtrl.setRoot(TurmasPage);
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            if (aluno.ativo == 1) {
                aluno.ativo = 0;
            }
            else {
                aluno.ativo = 1;
            }
            _this.FechaCarregamento();
            console.log(error);
        });
    };
    AlunosPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastar_aluno_cadastar_aluno__["a" /* CadastarAlunoPage */], { pai: this.pai });
    };
    AlunosPage.prototype.goEditar = function (aluno) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastar_aluno_cadastar_aluno__["a" /* CadastarAlunoPage */], { aluno: aluno, pai: this.pai });
    };
    AlunosPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    AlunosPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    AlunosPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AlunosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-alunos',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\alunos\alunos.html"*/'<!--\n  Generated template for the AlunosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>alunos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of alunos">\n        <ion-card padding>\n          <h2>Aluno: {{item.nome}} </h2>\n        \n          <p> CPF: {{item.cpf}} </p>\n          <p> Telefone: {{item.telefone}} </p>\n\n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Aluno</button>\n          </ion-row>\n         \n\n          <ion-row>\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>   \n          </ion-row> \n\n         \n\n        </ion-card>\n      </ion-item>\n   \n\n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\alunos\alunos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_aluno_aluno__["a" /* AlunoProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], AlunosPage);
    return AlunosPage;
}());

//# sourceMappingURL=alunos.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastarAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_aluno_aluno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_aluno__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_responsavel__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the CadastarAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastarAlunoPage = /** @class */ (function () {
    function CadastarAlunoPage(turmasProvider, alertController, loadingCtrl, alunosProvider, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.alunosProvider = alunosProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aluno = new __WEBPACK_IMPORTED_MODULE_5__Models_aluno__["a" /* aluno */]();
        this.errorNome = false;
        this.errorCpf = false;
        this.errorTelefone = false;
        this.errorTurma = false;
        this.pai = new __WEBPACK_IMPORTED_MODULE_6__Models_responsavel__["a" /* responsavel */]();
        this.isAluno = new __WEBPACK_IMPORTED_MODULE_5__Models_aluno__["a" /* aluno */]();
        this.turmas = new Array();
        this.pai = this.navParams.get("pai");
        this.isAluno = this.navParams.get("aluno");
        this.cadastroForm = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            cpf: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            idTurma: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
        this.Abrecarregamento("carregando...");
        this.turmasProvider.getTurmas().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno, x;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.turmas = objeto_retorno;
                    for (x = 0; x < this.turmas.length; x++) {
                        if (this.turmas[x].turno == 0) {
                            this.turmas[x].turnoTexto = "manhã";
                        }
                        else if (this.turmas[x].turno == 1) {
                            this.turmas[x].turnoTexto = "Tarde";
                        }
                        else if (this.turmas[x].turno == 2) {
                            this.turmas[x].turnoTexto = "Noite";
                        }
                        if (this.turmas[x].tipoSerie == 0) {
                            this.turmas[x].tipoSerieTexto = "Pré-esc.";
                        }
                        else if (this.turmas[x].tipoSerie == 1) {
                            this.turmas[x].tipoSerieTexto = "Fundamental";
                        }
                        else if (this.turmas[x].tipoSerie == 2) {
                            this.turmas[x].tipoSerieTexto = "Médio";
                        }
                    }
                    if (this.isAluno == undefined) {
                        this.cadastroForm = this.formBuilder.group({
                            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            cpf: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            telefone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            idTurma: [this.turmas[0].idTurma, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
                        });
                        this.titulo = "Cadastrar Aluno";
                    }
                    else {
                        this.cadastroForm = this.formBuilder.group({
                            nome: [this.isAluno.nome, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            cpf: [this.isAluno.cpf, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            telefone: [this.isAluno.telefone, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            idTurma: [this.isAluno.idTurma, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
                        });
                        this.titulo = "Editar Aluno";
                    }
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    }
    CadastarAlunoPage.prototype.getTurmas = function () {
    };
    CadastarAlunoPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, nome = _a.nome, cpf = _a.cpf, telefone = _a.telefone, idTurma = _a.idTurma;
        if (!this.cadastroForm.valid) {
            if (!nome.valid) {
                this.errorNome = true;
                this.messageNome = "Ops! Nome inválido";
            }
            else {
                this.messageNome = "";
            }
            if (!cpf.valid) {
                this.errorCpf = true;
                this.messageCpf = "Ops! Tamanho do CPF inválido";
            }
            else {
                this.messageCpf = "";
            }
            if (!telefone.valid) {
                this.errorTelefone = true;
                this.messageTelefone = "Ops! Telefone inváldo";
            }
            else {
                this.messageTelefone = "";
            }
            if (idTurma.valid) {
                this.errorTurma = true;
                this.messageTurma = "Ops! Turma inválida";
            }
            else {
                this.messageTurma = "";
            }
        }
        else {
            this.aluno.nome = nome.value;
            this.aluno.cpf = cpf.value;
            this.aluno.telefone = telefone.value;
            this.aluno.idTurma = idTurma.value;
            this.aluno.idResponsavel = this.pai.idResponsavel;
            this.Abrecarregamento("carreganddo");
            if (this.isAluno == undefined) {
                this.alunosProvider.postAluno(this.aluno).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 200) {
                        if (objeto_retorno.situacao == "Cpf repetido") {
                            _this.exibirMensagem("Cpf já existe em outro usuário!");
                            return;
                        }
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.aluno.idResponsavel = this.isAluno.idResponsavel;
                this.aluno.idAluno = this.isAluno.idAluno;
                this.alunosProvider.putAluno(this.aluno).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastarAlunoPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastarAlunoPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastarAlunoPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastarAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-cadastar-aluno',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastar-aluno\cadastar-aluno.html"*/'<!--\n  Generated template for the CadastarAlunoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cadastarAluno</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n       <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input ([ngModel])="nome"\n                     formControlName="nome"\n                     type="text"\n                     placeholder="Nome"\n                     maxlength="70"\n                     clearInput clearOnEdit="false">\n        </ion-input>\n      </ion-item>\n\n      <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n\n       <ion-item>\n          <ion-label stacked>CPF</ion-label>\n          <ion-input ([ngModel])="cpf"\n                      formControlName="cpf"\n                      type="text"\n                      placeholder="Cpf"\n                      clearInput clearOnEdit="false"\n                      [brmasker]="{mask:\'000.000.000-00\', len:14}"\n                      clearInput clearOnEdit="false">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorCpf" class="error"> {{messageCpf}}</h6>\n\n        <ion-item>\n            <ion-label stacked>Telefone</ion-label>\n            <ion-input ([ngModel])="telefone"\n                          formControlName="telefone"\n                          type="text"\n                          placeholder="Telefone"\n                          maxlength="120"\n                          clearInput clearOnEdit="false"\n                          [brmasker]="{mask:\'00 00000-0000\', len:13}">\n            </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorCpf" class="error"> {{messageTelefone}}</h6>\n        <ion-item>\n            <ion-label>Turma</ion-label>\n            <ion-select ([ngModel])="idTurma " formControlName="idTurma" clearInput clearOnEdit="false" interface="action-sheet" >\n              \n              <ion-option *ngFor="let m of turmas; let i = index" value="{{m.idTurma.toString()}}" >{{m.serie}} - {{m.letra}} {{m.turnoTexto}} - {{m.tipoSerieTexto}} </ion-option>\n            </ion-select>\n        </ion-item> \n    \n        \n        <h6 *ngIf="errorSenha" class="error"> {{messageTurma}}</h6>\n\n\n        <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}</button>\n        <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}}</button>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastar-aluno\cadastar-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_aluno_aluno__["a" /* AlunoProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], CadastarAlunoPage);
    return CadastarAlunoPage;
}());

//# sourceMappingURL=cadastar-aluno.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastarAlunoPageModule", function() { return CadastarAlunoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastar_aluno__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastarAlunoPageModule = /** @class */ (function () {
    function CadastarAlunoPageModule() {
    }
    CadastarAlunoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastar_aluno__["a" /* CadastarAlunoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastar_aluno__["a" /* CadastarAlunoPage */]),
            ],
        })
    ], CadastarAlunoPageModule);
    return CadastarAlunoPageModule;
}());

//# sourceMappingURL=cadastar-aluno.module.js.map

/***/ }),
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastarMateriaPageModule", function() { return CadastarMateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastar_materia__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastarMateriaPageModule = /** @class */ (function () {
    function CadastarMateriaPageModule() {
    }
    CadastarMateriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastar_materia__["a" /* CadastarMateriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastar_materia__["a" /* CadastarMateriaPage */]),
            ],
        })
    ], CadastarMateriaPageModule);
    return CadastarMateriaPageModule;
}());

//# sourceMappingURL=cadastar-materia.module.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastarMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_materia_turma_materia_turma__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_materia_materia__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_turma__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Models_materia__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Models_materiaTurma__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the CadastarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastarMateriaPage = /** @class */ (function () {
    function CadastarMateriaPage(materiaTurmaProvider, MateriaProvider, turmasProvider, alertController, loadingCtrl, materiaProvider, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.materiaTurmaProvider = materiaTurmaProvider;
        this.MateriaProvider = MateriaProvider;
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.materiaProvider = materiaProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materiaTurma = new __WEBPACK_IMPORTED_MODULE_8__Models_materiaTurma__["a" /* materiaTurma */]();
        this.errorNome = false;
        this.isMateria = new __WEBPACK_IMPORTED_MODULE_7__Models_materia__["a" /* materia */]();
        this.materias = new Array();
        this.turma = new __WEBPACK_IMPORTED_MODULE_2__Models_turma__["a" /* turma */]();
        this.isMateria = this.navParams.get("materia");
        this.turma = this.navParams.get("turma");
        this.cadastroForm = this.formBuilder.group({
            idMateria: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])]
        });
        this.Abrecarregamento("carregando turmas...");
        this.MateriaProvider.getMateria().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.materias = objeto_retorno;
                    if (this.isMateria == undefined) {
                        this.cadastroForm = this.formBuilder.group({
                            idMateria: [this.materias[0].idMateria, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])]
                        });
                        this.titulo = "Cadastrar Matéria";
                    }
                    else {
                        this.cadastroForm = this.formBuilder.group({
                            idMateria: [this.isMateria.idMateria, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])]
                        });
                        this.titulo = "Editar Matéria";
                    }
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    }
    CadastarMateriaPage.prototype.getTurmas = function () {
    };
    CadastarMateriaPage.prototype.cadastrar = function () {
        var _this = this;
        var idMateria = this.cadastroForm.controls.idMateria;
        if (!this.cadastroForm.valid) {
            if (!idMateria.valid) {
                this.errorNome = true;
                this.messageNome = "Ops! Nome inválido";
            }
            else {
                this.messageNome = "";
            }
        }
        else {
            this.materiaTurma.idMateria = idMateria.value;
            this.materiaTurma.idTurma = this.turma.idTurma;
            this.Abrecarregamento("carreganddo");
            if (this.isMateria == undefined) {
                this.materiaTurma.ativo = 1;
                this.materiaTurmaProvider.postMateriaTurma(this.materiaTurma).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        if (objeto_retorno.situacao == "Cpf repetido") {
                            _this.exibirMensagem("Cpf já existe em outro usuário!");
                            return;
                        }
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.materiaTurma.id = this.isMateria.idMateriaTurma;
                this.materiaTurmaProvider.putMateriaTurma(this.materiaTurma).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastarMateriaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastarMateriaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastarMateriaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastarMateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-cadastar-materia',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastar-materia\cadastar-materia.html"*/'<!--\n  Generated template for the CadastarAlunoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n        <ion-item>\n            <ion-label>Matéria</ion-label>\n            <ion-select ([ngModel])="idMateria" formControlName="idMateria" clearInput clearOnEdit="false" interface="action-sheet" >\n              \n              <ion-option *ngFor="let m of materias; let i = index" value="{{m.idMateria.toString()}}" >{{m.nome}}</ion-option>\n            </ion-select>\n        </ion-item> \n\n      <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n\n        <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}</button>\n        <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}}</button>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastar-materia\cadastar-materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_materia_turma_materia_turma__["a" /* MateriaTurmaProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
    ], CadastarMateriaPage);
    return CadastarMateriaPage;
}());

//# sourceMappingURL=cadastar-materia.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaTurmaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the MateriaTurmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MateriaTurmaProvider = /** @class */ (function () {
    function MateriaTurmaProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello MateriaProvider Provider');
    }
    MateriaTurmaProvider.prototype.getMateriaTurma = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "MateriaTurma/").timeout(8000);
        ;
    };
    MateriaTurmaProvider.prototype.getMateriaTurmaPorId = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "MateriaTurma/" + idTurma).timeout(8000);
        ;
    };
    MateriaTurmaProvider.prototype.getMateriaTurmaPorTurma = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "MateriaTurma/turma?id=" + idTurma).timeout(8000);
        ;
    };
    MateriaTurmaProvider.prototype.postMateriaTurma = function (materia) {
        var link = this.host.ip + this.host.caminhoClasses + "MateriaTurma";
        var data = JSON.stringify(materia);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    MateriaTurmaProvider.prototype.putMateriaTurma = function (materia) {
        var link = this.host.ip + this.host.caminhoClasses + "MateriaTurma";
        var data = JSON.stringify(materia);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    MateriaTurmaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MateriaTurmaProvider);
    return MateriaTurmaProvider;
}());

//# sourceMappingURL=materia-turma.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return materia; });
var materia = /** @class */ (function () {
    function materia() {
    }
    return materia;
}());

//# sourceMappingURL=materia.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarAgendaPageModule", function() { return CadastrarAgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_agenda__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarAgendaPageModule = /** @class */ (function () {
    function CadastrarAgendaPageModule() {
    }
    CadastrarAgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_agenda__["a" /* CadastrarAgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_agenda__["a" /* CadastrarAgendaPage */]),
            ],
        })
    ], CadastrarAgendaPageModule);
    return CadastrarAgendaPageModule;
}());

//# sourceMappingURL=cadastrar-agenda.module.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarNoticiaPageModule", function() { return CadastrarNoticiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_noticia__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarNoticiaPageModule = /** @class */ (function () {
    function CadastrarNoticiaPageModule() {
    }
    CadastrarNoticiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_noticia__["a" /* CadastrarNoticiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_noticia__["a" /* CadastrarNoticiaPage */]),
            ],
        })
    ], CadastrarNoticiaPageModule);
    return CadastrarNoticiaPageModule;
}());

//# sourceMappingURL=cadastrar-noticia.module.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_noticias_noticias__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_noticia__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastrarNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarNoticiaPage = /** @class */ (function () {
    function CadastrarNoticiaPage(alertController, loadingCtrl, noticiasProvider, formBuilder, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.noticiasProvider = noticiasProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticia = new __WEBPACK_IMPORTED_MODULE_4__Models_noticia__["a" /* noticia */]();
        this.errorTitulo = false;
        this.errorTexto = false;
        this.isNoticia = new __WEBPACK_IMPORTED_MODULE_4__Models_noticia__["a" /* noticia */]();
        this.isNoticia = this.navParams.get("noticia");
        if (this.isNoticia == undefined) {
            this.cadastroForm = formBuilder.group({
                titulo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                texto: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(400), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            });
            this.titulo = "Cadastrar Notícia";
        }
        else {
            this.cadastroForm = formBuilder.group({
                titulo: [this.isNoticia.titulo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                texto: [this.isNoticia.texto, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(400), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            });
            this.titulo = "Editar Notícia";
        }
    }
    CadastrarNoticiaPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, titulo = _a.titulo, texto = _a.texto;
        if (!this.cadastroForm.valid) {
            if (!titulo.valid) {
                this.errorTitulo = true;
                this.messageTitulo = "Ops! titulo inválido";
            }
            else {
                this.messageTitulo = "";
            }
            if (!texto.valid) {
                this.errorTexto = true;
                this.messageTexto = "Ops! texto inválido";
            }
            else {
                this.messageTexto = "";
            }
        }
        else {
            this.noticia.titulo = titulo.value;
            this.noticia.texto = texto.value;
            this.Abrecarregamento("carreganddo");
            if (this.isNoticia == undefined) {
                this.noticiasProvider.postNoticia(this.noticia).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.noticia.idNoticia = this.isNoticia.idNoticia;
                this.noticiasProvider.putNoticia(this.noticia).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastrarNoticiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPaiPage');
    };
    CadastrarNoticiaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastrarNoticiaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastrarNoticiaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarNoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-noticia',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-noticia\cadastrar-noticia.html"*/'<!--\n  Generated template for the CadastrarNoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastrar Notícia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n        <ion-item>\n          <ion-input ([ngModel])="titulo"\n                       formControlName="titulo"\n                       type="text"\n                       placeholder="titulo"\n                       maxlength="70"\n                       clearInput clearOnEdit="false">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorTitulo" class="error"> {{messageTitulo}}</h6>\n\n        <ion-item>\n            <textarea  ([ngModel])="texto"\n                       formControlName="texto"\n                       type="text"\n                       placeholder="digite o texto aqui"\n                       clearInput clearOnEdit="false"\n                       rows="5" \n                       maxLength="400"\n                       id="myInput">\n            </textarea>\n        </ion-item>\n\n       \n        <h6 *ngIf="errorTexto" class="error"> {{messageTexto}}</h6>\n\n        <button ion-button full color="secondary" *ngIf="isReclamacao== undefined" class="login-button">{{titulo}}}</button>\n        <button ion-button full color="secondary" *ngIf="isReclamacao != undefined">{{titulo}}</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-noticia\cadastrar-noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_noticias_noticias__["a" /* NoticiasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CadastrarNoticiaPage);
    return CadastrarNoticiaPage;
}());

//# sourceMappingURL=cadastrar-noticia.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarPaiPageModule", function() { return CadastrarPaiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_pai__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastrarPaiPageModule = /** @class */ (function () {
    function CadastrarPaiPageModule() {
    }
    CadastrarPaiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_pai__["a" /* CadastrarPaiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_pai__["a" /* CadastrarPaiPage */]),
            ],
        })
    ], CadastrarPaiPageModule);
    return CadastrarPaiPageModule;
}());

//# sourceMappingURL=cadastrar-pai.module.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPaiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pais_pais__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_responsavel__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
/**
 * Generated class for the CadastrarPaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarPaiPage = /** @class */ (function () {
    function CadastrarPaiPage(alertController, loadingCtrl, resposavelProvider, formBuilder, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.resposavelProvider = resposavelProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pai = new __WEBPACK_IMPORTED_MODULE_4__Models_responsavel__["a" /* responsavel */]();
        this.errorNome = false;
        this.errorCpf = false;
        this.errorEndereco = false;
        this.errorTelefone = false;
        this.errorSenha = false;
        this.isPai = new __WEBPACK_IMPORTED_MODULE_4__Models_responsavel__["a" /* responsavel */]();
        this.isPai = this.navParams.get("pai");
        if (this.isPai == undefined) {
            this.cadastroForm = formBuilder.group({
                Nome: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                Cpf: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                Endereco: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
                Telefone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                Senha: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            });
            this.titulo = "Cadastrar pai";
        }
        else {
            this.cadastroForm = formBuilder.group({
                Nome: [this.isPai.nome, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                Cpf: [this.isPai.cpf, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                Endereco: [this.isPai.endereco, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
                Telefone: [this.isPai.telefone, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
                Senha: [this.isPai.senha, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            });
            this.titulo = "Editar pai";
        }
    }
    CadastrarPaiPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, Nome = _a.Nome, Cpf = _a.Cpf, Endereco = _a.Endereco, Telefone = _a.Telefone, Senha = _a.Senha;
        if (!this.cadastroForm.valid) {
            if (!Nome.valid) {
                this.errorNome = true;
                this.messageNome = "Ops! Nome inválido";
            }
            else {
                this.messageNome = "";
            }
            if (!Cpf.valid) {
                this.errorCpf = true;
                this.messageCpf = "Ops! Tamanho do CPF inválido";
            }
            else {
                this.messageCpf = "";
            }
            if (!Endereco.valid) {
                this.errorEndereco = true;
                this.messageEndereco = "Ops! Endereço inválido";
            }
            else {
                this.messageEndereco = "";
            }
            if (!Telefone.valid) {
                this.errorTelefone = true;
                this.messageTelefone = "Ops! Telefone inváldo";
            }
            else {
                this.messageTelefone = "";
            }
            if (!Senha.valid) {
                this.errorSenha = true;
                this.messageSenha = "Ops! Senha inválida";
            }
            else {
                this.messageSenha = "";
            }
        }
        else {
            this.pai.nome = Nome.value;
            this.pai.cpf = Cpf.value;
            this.pai.endereco = Endereco.value;
            this.pai.telefone = Telefone.value;
            this.pai.senha = Senha.value;
            this.pai.ativo = 1;
            this.Abrecarregamento("carreganddo");
            if (this.isPai == undefined) {
                this.resposavelProvider.postPai(this.pai).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 200) {
                        if (objeto_retorno.situacao == "Cpf repetido") {
                            _this.exibirMensagem("Cpf já existe em outro usuário!");
                            return;
                        }
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.pai.idResponsavel = this.isPai.idResponsavel;
                this.resposavelProvider.putPai(this.pai).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 200) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastrarPaiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPaiPage');
    };
    CadastrarPaiPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastrarPaiPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastrarPaiPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarPaiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-pai',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-pai\cadastrar-pai.html"*/'<!--\n  Generated template for the CadastrarPaiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title> {{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n    <ion-item>\n      <ion-input ([ngModel])="Nome"\n                   formControlName="Nome"\n                   type="text"\n                   placeholder="Nome"\n                   maxlength="70"\n                   clearInput clearOnEdit="false">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n      \n    <ion-item>\n      <ion-input ([ngModel])="Cpf"\n                  formControlName="Cpf"\n                  type="text"\n                  placeholder="Cpf"\n                  clearInput clearOnEdit="false"\n                  [brmasker]="{mask:\'000.000.000-00\', len:14}">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorCpf" class="error"> {{messageCpf}}</h6>\n\n    <ion-item>\n      <ion-input ([ngModel])="Endereco"\n                    formControlName="Endereco"\n                    type="text"\n                    placeholder="Endereco"\n                    maxlength="120"\n                    clearInput clearOnEdit="false">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorEndereco" class="error"> {{messageEndereco}}</h6>\n\n    <ion-item>\n      <ion-input ([ngModel])="Telefone"\n                    formControlName="Telefone"\n                    type="text"\n                    placeholder="Telefone"\n                    maxlength="120"\n                    clearInput clearOnEdit="false"\n                    [brmasker]="{mask:\'00 00000-0000\', len:13}">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorTelefone" class="error"> {{messageTelefone}}</h6>\n    <ion-item>\n        <ion-input ([ngModel])="Senha"\n                      formControlName="Senha"\n                      type="password"\n                      placeholder="Senha"\n                      maxlength="120"\n                      clearInput clearOnEdit="false"\n                     >\n        </ion-input>\n    </ion-item>\n\n    \n    <h6 *ngIf="errorSenha" class="error"> {{messageSenha}}</h6>\n    <br/>\n    <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}}</button>\n    <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}</button>\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-pai\cadastrar-pai.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_pais_pais__["a" /* PaisProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastrarPaiPage);
    return CadastrarPaiPage;
}());

//# sourceMappingURL=cadastrar-pai.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarProfessorPageModule", function() { return CadastrarProfessorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastrarProfessorPageModule = /** @class */ (function () {
    function CadastrarProfessorPageModule() {
    }
    CadastrarProfessorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__["a" /* CadastrarProfessorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__["a" /* CadastrarProfessorPage */]),
            ],
        })
    ], CadastrarProfessorPageModule);
    return CadastrarProfessorPageModule;
}());

//# sourceMappingURL=cadastrar-professor.module.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Models_professor__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_professor_professor__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastrarProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarProfessorPage = /** @class */ (function () {
    function CadastrarProfessorPage(alertController, loadingCtrl, resposavelProvider, formBuilder, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.resposavelProvider = resposavelProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professor = new __WEBPACK_IMPORTED_MODULE_0__Models_professor__["a" /* professor */]();
        this.errorNome = false;
        this.errorCpf = false;
        this.errorEndereco = false;
        this.errorTelefone = false;
        this.errorSenha = false;
        this.isProfessor = new __WEBPACK_IMPORTED_MODULE_0__Models_professor__["a" /* professor */]();
        this.isProfessor = this.navParams.get("professor");
        if (this.isProfessor == undefined) {
            this.cadastroForm = formBuilder.group({
                Nome: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                Cpf: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                Telefone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                Senha: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            });
            this.titulo = "Cadastrar Professor";
        }
        else {
            this.cadastroForm = formBuilder.group({
                Nome: [this.isProfessor.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                Cpf: [this.isProfessor.cpf, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(14), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                Telefone: [this.isProfessor.telefone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                Senha: [this.isProfessor.senha, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            });
            this.titulo = "Editar Professor";
        }
    }
    CadastrarProfessorPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, Nome = _a.Nome, Cpf = _a.Cpf, Telefone = _a.Telefone, Senha = _a.Senha;
        if (!this.cadastroForm.valid) {
            if (!Nome.valid) {
                this.errorNome = true;
                this.messageNome = "Ops! Nome inválido";
            }
            else {
                this.messageNome = "";
            }
            if (!Cpf.valid) {
                this.errorCpf = true;
                this.messageCpf = "Ops! Tamanho do CPF inválido";
            }
            else {
                this.messageCpf = "";
            }
            if (!Telefone.valid) {
                this.errorTelefone = true;
                this.messageTelefone = "Ops! Telefone inváldo";
            }
            else {
                this.messageTelefone = "";
            }
            if (!Senha.valid) {
                this.errorSenha = true;
                this.messageSenha = "Ops! Senha inválida";
            }
            else {
                this.messageSenha = "";
            }
        }
        else {
            this.professor.nome = Nome.value;
            this.professor.cpf = Cpf.value;
            this.professor.telefone = Telefone.value;
            this.professor.senha = Senha.value;
            this.professor.ativo = 1;
            this.Abrecarregamento("carreganddo");
            if (this.isProfessor == undefined) {
                this.resposavelProvider.postProfessor(this.professor).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        if (objeto_retorno.situacao == "Cpf repetido") {
                            _this.exibirMensagem("Cpf já existe em outro usuário!");
                            return;
                        }
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.professor.idProfessor = this.isProfessor.idProfessor;
                this.resposavelProvider.putProfessor(this.professor).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastrarProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPaiPage');
    };
    CadastrarProfessorPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastrarProfessorPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastrarProfessorPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-professor',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-professor\cadastrar-professor.html"*/'<!--\n  Generated template for the CadastrarProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title> {{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n        <ion-item>\n          <ion-input ([ngModel])="Nome"\n                       formControlName="Nome"\n                       type="text"\n                       placeholder="Nome"\n                       maxlength="70"\n                       clearInput clearOnEdit="false">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n          \n        <ion-item>\n          <ion-input ([ngModel])="Cpf"\n                      formControlName="Cpf"\n                      type="text"\n                      placeholder="Cpf"\n                      clearInput clearOnEdit="false"\n                      [brmasker]="{mask:\'000.000.000-00\', len:14}">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorCpf" class="error"> {{messageCpf}}</h6>\n    \n        <ion-item>\n          <ion-input ([ngModel])="Telefone"\n                        formControlName="Telefone"\n                        type="text"\n                        placeholder="Telefone"\n                        maxlength="120"\n                        clearInput clearOnEdit="false"\n                        [brmasker]="{mask:\'00 00000-0000\', len:13}">\n          </ion-input>\n        </ion-item>\n        <h6 *ngIf="errorTelefone" class="error"> {{messageTelefone}}</h6>\n        <ion-item>\n            <ion-input ([ngModel])="Senha"\n                          formControlName="Senha"\n                          type="password"\n                          placeholder="Senha"\n                          maxlength="120"\n                          clearInput clearOnEdit="false"\n                         >\n            </ion-input>\n        </ion-item>\n    \n        \n        <h6 *ngIf="errorSenha" class="error"> {{messageSenha}}</h6>\n        <br/>\n        <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}}</button>\n        <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}}</button>\n    \n        </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-professor\cadastrar-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_professor_professor__["a" /* ProfessorProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CadastrarProfessorPage);
    return CadastrarProfessorPage;
}());

//# sourceMappingURL=cadastrar-professor.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarReclamacaoPageModule", function() { return CadastrarReclamacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_reclamacao__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarReclamacaoPageModule = /** @class */ (function () {
    function CadastrarReclamacaoPageModule() {
    }
    CadastrarReclamacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_reclamacao__["a" /* CadastrarReclamacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_reclamacao__["a" /* CadastrarReclamacaoPage */]),
            ],
        })
    ], CadastrarReclamacaoPageModule);
    return CadastrarReclamacaoPageModule;
}());

//# sourceMappingURL=cadastrar-reclamacao.module.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarTurmasPageModule", function() { return CadastrarTurmasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_turmas__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarTurmasPageModule = /** @class */ (function () {
    function CadastrarTurmasPageModule() {
    }
    CadastrarTurmasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_turmas__["a" /* CadastrarTurmasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_turmas__["a" /* CadastrarTurmasPage */]),
            ],
        })
    ], CadastrarTurmasPageModule);
    return CadastrarTurmasPageModule;
}());

//# sourceMappingURL=cadastrar-turmas.module.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarTurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turmas_turmas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_turma__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastrarTurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarTurmasPage = /** @class */ (function () {
    function CadastrarTurmasPage(alertController, loadingCtrl, turmasProvider, formBuilder, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.turmasProvider = turmasProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.errorSerie = false;
        this.errorLetra = false;
        this.errorTurno = false;
        this.errorTipoSerie = false;
        this.defaultSelectQuestion = 1;
        this.turma = new __WEBPACK_IMPORTED_MODULE_5__Models_turma__["a" /* turma */]();
        this.turnos = ['Manhã', 'Tarde', 'Noite'];
        this.tipos = ['pré-escolar', 'fundamental', 'médio'];
        this.isturma = this.navParams.get("turma");
        if (this.isturma == undefined) {
            this.cadastroForm = formBuilder.group({
                serie: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[1-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                letra: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                turno: ['1', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
                tipoSerie: ['1', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            });
            this.titulo = "Cadastrar turma";
        }
        else {
            this.cadastroForm = formBuilder.group({
                serie: [this.isturma.serie, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[1-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                letra: [this.isturma.letra, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                turno: [this.isturma.turno, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
                tipoSerie: [this.isturma.tipoSerie, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            });
            this.titulo = "Editar turma";
        }
    }
    CadastrarTurmasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarTurmasPage');
    };
    CadastrarTurmasPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, serie = _a.serie, letra = _a.letra, turno = _a.turno, tipoSerie = _a.tipoSerie;
        if (!this.cadastroForm.valid) {
            if (!serie.valid) {
                this.errorSerie = true;
                this.messageSerie = "Ops! É necessário um único número nesse campo";
            }
            else {
                this.messageSerie = "";
            }
            if (!letra.valid) {
                this.errorLetra = true;
                this.messageLetra = "Ops! É necessário uma única letra nesse campo";
            }
            else {
                this.messageLetra = "";
            }
            if (!turno.valid) {
                this.errorTurno = true;
                this.messageTurno = "Ops! É necessário escolher um turno";
            }
            else {
                this.messageTurno = "";
            }
            if (!tipoSerie.valid) {
                this.errorTipoSerie = true;
                this.messageTipoSerie = "Ops! É necessário escolher um tipo de série";
            }
            else {
                this.messageTipoSerie = "";
            }
        }
        else {
            this.turma.serie = serie.value;
            this.turma.letra = letra.value;
            this.turma.turno = +turno.value;
            this.turma.tipoSerie = +tipoSerie.value;
            this.turma.ativo = 1;
            this.Abrecarregamento("carreganddo");
            if (this.isturma == undefined) {
                this.turmasProvider.postTurma(this.turma).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.turma.idTurma = this.isturma.idTurma;
                this.turmasProvider.putTurma(this.turma).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    CadastrarTurmasPage.prototype.editar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, serie = _a.serie, letra = _a.letra, turno = _a.turno, tipoSerie = _a.tipoSerie;
        if (!this.cadastroForm.valid) {
            if (!serie.valid) {
                this.errorSerie = true;
                this.messageSerie = "Ops! É necessário um único número nesse campo";
            }
            else {
                this.messageSerie = "";
            }
            if (!letra.valid) {
                this.errorLetra = true;
                this.messageLetra = "Ops! É necessário uma única letra nesse campo";
            }
            else {
                this.messageLetra = "";
            }
            if (!turno.valid) {
                this.errorTurno = true;
                this.messageTurno = "Ops! É necessário escolher um turno";
            }
            else {
                this.messageTurno = "";
            }
            if (!tipoSerie.valid) {
                this.errorTipoSerie = true;
                this.messageTipoSerie = "Ops! É necessário escolher um tipo de série";
            }
            else {
                this.messageTipoSerie = "";
            }
        }
        else {
            this.turma.serie = serie.value;
            this.turma.letra = letra.value;
            this.turma.turno = +turno.value;
            this.turma.tipoSerie = +tipoSerie.value;
            this.Abrecarregamento("carreganddo");
            this.turmasProvider.putTurma(this.turma).subscribe(function (data) {
                _this.FechaCarregamento();
                var response = data;
                //const objeto_retorno = JSON.parse(response._body);
                if (response.status == 201) {
                    _this.exibirMensagem("Cadastro realizado com sucesso!");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__turmas_turmas__["a" /* TurmasPage */]);
                }
                else {
                    if (response.status == 500) {
                        _this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
            }, function (error) {
                _this.FechaCarregamento();
                _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
                console.log(error);
            });
        }
    };
    CadastrarTurmasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    CadastrarTurmasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    CadastrarTurmasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarTurmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-turmas',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-turmas\cadastrar-turmas.html"*/'<!--\n  Generated template for the CadastrarTurmasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n    <ion-item>\n      <ion-input ([ngModel])="serie"\n                 formControlName="serie"\n                 type="text"\n                 placeholder="Serie"\n                 maxlength="1"\n                 clearInput clearOnEdit="false">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorSerie" class="error"> {{messageSerie}}</h6>\n    \n    <ion-item>\n      <ion-input ([ngModel])="letra"\n                 formControlName="letra"\n                 type="text"\n                 placeholder="Letra"\n                 maxlength="1"\n                 clearInput clearOnEdit="false">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorLetra" class="error"> {{messageLetra}}</h6>\n\n    <ion-item>\n        <ion-label>Turno</ion-label>\n        <ion-select ([ngModel])="turno "cancelText="cancelar"  okText="Ok" formControlName="turno" clearInput clearOnEdit="false" >\n          <!--<ion-option value =\'1\'checked="true">Manhã</ion-option>-->\n          <ion-option *ngFor="let m of turnos; let i = index" value="{{i.toString()}}" >{{i}} - {{ m }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <h6 *ngIf="errorTurno" class="error"> {{messageTurno}}</h6>\n\n    <ion-item>\n        <ion-label>Turno</ion-label>\n        <ion-select ([ngModel])="tipoSerie "cancelText="cancelar"  okText="Ok" formControlName="tipoSerie" clearInput clearOnEdit="false" >\n          <!--<ion-option value =\'1\'checked="true">Manhã</ion-option>-->\n          <ion-option *ngFor="let m of tipos; let i = index" value="{{i.toString()}}" >{{i}} - {{ m }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <h6 *ngIf="errorSerie" class="error"> {{messageTurno}}</h6>\n\n\n    <button ion-button block outline color="secondary" *ngIf="isturma == undefined" class="login-button">Cadastrar</button>\n    <button ion-button block outline color="secondary" *ngIf="isturma != undefined">Concluir edição</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-turmas\cadastrar-turmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], CadastrarTurmasPage);
    return CadastrarTurmasPage;
}());

//# sourceMappingURL=cadastrar-turmas.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrosPageModule", function() { return CadastrosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastros__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrosPageModule = /** @class */ (function () {
    function CadastrosPageModule() {
    }
    CadastrosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastros__["a" /* CadastrosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastros__["a" /* CadastrosPage */]),
            ],
        })
    ], CadastrosPageModule);
    return CadastrosPageModule;
}());

//# sourceMappingURL=cadastros.module.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__professores_professores__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turma_materia_turma_materia__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pais_pais__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turmas_turmas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CadastrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrosPage = /** @class */ (function () {
    function CadastrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrosPage');
    };
    CadastrosPage.prototype.goTurmas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__turmas_turmas__["a" /* TurmasPage */]);
    };
    CadastrosPage.prototype.goTurmasPais = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pais_pais__["a" /* PaisPage */]);
    };
    CadastrosPage.prototype.goMaterias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__turma_materia_turma_materia__["a" /* TurmaMateriaPage */]);
    };
    CadastrosPage.prototype.goProfessores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__professores_professores__["a" /* ProfessoresPage */]);
    };
    CadastrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-cadastros',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastros\cadastros.html"*/'<!--\n  Generated template for the CadastrosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" outline class ="largura" (click)="goTurmas()" >Turmas</button> <br>\n  <button ion-button color="primary" outline class ="largura" (click)="goTurmasPais()">Alunos/pais</button><br>\n  <button ion-button color="primary" outline class ="largura" (click)="goMaterias()">Matérias</button><br>\n  <button ion-button color="primary" outline class ="largura" (click) = "goProfessores()">Professor</button><br>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastros\cadastros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
    ], CadastrosPage);
    return CadastrosPage;
}());

//# sourceMappingURL=cadastros.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_professor_cadastrar_professor__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_professor__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_professor_professor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfessoresPage = /** @class */ (function () {
    function ProfessoresPage(alertController, loadingCtrl, professorProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.professorProvider = professorProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //public turma = new turma();
        //public materia = new materia();
        this.professores = new Array();
        this.professor = new __WEBPACK_IMPORTED_MODULE_1__Models_professor__["a" /* professor */]();
        //this.turma = this.navParams.get("turma");
        //this.materia = this.navParams.get("materia");
    }
    ProfessoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.professorProvider.getProfessor().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.professores = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ProfessoresPage.prototype.ativar = function (professor) {
        var _this = this;
        if (professor.ativo == 0) {
            professor.ativo = 1;
        }
        else {
            professor.ativo = 0;
        }
        this.Abrecarregamento("carreganddo");
        this.professorProvider.putProfessor(professor).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            //const objeto_retorno = JSON.parse(response._body);
            if (response.status == 201) {
                _this.exibirMensagem("Operação realizado com sucesso!");
                //this.navCtrl.setRoot(TurmasPage);
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            if (professor.ativo == 1) {
                professor.ativo = 0;
            }
            else {
                professor.ativo = 1;
            }
            _this.FechaCarregamento();
            console.log(error);
        });
    };
    ProfessoresPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */]);
    };
    ProfessoresPage.prototype.goEditar = function (professor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */], { professor: professor });
    };
    ProfessoresPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ProfessoresPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ProfessoresPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfessoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-professores',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\professores\professores.html"*/'<!--\n  Generated template for the ProfessoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>professores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   \n\n  <ion-item *ngFor="let item of professores">\n      <ion-card padding>\n        <h2>Professor: {{item.nome}} </h2>\n      \n        <p> CPF: {{item.cpf}} </p>\n        <p> Telefone: {{item.telefone}} </p>\n\n        <ion-row>\n          <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Professor</button>\n        </ion-row>\n\n        <ion-row>\n          <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n          <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>   \n        </ion-row> \n\n       \n\n      </ion-card>\n    </ion-item>\n \n\n<ion-fab bottom right>\n    \n  <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\professores\professores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_professor_professor__["a" /* ProfessorProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], ProfessoresPage);
    return ProfessoresPage;
}());

//# sourceMappingURL=professores.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__materias_materias__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmaMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmaMateriaPage = /** @class */ (function () {
    function TurmaMateriaPage(alertController, loadingCtrl, turmasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.turmasProvider = turmasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.turmas = new Array();
    }
    TurmaMateriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.turmasProvider.getTurmas().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.turmas = objeto_retorno;
                _this.turmas = _this.turmas.filter(function (a) { return a.ativo == 1; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    TurmaMateriaPage.prototype.goMaterias = function (turma) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__materias_materias__["a" /* MateriasPage */], { turma: turma });
    };
    TurmaMateriaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    TurmaMateriaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    TurmaMateriaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    TurmaMateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-turma-materia',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-materia\turma-materia.html"*/'<!--\n  Generated template for the TurmaMateriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Escolha uma turma.</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of turmas">\n        <ion-card padding (click)="goMaterias(item)">\n        <h2>Série: {{item.serie}}ª - {{item.letra}} </h2>\n      \n        <p  [hidden]="item.tipoSerie != 0">Pré-escolar</p>\n        <p  [hidden]="item.tipoSerie != 1">Ensino Fundamental</p>\n        <p  [hidden]="item.tipoSerie != 2">Ensino Médio</p>\n\n        <p  [hidden]="item.turno != 1">Turno: Matutino</p>\n        <p  [hidden]="item.turno != 2">Turno: Vespertino</p>\n        <p  [hidden]="item.turno != 2">Turno: Noturno</p>\n\n\n        </ion-card>\n      </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-materia\turma-materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], TurmaMateriaPage);
    return TurmaMateriaPage;
}());

//# sourceMappingURL=turma-materia.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vincular_professor_vincular_professor__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastar_materia_cadastar_materia__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_materia_materia__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_turma__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the MateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriasPage = /** @class */ (function () {
    function MateriasPage(materiaProvider, turmasProvider, alertController, loadingCtrl, navCtrl, navParams) {
        this.materiaProvider = materiaProvider;
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materias = new Array();
        this.turma = new __WEBPACK_IMPORTED_MODULE_6__Models_turma__["a" /* turma */]();
        this.turma = this.navParams.get("turma");
    }
    MateriasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.materiaProvider.getMateriaPorTurma(this.turma.idTurma).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.materias = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    MateriasPage.prototype.ativar = function (materia) {
        var _this = this;
        if (materia.ativo == 0) {
            materia.ativo = 1;
        }
        else {
            materia.ativo = 0;
        }
        this.Abrecarregamento("carreganddo");
        this.materiaProvider.putMateria(materia).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            //const objeto_retorno = JSON.parse(response._body);
            if (response.status == 204) {
                _this.exibirMensagem("Operação realizado com sucesso!");
                //this.navCtrl.setRoot(TurmasPage);
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            if (materia.ativo == 1) {
                materia.ativo = 0;
            }
            else {
                materia.ativo = 1;
            }
            _this.FechaCarregamento();
            console.log(error);
        });
    };
    MateriasPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastar_materia_cadastar_materia__["a" /* CadastarMateriaPage */], { turma: this.turma });
    };
    MateriasPage.prototype.goEditar = function (materia) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cadastar_materia_cadastar_materia__["a" /* CadastarMateriaPage */], { materia: materia, turma: this.turma });
    };
    MateriasPage.prototype.goProfessores = function (materia) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__vincular_professor_vincular_professor__["a" /* VincularProfessorPage */], { materia: materia });
    };
    MateriasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    MateriasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    MateriasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    MateriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-materias',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\materias\materias.html"*/'<!--\n  Generated template for the MateriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>materias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of materias">\n        <ion-card padding>\n          <h2>Matéria: {{item.nome}} </h2>\n          <p> Turma: {{turma.serie}}ª {{turma.letra}} </p>\n\n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Matéria</button>\n          </ion-row>\n          \n          <ion-row>\n              <button ion-button clear  (click)="goProfessores(item)" color="secondary">vincular professor</button>\n          </ion-row>\n\n          <ion-row>\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>   \n          </ion-row> \n\n         \n\n        </ion-card>\n      </ion-item>\n   \n\n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\materias\materias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], MateriasPage);
    return MateriasPage;
}());

//# sourceMappingURL=materias.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VincularProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_professor_materia_professor_materia__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_professorMateria__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_materia__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_materia_materia__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the VincularProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VincularProfessorPage = /** @class */ (function () {
    function VincularProfessorPage(professorMateriaProvider, professorProvider, alertController, loadingCtrl, materiaProvider, formBuilder, navCtrl, navParams) {
        this.professorMateriaProvider = professorMateriaProvider;
        this.professorProvider = professorProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.materiaProvider = materiaProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professorMateria = new __WEBPACK_IMPORTED_MODULE_4__Models_professorMateria__["a" /* professorMateria */]();
        this.errorNome = false;
        this.materia = new __WEBPACK_IMPORTED_MODULE_5__Models_materia__["a" /* materia */]();
        this.professores = new Array();
        this.isProfessorMateria = new __WEBPACK_IMPORTED_MODULE_4__Models_professorMateria__["a" /* professorMateria */]();
        this.materia = this.navParams.get("materia");
        if (this.materia.idProfessorMateria == undefined) {
            this.cadastroForm = this.formBuilder.group({
                idProfessor: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])]
            });
            this.titulo = "Vincular Professor";
        }
        else {
            this.cadastroForm = this.formBuilder.group({
                idProfessor: [this.materia.idProfessorMateria.idProfessor, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])]
            });
            this.titulo = "Atualizar Professor";
        }
    }
    VincularProfessorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad VincularProfessorPage');
        this.Abrecarregamento("carregando turmas...");
        this.professorProvider.getProfessor().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.professores = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    VincularProfessorPage.prototype.cadastrar = function () {
        var _this = this;
        var idProfessor = this.cadastroForm.controls.idProfessor;
        if (!this.cadastroForm.valid) {
            if (!idProfessor.valid) {
                this.errorNome = true;
                this.messageNome = "Ops! Nome inválido";
            }
            else {
                this.messageNome = "";
            }
        }
        else {
            this.professorMateria.idMateria = this.materia.idMateria;
            this.professorMateria.idProfessor = idProfessor.value;
            this.Abrecarregamento("carreganddo");
            if (this.materia.idProfessorMateria == null) {
                this.professorMateria.ativo = 1;
                this.professorMateriaProvider.postProfessorMateria(this.professorMateria).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    var objeto_retorno = JSON.parse(response._body);
                    if (response.status == 201) {
                        if (objeto_retorno.situacao == "Cpf repetido") {
                            _this.exibirMensagem("Cpf já existe em outro usuário!");
                            return;
                        }
                        _this.exibirMensagem("Cadastro realizado com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
            else {
                this.professorMateria.id = this.materia.idProfessorMateria.id;
                this.professorMateriaProvider.putProfessorMateria(this.professorMateria).subscribe(function (data) {
                    _this.FechaCarregamento();
                    var response = data;
                    //const objeto_retorno = JSON.parse(response._body);
                    if (response.status == 204) {
                        _this.exibirMensagem("Edição realizada com sucesso!");
                        _this.navCtrl.pop();
                    }
                    else {
                        if (response.status == 500) {
                            _this.exibirMensagem('Erro interno no servidor');
                        }
                        else {
                            _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                        }
                    }
                }, function (error) {
                    _this.FechaCarregamento();
                    _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
                    console.log(error);
                });
            }
        }
    };
    VincularProfessorPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    VincularProfessorPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    VincularProfessorPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    VincularProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-vincular-professor',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\vincular-professor\vincular-professor.html"*/'<!--\n  Generated template for the VincularProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Vincular Professor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n        <ion-item>\n            <ion-label>Matéria</ion-label>\n            <ion-select ([ngModel])="idProfessor" formControlName="idProfessor" clearInput clearOnEdit="false" interface="action-sheet" >\n              \n              <ion-option *ngFor="let m of professores; let i = index" value="{{m.idProfessor.toString()}}" >{{m.nome}}</ion-option>\n            </ion-select>\n        </ion-item> \n\n      <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n\n        <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}</button>\n        <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}}</button>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\vincular-professor\vincular-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_professor_materia_professor_materia__["a" /* ProfessorMateriaProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__["a" /* ProfessorProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], VincularProfessorPage);
    return VincularProfessorPage;
}());

//# sourceMappingURL=vincular-professor.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorMateriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ProfessorMateriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfessorMateriaProvider = /** @class */ (function () {
    function ProfessorMateriaProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello MateriaProvider Provider');
    }
    ProfessorMateriaProvider.prototype.getProfessorMateria = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "professorMateria/").timeout(8000);
        ;
    };
    ProfessorMateriaProvider.prototype.postProfessorMateria = function (professorMateria) {
        var link = this.host.ip + this.host.caminhoClasses + "professorMateria";
        var data = JSON.stringify(professorMateria);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    ProfessorMateriaProvider.prototype.putProfessorMateria = function (professorMateria) {
        var link = this.host.ip + this.host.caminhoClasses + "professorMateria";
        var data = JSON.stringify(professorMateria);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    ProfessorMateriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProfessorMateriaProvider);
    return ProfessorMateriaProvider;
}());

//# sourceMappingURL=professor-materia.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibicaoAgendasPageModule", function() { return ExibicaoAgendasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibicao_agendas__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibicaoAgendasPageModule = /** @class */ (function () {
    function ExibicaoAgendasPageModule() {
    }
    ExibicaoAgendasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibicao_agendas__["a" /* ExibicaoAgendasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibicao_agendas__["a" /* ExibicaoAgendasPage */]),
            ],
        })
    ], ExibicaoAgendasPageModule);
    return ExibicaoAgendasPageModule;
}());

//# sourceMappingURL=exibicao-agendas.module.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibicaoAgendasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_agenda_agenda__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_Agenda__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_aluno__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ExibicaoAgendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibicaoAgendasPage = /** @class */ (function () {
    function ExibicaoAgendasPage(alertController, loadingCtrl, agendaProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.agendaProvider = agendaProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendas = new Array();
        this.agenda = new __WEBPACK_IMPORTED_MODULE_1__Models_Agenda__["a" /* agenda */]();
        this.aluno = new __WEBPACK_IMPORTED_MODULE_4__Models_aluno__["a" /* aluno */]();
        this.aluno = this.navParams.get("aluno");
    }
    ExibicaoAgendasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.agendaProvider.getAgendaByTurma(this.aluno.idTurma).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.agendas = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ExibicaoAgendasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ExibicaoAgendasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ExibicaoAgendasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ExibicaoAgendasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-exibicao-agendas',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-agendas\exibicao-agendas.html"*/'<!--\n  Generated template for the ExibicaoAgendasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Agendas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of agendas">\n        <ion-card padding>\n          <h2>{{item.titulo}} </h2>\n        \n          <p> {{item.texto}} </p>\n  \n         \n  \n        </ion-card>\n      </ion-item>\n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-agendas\exibicao-agendas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_agenda_agenda__["a" /* AgendaProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], ExibicaoAgendasPage);
    return ExibicaoAgendasPage;
}());

//# sourceMappingURL=exibicao-agendas.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibicaoAlunosTurmaPageModule", function() { return ExibicaoAlunosTurmaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibicao_alunos_turma__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibicaoAlunosTurmaPageModule = /** @class */ (function () {
    function ExibicaoAlunosTurmaPageModule() {
    }
    ExibicaoAlunosTurmaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibicao_alunos_turma__["a" /* ExibicaoAlunosTurmaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibicao_alunos_turma__["a" /* ExibicaoAlunosTurmaPage */]),
            ],
        })
    ], ExibicaoAlunosTurmaPageModule);
    return ExibicaoAlunosTurmaPageModule;
}());

//# sourceMappingURL=exibicao-alunos-turma.module.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibicaoAlunosTurmaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_nota_cadastrar_nota__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_provas_provas__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_aluno_aluno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_professor__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the ExibicaoAlunosTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibicaoAlunosTurmaPage = /** @class */ (function () {
    function ExibicaoAlunosTurmaPage(provasProvider, turmasProvider, alertController, loadingCtrl, AlunoProvider, navCtrl, navParams) {
        this.provasProvider = provasProvider;
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.AlunoProvider = AlunoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professor = new __WEBPACK_IMPORTED_MODULE_6__Models_professor__["a" /* professor */]();
        this.alunos = new Array();
        this.provas = new Array();
        this.professor = this.navParams.get("professor");
    }
    ExibicaoAlunosTurmaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ExibicaoAlunosTurmaPage');
        this.provasProvider.getProvaPorMateria(this.professor.materia[0].idMateria).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.provas = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
        console.log('ionViewDidLoad ExibicaoAlunosTurmaPage');
        this.Abrecarregamento("carregando...");
        this.AlunoProvider.getAlunosByTurma(this.professor.turma.idTurma).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.alunos = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ExibicaoAlunosTurmaPage.prototype.goCadastrarNota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_nota_cadastrar_nota__["a" /* CadastrarNotaPage */]);
    };
    ExibicaoAlunosTurmaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ExibicaoAlunosTurmaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ExibicaoAlunosTurmaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ExibicaoAlunosTurmaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-exibicao-alunos-turma',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-alunos-turma\exibicao-alunos-turma.html"*/'<!--\n  Generated template for the ExibicaoAlunosTurmaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Adicionar nota</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of alunos">\n        <ion-card padding>\n          <h2>Aluno: {{item.nome}} </h2>\n        \n          <p> CPF: {{item.cpf}} </p>\n          <p> Telefone: {{item.telefone}} </p>\n          \n          <ion-item *ngFor="let prova of provas" (click)="goCadastrarNota()">\n              prova do bimestre: {{prova.bimestre}}\n          </ion-item>\n\n        </ion-card>\n        \n    </ion-item>\n   \n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-alunos-turma\exibicao-alunos-turma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_provas_provas__["a" /* ProvasProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_aluno_aluno__["a" /* AlunoProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], ExibicaoAlunosTurmaPage);
    return ExibicaoAlunosTurmaPage;
}());

//# sourceMappingURL=exibicao-alunos-turma.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarNotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastrarNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarNotaPage = /** @class */ (function () {
    function CadastrarNotaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarNotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarNotaPage');
    };
    CadastrarNotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-nota',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-nota\cadastrar-nota.html"*/'<!--\n  Generated template for the CadastrarNotaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastrar Nota</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label stacked>Nota</ion-label>\n        <ion-input\n                    type="text"\n                    placeholder="senha"\n                    clearInput clearOnEdit="false">\n        </ion-input>\n     </ion-item>\n   \n     <button ion-button full color="secondary" class="login-button" >Cadastrar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-nota\cadastrar-nota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastrarNotaPage);
    return CadastrarNotaPage;
}());

//# sourceMappingURL=cadastrar-nota.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ProvasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProvasProvider = /** @class */ (function () {
    function ProvasProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello MateriaProvider Provider');
    }
    ProvasProvider.prototype.getProva = function () {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "prova/").timeout(8000);
        ;
    };
    ProvasProvider.prototype.getProvaPorId = function (idTurma) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "prova/" + idTurma).timeout(8000);
        ;
    };
    ProvasProvider.prototype.getProvaPorMateria = function (idMateria) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "prova/provaByMateria?id=" + idMateria).timeout(8000);
        ;
    };
    ProvasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProvasProvider);
    return ProvasProvider;
}());

//# sourceMappingURL=provas.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibicaoMateriasPageModule", function() { return ExibicaoMateriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibicao_materias__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibicaoMateriasPageModule = /** @class */ (function () {
    function ExibicaoMateriasPageModule() {
    }
    ExibicaoMateriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibicao_materias__["a" /* ExibicaoMateriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibicao_materias__["a" /* ExibicaoMateriasPage */]),
            ],
        })
    ], ExibicaoMateriasPageModule);
    return ExibicaoMateriasPageModule;
}());

//# sourceMappingURL=exibicao-materias.module.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibicaoMateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_materia_materia__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_aluno__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the ExibicaoMateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibicaoMateriasPage = /** @class */ (function () {
    function ExibicaoMateriasPage(materiaProvider, turmasProvider, alertController, loadingCtrl, navCtrl, navParams) {
        this.materiaProvider = materiaProvider;
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materias = new Array();
        this.aluno = new __WEBPACK_IMPORTED_MODULE_4__Models_aluno__["a" /* aluno */]();
        this.aluno = this.navParams.get("aluno");
    }
    ExibicaoMateriasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.materiaProvider.getMateria().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.materias = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ExibicaoMateriasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ExibicaoMateriasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ExibicaoMateriasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ExibicaoMateriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-exibicao-materias',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-materias\exibicao-materias.html"*/'<!--\n  Generated template for the ExibicaoMateriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of materias">\n        <ion-card padding>\n          <h2>Matéria: {{item.nome}} </h2>\n          <h2>Nota 1: 8.00 </h2>\n          <h2>Nota 2: 5.00 </h2>\n        </ion-card>\n      </ion-item>\n   \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-materias\exibicao-materias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ExibicaoMateriasPage);
    return ExibicaoMateriasPage;
}());

//# sourceMappingURL=exibicao-materias.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibicaoReclamacoesPageModule", function() { return ExibicaoReclamacoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibicao_reclamacoes__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibicaoReclamacoesPageModule = /** @class */ (function () {
    function ExibicaoReclamacoesPageModule() {
    }
    ExibicaoReclamacoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibicao_reclamacoes__["a" /* ExibicaoReclamacoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibicao_reclamacoes__["a" /* ExibicaoReclamacoesPage */]),
            ],
        })
    ], ExibicaoReclamacoesPageModule);
    return ExibicaoReclamacoesPageModule;
}());

//# sourceMappingURL=exibicao-reclamacoes.module.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibicaoReclamacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_reclamacao_cadastrar_reclamacao__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reclamacao_reclamacao__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_aluno__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ExibicaoReclamacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibicaoReclamacoesPage = /** @class */ (function () {
    function ExibicaoReclamacoesPage(alertController, loadingCtrl, reclamacaoProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.reclamacaoProvider = reclamacaoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reclamacoes = new Array();
        this.reclamacao = new __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__["a" /* reclamacao */]();
        this.aluno = new __WEBPACK_IMPORTED_MODULE_5__Models_aluno__["a" /* aluno */]();
        this.aluno = this.navParams.get("aluno");
    }
    ExibicaoReclamacoesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.reclamacaoProvider.getReclamacaoByIdAluno(this.aluno.idAluno).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.reclamacoes = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ExibicaoReclamacoesPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_reclamacao_cadastrar_reclamacao__["a" /* CadastrarReclamacaoPage */], { aluno: this.aluno });
    };
    ExibicaoReclamacoesPage.prototype.goEditar = function (reclamacao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_reclamacao_cadastrar_reclamacao__["a" /* CadastrarReclamacaoPage */], { reclamacao: reclamacao, aluno: this.aluno });
    };
    ExibicaoReclamacoesPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ExibicaoReclamacoesPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ExibicaoReclamacoesPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ExibicaoReclamacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-exibicao-reclamacoes',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-reclamacoes\exibicao-reclamacoes.html"*/'<!--\n  Generated template for the ExibicaoReclamacoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Reclamações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of reclamacoes">\n        <ion-card padding>\n          <h2>{{item.titulo}} </h2>\n        \n          <p> {{item.texto}} </p>\n          \n        </ion-card>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-reclamacoes\exibicao-reclamacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_reclamacao_reclamacao__["a" /* ReclamacaoProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ExibicaoReclamacoesPage);
    return ExibicaoReclamacoesPage;
}());

//# sourceMappingURL=exibicao-reclamacoes.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibicaoNoticiasPageModule", function() { return ExibicaoNoticiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exibicao_noticias__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExibicaoNoticiasPageModule = /** @class */ (function () {
    function ExibicaoNoticiasPageModule() {
    }
    ExibicaoNoticiasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exibicao_noticias__["a" /* ExibicaoNoticiasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exibicao_noticias__["a" /* ExibicaoNoticiasPage */]),
            ],
        })
    ], ExibicaoNoticiasPageModule);
    return ExibicaoNoticiasPageModule;
}());

//# sourceMappingURL=exibicao-noticias.module.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibicaoNoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_noticias_noticias__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_noticia__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ExibicaoNoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExibicaoNoticiasPage = /** @class */ (function () {
    function ExibicaoNoticiasPage(alertController, loadingCtrl, noticiasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.noticiasProvider = noticiasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticias = new Array();
        this.noticia = new __WEBPACK_IMPORTED_MODULE_3__Models_noticia__["a" /* noticia */]();
    }
    ExibicaoNoticiasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.noticiasProvider.getNoticias().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.noticias = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ExibicaoNoticiasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ExibicaoNoticiasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ExibicaoNoticiasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ExibicaoNoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-exibicao-noticias',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-noticias\exibicao-noticias.html"*/'<!--\n  Generated template for the ExibicaoNoticiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>exibicaoNoticias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of noticias">\n        <ion-card padding>\n          <h2>{{item.titulo}} </h2>\n        \n          <p> {{item.texto}} </p>\n         \n  \n         \n         \n  \n        </ion-card>\n    </ion-item>\n   \n  \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\exibicao-noticias\exibicao-noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_noticias_noticias__["a" /* NoticiasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ExibicaoNoticiasPage);
    return ExibicaoNoticiasPage;
}());

//# sourceMappingURL=exibicao-noticias.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilhosPageModule", function() { return FilhosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filhos__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilhosPageModule = /** @class */ (function () {
    function FilhosPageModule() {
    }
    FilhosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filhos__["a" /* FilhosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filhos__["a" /* FilhosPage */]),
            ],
        })
    ], FilhosPageModule);
    return FilhosPageModule;
}());

//# sourceMappingURL=filhos.module.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exibicao_agendas_exibicao_agendas__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exibicao_reclamacoes_exibicao_reclamacoes__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exibicao_materias_exibicao_materias__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FilhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilhosPage = /** @class */ (function () {
    function FilhosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filhos = new Array();
    }
    FilhosPage.prototype.ionViewWillEnter = function () {
        this.filhos = __WEBPACK_IMPORTED_MODULE_1__app_app_component__["a" /* MyApp */].filhos;
    };
    FilhosPage.prototype.goReclamacoes = function (aluno) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exibicao_reclamacoes_exibicao_reclamacoes__["a" /* ExibicaoReclamacoesPage */], { aluno: aluno });
    };
    FilhosPage.prototype.goAgendas = function (aluno) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__exibicao_agendas_exibicao_agendas__["a" /* ExibicaoAgendasPage */], { aluno: aluno });
    };
    FilhosPage.prototype.goNotas = function (aluno) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__exibicao_materias_exibicao_materias__["a" /* ExibicaoMateriasPage */], { aluno: aluno });
    };
    FilhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-filhos',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\filhos\filhos.html"*/'<!--\n  Generated template for the FilhosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Filhos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of filhos">\n        <ion-card padding>\n          <h2>Nome: {{item.nome}} </h2>\n          <h2>Cpf: {{item.cpf}} </h2>\n          \n          <ion-row>\n            <button ion-button clear  (click)="goReclamacoes(item)" color="secondary">Ver reclamações</button>\n          </ion-row>\n\n          <ion-row>\n            <button ion-button clear   (click)="goAgendas(item)"color="secondary" >Ver agenda</button>    \n          </ion-row>\n\n          <ion-row>\n              <button ion-button clear   (click)="goNotas(item)"color="secondary" >Ver Notas</button>    \n            </ion-row>\n\n        </ion-card>\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\filhos\filhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], FilhosPage);
    return FilhosPage;
}());

//# sourceMappingURL=filhos.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_responsavel_login_responsavel__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_admin_login_admin__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_professor_login_professor__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goPais = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_responsavel_login_responsavel__["a" /* LoginResponsavelPage */]);
    };
    HomePage.prototype.goProfessores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_professor_login_professor__["a" /* LoginProfessorPage */]);
    };
    HomePage.prototype.goAdmins = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_admin_login_admin__["a" /* LoginAdminPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button color="primary" outline class ="largura" (click)="goPais()" >Pais</button> <br>\n    <button ion-button color="primary" outline class ="largura" (click)="goProfessores()">Professores</button><br>\n    <button ion-button color="primary" outline class ="largura" (click)="goAdmins()">Administradors</button><br>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginResponsavelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pais_pais__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_responsavel_tab_responsavel__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginResponsavelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginResponsavelPage = /** @class */ (function () {
    function LoginResponsavelPage(alertController, loadingCtrl, paisProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.paisProvider = paisProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginResponsavelPage.prototype.ionViewWillEnter = function () {
    };
    LoginResponsavelPage.prototype.Login = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.paisProvider.Login(this.cpf, this.senha).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                if (objeto_retorno != null && objeto_retorno != undefined) {
                    if (objeto_retorno.filho.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */].filhos = objeto_retorno.filho;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab_responsavel_tab_responsavel__["a" /* TabResponsavelPage */]);
                    }
                    else {
                        _this.exibirMensagem("Responsável não tem filhos cadastrados;");
                    }
                }
            }
            else {
                _this.exibirMensagem('login ou senha incorretos');
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    LoginResponsavelPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    LoginResponsavelPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    LoginResponsavelPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginResponsavelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login-responsavel',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\login-responsavel\login-responsavel.html"*/'Generated template for the LoginAdminPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n  <ion-title>Login do Responsável</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n\n  <ion-item>\n     <ion-label stacked>CPF</ion-label>\n\n     <ion-input [(ngModel)]="cpf"\n                 type="Tel"\n                 placeholder="Cpf"\n                 [brmasker]="{mask:\'000.000.000-00\', len:14}"\n                 clearInput clearOnEdit="false">\n     </ion-input>\n  </ion-item>\n\n  <ion-item>\n     <ion-label stacked>Senha</ion-label>\n     <ion-input [(ngModel)]="senha"\n                 type="password"\n                 placeholder="senha"\n                 clearInput clearOnEdit="false">\n     </ion-input>\n  </ion-item>\n\n  <button ion-button full color="secondary" class="login-button" (click)="Login()">Login</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\login-responsavel\login-responsavel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_pais_pais__["a" /* PaisProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], LoginResponsavelPage);
    return LoginResponsavelPage;
}());

//# sourceMappingURL=login-responsavel.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_administrador_administrador__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginAdminPage = /** @class */ (function () {
    function LoginAdminPage(alertController, loadingCtrl, administradorProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.administradorProvider = administradorProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginAdminPage.prototype.ionViewWillEnter = function () {
    };
    LoginAdminPage.prototype.Login = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.administradorProvider.Login(this.cpf, this.senha).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                if (objeto_retorno.length > 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.exibirMensagem("Login ou senha incorretos.");
                }
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    LoginAdminPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    LoginAdminPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    LoginAdminPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login-admin',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\login-admin\login-admin.html"*/'<!--\n  Generated template for the LoginAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login do Administrador</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n\n    <ion-item>\n       <ion-label stacked>CPF</ion-label>\n\n       <ion-input [(ngModel)]="cpf"\n                   type="Tel"\n                   placeholder="Cpf"\n                   [brmasker]="{mask:\'000.000.000-00\', len:14}"\n                   clearInput clearOnEdit="false">\n       </ion-input>\n    </ion-item>\n\n    <ion-item>\n       <ion-label stacked>Senha</ion-label>\n       <ion-input [(ngModel)]="senha"\n                   type="password"\n                   placeholder="senha"\n                   clearInput clearOnEdit="false">\n       </ion-input>\n    </ion-item>\n\n    <button ion-button full color="secondary" class="login-button" (click)="Login()">Login</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\login-admin\login-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_administrador_administrador__["a" /* AdministradorProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], LoginAdminPage);
    return LoginAdminPage;
}());

//# sourceMappingURL=login-admin.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turma_agenda_turma_agenda__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turma_reclamacao_turma_reclamacao__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastros_cadastros__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noticias_noticias__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__cadastros_cadastros__["a" /* CadastrosPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__turma_reclamacao_turma_reclamacao__["a" /* TurmaReclamacaoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__turma_agenda_turma_agenda__["a" /* TurmaAgendaPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__noticias_noticias__["a" /* NoticiasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Cadastros" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Reclamações" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Agendas" tabIcon="contacts"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Notícias" tabIcon="notifications"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaAgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agenda_agenda__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmaAgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmaAgendaPage = /** @class */ (function () {
    function TurmaAgendaPage(alertController, loadingCtrl, turmasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.turmasProvider = turmasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.turmas = new Array();
    }
    TurmaAgendaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.turmasProvider.getTurmas().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.turmas = objeto_retorno;
                _this.turmas = _this.turmas.filter(function (a) { return a.ativo == 1; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    TurmaAgendaPage.prototype.goAgendas = function (turma) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__agenda_agenda__["a" /* AgendaPage */], { turma: turma });
    };
    TurmaAgendaPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    TurmaAgendaPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    TurmaAgendaPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    TurmaAgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-turma-agenda',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-agenda\turma-agenda.html"*/'<!--\n  Generated template for the TurmaReclamacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Selecione a turma da agenda</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-item *ngFor="let item of turmas">\n          <ion-card padding (click)="goAgendas(item)">\n          <h2>Série: {{item.serie}}ª - {{item.letra}} </h2>\n        \n          <p  [hidden]="item.tipoSerie != 0">Pré-escolar</p>\n          <p  [hidden]="item.tipoSerie != 1">Ensino Fundamental</p>\n          <p  [hidden]="item.tipoSerie != 2">Ensino Médio</p>\n  \n          <p  [hidden]="item.turno != 1">Turno: Matutino</p>\n          <p  [hidden]="item.turno != 2">Turno: Vespertino</p>\n          <p  [hidden]="item.turno != 2">Turno: Noturno</p>\n  \n  \n          </ion-card>\n      </ion-item>\n  \n  \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-agenda\turma-agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], TurmaAgendaPage);
    return TurmaAgendaPage;
}());

//# sourceMappingURL=turma-agenda.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaReclamacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alunos_reclamacao_alunos_reclamacao__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmaReclamacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmaReclamacaoPage = /** @class */ (function () {
    function TurmaReclamacaoPage(alertController, loadingCtrl, turmasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.turmasProvider = turmasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.turmas = new Array();
    }
    TurmaReclamacaoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.turmasProvider.getTurmas().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.turmas = objeto_retorno;
                _this.turmas = _this.turmas.filter(function (a) { return a.ativo == 1; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    TurmaReclamacaoPage.prototype.goAlunos = function (turma) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__alunos_reclamacao_alunos_reclamacao__["a" /* AlunosReclamacaoPage */], { turma: turma });
    };
    TurmaReclamacaoPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    TurmaReclamacaoPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    TurmaReclamacaoPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    TurmaReclamacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-turma-reclamacao',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-reclamacao\turma-reclamacao.html"*/'<!--\n  Generated template for the TurmaReclamacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Selecione a turma do aluno</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of turmas">\n        <ion-card padding (click)="goAlunos(item)">\n        <h2>Série: {{item.serie}}ª - {{item.letra}} </h2>\n      \n        <p  [hidden]="item.tipoSerie != 0">Pré-escolar</p>\n        <p  [hidden]="item.tipoSerie != 1">Ensino Fundamental</p>\n        <p  [hidden]="item.tipoSerie != 2">Ensino Médio</p>\n\n        <p  [hidden]="item.turno != 1">Turno: Matutino</p>\n        <p  [hidden]="item.turno != 2">Turno: Vespertino</p>\n        <p  [hidden]="item.turno != 2">Turno: Noturno</p>\n\n\n        </ion-card>\n    </ion-item>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-reclamacao\turma-reclamacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], TurmaReclamacaoPage);
    return TurmaReclamacaoPage;
}());

//# sourceMappingURL=turma-reclamacao.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosReclamacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_aluno_aluno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_turma__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reclamacoes_reclamacoes__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlunosReclamacaoPage = /** @class */ (function () {
    function AlunosReclamacaoPage(turmasProvider, alertController, loadingCtrl, AlunoProvider, navCtrl, navParams) {
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.AlunoProvider = AlunoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alunos = new Array();
        this.turma = new __WEBPACK_IMPORTED_MODULE_4__Models_turma__["a" /* turma */]();
        this.turma = this.navParams.get("turma");
    }
    AlunosReclamacaoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.AlunoProvider.getAlunosByTurma(this.turma.idTurma).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, objeto_retorno;
            return __generator(this, function (_a) {
                this.FechaCarregamento();
                response = data;
                objeto_retorno = JSON.parse(response._body);
                if (response.status == 200) {
                    this.alunos = objeto_retorno;
                }
                else {
                    if (response.status == 500) {
                        this.exibirMensagem('Erro interno no servidor');
                    }
                    else {
                        this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                    }
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    AlunosReclamacaoPage.prototype.goReclamacao = function (aluno) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reclamacoes_reclamacoes__["a" /* ReclamacoesPage */], { aluno: aluno });
    };
    AlunosReclamacaoPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    AlunosReclamacaoPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    AlunosReclamacaoPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AlunosReclamacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-alunos',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\alunos-reclamacao\alunos-reclamacao.html"*/'<!--\n  Generated template for the AlunosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>alunos</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-item *ngFor="let item of alunos">\n          <ion-card padding (click)="goReclamacao(item)">\n            <h2>Aluno: {{item.nome}} </h2>\n          \n            <p> CPF: {{item.cpf}} </p>\n            <p> Telefone: {{item.telefone}} </p>\n\n          </ion-card>\n        </ion-item>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\alunos-reclamacao\alunos-reclamacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_aluno_aluno__["a" /* AlunoProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], AlunosReclamacaoPage);
    return AlunosReclamacaoPage;
}());

//# sourceMappingURL=alunos-reclamacao.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_reclamacao_cadastrar_reclamacao__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reclamacao_reclamacao__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_aluno__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ReclamacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReclamacoesPage = /** @class */ (function () {
    function ReclamacoesPage(alertController, loadingCtrl, reclamacaoProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.reclamacaoProvider = reclamacaoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reclamacoes = new Array();
        this.reclamacao = new __WEBPACK_IMPORTED_MODULE_3__Models_reclamacao__["a" /* reclamacao */]();
        this.aluno = new __WEBPACK_IMPORTED_MODULE_5__Models_aluno__["a" /* aluno */]();
        this.aluno = this.navParams.get("aluno");
    }
    ReclamacoesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.reclamacaoProvider.getReclamacaoByIdAluno(this.aluno.idAluno).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.reclamacoes = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    ReclamacoesPage.prototype.remover = function (reclamacao) {
    };
    ReclamacoesPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_reclamacao_cadastrar_reclamacao__["a" /* CadastrarReclamacaoPage */], { aluno: this.aluno });
    };
    ReclamacoesPage.prototype.goEditar = function (reclamacao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_reclamacao_cadastrar_reclamacao__["a" /* CadastrarReclamacaoPage */], { reclamacao: reclamacao, aluno: this.aluno });
    };
    ReclamacoesPage.prototype.delete = function (reclamacao) {
        var _this = this;
        this.Abrecarregamento("carreganddo");
        this.reclamacaoProvider.DeleteReclamacao(reclamacao).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.exibirMensagem("Delete realizado com sucesso!");
                _this.reclamacoes = _this.reclamacoes.filter(function (a) { return a.idReclamacao != reclamacao.idReclamacao; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
            console.log(error);
        });
    };
    ReclamacoesPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    ReclamacoesPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    ReclamacoesPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ReclamacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-reclamacoes',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\reclamacoes\reclamacoes.html"*/'<!--\n  Generated template for the ReclamacoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Reclamações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of reclamacoes">\n        <ion-card padding>\n          <h2>{{item.titulo}} </h2>\n        \n          <p> {{item.texto}} </p>\n         \n  \n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Reclamação</button>\n          </ion-row>\n  \n          <ion-row>\n            <button ion-button clear  (click)="delete(item)" color="secondary" >Remover Reclamação</button>  \n          </ion-row> \n          \n        </ion-card>\n    </ion-item>\n   \n  \n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\reclamacoes\reclamacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_reclamacao_reclamacao__["a" /* ReclamacaoProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ReclamacoesPage);
    return ReclamacoesPage;
}());

//# sourceMappingURL=reclamacoes.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_noticia_cadastrar_noticia__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_noticias_noticias__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_noticia__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(alertController, loadingCtrl, noticiasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.noticiasProvider = noticiasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticias = new Array();
        this.noticia = new __WEBPACK_IMPORTED_MODULE_4__Models_noticia__["a" /* noticia */]();
    }
    NoticiasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.noticiasProvider.getNoticias().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.noticias = objeto_retorno;
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    NoticiasPage.prototype.remover = function (agendas) {
    };
    NoticiasPage.prototype.goCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_noticia_cadastrar_noticia__["a" /* CadastrarNoticiaPage */]);
    };
    NoticiasPage.prototype.goEditar = function (noticia) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastrar_noticia_cadastrar_noticia__["a" /* CadastrarNoticiaPage */], { noticia: noticia });
    };
    NoticiasPage.prototype.delete = function (noticia) {
        var _this = this;
        this.Abrecarregamento("carreganddo");
        this.noticiasProvider.DeleteNoticias(noticia).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.exibirMensagem("Delete realizado com sucesso!");
                _this.noticias = _this.noticias.filter(function (a) { return a.idNoticia != noticia.idNoticia; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tetar se comunicar com o servidor');
            console.log(error);
        });
    };
    NoticiasPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    NoticiasPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    NoticiasPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\noticias\noticias.html"*/'<!--\n  Generated template for the NoticiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notícias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of noticias">\n        <ion-card padding>\n          <h2>{{item.titulo}} </h2>\n        \n          <p> {{item.texto}} </p>\n         \n  \n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Notícia</button>\n          </ion-row>\n  \n          <ion-row>\n            <button ion-button clear  (click)="delete(item)" color="secondary" >Remover Notícias</button>  \n          </ion-row> \n  \n         \n  \n        </ion-card>\n    </ion-item>\n   \n  \n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_noticias_noticias__["a" /* NoticiasProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AdministradorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdministradorProvider = /** @class */ (function () {
    function AdministradorProvider(http) {
        this.http = http;
        this.host = new __WEBPACK_IMPORTED_MODULE_6__Models_host__["a" /* host */]();
        console.log('Hello TurmasProvider Provider');
    }
    AdministradorProvider.prototype.Login = function (login, senha) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "administrador/login?login=" + login + "&senha=" + senha).timeout(8000);
        ;
    };
    AdministradorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AdministradorProvider);
    return AdministradorProvider;
}());

//# sourceMappingURL=administrador.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_professor_tab_professor__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginProfessorPage = /** @class */ (function () {
    function LoginProfessorPage(alertController, loadingCtrl, professorProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.professorProvider = professorProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginProfessorPage');
    };
    LoginProfessorPage.prototype.Login = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.professorProvider.Login(this.cpf, this.senha).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                if (objeto_retorno.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].professor = objeto_retorno;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tab_professor_tab_professor__["a" /* TabProfessorPage */]);
                }
                else {
                    _this.exibirMensagem('login ou senha incorretos');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    LoginProfessorPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    LoginProfessorPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    LoginProfessorPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-login-professor',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\login-professor\login-professor.html"*/'<!--\n  Generated template for the LoginProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login Professor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label stacked>CPF</ion-label>\n   \n        <ion-input [(ngModel)]="cpf"\n                    type="Tel"\n                    placeholder="Cpf"\n                    [brmasker]="{mask:\'000.000.000-00\', len:14}"\n                    clearInput clearOnEdit="false">\n        </ion-input>\n     </ion-item>\n   \n     <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input [(ngModel)]="senha"\n                    type="password"\n                    placeholder="senha"\n                    clearInput clearOnEdit="false">\n        </ion-input>\n     </ion-item>\n   \n     <button ion-button full color="secondary" class="login-button" (click)="Login()">Login</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\login-professor\login-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__["a" /* ProfessorProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], LoginProfessorPage);
    return LoginProfessorPage;
}());

//# sourceMappingURL=login-professor.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaAlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exibicao_alunos_turma_exibicao_alunos_turma__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmaAlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmaAlunosPage = /** @class */ (function () {
    function TurmaAlunosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professores = new Array();
    }
    TurmaAlunosPage.prototype.ionViewWillEnter = function () {
        this.professores = __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */].professor;
        console.log('ionViewDidLoad TurmaAlunosPage');
    };
    TurmaAlunosPage.prototype.goAlunos = function (professor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exibicao_alunos_turma_exibicao_alunos_turma__["a" /* ExibicaoAlunosTurmaPage */], { professor: professor });
    };
    TurmaAlunosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-turma-alunos',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-alunos\turma-alunos.html"*/'<!--\n  Generated template for the TurmaAlunosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>turmaAlunos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of professores">\n        <ion-card padding (click)="goAlunos(item)">\n\n        <h2>Série: {{item.turma.serie}}ª - {{item.turma.letra}} </h2>\n      \n        <p  [hidden]="item.turma.tipoSerie != 0">Pré-escolar</p>\n        <p  [hidden]="item.turma.tipoSerie != 1">Ensino Fundamental</p>\n        <p  [hidden]="item.turma.tipoSerie != 2">Ensino Médio</p>\n\n        <p  [hidden]="item.turma.turno != 1">Turno: Matutino</p>\n        <p  [hidden]="item.turma.turno != 2">Turno: Vespertino</p>\n        <p  [hidden]="item.turma.turno != 2">Turno: Noturno</p>\n\n        <ion-item *ngFor="let materia of item.materia">\n            Matéria: {{materia.nome}}\n        </ion-item>\n\n        </ion-card>\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-alunos\turma-alunos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], TurmaAlunosPage);
    return TurmaAlunosPage;
}());

//# sourceMappingURL=turma-alunos.js.map

/***/ }),
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminPageModule", function() { return LoginAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_admin__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginAdminPageModule = /** @class */ (function () {
    function LoginAdminPageModule() {
    }
    LoginAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_admin__["a" /* LoginAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_admin__["a" /* LoginAdminPage */]),
            ],
        })
    ], LoginAdminPageModule);
    return LoginAdminPageModule;
}());

//# sourceMappingURL=login-admin.module.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginProfessorPageModule", function() { return LoginProfessorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_professor__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginProfessorPageModule = /** @class */ (function () {
    function LoginProfessorPageModule() {
    }
    LoginProfessorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_professor__["a" /* LoginProfessorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_professor__["a" /* LoginProfessorPage */]),
            ],
        })
    ], LoginProfessorPageModule);
    return LoginProfessorPageModule;
}());

//# sourceMappingURL=login-professor.module.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponsavelPageModule", function() { return LoginResponsavelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_responsavel__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginResponsavelPageModule = /** @class */ (function () {
    function LoginResponsavelPageModule() {
    }
    LoginResponsavelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_responsavel__["a" /* LoginResponsavelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_responsavel__["a" /* LoginResponsavelPage */]),
            ],
        })
    ], LoginResponsavelPageModule);
    return LoginResponsavelPageModule;
}());

//# sourceMappingURL=login-responsavel.module.js.map

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasPageModule", function() { return MateriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MateriasPageModule = /** @class */ (function () {
    function MateriasPageModule() {
    }
    MateriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__materias__["a" /* MateriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__materias__["a" /* MateriasPage */]),
            ],
        })
    ], MateriasPageModule);
    return MateriasPageModule;
}());

//# sourceMappingURL=materias.module.js.map

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasPageModule = /** @class */ (function () {
    function NotasPageModule() {
    }
    NotasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */]),
            ],
        })
    ], NotasPageModule);
    return NotasPageModule;
}());

//# sourceMappingURL=notas.module.js.map

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageModule", function() { return NoticiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticiasPageModule = /** @class */ (function () {
    function NoticiasPageModule() {
    }
    NoticiasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* NoticiasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* NoticiasPage */]),
            ],
        })
    ], NoticiasPageModule);
    return NoticiasPageModule;
}());

//# sourceMappingURL=noticias.module.js.map

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pais__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaisPageModule = /** @class */ (function () {
    function PaisPageModule() {
    }
    PaisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pais__["a" /* PaisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pais__["a" /* PaisPage */]),
            ],
        })
    ], PaisPageModule);
    return PaisPageModule;
}());

//# sourceMappingURL=pais.module.js.map

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessoresPageModule", function() { return ProfessoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professores__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfessoresPageModule = /** @class */ (function () {
    function ProfessoresPageModule() {
    }
    ProfessoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__professores__["a" /* ProfessoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__professores__["a" /* ProfessoresPage */]),
            ],
        })
    ], ProfessoresPageModule);
    return ProfessoresPageModule;
}());

//# sourceMappingURL=professores.module.js.map

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvasPageModule", function() { return ProvasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provas__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProvasPageModule = /** @class */ (function () {
    function ProvasPageModule() {
    }
    ProvasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__provas__["a" /* ProvasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provas__["a" /* ProvasPage */]),
            ],
        })
    ], ProvasPageModule);
    return ProvasPageModule;
}());

//# sourceMappingURL=provas.module.js.map

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReclamacoesPageModule", function() { return ReclamacoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reclamacoes__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReclamacoesPageModule = /** @class */ (function () {
    function ReclamacoesPageModule() {
    }
    ReclamacoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reclamacoes__["a" /* ReclamacoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reclamacoes__["a" /* ReclamacoesPage */]),
            ],
        })
    ], ReclamacoesPageModule);
    return ReclamacoesPageModule;
}());

//# sourceMappingURL=reclamacoes.module.js.map

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaAlunosPageModule", function() { return TurmaAlunosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_alunos__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmaAlunosPageModule = /** @class */ (function () {
    function TurmaAlunosPageModule() {
    }
    TurmaAlunosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turma_alunos__["a" /* TurmaAlunosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turma_alunos__["a" /* TurmaAlunosPage */]),
            ],
        })
    ], TurmaAlunosPageModule);
    return TurmaAlunosPageModule;
}());

//# sourceMappingURL=turma-alunos.module.js.map

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaAgendaPageModule", function() { return TurmaAgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_agenda__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmaAgendaPageModule = /** @class */ (function () {
    function TurmaAgendaPageModule() {
    }
    TurmaAgendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turma_agenda__["a" /* TurmaAgendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turma_agenda__["a" /* TurmaAgendaPage */]),
            ],
        })
    ], TurmaAgendaPageModule);
    return TurmaAgendaPageModule;
}());

//# sourceMappingURL=turma-agenda.module.js.map

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaMateriaPageModule", function() { return TurmaMateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_materia__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmaMateriaPageModule = /** @class */ (function () {
    function TurmaMateriaPageModule() {
    }
    TurmaMateriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turma_materia__["a" /* TurmaMateriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turma_materia__["a" /* TurmaMateriaPage */]),
            ],
        })
    ], TurmaMateriaPageModule);
    return TurmaMateriaPageModule;
}());

//# sourceMappingURL=turma-materia.module.js.map

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaNoticiaPageModule", function() { return TurmaNoticiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_noticia__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmaNoticiaPageModule = /** @class */ (function () {
    function TurmaNoticiaPageModule() {
    }
    TurmaNoticiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turma_noticia__["a" /* TurmaNoticiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turma_noticia__["a" /* TurmaNoticiaPage */]),
            ],
        })
    ], TurmaNoticiaPageModule);
    return TurmaNoticiaPageModule;
}());

//# sourceMappingURL=turma-noticia.module.js.map

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosReclamacaoPageModule", function() { return AlunosReclamacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos_reclamacao__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlunosReclamacaoPageModule = /** @class */ (function () {
    function AlunosReclamacaoPageModule() {
    }
    AlunosReclamacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alunos_reclamacao__["a" /* AlunosReclamacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alunos_reclamacao__["a" /* AlunosReclamacaoPage */]),
            ],
        })
    ], AlunosReclamacaoPageModule);
    return AlunosReclamacaoPageModule;
}());

//# sourceMappingURL=alunos-reclamacao.module.js.map

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaPaisPageModule", function() { return TurmaPaisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_pais__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmaPaisPageModule = /** @class */ (function () {
    function TurmaPaisPageModule() {
    }
    TurmaPaisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turma_pais__["a" /* TurmaPaisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turma_pais__["a" /* TurmaPaisPage */]),
            ],
        })
    ], TurmaPaisPageModule);
    return TurmaPaisPageModule;
}());

//# sourceMappingURL=turma-pais.module.js.map

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaReclamacaoPageModule", function() { return TurmaReclamacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_reclamacao__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmaReclamacaoPageModule = /** @class */ (function () {
    function TurmaReclamacaoPageModule() {
    }
    TurmaReclamacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turma_reclamacao__["a" /* TurmaReclamacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turma_reclamacao__["a" /* TurmaReclamacaoPage */]),
            ],
        })
    ], TurmaReclamacaoPageModule);
    return TurmaReclamacaoPageModule;
}());

//# sourceMappingURL=turma-reclamacao.module.js.map

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmasPageModule", function() { return TurmasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TurmasPageModule = /** @class */ (function () {
    function TurmasPageModule() {
    }
    TurmasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__turmas__["a" /* TurmasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__turmas__["a" /* TurmasPage */]),
            ],
        })
    ], TurmasPageModule);
    return TurmasPageModule;
}());

//# sourceMappingURL=turmas.module.js.map

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VincularProfessorPageModule", function() { return VincularProfessorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vincular_professor__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VincularProfessorPageModule = /** @class */ (function () {
    function VincularProfessorPageModule() {
    }
    VincularProfessorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vincular_professor__["a" /* VincularProfessorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vincular_professor__["a" /* VincularProfessorPage */]),
            ],
        })
    ], VincularProfessorPageModule);
    return VincularProfessorPageModule;
}());

//# sourceMappingURL=vincular-professor.module.js.map

/***/ }),
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(323);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cadastrar_nota_cadastrar_nota_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_exibicao_materias_exibicao_materias_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_exibicao_alunos_turma_exibicao_alunos_turma_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_turma_alunos_turma_alunos_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_provas_provas_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notas_notas_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_exibicao_noticias_exibicao_noticias_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_filhos_filhos_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_responsavel_login_responsavel_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_professor_login_professor_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_noticia_cadastrar_noticia_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cadastrar_agenda_cadastrar_agenda_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_turma_agenda_turma_agenda_module__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_reclamacao_cadastrar_reclamacao_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alunos_reclamacao_alunos_reclamacao_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reclamacoes_reclamacoes_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_turma_reclamacao_turma_reclamacao_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_turma_noticia_turma_noticia_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_vincular_professor_vincular_professor_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cadastrar_professor_cadastrar_professor_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_professores_professores_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cadastar_materia_cadastar_materia_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_materias_materias_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_turma_materia_turma_materia_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cadastar_aluno_cadastar_aluno_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_alunos_alunos_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cadastrar_pai_cadastrar_pai_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pais_pais_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_turma_pais_turma_pais_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cadastrar_turmas_cadastrar_turmas_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_turmas_turmas_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_agenda_agenda_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_noticias_noticias_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_cadastros_cadastros_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_about_about__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_contact_contact__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_home_home__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_tab_responsavel_tab_responsavel__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_tab_professor_tab_professor__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_turmas_turmas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_aluno_aluno__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_pais_pais__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_materia_materia__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_professor_professor__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_materia_turma_materia_turma__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_professor_materia_professor_materia__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_reclamacao_reclamacao__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_agenda_agenda__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_noticias_noticias__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_login_admin_login_admin_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_administrador_administrador__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_exibicao_reclamacoes_exibicao_reclamacoes_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_exibicao_agendas_exibicao_agendas_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_provas_provas__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_35__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_39__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_tab_responsavel_tab_responsavel__["a" /* TabResponsavelPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tab_professor_tab_professor__["a" /* TabProfessorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_34__pages_cadastros_cadastros_module__["CadastrosPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_noticias_noticias_module__["NoticiasPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_agenda_agenda_module__["AgendaPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_turmas_turmas_module__["TurmasPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_cadastrar_turmas_cadastrar_turmas_module__["CadastrarTurmasPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_turma_pais_turma_pais_module__["TurmaPaisPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_pais_pais_module__["PaisPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastrar_pai_cadastrar_pai_module__["CadastrarPaiPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_alunos_alunos_module__["AlunosPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_cadastar_aluno_cadastar_aluno_module__["CadastarAlunoPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_turma_materia_turma_materia_module__["TurmaMateriaPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_materias_materias_module__["MateriasPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_cadastar_materia_cadastar_materia_module__["CadastarMateriaPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_professores_professores_module__["ProfessoresPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_cadastrar_professor_cadastrar_professor_module__["CadastrarProfessorPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_vincular_professor_vincular_professor_module__["VincularProfessorPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_turma_noticia_turma_noticia_module__["TurmaNoticiaPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_turma_reclamacao_turma_reclamacao_module__["TurmaReclamacaoPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_reclamacoes_reclamacoes_module__["ReclamacoesPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_alunos_reclamacao_alunos_reclamacao_module__["AlunosReclamacaoPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_reclamacao_cadastrar_reclamacao_module__["CadastrarReclamacaoPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_turma_agenda_turma_agenda_module__["TurmaAgendaPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadastrar_agenda_cadastrar_agenda_module__["CadastrarAgendaPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_noticia_cadastrar_noticia_module__["CadastrarNoticiaPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_professor_login_professor_module__["LoginProfessorPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_login_admin_login_admin_module__["LoginAdminPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_responsavel_login_responsavel_module__["LoginResponsavelPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_filhos_filhos_module__["FilhosPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_exibicao_noticias_exibicao_noticias_module__["ExibicaoNoticiasPageModule"],
                __WEBPACK_IMPORTED_MODULE_60__pages_exibicao_reclamacoes_exibicao_reclamacoes_module__["ExibicaoReclamacoesPageModule"],
                __WEBPACK_IMPORTED_MODULE_61__pages_exibicao_agendas_exibicao_agendas_module__["ExibicaoAgendasPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_notas_notas_module__["NotasPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_provas_provas_module__["ProvasPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_turma_alunos_turma_alunos_module__["TurmaAlunosPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_exibicao_alunos_turma_exibicao_alunos_turma_module__["ExibicaoAlunosTurmaPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_cadastrar_nota_cadastrar_nota_module__["CadastrarNotaPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_exibicao_materias_exibicao_materias_module__["ExibicaoMateriasPageModule"],
                __WEBPACK_IMPORTED_MODULE_37_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alunos/alunos.module#AlunosPageModule', name: 'AlunosPage', segment: 'alunos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastar-aluno/cadastar-aluno.module#CadastarAlunoPageModule', name: 'CadastarAlunoPage', segment: 'cadastar-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastar-materia/cadastar-materia.module#CadastarMateriaPageModule', name: 'CadastarMateriaPage', segment: 'cadastar-materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-agenda/cadastrar-agenda.module#CadastrarAgendaPageModule', name: 'CadastrarAgendaPage', segment: 'cadastrar-agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-nota/cadastrar-nota.module#CadastrarNotaPageModule', name: 'CadastrarNotaPage', segment: 'cadastrar-nota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-noticia/cadastrar-noticia.module#CadastrarNoticiaPageModule', name: 'CadastrarNoticiaPage', segment: 'cadastrar-noticia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-pai/cadastrar-pai.module#CadastrarPaiPageModule', name: 'CadastrarPaiPage', segment: 'cadastrar-pai', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-professor/cadastrar-professor.module#CadastrarProfessorPageModule', name: 'CadastrarProfessorPage', segment: 'cadastrar-professor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-reclamacao/cadastrar-reclamacao.module#CadastrarReclamacaoPageModule', name: 'CadastrarReclamacaoPage', segment: 'cadastrar-reclamacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-turmas/cadastrar-turmas.module#CadastrarTurmasPageModule', name: 'CadastrarTurmasPage', segment: 'cadastrar-turmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastros/cadastros.module#CadastrosPageModule', name: 'CadastrosPage', segment: 'cadastros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibicao-agendas/exibicao-agendas.module#ExibicaoAgendasPageModule', name: 'ExibicaoAgendasPage', segment: 'exibicao-agendas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibicao-alunos-turma/exibicao-alunos-turma.module#ExibicaoAlunosTurmaPageModule', name: 'ExibicaoAlunosTurmaPage', segment: 'exibicao-alunos-turma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibicao-materias/exibicao-materias.module#ExibicaoMateriasPageModule', name: 'ExibicaoMateriasPage', segment: 'exibicao-materias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibicao-reclamacoes/exibicao-reclamacoes.module#ExibicaoReclamacoesPageModule', name: 'ExibicaoReclamacoesPage', segment: 'exibicao-reclamacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibicao-noticias/exibicao-noticias.module#ExibicaoNoticiasPageModule', name: 'ExibicaoNoticiasPage', segment: 'exibicao-noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filhos/filhos.module#FilhosPageModule', name: 'FilhosPage', segment: 'filhos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-admin/login-admin.module#LoginAdminPageModule', name: 'LoginAdminPage', segment: 'login-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-professor/login-professor.module#LoginProfessorPageModule', name: 'LoginProfessorPage', segment: 'login-professor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-responsavel/login-responsavel.module#LoginResponsavelPageModule', name: 'LoginResponsavelPage', segment: 'login-responsavel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materias/materias.module#MateriasPageModule', name: 'MateriasPage', segment: 'materias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pais/pais.module#PaisPageModule', name: 'PaisPage', segment: 'pais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/professores/professores.module#ProfessoresPageModule', name: 'ProfessoresPage', segment: 'professores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provas/provas.module#ProvasPageModule', name: 'ProvasPage', segment: 'provas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reclamacoes/reclamacoes.module#ReclamacoesPageModule', name: 'ReclamacoesPage', segment: 'reclamacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-professor/tab-professor.module#TabProfessorPageModule', name: 'TabProfessorPage', segment: 'tab-professor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-responsavel/tab-responsavel.module#TabResponsavelPageModule', name: 'TabResponsavelPage', segment: 'tab-responsavel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-alunos/turma-alunos.module#TurmaAlunosPageModule', name: 'TurmaAlunosPage', segment: 'turma-alunos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-agenda/turma-agenda.module#TurmaAgendaPageModule', name: 'TurmaAgendaPage', segment: 'turma-agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-materia/turma-materia.module#TurmaMateriaPageModule', name: 'TurmaMateriaPage', segment: 'turma-materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-noticia/turma-noticia.module#TurmaNoticiaPageModule', name: 'TurmaNoticiaPage', segment: 'turma-noticia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alunos-reclamacao/alunos-reclamacao.module#AlunosReclamacaoPageModule', name: 'AlunosReclamacaoPage', segment: 'alunos-reclamacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-pais/turma-pais.module#TurmaPaisPageModule', name: 'TurmaPaisPage', segment: 'turma-pais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-reclamacao/turma-reclamacao.module#TurmaReclamacaoPageModule', name: 'TurmaReclamacaoPage', segment: 'turma-reclamacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turmas/turmas.module#TurmasPageModule', name: 'TurmasPage', segment: 'turmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vincular-professor/vincular-professor.module#VincularProfessorPageModule', name: 'VincularProfessorPage', segment: 'vincular-professor', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_37_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_39__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_tab_responsavel_tab_responsavel__["a" /* TabResponsavelPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tab_professor_tab_professor__["a" /* TabProfessorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_35__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_37_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_47__providers_turmas_turmas__["a" /* TurmasProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_aluno_aluno__["a" /* AlunoProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_pais_pais__["a" /* PaisProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_materia_materia__["a" /* MateriaProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_professor_professor__["a" /* ProfessorProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_materia_turma_materia_turma__["a" /* MateriaTurmaProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_professor_materia_professor_materia__["a" /* ProfessorMateriaProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_reclamacao_reclamacao__["a" /* ReclamacaoProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_agenda_agenda__["a" /* AgendaProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_noticias_noticias__["a" /* NoticiasProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_administrador_administrador__["a" /* AdministradorProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_provas_provas__["a" /* ProvasProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return materiaTurma; });
var materiaTurma = /** @class */ (function () {
    function materiaTurma() {
    }
    return materiaTurma;
}());

//# sourceMappingURL=materiaTurma.js.map

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return professorMateria; });
var professorMateria = /** @class */ (function () {
    function professorMateria() {
    }
    return professorMateria;
}());

//# sourceMappingURL=professorMateria.js.map

/***/ }),
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotasPage');
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notas',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\notas\notas.html"*/'<!--\n  Generated template for the NotasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>notas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\notas\notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProvasPage = /** @class */ (function () {
    function ProvasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProvasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProvasPage');
    };
    ProvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-provas',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\provas\provas.html"*/'<!--\n  Generated template for the ProvasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>provas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\provas\provas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProvasPage);
    return ProvasPage;
}());

//# sourceMappingURL=provas.js.map

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaNoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TurmaNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmaNoticiaPage = /** @class */ (function () {
    function TurmaNoticiaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TurmaNoticiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TurmaNoticiaPage');
    };
    TurmaNoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-turma-noticia',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-noticia\turma-noticia.html"*/'<!--\n  Generated template for the TurmaNoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>turmaNoticia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of turmas">\n        <ion-card padding (click)="goMaterias(item)">\n        <h2>Série: {{item.serie}}ª - {{item.letra}} </h2>\n      \n        <p  [hidden]="item.tipoSerie != 0">Pré-escolar</p>\n        <p  [hidden]="item.tipoSerie != 1">Ensino Fundamental</p>\n        <p  [hidden]="item.tipoSerie != 2">Ensino Médio</p>\n\n        <p  [hidden]="item.turno != 1">Turno: Matutino</p>\n        <p  [hidden]="item.turno != 2">Turno: Vespertino</p>\n        <p  [hidden]="item.turno != 2">Turno: Noturno</p>\n\n\n        </ion-card>\n    </ion-item>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-noticia\turma-noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TurmaNoticiaPage);
    return TurmaNoticiaPage;
}());

//# sourceMappingURL=turma-noticia.js.map

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaPaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pais_pais__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TurmaPaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmaPaisPage = /** @class */ (function () {
    function TurmaPaisPage(alertController, loadingCtrl, turmasProvider, navCtrl, navParams) {
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.turmasProvider = turmasProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.turmas = new Array();
    }
    TurmaPaisPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.turmasProvider.getTurmas().subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.turmas = objeto_retorno;
                _this.turmas = _this.turmas.filter(function (a) { return a.ativo == 1; });
            }
            else {
                if (response.status == 500) {
                    _this.exibirMensagem('Erro interno no servidor');
                }
                else {
                    _this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
            }
        }, function (error) {
            _this.FechaCarregamento();
            _this.exibirMensagem('falha ao tentar se comunicar com o servidor');
            console.log(error);
        });
    };
    TurmaPaisPage.prototype.goCadastroPai = function (turma) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pais_pais__["a" /* PaisPage */], { turma: turma });
    };
    TurmaPaisPage.prototype.Abrecarregamento = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
        });
        this.loader.present();
    };
    TurmaPaisPage.prototype.FechaCarregamento = function () {
        this.loader.dismiss();
    };
    TurmaPaisPage.prototype.exibirMensagem = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    TurmaPaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-turma-pais',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-pais\turma-pais.html"*/'<!--\n  Generated template for the TurmaPaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Selecione a turma do aluno.</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of turmas">\n        <ion-card padding (click)="goCadastroPai(item)">\n        <h2>Série: {{item.serie}}ª - {{item.letra}} </h2>\n      \n        <p  [hidden]="item.tipoSerie != 0">Pré-escolar</p>\n        <p  [hidden]="item.tipoSerie != 1">Ensino Fundamental</p>\n        <p  [hidden]="item.tipoSerie != 2">Ensino Médio</p>\n\n        <p  [hidden]="item.turno != 1">Turno: Matutino</p>\n        <p  [hidden]="item.turno != 2">Turno: Vespertino</p>\n        <p  [hidden]="item.turno != 2">Turno: Noturno</p>\n\n\n        </ion-card>\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\turma-pais\turma-pais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], TurmaPaisPage);
    return TurmaPaisPage;
}());

//# sourceMappingURL=turma-pais.js.map

/***/ }),
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })
],[302]);
//# sourceMappingURL=main.js.map