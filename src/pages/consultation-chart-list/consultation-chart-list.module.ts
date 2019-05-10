import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationChartListPage } from './consultation-chart-list';

@NgModule({
  declarations: [
    ConsultationChartListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationChartListPage),
  ],
})
export class ConsultationChartListPageModule {}
