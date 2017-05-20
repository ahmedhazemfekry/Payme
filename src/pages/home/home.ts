import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  val:any;
  val2:any;
  constructor(public navCtrl: NavController) {
  this.val="f";
  this.val2="classified"
  }

}
