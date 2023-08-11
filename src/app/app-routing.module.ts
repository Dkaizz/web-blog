import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {TermsAddConditionComponent} from "./pages/terms-add-condition/terms-add-condition.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {NoSubscriptionLayoutComponent} from "./layouts/no-subscription-layout/no-subscription-layout.component";
import {DashboardLayoutComponent} from "./layouts/dashboard-layout/dashboard-layout.component";
import {HomeDashboardComponent} from "./pages/dashboard/home-dashboard/home-dashboard.component";
import {CategoriesDashboardComponent} from "./pages/dashboard/categories-dashboard/categories-dashboard.component";
import {PostsDashboardComponent} from "./pages/dashboard/posts-dashboard/posts-dashboard.component";
import {AddNewBlogFormComponent} from "./pages/dashboard/posts-dashboard/add-new-blog-form/add-new-blog-form.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {AuthGuard} from "./auth.guard";
import {
  SubscriptionDashboardComponent
} from "./pages/dashboard/subscription-dashboard/subscription-dashboard.component";

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'category/:id', component: SingleCategoryComponent},
      {path: 'post/:id', component: SinglePostComponent},
    ]
  }, {
    path: '', component: NoSubscriptionLayoutComponent, children: [
      {path: 'about', component: AboutUsComponent},
      {path: 'contact', component: ContactUsComponent},
      {path: 'terms-add-condition', component: TermsAddConditionComponent}
    ]
  }, {
    path: '', component: DashboardLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register',component: RegisterComponent}
    ]
  }, {
    path: 'dashboard', component: DashboardLayoutComponent,canActivate: [AuthGuard], children: [
      {
        path: '', component: HomeDashboardComponent,canActivate: [AuthGuard]
      }, {path: 'categories', component: CategoriesDashboardComponent,canActivate: [AuthGuard]}
      , {path: 'posts', component: PostsDashboardComponent,canActivate: [AuthGuard]},
      {path: 'subs', component: SubscriptionDashboardComponent,canActivate: [AuthGuard]},
      {path: 'posts/add', component: AddNewBlogFormComponent,canActivate: [AuthGuard]},
      {path: 'posts/edit/:id', component: AddNewBlogFormComponent,canActivate: [AuthGuard]}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
