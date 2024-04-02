import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AppUrls } from '@core/data/app-urls';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CanActivateGuardService implements CanActivate {

  private readonly _router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (route.url.some(s => s.path.includes('admin'))) {
      this._router.navigate([AppUrls.Forbidden], { skipLocationChange: true });
      return false;
    }
    return true;
  }

}
