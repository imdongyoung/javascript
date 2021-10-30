import { MenudetailPage } from './../menudetail/menudetail';
import { MenucreatePage } from './../menucreate/menucreate';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenulistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menulist',
  templateUrl: 'menulist.html',
})
export class MenulistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClickMenuCreate(){
    this.navCtrl.push(MenucreatePage);
  }
  onClickMenuDetail(){
    this.navCtrl.push(MenudetailPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenulistPage');
  }

}
