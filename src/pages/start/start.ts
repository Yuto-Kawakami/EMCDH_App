import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs'

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

import { Facebook } from '@ionic-native/facebook/ngx';
import firebase from 'firebase';


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

  FB_APP_ID: number = 370481763564996;
 
  constructor(
    private nav: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private fb: Facebook,
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

  async webFacebookLogin(): Promise<any> {
    try {
      const provider = new auth.FacebookAuthProvider();
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
            return {'bool': true, 'name': success.user.displayName};
        });
      }).catch((error) => { 
        console.log('error');
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
              this.showError("Access Denied");
            }
          })
        } else {
          this.showError("Access Denied");
        }
      });
      console.log('finish');
    } else {
      // console.log('web');
      this.webFacebookLogin().then(res => {
        if (res.bool) {
          this.auth.snsLogin(res.name).subscribe(allowed => {
            if (allowed) {
              this.nav.setRoot(TabsPage);
            } else {
              this.showError("Access Denied");
            }
          })
        } else {
          this.showError("Access Denied");
        }
      });
    }
  }

  async loginGoogle() {
    // this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  // loginTwitter() {
  //   this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  // }
  logout() {
    this.afAuth.auth.signOut();
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {    
        this.nav.setRoot(TabsPage);
      } else {
        this.showError("Access Denied");
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
