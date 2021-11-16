import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup;

  nomeCompleto: string = '';
  email: string = '';
  cpf!: number;
  dataNascimento!: number;
  salarioMensal!: number;
  senha: string = '';
  endereco!: [[
    cep: number,
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string
  ]];
  numeroCelular!: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeCompleto: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email],],
      confirmarEmail: [""],
      cpf: [""],
      dataNascimento: [""],
      salarioMensal: [""],
      senha: [""],
      confirmarSenha: [""],
      numeroCelular: [""],

      endereco: this.formBuilder.group({
        cep: ["", ],
        rua: ["", Validators.required],
        numero: ["", Validators.required],
        complemento: [""],
        bairro: ["", Validators.required],
        cidade: ["", Validators.required],
        estado: ["", Validators.required],
      })

    })
  }

  onSubmit() {
    console.log(this.formulario)
  }

}
