import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/start/start';
// import { WelcomePage} from '../pages/welcome/welcome';
var MyApp = (function () {
    rootPage:any;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = StartPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = function () { return [
        { type: Platform, },
        { type: StatusBar, },
        { type: SplashScreen, },
    ]; };
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map