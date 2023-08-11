import {Component} from '@angular/core';
import {ItemListDashboard} from "../../../model/item-list-dashboard";

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent {

  litsItem: ItemListDashboard[] = [{
    title : 'category',
    icon: 'list_alt',
    des: "Quản lý thể loại",
    href:'categories'
  },{
    title : 'post',
    icon: 'post_add',
    des: "Quản lý bài đăng",
    href:'posts'

  },{
    title : 'sub',
    icon: 'group',
    des: "Quản lý người đăng ký",
    href:'subs'

  }]
}

//
// {
//   title='category',
//     icon:'ListAlt',
//   des:"Quản lý thể loại"
// }
