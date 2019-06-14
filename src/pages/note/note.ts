import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvacuationBagNotePage } from '../evacuation-bag-note/evacuation-bag-note';
// import { PregnantChecklistPage } from '../pregnant-checklist/pregnant-checklist';
import { PregnancyDataPage } from '../pregnancy-data/pregnancy-data';
import { ChildrenDataPage } from '../children-data/children-data';
// import { ConsultationRecordPage } from '../consultation-record/consultation-record';
import { ConsultationRecordListPage } from '../consultation-record-list/consultation-record-list';
// import { ConsultationChartPage } from '../consultation-chart/consultation-chart';
import { GpacPage } from '../gpac/gpac';
import { ConsultationChartListPage } from '../consultation-chart-list/consultation-chart-list';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class NotePage {
  stories: Array<{title: string, icon: string, page :any}>;
  personalData: Array<{title: string, icon: string, page :any}>;

  constructor(public navCtrl: NavController) {
    this.personalData = [
      {
        title: "妊産婦医療データ",
        icon: "analytics",
        page: ConsultationChartListPage,
      },
      {
        title: "妊婦健診結果一覧",
        icon: "medkit",
        page: ConsultationRecordListPage,
      },
      {
        title: "今回の妊娠に関するデータ",
        icon: "woman",
        page: PregnancyDataPage,
      },
      {
        title: "母体・胎児に関するデータ",
        icon: "happy",
        page: ChildrenDataPage,
      },
      {
        title: "過去の妊娠に関するデータ",
        icon: "archive",
        page: GpacPage,
      },
    ]
    this.stories = [
      // {
      //   title: "防災マップ",
      //   icon: "map",
      //   page: EvacuationBagNotePage,
      // },
      {
        title: "避難バッグリスト",
        icon: "basket",
        page: EvacuationBagNotePage,
      },
      // {
      //   title: "発災時に必要な行動",
      //   icon: "walk",
      //   page: EvacuationBagNotePage,
      // },
      // {
      //   title: "避難生活で必要な行動",
      //   icon: "home",
      //   page: EvacuationBagNotePage,
      // },
      // {
      //   title: "必要な備え",
      //   icon: "chatbubbles",
      //   page: EvacuationBagNotePage,
      // },
    ]
  }

  itemTapped(event, item){
    this.navCtrl.push(item.page);
  }
}