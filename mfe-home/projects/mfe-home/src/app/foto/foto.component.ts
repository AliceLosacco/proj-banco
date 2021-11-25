import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FotoService } from './foto.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {

  foto: string = '';
  cpf: string = '';
  salarioMensal: string = '';
  formData!: FormData;

  constructor(
    private service: FotoService,
    private router : Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salarioMensal = queryParams['salarioMensal'];
    })
  }

  inputFoto(event: any){
    if (event.target.files && event.target.files[0]){
      const foto = event.target.files[0];
      const data = new FormData
      data.append('filetoupload', foto)
      this.formData = data;
    }
  }

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
