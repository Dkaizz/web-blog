import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {UserCreate, UserVM} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required, this.passwordValidator]],
      prePassWord: [''],
    }, {validator: this.prePasswordValidator});
  }

  formGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router:Router) {
  }

  getUserNameErrorMessage() {
    if (this.formGroup.get("userName")?.hasError('required')) {
      return 'Không thể để trống';
    }
    // else if (this.formGroup.get("userName")?.hasError('minLength')) {
    //   return 'Tài khoản phải ít nhất 8 ký tự';
    //
    // }

    return '';
  }

  getPassWordErrorMessage() {
    if (this.formGroup.get("passWord")?.hasError('required')) {
      return 'Không thể để trống!';
    } else if (this.formGroup.get("passWord")?.hasError("passwordValidator")) {
      return 'Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, thường, sô và ký tự đặc biệt!'
    }
    return '';
  }

  getPrePassWordErrorMessage() {

    if (this.formGroup.get("prePassWord")?.hasError("prePasswordValidator")) {
      return 'Mật khẩu nhập lại phải giống với mật khẩu'
    }
    return '';
  }

  // Custom validator function
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/;
    const password = control.value;
    if (!passwordRegex.test(password)) {
      return {
        "passwordValidator": true
      }
    }
    return null; // Trả về null nếu password hợp lệ
  }

  prePasswordValidator(formGroup: FormGroup) {

    const password = formGroup.get('passWord');
    const confirmPassword = formGroup.get('prePassWord');
    if (password?.value != confirmPassword?.value) {
      confirmPassword?.setErrors({prePasswordValidator: true});
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  handlerRegister() {
    if (this.formGroup.valid) {
      const data: UserCreate = {
        ...this.formGroup.value,
        createdAt:new Date().toString(),
        displayName:new Date().getMilliseconds()+"user"
      };

      this.userService.add(data).then(value => {
        this.router.navigate(['/login']);
        alert("Đăng ký thành cống!");
      })
    }
  }
}
