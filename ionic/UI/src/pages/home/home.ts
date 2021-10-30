import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myPets=[
    {
      kind: 'Dog',
      name: 'Gwangbae',
      color: 'white'
    },
    {
      kind: 'Cat',
      name: 'Samdu',
      color: 'brown'
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
