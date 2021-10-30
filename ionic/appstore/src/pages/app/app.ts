import { TwiPage } from './../twi/twi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypagePage } from '../mypage/mypage';
import { SearchPage } from '../search/search';

/**
 * Generated class for the AppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
})
export class AppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPage');
  }
  onMyPage(){
    this.navCtrl.push(MypagePage);
  }
  onClickAppDetail(){
    this.navCtrl.push(TwiPage);
  }

}
