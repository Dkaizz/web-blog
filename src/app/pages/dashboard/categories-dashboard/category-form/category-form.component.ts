import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryServiceService} from "../../../../services/category-service.service";
import {CategoryCreate} from "../../../../model/category";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  formGroup!: FormGroup;
  isPost= false;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryServiceService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  addCategory() {
    if (this.formGroup.valid) {
      this.isPost = true;
      const data: CategoryCreate = {
        name: this.formGroup.value.name,
        createdAt: new Date().toString()
      };

      console.log("data: ",data);
      this.categoryService.add(data).then(value => {
        this.formGroup.reset();
        this.isPost = false;
        alert("Thêm thành công!")
      })
    }
  }
}
