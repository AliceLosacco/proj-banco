import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cpf: string = '';
  dadosCliente: {} = {};
  formulario!: FormGroup;

  constructor(private http: HttpClient, private service: DashboardService, private route: ActivatedRoute) {
    this.formulario = new FormGroup({
      nomeCompleto: new FormControl({value: '', disabled: true}),
      plano: new FormGroup({
        custoMensal: new FormControl({value: '', disabled: true}),
        tipoCartao: new FormControl({value: '', disabled: true}),
        tipoConta: new FormControl({value: '', disabled: true}),
      })
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
    });
    this.buscaCliente();
  }

  populaForm(dadosValue: any) {
    this.formulario.patchValue({
      nomeCompleto: dadosValue.nomeCompleto,
      plano: {
        custoMensal: dadosValue.plano.custoMensal,
        tipoCartao: dadosValue.plano.tipoCartao,
        tipoConta: dadosValue.plano.tipoConta,
      }
    });
  }

  buscaCliente(){
    this.service.buscarDados(this.cpf).subscribe(
      (res) => {
        const dados: any = res;
        this.dadosCliente = dados.cliente;
        console.log(this.dadosCliente);
        this.populaForm(dados.cliente);
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
