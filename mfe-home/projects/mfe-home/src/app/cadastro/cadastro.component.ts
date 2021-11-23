import { ActivatedRoute, Params, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup;
  userData: boolean = false;
  cpf: string = "";

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    this.route.queryParams.subscribe((params: Params) => {
      this.cpf = params['cpf']
      this.userData = params['userData']
      this.getUserData(this.cpf, this.userData)
    })

    this.formulario = new FormGroup({
      nomeCompleto: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      confirmarEmail: new FormControl(""),
      cpf: new FormControl(""),
      dataNascimento: new FormControl(""),
      salarioMensal: new FormControl(""),
      senha: new FormControl(""),
      confirmarSenha: new FormControl(""),
      numeroCelular: new FormControl(""),

      endereco: this.formBuilder.group({
        cep: new FormControl(""),
        rua: new FormControl("", Validators.required),
        numero: new FormControl("", Validators.required),
        complemento: new FormControl(""),
        bairro: new FormControl("", Validators.required),
        cidade: new FormControl("", Validators.required),
        estado: new FormControl("", Validators.required),
      })

    })
  }

  onSubmit() {
    console.log(this.formulario)
  }

  getUserData(cpf: string, userData: boolean) {
    if (userData) {
      console.log('userData')
    }
    else {
      this.formulario.patchValue({cpf: cpf})
    }
  }

}
