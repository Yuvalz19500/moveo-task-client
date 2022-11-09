import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/services/auth.service';
import { UserType } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.authenticated || this.authService.authUser?.userType === UserType.MENTOR) {
        return true;
      }
      this.router.navigate(['auth/student-login', route.params['uuid'] ,route.params['studentId'], route.params['codeBlockId']]);
      return false;
  }
  
}
