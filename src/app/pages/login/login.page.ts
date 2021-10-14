import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginInterface } from 'src/app/interfaces/login.interface';
import { LoadingProvider } from 'src/app/provides/loading';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder,
    private loadingProvider: LoadingProvider,
    private toastProvider: ToastProvider,
    private systemMessages: SystemMessages,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  home() {
    this.navCtrl.navigateRoot('/home')
  }

  login() {
    this.loadingProvider.loadingPresent(this.systemMessages.loading);
    this.apiService.login(this.loginForm.getRawValue()).subscribe((res: LoginInterface) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('user', res.user.name);
      sessionStorage.setItem('email', res.user.email);
      this.loadingProvider.loadingDismiss();
      this.home();
    }, err => {
      console.log(err.status)
      this.loadingProvider.loadingDismiss();
      if (err.status == 401) {
        this.toastProvider.erroToast(this.systemMessages.invalidLogin);
      } else {
        this.toastProvider.erroToast(this.systemMessages.genericError);
      }
    })
  }
}
