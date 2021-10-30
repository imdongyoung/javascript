import { AmongPage } from './../among/among';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypagePage } from '../mypage/mypage';

/**
 * Generated class for the RecomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recom',
  templateUrl: 'recom.html',
})
export class RecomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomPage');
  }
  onMyPage(){
    this.navCtrl.push(MypagePage);
  }
  onClickMenuDetail(){
    this.navCtrl.push(AmongPage)
  }

}
