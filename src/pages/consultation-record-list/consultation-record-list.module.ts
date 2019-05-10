import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationRecordListPage } from './consultation-record-list';

@NgModule({
  declarations: [
    ConsultationRecordListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationRecordListPage),
  ],
})
export class ConsultationRecordListPageModule {}
