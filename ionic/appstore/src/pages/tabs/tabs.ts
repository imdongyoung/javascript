import { SearchPage } from './../search/search';
import { AppPage } from './../app/app';
import { GamePage } from './../game/game';
import { RecomPage } from './../recom/recom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  recom = RecomPage;
  game = GamePage;
  app = AppPage;
  search = SearchPage;

  constructor() {
  }

}
