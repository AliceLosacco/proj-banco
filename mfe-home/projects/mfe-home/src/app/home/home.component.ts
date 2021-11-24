import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cpf: string = '';
  error: boolean = false;

  constructor(private service: HomeService, private router: Router) { }

  salvarCpf(valor: string){
    this.cpf = valor
    console.log(this.cpf)

    this.service.consultaCpf(this.cpf).subscribe(
      dados => {
        console.log(dados)
        const dadosUsuario: any = dados
        if (dadosUsuario.cliente){
          this.router.navigate(['cadastro'], {queryParams: { cpf: this.cpf, userData: true }})
        }
        else {
          this.router.navigate(['cadastro'], {queryParams: { cpf: this.cpf }})
        }
      },
      error => {
        this.error = true
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}
