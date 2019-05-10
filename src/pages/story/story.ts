import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvacuationBagPage } from '../evacuation-bag/evacuation-bag';

@Component({
  selector: 'page-story',
  templateUrl: 'story.html'
})
export class StoryPage {
  items: Array<{title: string, icon: string, page :any}>;

  constructor(public navCtrl: NavController) {
    this.items = [
      // {
      //   title: "防災マップを作りましょう",
      //   icon: "map",
      //   page: EvacuationBagPage,
      // },
      {
        title: "避難バッグを見直そう",
        icon: "basket",
        page: EvacuationBagPage,
      },
      // {
      //   title: "発災時に必要な行動",
      //   icon: "walk",
      //   page: EvacuationBagPage,
      // },
      // {
      //   title: "避難生活で必要な行動",
      //   icon: "home",
      //   page: EvacuationBagPage,
      // },
      // {
      //   title: "必要な備えについて考えよう",
      //   icon: "chatbubbles",
      //   page: EvacuationBagPage,
      // },
    ]
  }

  onClick(){
    this.navCtrl.push(EvacuationBagPage);
  }

  itemTapped(event, item){
    this.navCtrl.push(item.page);
  }
}