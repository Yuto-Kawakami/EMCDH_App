import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker'
import moment from 'moment';

/**
 * Generated class for the PregnantChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pregnant-checklist',
  templateUrl: 'pregnant-checklist.html'
})

export class PregnantChecklistPage {
  STORAGE_KEY =  'PregnantData';

  ASTHMA_KEY = 'hasAsthma'
  ALLERGY_KEY = 'hasAllergy'
  DRUG_KEY = 'isTakingDrug'
  FETAL_POSITION_KEY = 'fetalPosition'
  PLACENTA_ATTACHMENT_SITE_KEY = 'placentaAttachmentSite'
  CERVICAL_ASTHENIA_KEY = 'hasCervicalAsthenia'
  PRETERM_DELIVERY_KEY = 'hasDangerOfPretermDelivery'
  PROTEIN_TEST_KEY = 'urinaryProteinTestResult'
  SUGAR_TEST_KEY = 'urinarySugarTestResult'
  EDEMA_KEY = 'hasEdema'
  

  CHILD_WEIGHT_KEY = 'childWeight'
  PARITY_KEY = 'parity'
  

  lastExamQuestions: Array<{title: string, key: string, isMultiple: boolean, selectedValue: string, options: Array<{value: string, displayName: string}>}>;
  motherQuestions: Array<{title: string, key: string, isMultiple: boolean, selectedValue: string, options: Array<{value: string, displayName: string}>}>;
  nonSelectQuestions = {};
  storage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private local_storage: Storage,
    private datePicker: DatePicker,
  ){
    this.storage = local_storage;
    local_storage.get(this.STORAGE_KEY).then((pregnantData) => {
      if(!pregnantData){
        local_storage.set(this.STORAGE_KEY, {});
        pregnantData ={};
      }
      let hasAsthma  = pregnantData[this.ASTHMA_KEY] || ''; //喘息
      let hasAllergy = pregnantData[this.ALLERGY_KEY] || '';
      let isTakingDrug = pregnantData[this.DRUG_KEY] || '';
      let fetalPosition = pregnantData[this.FETAL_POSITION_KEY] || '';
      let placentaAttachmentSite = pregnantData[this.PLACENTA_ATTACHMENT_SITE_KEY] || '';
      let hasCervicalAsthenia = pregnantData[this.CERVICAL_ASTHENIA_KEY] || '';
      let hasDangerOfPretermDelivery = pregnantData[this.PRETERM_DELIVERY_KEY] || '';
      let urinaryProteinTestResult = pregnantData[this.PROTEIN_TEST_KEY] || '';
      let urinarySugarTestResult = pregnantData[this.SUGAR_TEST_KEY] || '';
      let hasEdema = pregnantData[this.EDEMA_KEY] || '';
      
      let childWeight = pregnantData[this.CHILD_WEIGHT_KEY] || '';
      let parity = pregnantData[this.PARITY_KEY] || '';

      this.motherQuestions = [
        {
          title: "喘息",
          key: this.ASTHMA_KEY,
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
          key: this.ALLERGY_KEY,
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
          key: this.DRUG_KEY,
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
      ]

      this.lastExamQuestions = [
        {
          title: "胎位",
          key: this.FETAL_POSITION_KEY,
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
          key: this.PLACENTA_ATTACHMENT_SITE_KEY,
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
          key: this.CERVICAL_ASTHENIA_KEY,
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
          key: this.PRETERM_DELIVERY_KEY,
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
          key: this.EDEMA_KEY,
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
          key: this.PROTEIN_TEST_KEY,
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
          key: this.SUGAR_TEST_KEY,
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

      this.nonSelectQuestions[this.CHILD_WEIGHT_KEY] = childWeight;
      this.nonSelectQuestions[this.PARITY_KEY] = parity;



      console.log(this.nonSelectQuestions);
    });
  }

  onDateChange(event, key){
    console.log("called onDateChange()")
    console.log(event)
    console.log(key)
    this.storage.get(this.STORAGE_KEY).then((pregnantData) => {
      let formattedDate = event.year + '/' + ('0' + event.month).slice(-2) + '/' + ('0' + event.day).slice(-2)
      pregnantData[key] = formattedDate;
      console.log(pregnantData);
      this.storage.set(this.STORAGE_KEY, pregnantData);
    });

  }

  onChange2(event, key){
    console.log("called onchange1")
    console.log(event)
    console.log(key)
    console.log(event.value)
    this.storage.get(this.STORAGE_KEY).then((pregnantData) => {
      pregnantData[key] = event.value;
      console.log(pregnantData);
      this.storage.set(this.STORAGE_KEY, pregnantData);
    });
  }

  onChange(val: any){
    console.log("called onchange2")
    console.log(val)
    this.storage.get(this.STORAGE_KEY).then((pregnantData) => {
      pregnantData[val['key']] = val['selectedValue'];
      console.log(pregnantData);
      this.storage.set(this.STORAGE_KEY, pregnantData);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PregnantChecklistPage');
  }
}
