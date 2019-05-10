import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationChartPage } from './consultation-chart';

@NgModule({
  declarations: [
    ConsultationChartPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationChartPage),
  ],
})
export class ConsultationChartPageModule {}
