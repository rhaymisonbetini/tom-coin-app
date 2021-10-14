import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WalletInteface } from 'src/app/interfaces/wallet.interface';
import { LoadingProvider } from 'src/app/provides/loading';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  protected wallet: WalletInteface;
  protected avatar: string = 'https://image.freepik.com/vetores-gratis/ilustracao-de-um-jovem-elegante-homem-barbudo-bonito-dos-desenhos-animados-avatar-de-perfil-moderno_15870-758.jpg'

  constructor(
    private apiService: ApiServiceService,
    private loadingProvider: LoadingProvider,
    private toastProvider: ToastProvider,
    private sistemMessage: SystemMessages,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.getWalletInformations();
  }

  getWalletInformations() {
    this.loadingProvider.loadingPresent(this.sistemMessage.getWallet);
    let email: string = sessionStorage.getItem('email');
    this.apiService.walletInformation(email).subscribe((res: WalletInteface) => {
      this.loadingProvider.loadingDismiss();
      this.wallet = res;
    }, error => {
      if (error.message = 'USER_NOT_FOUND') {
        sessionStorage.clear();
        this.toastProvider.erroToast(this.sistemMessage.notFoundUser)
        this.navController.navigateRoot('');
      } else if (error.message = 'WALLET_NOT_FIND') {
        sessionStorage.clear();
        this.toastProvider.erroToast(this.sistemMessage.notFoundWallet)
        this.navController.navigateRoot('');
      } else {
        this.loadingProvider.loadingDismiss();
        this.toastProvider.erroToast(this.sistemMessage.genericError);
      }
    })
  }

  minarate() {
    this.apiService.createBlockChain().subscribe((res: number) => {
      console.log(res)
    }, error => {
      console.log(error);
      this.toastProvider.erroToast(this.sistemMessage.genericError);
    })
  }
}
