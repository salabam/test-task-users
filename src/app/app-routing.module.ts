import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUrls } from '@core/data/app-urls';
import { NotFoundComponent } from '@core/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppUrls.Users.Base
  },
  {
    path: AppUrls.Users.Base,
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
