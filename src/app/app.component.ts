import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home-outline' },
    { title: 'Meu perfil', url: '/folder/Inbox', icon: 'person-circle-outline' },
    { title: 'BlockChain', url: '/folder/Inbox', icon: 'link-outline' },
    { title: 'Sair', url: '/folder/Inbox', icon: 'log-out-outline' },
  ];
  public labels = ['2021', 'Todos os direitos reservados'];
  constructor() { }
}
