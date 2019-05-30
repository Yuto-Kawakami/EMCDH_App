import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationEvents, BackgroundGeolocationResponse, BackgroundGeolocationConfig } from '@ionic-native/background-geolocation/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
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
      if (this.backgroundGeolocation.isLocationEnabled) {
        this.startTracking();
      } else {
        this.stopTracking();
      }
    }
  }
 
  startTracking() {
    // Background Tracking
 
    let config: BackgroundGeolocationConfig = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: false,
      interval: 2000,
      stopOnTerminate: false,
    };
  
    this.backgroundGeolocation.configure(config)
      .then(() => {
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          console.log("output Location");
          console.log(location);
          console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

          this.zone.run(() => {
            this.lat = location.latitude;
            this.lng = location.longitude;
          });
          this.backgroundGeolocation.finish();
        }, (err) => {
          console.log(err);
        }
     )
    });

    // this.backgroundGeolocation.configure(config).subscribe((location) => {
  
    //   console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
  
    //   // Run update inside of Angular's zone
    //   this.zone.run(() => {
    //     this.lat = location.latitude;
    //     this.lng = location.longitude;
    //   });
  
    // }, (err) => {
  
    //   console.log(err);
  
    // });
  
    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();
  
  
    // Foreground Tracking
  
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };
    
     
    // this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined)).subscribe((position: Geoposition) => {

 
    //   (position: Geolocation) => {
    
    //   console.log(position);
    //   // upload position data to server
    //   let params = {
    //     accuracy: position['coords']['accuracy'],
    //     latitude: position['coords']['latitude'],
    //     longitude: position['coords']['longitude'],
    //     timestamp: this.unixTime2ymd(position['timestamp']),
    //   }

    //   this.api.createLocation(params).subscribe();
    
    //   // Run update inside of Angular's zone
    //   this.zone.run(() => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //   });
    
    // });

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("getCurrentPosition");
       // resp.coords.latitude
       // resp.coords.longitude
    }).catch((error) => {
      console.log("Error getting location", error);
    })


    
    let watch = this.geolocation.watchPosition(options);
    watch.subscribe((position) => {
      console.log("watch")
      let params = {
        accuracy: position.coords.accuracy,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: this.unixTime2ymd(position['timestamp']),
      }
    
      this.api.createLocation(params).subscribe();

      // Run update inside of Angular's zone
      // this.zone.run(() => {
      //       this.lat = position.coords.latitude;
      //       this.lng = position.coords.longitude;
      // });
    })
 
  }
 
  stopTracking() {
 
    console.log('stopTracking');
    
    this.backgroundGeolocation.stop();
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
 
  unixTime2ymd(intTime){
      let d = new Date();
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