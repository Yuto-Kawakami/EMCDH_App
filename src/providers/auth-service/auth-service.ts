import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { DeviceIdProvider }  from '../device-id/device-id';
import { SettingProvider} from '../setting/setting';
import { ApiProvider} from '../api/api';
 
@Injectable()
export class AuthService {
  private baseURL: string;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  

  constructor(
    private deviceIdProvider: DeviceIdProvider,
    private http: HttpClient,
    private setting: SettingProvider,
    private api: ApiProvider,
  ){
    this.baseURL = setting.apiRoot;
  }
 
  public login(credentials) {
      // At this point make a request to your backend to make a real check!
      if (credentials.password === null) {
        return Observable.throw("Please insert credentials");
      } else {
        return Observable.create(observer => {
          if(credentials.password !== 'also'){
            observer.next(false);
            observer.complete();
          } else{
            this.api.initializeUser().subscribe(access => {
              if(access){
                console.log("complete initialize user")
                observer.next(true);
                observer.complete();
              } else{
                console.log("cannot complete initialize user")
                observer.next(false);
                observer.complete();
              }
            })
          }
        })
    }
  }

  public snsLogin(displayName?: string) {
    console.log("display_name:", displayName);
    return Observable.create(observer => {
      this.api.initializeUser(displayName).subscribe(access => {
        if (access) {
          console.log("complete initialize user")
          observer.next(true);
          observer.complete();
        } else{
          console.log("cannot complete initialize user")
          observer.next(false);
          observer.complete();
        }
      })
    })
  }

  public apiInit() {
    return Observable.create(observer => {
      this.api.initializeUser().subscribe(access => {
        if(access){
          console.log("complete initialize user")
          observer.next(true);
          observer.complete();
        } else{
          console.log("cannot complete initialize user")
          observer.next(false);
          observer.complete();
        }
      })
    })
  }

  register(credentials){
    return Observable.create()

  }

 
  public logout() {
    return Observable.create(observer => {
      ApiProvider.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  public getCurrentUser(){
    return ApiProvider.currentUser
  }
}
