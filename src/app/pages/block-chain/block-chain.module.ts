import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockChainPageRoutingModule } from './block-chain-routing.module';

import { BlockChainPage } from './block-chain.page';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingProvider } from 'src/app/provides/loading';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockChainPageRoutingModule
  ],
  providers: [
    ApiServiceService,
    LoadingProvider,
    ToastProvider,
    SystemMessages
  ],
  declarations: [BlockChainPage]
})
export class BlockChainPageModule {}
