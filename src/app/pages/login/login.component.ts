import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName = new FormControl('', [Validators.required]);
  passWord = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,
              private router: Router) {
  }

  getUserNameErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'Không thể để trống';
    }

    return '';
  }

  getPassWordErrorMessage() {
    if (this.passWord.hasError('required')) {
      return 'Không thể để trống';
    }

    return '';
  }

  handlerLogin() {
    if (this.userName.valid && this.passWord.valid) {
      if (this.userName.value && this.passWord.value)
        this.userService.userlogin({userName: this.userName.value, passWord: this.passWord.value}).then(value => {
          console.log("res: ",value);
          if(value?.length){
            alert("đăng nhập thành công!");
            localStorage.setItem("isLogin",JSON.stringify(value[0]));
            this.userService.isLogin.next(true);
            this.router.navigate(['/dashboard'])
          }
          else {
            alert("tài khoản hoặc mật khẩu không chính xác")
          }

        });
    }
  }
}
