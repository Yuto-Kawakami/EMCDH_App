import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationRecordPage } from './consultation-record';

@NgModule({
  declarations: [
    ConsultationRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationRecordPage),
  ],
})
export class ConsultationRecordPageModule {}
