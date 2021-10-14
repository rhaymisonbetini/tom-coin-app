import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingProvider } from 'src/app/provides/loading';
import { ToastProvider } from 'src/app/provides/toast';
import { SystemMessages } from 'src/app/provides/systemMessages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    ApiServiceService,
    LoadingProvider,
    ToastProvider,
    SystemMessages],
  declarations: [LoginPage]
})
export class LoginPageModule { }
