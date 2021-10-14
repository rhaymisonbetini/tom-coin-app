import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interfaces/login.interface';
import { TransactionsInterface } from '../interfaces/transactions.interface';
import { WalletInteface } from '../interfaces/wallet.interface';
import { UrlServiceService } from './url-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient,
    private urlSericeService: UrlServiceService,
  ) { }


  login(data: { email: string, password: string }) {
    return this.http.post<LoginInterface>(this.urlSericeService.url + `login`, data);
  }

  walletInformation(email: string) {
    return this.http.get<WalletInteface>(this.urlSericeService.url + `user-wallet-information/${email}`);
  }

  transactions(email: string) {
    return this.http.get<Array<TransactionsInterface>>(this.urlSericeService.url + `transactions/${email}`);
  }

  createBlockChain() {
    return this.http.get(this.urlSericeService.url + `create-block`);
  }

}
