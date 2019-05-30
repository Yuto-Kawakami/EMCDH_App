webpackJsonp([13],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingProvider = /** @class */ (function () {
    function SettingProvider(http) {
        this.http = http;
        // public apiRoot: string = "http://localhost:8000/"
        this.apiRoot = 'https://radiant-basin-33136.herokuapp.com/';
    }
    SettingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SettingProvider);
    return SettingProvider;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvacuationBagNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvacuationBagNotePage = /** @class */ (function () {
    function EvacuationBagNotePage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.items = [
            {
                name: '母子健康手帳、健康保険証',
                tips: '常に携帯し、大切なページはクラウドに',
            },
            {
                name: 'オムツ、お尻拭き',
                tips: 'お尻拭きは、身体を拭くにも役立ちます',
            },
            {
                name: '授乳用ケープ、ミルクセット',
                tips: '日頃の授乳方法に合わせて準備しましょう',
            },
            {
                name: 'スプーン、紙コップ、キッチン用ラップ',
                tips: 'コップで少しずつ飲ませる方法もあります',
            },
            {
                name: 'ガーゼ、抱っこ紐',
                tips: '避難の際や、避難所で両手が使えるように、抱っこ紐が便利です',
            },
            {
                name: '非常食、離乳食',
                tips: '母乳やミルクで代用したり、大人の食事を取り分けることもできます。市販の離乳食を備えておくと安心です',
            },
            {
                name: 'ビタミン剤',
                tips: '災害時はビタミン類が不足し、口内炎になりやすいので、サプリメントを容易しておくとよいでしょう',
            },
            {
                name: '着替え、靴、防寒具',
                tips: '抱っこして避難する際にも、歩けるようになった子供には靴を履かせておくと良いでしょう',
            },
            {
                name: '生理用品、ビデ',
                tips: '使い慣れた生理ナプキンや、生理用ショーツはあると便利です',
            },
            {
                name: 'マスク',
                tips: '避難所内では感染予防としてマスクを着用しましょう',
            },
            {
                name: 'おもちゃ',
                tips: '使い慣れたおもちゃがあることで、心のケアにも繋がります',
            },
        ];
    }
    EvacuationBagNotePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(this);
        popover.present({
            ev: myEvent
        });
    };
    EvacuationBagNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evacuation-bag-note',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/evacuation-bag-note/evacuation-bag-note.html"*/'<!--\n  Generated template for the EvacuationBagPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>避難バッグリスト</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content pading class="image">\n</ion-content>\n\n<ion-content class="bg-style">\n  <ion-list [virtualScroll]="items">\n    <div *virtualItem="let item" style="width: 100%">\n      <ion-card>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row text-right class="table-index">\n              <ion-col col-9></ion-col>\n              <ion-col col-1>1次</ion-col>\n              <ion-col col-1>2次</ion-col>\n              <ion-col col-1>携帯</ion-col>\n            </ion-row>\n            <ion-row class="focus-bg-style">\n              <ion-col col-9 class="strength">{{item.name}}</ion-col>\n              <ion-col col-1 text-center>\n                <ion-checkbox color="light"></ion-checkbox>\n              </ion-col>\n              <ion-col col-1>\n                <ion-checkbox color="light"></ion-checkbox>\n              </ion-col>\n              <ion-col col-1>\n                <ion-checkbox color="light"></ion-checkbox>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <p>{{item.tips}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n      <div style="height:10px"></div>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/evacuation-bag-note/evacuation-bag-note.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], EvacuationBagNotePage);
    return EvacuationBagNotePage;
}());

//# sourceMappingURL=evacuation-bag-note.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessControlPrepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_control_access_control__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(67);
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
 * Generated class for the AccessControlPrepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccessControlPrepPage = /** @class */ (function () {
    function AccessControlPrepPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        var options = [
            {
                value: 0,
                name: 'いかなる場合も共有しない',
            },
            {
                value: 1,
                name: '大規模災害時のみ',
            },
            {
                value: 2,
                name: '中規模以上の災害時',
            },
            {
                value: 3,
                name: '小規模以上の災害時',
            },
        ];
        this.first_questions = [
            {
                name: '出産回数',
                question_id: '19',
                isMultiple: false,
                options: options,
                // selectedValue: 0,
                selectedValue: null,
            },
            {
                name: '帝王切開の理由',
                question_id: '26',
                isMultiple: false,
                options: options,
                // selectedValue: 1,
                selectedValue: null,
            },
            {
                name: '尿蛋白',
                question_id: '36',
                isMultiple: false,
                options: options,
                // selectedValue: 2,
                selectedValue: null,
            },
        ];
        console.log(this.navParams.get('meta_questions'));
        console.log(this.navParams.get('experiment_mode'));
    }
    AccessControlPrepPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccessControlPrepPage');
    };
    AccessControlPrepPage.prototype.goNextPage = function () {
        if (this.nullCheck()) {
            this.showAlert('注意', '入力されていない項目があります');
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__access_control_access_control__["a" /* AccessControlPage */], {
            'first_questions': this.first_questions,
            'meta_questions': this.navParams.get('meta_questions'),
            'assisted': true,
        });
    };
    AccessControlPrepPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['了解']
        });
        alert.present();
    };
    AccessControlPrepPage.prototype.nullCheck = function () {
        var res = false;
        for (var i = 0; i < this.first_questions.length; i++) {
            if (this.first_questions[i].selectedValue === null) {
                res = true;
                break;
            }
        }
        return res;
    };
    AccessControlPrepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-access-control-prep',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/access-control-prep/access-control-prep.html"*/'<!--\n  Generated template for the AccessControlPrepPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>access-control-prep</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      質問\n    </ion-list-header>\n    <ion-item\n      *ngFor=\'let question of first_questions\' \n    >\n      <ion-label>{{question.name}}</ion-label>\n      <ion-select\n        [(ngModel)]="question.selectedValue"\n        [multiple]="question.isMultiple"\n        okText="完了"\n        cancelText="キャンセル"\n      >\n        <ion-option *ngFor="let option of question.options" [value]="option.value">\n          {{option.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="goNextPage()">\n    次へ\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/access-control-prep/access-control-prep.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], AccessControlPrepPage);
    return AccessControlPrepPage;
}());

//# sourceMappingURL=access-control-prep.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(33);
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
 * Generated class for the ChildrenDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChildrenDataPage = /** @class */ (function () {
    function ChildrenDataPage(navCtrl, navParams, local_storage, api, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.local_storage = local_storage;
        this.api = api;
        this.storage = storage;
        this.STORAGE_KEY = "childrenData";
        this.questions_per_a_child = [];
        this.ESTIMATED_WEIGHT_KEY = 'estimated_weight';
        this.PRESENTATION_KEY = 'presentation';
        this.IS_CERVICAL_ASTHENIA_KEY = 'is_cervical_asthenia';
        this.QUESTION_TYPE = {
            'select': 0,
            'number': 1,
        };
        this.children = __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */].children || [];
        if (this.children != null) {
            this.initialize(this.children);
        }
    }
    ChildrenDataPage.prototype.initialize = function (children) {
        console.log(children);
        //todo: enum、あるいはフォーマットをdjangoから読む形 で実装したい
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            console.log(child);
            this.addChildToQuestion(child);
        }
    };
    ChildrenDataPage.prototype.addChildToQuestion = function (child) {
        var i = this.questions_per_a_child.length + 1;
        this.questions_per_a_child.push({
            child_name: child.name || 'お子様' + (i++),
            child_url: child.url,
            questions: [
                {
                    title: "推定体重[g]",
                    type: this.QUESTION_TYPE.number,
                    key: this.ESTIMATED_WEIGHT_KEY,
                    value: child[this.ESTIMATED_WEIGHT_KEY],
                },
                {
                    title: "胎位",
                    type: this.QUESTION_TYPE.select,
                    key: this.PRESENTATION_KEY,
                    selectedValue: child[this.PRESENTATION_KEY],
                    isMultiple: false,
                    options: [
                        {
                            value: 0,
                            displayName: '不明',
                        },
                        {
                            value: 1,
                            displayName: '頭位',
                        },
                        {
                            value: 2,
                            displayName: '骨盤位',
                        },
                        {
                            value: 3,
                            displayName: '横位',
                        },
                    ]
                },
            ]
        });
    };
    ChildrenDataPage.prototype.addChild = function () {
        var _this = this;
        this.api.createChild({}).subscribe(function (access) {
            if (access) {
                console.log("addChild()");
                _this.children = __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */].children;
                console.log(_this.children);
            }
            else {
                _this.children.push(new __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["b" /* Child */]());
                console.log('add empty child');
            }
            _this.addChildToQuestion(_this.children[_this.children.length - 1]);
        });
    };
    ChildrenDataPage.prototype.onSelectChange = function (val, child_url) {
        console.log("func onChange()");
        console.log(val);
        var child = this.search_child(child_url);
        child[val['key']] = val['selectedValue'];
        this.update(child);
    };
    ChildrenDataPage.prototype.onNumberChange = function (event, key, child_id) {
        console.log("called onNumberChange()");
        console.log(event);
        console.log(key);
        console.log(event.value);
        var child = this.search_child(child_id);
        child[key] = Number(event.value);
        this.update(child);
        console.log('-------------------------');
    };
    ChildrenDataPage.prototype.update = function (child) {
        this.api.updateChild(child).subscribe();
        var val = {};
        val[this.STORAGE_KEY] = this.children;
        this.storage.set(this.STORAGE_KEY, JSON.stringify(val));
        console.log(val);
    };
    ChildrenDataPage.prototype.search_child = function (child_url) {
        console.log("called search _child");
        console.log("child_id:" + child_url);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.url === child_url) {
                return child;
            }
        }
    };
    ChildrenDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildrenDataPage');
    };
    ChildrenDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-children-data',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/children-data/children-data.html"*/'<!--\n  Generated template for the ChildrenDataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>母体・胎児に関するデータ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor=\'let child of questions_per_a_child\'>\n    <ion-list-header>\n      {{child.child_name}}\n    </ion-list-header>\n    <ion-item *ngFor=\'let question of child.questions\'>\n      <ion-label>{{question.title}}</ion-label>\n      <ion-select\n        *ngIf="question.type == 0"\n        [(ngModel)]="question.selectedValue"\n        [multiple]="question.isMultiple"\n        okText="完了"\n        cancelText="キャンセル"\n        (ionChange)="onSelectChange(question, child.child_url)"\n      >\n        <ion-option *ngFor="let option of question.options" [value]="option.value">\n          {{option.displayName}}\n        </ion-option>\n      </ion-select>\n      <ion-input\n        *ngIf="question.type == 1"\n        type="number"\n        [value]="question.value"\n        text-right\n        (ionChange)="onNumberChange($event, question.key, child.child_url)"\n      ></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full (click)="addChild()">\n    子供を追加\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/children-data/children-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ChildrenDataPage);
    return ChildrenDataPage;
}());

//# sourceMappingURL=children-data.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationChartListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consultation_chart_consultation_chart__ = __webpack_require__(169);
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
 * Generated class for the ConsultationChartListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultationChartListPage = /** @class */ (function () {
    function ConsultationChartListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.chart_list = [
            {
                title: '子宮底長',
                page: __WEBPACK_IMPORTED_MODULE_2__consultation_chart_consultation_chart__["a" /* ConsultationChartPage */],
            },
            {
                title: '体重',
                page: __WEBPACK_IMPORTED_MODULE_2__consultation_chart_consultation_chart__["a" /* ConsultationChartPage */],
            },
            {
                title: '最高/最低血圧',
                page: __WEBPACK_IMPORTED_MODULE_2__consultation_chart_consultation_chart__["a" /* ConsultationChartPage */],
            },
            {
                title: '腹囲',
                page: __WEBPACK_IMPORTED_MODULE_2__consultation_chart_consultation_chart__["a" /* ConsultationChartPage */],
            },
        ];
    }
    ConsultationChartListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    ConsultationChartListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultation-chart-list',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-chart-list/consultation-chart-list.html"*/'<!--\n  Generated template for the ConsultationChartListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>妊産婦医療データ一覧</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of chart_list" (click)="itemTapped($event, item)" class="bg-style">\n        {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-chart-list/consultation-chart-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ConsultationChartListPage);
    return ConsultationChartListPage;
}());

//# sourceMappingURL=consultation-chart-list.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ConsultationChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultationChartPage = /** @class */ (function () {
    function ConsultationChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    }
    ConsultationChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultationChartPage');
    };
    ConsultationChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultation-chart',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-chart/consultation-chart.html"*/'<!--\n  Generated template for the ConsultationChartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>consultation-chart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="row">\n      <div style="display: block;">\n      <canvas baseChart height="600" width="350"\n                  [datasets]="lineChartData"\n                  [labels]="lineChartLabels"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColors"\n                  [legend]="lineChartLegend"\n                  [chartType]="lineChartType"\n                  (chartHover)="chartHovered($event)"\n                  (chartClick)="chartClicked($event)"></canvas>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-chart/consultation-chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConsultationChartPage);
    return ConsultationChartPage;
}());

//# sourceMappingURL=consultation-chart.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consultation_record_list_consultation_record_list__ = __webpack_require__(98);
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
 * Generated class for the ConsultationRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultationRecordPage = /** @class */ (function () {
    function ConsultationRecordPage(navCtrl, navParams, local_storage, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.local_storage = local_storage;
        this.api = api;
        this.dateTypeQuestions = {};
        this.CONSULTATION_DATE_KEY = 'consultation_date';
        this.UTEROTOME_LENGTH_KEY = 'uterotome_length';
        this.WEIGHT_KEY = 'weight';
        this.SYSTOLIC_BLOOD_PRESSURE_KEY = 'systolic_blood_pressure'; //収縮期血圧
        this.DIASTOLIC_BLOOD_PRESSURE_KEY = 'diastolic_blood_pressure'; //拡張期血圧
        this.ABDOMINAL_CIRCUMFERENCE_KEY = 'abdominal_circumference';
        this.EDEMA_KEY = 'edema';
        this.URINARY_PROTEIN_KEY = 'urinary_protein';
        this.URINARY_SUGAR_KEY = 'urinary_sugar';
        this.RISK_OF_THREATENED_ABORTION_KEY = 'risk_of_threatened_abortion';
        this.CERVICAL_LENGTH_KEY = 'cervical_length';
        this.allowSave = false;
        var data = navParams.get('data');
        this.data = data;
        this.setValue(data);
    }
    ConsultationRecordPage_1 = ConsultationRecordPage;
    ConsultationRecordPage.prototype.setValue = function (data) {
        this.dateTypeQuestions[this.CONSULTATION_DATE_KEY] = data[this.CONSULTATION_DATE_KEY];
        this.numberTypeQuestions = [
            {
                title: "子宮底長[cm]",
                key: this.UTEROTOME_LENGTH_KEY,
                value: data[this.UTEROTOME_LENGTH_KEY],
            },
            {
                title: "体重[kg]",
                key: this.WEIGHT_KEY,
                value: data[this.WEIGHT_KEY],
            },
            {
                title: "最高血圧[mmHg]",
                key: this.SYSTOLIC_BLOOD_PRESSURE_KEY,
                value: data[this.UTEROTOME_LENGTH_KEY],
            },
            {
                title: "最低血圧[mmHg]",
                key: this.DIASTOLIC_BLOOD_PRESSURE_KEY,
                value: data[this.UTEROTOME_LENGTH_KEY],
            },
            {
                title: "腹囲[cm]",
                key: this.ABDOMINAL_CIRCUMFERENCE_KEY,
                value: data[this.ABDOMINAL_CIRCUMFERENCE_KEY],
            },
        ];
        //todo: enum、あるいはフォーマットをdjangoから読む形 で実装したい
        this.selectTypeQuestions = [
            {
                title: "浮腫",
                key: this.EDEMA_KEY,
                selectedValue: data[this.EDEMA_KEY],
                isMultiple: false,
                options: [
                    {
                        value: 0,
                        displayName: '-',
                    },
                    {
                        value: 1,
                        displayName: '+',
                    },
                    {
                        value: 2,
                        displayName: '++',
                    },
                    {
                        value: 3,
                        displayName: '+++',
                    },
                    {
                        value: 4,
                        displayName: '++++',
                    },
                ]
            },
            {
                title: "尿蛋白",
                key: this.URINARY_PROTEIN_KEY,
                selectedValue: data[this.URINARY_PROTEIN_KEY],
                isMultiple: false,
                options: [
                    {
                        value: 0,
                        displayName: '-',
                    },
                    {
                        value: 1,
                        displayName: '+',
                    },
                    {
                        value: 2,
                        displayName: '++',
                    },
                    {
                        value: 3,
                        displayName: '+++',
                    },
                    {
                        value: 4,
                        displayName: '++++',
                    },
                ]
            },
            {
                title: "尿糖",
                key: this.URINARY_SUGAR_KEY,
                selectedValue: data[this.URINARY_SUGAR_KEY],
                isMultiple: false,
                options: [
                    {
                        value: 0,
                        displayName: '-',
                    },
                    {
                        value: 1,
                        displayName: '+',
                    },
                    {
                        value: 2,
                        displayName: '++',
                    },
                    {
                        value: 3,
                        displayName: '+++',
                    },
                    {
                        value: 4,
                        displayName: '++++',
                    },
                ]
            },
            {
                title: "頸管長",
                key: this.CERVICAL_LENGTH_KEY,
                selectedValue: data[this.CERVICAL_LENGTH_KEY],
                isMultiple: false,
                options: [
                    {
                        value: 1,
                        displayName: '正常',
                    },
                    {
                        value: 2,
                        displayName: '短い',
                    },
                    {
                        value: 0,
                        displayName: '不明',
                    },
                ]
            },
        ];
    };
    ConsultationRecordPage.prototype.formatDateForView = function (date) {
        return __WEBPACK_IMPORTED_MODULE_4_moment___default()(date).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    };
    ConsultationRecordPage.prototype.onSelectChange = function (val) {
        console.log("func onChange()");
        console.log(val);
        this.data[val['key']] = val['selectedValue'];
    };
    ConsultationRecordPage.prototype.onNumberChange = function (event, key) {
        console.log("called onNumberChange()");
        console.log(event);
        console.log(key);
        console.log(event.value);
        this.data[key] = Number(event.value);
        console.log('-------------------------');
    };
    ConsultationRecordPage.prototype.onDateChange = function (event, key) {
        console.log("func onDateChange()");
        var formattedDate = event.year + '-' + ('0' + event.month).slice(-2) + '-' + ('0' + event.day).slice(-2);
        this.data[key] = formattedDate;
        this.allowSave = true;
        console.log('-------------------------');
    };
    ConsultationRecordPage.prototype.save = function () {
        var _this = this;
        this.api.createConsultationRecord(this.data).subscribe(function (access) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__consultation_record_list_consultation_record_list__["a" /* ConsultationRecordListPage */]);
        });
    };
    ConsultationRecordPage.prototype.clear = function () {
        this.setValue({});
        this.navCtrl.push(ConsultationRecordPage_1);
    };
    ConsultationRecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultationRecordPage');
    };
    var ConsultationRecordPage_1;
    ConsultationRecordPage = ConsultationRecordPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultation-record',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-record/consultation-record.html"*/'<!--\n  Generated template for the ConsultationRecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>妊婦健診結果の入力</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <div style="width:100%">\n      <ion-item>\n        <ion-label>検診日</ion-label>\n        <ion-datetime\n          displayFormat="YYYY/MM/DD"\n          placeholder="入力する"\n          [(ngModel)]="this.dateTypeQuestions[CONSULTATION_DATE_KEY]" \n          (ionChange)="onDateChange($event,CONSULTATION_DATE_KEY)"\n        ></ion-datetime>\n      </ion-item>\n    </div>\n  </ion-list>\n    <ion-list [virtualScroll]="selectTypeQuestions">\n      <div *virtualItem="let question" style="width:100%">\n        <ion-item>\n          <ion-label>{{question.title}}</ion-label>\n          <ion-select [(ngModel)]="question.selectedValue" [multiple]="question.isMultiple" okText="完了" cancelText="キャンセル" (ionChange)="onSelectChange(question)">\n            <ion-option *ngFor="let option of question.options" [value]="option.value">\n              {{option.displayName}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-list [virtualScroll]="numberTypeQuestions">\n      <div *virtualItem="let question" style="width:100%">\n        <ion-item>\n          <ion-label>{{question.title}}</ion-label>\n          <ion-input\n            type="number"\n            placeholder="入力する"\n            [value]="question.value"\n            (ionChange)="onNumberChange($event, question.key)"\n            text-right\n          >\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <button ion-button full (click)="save()" [disabled]="!allowSave">\n      保存\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-record/consultation-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], ConsultationRecordPage);
    return ConsultationRecordPage;
}());

//# sourceMappingURL=consultation-record.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpacPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
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
 * Generated class for the GpacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GpacPage = /** @class */ (function () {
    function GpacPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.GRAVIDITY_KEY = 'gravidity';
        this.PARITY_KEY = 'parity';
        this.ABORTION_KEY = 'abortion';
        this.CAESARIAN_SECTION_KEY = 'caesarean_section';
        this.data = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */].gpac || {};
        console.log(this.data);
        this.initialize(this.data);
    }
    GpacPage.prototype.initialize = function (data) {
        this.numberTypeQuestions = [
            {
                title: "妊娠回数",
                key: this.GRAVIDITY_KEY,
                value: data.gravidity,
            },
            {
                title: "出産回数",
                key: this.PARITY_KEY,
                value: data.parity,
            },
            {
                title: "自然/人工流産の回数",
                key: this.ABORTION_KEY,
                value: data.abortion,
            },
            {
                title: "帝王切開の回数",
                key: this.CAESARIAN_SECTION_KEY,
                value: data.caesarean_section,
            },
        ];
    };
    GpacPage.prototype.onNumberChange = function (event, key) {
        console.log("called onNumberChange()");
        console.log(event);
        console.log(key);
        console.log(event.value);
        this.data[key] = Number(event.value);
        this.api.updateGpac(this.data).subscribe();
        console.log('-------------------------');
    };
    GpacPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GpacPage');
    };
    GpacPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gpac',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/gpac/gpac.html"*/'<!--\n  Generated template for the GpacPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>過去の妊娠について</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list [virtualScroll]="this.numberTypeQuestions">\n      <div *virtualItem="let question" style="width:100%">\n        <ion-item>\n          <ion-label>{{question.title}}</ion-label>\n          <ion-input\n            type="number"\n            placeholder="入力する"\n            [value]="question.value"\n            (ionChange)="onNumberChange($event, question.key)"\n            text-right\n          >\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/gpac/gpac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], GpacPage);
    return GpacPage;
}());

//# sourceMappingURL=gpac.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PregnancyDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker_ngx__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the PregnancyDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PregnancyDataPage = /** @class */ (function () {
    function PregnancyDataPage(navCtrl, navParams, datePicker, api, storage, changeDetectorRef) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.api = api;
        this.storage = storage;
        this.changeDetectorRef = changeDetectorRef;
        this.STORAGE_KEY = "pregnancyData";
        //APIのカラム名に順じる
        this.LAST_MENSTRUAL_KEY = 'last_menstruation_start_date';
        this.GESTATIONAL_AGE_KEY = 'gestationalAge';
        this.EDD_KEY = 'expected_delivery_date';
        this.WILL_CAESAREAN_SECTION_KEY = 'will_caesarean_section';
        this.REASON_FOR_CAESAREAN_SECTION_KEY = 'reason_for_caesarean_section';
        this.BIRTH_ALREADY_KEY = 'birth_already';
        this.BIRTHDAY_KEY = 'birthday';
        this.DELIVERY_METHOD_KEY = 'delivery_method';
        this.GPAC_KEY = 'gpac';
        this.PREGNANCY_KEY = 'pregnancy';
        this.PLACENTA_ATTACHMENT_SITE_KEY = 'placenta_attachment_site';
        this.dateTypeQuestions = {};
        this.staticData = {};
        this.question = {};
        this.pregnancy = __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */].pregnancy || {};
        // this.initialize(this.pregnancy);
        // console.log('data');
        // console.log(this.pregnancy);
        this.storage.get(this.STORAGE_KEY).then(function (data) {
            if (data != null) {
                _this.pregnancy = JSON.parse(data);
            }
            _this.initialize(_this.pregnancy);
        });
    }
    PregnancyDataPage.prototype.initialize = function (data) {
        console.log(data);
        //basic data
        var lastMenstrual = data[this.LAST_MENSTRUAL_KEY] || '';
        var edd = data[this.EDD_KEY] || '';
        var birth_already = data[this.BIRTH_ALREADY_KEY];
        var birthday = data[this.BIRTHDAY_KEY];
        console.log(birth_already);
        if (lastMenstrual != '') {
            var last_menstrual_date = __WEBPACK_IMPORTED_MODULE_5_moment___default()(lastMenstrual);
            var formatted_last_menstrual_date = last_menstrual_date.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
            this.dateTypeQuestions[this.LAST_MENSTRUAL_KEY] = formatted_last_menstrual_date;
            console.log(formatted_last_menstrual_date);
        }
        if (edd != '') {
            var edd_date = __WEBPACK_IMPORTED_MODULE_5_moment___default()(edd);
            var formatted_eddDate = edd_date.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
            this.dateTypeQuestions[this.EDD_KEY] = formatted_eddDate;
            //妊娠週数の計算
            this.calcGestionalAge(formatted_eddDate);
        }
        console.log(data[this.WILL_CAESAREAN_SECTION_KEY]);
        this.selectTypeQuestions = [
            {
                title: "帝王切開の予定",
                key: this.WILL_CAESAREAN_SECTION_KEY,
                selectedValue: data[this.WILL_CAESAREAN_SECTION_KEY],
                isMultiple: false,
                options: [
                    {
                        value: true,
                        displayName: 'あり',
                    },
                    {
                        value: false,
                        displayName: 'なし',
                    },
                ]
            },
            {
                title: "胎盤付着部位",
                key: this.PLACENTA_ATTACHMENT_SITE_KEY,
                selectedValue: data[this.PLACENTA_ATTACHMENT_SITE_KEY],
                isMultiple: false,
                options: [
                    {
                        value: 0,
                        displayName: '不明',
                    },
                    {
                        value: 1,
                        displayName: '正常',
                    },
                    {
                        value: 2,
                        displayName: '辺縁',
                    },
                    {
                        value: 3,
                        displayName: '後壁',
                    },
                ]
            },
        ];
        this.selectTypeQuestionsAfterBirth = [
            {
                title: "分娩方法",
                key: this.DELIVERY_METHOD_KEY,
                selectedValue: data[this.DELIVERY_METHOD_KEY],
                isMultiple: false,
                options: [
                    {
                        value: 0,
                        displayName: '不明',
                    },
                    {
                        value: 1,
                        displayName: '経膣分娩',
                    },
                    {
                        value: 2,
                        displayName: '帝王切開',
                    },
                ]
            },
        ];
        if (data[this.WILL_CAESAREAN_SECTION_KEY]) {
            this.addQuestion();
        }
    };
    PregnancyDataPage.prototype.onChange = function (val) {
        console.log("func onChange()");
        console.log(val);
        this.pregnancy[val['key']] = val['selectedValue'];
        this.update();
        console.log('-------------------------');
    };
    PregnancyDataPage.prototype.onToggleChange = function () {
        var val = {};
        val['key'] = this.BIRTH_ALREADY_KEY;
        val['selectedValue'] = this.pregnancy.birth_already;
        this.onChange(val);
    };
    PregnancyDataPage.prototype.update = function () {
        console.log('update called');
        console.log(this.pregnancy);
        this.api.updatePregnancy(this.pregnancy).subscribe();
        this.storage.set(this.STORAGE_KEY, JSON.stringify(this.pregnancy));
        this.storage.get(this.STORAGE_KEY).then(function (val) {
            console.log(val);
        });
    };
    PregnancyDataPage.prototype.addQuestion = function () {
        this.selectTypeQuestions.push({
            title: "帝王切開の理由",
            key: this.REASON_FOR_CAESAREAN_SECTION_KEY,
            selectedValue: this.pregnancy[this.REASON_FOR_CAESAREAN_SECTION_KEY],
            isMultiple: false,
            options: [
                {
                    value: 1,
                    displayName: '骨盤位',
                },
                {
                    value: 2,
                    displayName: '既往帝王切開',
                },
                {
                    value: 3,
                    displayName: '胎盤位置異常',
                },
                {
                    value: 4,
                    displayName: '希望',
                },
                {
                    value: 0,
                    displayName: 'その他',
                },
            ]
        });
    };
    PregnancyDataPage.prototype.removeQuestion = function () {
        this.selectTypeQuestions.pop();
    };
    PregnancyDataPage.prototype.onDateChange = function (event, key) {
        console.log("func onDateChange()");
        console.log(event);
        console.log(key);
        var formattedDate = event.year + '-' + ('0' + event.month).slice(-2) + '-' + ('0' + event.day).slice(-2);
        this.pregnancy[key] = formattedDate;
        console.log(this.pregnancy);
        if (key === this.EDD_KEY) {
            this.calcGestionalAge(formattedDate);
        }
        this.update();
        console.log('-------------------------');
    };
    PregnancyDataPage.prototype.calcGestionalAge = function (edd) {
        console.log("func - calcGestionalAge");
        var gestationalDays = Math.floor(280 + __WEBPACK_IMPORTED_MODULE_5_moment___default()().diff(edd, 'days', true));
        console.log(gestationalDays);
        var gestationalDay = gestationalDays % 7;
        var gestationalWeeks = Math.floor(gestationalDays / 7);
        var gestationalAge = gestationalWeeks + '週' + gestationalDay + '日目';
        this.staticData[this.GESTATIONAL_AGE_KEY] = gestationalAge;
        console.log(gestationalAge);
        console.log('-------------------------');
    };
    PregnancyDataPage.prototype.onSelectChange = function (val) {
        console.log("func onChange()");
        console.log(val);
        var selectedValue = val['selectedValue'];
        this.pregnancy[val['key']] = selectedValue;
        if (val['key'] === this.WILL_CAESAREAN_SECTION_KEY) {
            if (selectedValue) {
                this.addQuestion();
            }
            else {
                this.removeQuestion();
            }
        }
        console.log(this.pregnancy);
        this.update();
    };
    PregnancyDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad pregnancyDataPage');
    };
    PregnancyDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pregnancy-data',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/pregnancy-data/pregnancy-data.html"*/'<!--\n  Generated template for the PregnancyDataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>妊娠に関するデータ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list class="no-margin">\n    <ion-item>\n      <ion-label>出産済み</ion-label>\n      <ion-toggle\n        [(ngModel)]="this.pregnancy.birth_already"\n        (ionChange)="onToggleChange()"\n      >\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf=\'this.pregnancy.birth_already\'>\n      <ion-item>\n        <ion-label>出産日</ion-label>\n        <ion-datetime\n          displayFormat="YYYY/MM/DD"\n          placeholder="入力する"\n          [(ngModel)]="this.pregnancy.birthday" \n          (ionChange)="onDateChange($event, BIRTHDAY_KEY)"\n        ></ion-datetime>\n      </ion-item>\n      <ion-item *ngFor=\'let question of selectTypeQuestionsAfterBirth\'>\n        <ion-label>{{question.title}}</ion-label>\n        <ion-select\n          [(ngModel)]="question.selectedValue"\n          [multiple]="question.isMultiple"\n          okText="完了"\n          cancelText="キャンセル"\n          (ionChange)="onSelectChange(question)"\n        >\n          <ion-option *ngFor="let option of question.options" [value]="option.value">\n            {{option.displayName}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </ion-list>\n  <div>\n    <ion-list class="no-margin">\n      <ion-item>\n        <ion-label>分娩予定日</ion-label>\n        <ion-datetime\n          displayFormat="YYYY/MM/DD"\n          placeholder="入力する"\n          [(ngModel)]="dateTypeQuestions[EDD_KEY]" \n          (ionChange)="onDateChange($event,EDD_KEY)"\n        ></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>最終月経開始日</ion-label>\n        <ion-datetime\n          displayFormat="YYYY/MM/DD"\n          placeholder="入力する"\n          [(ngModel)]="dateTypeQuestions[LAST_MENSTRUAL_KEY]" \n          (ionChange)="onDateChange($event, LAST_MENSTRUAL_KEY)"\n        ></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>妊娠週数</ion-label>\n        <ion-input\n          type="text"\n          [value]="staticData[GESTATIONAL_AGE_KEY]"\n          disabled="true"\n          text-right\n        ></ion-input>\n      </ion-item>\n      <ion-item *ngFor=\'let question of selectTypeQuestions\'>\n        <ion-label>{{question.title}}</ion-label>\n        <ion-select\n          [(ngModel)]="question.selectedValue"\n          [multiple]="question.isMultiple"\n          okText="完了"\n          cancelText="キャンセル"\n          (ionChange)="onSelectChange(question)"\n        >\n          <ion-option *ngFor="let option of question.options" [value]="option.value">\n            {{option.displayName}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/pregnancy-data/pregnancy-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker_ngx__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], PregnancyDataPage);
    return PregnancyDataPage;
}());

//# sourceMappingURL=pregnancy-data.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_id_device_id__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_setting__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(deviceIdProvider, http, setting, api) {
        this.deviceIdProvider = deviceIdProvider;
        this.http = http;
        this.setting = setting;
        this.api = api;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
        });
        this.baseURL = setting.apiRoot;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        // At this point make a request to your backend to make a real check!
        if (credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
                if (credentials.password !== 'also') {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    _this.api.initializeUser().subscribe(function (access) {
                        if (access) {
                            console.log("complete initialize user");
                            observer.next(true);
                            observer.complete();
                        }
                        else {
                            console.log("cannot complete initialize user");
                            observer.next(false);
                            observer.complete();
                        }
                    });
                }
            });
        }
    };
    AuthService.prototype.snsLogin = function (displayName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _this.api.initializeUser(displayName).subscribe(function (access) {
                if (access) {
                    console.log("complete initialize user");
                    observer.next(true);
                    observer.complete();
                }
                else {
                    console.log("cannot complete initialize user");
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    };
    AuthService.prototype.apiInit = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _this.api.initializeUser().subscribe(function (access) {
                if (access) {
                    console.log("complete initialize user");
                    observer.next(true);
                    observer.complete();
                }
                else {
                    console.log("cannot complete initialize user");
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    };
    AuthService.prototype.register = function (credentials) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create();
    };
    AuthService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_6__api_api__["a" /* ApiProvider */].currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService.prototype.getCurrentUser = function () {
        return __WEBPACK_IMPORTED_MODULE_6__api_api__["a" /* ApiProvider */].currentUser;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__device_id_device_id__["a" /* DeviceIdProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__setting_setting__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__api_api__["a" /* ApiProvider */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_device_id_device_id__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__experiment_experiment__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__ = __webpack_require__(144);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, geolocation, locationTracker, deviceIdProvider, api, iab, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.locationTracker = locationTracker;
        this.deviceIdProvider = deviceIdProvider;
        this.api = api;
        this.iab = iab;
        this.afAuth = afAuth;
        this.user = null;
        this.user = __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */].currentUser;
        this.textTypeQuestions = [
            {
                title: '名前',
                key: 'full_name',
                value: this.user.full_name || '',
            },
        ];
        this.selectTypeQuestions = [
            {
                title: "トリアージレベル",
                key: 'triage_level',
                selectedValue: this.user['triage_level'] || '',
                isMultiple: false,
                options: [
                    {
                        value: 0,
                        displayName: '赤',
                    },
                    {
                        value: 1,
                        displayName: '黄',
                    },
                    {
                        value: 2,
                        displayName: '緑',
                    },
                ]
            },
        ];
        this.page_list = [
            {
                title: 'アクセスコントロールの設定',
                icon: 'archive',
                page: __WEBPACK_IMPORTED_MODULE_7__experiment_experiment__["a" /* ExperimentPage */],
            },
        ];
        console.log(this.user);
    }
    //Location Tracker
    SettingsPage.prototype.start = function () {
        this.locationTracker.startTracking();
        this.user.enable_location_sharing = true;
        this.update();
    };
    SettingsPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
        this.user.enable_location_sharing = false;
        this.update();
    };
    SettingsPage.prototype.update = function () {
        console.log('func update');
        console.log(this.user);
        this.api.updateUser(this.user).subscribe();
    };
    SettingsPage.prototype.onToggleChange = function () {
        if (this.user.enable_location_sharing) {
            this.start();
        }
        else {
            this.stop();
        }
    };
    SettingsPage.prototype.onTextChange = function (event, key) {
        console.log("called onTextChange()");
        console.log(event);
        console.log(key);
        console.log(event.value);
        this.user[key] = event.value;
        this.update();
        console.log('-------------------------');
    };
    SettingsPage.prototype.onSelectChange = function (val) {
        console.log("func onChange()");
        console.log(val);
        this.user[val['key']] = val['selectedValue'];
        this.update();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.openUrl = function () {
        var browser = this.iab.create('https://goo.gl/forms/8qyLBs4Tpt1EBCSd2');
        browser.show();
    };
    SettingsPage.prototype.movePage = function (event, item) {
        this.navCtrl.push(item.page);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>設定</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>ユーザー設定</h3>\n    <ion-list [virtualScroll]="textTypeQuestions">\n      <div *virtualItem="let question" style="width:100%">\n        <ion-item>\n          <ion-label>{{question.title}}</ion-label>\n          <ion-input\n            type="text"\n            placeholder="入力する"\n            [value]="question.value"\n            (ionChange)="onTextChange($event, question.key)"\n            text-right\n          >\n          </ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n  <h3>共有設定</h3>\n  <ion-list class="no-margin">\n    <ion-item>\n      <ion-label>位置情報を共有する</ion-label>\n      <ion-toggle [(ngModel)]="this.user.enable_location_sharing" (ionChange)="onToggleChange()"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <h3>その他</h3>\n  <ion-list>\n    <button ion-item *ngFor="let item of page_list" (click)="movePage($event, item)" class="bg-style">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <button ion-button full (click)="openUrl()">\n    アンケートに回答\n  </button>\n  <!-- <button ion-button full (click)="logout()">\n    ログアウト\n  </button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_device_id_device_id__["a" /* DeviceIdProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook_ngx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = /** @class */ (function () {
    function StartPage(nav, auth, alertCtrl, loadingCtrl, afAuth, platform, fb) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.platform = platform;
        this.fb = fb;
        this.registerCredentials = { email: '', password: '' };
        this.FB_APP_ID = 370481763564996;
        this.user = this.afAuth.authState;
        console.log("log", this.afAuth.authState);
    }
    StartPage.prototype.createAccount = function () {
        this.nav.push('RegisterPage');
    };
    // private oauthSignIn(provider: AngularFireAuth) {
    //   if (!(<any>window).cordova) {
    //     return this.afAuth.auth.signInWithPopup(provider);
    //   } else {
    //     return this.afAuth.auth.signInWithRedirect(provider)
    //     .then(() => {
    //       return this.afAuth.auth.getRedirectResult().then( result => {
    //         // This gives you a Google Access Token.
    //         // You can use it to access the Google API.
    //         let token = result.credential.accessToken;
    //         // The signed-in user info.
    //         let user = result.user;
    //         console.log(token, user);
    //       }).catch(function(error) {
    //         // Handle Errors here.
    //         alert(error.message);
    //       });
    //     });
    //   }
    // }
    StartPage.prototype.webFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        console.log(credential);
                        return [2 /*return*/, true];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.nativeFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var perms, bool;
            var _this = this;
            return __generator(this, function (_a) {
                console.log('nativeFacebookLogin');
                perms = ["public_profile", "email"];
                bool = this.fb.login(perms)
                    .then(function (response) {
                    var facebookCredential = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.FacebookAuthProvider
                        .credential(response.authResponse.accessToken);
                    __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().signInWithCredential(facebookCredential)
                        .then(function (success) {
                        console.log("Firebase success: " + JSON.stringify(success));
                        _this.displayName = success.user.displayName;
                    });
                    return true;
                }).catch(function (error) {
                    console.log('error');
                    console.log(error);
                    return false;
                });
                console.log(bool);
                return [2 /*return*/, bool];
            });
        });
    };
    StartPage.prototype.loginFacebook = function () {
        var _this = this;
        this.showLoading();
        if (this.platform.is('cordova')) {
            console.log('native');
            this.nativeFacebookLogin().then(function (res) {
                console.log(res);
                if (res) {
                    console.log("Facebook Auth OK");
                    _this.auth.snsLogin(_this.displayName).subscribe(function (allowed) {
                        if (allowed) {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            _this.showError("Access Denied");
                        }
                    });
                }
                else {
                    _this.showError("Access Denied");
                }
            });
            console.log('finish');
        }
        else {
            console.log('web');
            this.webFacebookLogin().then(function (res) {
                if (res) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.showError("Access Denied");
                }
            });
        }
    };
    StartPage.prototype.loginGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
                    return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider())];
                    case 1:
                        // this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // loginTwitter() {
    //   this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    // }
    StartPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    StartPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    StartPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    StartPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/start/start.html"*/'<ion-content class="login-content" padding>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n  \n  <button ion-button full (click)="loginGoogle()">Login With Google</button>\n  <button ion-button full class="log-in-button" color="primary" expand="block" (click)="loginFacebook()">\n    Login With Facebook</button>\n  <!-- <button ion-button (click)="loginTwitter()">Login With Twitter</button> -->\n\n  <!-- <div *ngIf="afAuth.user | async as user; else showLogin">\n    <h1>Hello {{ user.displayName }}!</h1>\n    <button ion-button (click)="logout()">Logout</button>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook_ngx__["a" /* Facebook */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/access-control-prep/access-control-prep.module": [
		628,
		12
	],
	"../pages/access-control/access-control.module": [
		640,
		11
	],
	"../pages/children-data/children-data.module": [
		629,
		10
	],
	"../pages/consultation-chart-list/consultation-chart-list.module": [
		630,
		9
	],
	"../pages/consultation-chart/consultation-chart.module": [
		631,
		8
	],
	"../pages/consultation-record-list/consultation-record-list.module": [
		632,
		7
	],
	"../pages/consultation-record/consultation-record.module": [
		633,
		6
	],
	"../pages/experiment/experiment.module": [
		634,
		5
	],
	"../pages/gpac/gpac.module": [
		635,
		4
	],
	"../pages/pregnancy-data/pregnancy-data.module": [
		636,
		3
	],
	"../pages/register/register.module": [
		637,
		0
	],
	"../pages/settings/settings.module": [
		638,
		2
	],
	"../pages/start/start.module": [
		639,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Child; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_id_device_id__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage_ngx__ = __webpack_require__(249);
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
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());
var consultationRecord = /** @class */ (function () {
    function consultationRecord() {
    }
    return consultationRecord;
}());
var Child = /** @class */ (function () {
    function Child() {
    }
    return Child;
}());

var Gpac = /** @class */ (function () {
    function Gpac() {
    }
    return Gpac;
}());
var Pregnancy = /** @class */ (function () {
    function Pregnancy() {
    }
    return Pregnancy;
}());
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, setting, deviceIdProvider, nativeStorage) {
        this.http = http;
        this.setting = setting;
        this.deviceIdProvider = deviceIdProvider;
        this.nativeStorage = nativeStorage;
        this.CONSULTATION_RECORD_KEY = 'consultation_record';
        this.GPAC_KEY = 'gpac';
        this.CHILD_KEY = 'child';
        this.PREGNANCY_KEY = 'pregnancy';
        this.USER_KEY = 'user';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
        });
        console.log("ApiProvider Constructer");
        this.baseURL = setting.apiRoot;
    }
    ApiProvider_1 = ApiProvider;
    ApiProvider.prototype.initializeUser = function (userName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.deviceIdProvider.getDeviceID().subscribe(function (device_id) {
                _this.getUserId(device_id).subscribe(function (access) {
                    if (access) {
                        _this.getGpac().subscribe();
                        _this.getPregnancy().subscribe(function (access) {
                            if (!access) {
                                _this.createPregnancy({}).subscribe(function (access) {
                                    _this.getChild().subscribe();
                                    _this.getConsultationRecordList().subscribe();
                                    observer.next(true);
                                    observer.complete();
                                });
                            }
                            else {
                                _this.getChild().subscribe();
                                _this.getConsultationRecordList().subscribe();
                                observer.next(true);
                                observer.complete();
                            }
                        });
                    }
                    else {
                        _this.createUser(userName, device_id).subscribe(function (access) {
                            observer.next(true);
                            observer.complete();
                        });
                    }
                });
            });
        });
    };
    ApiProvider.prototype.getConsultationRecordList = function () {
        var _this = this;
        console.log("func getConsultationRecordList()");
        if (!ApiProvider_1.pregnancy) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
                _this.createPregnancy({}).subscribe(function (access) {
                    _this.getConsultationRecordList().subscribe(function (access) {
                        observer.next(true);
                        observer.complete();
                    });
                });
            });
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'consultationRecords/';
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('pregnancy', ApiProvider_1.pregnancy.id);
            _this.http.get(endpoint, {
                headers: _this.headers,
                params: params,
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.consultationRecordList = json || [];
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createConsultationRecord = function (body) {
        var _this = this;
        console.log("func createConsultationRecord()");
        if (!ApiProvider_1.pregnancy) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
                _this.createPregnancy({}).subscribe(function (access) {
                    _this.createConsultationRecord(body).subscribe();
                    observer.next(true);
                    observer.complete();
                });
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
                console.log(ApiProvider_1.pregnancy);
                var endpoint = _this.baseURL + 'consultationRecords/';
                body['pregnancy'] = ApiProvider_1.pregnancy.url;
                console.log(body);
                _this.http.post(endpoint, body, {
                    headers: _this.headers,
                }).subscribe(function (json) {
                    console.log(json);
                    ApiProvider_1.consultationRecord = json;
                    _this.getConsultationRecordList();
                    observer.next(true);
                    observer.complete();
                }, function (err) {
                    console.log(err);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
    };
    ApiProvider.prototype.updateConsultationRecord = function (params) {
        var _this = this;
        console.log("func updateConsultationRecord()");
        if (!ApiProvider_1.consultationRecord) {
            return this.createConsultationRecord(params);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = ApiProvider_1.consultationRecord.url;
            _this.http.put(endpoint, params, {
                headers: _this.headers
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.consultationRecord = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.getGpac = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'gpacs/';
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('user', String(ApiProvider_1.currentUser.id));
            _this.http.get(endpoint, {
                headers: _this.headers,
                params: params,
            }).subscribe(function (json) {
                console.log(json);
                if (json.length > 0) {
                    ApiProvider_1.gpac = json[0];
                    observer.next(true);
                    observer.complete();
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.getChild = function () {
        var _this = this;
        console.log('getChild');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'children/';
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('pregnancy', ApiProvider_1.pregnancy.id);
            _this.http.get(endpoint, {
                headers: _this.headers,
                params: params,
            }).subscribe(function (json) {
                console.log(json);
                // if(json.length > 0){
                ApiProvider_1.children = json;
                observer.next(true);
                observer.complete();
                // }
                // else {
                //   observer.next(false);
                //   observer.complete();
                // }
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createChild = function (body) {
        var _this = this;
        console.log("func createChild()");
        if (!ApiProvider_1.pregnancy) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
                _this.createPregnancy({}).subscribe(function (access) {
                    _this.createChild(body).subscribe(function (access) {
                        observer.next(true);
                        observer.complete();
                    });
                });
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
                var endpoint = _this.baseURL + 'children/';
                body['pregnancy'] = ApiProvider_1.pregnancy.url;
                console.log(body);
                _this.http.post(endpoint, body, {
                    headers: _this.headers,
                }).subscribe(function (json) {
                    console.log(json);
                    ApiProvider_1.children.push(json);
                    observer.next(true);
                    observer.complete();
                }, function (err) {
                    console.log(err);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
    };
    ApiProvider.prototype.updateChild = function (params) {
        var _this = this;
        console.log("func updateChild()");
        if (!params.url) {
            return this.createChild(params);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.http.put(params.url, params, {
                headers: _this.headers
            }).subscribe(function (json) {
                console.log(json);
                var child = _this.search_child(params.url);
                child = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.getPregnancy = function () {
        var _this = this;
        console.log("func getPregnancy");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'pregnancies/';
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('user', String(ApiProvider_1.currentUser.id));
            _this.http.get(endpoint, {
                headers: _this.headers,
                params: params,
            }).subscribe(function (json) {
                console.log(json);
                var pregnancy = json[0];
                if (pregnancy) {
                    ApiProvider_1.pregnancy = json[0];
                }
                observer.next(pregnancy);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createPregnancy = function (body) {
        var _this = this;
        console.log("func createPregnancy()");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'pregnancies/';
            body['user'] = ApiProvider_1.currentUser.url;
            console.log(body);
            _this.http.post(endpoint, body, {
                headers: _this.headers,
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.pregnancy = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.updatePregnancy = function (params) {
        var _this = this;
        console.log("func updatePregnancy()");
        if (!ApiProvider_1.pregnancy) {
            return this.createPregnancy(params);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = ApiProvider_1.pregnancy.url;
            _this.http.put(endpoint, params, {
                headers: _this.headers
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.pregnancy = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createLocation = function (body) {
        var _this = this;
        console.log("func createLocation()");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'locations/';
            body['user'] = ApiProvider_1.currentUser.url;
            console.log(body);
            _this.http.post(endpoint, body, {
                headers: _this.headers,
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.location = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createGpac = function (body) {
        var _this = this;
        console.log("func createGpac()");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'gpacs/';
            body = _this.nullCheckForGPAC(body);
            body['user'] = ApiProvider_1.currentUser.url;
            console.log(body);
            _this.http.post(endpoint, body, {
                headers: _this.headers,
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.gpac = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.updateGpac = function (params) {
        var _this = this;
        console.log("func updateGpac()");
        console.log(ApiProvider_1.gpac);
        if (!ApiProvider_1.gpac) {
            return this.createGpac(params);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = ApiProvider_1.gpac.url;
            _this.http.put(endpoint, params, {
                headers: _this.headers
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.gpac = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.updateUser = function (user) {
        var _this = this;
        console.log("func updateUser()");
        console.log(user);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = ApiProvider_1.currentUser.url;
            _this.http.put(endpoint, user, {
                headers: _this.headers
            }).subscribe(function (json) {
                console.log(json);
                ApiProvider_1.currentUser = json;
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.getUserId = function (device_id) {
        var _this = this;
        var endpoint = this.baseURL + 'users/';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('device_id', device_id);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.http.get(endpoint, {
                headers: _this.headers,
                params: params,
            })
                .subscribe(function (json) {
                console.log(json);
                if (json.length > 0) {
                    ApiProvider_1.currentUser = json[0];
                    observer.next(true);
                    observer.complete();
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }, function (error) {
                console.log(error);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createUser = function (full_name, device_id) {
        var _this = this;
        console.log("create new user");
        var endpoint = this.baseURL + 'users/';
        var body = {
            full_name: full_name,
            device_id: device_id,
            password: 'password',
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.http.post(endpoint, body, {
                headers: _this.headers,
            })
                .subscribe(function (json) {
                console.log("createUser Json");
                console.log(json);
                ApiProvider_1.currentUser = json;
                observer.next(true);
                observer.complete();
            }, function (error) {
                console.log(error);
                ApiProvider_1.currentUser = new User();
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.createAccessControl = function (params) {
        var _this = this;
        console.log("func createAccessControl()");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var endpoint = _this.baseURL + 'accessControl/';
            params['user'] = ApiProvider_1.currentUser.url;
            console.log(ApiProvider_1.currentUser);
            console.log(params);
            _this.http.post(endpoint, params, {
                headers: _this.headers
            }).subscribe(function (json) {
                console.log(json);
                observer.next(true);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.predictAccessControl = function (data) {
        var _this = this;
        var endpoint = this.baseURL + 'predict/';
        var params = {}; //.set('device_id', device_id);
        var num = data.length;
        params['input_num'] = String(num);
        for (var i = 0; i < num; i++) {
            // params.append('q' + i, data[i]);
            params['q' + i] = data[i];
        }
        console.log(num);
        console.log(data);
        console.log(params);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            _this.http.get(endpoint, {
                headers: _this.headers,
                params: params,
            })
                .subscribe(function (json) {
                console.log(json);
                observer.next(json);
                observer.complete();
            }, function (error) {
                console.log(error);
                observer.next(false);
                observer.complete();
            });
        });
    };
    ApiProvider.prototype.sliceId = function (str) {
        return str.slice();
    };
    ApiProvider.prototype.nullCheckForGPAC = function (gpac) {
        for (var key in gpac) {
            gpac[key] = gpac[key] || 0;
        }
        return gpac;
    };
    ApiProvider.prototype.search_child = function (child_url) {
        console.log("called search _child");
        console.log("child_id:" + child_url);
        for (var _i = 0, _a = ApiProvider_1.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.url === child_url) {
                return child;
            }
        }
    };
    var ApiProvider_1;
    ApiProvider.currentUser = new User();
    ApiProvider.children = [];
    ApiProvider = ApiProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__device_id_device_id__["a" /* DeviceIdProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage_ngx__["a" /* NativeStorage */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation_ngx__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationTracker = /** @class */ (function () {
    function LocationTracker(zone, backgroundGeolocation, geolocation, api) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.api = api;
        this.lat = 0;
        this.lng = 0;
        if (__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* ApiProvider */].currentUser.enable_location_sharing) {
            if (this.backgroundGeolocation.isLocationEnabled) {
                console.log("OK");
                this.startTracking();
            }
        }
    }
    LocationTracker.prototype.startTracking = function () {
        // Background Tracking
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: false,
            interval: 2000,
            stopOnTerminate: false,
        };
        this.backgroundGeolocation.configure(config)
            .then(function () {
            _this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation_ngx__["b" /* BackgroundGeolocationEvents */].location).subscribe(function (location) {
                console.log("output Location");
                console.log(location);
                console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
                _this.zone.run(function () {
                    _this.lat = location.latitude;
                    _this.lng = location.longitude;
                });
                _this.backgroundGeolocation.finish();
            }, function (err) {
                console.log(err);
            });
        });
        // this.backgroundGeolocation.configure(config).subscribe((location) => {
        //   console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
        //   // Run update inside of Angular's zone
        //   this.zone.run(() => {
        //     this.lat = location.latitude;
        //     this.lng = location.longitude;
        //   });
        // }, (err) => {
        //   console.log(err);
        // });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        // this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined)).subscribe((position: Geoposition) => {
        //   (position: Geolocation) => {
        //   console.log(position);
        //   // upload position data to server
        //   let params = {
        //     accuracy: position['coords']['accuracy'],
        //     latitude: position['coords']['latitude'],
        //     longitude: position['coords']['longitude'],
        //     timestamp: this.unixTime2ymd(position['timestamp']),
        //   }
        //   this.api.createLocation(params).subscribe();
        //   // Run update inside of Angular's zone
        //   this.zone.run(() => {
        //     this.lat = position.coords.latitude;
        //     this.lng = position.coords.longitude;
        //   });
        // });
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log("getCurrentPosition");
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log("Error getting location", error);
        });
        var watch = this.geolocation.watchPosition(options);
        watch.subscribe(function (position) {
            console.log("watch");
            var params = {
                accuracy: position.coords.accuracy,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timestamp: _this.unixTime2ymd(position['timestamp']),
            };
            _this.api.createLocation(params).subscribe();
            // Run update inside of Angular's zone
            // this.zone.run(() => {
            //       this.lat = position.coords.latitude;
            //       this.lng = position.coords.longitude;
            // });
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTracker.prototype.unixTime2ymd = function (intTime) {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours();
        var min = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
        var sec = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds();
        var str = (year + '-' + month + '-' + day + 'T' + hour + ':' + min + ':' + sec);
        return str;
    };
    LocationTracker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation_ngx__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* ApiProvider */]])
    ], LocationTracker);
    return LocationTracker;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_story__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__note_note__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(174);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__story_story__["a" /* StoryPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__note_note__["a" /* NotePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab2Root" tabTitle="ノート" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="ストーリー" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="設定" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>準備中</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>準備中</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evacuation_bag_evacuation_bag__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryPage = /** @class */ (function () {
    function StoryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            // {
            //   title: "防災マップを作りましょう",
            //   icon: "map",
            //   page: EvacuationBagPage,
            // },
            {
                title: "避難バッグを見直そう",
                icon: "basket",
                page: __WEBPACK_IMPORTED_MODULE_2__evacuation_bag_evacuation_bag__["a" /* EvacuationBagPage */],
            },
        ];
    }
    StoryPage.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evacuation_bag_evacuation_bag__["a" /* EvacuationBagPage */]);
    };
    StoryPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    StoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-story',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/story/story.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ストーリー</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-style">\n  <h3>ストーリーを読む</h3>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)" class="bg-style">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/story/story.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], StoryPage);
    return StoryPage;
}());

//# sourceMappingURL=story.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvacuationBagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evacuation_bag_note_evacuation_bag_note__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvacuationBagPage = /** @class */ (function () {
    function EvacuationBagPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EvacuationBagPage.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evacuation_bag_note_evacuation_bag_note__["a" /* EvacuationBagNotePage */]);
    };
    EvacuationBagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evacuation-bag',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/evacuation-bag/evacuation-bag.html"*/'<!--\n  Generated template for the EvacuationBagPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>避難バッグを見直そう</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-style" padding>\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col >\n        <h2>第１次避難バッグの基本は、「持てる・使える・助かる」</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row text-left>\n      <ion-col>\n        <p>\n          いちばん大切なものは命です。\n          グッズが充実していると安全ですが、あくまで重量オーバーにならないように･･････。\n        </p>\n        <p>\n          非常バッグは必ず一度は使ってみて、すべて”使える”状態にしておきましょう。\n        </p>\n        <p>\n          最優先は、いのちを守るために必要な非常グッズ。次に必要なのは生活必需品です。\n          １日の生活を振り返り、備えておきましょう\n        </p>\n        <p>\n          避難バッグと合わせてヘルメットを備えておくと安心です。\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center>\n      <ion-col>\n        <img width="280" height="280" src="assets/imgs/evacuation-bag.png">\n      </ion-col>\n    </ion-row>\n\n    <div style="height: 40px;"></div>\n\n    <ion-row text-center>\n      <ion-col >\n        <h2>一旦落ち着いてから取りに戻る、第２次避難バッグ</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row text-left>\n      <ion-col>\n        <p>\n          一時帰宅の安全が確認できてから、持ち出す避難バッグです。\n          備蓄の延長で備えておくこともオススメです。\n        </p>\n        <p>\n          まずはじめに、持ち出し品リストを作り、発災時に必要度が高いものから優先順位をつけて、\n          第1次避難バッグに備えます。\n          入りきれなかったものを、第2次バッグに。\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <div style="height: 30px;"></div>\n\n    <ion-row text-center>\n      <ion-col >\n        <h2>緊急時に命を守るグッズは、常時携帯用避難バッグに</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row text-left>\n      <ion-col>\n        <p>\n          緊急時の必要度が高く、常時持ち歩けるものは、ポーチなどにまとめ、持ち歩くようにしましょう。\n        </p>\n        <p>\n          バッグの中身一例：ホイッスル、保温シート、簡易トイレ、ラジオ、懐中電灯、非常食（簡単に食べられるもの）、\n          水、パーソナルカード、常用中の薬、ガーゼのほか、妊娠週数や乳幼児の年齢によって必要なもの一式\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light" block (click)="onClick()">避難バッグリストへ</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/evacuation-bag/evacuation-bag.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EvacuationBagPage);
    return EvacuationBagPage;
}());

//# sourceMappingURL=evacuation-bag.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evacuation_bag_note_evacuation_bag_note__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pregnancy_data_pregnancy_data__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_data_children_data__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consultation_record_list_consultation_record_list__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gpac_gpac__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__consultation_chart_list_consultation_chart_list__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotePage = /** @class */ (function () {
    function NotePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.personalData = [
            {
                title: "妊産婦医療データ",
                icon: "analytics",
                page: __WEBPACK_IMPORTED_MODULE_7__consultation_chart_list_consultation_chart_list__["a" /* ConsultationChartListPage */],
            },
            {
                title: "妊婦健診結果一覧",
                icon: "medkit",
                page: __WEBPACK_IMPORTED_MODULE_5__consultation_record_list_consultation_record_list__["a" /* ConsultationRecordListPage */],
            },
            {
                title: "今回の妊娠に関するデータ",
                icon: "woman",
                page: __WEBPACK_IMPORTED_MODULE_3__pregnancy_data_pregnancy_data__["a" /* PregnancyDataPage */],
            },
            {
                title: "母体・胎児に関するデータ",
                icon: "happy",
                page: __WEBPACK_IMPORTED_MODULE_4__children_data_children_data__["a" /* ChildrenDataPage */],
            },
            {
                title: "過去の妊娠に関するデータ",
                icon: "archive",
                page: __WEBPACK_IMPORTED_MODULE_6__gpac_gpac__["a" /* GpacPage */],
            },
        ];
        this.stories = [
            // {
            //   title: "防災マップ",
            //   icon: "map",
            //   page: EvacuationBagNotePage,
            // },
            {
                title: "避難バッグリスト",
                icon: "basket",
                page: __WEBPACK_IMPORTED_MODULE_2__evacuation_bag_note_evacuation_bag_note__["a" /* EvacuationBagNotePage */],
            },
        ];
    }
    NotePage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    NotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-note',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/note/note.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ノート</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-style">\n  <h1 ion-text>健康管理ノート</h1>\n  <ion-list>\n    <button ion-item *ngFor="let item of personalData" (click)="itemTapped($event, item)" class="bg-style">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n  <h1 ion-text>ストーリーノート</h1>\n  <ion-list>\n    <button ion-item *ngFor="let item of stories" (click)="itemTapped($event, item)" class="bg-style">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/note/note.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], NotePage);
    return NotePage;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    config: {
        apiKey: "AIzaSyB-oPsdkDvlfUuat-lX-pXFgxmVld5VOTU",
        authDomain: "emcdh-2758a.firebaseapp.com",
        databaseURL: "https://emcdh-2758a.firebaseio.com",
        projectId: "emcdh-2758a",
        storageBucket: "emcdh-2758a.appspot.com",
        messagingSenderId: "827424276211",
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(551);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_story_story__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_note_note__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_evacuation_bag_evacuation_bag__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_evacuation_bag_note_evacuation_bag_note__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pregnant_checklist_pregnant_checklist__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_start_start__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pregnancy_data_pregnancy_data__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_children_data_children_data__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_consultation_record_consultation_record__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_access_control_access_control__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_consultation_chart_consultation_chart__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_consultation_chart_list_consultation_chart_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_experiment_experiment__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_access_control_prep_access_control_prep__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_location_tracker_location_tracker__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_device_id_device_id__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_date_picker_ngx__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar_ngx__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen_ngx__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation_ngx__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_background_geolocation_ngx__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_unique_device_id_ngx__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_auth_service_auth_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_setting_setting__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_consultation_record_list_consultation_record_list__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_gpac_gpac__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_device_ngx__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_charts__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_native_storage_ngx__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_in_app_browser_ngx__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_facebook_ngx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__environments_environment__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_fire__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_fire_auth__ = __webpack_require__(144);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_story_story__["a" /* StoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_note_note__["a" /* NotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_evacuation_bag_evacuation_bag__["a" /* EvacuationBagPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_evacuation_bag_note_evacuation_bag_note__["a" /* EvacuationBagNotePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pregnant_checklist_pregnant_checklist__["a" /* PregnantChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pregnancy_data_pregnancy_data__["a" /* PregnancyDataPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_children_data_children_data__["a" /* ChildrenDataPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_consultation_record_consultation_record__["a" /* ConsultationRecordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_consultation_record_list_consultation_record_list__["a" /* ConsultationRecordListPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_gpac_gpac__["a" /* GpacPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_access_control_access_control__["a" /* AccessControlPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_consultation_chart_consultation_chart__["a" /* ConsultationChartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_consultation_chart_list_consultation_chart_list__["a" /* ConsultationChartListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_experiment_experiment__["a" /* ExperimentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_access_control_prep_access_control_prep__["a" /* AccessControlPrepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_39_ng2_charts__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/access-control-prep/access-control-prep.module#AccessControlPrepPageModule', name: 'AccessControlPrepPage', segment: 'access-control-prep', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/children-data/children-data.module#ChildrenDataPageModule', name: 'ChildrenDataPage', segment: 'children-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultation-chart-list/consultation-chart-list.module#ConsultationChartListPageModule', name: 'ConsultationChartListPage', segment: 'consultation-chart-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultation-chart/consultation-chart.module#ConsultationChartPageModule', name: 'ConsultationChartPage', segment: 'consultation-chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultation-record-list/consultation-record-list.module#ConsultationRecordListPageModule', name: 'ConsultationRecordListPage', segment: 'consultation-record-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultation-record/consultation-record.module#ConsultationRecordPageModule', name: 'ConsultationRecordPage', segment: 'consultation-record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/experiment/experiment.module#ExperimentPageModule', name: 'ExperimentPage', segment: 'experiment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gpac/gpac.module#GpacPageModule', name: 'GpacPage', segment: 'gpac', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pregnancy-data/pregnancy-data.module#PregnancyDataPageModule', name: 'PregnancyDataPage', segment: 'pregnancy-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/access-control/access-control.module#AccessControlPageModule', name: 'AccessControlPage', segment: 'access-control', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_44__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_43__environments_environment__["a" /* environment */].config),
                __WEBPACK_IMPORTED_MODULE_45__angular_fire_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_story_story__["a" /* StoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_note_note__["a" /* NotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_evacuation_bag_evacuation_bag__["a" /* EvacuationBagPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_evacuation_bag_note_evacuation_bag_note__["a" /* EvacuationBagNotePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pregnant_checklist_pregnant_checklist__["a" /* PregnantChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pregnancy_data_pregnancy_data__["a" /* PregnancyDataPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_children_data_children_data__["a" /* ChildrenDataPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_consultation_record_consultation_record__["a" /* ConsultationRecordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_consultation_record_list_consultation_record_list__["a" /* ConsultationRecordListPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_gpac_gpac__["a" /* GpacPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_access_control_access_control__["a" /* AccessControlPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_consultation_chart_consultation_chart__["a" /* ConsultationChartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_consultation_chart_list_consultation_chart_list__["a" /* ConsultationChartListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_experiment_experiment__["a" /* ExperimentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_access_control_prep_access_control_prep__["a" /* AccessControlPrepPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_date_picker_ngx__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_background_geolocation_ngx__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_24__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_unique_device_id_ngx__["a" /* UniqueDeviceID */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_device_id_device_id__["a" /* DeviceIdProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_34__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_setting_setting__["a" /* SettingProvider */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_device_ngx__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_native_storage_ngx__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_facebook_ngx__["a" /* Facebook */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 252,
	"./af.js": 252,
	"./ar": 253,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 253,
	"./az": 260,
	"./az.js": 260,
	"./be": 261,
	"./be.js": 261,
	"./bg": 262,
	"./bg.js": 262,
	"./bm": 263,
	"./bm.js": 263,
	"./bn": 264,
	"./bn.js": 264,
	"./bo": 265,
	"./bo.js": 265,
	"./br": 266,
	"./br.js": 266,
	"./bs": 267,
	"./bs.js": 267,
	"./ca": 268,
	"./ca.js": 268,
	"./cs": 269,
	"./cs.js": 269,
	"./cv": 270,
	"./cv.js": 270,
	"./cy": 271,
	"./cy.js": 271,
	"./da": 272,
	"./da.js": 272,
	"./de": 273,
	"./de-at": 274,
	"./de-at.js": 274,
	"./de-ch": 275,
	"./de-ch.js": 275,
	"./de.js": 273,
	"./dv": 276,
	"./dv.js": 276,
	"./el": 277,
	"./el.js": 277,
	"./en-SG": 278,
	"./en-SG.js": 278,
	"./en-au": 279,
	"./en-au.js": 279,
	"./en-ca": 280,
	"./en-ca.js": 280,
	"./en-gb": 281,
	"./en-gb.js": 281,
	"./en-ie": 282,
	"./en-ie.js": 282,
	"./en-il": 283,
	"./en-il.js": 283,
	"./en-nz": 284,
	"./en-nz.js": 284,
	"./eo": 285,
	"./eo.js": 285,
	"./es": 286,
	"./es-do": 287,
	"./es-do.js": 287,
	"./es-us": 288,
	"./es-us.js": 288,
	"./es.js": 286,
	"./et": 289,
	"./et.js": 289,
	"./eu": 290,
	"./eu.js": 290,
	"./fa": 291,
	"./fa.js": 291,
	"./fi": 292,
	"./fi.js": 292,
	"./fo": 293,
	"./fo.js": 293,
	"./fr": 294,
	"./fr-ca": 295,
	"./fr-ca.js": 295,
	"./fr-ch": 296,
	"./fr-ch.js": 296,
	"./fr.js": 294,
	"./fy": 297,
	"./fy.js": 297,
	"./ga": 298,
	"./ga.js": 298,
	"./gd": 299,
	"./gd.js": 299,
	"./gl": 300,
	"./gl.js": 300,
	"./gom-latn": 301,
	"./gom-latn.js": 301,
	"./gu": 302,
	"./gu.js": 302,
	"./he": 303,
	"./he.js": 303,
	"./hi": 304,
	"./hi.js": 304,
	"./hr": 305,
	"./hr.js": 305,
	"./hu": 306,
	"./hu.js": 306,
	"./hy-am": 307,
	"./hy-am.js": 307,
	"./id": 308,
	"./id.js": 308,
	"./is": 309,
	"./is.js": 309,
	"./it": 310,
	"./it-ch": 311,
	"./it-ch.js": 311,
	"./it.js": 310,
	"./ja": 312,
	"./ja.js": 312,
	"./jv": 313,
	"./jv.js": 313,
	"./ka": 314,
	"./ka.js": 314,
	"./kk": 315,
	"./kk.js": 315,
	"./km": 316,
	"./km.js": 316,
	"./kn": 317,
	"./kn.js": 317,
	"./ko": 318,
	"./ko.js": 318,
	"./ku": 319,
	"./ku.js": 319,
	"./ky": 320,
	"./ky.js": 320,
	"./lb": 321,
	"./lb.js": 321,
	"./lo": 322,
	"./lo.js": 322,
	"./lt": 323,
	"./lt.js": 323,
	"./lv": 324,
	"./lv.js": 324,
	"./me": 325,
	"./me.js": 325,
	"./mi": 326,
	"./mi.js": 326,
	"./mk": 327,
	"./mk.js": 327,
	"./ml": 328,
	"./ml.js": 328,
	"./mn": 329,
	"./mn.js": 329,
	"./mr": 330,
	"./mr.js": 330,
	"./ms": 331,
	"./ms-my": 332,
	"./ms-my.js": 332,
	"./ms.js": 331,
	"./mt": 333,
	"./mt.js": 333,
	"./my": 334,
	"./my.js": 334,
	"./nb": 335,
	"./nb.js": 335,
	"./ne": 336,
	"./ne.js": 336,
	"./nl": 337,
	"./nl-be": 338,
	"./nl-be.js": 338,
	"./nl.js": 337,
	"./nn": 339,
	"./nn.js": 339,
	"./pa-in": 340,
	"./pa-in.js": 340,
	"./pl": 341,
	"./pl.js": 341,
	"./pt": 342,
	"./pt-br": 343,
	"./pt-br.js": 343,
	"./pt.js": 342,
	"./ro": 344,
	"./ro.js": 344,
	"./ru": 345,
	"./ru.js": 345,
	"./sd": 346,
	"./sd.js": 346,
	"./se": 347,
	"./se.js": 347,
	"./si": 348,
	"./si.js": 348,
	"./sk": 349,
	"./sk.js": 349,
	"./sl": 350,
	"./sl.js": 350,
	"./sq": 351,
	"./sq.js": 351,
	"./sr": 352,
	"./sr-cyrl": 353,
	"./sr-cyrl.js": 353,
	"./sr.js": 352,
	"./ss": 354,
	"./ss.js": 354,
	"./sv": 355,
	"./sv.js": 355,
	"./sw": 356,
	"./sw.js": 356,
	"./ta": 357,
	"./ta.js": 357,
	"./te": 358,
	"./te.js": 358,
	"./tet": 359,
	"./tet.js": 359,
	"./tg": 360,
	"./tg.js": 360,
	"./th": 361,
	"./th.js": 361,
	"./tl-ph": 362,
	"./tl-ph.js": 362,
	"./tlh": 363,
	"./tlh.js": 363,
	"./tr": 364,
	"./tr.js": 364,
	"./tzl": 365,
	"./tzl.js": 365,
	"./tzm": 366,
	"./tzm-latn": 367,
	"./tzm-latn.js": 367,
	"./tzm.js": 366,
	"./ug-cn": 368,
	"./ug-cn.js": 368,
	"./uk": 369,
	"./uk.js": 369,
	"./ur": 370,
	"./ur.js": 370,
	"./uz": 371,
	"./uz-latn": 372,
	"./uz-latn.js": 372,
	"./uz.js": 371,
	"./vi": 373,
	"./vi.js": 373,
	"./x-pseudo": 374,
	"./x-pseudo.js": 374,
	"./yo": 375,
	"./yo.js": 375,
	"./zh-cn": 376,
	"./zh-cn.js": 376,
	"./zh-hk": 377,
	"./zh-hk.js": 377,
	"./zh-tw": 378,
	"./zh-tw.js": 378
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 583;

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_start_start__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(432);
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
    // rootPage:any = TabsPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_start_start__["a" /* StartPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.initializeApp = function () {
        __WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PregnantChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker_ngx__ = __webpack_require__(142);
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
 * Generated class for the PregnantChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PregnantChecklistPage = /** @class */ (function () {
    function PregnantChecklistPage(navCtrl, navParams, local_storage, datePicker) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.local_storage = local_storage;
        this.datePicker = datePicker;
        this.STORAGE_KEY = 'PregnantData';
        this.ASTHMA_KEY = 'hasAsthma';
        this.ALLERGY_KEY = 'hasAllergy';
        this.DRUG_KEY = 'isTakingDrug';
        this.FETAL_POSITION_KEY = 'fetalPosition';
        this.PLACENTA_ATTACHMENT_SITE_KEY = 'placentaAttachmentSite';
        this.CERVICAL_ASTHENIA_KEY = 'hasCervicalAsthenia';
        this.PRETERM_DELIVERY_KEY = 'hasDangerOfPretermDelivery';
        this.PROTEIN_TEST_KEY = 'urinaryProteinTestResult';
        this.SUGAR_TEST_KEY = 'urinarySugarTestResult';
        this.EDEMA_KEY = 'hasEdema';
        this.CHILD_WEIGHT_KEY = 'childWeight';
        this.PARITY_KEY = 'parity';
        this.nonSelectQuestions = {};
        this.storage = local_storage;
        local_storage.get(this.STORAGE_KEY).then(function (pregnantData) {
            if (!pregnantData) {
                local_storage.set(_this.STORAGE_KEY, {});
                pregnantData = {};
            }
            var hasAsthma = pregnantData[_this.ASTHMA_KEY] || ''; //喘息
            var hasAllergy = pregnantData[_this.ALLERGY_KEY] || '';
            var isTakingDrug = pregnantData[_this.DRUG_KEY] || '';
            var fetalPosition = pregnantData[_this.FETAL_POSITION_KEY] || '';
            var placentaAttachmentSite = pregnantData[_this.PLACENTA_ATTACHMENT_SITE_KEY] || '';
            var hasCervicalAsthenia = pregnantData[_this.CERVICAL_ASTHENIA_KEY] || '';
            var hasDangerOfPretermDelivery = pregnantData[_this.PRETERM_DELIVERY_KEY] || '';
            var urinaryProteinTestResult = pregnantData[_this.PROTEIN_TEST_KEY] || '';
            var urinarySugarTestResult = pregnantData[_this.SUGAR_TEST_KEY] || '';
            var hasEdema = pregnantData[_this.EDEMA_KEY] || '';
            var childWeight = pregnantData[_this.CHILD_WEIGHT_KEY] || '';
            var parity = pregnantData[_this.PARITY_KEY] || '';
            _this.motherQuestions = [
                {
                    title: "喘息",
                    key: _this.ASTHMA_KEY,
                    isMultiple: false,
                    selectedValue: hasAsthma,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ]
                },
                {
                    title: "アレルギー",
                    key: _this.ALLERGY_KEY,
                    isMultiple: false,
                    selectedValue: hasAllergy,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ]
                },
                {
                    title: "服用中の薬",
                    key: _this.DRUG_KEY,
                    isMultiple: false,
                    selectedValue: isTakingDrug,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ]
                },
            ];
            _this.lastExamQuestions = [
                {
                    title: "胎位",
                    key: _this.FETAL_POSITION_KEY,
                    isMultiple: false,
                    selectedValue: fetalPosition,
                    options: [
                        {
                            value: "頭位",
                            displayName: "頭位",
                        },
                        {
                            value: "骨盤位",
                            displayName: "骨盤位",
                        },
                        {
                            value: "不明",
                            displayName: "不明",
                        },
                    ]
                },
                {
                    title: "胎盤付着部位",
                    key: _this.PLACENTA_ATTACHMENT_SITE_KEY,
                    isMultiple: false,
                    selectedValue: placentaAttachmentSite,
                    options: [
                        {
                            value: "正常",
                            displayName: "正常",
                        },
                        {
                            value: "前置",
                            displayName: "前置",
                        },
                        {
                            value: "辺縁",
                            displayName: "辺縁",
                        },
                        {
                            value: "後壁",
                            displayName: "後壁",
                        },
                        {
                            value: "不明",
                            displayName: "不明",
                        },
                    ]
                },
                {
                    title: "頸管無力症の診断",
                    key: _this.CERVICAL_ASTHENIA_KEY,
                    isMultiple: false,
                    selectedValue: hasCervicalAsthenia,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ]
                },
                {
                    title: "切迫流・早産の診断",
                    key: _this.PRETERM_DELIVERY_KEY,
                    isMultiple: false,
                    selectedValue: hasDangerOfPretermDelivery,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ]
                },
                {
                    title: "浮腫",
                    key: _this.EDEMA_KEY,
                    isMultiple: false,
                    selectedValue: hasEdema,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ]
                },
                {
                    title: "尿検査の結果(蛋白）",
                    key: _this.PROTEIN_TEST_KEY,
                    isMultiple: false,
                    selectedValue: urinaryProteinTestResult,
                    options: [
                        {
                            value: "-",
                            displayName: "-",
                        },
                        {
                            value: "+",
                            displayName: "+",
                        },
                        {
                            value: "++",
                            displayName: "++",
                        },
                        {
                            value: "+++",
                            displayName: "+++",
                        },
                    ]
                },
                {
                    title: "尿検査の結果(糖）",
                    key: _this.SUGAR_TEST_KEY,
                    isMultiple: false,
                    selectedValue: urinarySugarTestResult,
                    options: [
                        {
                            value: "-",
                            displayName: "-",
                        },
                        {
                            value: "+",
                            displayName: "+",
                        },
                        {
                            value: "++",
                            displayName: "++",
                        },
                        {
                            value: "+++",
                            displayName: "+++",
                        },
                    ]
                },
            ];
            _this.nonSelectQuestions[_this.CHILD_WEIGHT_KEY] = childWeight;
            _this.nonSelectQuestions[_this.PARITY_KEY] = parity;
            console.log(_this.nonSelectQuestions);
        });
    }
    PregnantChecklistPage.prototype.onDateChange = function (event, key) {
        var _this = this;
        console.log("called onDateChange()");
        console.log(event);
        console.log(key);
        this.storage.get(this.STORAGE_KEY).then(function (pregnantData) {
            var formattedDate = event.year + '/' + ('0' + event.month).slice(-2) + '/' + ('0' + event.day).slice(-2);
            pregnantData[key] = formattedDate;
            console.log(pregnantData);
            _this.storage.set(_this.STORAGE_KEY, pregnantData);
        });
    };
    PregnantChecklistPage.prototype.onChange2 = function (event, key) {
        var _this = this;
        console.log("called onchange1");
        console.log(event);
        console.log(key);
        console.log(event.value);
        this.storage.get(this.STORAGE_KEY).then(function (pregnantData) {
            pregnantData[key] = event.value;
            console.log(pregnantData);
            _this.storage.set(_this.STORAGE_KEY, pregnantData);
        });
    };
    PregnantChecklistPage.prototype.onChange = function (val) {
        var _this = this;
        console.log("called onchange2");
        console.log(val);
        this.storage.get(this.STORAGE_KEY).then(function (pregnantData) {
            pregnantData[val['key']] = val['selectedValue'];
            console.log(pregnantData);
            _this.storage.set(_this.STORAGE_KEY, pregnantData);
        });
    };
    PregnantChecklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PregnantChecklistPage');
    };
    PregnantChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pregnant-checklist',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/pregnant-checklist/pregnant-checklist.html"*/'<!--\n  Generated template for the PregnantChecklistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>妊婦健康ノート</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3>お母さんについて</h3>\n\n  <ion-list class="no-margin">\n    <ion-item>\n      <ion-label>分娩予定日</ion-label>\n      <ion-datetime displayFormat="YYYY/MM/DD" placeholder="入力する" [(ngModel)]="nonSelectQuestions[\'expectedDateOfDelivery\']"  (ionChange)="onDateChange($event,\'expectedDateOfDelivery\')"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>最終月経開始日</ion-label>\n      <ion-datetime displayFormat="YYYY/MM/DD" placeholder="入力する" [(ngModel)]="nonSelectQuestions[\'lastMenstrualPeriodStartDate\']"  (ionChange)="onDateChange($event,\'lastMenstrualPeriodStartDate\')"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>妊娠週数</ion-label>\n      <ion-input type="text" [value]="nonSelectQuestions[\'gestationalAge\']" disabled="true" text-right></ion-input>\n    </ion-item>\n    <ion-item no-lines class="remake-border">\n      <ion-label>これまでの出産回数</ion-label>\n      <ion-input type="number" placeholder="入力する" [value]="nonSelectQuestions[\'parity\']" (ionChange)="onChange2($event, \'parity\')" text-right></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list [virtualScroll]="motherQuestions">\n    <div *virtualItem="let question" style="width:100%">\n      <ion-item>\n        <ion-label>{{question.title}}</ion-label>\n        <ion-select [(ngModel)]="question.selectedValue" [multiple]="question.isMultiple" okText="完了" cancelText="キャンセル" (ionChange)="onChange2(question)">\n          <ion-option *ngFor="let option of question.options" [value]="option.value" >\n            {{option.displayName}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <div style="height: 20px"></div>\n\n  <h3>お子様について</h3>\n  <ion-list class="no-margin">\n    <ion-item no-lines class="remake-border" id="childWeight" >\n      <ion-label>推定体重</ion-label>\n      <ion-input type="number" placeholder="入力する"  [value]="nonSelectQuestions[\'childWeight\']" (ionChange)="onChange2($event, \'childWeight\')" text-right></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list [virtualScroll]="lastExamQuestions">\n    <div *virtualItem="let question" style="width:100%">\n      <ion-item>\n        <ion-label>{{question.title}}</ion-label>\n        <ion-select [(ngModel)]="question.selectedValue" [multiple]="question.isMultiple" okText="完了" cancelText="キャンセル" (ionChange)="onChange(question)">\n          <ion-option *ngFor="let option of question.options" [value]="option.value">\n            {{option.displayName}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/pregnant-checklist/pregnant-checklist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker_ngx__["a" /* DatePicker */]])
    ], PregnantChecklistPage);
    return PregnantChecklistPage;
}());

//# sourceMappingURL=pregnant-checklist.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceIdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id_ngx__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device_ngx__ = __webpack_require__(248);
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
  Generated class for the DeviceIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DeviceIdProvider = /** @class */ (function () {
    function DeviceIdProvider(uniqueDeviceID, device, local_storage) {
        this.uniqueDeviceID = uniqueDeviceID;
        this.device = device;
        this.local_storage = local_storage;
        this.device_id = 'local_dev';
        this.STORAGE_KEY = "DEVICE_ID";
    }
    DeviceIdProvider.prototype.getDeviceID = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.device_id = _this.device.uuid || 'local_dev';
            console.log("this device ID set to " + _this.device_id);
            observer.next(_this.device_id);
            observer.complete();
            // this.uniqueDeviceID.get()
            // .then((uuid: any) => {
            //   this.device_id = uuid;
            //   console.log("this device ID set to " + uuid);
            //   observer.next(this.device_id);
            //   observer.complete();
            // })
            // .catch((error: any) => {
            //   this.device_id = "local_dev"; //for web mock
            //   console.log(error)
            //   observer.next(this.device_id);
            //   observer.complete();
            // });
        });
    };
    DeviceIdProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id_ngx__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device_ngx__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DeviceIdProvider);
    return DeviceIdProvider;
}());

//# sourceMappingURL=device-id.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experiment_experiment__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(67);
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
 * Generated class for the AccessControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccessControlPage = /** @class */ (function () {
    function AccessControlPage(navCtrl, navParams, api, cdr, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.cdr = cdr;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.control_lists = [];
        this.selected_values = {};
        this.history = {};
        this.change_num = 0;
        this.TITLE_KEY = 'title';
        this.ROLE_KEY = 'role';
        this.TRIGGER_KEY = 'trigger';
        this.PLACE_KEY = 'place';
        this.PROFILE_KEY = 'profile';
        this.FULL_NAME_KEY = 'full_name';
        this.BIRTHDAY_KEY = 'birthday';
        this.JOB_KEY = 'job';
        this.TEL_KEY = 'tel';
        this.ADDRESS_KEY = 'address';
        this.HEALTH_KEY = 'health';
        this.HEIGHT_KEY = 'height';
        this.WEIGHT_BEFORE_PREGNANCE_KEY = 'weight_before_pregnancy';
        this.MEDICAL_HISTORY_KEY = 'medical_history';
        this.ALLERGY_KEY = 'allergy';
        this.TAKING_DRUGS_KEY = 'taking_drugs';
        this.GPAC_KEY = 'gpac';
        this.GRAVIDITY_KEY = 'gravidity';
        this.PARITY_KEY = 'parity';
        this.ABORTION_KEY = 'abortion';
        this.CAESAREAN_SECTION_KEY = 'caesarean_section';
        this.PREGNANCY_KEY = 'pregnancy';
        this.LAST_MENSTRUAL_KEY = 'last_menstruation_start_date';
        this.NUM_OF_CHILDREN_KEY = 'num_of_children_key';
        this.EDD_KEY = 'expected_delivery_date';
        this.WILL_CAESAREAN_SECTION_KEY = 'will_caesarean_section';
        this.REASON_FOR_CAESAREAN_SECTION_KEY = 'reason_for_caesarean_section';
        this.PLACENTA_ATTACHMENT_SITE_KEY = 'placenta_attachment_site';
        this.RISK_OF_THREATENED_ABORTION_KEY = 'risk_of_threatened_abortion';
        this.SCHEDULED_DATE_CORRECTION_KEY = 'scheduled_date_correction';
        this.CONSULTATION_RECORD_KEY = 'consultation_record_key';
        this.UTEROTOME_LENGTH_KEY = 'uterotome_length';
        this.WEIGHT_KEY = 'weight';
        this.BLOOD_PRESSURE_KEY = 'blood_pressure';
        this.ABDOMINAL_CIRCUMFERENCE_KEY = 'abdominal_circumference';
        this.EDEMA_KEY = 'edema';
        this.URINARY_PROTEIN_KEY = 'urinary_protein';
        this.URINARY_SUGAR_KEY = 'urinary_sugar';
        this.CERVICAL_LENGTH_KEY = 'cervical_length';
        this.CHILD_KEY = 'child';
        this.ESTIMATED_WEIGHT_KEY = 'estimated_weight';
        this.PRESENTATION_KEY = 'presentation';
        this.LOCATION_24H_KEY = 'location_24h';
        this.LOCATION_AFTER_OCCURRENCE_KEY = 'location_after_occurrence';
        this.LOCATION_ALL_KEY = 'location_all';
        this.PRE_COORDINATOR_KEY = 'prefecture_disaster_medical_coordinator';
        this.ARE_COORDINATOR_KEY = 'area_disaster_medical_coordinator';
        this.INSURANCE_TEAM_KEY = 'insurance_medical_activity_team';
        this.VOLUNTEER_TEAM_KEY = 'disaster_medical_volunteer_team';
        this.LOCAL_GOV_STUFF_KEY = 'local_government_stuff';
        this.LIAISON_KEY = 'obstetric_medical_support_liaison_member';
        this.PREDICT_COLUMNS = [
            '19',
            '26',
            '36',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '27',
            '28',
            '29',
            '32',
            '33',
            '35',
        ];
        this.OPTION_NAME_TO_VAL = {
            'いかなる場合も共有しない': 0,
            '大規模災害時のみ': 1,
            '中規模以上の災害時': 2,
            '小規模以上の災害時': 3,
        };
        this.assisted_mode = navParams.get('assisted') || false;
        console.log(navParams.get('meta_questions'));
        this.add_control_list({});
        console.log(navParams.get('first_questions'));
        //前ページの入力をもとに初期値を決定
        if (this.assisted_mode) {
            //assist on の場合
            var first_questions = this.navParams.get('first_questions');
            var first_question_ids = [];
            for (var i = 0; i < first_questions.length; i++) {
                var first_question = first_questions[i];
                this.selected_values[first_question.question_id] = first_question.selectedValue;
                first_question_ids.push(String(first_question.question_id));
            }
            console.log(first_question_ids);
            //fixed flag付
            for (var i = 0; i < this.control_lists[0]['objects'].length; i++) {
                var object = this.control_lists[0]['objects'][i];
                for (var k = 0; k < object.details.length; k++) {
                    var control = object.details[k];
                    console.log(control.question_id);
                    this.history[control.question_id] = [];
                    if (first_question_ids.indexOf(control.question_id) >= 0) {
                        this.control_lists[0]['objects'][i].details[k].is_fixed = true;
                        console.log(control.question_id + 'fixed');
                        continue;
                    }
                }
            }
            this.predictAccessControl();
            this.showToastWithCloseButton('!の質問項目は自動で予測された値のため、確認が必要です。');
        }
    }
    AccessControlPage.prototype.add_control_list = function (data) {
        var location_options = [
            {
                value: 0,
                name: '発災の24時間前から現在までの位置情報',
            },
            {
                value: 1,
                name: '発災後から現在までの位置情報',
            },
            {
                value: 2,
                name: '過去記録されたすべての位置情報',
            },
        ];
        var boolean_options = [
            {
                value: 0,
                name: 'いかなる場合も共有しない',
            },
            {
                value: 1,
                name: '大規模災害時のみ',
            },
            {
                value: 2,
                name: '中規模以上の災害時',
            },
            {
                value: 3,
                name: '小規模以上の災害時',
            },
        ];
        this.control_lists.push({
            title: data['title'] || '条件' + (this.control_lists.length + 1),
            url: data.url,
            conditions: [
                {
                    name: '共有相手',
                    selectedValue: data[this.ROLE_KEY],
                    isMultiple: true,
                    options: [
                        {
                            name: '都道府県医療コーディネーター',
                            value: 1,
                            colapse: true,
                        },
                        {
                            name: '地域災害医療コーディネーター',
                            value: 2,
                            colapse: false,
                        },
                        {
                            name: '保険医療活動チーム',
                            value: 3,
                            colapse: false,
                        },
                        {
                            name: '災害医療ボランティア',
                            value: 4,
                            colapse: false,
                        },
                        {
                            name: '地方自治体の職員など',
                            value: 5,
                            colapse: false,
                        },
                        {
                            name: '小児周産期リエゾン',
                            value: 6,
                            colapse: false,
                        },
                    ],
                    explanation: ',',
                },
            ],
            objects: [
                {
                    name: '基本情報',
                    key: this.PROFILE_KEY,
                    colapse: true,
                    detailShown: false,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '氏名',
                            key: this.FULL_NAME_KEY,
                            is_fixed: false,
                            question_id: '8',
                            selectedValue: data[this.FULL_NAME_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '生年月日',
                            key: this.BIRTHDAY_KEY,
                            is_fixed: false,
                            question_id: '9',
                            selectedValue: data[this.BIRTHDAY_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '現在の就労状況(就労の有無・仕事内容・通勤時間・就労時間など)',
                            key: this.JOB_KEY,
                            is_fixed: false,
                            question_id: '10',
                            selectedValue: data[this.JOB_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '電話番号',
                            key: this.TEL_KEY,
                            is_fixed: false,
                            question_id: '11',
                            selectedValue: data[this.TEL_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '住所',
                            key: this.ADDRESS_KEY,
                            is_fixed: false,
                            question_id: '12',
                            selectedValue: data[this.ADDRESS_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
                {
                    name: '妊産婦の健康情報',
                    key: this.HEALTH_KEY,
                    colapse: true,
                    detailShown: false,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '身長',
                            key: this.HEIGHT_KEY,
                            is_fixed: false,
                            question_id: '13',
                            selectedValue: data[this.HEIGHT_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '妊娠前体重',
                            key: this.WEIGHT_BEFORE_PREGNANCE_KEY,
                            is_fixed: false,
                            question_id: '14',
                            selectedValue: data[this.WEIGHT_BEFORE_PREGNANCE_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '既往歴(過去の病歴)',
                            key: this.MEDICAL_HISTORY_KEY,
                            is_fixed: false,
                            question_id: '15',
                            selectedValue: data[this.MEDICAL_HISTORY_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: 'アレルギー情報',
                            key: this.ALLERGY_KEY,
                            is_fixed: false,
                            question_id: '16',
                            selectedValue: data[this.ALLERGY_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '服薬中の薬',
                            key: this.TAKING_DRUGS_KEY,
                            is_fixed: false,
                            question_id: '17',
                            selectedValue: data[this.TAKING_DRUGS_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
                {
                    name: '妊娠歴に関する情報',
                    key: this.GPAC_KEY,
                    selectedValue: data[this.GPAC_KEY],
                    colapse: true,
                    detailShown: false,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '妊娠回数',
                            key: this.GRAVIDITY_KEY,
                            is_fixed: false,
                            question_id: '18',
                            selectedValue: data[this.GRAVIDITY_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '出産回数',
                            key: this.PARITY_KEY,
                            is_fixed: false,
                            question_id: '19',
                            selectedValue: data[this.PARITY_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '自然/人工流産の回数',
                            key: this.ABORTION_KEY,
                            is_fixed: false,
                            question_id: '20',
                            selectedValue: data[this.ABORTION_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '帝王切開の回数',
                            key: this.CAESAREAN_SECTION_KEY,
                            is_fixed: false,
                            question_id: '21',
                            selectedValue: data[this.CAESAREAN_SECTION_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
                {
                    name: '今回の妊娠に関する情報',
                    key: this.PREGNANCY_KEY,
                    selectedValue: data[this.PREGNANCY_KEY],
                    colapse: true,
                    detailShown: false,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '最終月経開始日',
                            key: this.LAST_MENSTRUAL_KEY,
                            is_fixed: false,
                            question_id: '22',
                            selectedValue: data[this.LAST_MENSTRUAL_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '分娩予定日',
                            key: this.EDD_KEY,
                            is_fixed: false,
                            question_id: '23',
                            selectedValue: data[this.EDD_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '胎児の数',
                            key: this.NUM_OF_CHILDREN_KEY,
                            is_fixed: false,
                            question_id: '24',
                            selectedValue: data[this.NUM_OF_CHILDREN_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '帝王切開の予定',
                            key: this.WILL_CAESAREAN_SECTION_KEY,
                            is_fixed: false,
                            question_id: '25',
                            selectedValue: data[this.WILL_CAESAREAN_SECTION_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '帝王切開の理由',
                            key: this.REASON_FOR_CAESAREAN_SECTION_KEY,
                            is_fixed: false,
                            question_id: '26',
                            selectedValue: data[this.REASON_FOR_CAESAREAN_SECTION_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '予定日修正',
                            key: this.SCHEDULED_DATE_CORRECTION_KEY,
                            is_fixed: false,
                            question_id: '27',
                            selectedValue: data[this.SCHEDULED_DATE_CORRECTION_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '胎盤付着部位',
                            key: this.PLACENTA_ATTACHMENT_SITE_KEY,
                            is_fixed: false,
                            question_id: '28',
                            selectedValue: data[this.PLACENTA_ATTACHMENT_SITE_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '切迫流早産の危険性',
                            key: this.RISK_OF_THREATENED_ABORTION_KEY,
                            is_fixed: false,
                            question_id: '29',
                            selectedValue: data[this.RISK_OF_THREATENED_ABORTION_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
                {
                    name: '妊婦健診の結果',
                    key: this.CONSULTATION_RECORD_KEY,
                    selectedValue: data[this.CONSULTATION_RECORD_KEY],
                    detailShown: false,
                    colapse: true,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '体重',
                            key: this.WEIGHT_KEY,
                            is_fixed: false,
                            question_id: '32',
                            selectedValue: data[this.WEIGHT_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '最高/最低血圧',
                            key: this.BLOOD_PRESSURE_KEY,
                            is_fixed: false,
                            question_id: '33',
                            selectedValue: data[this.BLOOD_PRESSURE_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '浮腫',
                            key: this.EDEMA_KEY,
                            is_fixed: false,
                            question_id: '35',
                            selectedValue: data[this.EDEMA_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '尿蛋白',
                            key: this.URINARY_PROTEIN_KEY,
                            is_fixed: false,
                            question_id: '36',
                            selectedValue: data[this.URINARY_PROTEIN_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '尿糖',
                            key: this.URINARY_SUGAR_KEY,
                            is_fixed: false,
                            question_id: '37',
                            selectedValue: data[this.URINARY_SUGAR_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '頚管長',
                            key: this.CERVICAL_LENGTH_KEY,
                            is_fixed: false,
                            question_id: '38',
                            selectedValue: data[this.CERVICAL_LENGTH_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '推定体重',
                            key: this.ESTIMATED_WEIGHT_KEY,
                            is_fixed: false,
                            question_id: '39',
                            selectedValue: data[this.ESTIMATED_WEIGHT_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '胎位',
                            key: this.PRESENTATION_KEY,
                            is_fixed: false,
                            question_id: '40',
                            selectedValue: data[this.PRESENTATION_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
                {
                    name: '位置情報',
                    selectedValue: false,
                    colapse: false,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '発災後から現在までの位置情報',
                            key: this.LOCATION_AFTER_OCCURRENCE_KEY,
                            is_fixed: false,
                            question_id: '42',
                            selectedValue: data[this.LOCATION_AFTER_OCCURRENCE_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '発災の24時間前から現在までの位置情報',
                            key: this.LOCATION_24H_KEY,
                            is_fixed: false,
                            question_id: '41',
                            selectedValue: data[this.LOCATION_24H_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '過去記録されたすべての位置情報',
                            key: this.LOCATION_ALL_KEY,
                            is_fixed: false,
                            question_id: '43',
                            selectedValue: data[this.LOCATION_ALL_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
                {
                    name: '共有相手',
                    selectedValue: false,
                    colapse: false,
                    options: boolean_options.slice(),
                    details: [
                        {
                            name: '都道府県災害医療コーディネーター',
                            key: this.PRE_COORDINATOR_KEY,
                            is_fixed: false,
                            question_id: '44',
                            selectedValue: data[this.PRE_COORDINATOR_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '地域災害医療コーディネーター',
                            key: this.ARE_COORDINATOR_KEY,
                            is_fixed: false,
                            question_id: '45',
                            selectedValue: data[this.ARE_COORDINATOR_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '保険医療活動チーム',
                            key: this.INSURANCE_TEAM_KEY,
                            is_fixed: false,
                            question_id: '46',
                            selectedValue: data[this.INSURANCE_TEAM_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '小児周産期リエゾンメンバー',
                            key: this.LIAISON_KEY,
                            is_fixed: false,
                            question_id: '47',
                            selectedValue: data[this.LIAISON_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '災害医療ボランティアチーム',
                            key: this.VOLUNTEER_TEAM_KEY,
                            is_fixed: false,
                            question_id: '48',
                            selectedValue: data[this.VOLUNTEER_TEAM_KEY],
                            options: boolean_options.slice(),
                        },
                        {
                            name: '地方自治体の職員など',
                            key: this.LOCAL_GOV_STUFF_KEY,
                            is_fixed: false,
                            question_id: '50',
                            selectedValue: data[this.LOCAL_GOV_STUFF_KEY],
                            options: boolean_options.slice(),
                        },
                    ]
                },
            ],
        });
    };
    AccessControlPage.prototype.onConditionChange = function (changed_question, control_list_url) {
        if (changed_question.is_fixed) {
            return;
        }
        this.change_num++;
        //assist on
        //APIに投げて、残りの予測をし、値を入れ替える操作を書く
        //履歴の保存
        if (this.selected_values[changed_question.question_id]) {
            this.history[changed_question.question_id].push(this.selected_values[changed_question.question_id]);
        }
        //fixed flag付け
        console.log('flagj');
        console.log(changed_question.question_id);
        for (var i = 0; i < this.control_lists[0]['objects'].length; i++) {
            var object = this.control_lists[0]['objects'][i];
            for (var k = 0; k < object.details.length; k++) {
                var control = object.details[k];
                control.is_fixed = true;
                console.log(control.question_id);
                if (changed_question.question_id == control.question_id) {
                    //更新された質問まで読み込んだら終わり
                    i = this.control_lists[0]['objects'].length;
                    break;
                }
            }
        }
        if (this.assisted_mode) {
            this.predictAccessControl(); //これを実行しても正確度上がらないので
        }
    };
    AccessControlPage.prototype.predictAccessControl = function () {
        var _this = this;
        //inputの作成
        console.log(this.control_lists);
        var input = [];
        for (var i = 0; i < this.control_lists[0]['objects'].length; i++) {
            var object = this.control_lists[0]['objects'][i];
            for (var k = 0; k < object.details.length; k++) {
                var control = object.details[k];
                if (control.question_id) {
                }
                if (control.is_fixed && this.PREDICT_COLUMNS.indexOf(control.question_id) > 0) {
                    // input.push(control.selectedValue) //nullが入ることは基本的にない。最初なら3つしか参照しないし、それ以降ならfetchしてきて埋まってる
                    // input.push(this.selected_values[control.question_id])
                    input.push(control.question_id + '-' + this.selected_values[control.question_id]);
                }
            }
        }
        // Object.keys(this.selected_values).forEach(function(key) {
        //   input.push(key + '-' + this[key])
        // }, this.selected_values);
        console.log('predict input');
        console.log(input);
        //api叩く
        this.api.predictAccessControl(input).subscribe(function (data) {
            console.log(data);
            var fix_flag = false;
            var predicted_vars = data.data[0];
            for (var i = 0; i < _this.control_lists[0]['objects'].length; i++) {
                var object = _this.control_lists[0]['objects'][i];
                for (var k = 0; k < object.details.length; k++) {
                    var control = object.details[k];
                    if (!control.is_fixed) {
                        // control.selectedvalue = predicted_vars[control.question_id];
                        // this.control_lists[0]['objects'][i].details[k].selectedvalue = predicted_vars[control.question_id];
                        _this.selected_values[control.question_id] = predicted_vars[control.question_id];
                        _this.history[control.question_id].push(_this.selected_values[control.question_id]);
                    }
                }
            }
        });
    };
    AccessControlPage.prototype.showToastWithCloseButton = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: '了解',
            position: 'top',
            duration: 5000,
        });
        toast.present();
    };
    AccessControlPage.prototype.detectChanges = function () {
    };
    AccessControlPage.prototype.onSave = function () {
        var _this = this;
        if (this.nullCheck()) {
            this.showAlert('注意', '入力されていない項目があります');
            return;
        }
        //access controlの新しいrecordを作成する
        var subject_no = this.navParams.get('meta_questions')[0].inputValue;
        var exp_no = this.navParams.get('meta_questions')[1].inputValue;
        var params = {
            'subject_no': this.navParams.get('meta_questions')[0].inputValue,
            'experiment_no': this.navParams.get('meta_questions')[0].inputValue,
            'is_assisted': this.assisted_mode,
        };
        for (var i = 0; i < this.control_lists[0]['objects'].length; i++) {
            var object = this.control_lists[0]['objects'][i];
            for (var k = 0; k < object.details.length; k++) {
                var control = object.details[k];
                params[control.key] = this.selected_values[control.question_id];
            }
        }
        var history = '';
        for (var key in this.history) {
            history += key + ':';
            for (var i = 0; i < this.history[key].length; i++) {
                history += this.history[key][i] + ',';
            }
            history += ';';
        }
        params['suggest_history'] = history;
        params['change_num'] = this.change_num;
        this.api.createAccessControl(params).subscribe(function (success) {
            if (success) {
                var page = __WEBPACK_IMPORTED_MODULE_4__experiment_experiment__["a" /* ExperimentPage */];
                _this.showToastWithCloseButton('保存が成功しました');
                // this.navCtrl.push({
                //   page,
                // });
            }
            else {
                _this.showToastWithCloseButton('保存が失敗しました');
            }
        });
    };
    AccessControlPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['了解']
        });
        alert.present();
    };
    AccessControlPage.prototype.nullCheck = function () {
        var res = false;
        for (var i = 0; i < this.control_lists[0]['objects'].length; i++) {
            var object = this.control_lists[0]['objects'][i];
            for (var k = 0; k < object.details.length; k++) {
                if (this.selected_values[object.details[k].question_id] === undefined) {
                    res = true;
                    i = this.control_lists[0]['objects'].length;
                }
            }
        }
        return res;
    };
    AccessControlPage.prototype.objectFixedCheck = function (object) {
        var res = false;
        for (var i = 0; i < object.details.length; i++) {
            if (!object.details[i].is_fixed) {
                res = true;
            }
        }
        return res;
    };
    AccessControlPage.prototype.addCondition = function () {
        this.add_control_list({});
    };
    AccessControlPage.prototype.isDetailsShown = function (object) {
        return object.detailShown;
    };
    AccessControlPage.prototype.toggleDetailsShown = function (object) {
        object.detailShown = !object.detailShown;
    };
    AccessControlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccessControlPage');
    };
    AccessControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-access-control',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/access-control/access-control.html"*/'<!--\n  Generated template for the AccessControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>accessControl</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor=\'let control_list of control_lists\'>\n    <ion-card-header text-center>\n      {{control_list.title}}\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n          <!-- <ion-list-header>\n            共有する情報\n          </ion-list-header> -->\n          <div *ngFor=\'let object of control_list.objects\'>\n            <ion-item (click)=\'toggleDetailsShown(object)\'>\n              <ion-icon name="{{isDetailsShown(object) ? \'remove\' : \'add\'}}"></ion-icon>\n              &nbsp;\n              {{object.name}}\n              <ion-icon name=\'ios-alert-outline\' *ngIf=\'objectFixedCheck(object)\' ion-text color=\'danger\'></ion-icon>\n            </ion-item>\n            <div *ngIf=\'isDetailsShown(object)\'>\n              <ion-item\n                *ngFor=\'let question of object.details\' \n              >\n                <ion-label ion-text color="gray">\n                  <ion-icon name=\'ios-alert-outline\' *ngIf=\'!question.is_fixed && this.assisted_mode\' ion-text color=\'danger\'></ion-icon>\n                  {{question.name}}\n                </ion-label>\n                <!-- <ion-toggle\n                  [(ngModel)]="question.selectedValue"\n                >\n                </ion-toggle> -->\n                <ion-select\n                  [(ngModel)]="selected_values[question.question_id]"\n                  [multiple]="question.isMultiple"\n                  okText="完了"\n                  cancelText="キャンセル"\n                  (ionChange)="onConditionChange(question, control_list.url)"\n                >\n                  <ion-option *ngFor="let option of question.options" [value]="option.value">\n                    {{option.name}}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <!-- <button ion-button full (click)="addCondition()">\n    条件を追加\n  </button> -->\n  <button ion-button full (click)="onSave()">\n    保存する\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/access-control/access-control.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], AccessControlPage);
    return AccessControlPage;
}());

//# sourceMappingURL=access-control.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperimentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_control_access_control__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__access_control_prep_access_control_prep__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(67);
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
 * Generated class for the ExperimentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExperimentPage = /** @class */ (function () {
    function ExperimentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.question_type = {
            select: 0,
            input: 1,
        };
        var assist_options = [
            {
                value: true,
                name: 'ON',
            },
            {
                value: false,
                name: 'OFF',
            },
        ];
        this.meta_questions = [
            {
                name: '被験者番号',
                type: this.question_type.input,
                inputValue: null,
            },
            {
                name: '実験番号',
                type: this.question_type.input,
                inputValue: null,
            },
        ];
        this.experiment_mode = [
            {
                name: 'アシスト',
                selectedValue: null,
                options: assist_options,
            }
        ];
    }
    ExperimentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExperimentPage');
    };
    ExperimentPage.prototype.goNextPage = function () {
        if (this.nullCheck()) {
            this.showAlert('注意', '入力されていない項目があります');
            return;
        }
        var nextPage = this.experiment_mode[0].selectedValue ? __WEBPACK_IMPORTED_MODULE_3__access_control_prep_access_control_prep__["a" /* AccessControlPrepPage */] : __WEBPACK_IMPORTED_MODULE_2__access_control_access_control__["a" /* AccessControlPage */];
        console.log(this.experiment_mode[0].selectedValue);
        this.navCtrl.push(nextPage, {
            'meta_questions': this.meta_questions,
        });
    };
    ExperimentPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['了解']
        });
        alert.present();
    };
    ExperimentPage.prototype.nullCheck = function () {
        var res = true;
        console.log(this.experiment_mode[0].selectedValue);
        console.log(typeof this.meta_questions[0].inputValue);
        console.log(this.meta_questions[1].inputValue);
        if (this.experiment_mode[0].selectedValue !== null &&
            this.meta_questions[0].inputValue &&
            this.meta_questions[1].inputValue) {
            res = false;
        }
        console.log(res);
        return res;
    };
    ExperimentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-experiment',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/experiment/experiment.html"*/'<!--\n  Generated template for the ExperimentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>experiment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      被験者情報\n    </ion-list-header>\n    <ion-item *ngFor=\'let question of meta_questions\'>\n      <ion-label>{{question.name}}</ion-label>\n      <ion-input\n        type="string"\n        placeholder="入力する"\n        [(ngModel)]="question.inputValue"\n        text-right\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item\n      *ngFor=\'let question of experiment_mode\' \n    >\n      <ion-label>{{question.name}}</ion-label>\n      <ion-select\n        [(ngModel)]="question.selectedValue"\n        [multiple]="question.isMultiple"\n        okText="完了"\n        cancelText="キャンセル"\n      >\n        <ion-option *ngFor="let option of question.options" [value]="option.value">\n          {{option.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full (click)="goNextPage()">\n    スタート\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/experiment/experiment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], ExperimentPage);
    return ExperimentPage;
}());

//# sourceMappingURL=experiment.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationRecordListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consultation_record_consultation_record__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
/**
 * Generated class for the ConsultationRecordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultationRecordListPage = /** @class */ (function () {
    function ConsultationRecordListPage(navCtrl, navParams, local_storage, api, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.local_storage = local_storage;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.STORAGE_KEY = "consultationRecordList";
        this.showLoading();
        this.api.getConsultationRecordList().subscribe(function (access) {
            var data = __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */].consultationRecordList || {};
            _this.setValue(data);
        });
    }
    ConsultationRecordListPage.prototype.setValue = function (data) {
        this.records = __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */].consultationRecordList;
        console.log(this.records);
    };
    ConsultationRecordListPage.prototype.moveToDetailPage = function (event, record) {
        record['next'] = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__consultation_record_consultation_record__["a" /* ConsultationRecordPage */], { 'data': record });
    };
    ConsultationRecordListPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ConsultationRecordListPage.prototype.moveToCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__consultation_record_consultation_record__["a" /* ConsultationRecordPage */], { 'data': {} });
    };
    ConsultationRecordListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultationRecordListPage');
    };
    ConsultationRecordListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultation-record-list',template:/*ion-inline-start:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-record-list/consultation-record-list.html"*/'<!--\n  Generated template for the ConsultationRecordListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>妊婦健診結果一覧</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-item *ngFor="let record of records" (click)="moveToDetailPage($event, record)" class="bg-style">\n      {{record.consultation_date}}日の記録\n  </button>\n  <button ion-button full (click)="moveToCreatePage()">\n      追加\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kawakami/work/emcdh/newVersion/MotherChildHandbook/src/pages/consultation-record-list/consultation-record-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ConsultationRecordListPage);
    return ConsultationRecordListPage;
}());

//# sourceMappingURL=consultation-record-list.js.map

/***/ })

},[433]);
//# sourceMappingURL=main.js.map