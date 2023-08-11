import {Component, Input} from '@angular/core';
import {ItemListDashboard} from "../../../../model/item-list-dashboard";



@Component({
  selector: 'app-item-list-dashboard',
  templateUrl: './item-list-dashboard.component.html',
  styleUrls: ['./item-list-dashboard.component.scss']
})


export class ItemListDashboardComponent {

  @Input() item!:ItemListDashboard;
}
