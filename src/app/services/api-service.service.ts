import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.post(this.urlSericeService.url + `login`, data);
  }

  createBlockChain() {
    return this.http.get(this.urlSericeService.url + `create-block`);
  }

}
