import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController} from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';
import { ConsultationRecordPage } from '../consultation-record/consultation-record';
// import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the ConsultationRecordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultation-record-list',
  templateUrl: 'consultation-record-list.html',
})
export class ConsultationRecordListPage {
  STORAGE_KEY = "consultationRecordList";
  records: Array<{}>;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private local_storage: Storage,
    private api: ApiProvider,
    private loadingCtrl: LoadingController,
  ){
    this.showLoading();
    this.api.getConsultationRecordList().subscribe(access => {
      let data = ApiProvider.consultationRecordList || {} ;
      this.setValue(data);
    });
  }

  setValue(data){
    // this.records = ApiProvider.consultationRecordList;
    this.records = data;
    console.log(this.records);
  }

  moveToDetailPage(event, record){
    // record['next'] = true;
    console.log("moveToDetailPage")
    console.log(record)
    this.navCtrl.push(
      ConsultationRecordPage,
      {'data': record},
    );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  moveToCreatePage() {
    this.navCtrl.push(
      ConsultationRecordPage,
      {'data': {}},
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationRecordListPage');
  }

}
