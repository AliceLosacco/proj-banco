import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'infos',
    loadChildren: () =>
      import('./infos/infos.module').then((m) => m.InfosModule),
  },

  {
    path: 'planos',
    loadChildren: () =>
      import('./planos/planos.module').then((m) => m.PlanosModule),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: '',
    redirectTo: 'infos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
