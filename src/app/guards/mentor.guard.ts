import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/services/auth.service';
import { UserType } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MentorGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.authUser?.userType !== UserType.MENTOR) {
        return false;
      }
      return true;
  }
  
}
