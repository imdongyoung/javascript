import { LolPage } from './../lol/lol';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypagePage } from '../mypage/mypage';
import { SearchPage } from '../search/search';


/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  onClickAppDetail(){
    this.navCtrl.push(LolPage);
  }
  onMyPage(){
    this.navCtrl.push(MypagePage);
  }
}
