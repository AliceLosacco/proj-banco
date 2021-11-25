import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FotoService } from './foto.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {

  //recebe a foto do html
  foto: string = '';
  //recebe cpf para passar para a tela de planos
  cpf: string = '';
  //recebe salário mensal para passar para a tela de planos
  salarioMensal: string = '';
  //variável que guarda a foto no formato necessário para chamar o serviço
  formData!: FormData;

  constructor(
    private service: FotoService,
    private router : Router,
    private route: ActivatedRoute
    ) { }

  //recebe os parâmetros cpf e salarioMensal da rota
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salarioMensal = queryParams['salarioMensal'];
    })
  }

  //coloca o input de foto do html dentro do FormData para enviar para o serviço
  inputFoto(event: any){
    if (event.target.files && event.target.files[0]){
      const foto = event.target.files[0];
      const data = new FormData
      data.append('filetoupload', foto)
      this.formData = data;
    }
  }

  //chama o serviço e faz o roteamento
  onSubmit() {
    this.service.enviaFoto(this.formData).subscribe(
      (res) => {
          this.router.navigate(['planos'], {queryParams: { cpf: this.cpf, salarioMensal: this.salarioMensal }})
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
