import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationEvents, BackgroundGeolocationResponse, BackgroundGeolocationConfig } from '@ionic-native/background-geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ApiProvider } from '../api/api';
import 'rxjs/add/operator/filter';
 
@Injectable()
export class LocationTracker {
 
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;

 
  constructor(
    public zone: NgZone,
    private backgroundGeolocation: BackgroundGeolocation,
    private geolocation: Geolocation,
    private api: ApiProvider,
  ) {
    if (ApiProvider.currentUser.enable_location_sharing){
        this.startTracking();
      } else {
        this.stopTracking();
      }
  }
 
  startTracking() {
    // Background Tracking
    console.log("startTracking()");
 
    let config: BackgroundGeolocationConfig = {
      // Common Option
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: false,
      stopOnTerminate: true,
      startForeground: false,
      startOnBoot: true,

      // iOS Option
      activityType: "AutomotiveNavigation",

      // Android Option
      interval: 2000,
      stopOnStillActivity: true,
    };

    this.backgroundGeolocation.configure(config)
      .then(() => {
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          console.log("output Background Location");
          console.log(location);
          console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

          let params = {
            accuracy: location.accuracy,
            latitude: location.latitude,
            longitude: location.longitude,
            timestamp: this.unixTime2ymd(location.time),
          }
          this.api.createLocation(params).subscribe();

          this.zone.run(() => {
            this.lat = location.latitude;
            this.lng = location.longitude;
          });

          // this.backgroundGeolocation.finish();
        }, (err) => {
          console.log("back error");
          console.log(err);
        }
     )
    }).catch((err => {
      console.log("background geolocation error");
      console.log(err);
    }));
  
    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();
  
    // Foreground Tracking
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };
    
    // this.watch = this.geolocation.watchPosition(options);
    // this.watch.subscribe((position) => {
    //   console.log("watch")
    //   let params = {
    //     accuracy: position.coords.accuracy,
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //     timestamp: this.unixTime2ymd(position['timestamp']),
    //   }
    
    //   this.api.createLocation(params).subscribe();

    //   // Run update inside of Angular's zone
    //   this.zone.run(() => {
    //         this.lat = position.coords.latitude;
    //         this.lng = position.coords.longitude;
    //   });
    // })

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position) => {
      console.log("watch")
      let params = {
        accuracy: position.coords.accuracy,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: this.unixTime2ymd(position['timestamp']),
      }
    
      this.api.createLocation(params).subscribe();

      // Run update inside of Angular's zone
      this.zone.run(() => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
      });
    })


    console.log("startTraking method end");
 
  }
 
  stopTracking() {
    console.log("stopTracking");
    try {
      this.backgroundGeolocation.stop();
      this.backgroundGeolocation.finish();
      this.watch.unsubscribe();  
    } catch {}
  }
 
  unixTime2ymd(intTime){
      let d = new Date(intTime);
      let year  = d.getFullYear();
      let month = d.getMonth() + 1;
      let day   = d.getDate();
      let hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
      let min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
      let sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
      let str = ( year + '-' + month + '-' + day + 'T' + hour + ':' + min + ':' + sec );
      return str
  }
}

