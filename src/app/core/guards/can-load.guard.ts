import { Injectable, inject } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AppUrls } from '@core/data/app-urls';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CanLoadGuardService implements CanLoad {

  private readonly _router = inject(Router);

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (segments.some(s => s.path.includes('admin'))) {
      this._router.navigate([AppUrls.Forbidden], { skipLocationChange: true });
      return false;
    }
    return true;
  }

}
