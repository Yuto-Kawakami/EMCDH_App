import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvacuationBagPage } from '../evacuation-bag/evacuation-bag';
var StoryPage = (function () {
    function StoryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            // {
            //     title: "防災マップを作りましょう",
            //     icon: "map",
            //     page: EvacuationBagPage,
            // },
            {
                title: "避難バッグを見直そう",
                icon: "basket",
                page: EvacuationBagPage,
            },
            // {
            //     title: "発災時に必要な行動",
            //     icon: "walk",
            //     page: EvacuationBagPage,
            // },
            // {
            //     title: "避難生活で必要な行動",
            //     icon: "home",
            //     page: EvacuationBagPage,
            // },
            // {
            //     title: "必要な備えについて考えよう",
            //     icon: "chatbubbles",
            //     page: EvacuationBagPage,
            // },
        ];
    }
    StoryPage.prototype.onClick = function () {
        this.navCtrl.push(EvacuationBagPage);
    };
    StoryPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    StoryPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-story',
                    templateUrl: 'story.html'
                },] },
    ];
    /** @nocollapse */
    StoryPage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return StoryPage;
}());
export { StoryPage };
//# sourceMappingURL=story.js.map