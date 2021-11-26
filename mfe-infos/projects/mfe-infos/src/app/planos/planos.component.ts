import { Plano } from './plano.template';
import { PlanosService } from './planos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  cpf: string = '';
  salarioMensal: number = 0;
  planos: Plano[] = [];
  planoSelecionado: any = {};

  constructor(private service: PlanosService, private route: ActivatedRoute, private router: Router) { }

  //recebe os parâmetros da rota e trasforma o salário string em number
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salarioMensal = parseInt(queryParams['salarioMensal']);
    });
    this.listarPlanos();

  }

  onSubmit() {
    this.router.navigate(['infos'], { queryParams: { cpf: this.cpf }});
    this.alterarConta();
  }

  //chamada ao serviço para registrar a conta escolhida
  alterarConta(){
    this.service.registrarPlano(this.planoSelecionado).subscribe(
      (res) => {
        const data: any = res;
        if (data.cliente){
          console.log('sucesso')
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  //recebe os dados do plano escolhido e os salva no formato certo para envio para o serviço
  inputConta(dadosPlano: Plano){
    this.planoSelecionado = {
      cpf : this.cpf,
      plano : {
        custoMensal: dadosPlano.custoMensal,
        tipoCartao: dadosPlano.tipoCartao,
        tipoConta: dadosPlano.tipoConta
      }  }
  }

  //chamada ao serviço para listar os planos disponíveis de acordo com o salário
  listarPlanos() {
    this.service.listarPlanos(this.salarioMensal).subscribe(
      (data) =>{
        const dataValue: any = data;
        this.planos = dataValue.planos;
      },
      (error) => {
        console.log(error);
      }
      )
  }

  aplicaCssClicado(campo: any){
    if (this.planoSelecionado.plano && campo === this.planoSelecionado.plano.tipoConta){
      return true
    }
    return false
  }
}
