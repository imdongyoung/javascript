import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  bold:boolean=false;
  italic:boolean=false;
  large:boolean=false;

  currentStyles={
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '15px'
  };

  constructor(public navCtrl: NavController) {

  }
  setCurrentStyles(){
    this.currentStyles={
      'font-style': this.italic ? 'italic': 'normal',
      'font-weight': this.bold ? 'bold': 'normal',
      'font-size': this.large ? '30px': '15px'  
    }

    console.log(JSON.stringify(this.currentStyles));
  }

}
