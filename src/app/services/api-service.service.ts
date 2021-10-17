import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockChainInterface } from '../interfaces/blockchain.interface';
import { LoginInterface } from '../interfaces/login.interface';
import { MinerateInterface } from '../interfaces/minerate.interface';
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
    return this.http.get<MinerateInterface>(this.urlSericeService.url + `create-block`);
  }

  blockchain() {
    return this.http.get<BlockChainInterface>(this.urlSericeService.url + `blockchain`)
  }

  transfer(datas: { to_key: string, cash: number, email: string }) {
    return this.http.post<string>(this.urlSericeService.url + `transaction`, datas)
  }

  machineLearing() {
    return this.http.get<Array<any>>(this.urlSericeService.url + `machine-learning`);
  }

  tomCoinHistory() {
    return this.http.get<Array<any>>(this.urlSericeService.url + `tom-coin-history`);
  }

}
