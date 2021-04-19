import { Component } from '@angular/core';
import { IonicPage,  MenuController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public showPassword: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public menuCtrl : MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.setRoot(HomePage);
    }

    register(){
      this.navCtrl.push(RegisterPage);
      }

      public onPasswordToggle(): void {
        this.showPassword = !this.showPassword;
      }
}
