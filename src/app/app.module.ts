import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StoryPage } from '../pages/story/story';
import { NotePage } from '../pages/note/note';
import { EvacuationBagPage } from '../pages/evacuation-bag/evacuation-bag';
import { EvacuationBagNotePage } from '../pages/evacuation-bag-note/evacuation-bag-note';
import { PregnantChecklistPage } from '../pages/pregnant-checklist/pregnant-checklist';
import { SettingsPage } from '../pages/settings/settings';
import { StartPage } from '../pages/start/start';
import { PregnancyDataPage } from '../pages/pregnancy-data/pregnancy-data';
import { ChildrenDataPage } from '../pages/children-data/children-data';
import { ConsultationRecordPage } from '../pages/consultation-record/consultation-record';
import { AccessControlPage } from '../pages/access-control/access-control';
import { ConsultationChartPage } from '../pages/consultation-chart/consultation-chart';
import { ConsultationChartListPage } from '../pages/consultation-chart-list/consultation-chart-list';
import { ExperimentPage } from '../pages/experiment/experiment';
import { AccessControlPrepPage } from '../pages/access-control-prep/access-control-prep';

import { LocationTracker} from '../providers/location-tracker/location-tracker';
import { DeviceIdProvider } from '../providers/device-id/device-id';

import { HttpClientModule } from '@angular/common/http'
import { HTTP } from '@ionic-native/http';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { AuthService } from '../providers/auth-service/auth-service';
import { ApiProvider } from '../providers/api/api';
import { SettingProvider } from '../providers/setting/setting';
import { ConsultationRecordListPage } from '../pages/consultation-record-list/consultation-record-list';
import { GpacPage } from '../pages/gpac/gpac';
import { Device } from '@ionic-native/device/ngx';
import { ChartsModule } from 'ng2-charts';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Facebook } from '@ionic-native/facebook/ngx';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StoryPage,
    NotePage,
    EvacuationBagPage,
    EvacuationBagNotePage,
    PregnantChecklistPage,
    SettingsPage,
    StartPage,
    PregnancyDataPage,
    ChildrenDataPage,
    ConsultationRecordPage,
    ConsultationRecordListPage,
    GpacPage,
    AccessControlPage,
    ConsultationChartPage,
    ConsultationChartListPage,
    ExperimentPage,
    AccessControlPrepPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StoryPage,
    NotePage,
    EvacuationBagPage,
    EvacuationBagNotePage,
    PregnantChecklistPage,
    SettingsPage,
    StartPage,
    PregnancyDataPage,
    ChildrenDataPage,
    ConsultationRecordPage,
    ConsultationRecordListPage,
    GpacPage,
    AccessControlPage,
    ConsultationChartPage,
    ConsultationChartListPage,
    ExperimentPage,
    AccessControlPrepPage,
  ],
  providers: [
    DatePicker,
    StatusBar,
    SplashScreen,
    Geolocation,
    BackgroundGeolocation,
    LocationTracker,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeviceIdProvider,
    AuthService,
    ApiProvider,
    SettingProvider,
    Device,
    InAppBrowser,
    NativeStorage,
    Facebook,
    GooglePlus,
  ]
})
export class AppModule {}
