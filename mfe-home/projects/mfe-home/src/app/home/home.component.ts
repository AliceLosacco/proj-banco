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

  constructor(private router: Router) { }

  salvarCpf(valor: string){
    this.cpf = valor
    console.log(this.cpf)

    this.router.navigate(['cadastro'], { queryParams: { cpf: this.cpf }})
  }

  ngOnInit(): void {
  }

}
