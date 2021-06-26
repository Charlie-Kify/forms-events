import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Este gusrd valida tener una sesión activa:

@Injectable({
  providedIn: 'root'
})
export class HasSessionGuard implements CanActivate {

  constructor(
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const isLogged = localStorage.getItem('isLogged');
    console.log('is Logged');

    if(isLogged) {
      return true;
    } else {
      this.router.navigate(['/','module-auth','login']);
      return false;
    }
    
  }
  
}
