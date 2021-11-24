import { CadastroService } from './cadastro.service';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  userData: boolean = false;
  cpf: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: CadastroService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nomeCompleto: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmarEmail: new FormControl(''),
      cpf: new FormControl(''),
      dataNascimento: new FormControl(''),
      salarioMensal: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl(''),
      numeroCelular: new FormControl(''),

      endereco: new FormGroup({
        cep: new FormControl(''),
        rua: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl(''),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required),
      }),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.cpf = params['cpf'];
      this.userData = params['userData'];
      this.getUserData(this.cpf, this.userData);
    });
  }

  onSubmit() {
    console.log(this.formulario);
    this.service.inserirDados(this.formulario.value).subscribe(
      (dados) => {
        console.log(dados)
        this.router.navigate(['foto'], {queryParams: { cpf: this.formulario.value.cpf }})
      },
      (error) => {
        console.log(error)
      }
    )
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
    });
  }

  getUserData(cpfValue: string, userData: boolean) {
    if (userData) {
      this.service.consultaCpf(cpfValue).subscribe(
        (dados) => {
          const dadosValue: any = dados;
          this.populaForm(dadosValue.cliente);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.formulario.patchValue({ cpf: cpfValue });
    }
  }
}
