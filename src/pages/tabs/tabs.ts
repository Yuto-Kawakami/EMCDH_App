import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StoryPage } from '../story/story';
import { NotePage } from '../note/note';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StoryPage;
  tab2Root = NotePage;
  tab3Root = HomePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
