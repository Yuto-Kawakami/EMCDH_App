import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker';
import moment from 'moment';
/**
 * Generated class for the PregnantChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PregnantChecklistPage = (function () {
    function PregnantChecklistPage(navCtrl, navParams, local_storage, datePicker) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.local_storage = local_storage;
        this.datePicker = datePicker;
        this.STORAGE_KEY = 'PregnantData';
        this.CAESARIAN_BIRTH_KEY = 'isCaesarianBirth';
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
        this.EDD_KEY = 'expectedDateOfDelivery';
        this.LAST_MENSTRUAL_KEY = 'lastMenstrualPeriodStartDate';
        this.GESTATIONAL_AGE_KEY = 'gestationalAge';
        this.nonSelectQuestions = {};
        this.storage = local_storage;
        local_storage.get(this.STORAGE_KEY).then(function (pregnantData) {
            var isCaesarianBirth = pregnantData[_this.CAESARIAN_BIRTH_KEY] || '';
            var hasAsthma = pregnantData[_this.ASTHMA_KEY] || '';
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
            var edd = pregnantData[_this.EDD_KEY] || '';
            var lastMenstrual = pregnantData[_this.LAST_MENSTRUAL_KEY] || '';
            _this.motherQuestions = [
                {
                    title: "帝王切開の予定",
                    key: _this.CAESARIAN_BIRTH_KEY,
                    isMultiple: false,
                    selectedValue: isCaesarianBirth,
                    options: [
                        {
                            value: "あり",
                            displayName: "あり",
                        },
                        {
                            value: "なし",
                            displayName: "なし",
                        },
                    ],
                },
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
            if (edd != '') {
                var edd_date = moment(edd);
                var formatted_eddDate = edd_date.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                _this.nonSelectQuestions[_this.EDD_KEY] = formatted_eddDate;
            }
            if (lastMenstrual != '') {
                var last_menstrual_date = moment(lastMenstrual);
                var formatted_last_menstrual_date = last_menstrual_date.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
                _this.nonSelectQuestions[_this.LAST_MENSTRUAL_KEY] = formatted_last_menstrual_date;
                console.log("called last_");
                console.log(formatted_last_menstrual_date);
                var gestationalWeeks = moment().diff(last_menstrual_date, 'weeks');
                var gestationalDay = moment().diff(last_menstrual_date, 'days') % 7;
                var gestationalAge = gestationalWeeks + '週' + gestationalDay + '日';
                console.log(gestationalAge);
                _this.nonSelectQuestions[_this.GESTATIONAL_AGE_KEY] = gestationalAge;
            }
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
    PregnantChecklistPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-pregnant-checklist',
                    templateUrl: 'pregnant-checklist.html'
                },] },
    ];
    /** @nocollapse */
    PregnantChecklistPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: Storage, },
        { type: DatePicker, },
    ]; };
    return PregnantChecklistPage;
}());
export { PregnantChecklistPage };
//# sourceMappingURL=pregnant-checklist.js.map