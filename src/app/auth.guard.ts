// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("this.authService.isLoggedIn().value: ",this.authService.isLoggedIn().value)
    if (this.authService.isLoggedIn().value) {
      return true; // Cho phép truy cập nếu đã đăng nhập
    } else {
      // Không cho phép truy cập và chuyển hướng đến trang đăng nhập
      return this.router.parseUrl('/login');
    }
  }
}
