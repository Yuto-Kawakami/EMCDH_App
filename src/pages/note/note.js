import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvacuationBagNotePage } from '../evacuation-bag-note/evacuation-bag-note';
import { PregnantChecklistPage } from '../pregnant-checklist/pregnant-checklist';
var NotePage = (function () {
    function NotePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.personalData = [
            {
                title: "母子健康診断結果",
                icon: "heart",
                page: PregnantChecklistPage,
            },
            {
                title: "妊娠情報",
                icon: "heart",
                page: EvacuationBagNotePage,
            },
        ];
        this.stories = [
            // {
            //     title: "防災マップ",
            //     icon: "map",
            //     page: EvacuationBagNotePage,
            // },
            {
                title: "避難バッグリスト",
                icon: "basket",
                page: EvacuationBagNotePage,
            },
            // {
            //     title: "発災時に必要な行動",
            //     icon: "walk",
            //     page: EvacuationBagNotePage,
            // },
            // {
            //     title: "避難生活で必要な行動",
            //     icon: "home",
            //     page: EvacuationBagNotePage,
            // },
            // {
            //     title: "必要な備え",
            //     icon: "chatbubbles",
            //     page: EvacuationBagNotePage,
            // },
        ];
    }
    NotePage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    NotePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-note',
                    templateUrl: 'note.html'
                },] },
    ];
    /** @nocollapse */
    NotePage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return NotePage;
}());
export { NotePage };
//# sourceMappingURL=note.js.map