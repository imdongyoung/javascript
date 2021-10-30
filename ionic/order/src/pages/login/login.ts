import { SignupPage } from './../signup/signup';
import { MenulistPage } from './../menulist/menulist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ngOnInit(){
  }

  onClickkakaoLogin(){
    this.navCtrl.push(MenulistPage);
  }
  onClickfacebookLogin(){
    this.navCtrl.push(MenulistPage);
  }
  onClickemailLogin(){
    this.navCtrl.push(SignupPage);
  }

}
