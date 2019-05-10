import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the GpacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gpac',
  templateUrl: 'gpac.html',
})
export class GpacPage {

  numberTypeQuestions: Array<{}>;
  data: {};

  GRAVIDITY_KEY = 'gravidity';
  PARITY_KEY = 'parity';
  ABORTION_KEY = 'abortion';
  CAESARIAN_SECTION_KEY = 'caesarean_section';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: ApiProvider,
  ){
    this.data = ApiProvider.gpac || {};
    console.log(this.data);
    this.initialize(this.data);
  }

  initialize(data){
    this.numberTypeQuestions = [
      {
        title: "妊娠回数",
        key: this.GRAVIDITY_KEY,
        value: data.gravidity ,
      },
      {
        title: "出産回数",
        key: this.PARITY_KEY,
        value: data.parity ,
      },
      {
        title: "自然/人工流産の回数",
        key: this.ABORTION_KEY,
        value: data.abortion ,
      },
      {
        title: "帝王切開の回数",
        key: this.CAESARIAN_SECTION_KEY,
        value: data.caesarean_section ,
      },
    ];
  }

  onNumberChange(event, key){
    console.log("called onNumberChange()")
    console.log(event)
    console.log(key)
    console.log(event.value)
    this.data[key] = Number(event.value);
    this.api.updateGpac(this.data).subscribe();
    console.log('-------------------------')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpacPage');
  }

}
