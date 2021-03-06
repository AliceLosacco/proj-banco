import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

constructor(private http: HttpClient) { }

  buscarDados(cpf: string){
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/buscarDados', { cpf });
  }

}
