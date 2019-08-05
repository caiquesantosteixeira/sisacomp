webpackJsonp([0],{

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarProfessorPageModule", function() { return CadastrarProfessorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__ = __webpack_require__(324);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_professor__["a" /* CadastrarProfessorPage */]),
            ],
        })
    ], CadastrarProfessorPageModule);
    return CadastrarProfessorPageModule;
}());

//# sourceMappingURL=cadastrar-professor.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda.module": [
		172
	],
	"../pages/alunos/alunos.module": [
		174
	],
	"../pages/cadastar-aluno/cadastar-aluno.module": [
		177
	],
	"../pages/cadastar-materia/cadastar-materia.module": [
		180
	],
	"../pages/cadastrar-pai/cadastrar-pai.module": [
		183
	],
	"../pages/cadastrar-professor/cadastrar-professor.module": [
		130
	],
	"../pages/cadastrar-turmas/cadastrar-turmas.module": [
		184
	],
	"../pages/cadastros/cadastros.module": [
		186
	],
	"../pages/materias/materias.module": [
		192
	],
	"../pages/noticias/noticias.module": [
		193
	],
	"../pages/pais/pais.module": [
		195
	],
	"../pages/professores/professores.module": [
		196
	],
	"../pages/turma-materia/turma-materia.module": [
		197
	],
	"../pages/turma-pais/turma-pais.module": [
		198
	],
	"../pages/turmas/turmas.module": [
		199
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
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agenda__ = __webpack_require__(173);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function AgendaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\agenda\agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>agenda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\agenda\agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosPageModule", function() { return AlunosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos__ = __webpack_require__(87);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastarAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_aluno_aluno__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_aluno__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_responsavel__ = __webpack_require__(89);
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastarAlunoPageModule", function() { return CadastarAlunoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastar_aluno__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(90);
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastarMateriaPageModule", function() { return CadastarMateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastar_materia__ = __webpack_require__(181);
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastarMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_materia_materia__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_materia__ = __webpack_require__(182);
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
    function CadastarMateriaPage(turmasProvider, alertController, loadingCtrl, materiaProvider, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.turmasProvider = turmasProvider;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.materiaProvider = materiaProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materia = new __WEBPACK_IMPORTED_MODULE_5__Models_materia__["a" /* materia */]();
        this.errorNome = false;
        this.errorTurma = false;
        this.turmas = new Array();
        this.isMateria = new __WEBPACK_IMPORTED_MODULE_5__Models_materia__["a" /* materia */]();
        this.isMateria = this.navParams.get("materia");
        var turma = this.navParams.get("turma");
        this.cadastroForm = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
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
                    if (this.isMateria == undefined) {
                        this.cadastroForm = this.formBuilder.group({
                            nome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            idTurma: [this.turmas[0].idTurma, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
                        });
                        this.titulo = "Cadastrar Aluno";
                    }
                    else {
                        this.cadastroForm = this.formBuilder.group({
                            nome: [this.isMateria.nome, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                            idTurma: [turma.idTurma, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
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
    CadastarMateriaPage.prototype.getTurmas = function () {
    };
    CadastarMateriaPage.prototype.cadastrar = function () {
        var _this = this;
        var _a = this.cadastroForm.controls, nome = _a.nome, idTurma = _a.idTurma;
        if (!this.cadastroForm.valid) {
            if (!nome.valid) {
                this.errorNome = true;
                this.messageNome = "Ops! Nome inválido";
            }
            else {
                this.messageNome = "";
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
            this.materia.nome = nome.value;
            this.materia.idTurma = idTurma.value;
            this.Abrecarregamento("carreganddo");
            if (this.isMateria == undefined) {
                this.materia.ativo = 1;
                this.materiaProvider.postMateria(this.materia).subscribe(function (data) {
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
                this.materia.idMateria = this.isMateria.idMateria;
                this.materiaProvider.putMateria(this.materia).subscribe(function (data) {
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-cadastar-materia',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastar-materia\cadastar-materia.html"*/'<!--\n  Generated template for the CadastarAlunoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastrar Matéria</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n       <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input ([ngModel])="nome"\n                     formControlName="nome"\n                     type="text"\n                     placeholder="Nome"\n                     maxlength="70"\n                     clearInput clearOnEdit="false">\n        </ion-input>\n      </ion-item>\n\n      <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n\n    \n        <ion-item>\n            <ion-label>Turma</ion-label>\n            <ion-select ([ngModel])="idTurma " formControlName="idTurma" clearInput clearOnEdit="false" interface="action-sheet" >\n              \n              <ion-option *ngFor="let m of turmas; let i = index" value="{{m.idTurma.toString()}}" >{{m.serie}} - {{m.letra}} {{m.turnoTexto}} - {{m.tipoSerieTexto}} </ion-option>\n            </ion-select>\n        </ion-item> \n    \n        \n        <h6 *ngIf="errorSenha" class="error"> {{messageTurma}}</h6>\n\n\n        <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}</button>\n        <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}}</button>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastar-materia\cadastar-materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], CadastarMateriaPage);
    return CadastarMateriaPage;
}());

//# sourceMappingURL=cadastar-materia.js.map

/***/ }),

/***/ 182:
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

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarPaiPageModule", function() { return CadastrarPaiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_pai__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(90);
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarTurmasPageModule", function() { return CadastrarTurmasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_turmas__ = __webpack_require__(185);
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

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarTurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turmas_turmas__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_turma__ = __webpack_require__(54);
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrosPageModule", function() { return CadastrosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastros__ = __webpack_require__(187);
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turma_materia_turma_materia__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pais_pais__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas_turmas__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__turmas_turmas__["a" /* TurmasPage */]);
    };
    CadastrosPage.prototype.goTurmasPais = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pais_pais__["a" /* PaisPage */]);
    };
    CadastrosPage.prototype.goMaterias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__turma_materia_turma_materia__["a" /* TurmaMateriaPage */]);
    };
    CadastrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-cadastros',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastros\cadastros.html"*/'<!--\n  Generated template for the CadastrosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" outline class ="largura" (click)="goTurmas()" >Turmas</button> <br>\n  <button ion-button color="primary" outline class ="largura" (click)="goTurmasPais()">Alunos/pais</button><br>\n  <button ion-button color="primary" outline class ="largura" (click)="goMaterias()">Matérias</button><br>\n  <button ion-button color="primary" outline class ="largura">Professor</button><br>\n  <button ion-button color="primary" outline class ="largura">Provas</button><br>\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastros\cadastros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], CadastrosPage);
    return CadastrosPage;
}());

//# sourceMappingURL=cadastros.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaMateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__materias_materias__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(22);
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__professores_professores__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastar_materia_cadastar_materia__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_materia_materia__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_turma__ = __webpack_require__(54);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__professores_professores__["a" /* ProfessoresPage */], { materia: materia, turma: this.turma });
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
            selector: 'page-materias',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\materias\materias.html"*/'<!--\n  Generated template for the MateriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>materias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item *ngFor="let item of materias">\n        <ion-card padding>\n          <h2>Matéria: {{item.nome}} </h2>\n          <p> Turma: {{turma.serie}}ª {{turma.letra}} </p>\n\n          <ion-row>\n            <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Matéria</button>\n          </ion-row>\n          \n          <ion-row>\n              <button ion-button clear  (click)="goProfessores(item)" color="secondary">Professores</button>\n          </ion-row>\n\n          <ion-row>\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n            <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>   \n          </ion-row> \n\n         \n\n        </ion-card>\n      </ion-item>\n   \n\n  <ion-fab bottom right>\n      \n    <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n  \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\materias\materias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_materia_materia__["a" /* MateriaProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_turmas_turmas__["a" /* TurmasProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], MateriasPage);
    return MateriasPage;
}());

//# sourceMappingURL=materias.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Models_professor__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos_alunos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_pai_cadastrar_pai__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_turma__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Models_materia__ = __webpack_require__(182);
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
        this.turma = new __WEBPACK_IMPORTED_MODULE_6__Models_turma__["a" /* turma */]();
        this.materia = new __WEBPACK_IMPORTED_MODULE_7__Models_materia__["a" /* materia */]();
        this.professor = new __WEBPACK_IMPORTED_MODULE_0__Models_professor__["a" /* professor */]();
        this.turma = this.navParams.get("turma");
        this.materia = this.navParams.get("materia");
    }
    ProfessoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Abrecarregamento("carreagando");
        this.professorProvider.getProfessor(this.materia.idMateria).subscribe(function (data) {
            _this.FechaCarregamento();
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            if (response.status == 200) {
                _this.professor = objeto_retorno;
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
        this.professorProvider.putPai(this.professor).subscribe(function (data) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_pai_cadastrar_pai__["a" /* CadastrarPaiPage */]);
    };
    ProfessoresPage.prototype.goEditar = function (pai) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_pai_cadastrar_pai__["a" /* CadastrarPaiPage */], { pai: pai });
    };
    ProfessoresPage.prototype.goAlunos = function (pai) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alunos_alunos__["a" /* AlunosPage */], { pai: pai });
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-professores',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\professores\professores.html"*/'<!--\n  Generated template for the ProfessoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>professores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   \n\n  <ion-item *ngFor="let item of professores">\n      <ion-card padding>\n        <h2>Responsável: {{item.nome}} </h2>\n      \n        <p> CPF: {{item.cpf}} </p>\n        <p> Telefone: {{item.telefone}} </p>\n\n        <ion-row>\n          <button ion-button clear  (click)="goEditar(item)" color="secondary">Editar Professor</button>\n        </ion-row>\n\n        <ion-row>\n          <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 0" >Ativar</button>    \n\n          <button ion-button clear  (click)=" ativar(item)" color="secondary" *ngIf="item.ativo == 1">Desativar</button>   \n        </ion-row> \n\n       \n\n      </ion-card>\n    </ion-item>\n \n\n<ion-fab bottom right>\n    \n  <button ion-fab  color="secondary"  (click) = "goCadastro()"><ion-icon name="add"></ion-icon></button>\n\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\professores\professores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__["a" /* ProfessorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_professor_professor__["a" /* ProfessorProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object])
    ], ProfessoresPage);
    return ProfessoresPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=professores.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(47);
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
    ProfessorProvider.prototype.getProfessor = function (idMateria) {
        return this.http.get(this.host.ip + this.host.caminhoClasses + "professor/GetProfessor?idMateria=" + idMateria).timeout(8000);
        ;
    };
    ProfessorProvider.prototype.postPai = function (professor) {
        var link = this.host.ip + this.host.caminhoClasses + "professor";
        var data = JSON.stringify(professor);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(link, data, { headers: headers }).timeout(8000);
    };
    ProfessorProvider.prototype.putPai = function (professor) {
        var link = this.host.ip + this.host.caminhoClasses + "professor";
        var data = JSON.stringify(professor);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, data, { headers: headers }).timeout(8000);
    };
    ProfessorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ProfessorProvider);
    return ProfessorProvider;
    var _a;
}());

//# sourceMappingURL=professor.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasPageModule", function() { return MateriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materias__ = __webpack_require__(189);
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageModule", function() { return NoticiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias__ = __webpack_require__(194);
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function NoticiasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\noticias\noticias.html"*/'<!--\n  Generated template for the NoticiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>noticias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pais__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(90);
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessoresPageModule", function() { return ProfessoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professores__ = __webpack_require__(190);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaMateriaPageModule", function() { return TurmaMateriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_materia__ = __webpack_require__(188);
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaPaisPageModule", function() { return TurmaPaisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_pais__ = __webpack_require__(306);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmasPageModule", function() { return TurmasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas__ = __webpack_require__(94);
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(47);
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agenda_agenda__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noticias_noticias__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastros_cadastros__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__noticias_noticias__["a" /* NoticiasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__agenda_agenda__["a" /* AgendaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Cadastros" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Notícias" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Agenda" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cadastrar_professor_cadastrar_professor_module__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_professores_professores_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastar_materia_cadastar_materia_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_materias_materias_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_turma_materia_turma_materia_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastar_aluno_cadastar_aluno_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_alunos_alunos_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastrar_pai_cadastrar_pai_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pais_pais_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_turma_pais_turma_pais_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cadastrar_turmas_cadastrar_turmas_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_turmas_turmas_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_agenda_agenda_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_noticias_noticias_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cadastros_cadastros_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_about_about__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_contact_contact__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_aluno_aluno__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_pais_pais__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_materia_materia__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_professor_professor__ = __webpack_require__(191);
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
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastros_cadastros_module__["CadastrosPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_noticias_noticias_module__["NoticiasPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_agenda_agenda_module__["AgendaPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_turmas_turmas_module__["TurmasPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadastrar_turmas_cadastrar_turmas_module__["CadastrarTurmasPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_turma_pais_turma_pais_module__["TurmaPaisPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_pais_pais_module__["PaisPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastrar_pai_cadastrar_pai_module__["CadastrarPaiPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_alunos_alunos_module__["AlunosPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_cadastar_aluno_cadastar_aluno_module__["CadastarAlunoPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_turma_materia_turma_materia_module__["TurmaMateriaPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_materias_materias_module__["MateriasPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_cadastar_materia_cadastar_materia_module__["CadastarMateriaPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_professores_professores_module__["ProfessoresPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_cadastrar_professor_cadastrar_professor_module__["CadastrarProfessorPageModule"],
                __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alunos/alunos.module#AlunosPageModule', name: 'AlunosPage', segment: 'alunos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastar-aluno/cadastar-aluno.module#CadastarAlunoPageModule', name: 'CadastarAlunoPage', segment: 'cadastar-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastar-materia/cadastar-materia.module#CadastarMateriaPageModule', name: 'CadastarMateriaPage', segment: 'cadastar-materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-pai/cadastrar-pai.module#CadastrarPaiPageModule', name: 'CadastrarPaiPage', segment: 'cadastrar-pai', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-professor/cadastrar-professor.module#CadastrarProfessorPageModule', name: 'CadastrarProfessorPage', segment: 'cadastrar-professor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-turmas/cadastrar-turmas.module#CadastrarTurmasPageModule', name: 'CadastrarTurmasPage', segment: 'cadastrar-turmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastros/cadastros.module#CadastrosPageModule', name: 'CadastrosPage', segment: 'cadastros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materias/materias.module#MateriasPageModule', name: 'MateriasPage', segment: 'materias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pais/pais.module#PaisPageModule', name: 'PaisPage', segment: 'pais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/professores/professores.module#ProfessoresPageModule', name: 'ProfessoresPage', segment: 'professores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-materia/turma-materia.module#TurmaMateriaPageModule', name: 'TurmaMateriaPage', segment: 'turma-materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turma-pais/turma-pais.module#TurmaPaisPageModule', name: 'TurmaPaisPage', segment: 'turma-pais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turmas/turmas.module#TurmasPageModule', name: 'TurmasPage', segment: 'turmas', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_16__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_turmas_turmas__["a" /* TurmasProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_aluno_aluno__["a" /* AlunoProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_pais_pais__["a" /* PaisProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_materia_materia__["a" /* MateriaProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_professor_professor__["a" /* ProfessorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
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

/***/ 305:
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaPaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pais_pais__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_turmas_turmas__ = __webpack_require__(22);
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    function CadastrarProfessorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarProfessorPage');
    };
    CadastrarProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-professor',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-professor\cadastrar-professor.html"*/'<!--\n  Generated template for the CadastrarProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cadastrarProfessor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-professor\cadastrar-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastrarProfessorPage);
    return CadastrarProfessorPage;
}());

//# sourceMappingURL=cadastrar-professor.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(243);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
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

/***/ 54:
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastar_aluno_cadastar_aluno__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_aluno_aluno__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_responsavel__ = __webpack_require__(89);
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(47);
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

/***/ 89:
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(47);
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPaiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pais_pais__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_responsavel__ = __webpack_require__(89);
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
            selector: 'page-cadastrar-pai',template:/*ion-inline-start:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-pai\cadastrar-pai.html"*/'<!--\n  Generated template for the CadastrarPaiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title> {{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form padding [formGroup]="cadastroForm" (submit)="cadastrar()" novalidate>\n    <ion-item>\n      <ion-input ([ngModel])="Nome"\n                   formControlName="Nome"\n                   type="text"\n                   placeholder="Nome"\n                   maxlength="70"\n                   clearInput clearOnEdit="false">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorNome" class="error"> {{messageNome}}</h6>\n      \n    <ion-item>\n      <ion-input ([ngModel])="Cpf"\n                  formControlName="Cpf"\n                  type="text"\n                  placeholder="Cpf"\n                  clearInput clearOnEdit="false"\n                  [brmasker]="{mask:\'000.000.000-00\', len:14}">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorCpf" class="error"> {{messageCpf}}</h6>\n\n    <ion-item>\n      <ion-input ([ngModel])="Endereco"\n                    formControlName="Endereco"\n                    type="text"\n                    placeholder="Endereco"\n                    maxlength="120"\n                    clearInput clearOnEdit="false">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorEndereco" class="error"> {{messageEndereco}}</h6>\n\n    <ion-item>\n      <ion-input ([ngModel])="Telefone"\n                    formControlName="Telefone"\n                    type="text"\n                    placeholder="Telefone"\n                    maxlength="120"\n                    clearInput clearOnEdit="false"\n                    [brmasker]="{mask:\'00 00000-0000\', len:13}">\n      </ion-input>\n    </ion-item>\n    <h6 *ngIf="errorTelefone" class="error"> {{messageTelefone}}</h6>\n    <ion-item>\n        <ion-input ([ngModel])="Senha"\n                      formControlName="Senha"\n                      type="password"\n                      placeholder="Senha"\n                      maxlength="120"\n                      clearInput clearOnEdit="false"\n                     >\n        </ion-input>\n    </ion-item>\n\n    \n    <h6 *ngIf="errorSenha" class="error"> {{messageSenha}}</h6>\n    <br/>\n    <button ion-button full color="secondary" *ngIf="isPai== undefined" class="login-button">{{titulo}}}</button>\n    <button ion-button full color="secondary" *ngIf="isPai != undefined">{{titulo}}}</button>\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\caiqu\repositorio\sisacomp\src\pages\cadastrar-pai\cadastrar-pai.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_pais_pais__["a" /* PaisProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastrarPaiPage);
    return CadastrarPaiPage;
}());

//# sourceMappingURL=cadastrar-pai.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_host__ = __webpack_require__(47);
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_turmas_cadastrar_turmas__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_turmas_turmas__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alunos_alunos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastrar_pai_cadastrar_pai__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pais_pais__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_turma__ = __webpack_require__(54);
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

/***/ })

},[244]);
//# sourceMappingURL=main.js.map