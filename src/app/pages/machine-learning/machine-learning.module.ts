import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineLearningPageRoutingModule } from './machine-learning-routing.module';

import { MachineLearningPage } from './machine-learning.page';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingProvider } from 'src/app/provides/loading';
import { ToastProvider } from 'src/app/provides/toast';
import { SystemMessages } from 'src/app/provides/systemMessages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineLearningPageRoutingModule
  ],
  providers: [
    ApiServiceService,
    LoadingProvider,
    ToastProvider,
    SystemMessages
  ],
  declarations: [MachineLearningPage]
})
export class MachineLearningPageModule {}
