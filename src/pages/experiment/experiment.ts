import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccessControlPage } from '../access-control/access-control';
import { AccessControlPrepPage } from '../access-control-prep/access-control-prep';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ExperimentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experiment',
  templateUrl: 'experiment.html',
})
export class ExperimentPage {
  meta_questions;
  experiment_mode;
  question_type = {
    select: 0,
    input: 1,
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ){
    let assist_options = [
      {
        value: true,
        name: 'ON',
      },
      {
        value: false,
        name: 'OFF',
      },
    ]

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
    ]

    this.experiment_mode = [
      {
        name: 'アシスト',
        selectedValue: null,
        options: assist_options,
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperimentPage');
  }

  goNextPage(){
    if(this.nullCheck()){
      this.showAlert('注意', '入力されていない項目があります');
      return
    }
    let nextPage = this.experiment_mode[0].selectedValue ? AccessControlPrepPage : AccessControlPage;
    console.log(this.experiment_mode[0].selectedValue);
    this.navCtrl.push(
      nextPage,
      {
        'meta_questions': this.meta_questions,
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
    let res = true;

    console.log(this.experiment_mode[0].selectedValue)
    console.log(typeof this.meta_questions[0].inputValue)
    console.log(this.meta_questions[1].inputValue )

    if(
      this.experiment_mode[0].selectedValue !== null &&
      this.meta_questions[0].inputValue &&
      this.meta_questions[1].inputValue
    ){
      res = false;
    }
    console.log(res)

    return res
  }
}
