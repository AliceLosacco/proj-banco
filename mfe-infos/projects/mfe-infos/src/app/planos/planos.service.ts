import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

constructor(private http: HttpClient) { }

  listarPlanos(rendaMensal: number){
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Planos/planosDisponiveis', { rendaMensal });
  }

  registrarPlano(plano: {}){
    return this.http.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/alterarPlano', plano);
  }

}
