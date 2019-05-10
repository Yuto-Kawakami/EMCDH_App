import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildrenDataPage } from './children-data';

@NgModule({
  declarations: [
    ChildrenDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildrenDataPage),
  ],
})
export class ChildrenDataPageModule {}
