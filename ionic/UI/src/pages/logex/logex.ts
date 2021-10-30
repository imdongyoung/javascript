import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logex',
  templateUrl: 'logex.html',
})
export class LogexPage {
  email:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogexPage');
  }
  ngOnInit() {
    
  }
  onClickSnowball() {
    window.location.href="https://www.youtube.com";
  }
  onClickkakaoLogin() {
    window.location.href ="https://www.kakao.com"
  }
  onClickFacebookLogin(){
    window.location.href ="https://www.facebook.com"
  }

}
