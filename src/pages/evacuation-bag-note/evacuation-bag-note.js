import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
var EvacuationBagNotePage = (function () {
    function EvacuationBagNotePage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.items = [
            {
                name: '母子健康手帳、健康保険証',
                tips: '常に携帯し、大切なページはクラウドに',
            },
            {
                name: 'オムツ、お尻拭き',
                tips: 'お尻拭きは、身体を拭くにも役立ちます',
            },
            {
                name: '授乳用ケープ、ミルクセット',
                tips: '日頃の授乳方法に合わせて準備しましょう',
            },
            {
                name: 'スプーン、紙コップ、キッチン用ラップ',
                tips: 'コップで少しずつ飲ませる方法もあります',
            },
            {
                name: 'ガーゼ、抱っこ紐',
                tips: '避難の際や、避難所で両手が使えるように、抱っこ紐が便利です',
            },
            {
                name: '非常食、離乳食',
                tips: '母乳やミルクで代用したり、大人の食事を取り分けることもできます。市販の離乳食を備えておくと安心です',
            },
            {
                name: 'ビタミン剤',
                tips: '災害時はビタミン類が不足し、口内炎になりやすいので、サプリメントを容易しておくとよいでしょう',
            },
            {
                name: '着替え、靴、防寒具',
                tips: '抱っこして避難する際にも、歩けるようになった子供には靴を履かせておくと良いでしょう',
            },
            {
                name: '生理用品、ビデ',
                tips: '使い慣れた生理ナプキンや、生理用ショーツはあると便利です',
            },
            {
                name: 'マスク',
                tips: '避難所内では感染予防としてマスクを着用しましょう',
            },
            {
                name: 'おもちゃ',
                tips: '使い慣れたおもちゃがあることで、心のケアにも繋がります',
            },
        ];
    }
    EvacuationBagNotePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(this);
        popover.present({
            ev: myEvent
        });
    };
    EvacuationBagNotePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-evacuation-bag-note',
                    templateUrl: 'evacuation-bag-note.html'
                },] },
    ];
    /** @nocollapse */
    EvacuationBagNotePage.ctorParameters = function () { return [
        { type: NavController, },
        { type: PopoverController, },
    ]; };
    return EvacuationBagNotePage;
}());
export { EvacuationBagNotePage };
//# sourceMappingURL=evacuation-bag-note.js.map