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


  minetate() {
    return this.http.get(this.urlSericeService.url + 'minerate');
  }

  createBlockChain(newproff: number) {
    return this.http.get(this.urlSericeService.url + `create-new-block/${newproff}`);
  }

}
