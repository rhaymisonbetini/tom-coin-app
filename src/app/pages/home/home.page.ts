import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MinerateInterface } from 'src/app/interfaces/minerate.interface';
import { TransactionsInterface } from 'src/app/interfaces/transactions.interface';
import { WalletInteface } from 'src/app/interfaces/wallet.interface';
import { AlertProvider } from 'src/app/provides/alert';
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
  protected transactions: Array<TransactionsInterface> = [];
  protected isMinerating: boolean = false;

  protected avatar: string = 'https://image.freepik.com/vetores-gratis/ilustracao-de-um-jovem-elegante-homem-barbudo-bonito-dos-desenhos-animados-avatar-de-perfil-moderno_15870-758.jpg'

  constructor(
    private router: Router,
    private apiService: ApiServiceService,
    private loadingProvider: LoadingProvider,
    private toastProvider: ToastProvider,
    private alertProvider: AlertProvider,
    private sistemMessage: SystemMessages,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.getWalletInformations();
  }

  transaction() {
    sessionStorage.setItem('TOM_COIN_USER', this.wallet.user_tom_coin.toString())
    this.router.navigateByUrl(`transaction`);
  }

  getWalletInformations(solitude?: boolean) {
    !solitude ? this.loadingProvider.loadingPresent(this.sistemMessage.getWallet) : null;
    let email: string = sessionStorage.getItem('email');
    this.apiService.walletInformation(email).subscribe((res: WalletInteface) => {
      this.wallet = res;
      !solitude ? this.getTransactions() : null;
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

  getTransactions() {
    let email: string = sessionStorage.getItem('email');
    this.apiService.transactions(email).subscribe((res: Array<TransactionsInterface>) => {
      this.loadingProvider.loadingDismiss();
      this.transactions = res;
    }, error => {
      if (error.message = 'USER_NOT_FOUND') {
        sessionStorage.clear();
        this.toastProvider.erroToast(this.sistemMessage.notFoundUser)
        this.navController.navigateRoot('');
      } else {
        this.loadingProvider.loadingDismiss();
        this.toastProvider.erroToast(this.sistemMessage.genericError);
      }
    })
  }

  minarate() {
    this.isMinerating = true;
    this.apiService.createBlockChain().subscribe((res: MinerateInterface) => {
      this.isMinerating = false;
      this.alertProvider.susscessAlert(`
      Parabens você minerou um novo bloco no blockchain. Sua recompensa foi de 1 TomCoin
      `)
      this.getWalletInformations(true)
    }, error => {
      console.log(error);
      this.toastProvider.erroToast(this.sistemMessage.genericError);
    })
  }
}
