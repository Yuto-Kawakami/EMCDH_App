import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PregnancyDataPage } from './pregnancy-data';

@NgModule({
  declarations: [
    PregnancyDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PregnancyDataPage),
  ],
})
export class PregnancyDataPageModule {}
