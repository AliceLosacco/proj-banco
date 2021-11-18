import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoComponent } from './foto.component';


const routes: Routes = [

  {
    path: '',
    component: FotoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotoRoutingModule { }
