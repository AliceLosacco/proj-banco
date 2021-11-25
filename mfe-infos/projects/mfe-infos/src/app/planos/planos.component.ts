import { PlanosService } from './planos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  cpf: string = '';
  salarioMensal: number = 0;
  planos: [] = [];

  constructor(private service: PlanosService, private route: ActivatedRoute) { }

  //recebe os parâmetros da rota e trasforma o salário string em number
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      console.log('aqui')
      //this.salarioMensal = parseInt(queryParams['salarioMensal']);
    });

  }

  onSubmit() {
  }

  listarPlanos() {
    this.service.listarPlanos(this.salarioMensal).subscribe(
      (data) =>{
        const dataValue: any = data;
        this.planos = dataValue.planos;
        console.log(this.planos)
      },
      (error) => {
        console.log(error)
      }
      )
  }
}
