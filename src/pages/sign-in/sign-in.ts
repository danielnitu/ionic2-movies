import { Component } from '@angular/core';
import { 
  AlertController, 
  LoadingController, 
  Loading, 
  IonicPage, 
  NavController, 
  NavParams 
} from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signin(event) {
    this.navCtrl.push(HomePage);
  }

}
