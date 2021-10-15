import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionPageRoutingModule } from './transaction-routing.module';

import { TransactionPage } from './transaction.page';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingProvider } from 'src/app/provides/loading';
import { ToastProvider } from 'src/app/provides/toast';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { AlertProvider } from 'src/app/provides/alert';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiServiceService,
    LoadingProvider,
    ToastProvider,
    AlertProvider,
    SystemMessages
  ],
  declarations: [TransactionPage]
})
export class TransactionPageModule { }
