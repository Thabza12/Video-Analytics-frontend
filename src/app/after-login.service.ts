import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  constructor(private _service: AppServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._service.loggedIn();
  }
}
