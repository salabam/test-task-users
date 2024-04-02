import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUrls } from '@core/data/app-urls';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppUrls.Users.Base
  },
  {
    path: AppUrls.Users.Base,
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
