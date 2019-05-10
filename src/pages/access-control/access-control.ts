import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ApplicationRef } from '@angular/core/src/application_ref';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ExperimentPage } from '../experiment/experiment';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the AccessControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-access-control',
  templateUrl: 'access-control.html',
})
export class AccessControlPage {
  control_lists: Array<{}> = [];
  assisted_mode;
  selected_values = {};

  history = {};

  change_num = 0;

  TITLE_KEY = 'title';

  ROLE_KEY = 'role';
  TRIGGER_KEY = 'trigger';
  PLACE_KEY = 'place';

  PROFILE_KEY = 'profile';
  FULL_NAME_KEY = 'full_name';
  BIRTHDAY_KEY = 'birthday';
  JOB_KEY  = 'job';
  TEL_KEY = 'tel';
  ADDRESS_KEY = 'address';

  HEALTH_KEY = 'health';
  HEIGHT_KEY = 'height';
  WEIGHT_BEFORE_PREGNANCE_KEY = 'weight_before_pregnancy';
  MEDICAL_HISTORY_KEY = 'medical_history';
  ALLERGY_KEY = 'allergy';
  TAKING_DRUGS_KEY = 'taking_drugs';

  GPAC_KEY = 'gpac';
  GRAVIDITY_KEY = 'gravidity';
  PARITY_KEY = 'parity';
  ABORTION_KEY = 'abortion';
  CAESAREAN_SECTION_KEY = 'caesarean_section';

  PREGNANCY_KEY = 'pregnancy';
  LAST_MENSTRUAL_KEY = 'last_menstruation_start_date';
  NUM_OF_CHILDREN_KEY = 'num_of_children_key';
  EDD_KEY = 'expected_delivery_date';
  WILL_CAESAREAN_SECTION_KEY = 'will_caesarean_section';
  REASON_FOR_CAESAREAN_SECTION_KEY = 'reason_for_caesarean_section';
  PLACENTA_ATTACHMENT_SITE_KEY = 'placenta_attachment_site';
  RISK_OF_THREATENED_ABORTION_KEY = 'risk_of_threatened_abortion';
  SCHEDULED_DATE_CORRECTION_KEY = 'scheduled_date_correction';

  CONSULTATION_RECORD_KEY = 'consultation_record_key';
  UTEROTOME_LENGTH_KEY = 'uterotome_length';
  WEIGHT_KEY = 'weight';
  BLOOD_PRESSURE_KEY = 'blood_pressure';
  ABDOMINAL_CIRCUMFERENCE_KEY = 'abdominal_circumference';
  EDEMA_KEY = 'edema';
  URINARY_PROTEIN_KEY = 'urinary_protein';
  URINARY_SUGAR_KEY = 'urinary_sugar';
  CERVICAL_LENGTH_KEY = 'cervical_length';

  CHILD_KEY = 'child';
  ESTIMATED_WEIGHT_KEY = 'estimated_weight';
  PRESENTATION_KEY = 'presentation';

  LOCATION_24H_KEY = 'location_24h';
  LOCATION_AFTER_OCCURRENCE_KEY = 'location_after_occurrence';
  LOCATION_ALL_KEY = 'location_all'

  PRE_COORDINATOR_KEY = 'prefecture_disaster_medical_coordinator';
  ARE_COORDINATOR_KEY = 'area_disaster_medical_coordinator';
  INSURANCE_TEAM_KEY = 'insurance_medical_activity_team';
  VOLUNTEER_TEAM_KEY = 'disaster_medical_volunteer_team';
  LOCAL_GOV_STUFF_KEY = 'local_government_stuff';
  LIAISON_KEY = 'obstetric_medical_support_liaison_member';

  PREDICT_COLUMNS =[
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
  ]

  OPTION_NAME_TO_VAL = {
    'いかなる場合も共有しない': 0,
    '大規模災害時のみ': 1,
    '中規模以上の災害時': 2,
    '小規模以上の災害時': 3,
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider,
    private cdr: ChangeDetectorRef,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
  ){
    this.assisted_mode = navParams.get('assisted') || false;
    console.log(navParams.get('meta_questions'));

    this.add_control_list({
    });

    console.log(navParams.get('first_questions'))

    //前ページの入力をもとに初期値を決定
    if(this.assisted_mode) {
      //assist on の場合
      let first_questions = this.navParams.get('first_questions')
      let first_question_ids = [];

      for(let i = 0; i < first_questions.length; i++){
        let first_question = first_questions[i];
        this.selected_values[first_question.question_id] = first_question.selectedValue;
        first_question_ids.push(String(first_question.question_id));
      }

      console.log(first_question_ids)

      //fixed flag付
      for(let i = 0; i < this.control_lists[0]['objects'].length ; i++){
        let object = this.control_lists[0]['objects'][i];
        for(let k = 0; k < object.details.length; k++){
          let control = object.details[k];
          console.log(control.question_id)
          this.history[control.question_id] = []
          if( first_question_ids.indexOf(control.question_id) >= 0){
            this.control_lists[0]['objects'][i].details[k].is_fixed = true;
            console.log(control.question_id + 'fixed')
            continue;
          }
        }
      }

      this.predictAccessControl();
      this.showToastWithCloseButton('!の質問項目は自動で予測された値のため、確認が必要です。');
    }
  }

  add_control_list(data){
    let location_options = [
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
    ]
    let boolean_options = [
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

    this.control_lists.push(
      {
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
          // {
          //   name: '被災の種類',
          //   selectedValue: data[this.TRIGGER_KEY],
          //   isMultiple: true,
          //   options: [
          //     {
          //       name: '地震速報震度5以上',
          //       value: 1,
          //       colapse: true,
          //     },
          //     {
          //       name: '地震速報震度3以上',
          //       value: 2,
          //       colapse: false,
          //     },
          //     {
          //       name: '津波避難警報発令',
          //       value: 3,
          //       colapse: false,
          //     },
          //     {
          //       name: '火山避難警報発令',
          //       value: 4,
          //       colapse: false,
          //     },
          //   ],
          //   explanation: ',',
          // },
          // {
          //   name: '被災場所',
          //   selectedValue: data[this.PLACE_KEY],
          //   isMultiple: true,
          //   options: [
          //     {
          //       name: '自宅住所',
          //       value: 1,
          //       colapse: false,
          //     },
          //     {
          //       name: '現在地',
          //       value: 2,
          //       colapse: false,
          //     },
          //     {
          //       name: '24時間以内に立ち寄った場所',
          //       value: 3,
          //       colapse: false,
          //     },
          //     {
          //       name: '一週間以内に立ち寄った場所',
          //       value: 4,
          //       colapse: false,
          //     },
          //   ],
          //   explanation: ',',
          // },
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
      },
    );
  }

  onConditionChange(changed_question, control_list_url){
    if(changed_question.is_fixed){
      return
    }
    this.change_num ++;
    //assist on
    //APIに投げて、残りの予測をし、値を入れ替える操作を書く

    //履歴の保存
    if (this.selected_values[changed_question.question_id]){
      this.history[changed_question.question_id].push(this.selected_values[changed_question.question_id]);
    }
    
    //fixed flag付け
    console.log('flagj');
    console.log(changed_question.question_id);
    for(let i = 0; i < this.control_lists[0]['objects'].length ; i++){
      let object = this.control_lists[0]['objects'][i];
      for(let k = 0; k < object.details.length; k++){
        let control = object.details[k];
        control.is_fixed = true;
        console.log(control.question_id);
        if(changed_question.question_id == control.question_id){
          //更新された質問まで読み込んだら終わり
          i = this.control_lists[0]['objects'].length
          break;
        }
      }
    }
    if(this.assisted_mode){
      this.predictAccessControl();  //これを実行しても正確度上がらないので
    }
  }

  predictAccessControl(){
    //inputの作成
    console.log(this.control_lists)
    let input = []
    for(let i = 0; i < this.control_lists[0]['objects'].length ; i++){
      let object = this.control_lists[0]['objects'][i];
      for(let k = 0; k < object.details.length; k++){
        let control = object.details[k];
        if(control.question_id){

        }
        if(control.is_fixed && this.PREDICT_COLUMNS.indexOf(control.question_id) > 0){
          // input.push(control.selectedValue) //nullが入ることは基本的にない。最初なら3つしか参照しないし、それ以降ならfetchしてきて埋まってる
          // input.push(this.selected_values[control.question_id])
          input.push(control.question_id + '-' + this.selected_values[control.question_id])
        }
      }
    }

    // Object.keys(this.selected_values).forEach(function(key) {
    //   input.push(key + '-' + this[key])
    // }, this.selected_values);

    console.log('predict input')
    console.log(input)
    
    //api叩く
    this.api.predictAccessControl(input).subscribe(
      data => {
        console.log(data)
        let fix_flag = false;
        let predicted_vars = data.data[0];

        for(let i = 0; i < this.control_lists[0]['objects'].length ; i++){
          let object = this.control_lists[0]['objects'][i];
          for(let k = 0; k < object.details.length; k++){
            let control = object.details[k];
            if(!control.is_fixed){
              // control.selectedvalue = predicted_vars[control.question_id];
              // this.control_lists[0]['objects'][i].details[k].selectedvalue = predicted_vars[control.question_id];
              this.selected_values[control.question_id] = predicted_vars[control.question_id];
              this.history[control.question_id].push(this.selected_values[control.question_id]);
            }
          }
        }
      }
    );
  }

  showToastWithCloseButton(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: '了解',
      position: 'top',
      duration: 5000,
    });
    toast.present();
  }

  detectChanges(){
  }

  onSave(){
    if(this.nullCheck()){
      this.showAlert('注意', '入力されていない項目があります');
      return
    }
    //access controlの新しいrecordを作成する
    let subject_no = this.navParams.get('meta_questions')[0].inputValue;
    let exp_no = this.navParams.get('meta_questions')[1].inputValue;

    let params = {
      'subject_no': this.navParams.get('meta_questions')[0].inputValue,
      'experiment_no': this.navParams.get('meta_questions')[0].inputValue,
      'is_assisted': this.assisted_mode,
    };

    for(let i = 0; i < this.control_lists[0]['objects'].length ; i++){
      let object = this.control_lists[0]['objects'][i];
      for(let k = 0; k < object.details.length; k++){
        let control = object.details[k];
        params[control.key] = this.selected_values[control.question_id];
      }
    }

    let history = ''
    for(let key in this.history){
      history += key + ':'
      for(let i = 0; i < this.history[key].length; i++){
        history += this.history[key][i] + ',';
      }
      history += ';'
    }
    params['suggest_history'] = history;
    params['change_num'] = this.change_num;

    this.api.createAccessControl(params).subscribe(
      success => {
        if(success){
          let page = ExperimentPage;
          this.showToastWithCloseButton('保存が成功しました');
          // this.navCtrl.push({
          //   page,
          // });
        } else{
          this.showToastWithCloseButton('保存が失敗しました');
        }
      }
    );
  }

  showAlert(title, subTitle){
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['了解']
    });
    alert.present();
  }

  nullCheck() {
    let res = false;

    for(let i = 0; i < this.control_lists[0]['objects'].length ; i++){
      let object = this.control_lists[0]['objects'][i];
      for(let k = 0; k < object.details.length; k++){
        if(this.selected_values[object.details[k].question_id] === undefined){
          res = true;
          i = this.control_lists[0]['objects'].length;
        }
      }
    }

    return res
  }

  objectFixedCheck(object){
    let res = false;

    for(let i = 0; i < object.details.length; i++){
      if(!object.details[i].is_fixed){
        res = true;
      }
    }
    return res
  }

  addCondition(){
    this.add_control_list({});
  }

  isDetailsShown(object){
    return object.detailShown;
  }

  toggleDetailsShown(object) {
    object.detailShown = !object.detailShown;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessControlPage');
  }
}
