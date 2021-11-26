import { FormGroup, FormControl } from '@angular/forms';
import { InfosService } from './infos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  cpf: string = '';
  dados: {} = {};
  formulario: FormGroup;

  constructor(private route: ActivatedRoute, private service: InfosService, private router: Router) {
        //criação do data-driven form
        this.formulario = new FormGroup({
          nomeCompleto: new FormControl({value: '', disabled: true}),
          email: new FormControl({value: '', disabled: true}),
          confirmarEmail: new FormControl({value: '', disabled: true}),
          cpf: new FormControl({value: '', disabled: true}),
          dataNascimento: new FormControl({value: '', disabled: true}),
          salarioMensal: new FormControl({value: '', disabled: true}),
          senha: new FormControl({value: '', disabled: true}),
          numeroCelular: new FormControl({value: '', disabled: true}),

          endereco: new FormGroup({
            cep: new FormControl({value: '', disabled: true}),
            rua: new FormControl({value: '', disabled: true}),
            numero: new FormControl({value: '', disabled: true}),
            complemento: new FormControl({value: '', disabled: true}),
            bairro: new FormControl({value: '', disabled: true}),
            cidade: new FormControl({value: '', disabled: true}),
            estado: new FormControl({value: '', disabled: true}),
          }),
          plano: new FormGroup({
            custoMensal: new FormControl({value: '', disabled: true}),
            tipoCartao: new FormControl({value: '', disabled: true}),
            tipoConta: new FormControl({value: '', disabled: true})
          })
        });
  }

  transformaData(data: string) {
    const d = data.split('/');
    return [d[2], d[1], d[0]].join('-');
  }

  populaForm(dadosValue: any) {
    const data = this.transformaData(dadosValue.dataNascimento);
    this.formulario.patchValue({
      nomeCompleto: dadosValue.nomeCompleto,
      email: dadosValue.email,
      cpf: dadosValue.cpf,
      dataNascimento: data,
      salarioMensal: dadosValue.salarioMensal,
      numeroCelular: dadosValue.numeroCelular,
      senha: dadosValue.senha,
      endereco: {
        cep: dadosValue.endereco.cep,
        rua: dadosValue.endereco.rua,
        numero: dadosValue.endereco.numero,
        complemento: dadosValue.endereco.complemento,
        bairro: dadosValue.endereco.bairro,
        cidade: dadosValue.endereco.cidade,
        estado: dadosValue.endereco.estado,
      },
      plano: {
        custoMensal: dadosValue.plano.custoMensal,
        tipoCartao: dadosValue.plano.tipoCartao,
        tipoConta: dadosValue.plano.tipoConta
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
    });
    this.retornarDados();
  }

  retornarDados() {
    this.service.buscarDados(this.cpf).subscribe(
      (res) => {
        const dados: any = res;
        this.populaForm(dados.cliente);
      }
    );
  }

  onSubmit() {
    this.router.navigate(['dashboard'], {
      queryParams: {
        cpf: this.cpf
      }
    });
  }

  alterarDados() {
    this.router.navigate(['cadastro'], {
      queryParams: {
        cpf: this.cpf
      }
    });
  }

}
