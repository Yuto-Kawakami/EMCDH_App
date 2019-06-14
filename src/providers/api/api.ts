import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { SettingProvider} from '../setting/setting';
import { DeviceIdProvider } from '../device-id/device-id';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class User implements UserInterface {
  device_id: string;
  full_name: string;
  email: string;
  id: number;
  url: string;
  enable_location_sharing: boolean;
  triage_level: number;
}

interface UserInterface {
  device_id: string,
  full_name: string,
  email: string,
  id: number,
  url: string,
  enable_location_sharing: boolean,
  triage_level: number,
}

class Location implements LocationInterface{
  url: string;
  accuracy: number;
  latitude: number;
  longitude: number;
  timestamp: number;
  user: string;
}

interface LocationInterface {
  url: string;
  accuracy: number;
  latitude: number;
  longitude: number;
  timestamp: number;
  user: string;
}

class consultationRecord implements consultationRecordInterface{
  url: string;
  consultation_date: string;
  pregnancy: string;
  uterotome_length: number;
  weight: number;
  systolic_blood_pressure: number;
  diastolic_blood_pressure: number;
  abdominal_circumference: number;
  edema: number;
  urinary_protein: number;
  urinary_sugar: number;
  risk_of_thretend_abortion: boolean;
}

interface consultationRecordInterface {
  url: string,
  consultation_date: string,
  pregnancy: string,
  uterotome_length: number,
  weight: number,
  systolic_blood_pressure: number,
  diastolic_blood_pressure: number,
  abdominal_circumference: number,
  edema: number,
  urinary_protein: number,
  urinary_sugar: number,
  risk_of_thretend_abortion: boolean,
}

export class Child implements ChildInterface{
  url: string;
  estimated_weight: number;
  presentation: string;
  placenta_attachment_site: string;
  is_cervical_asthenia: boolean;
  pregnancy: string;
}

interface ChildInterface {
  url: string,
  estimated_weight: number,
  presentation: string,
  placenta_attachment_site: string,
  is_cervical_asthenia: boolean,
  pregnancy: string,
}

class Gpac implements gpacInterface {
  gravidity: number;
  parity: number;
  abortion: number;
  caesarean_selection: number;
  user: string;
  url: string;
}

interface gpacInterface {
  gravidity: number,
  parity: number, 
  abortion: number,
  caesarean_selection: number,
  user: string,
  url: string,
}

class Pregnancy implements PregnancyInterface {
  last_menstruation_start_date: string;
  expected_delivery_date: string;
  will_caesarean_section: boolean;
  user: string;
  url: string;
  id: string;
}

interface PregnancyInterface {
  last_menstruation_start_date: string,
  expected_delivery_date: string,
  will_caesarean_section: boolean,
  user: string,
  url: string,
  id: string;
}

@Injectable()
export class ApiProvider {
  public static currentUser: User = new User();
  baseURL: string;
  public static gpac: Gpac;
  public static pregnancy: Pregnancy;
  public static children: Array<Child> = [];
  public static consultationRecord: consultationRecord;
  public static consultationRecordList: Array<consultationRecord>;
  public static location: Location;

  public CONSULTATION_RECORD_KEY = 'consultation_record';
  public GPAC_KEY = 'gpac';
  public CHILD_KEY = 'child';
  public PREGNANCY_KEY = 'pregnancy';
  public USER_KEY = 'user';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    public http: HttpClient,
    private setting: SettingProvider,
    private deviceIdProvider: DeviceIdProvider,
    private nativeStorage: NativeStorage,
  ) {
    console.log("ApiProvider Constructer")
    this.baseURL = setting.apiRoot;
  }

  public initializeUser(userName?: string){
    return Observable.create(observer=> {
      this.deviceIdProvider.getDeviceID().subscribe(device_id =>{
        this.getUserId(device_id).subscribe(access => {
          if(access){
            this.getGpac().subscribe();
            this.getPregnancy().subscribe(access=> {
              if(!access){
                this.createPregnancy({}).subscribe(access => {
                  this.getChild().subscribe();
                  this.getConsultationRecordList().subscribe();
                  observer.next(true);observer.complete();
                });
              } else {
                this.getChild().subscribe();
                this.getConsultationRecordList().subscribe();
                observer.next(true);observer.complete();
              }
            })
          } else {
            if (userName != undefined) {              
              this.createUser(userName, device_id).subscribe(access => {
                observer.next(true);
                observer.complete();
              });
            } else {
              this.createUser("", device_id).subscribe(access => {
                observer.next(true);
                observer.complete();
              });
            }
          }
        })
      }) 
    });
  }

  public getConsultationRecordList(){
    console.log("func getConsultationRecordList()");
    if(!ApiProvider.pregnancy){
      return Observable.create(observer => {
        this.createPregnancy({}).subscribe(access => {
          this.getConsultationRecordList().subscribe(access => {
            observer.next(true);
            observer.complete();
          });
        })
      })
    }
    return Observable.create(observer => {
      let endpoint = this.baseURL + 'consultationRecords/';
      let params = new HttpParams().set('pregnancy', ApiProvider.pregnancy.id);

      this.http.get<Array<consultationRecordInterface>>(
        endpoint,
        {
          headers: this.headers,
          params: params,
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.consultationRecordList = json || [];
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();

        }
      )
    })
  }

  public createConsultationRecord(body){
    console.log("func createConsultationRecord()");
    if (! ApiProvider.pregnancy){
      return Observable.create(observer => {
        this.createPregnancy({}).subscribe(access => {
          this.createConsultationRecord(body).subscribe();
          observer.next(true);
          observer.complete();
        })
      })
    }else{
      return Observable.create(observer => {
        console.log(ApiProvider.pregnancy)
        let endpoint = this.baseURL + 'consultationRecords/';
        body['pregnancy'] = ApiProvider.pregnancy.url;
        console.log(body);


        this.http.post<consultationRecordInterface>(
          endpoint,
          body,
          {
            headers: this.headers,
          },
        ).subscribe(
          json => {
            console.log(json);
            ApiProvider.consultationRecord = json;
            this.getConsultationRecordList();
            observer.next(true);
            observer.complete();
          },
          err => {
            console.log(err);
            observer.next(false);
            observer.complete();
          }
        )
      })
    }
  }

  public updateConsultationRecord(params){
    console.log("func updateConsultationRecord()");
    if (!ApiProvider.consultationRecord){
      return this.createConsultationRecord(params);
    } 

    return Observable.create(observer => {
      let endpoint = ApiProvider.consultationRecord.url;

      this.http.put<consultationRecordInterface>(
        endpoint,
        params,
        {
          headers: this.headers
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.consultationRecord = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public getGpac(){
    return Observable.create(observer => {
      let endpoint = this.baseURL + 'gpacs/';
      let params = new HttpParams().set('user', String(ApiProvider.currentUser.id));

      this.http.get<Array<gpacInterface>>(
        endpoint,
        {
          headers: this.headers,
          params: params,
        }
      ).subscribe(
        json => {
          console.log(json);
          if(json.length > 0){
            ApiProvider.gpac = json[0]
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
          }
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public getChild(){
    console.log('getChild')
    return Observable.create(observer => {
      let endpoint = this.baseURL + 'children/';
      let params = new HttpParams().set('pregnancy', ApiProvider.pregnancy.id);

      this.http.get<Array<ChildInterface>>(
        endpoint,
        {
          headers: this.headers,
          params: params,
        }
      ).subscribe(
        json => {
          console.log(json);
          // if(json.length > 0){
            ApiProvider.children = json
            observer.next(true);
            observer.complete();
          // }
          // else {
          //   observer.next(false);
          //   observer.complete();
          // }
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public createChild(body){
    console.log("func createChild()");
    if (!ApiProvider.pregnancy){
      return Observable.create(observer => {
        this.createPregnancy({}).subscribe(access => {
          this.createChild(body).subscribe(access => {
            observer.next(true);
            observer.complete();
          });
        })
      })
    }else{
      return Observable.create(observer => {
        let endpoint = this.baseURL + 'children/';
        body['pregnancy'] = ApiProvider.pregnancy.url;
        console.log(body);


        this.http.post<ChildInterface>(
          endpoint,
          body,
          {
            headers: this.headers,
          },
        ).subscribe(
          json => {
            console.log(json);
            ApiProvider.children.push(json);
            observer.next(true);
            observer.complete();
          },
          err => {
            console.log(err);
            observer.next(false);
            observer.complete();
          }
        )
      })
    }
  }

  public updateChild(params){
    console.log("func updateChild()");
    if (!params.url){
      return this.createChild(params);
    } 

    return Observable.create(observer => {
      this.http.put<ChildInterface>(
        params.url,
        params,
        {
          headers: this.headers
        },
      ).subscribe(
        json => {
          console.log(json);
          let child = this.search_child(params.url);
          child = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public getPregnancy() {
    console.log("func getPregnancy");

    return Observable.create(observer => {
      let endpoint = this.baseURL + 'pregnancies/';
      let params = new HttpParams().set('user', String(ApiProvider.currentUser.id));

      this.http.get<PregnancyInterface>(
        endpoint,
        {
          headers: this.headers,
          params: params,
        },
      ).subscribe(
        json => {
          console.log(json);
          let pregnancy = json[0];
          if(pregnancy) {
            ApiProvider.pregnancy = json[0];
          }
          observer.next(pregnancy);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public createPregnancy(body){
    console.log("func createPregnancy()");
    return Observable.create(observer => {
      let endpoint = this.baseURL + 'pregnancies/';
      body['user'] = ApiProvider.currentUser.url;
      console.log(body);

      this.http.post<PregnancyInterface>(
        endpoint,
        body,
        {
          headers: this.headers,
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.pregnancy = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public updatePregnancy(params){
    console.log("func updatePregnancy()");
    if (!ApiProvider.pregnancy){
      return this.createPregnancy(params);
    } 

    return Observable.create(observer => {
      let endpoint = ApiProvider.pregnancy.url;

      this.http.put<PregnancyInterface>(
        endpoint,
        params,
        {
          headers: this.headers
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.pregnancy = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public createLocation(body){
    console.log("func createLocation()");
    return Observable.create(observer => {
      let endpoint = this.baseURL + 'locations/';
      body['user'] = ApiProvider.currentUser.url;
      console.log(body);

      this.http.post<LocationInterface>(
        endpoint,
        body,
        {
          headers: this.headers,
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.location = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public createGpac(body){
    console.log("func createGpac()");
    return Observable.create(observer => {
      let endpoint = this.baseURL + 'gpacs/';
      body = this.nullCheckForGPAC(body);
      body['user'] = ApiProvider.currentUser.url;
      console.log(body);


      this.http.post<gpacInterface>(
        endpoint,
        body,
        {
          headers: this.headers,
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.gpac = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public updateGpac(params){
    console.log("func updateGpac()");
    console.log(ApiProvider.gpac);
    if (!ApiProvider.gpac){
      return this.createGpac(params);
    } 

    return Observable.create(observer => {
      let endpoint = ApiProvider.gpac.url;


      this.http.put<gpacInterface>(
        endpoint,
        params,
        {
          headers: this.headers
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.gpac = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public updateUser(user: User){
    console.log("func updateUser()");
    console.log(user);

    return Observable.create(observer => {
      let endpoint = ApiProvider.currentUser.url;


      this.http.put<UserInterface>(
        endpoint,
        user,
        {
          headers: this.headers
        },
      ).subscribe(
        json => {
          console.log(json);
          ApiProvider.currentUser = json;
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public getUserId(device_id: string){
    let endpoint = this.baseURL + 'users/'
    let params =  new HttpParams().set('device_id', device_id);

    return Observable.create(observer => {
      this.http.get<Array<UserInterface>>(
        endpoint,
        {
          headers: this.headers,
          params: params,
        }
      )
      .subscribe(
        json => {
          console.log(json);
          if (json.length > 0){
            ApiProvider.currentUser = json[0];
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
          }
        },
        error => {
          console.log(error);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public createUser(full_name: string, device_id: string) {
    console.log("create new user");
    let endpoint = this.baseURL + 'users/'

    let body =  {
      full_name: full_name,
      device_id: device_id,
      password: 'password',
    };

    return Observable.create(observer => {
      this.http.post<UserInterface>(
        endpoint,
        body,
        {
          headers: this.headers,
        }
      )
      .subscribe(
        json => {
          console.log("createUser Json");
          console.log(json);
          ApiProvider.currentUser = json;
          observer.next(true);
          observer.complete();
        },
        error => {
          console.log(error);
          ApiProvider.currentUser = new User();
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public createAccessControl(params){
    console.log("func createAccessControl()");

    return Observable.create(observer => {
      let endpoint = this.baseURL + 'accessControl/';
      params['user'] = ApiProvider.currentUser.url;
      console.log(ApiProvider.currentUser)

      console.log(params);

      this.http.post(
        endpoint,
        params,
        {
          headers: this.headers
        },
      ).subscribe(
        json => {
          console.log(json);
          observer.next(true);
          observer.complete();
        },
        err => {
          console.log(err);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  public predictAccessControl(data){
    let endpoint = this.baseURL + 'predict/'
    let params =  {};//.set('device_id', device_id);
    let num = data.length;

    params['input_num'] = String(num);


    for(var i = 0; i < num; i++){
      // params.append('q' + i, data[i]);
      params['q' + i ] = data[i]
    }

    console.log(num);
    console.log(data);
    console.log(params)

    return Observable.create(observer => {
      this.http.get(
        endpoint,
        {
          headers: this.headers,
          params: params,
        }
      )
      .subscribe(
        json => {
          console.log(json);
          observer.next(json);
          observer.complete();
        },
        error => {
          console.log(error);
          observer.next(false);
          observer.complete();
        }
      )
    })
  }

  private sliceId(str){
    return str.slice()

  }

  private nullCheckForGPAC(gpac){
    for(let key in gpac) {
      gpac[key] = gpac[key] || 0;
    }
    return gpac
  }

  search_child(child_url){
    console.log("called search _child");
    console.log("child_id:" + child_url)
    for (let child of ApiProvider.children) {
      if(child.url === child_url){
        return child
      }
    }
  }
}
