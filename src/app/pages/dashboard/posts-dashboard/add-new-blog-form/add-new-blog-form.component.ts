import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategoryVM} from "../../../../model/category";
import convertToUnsignedVietnamese from "../../../../method/convertToUnsignedVietnamese";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {CategoryServiceService} from "../../../../services/category-service.service";
import {BlogPostCreate, BlogPostVM} from "../../../../model/blog-post";
import {BlogService} from "../../../../services/blog.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-new-blog-form',
  templateUrl: './add-new-blog-form.component.html',
  styleUrls: ['./add-new-blog-form.component.scss']
})
export class AddNewBlogFormComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  formGroup!: FormGroup;

  categories: CategoryVM[] = [];
  permalink = '';
  @ViewChild("inputPermalink") inputPermalinkRef!: ElementRef;
  imgUrl: any = 'assets/image/bg-img-default.png';

  isEdit !: number;

  post!: BlogPostVM;

  constructor(private formbuilder: FormBuilder,
              private categoryService: CategoryServiceService,
              private blogService: BlogService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {

      if (value["id"]) {
        this.isEdit = Number(value["id"]);


      }

    })
  }

  ngOnInit(): void {
    this.fetch();
    this.formGroup = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', Validators.required],
      excerpt: ['', Validators.required],
      category: ['', Validators.required]
    });
    if (!!this.isEdit) {

      this.blogService.getById(this.isEdit).then(res => {
        if (res) {
          this.post = res;
          this.formGroup.patchValue({
            title: this.post.title,
            content: this.post.content,
            excerpt: this.post.excerpt,
            category: this.post.category
          });
          this.imgUrl = this.post.img;
          this.permalink = this.post.permalink;
          this.inputPermalinkRef.nativeElement.value = this.post.permalink;
        }
      });

    }

  }

  onFileSelected($event: Event) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        this.imgUrl = e.target.result;
      }
    }
    if ($event.target) {
      const element = $event.target as HTMLInputElement;
      if (element.files)
        reader.readAsDataURL(element.files[0])
    }
  }

  handleTitleChange($event: Event) {
    const input = $event.target as HTMLInputElement
    const value = input.value;
    const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    this.permalink = convertToUnsignedVietnamese(value.toLowerCase().replace(specialCharsRegex, '').replace(/\s+/g, '-'));
    this.inputPermalinkRef.nativeElement.value = this.permalink;
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();
  }

  handleAddBlog() {
    if (this.formGroup.valid && !!this.imgUrl && !!this.permalink && this.imgUrl != "assets/image/bg-img-default.png") {
      const formData = this.formGroup.value;
      const data: BlogPostCreate = {...formData}
      data.permalink = this.permalink;
      data.img = this.imgUrl;
      data.createdAt = new Date().toString();
      data.status = "new";
      data.view = 0;
      if (this.isEdit) {
        this.blogService.update(this.post.id, data).then(res => {
          alert("Cập nhật thành công!")
          this.router.navigate(['/dashboard/posts']);
        });

      } else {
        this.blogService.add(data).then(res => {
          this.formGroup.reset();
          this.imgUrl = 'assets/image/bg-img-default.png';
          this.permalink = '';

          alert("Thêm mới thành công!")
          this.router.navigate(['/dashboard/posts']);
        });
      }

    } else {
      alert("Điềm đầy đủ nội dung")
    }

  }

  async fetch() {
    const data = await this.categoryService.getAll();
    if (data) {
      this.categories = data;
    }
  }

}
