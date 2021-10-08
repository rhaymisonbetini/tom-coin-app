import { Component, OnInit } from '@angular/core';
import { SystemMessages } from 'src/app/provides/systemMessages';
import { ToastProvider } from 'src/app/provides/toast';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  protected avatar: string = 'https://image.freepik.com/vetores-gratis/ilustracao-de-um-jovem-elegante-homem-barbudo-bonito-dos-desenhos-animados-avatar-de-perfil-moderno_15870-758.jpg'
  private proffVariable: string = '0000';

  constructor(
    private apiService: ApiServiceService,
    private toastProvider: ToastProvider,
    private sistemMessage: SystemMessages
  ) { }

  ngOnInit() {
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
