import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccessControlPage } from '../access-control/access-control';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the AccessControlPrepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-access-control-prep',
  templateUrl: 'access-control-prep.html',
})
export class AccessControlPrepPage {
  first_questions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ){
    let options = [
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
    ]

    console.log(this.navParams.get('meta_questions'));
    console.log(this.navParams.get('experiment_mode'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessControlPrepPage');
  }

  goNextPage(){
    if(this.nullCheck()){
      this.showAlert('注意', '入力されていない項目があります');
      return
    }
    this.navCtrl.push(
      AccessControlPage,
      {
        'first_questions': this.first_questions,
        'meta_questions': this.navParams.get('meta_questions'),
        'assisted': true,
      },
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

    for(let i = 0; i < this.first_questions.length; i++){
      if(this.first_questions[i].selectedValue === null){
        res = true;
        break
      }
    }

    return res
  }
}
