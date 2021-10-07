import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  public url: string = 'http://localhost:8000/api/';

  constructor() { }
}
