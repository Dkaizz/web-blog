import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  listNav = [
    {
      title:"Home",
      href:""
    },{
      title:"Terms & Conditions",
      href:""
    },{
      title:"About",
      href:""
    },{
      title:"Contact",
      href:""
    },
  ]
}
