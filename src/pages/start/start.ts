import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, Platform, ShowWhen } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs'

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

import { Facebook } from '@ionic-native/facebook/ngx';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { expressionType } from '@angular/compiler/src/output/output_ast';


/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  user: Observable<firebase.User>;
  ERROR_MESSAGE = "Access Denied";

  FB_APP_ID: number = 370481763564996;
 
  constructor(
    private nav: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private fb: Facebook,
    private googlePlus: GooglePlus,
    ) { 
      this.user = this.afAuth.authState;
      console.log("log", this.afAuth.authState);
    }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }

  // private oauthSignIn(provider: AngularFireAuth) {
  //   if (!(<any>window).cordova) {
  //     return this.afAuth.auth.signInWithPopup(provider);
  //   } else {
  //     return this.afAuth.auth.signInWithRedirect(provider)
  //     .then(() => {
  //       return this.afAuth.auth.getRedirectResult().then( result => {
  //         // This gives you a Google Access Token.
  //         // You can use it to access the Google API.
  //         let token = result.credential.accessToken;
  //         // The signed-in user info.
  //         let user = result.user;
  //         console.log(token, user);
  //       }).catch(function(error) {
  //         // Handle Errors here.
  //         alert(error.message);
  //       });
  //     });
  //   }
  // }

  async webLogin(provider): Promise<any> {
    try {
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log(credential.user.displayName)
      return {'bool': true, 'name': credential.user.displayName};
    } catch(err) {
      console.log(err)
      return {'bool': false};
    }
  }

  async nativeFacebookLogin(): Promise<any> {
    console.log('nativeFacebookLogin');
    const perms = ["public_profile", "email"];

    return await this.fb.login(perms)
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        return firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            // console.log("Firebase success: " + JSON.stringify(success));
            return {'bool': true, 'name': success.displayName};
        });
      }).catch((error) => { 
        console.log(error);
        return {'bool': false};
      });
  }

  loginFacebook() {
    this.showLoading();
    if (this.platform.is('cordova')) {
      // console.log('native');
      this.nativeFacebookLogin().then(res => {
        // console.log(res);
        if (res.bool) {
          this.auth.snsLogin(res.name).subscribe(allowed => {
            if (allowed) {
              this.nav.setRoot(TabsPage);
            } else {
              this.showError(this.ERROR_MESSAGE);
            }
          })
        } else {
          this.showError(this.ERROR_MESSAGE);
        }
      }).catch(res => {
        console.log(res);
        this.showError(this.ERROR_MESSAGE);
      });
      console.log('finish');  
    } else {
      // console.log('web');
      this.webLogin(new auth.FacebookAuthProvider).then(res => {
        if (res.bool) {
          this.auth.snsLogin(res.name).subscribe(allowed => {
            if (allowed) {
              this.nav.setRoot(TabsPage);
            } else {
              this.showError(this.ERROR_MESSAGE);
            }
          })
        } else {
          this.showError(this.ERROR_MESSAGE);
        }
      });
    }
  }

  async nativeGoogleLogin(res: any): Promise<boolean> {
    console.log("NativeGoogle");
    const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
    return await firebase.auth().signInWithCredential(googleCredential).then(success => {
      console.log("Firebase success:" + JSON.stringify(success));
      return true;
    }).catch(error => {
      console.log(error);
      return false;
    });
  }


  async firebaseAuth(Provider: any, token: any): Promise<any> {
    console.log("NativeGoogle");
    const credential = Provider.credential(token);
    return await firebase.auth().signInWithCredential(credential).then(success => {
      console.log("Firebase success:" + JSON.stringify(success));
      return {'bool': true, 'name': success.displayName};
    }).catch(error => {
      console.log(error);
      return {'bool': false};
    });
  }


  async loginGoogle() {
    this.showLoading();
    if (this.platform.is('cordova')) {
      console.log('native');
      await this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '58255753866-plehav23u3u51ev2dqrq1p7jqeisrrhs.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      }).then(response => {
        console.log(response);
        this.nativeGoogleLogin(response).then(res => {
          if (res) {
            this.auth.snsLogin(response.displayName).subscribe(allowed => {
              if (allowed) {
                this.nav.setRoot(TabsPage);
              } else {
                this.showError(this.ERROR_MESSAGE);
              }
            })  
          } else {
            this.showError(this.ERROR_MESSAGE);
          }
        }).catch(err => {
          console.error(err);
          this.showError(this.ERROR_MESSAGE);
        });  
      }).catch(response => {
        console.log(response);
        this.showError(this.ERROR_MESSAGE);
      });
      console.log('finish');  
    } else {
      // console.log('web');
      this.webLogin(new auth.GoogleAuthProvider).then(res => {
        if (res.bool) {
          this.auth.snsLogin(res.name).subscribe(allowed => {
            if (allowed) {
              this.nav.setRoot(TabsPage);
            } else {
              this.showError(this.ERROR_MESSAGE);
            }
          })
        } else {
          this.showError(this.ERROR_MESSAGE);
        }
      });
    }
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {    
        this.nav.setRoot(TabsPage);
      } else {
        this.showError(this.ERROR_MESSAGE);
      }
    },
    error => {
      this.showError(error);
    });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
