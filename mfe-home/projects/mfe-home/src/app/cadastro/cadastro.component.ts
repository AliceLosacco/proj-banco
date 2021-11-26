import { CadastroService } from './cadastro.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  //variável que guardará o Form de cadastro
  formulario: FormGroup;
  //variável que recebe o cpf informado na primeira página
  cpf: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: CadastroService,
    private router: Router
  ) {
    //criação do data-driven form
    this.formulario = new FormGroup({
      nomeCompleto: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      salarioMensal: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      numeroCelular: new FormControl('', [Validators.required]),

      endereco: new FormGroup({
        cep: new FormControl('', Validators.required),
        rua: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required),
      }),
    });
  }

  //recebe o CPF pelo parâmetro para realizar a chamada do serviço
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.cpf = params['cpf'];
      this.getUserData(this.cpf);
    });
  }

  onSubmit() {
    this.inserirCliente()
  }

  //chamada do serviço apra incluir cliente
  inserirCliente(){
    const data = this.formulario.value.dataNascimento
    this.formulario.value.dataNascimento = this.transformaDataCreate(data)
    console.log(this.formulario.value.dataNascimento)
    this.service.inserirDados(this.formulario.value).subscribe(
      (res) => {
        this.router.navigate(['foto'], {
          queryParams: {
            cpf: this.formulario.value.cpf,
            salarioMensal: this.formulario.value.salarioMensal,
          },
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //transforma a data recbida para o padrão do tipo date no html
  transformaData(data: string) {
    const d = data.split('/');
    return [d[2], d[1], d[0]].join('-');
  }

  //transforma a data vinda do html no padrão para o service
  transformaDataCreate(data: string) {
    const d = data.split('-');
    return [d[2], d[1], d[0]].join('/');
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
    });
  }

  //Chamada do serviço, popula o form caso retorne dados ou preenche o campo cpf caso não haja dados
  getUserData(cpfValue: string) {
    this.service.consultaCpf(cpfValue).subscribe(
      (dados) => {
        const dadosUsuario: any = dados
        if (dadosUsuario.cliente) {
          const dadosValue: any = dados;
          this.populaForm(dadosValue.cliente);
        } else {
          this.formulario.patchValue({ cpf: cpfValue });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  validar(){
    const data: any = this.formulario.value.cpf
    if(data.length != 11){
      return false
    }
    else {
      return true
    }
  }

}
