import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-contact',
                    templateUrl: 'contact.html'
                },] },
    ];
    /** @nocollapse */
    ContactPage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map