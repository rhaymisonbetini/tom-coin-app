import { Injectable } from "@angular/core";

@Injectable()

export class SystemMessages {

    public genericError: string = 'Ops, um erro ocorreu. Por favor tente mais tarde';
    public erroGetProof: string = 'Ops, tivemos um erro no pooling de mineração. Tente mais tarde';
    public notFoundUser: string = 'Usuario não encontrado';
    public notFoundWallet: string = 'Carteira não encontrada';

    public loading: string = 'Realizando o login';
    public invalidLogin: string = 'Email ou senha invalidos';

    public getWallet: string = 'Carregando dados de sua carteira';

}