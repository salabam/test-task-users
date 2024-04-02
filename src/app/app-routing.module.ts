import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUrls } from '@core/data/app-urls';
import { CanLoadGuardService } from '@core/guards';
import { NotFoundComponent, ForbiddenComponent } from '@core/pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppUrls.Users.Base,
  },
  {
    path: AppUrls.Users.Base,
    canLoad: [CanLoadGuardService],
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule),
  },
  {
    path: AppUrls.Forbidden,
    component: ForbiddenComponent,
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
