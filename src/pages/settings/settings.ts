import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx'
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
  locationSetting: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private backgroundGeolocation: BackgroundGeolocation,
    private locationTracker: LocationTracker,
    private deviceIdProvider: DeviceIdProvider,
    private api: ApiProvider,
    private iab: InAppBrowser,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
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

    // 位置情報設定確認
    this.backgroundGeolocation.checkStatus().then((success) => {
      console.log("success.authorization: " + success.authorization);
      if (success.authorization === 0) {
        this.locationSetting = false;
      } else {
        this.locationSetting = true;
      };
    }).catch((error) => {
      console.log("checkStatusError " + error);
    });
  }
  
  //Location Tracker
  start(){
    console.log("=======start=======");
    this.locationTracker.startTracking();
    // this.user.enable_location_sharing = true;
    this.update();
  }

  stop(){
    console.log("=======stop=======");
    this.locationTracker.stopTracking();
    // this.user.enable_location_sharing = false;
    this.update();
  }

  update(){
    console.log('func update');
    console.log('this.user'+this.user);
    this.api.updateUser(this.user).subscribe();
  }

  onToggleChange(){
    console.log("locationSetting: " + this.locationSetting);
    console.log("userSetting: " + this.user.enable_location_sharing);

    if (this.user.enable_location_sharing) {
      this.authorizationCheck().then((res) => {
        this.locationSetting = res;
  
        if(this.locationSetting){
          this.start();
       }
      });  
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
    // let browser = this.iab.create('https://goo.gl/forms/8qyLBs4Tpt1EBCSd2');
    let browser = this.iab.create('https://forms.gle/BZ5s2wKhANGAqAVh7', '_blank', { location: "no", zoom: "no"});
    browser.show();
  }

  movePage(event, item){
    this.navCtrl.push(item.page);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.navCtrl.setRoot(StartPage);
  }

 
  async showMessage(titleText, subTitleText, buttonSelect) {
     let alert = this.alertCtrl.create({
      title: titleText,
      subTitle: subTitleText,
      buttons: buttonSelect,
      enableBackdropDismiss: false
    });
    return await alert.present();
  }

  async authorizationCheck() {
    // Authorization Check
    return await this.backgroundGeolocation.checkStatus().then((success) => {
      console.log("authorizationCheck");
      console.log("authorization: " + success.authorization);
      if (success.authorization === 0) {
        let titleText = "位置情報を共有するためには、[設定]で位置情報設定を有効にしてください。";
        let subTitleText = "";
        let buttonSelect = ["Cancel",
              {text:"OK", handler: () => {
                this.backgroundGeolocation.showAppSettings();
              }
            }]
        this.showMessage(titleText, subTitleText, buttonSelect);
        this.user.enable_location_sharing = false;
        return false;
      } else {
        return true;
      }
    })
  }
}
