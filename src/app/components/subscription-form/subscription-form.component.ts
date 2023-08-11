import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubService} from "../../services/sub.service";
import {SubCreate} from "../../model/sub";

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
  }

  constructor(private formBuilder: FormBuilder,
              private subService:SubService) {
  }

  formGroup!: FormGroup;

  handlerSub() {
    if(this.formGroup.valid){
      const data:SubCreate = this.formGroup.value;
      data.createdAt = new Date().toString();
      this.subService.add(data).then(res=>
      {
        alert("Đăng ký thành công!")
      })
    }else {
      alert("Điền đúng nội dung!")
    }
  }
}
