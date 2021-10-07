import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ToastProvider } from 'src/app/provides/toast';
import { SystemMessages } from 'src/app/provides/systemMessages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [ApiServiceService, ToastProvider, SystemMessages],
  declarations: [HomePage]
})
export class HomePageModule {}
