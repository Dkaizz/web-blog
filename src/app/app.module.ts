import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/components/header/header.component';
import { CategoryNavbarComponent } from './layouts/components/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAddConditionComponent } from './pages/terms-add-condition/terms-add-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CommentItemComponent } from './comments/comment-item/comment-item.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NoSubscriptionLayoutComponent } from './layouts/no-subscription-layout/no-subscription-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeDashboardComponent } from './pages/dashboard/home-dashboard/home-dashboard.component';
import { ItemListDashboardComponent } from './pages/dashboard/home-dashboard/item-list-dashboard/item-list-dashboard.component';
import {MatIconModule} from "@angular/material/icon";
import { CategoriesDashboardComponent } from './pages/dashboard/categories-dashboard/categories-dashboard.component';
import { CategoryFormComponent } from './pages/dashboard/categories-dashboard/category-form/category-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CategoryListComponent } from './pages/dashboard/categories-dashboard/category-list/category-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { PostsDashboardComponent } from './pages/dashboard/posts-dashboard/posts-dashboard.component';
import { AddNewBlogFormComponent } from './pages/dashboard/posts-dashboard/add-new-blog-form/add-new-blog-form.component';
import {MatSelectModule} from "@angular/material/select";
import {AngularEditorModule} from "@kolkov/angular-editor";
import { ListPostBlogComponent } from './pages/dashboard/posts-dashboard/list-post-blog/list-post-blog.component';
import {NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SubscriptionDashboardComponent } from './pages/dashboard/subscription-dashboard/subscription-dashboard.component';
import { ListSubscriptionComponent } from './pages/dashboard/subscription-dashboard/list-subscription/list-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAddConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    PostCardComponent,
    CommentItemComponent,
    DefaultLayoutComponent,
    NoSubscriptionLayoutComponent,
    DashboardLayoutComponent,
    HomeDashboardComponent,
    ItemListDashboardComponent,
    CategoriesDashboardComponent,
    CategoryFormComponent,
    CategoryListComponent,
    PostsDashboardComponent,
    AddNewBlogFormComponent,
    ListPostBlogComponent,
    LoginComponent,
    RegisterComponent,
    SubscriptionDashboardComponent,
    ListSubscriptionComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        AngularEditorModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
