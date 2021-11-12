import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF'

  constructor(private http: HttpClient) { }

  consultaCpf(cpf: string) {
      return this.http.post(this.API, {cpf})
  }
}
