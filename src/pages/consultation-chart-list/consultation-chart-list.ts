import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultationChartPage } from '../consultation-chart/consultation-chart';

/**
 * Generated class for the ConsultationChartListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultation-chart-list',
  templateUrl: 'consultation-chart-list.html',
})

export class ConsultationChartListPage {
  chart_list;
  constructor(
    public navCtrl: NavController,
  ){
    this.chart_list = [
      {
        title: '子宮底長',
        page: ConsultationChartPage,
      },
      {
        title: '体重',
        page: ConsultationChartPage,
      },
      {
        title: '最高/最低血圧',
        page: ConsultationChartPage,
      },
      {
        title: '腹囲',
        page: ConsultationChartPage,
      },
    ]
  }

  itemTapped(event, item){
    this.navCtrl.push(item.page);
  }
}
