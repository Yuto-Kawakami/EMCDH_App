import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { StoryPage } from '../story/story';
import { NotePage } from '../note/note';
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = StoryPage;
        this.tab2Root = NotePage;
        this.tab3Root = HomePage;
        this.tab4Root = HomePage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = function () { return []; };
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map