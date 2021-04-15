import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../services/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authService: LoginserviceService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;

      return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
     console.log("Url: " + url)
     let val: string = localStorage.getItem('currentUser');

     if(val != null || val == "true"){
        if(url == "/login") {
          this.router.parseUrl('/');
        }

        if(url == "findsall"){
          console.log('here');
          this.router.parseUrl('/findsall');
        } else {
          return true;
        }

     } else {
        return this.router.parseUrl('/login');
     }
  }
}
