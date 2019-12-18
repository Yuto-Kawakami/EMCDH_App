import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker/ngx'
import { Storage } from '@ionic/storage';
import { ApiProvider} from '../../providers/api/api';
import moment from 'moment';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { IonicStorageModule } from '@ionic/storage';

/**
 * Generated class for the PregnancyDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregnancy-data',
  templateUrl: 'pregnancy-data.html',
})
export class PregnancyDataPage {
  STORAGE_KEY = "pregnancyData";

  //APIのカラム名に順じる
  LAST_MENSTRUAL_KEY = 'last_menstruation_start_date';
  GESTATIONAL_AGE_KEY = 'gestationalAge';
  EDD_KEY = 'expected_delivery_date';

  WILL_CAESAREAN_SECTION_KEY = 'will_caesarean_section';
  REASON_FOR_CAESAREAN_SECTION_KEY = 'reason_for_caesarean_section';

  BIRTH_ALREADY_KEY = 'birth_already';
  BIRTHDAY_KEY = 'birthday';
  DELIVERY_METHOD_KEY = 'delivery_method';

  GPAC_KEY = 'gpac';
  PREGNANCY_KEY = 'pregnancy';
  PLACENTA_ATTACHMENT_SITE_KEY = 'placenta_attachment_site';

  selectTypeQuestions: Array<{}>;
  selectTypeQuestionsAfterBirth: Array<{}>;
  dateTypeQuestions = {};
  staticData = {};
  question = {};

  NEXT_YEAR = String((new Date().getFullYear() + 1)+"-12-31");

  pregnancy;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private datePicker: DatePicker,
    private api: ApiProvider,
    private storage: Storage,
    public changeDetectorRef: ChangeDetectorRef,
  ){
    this.pregnancy = ApiProvider.pregnancy ||{};
    // this.initialize(this.pregnancy);
    // console.log('data');
    // console.log(this.pregnancy);
    this.storage.get(this.STORAGE_KEY).then(
      (data) => {
        if(data != null){
          this.pregnancy = JSON.parse(data);
        }
        this.initialize(this.pregnancy);
      },
    )
    console.log(this.NEXT_YEAR);
  }

  initialize(data){
    console.log(data);

    //basic data
    let lastMenstrual = data[this.LAST_MENSTRUAL_KEY] || '';
    let edd = data[this.EDD_KEY] || '';
    let birth_already = data[this.BIRTH_ALREADY_KEY];
    // let birthday = data[this.BIRTHDAY_KEY];

    console.log(birth_already)

    if(lastMenstrual != ''){
      let last_menstrual_date = moment(lastMenstrual);
      let formatted_last_menstrual_date = last_menstrual_date.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
      this.dateTypeQuestions[this.LAST_MENSTRUAL_KEY] = formatted_last_menstrual_date;
      console.log(formatted_last_menstrual_date);

    }

    if (edd != ''){
      let edd_date = moment(edd);
      let formatted_eddDate = edd_date.format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
      this.dateTypeQuestions[this.EDD_KEY] = formatted_eddDate;
      //妊娠週数の計算
      this.calcGestionalAge(formatted_eddDate);
    }

    console.log(data[this.WILL_CAESAREAN_SECTION_KEY]);
    this.selectTypeQuestions = [
      {
        title: "胎盤付着部位",
        key: this.PLACENTA_ATTACHMENT_SITE_KEY,
        selectedValue: data[this.PLACENTA_ATTACHMENT_SITE_KEY] ,
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
    if(data[this.WILL_CAESAREAN_SECTION_KEY]) {
      this.addQuestion();
    }
  }

  onChange(val: any){
    console.log("func onChange()")
    console.log(val)
    this.pregnancy[val['key']] = val['selectedValue'];
    this.update()
    console.log('-------------------------')
  }

  onToggleChange(){
    let val = {};
    val['key'] = this.BIRTH_ALREADY_KEY;
    val['selectedValue'] = this.pregnancy.birth_already
    this.onChange(val);
  }

  update(){
    console.log('update called');
    console.log(this.pregnancy);
    this.api.updatePregnancy(this.pregnancy).subscribe();
    this.storage.set(this.STORAGE_KEY, JSON.stringify(this.pregnancy));
    this.storage.get(this.STORAGE_KEY).then(
      (val) => {
        console.log(val)
      }    
    );
  }

  addQuestion(){
    this.selectTypeQuestions.push(
      {
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
      },
    )
  }

  removeQuestion(){
    this.selectTypeQuestions.pop();
  }

  onDateChange(event, key){
    console.log("func onDateChange()")
    console.log(event)
    console.log(key)
    let formattedDate = event.year + '-' + ('0' + event.month).slice(-2) + '-' + ('0' + event.day).slice(-2)
    this.pregnancy[key] = formattedDate;
    console.log(this.pregnancy);
    if( key === this.EDD_KEY){
      this.calcGestionalAge(formattedDate);
    }
    this.update();
    console.log('-------------------------')
  }

  calcGestionalAge(edd){
    console.log("func - calcGestionalAge")
    let gestationalDays = Math.floor(280 + moment().diff(edd, 'days', true));
    console.log(gestationalDays);
    let gestationalDay = gestationalDays % 7;
    let gestationalWeeks = Math.floor(gestationalDays /7) ;
    let gestationalAge = gestationalWeeks + '週' + gestationalDay + '日目';
    this.staticData[this.GESTATIONAL_AGE_KEY] = gestationalAge;
    console.log(gestationalAge);
    console.log('-------------------------')
  }

  onSelectChange(val: any){
    console.log("func onChange()")
    console.log(val)
    let selectedValue = val['selectedValue'];
    this.pregnancy[val['key']] = selectedValue;
    if(val['key'] === this.WILL_CAESAREAN_SECTION_KEY){
      if(selectedValue){
        this.addQuestion();
      }else{
        this.removeQuestion();
      }
    }
    console.log(this.pregnancy);
    this.update();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad pregnancyDataPage');
  }
}
