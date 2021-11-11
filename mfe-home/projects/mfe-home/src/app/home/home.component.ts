import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cpf: number = 0;


  salvarCpf(valor: any){
    this.cpf = valor;
    console.log(this.cpf)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
