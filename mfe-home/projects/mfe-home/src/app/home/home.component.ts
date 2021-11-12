import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cpf: string = '';
  error: boolean = false;

  constructor(private service: HomeService) { }

  salvarCpf(valor: string){
    this.cpf = valor
    console.log(this.cpf)

    this.service.consultaCpf(this.cpf).subscribe(
      success => {
        console.log(success)
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
  }

}
