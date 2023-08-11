import {Component, OnInit} from '@angular/core';
import {UserVM} from "../../../model/user";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    const dataLocal = localStorage.getItem("isLogin");
    this.isLogin = this.userService.isLoggedIn();
    if (dataLocal) {
      const data = JSON.parse(dataLocal);
      this.user = {
        id: data.id,
        passWord: data.passWord,
        createdAt: data.createdAt,
        userName: data.userName,
        displayName: data.displayName
      }
    } else {
    }
  }

  user!: UserVM;
  isLogin!: Observable<boolean>;

  handlerLogout() {
    this.userService.isLogin.next(false);
    localStorage.setItem("isLogin", '');
    this.router.navigate(['/login']);
  }
}
