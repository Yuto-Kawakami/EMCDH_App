import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessControlPage } from './access-control';

@NgModule({
  declarations: [
    AccessControlPage,
  ],
  imports: [
    IonicPageModule.forChild(AccessControlPage),
  ],
})
export class AccessControlPageModule {}
