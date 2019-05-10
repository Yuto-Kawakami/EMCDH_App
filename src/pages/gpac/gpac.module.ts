import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpacPage } from './gpac';

@NgModule({
  declarations: [
    GpacPage,
  ],
  imports: [
    IonicPageModule.forChild(GpacPage),
  ],
})
export class GpacPageModule {}
