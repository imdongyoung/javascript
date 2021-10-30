import { MenulistPage } from './../menulist/menulist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenucreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menucreate',
  templateUrl: 'menucreate.html',
})
export class MenucreatePage {

  title: string;
  contents: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenucreatePage');
  }
  onChangeTitle(event: any){
    this.title = event.target['value'];
  }
  onChangeContents(event: any){
    this.contents = event.target['value'];
  }
  onSaveMenu(){
    this.navCtrl.push(MenulistPage);
  }
}
