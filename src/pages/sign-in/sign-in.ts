import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { MovieListPage } from '../movie-list/movie-list';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  signInForm: FormGroup;
  signInError: boolean = false;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'All fields must be completed.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  signin(event) {
    if (this.signInForm.valid) {
      this.navCtrl.setRoot(MovieListPage);
    } else {
      this.presentToast()
    }
  }

}
