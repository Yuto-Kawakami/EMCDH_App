import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvacuationBagNotePage } from '../evacuation-bag-note/evacuation-bag-note';
var EvacuationBagPage = (function () {
    function EvacuationBagPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EvacuationBagPage.prototype.onClick = function () {
        this.navCtrl.push(EvacuationBagNotePage);
    };
    EvacuationBagPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-evacuation-bag',
                    templateUrl: 'evacuation-bag.html'
                },] },
    ];
    /** @nocollapse */
    EvacuationBagPage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return EvacuationBagPage;
}());
export { EvacuationBagPage };
//# sourceMappingURL=evacuation-bag.js.map