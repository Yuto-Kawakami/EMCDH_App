import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';
// import { NotePage } from '../note/note';
import moment from 'moment';
import { ConsultationRecordListPage } from '../consultation-record-list/consultation-record-list';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

/**
 * Generated class for the ConsultationRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultation-record',
  templateUrl: 'consultation-record.html',
})
export class ConsultationRecordPage {
  selectTypeQuestions: Array<{}>;
  numberTypeQuestions;
  dateTypeQuestions = {};

  data;

  CONSULTATION_DATE_KEY = 'consultation_date';
  UTEROTOME_LENGTH_KEY = 'uterotome_length';
  WEIGHT_KEY = 'weight';
  SYSTOLIC_BLOOD_PRESSURE_KEY = 'systolic_blood_pressure';//収縮期血圧
  DIASTOLIC_BLOOD_PRESSURE_KEY = 'diastolic_blood_pressure';//拡張期血圧
  ABDOMINAL_CIRCUMFERENCE_KEY = 'abdominal_circumference';
  EDEMA_KEY = 'edema';
  URINARY_PROTEIN_KEY = 'urinary_protein';
  URINARY_SUGAR_KEY = 'urinary_sugar';
  RISK_OF_THREATENED_ABORTION_KEY = 'risk_of_threatened_abortion';
  CERVICAL_LENGTH_KEY = 'cervical_length';

  allowSave: boolean = false;
  allowUpdate: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private local_storage: Storage,
    private api: ApiProvider,
  ){
    let data = navParams.get('data');
    this.data = data;
    this.setValue(data);
  }

  setValue(data){
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
        value: data[this.SYSTOLIC_BLOOD_PRESSURE_KEY],
      },
      {
        title: "最低血圧[mmHg]",
        key: this.DIASTOLIC_BLOOD_PRESSURE_KEY,
        value: data[this.DIASTOLIC_BLOOD_PRESSURE_KEY],
      },
      {
        title: "腹囲[cm]",
        key: this.ABDOMINAL_CIRCUMFERENCE_KEY,
        value: data[this.ABDOMINAL_CIRCUMFERENCE_KEY],
      },
    ]

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
    ]
  }
  
  formatDateForView(date){
    return moment(date).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
  }

  onSelectChange(val: any){
    console.log("func onChange()")
    console.log(val)
    this.data[val['key']] = val['selectedValue'];
    this.allowUpdate = true;
  }

  onNumberChange(event, key){
    console.log("called onNumberChange()")
    console.log("event:" + event)
    console.log("key:" + key)
    console.log("event.value:" + event.value)
    this.data[key] = Number(event.value);
    this.allowUpdate = true;
    console.log('-------------------------')
  }

  onDateChange(event, key){
    console.log("func onDateChange()")
    let formattedDate = event.year + '-' + ('0' + event.month).slice(-2) + '-' + ('0' + event.day).slice(-2)
    this.data[key] = formattedDate;
    this.allowSave = true;
    this.allowUpdate = true;
    console.log('-------------------------')
  }

  save(){
    console.log("save")
    this.api.createConsultationRecord(this.data).subscribe(access => {
      this.navCtrl.push(
        ConsultationRecordListPage
      );
    });
  }

  update(){
    this.api.updateConsultationRecord(this.data).subscribe(access => {
      this.navCtrl.push(
        ConsultationRecordListPage
      );
    });
  }

  clear(){
    this.setValue({});
    this.navCtrl.push(ConsultationRecordPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationRecordPage');
  }

}
