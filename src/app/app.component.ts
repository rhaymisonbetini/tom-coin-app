import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Previsão', url: '/machine-learning', icon: 'bar-chart-outline' },
    { title: 'BlockChain', url: '/block-chain', icon: 'link-outline' },
    { title: 'Sair', url: '/folder/Inbox', icon: 'log-out-outline' },
  ];
  public labels = ['2021', 'Todos os direitos reservados'];
  constructor() { }
}
