import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingProvider {
  // public apiRoot: string = "http://localhost:8000/"
  public apiRoot: string = 'https://radiant-basin-33136.herokuapp.com/';
  constructor(public http: HttpClient) {
  }

}
