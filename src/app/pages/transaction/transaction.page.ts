import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertProvider } from 'src/app/provides/alert';
import { LoadingProvider } from 'src/app/provides/loading';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  protected tomCoin: number = parseInt(sessionStorage.getItem('TOM_COIN_USER'));
  protected transferForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiServiceService,
    private loadingProvider: LoadingProvider,
    private toastProvider: ToastProvider,
    private alertProvider: AlertProvider,
    private systemMessages: SystemMessages
  ) { }

  ngOnInit() {
    sessionStorage.setItem('NEXT', 'TRUE');
    this.transferForm = this.formBuilder.group({
      to_key: ['', [Validators.required]],
      email: [sessionStorage.getItem('email'), [Validators.required, Validators.email]],
      cash: [0, [Validators.required, Validators.min(1), Validators.max(this.tomCoin)]]
    })
  }


  transfer() {
    this.loadingProvider.loadingPresent(this.systemMessages.inTransfer);
    this.apiService.transfer(this.transferForm.getRawValue()).subscribe((res: string) => {
      if (res == 'TRANSACTION_SUCCESS') {
        this.loadingProvider.loadingDismiss();
        this.alertProvider.successWithRouteRootAlert(this.systemMessages.transferSuccess, '/home');
      }
    }, err => {
      this.toastProvider.erroToast(this.systemMessages.genericError);
    })
  }
}
