import { Component, OnInit } from '@angular/core';
import { BlockChainInterface } from 'src/app/interfaces/blockchain.interface';
import { LoadingProvider } from 'src/app/provides/loading';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.page.html',
  styleUrls: ['./block-chain.page.scss'],
})
export class BlockChainPage implements OnInit {

  protected blockchain: BlockChainInterface;

  constructor(
    private apiService: ApiServiceService,
    private loadingProvider: LoadingProvider,
    private toastProvider: ToastProvider,
    private sistemMessage: SystemMessages
  ) { }

  ngOnInit() {
    this.getBlockChain();
  }

  ionViewDidEnter(){
    sessionStorage.setItem('NEXT', 'TRUE');
  }

  getBlockChain() {
    this.loadingProvider.loadingPresent(this.sistemMessage.getBlockChain)
    this.apiService.blockchain().subscribe((res: BlockChainInterface) => {
      this.loadingProvider.loadingDismiss();
      this.blockchain = res;
    }, err => {
      this.loadingProvider.loadingDismiss();
      this.toastProvider.erroToast(this.sistemMessage.genericError);
    })
  }
}
