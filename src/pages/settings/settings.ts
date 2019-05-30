import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions} from '@ionic-native/geolocation/ngx';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import { DeviceIdProvider} from '../../providers/device-id/device-id';
import { ApiProvider } from '../../providers/api/api';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AccessControlPage } from '../access-control/access-control';
import { ExperimentPage } from '../experiment/experiment';
import { StartPage } from '../start/start';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  user = null;
  textTypeQuestions: Array<{}>;
  selectTypeQuestions: Array<{}>;
  page_list: Array<{title: string, icon: string, page :any}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private locationTracker: LocationTracker,
    private deviceIdProvider: DeviceIdProvider,
    private api: ApiProvider,
    private iab: InAppBrowser,
    private afAuth: AngularFireAuth,
  ){
    this.user = ApiProvider.currentUser;
    this.textTypeQuestions = [
      {
        title: '名前',
        key: 'full_name',
        value: this.user.full_name || '',
      },
    ]
    this.selectTypeQuestions = [
      {
        title: "トリアージレベル",
        key: 'triage_level',
        selectedValue: this.user['triage_level'] || '',
        isMultiple: false,
        options: [
          {
            value: 0, 
            displayName: '赤',
          },
          {
            value: 1,
            displayName: '黄',
          },
          {
            value: 2,
            displayName: '緑',
          },
        ]
      },
    ]
    this.page_list = [
      {
        title: 'アクセスコントロールの設定',
        icon: 'archive',
        page: ExperimentPage,
      },
    ]
    console.log(this.user);
  }
  
  //Location Tracker
  start(){
    this.locationTracker.startTracking();
    this.user.enable_location_sharing = true;
    this.update();
  }

  stop(){
    this.locationTracker.stopTracking();
    this.user.enable_location_sharing = false;
    this.update();
  }

  update(){
    console.log('func update');
    console.log(this.user);
    this.api.updateUser(this.user).subscribe();
  }

  onToggleChange(){
    if(this.user.enable_location_sharing){
      this.start();
    } else {
      this.stop();
    }
  }

  onTextChange(event, key){
    console.log("called onTextChange()");
    console.log(event);
    console.log(key);
    console.log(event.value);
    this.user[key] = event.value;
    this.update();
    console.log('-------------------------')
  }

  onSelectChange(val: any){
    console.log("func onChange()");
    console.log(val);
    this.user[val['key']] = val['selectedValue'];
    this.update();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openUrl(){
    let browser = this.iab.create('https://goo.gl/forms/8qyLBs4Tpt1EBCSd2');
    browser.show();
  }

  movePage(event, item){
    this.navCtrl.push(item.page);
  }

  async logout() {
    console.log("log", this.afAuth.authState);
    await this.afAuth.auth.signOut();
    this.navCtrl.first();
  }
}
