import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StoryPage } from '../pages/story/story';
import { EvacuationBagPage } from '../pages/evacuation-bag/evacuation-bag';
import { EvacuationBagNotePage } from '../pages/evacuation-bag-note/evacuation-bag-note';
import { NotePage } from '../pages/note/note';
import { PregnantChecklistPage } from '../pages/pregnant-checklist/pregnant-checklist';
import { DatePicker } from '@ionic-native/date-picker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        AboutPage,
                        ContactPage,
                        HomePage,
                        TabsPage,
                        StoryPage,
                        EvacuationBagPage,
                        EvacuationBagNotePage,
                        NotePage,
                        PregnantChecklistPage,
                    ],
                    imports: [
                        BrowserModule,
                        IonicModule.forRoot(MyApp),
                        IonicStorageModule.forRoot()
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        AboutPage,
                        ContactPage,
                        HomePage,
                        TabsPage,
                        StoryPage,
                        EvacuationBagPage,
                        EvacuationBagNotePage,
                        NotePage,
                        PregnantChecklistPage,
                    ],
                    providers: [
                        DatePicker,
                        StatusBar,
                        SplashScreen,
                        { provide: ErrorHandler, useClass: IonicErrorHandler },
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map