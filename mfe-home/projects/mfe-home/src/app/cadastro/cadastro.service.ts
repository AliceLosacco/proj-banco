import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  consultaCpf(cpf: string) {
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF', {cpf});
  }

  inserirDados(dados: {}) {
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes', dados);
  }
}

