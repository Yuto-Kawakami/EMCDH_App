import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvacuationBagNotePage } from '../evacuation-bag-note/evacuation-bag-note'

@Component({
  selector: 'page-evacuation-bag',
  templateUrl: 'evacuation-bag.html'
})
export class EvacuationBagPage {

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.push(EvacuationBagNotePage);
  }
}
