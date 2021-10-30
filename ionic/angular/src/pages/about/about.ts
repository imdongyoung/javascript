import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  months =[];

  constructor(public navCtrl: NavController) {
    this.months=["Jan","Feb","March","April","May","June",
    "July","Aug","Sep","Nov","Dec"];
  }

}
