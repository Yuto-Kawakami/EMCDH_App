// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';

/*
  Generated class for the DeviceIdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceIdProvider {
  private device_id: string = 'local_dev';
  STORAGE_KEY = "DEVICE_ID";
  constructor(
    // private uniqueDeviceID: UniqueDeviceID,
    private device: Device,
    // private local_storage: Storage,
  ) {}

  public getDeviceID(){
    return Observable.create(observer=>{
        this.device_id = this.device.uuid || 'local_dev';
        console.log("this device ID set to " + this.device_id);
        observer.next(this.device_id);
        observer.complete();
        // this.uniqueDeviceID.get()
        // .then((uuid: any) => {
        //   this.device_id = uuid;
        //   console.log("this device ID set to " + uuid);
        //   observer.next(this.device_id);
        //   observer.complete();
        // })
        // .catch((error: any) => {
        //   this.device_id = "local_dev"; //for web mock
        //   console.log(error)
        //   observer.next(this.device_id);
        //   observer.complete();
        // });
    })
  }
}
